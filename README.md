# [Emon Dey — Digital CV](https://emon-dey.github.io/webpage/)

A static personal website hosted on GitHub Pages. No framework, package installation, or build step is required.

## Files

| File | Purpose |
| --- | --- |
| `js/content.js` | Edit news, publications, projects, showcase entries, experience, awards, talks, and helpful links here. |
| `js/main.js` | Renders content and handles tabs and news interactions. |
| `index.html` | Page structure, profile, About/Research, education, teaching, skills, and service. |
| `css/main.css`, `jemdoc.css` | Existing styles and responsive layouts. |
| `images/` | Profile photos and other images. |

## Updating content

Open `js/content.js` and edit the appropriate array in `siteContent`. Entries appear in the order written: put new announcements or papers at the top. Keep commas between entries and put text in quotes. All text fields are plain text; HTML is unnecessary. Escape double quotes inside a double-quoted string as `\"`.

For example, insert this object at the beginning of `news` and replace the example text:

```javascript
{
  date: "November 2026",
  title: "New research announcement",
  description: "Describe the announcement here.",
  link: "#publications",
  linkText: "View publications"
},
```

The website generates the button and details automatically and opens the first announcement. `listTitle` and `listDate` are optional overrides for different button wording; most new announcements can omit them. Use an empty `link` to omit the news link.

For a publication, add an entry like:

```javascript
{
  venue: "Conference name 2026",
  authors: "Dey, E., and collaborators.",
  title: "Your publication title.",
  links: {
    paper: "https://example.com/paper",
    code: "",
    slides: ""
  }
},
```

Paper, Code, and Slides links appear only when their URLs are filled in. The name `Dey, E.` is emphasized automatically; an optional `award` field adds an award after the title. Previously commented-out publication URLs are preserved as comments beside their entries; copy a URL into `links` when you want it displayed.

Other sections use these fields; copy an existing entry as a starting point:

| Array | Entry fields |
| --- | --- |
| `projects` | `title`, `period`, `description` (bullet strings), `links` (objects with `label` and `url`); optional `numbered: true` automatically numbers numbered projects. |
| `projectShowcase` | `date`, `description`. |
| `experience` | `title`, `organization` (institution, dates, location), `description` (paragraph strings); optional `advisor` with `name` and `url`. |
| `awards` | `text`; optional `link` with `label` and `url`, displayed before the text. Include a leading space in `text` after a link. |
| `talks` | `date`, `title`, `event`. |
| `helpfulLinks` | A group `title` and `links` array; each link has `label` and `url`. |

Project and resource links with empty URLs are omitted. Existing disabled project placeholders are retained to preserve their appearance. To activate one, replace `#` with its URL and remove `disabled: true`.

## Preview and publish

Open `index.html` in a browser, or run `python3 -m http.server 8000` from this folder and visit `http://localhost:8000`. JavaScript must be enabled to display the content managed by `content.js`.

Refresh after editing, check the relevant tabs and news items, then commit and push the changed files to the repository branch configured for GitHub Pages. Include both JavaScript files when publishing the initial refactor. Domain settings are managed separately in GitHub Pages and your DNS provider.
