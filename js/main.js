// Rendering and interactions. Routine website updates belong in content.js.
(() => {
  'use strict';

  const content = siteContent;
  const container = (name) => document.querySelector(`[data-content="${name}"]`);
  const element = (tag, text, className) => {
    const node = document.createElement(tag);
    if (text !== undefined) node.textContent = text;
    if (className) node.className = className;
    return node;
  };
  const anchor = ({ label, url, disabled }) => {
    const node = element('a', label);
    node.setAttribute('href', url);
    if (disabled) node.setAttribute('aria-disabled', 'true');
    return node;
  };
  const listItem = (text) => element('li', text);
  const renderList = (name, entries, render = listItem) => {
    container(name).replaceChildren(...entries.map(render));
  };

  renderList('publications', content.publications, (publication) => {
    const item = element('li');
    const paragraph = element('p');
    paragraph.append(element('strong', `${publication.venue}:`), ' ');
    // Preserve the author emphasis without requiring HTML in content.js.
    publication.authors.split(/(Dey, E\.)/g).forEach((part) => {
      paragraph.append(part === 'Dey, E.' ? element('b', part) : part);
    });
    paragraph.append(` "${publication.title}"`);
    if (publication.award) paragraph.append(' ', element('b', publication.award));
    item.append(paragraph);

    const labels = { paper: 'Paper', code: 'Code', slides: 'Slides' };
    const links = Object.entries(publication.links || {}).filter(([, url]) => url?.trim());
    if (links.length) {
      const resources = element('p', undefined, 'pub-links');
      links.forEach(([key, url], index) => {
        if (index) resources.append(' ');
        resources.append(anchor({ label: `[${labels[key] || key}]`, url }));
      });
      item.append(resources);
    }
    return item;
  });

  let projectNumber = 0;
  renderList('projects', content.projects, (project) => {
    const card = element('details', undefined, 'project-card');
    const prefix = project.numbered ? `Project ${++projectNumber}: ` : '';
    const summary = element('summary', `${prefix}${project.title} `);
    summary.append(element('span', project.period));
    const description = element('ul');
    description.append(...project.description.map(listItem));
    card.append(summary, description);
    const links = (project.links || []).filter((link) => link.url?.trim());
    if (links.length) {
      const resources = element('div', undefined, 'resource-links');
      links.forEach((link, index) => {
        if (index) resources.append(' ');
        resources.append(anchor(link));
      });
      card.append(resources);
    }
    return card;
  });

  renderList('projectShowcase', content.projectShowcase, (entry) =>
    listItem(`${entry.date}: ${entry.description}`));

  renderList('experience', content.experience, (position) => {
    const item = element('li');
    item.append(element('strong', position.title), element('span', position.organization));
    if (position.advisor) {
      const advisor = element('p', 'Advisor: ');
      advisor.append(anchor({ label: position.advisor.name, url: position.advisor.url }), '.');
      item.append(advisor);
    }
    item.append(...position.description.map((text) => element('p', text)));
    return item;
  });

  renderList('awards', content.awards, (award) => {
    const item = element('li');
    if (award.link) item.append(anchor(award.link));
    item.append(award.text);
    return item;
  });

  renderList('talks', content.talks, (talk) =>
    listItem(`${talk.date}: "${talk.title}," ${talk.event}`));

  // Insert groups directly into the article to preserve existing heading styles.
  const helpfulLinks = document.createDocumentFragment();
  content.helpfulLinks.forEach((group) => {
    const list = element('ul');
    group.links.filter((link) => link.url?.trim()).forEach((link) => {
      const item = element('li');
      item.append(anchor(link));
      list.append(item);
    });
    helpfulLinks.append(element('h3', group.title), list);
  });
  container('helpfulLinks').replaceWith(helpfulLinks);

  const tabButtons = document.querySelectorAll('.tab-button');
  const panels = document.querySelectorAll('.tab-panel');
  function activateTab(target, shouldScroll) {
    if (![...panels].some((panel) => panel.id === target)) return;
    tabButtons.forEach((button) => button.classList.toggle('active', button.dataset.target === target));
    panels.forEach((panel) => panel.classList.toggle('active', panel.id === target));
    if (shouldScroll) {
      document.querySelector('.tab-panels').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  tabButtons.forEach((button) => {
    button.addEventListener('click', () => activateTab(button.dataset.target, true));
  });

  const newsPanel = document.querySelector('.news-panel');
  const newsDate = document.getElementById('panel-date');
  const newsTitle = document.getElementById('panel-title');
  const newsCopy = document.getElementById('panel-copy');
  const newsLink = document.getElementById('panel-link');
  const newsList = container('news');
  let newsTimer;

  function showNews(index, animate = false) {
    const item = content.news[index];
    if (!item) return;
    window.clearTimeout(newsTimer);
    newsList.querySelectorAll('.news-item').forEach((button, buttonIndex) => {
      button.classList.toggle('active', buttonIndex === index);
    });
    const update = () => {
      newsDate.textContent = item.date;
      newsTitle.textContent = item.title;
      newsCopy.textContent = item.description;
      newsLink.hidden = !item.link?.trim();
      newsLink.style.display = newsLink.hidden ? 'none' : '';
      if (!newsLink.hidden) {
        newsLink.setAttribute('href', item.link);
        newsLink.textContent = item.linkText || 'Read more';
      } else {
        newsLink.removeAttribute('href');
        newsLink.textContent = '';
      }
      newsPanel.classList.add('is-visible');
    };
    if (animate) {
      newsPanel.classList.remove('is-visible');
      newsTimer = window.setTimeout(update, 160);
    } else {
      update();
    }
  }

  renderList('news', content.news, (item, index) => {
    const button = element('button', undefined, 'news-item');
    button.type = 'button';
    button.dataset.news = index;
    button.setAttribute('role', 'listitem');
    button.append(element('span', item.listDate || item.date), ` ${item.listTitle || item.title}`);
    button.addEventListener('click', () => showNews(index, true));
    return button;
  });
  document.getElementById('news').style.display = content.news.length ? '' : 'none';
  if (content.news.length) showNews(0);
  else newsPanel.hidden = true;

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href.startsWith('#')) return;
    const target = href.slice(1);
    if (!target) {
      event.preventDefault();
    } else if (document.getElementById(target)?.classList.contains('tab-panel')) {
      event.preventDefault();
      activateTab(target, true);
    }
  });
})();
