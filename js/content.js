// Website content: edit entries here, then refresh index.html to preview.
// Keep entries in the order you want them displayed; no dates are sorted automatically.
// Text is plain text (no HTML). Keep commas between entries and quote all strings.
const siteContent = {
  // Add new announcements at the top. The first entry opens automatically.
  // listTitle/listDate are optional overrides for the button when its wording differs.
  news: [
    {
      "date": "October 2026",
      "title": "Joined Los Alamos National Laboratory.",
      "description": "Started working as a Postdoctoral Research Associate in the Energy and Natural Resources Security Group within the Earth and Environmental Sciences (EES) Division at Los Alamos National Laboratory (LANL).",
      "link": "#experience",
      "linkText": "View experience"
    },
    {
      "date": "September 2026",
      "title": "Paper accepted at SC workshop'26.",
      "description": "Paper on Scaling Laws for Physics-Aware ACOPF Surrogate Learning accepted at the AI4Science workshop, co-located with SC 2026.",
      "link": "https://arxiv.org/pdf/2609.16282",
      "linkText": "Read Paper"
    },
    {
      "date": "April 2026",
      "title": "SYNAPS-I featured by APS News",
      "description": "Project on building a Foundation Model for real-time Ptychographic Reconstruction at beamlines was featured by APS News.",
      "link": "https://www.aps.anl.gov/APS-News/2026-04-02/real-time-ai-engine-poised-to-revolutionize-large-scale-imaging-data-at",
      "linkText": "Read feature",
      "listTitle": "SYNAPS-I project featured by Argonne APS News."
    },
    {
      "date": "April 2026",
      "title": "GridMind featured by Argonne MCS News",
      "description": "The GridMind project is developing an agentic AI system as a reasoning co-pilot for power-system operators.",
      "link": "https://www.anl.gov/article/gridmind-powering-the-control-room-of-the-future-with-ai-agents",
      "linkText": "Read feature",
      "listDate": "2026",
      "listTitle": "GridMind project featured by Argonne MCS News."
    },
    {
      "date": "2026",
      "title": "Works accepted at ICML, PerCom, ISVLSI, and ICCCN",
      "description": "FedQueue, Fed-CASQ, FedGALP, and SERN works got accepted in ICML, PerCom, ISVLSI, and ICCCN 2026.",
      "link": "#publications",
      "linkText": "View publications",
      "listTitle": "Works accepted at ICML, PerCom, ISVLSI, and ICCCN 2026."
    },
    {
      "date": "Apr. 2025",
      "title": "Joined Argonne National Laboratory",
      "description": "Started as a Postdoctoral Appointee in the Mathematics and Computer Science Division, advised by Dr. Kibaek Kim.",
      "link": "#experience",
      "linkText": "View experience",
      "listDate": "April 2025",
      "listTitle": "Joined Argonne National Laboratory as a Postdoctoral Appointee."
    },
    {
      "date": "2025",
      "title": "Works in proceedings",
      "description": "WIREs survey on Efficient Vision-Language models, TAVIC-DAS (PerCom Workshop), E2RespUNet (SMARTCOMP), CoOpTex (DCOSS-IoT), and DACC-Comm (COMSNETS) are in proceedings now.",
      "link": "#publications",
      "linkText": "View publications",
      "listTitle": "Survey on Efficient Vision-Language models, TAVIC-DAS, E2RespUNet, CoOpTex, and DACC-Comm works are in proceedings now."
    }
  ],

  // Add new papers at the top. Put URLs in links to show Paper, Code, or Slides.
  // Empty URLs stay hidden. Titles include their original ending punctuation.
  // Previously commented-out URLs are retained in comments beside the original entry.
  publications: [
    {
      "venue": "ICML 2026",
      "authors": "Li, Y., Dey, E., Li, Z., Raghavan, K., Madduri, R., and Kim, K.",
      "title": "FedQueue: Queue-Aware Federated Learning for Cross-Facility HPC Training.",
      "links": {
        "paper": "",
        "code": "",
        "slides": ""
      }
    },
    {
      "venue": "PerCom 2026",
      "authors": "Dey, E., Ravi, A., Shinde, G., Chugh, G., Ghosh, I., Misra, A., and Roy, N.",
      "title": "Fed-CASQ: Enhancing Class-Wise Accuracy in Pervasive Federated Learning with Class-Aware Scaling and Quantization.",
      "links": {
        "paper": "",
        "code": "",
        "slides": ""
      }
    },
    {
      "venue": "ISVLSI 2026",
      "authors": "Dey, E., Hasan, Z., and Roy, N.",
      "title": "FedGALP: Federated Generative Adversarial Learning for Remote Photoplethysmography.",
      "links": {
        "paper": "",
        "code": "",
        "slides": ""
      }
    },
    {
      "venue": "ICCCN 2026",
      "authors": "Hossain, J., Dey, E., Chugh, S., Ahmed, M., Anwar, M. S., Faridee, A. Z., and Roy, N.",
      "title": "SERN: Simulation-Enhanced Realistic Navigation for Multi-Agent Robotic Systems in Contested Environments.",
      "links": {
        "paper": "",
        "code": "",
        "slides": ""
      }
    },
    // Previously hidden URLs: {"paper": "https://wires.onlinelibrary.wiley.com/doi/abs/10.1002/widm.70036"}
    {
      "venue": "WIREs DMKD 2025",
      "authors": "Shinde, G., Ravi, A., Dey, E., Sakib, S., Rampure, M., and Roy, N.",
      "title": "A Survey on Efficient Vision-Language Models.",
      "links": {
        "paper": "",
        "code": "",
        "slides": ""
      }
    },
    {
      "venue": "ACM TAAS 2025",
      "authors": "Anwar, M. S., Ravi, A., Dey, E., Ghosh, I., Ahmed, M., and Roy, N.",
      "title": "MobHeteroCAS: Mobility-Aware DNN Task Scheduling in Heterogeneous Collaborative Autonomous Systems.",
      "links": {
        "paper": "",
        "code": "",
        "slides": ""
      }
    },
    {
      "venue": "PeRConAI 2025",
      "authors": "Shinde, G., Ravi, A., Dey, E., Lewis, J., and Roy, N.",
      "title": "TAVIC-DAS: Task and Channel-Aware Variable-Rate Image Compression for Distributed Autonomous System.",
      "links": {
        "paper": "",
        "code": "",
        "slides": ""
      }
    },
    {
      "venue": "SMARTCOMP 2025",
      "authors": "Sakib, S., Shinde, G., Dey, E., and Roy, N.",
      "title": "E2RespUNet: End-to-End Respiratory Signal Reconstruction and Rate Prediction Using a Unified Attention-Enhanced U-Net.",
      "links": {
        "paper": "",
        "code": "",
        "slides": ""
      }
    },
    {
      "venue": "DCOSS-IoT 2025",
      "authors": "Anwar, M. S., Ravi, A., Dey, E., Ghosh, I., Ahmed, M., and Roy, N.",
      "title": "CoOpTex: Multimodal Cooperative Perception and Task Execution in Time-critical Distributed Autonomous Systems.",
      "links": {
        "paper": "",
        "code": "",
        "slides": ""
      }
    },
    {
      "venue": "COMSNETS 2025",
      "authors": "Dey, E., Ravi, A., Lewis, J., Kumar, V. K., Freeman, J., Gregory, T., Suri, N., Busart, C., and Roy, N.",
      "title": "DACC-Comm: DNN-Powered Adaptive Compression and Flow Control for Robust Communication in Network-Constrained Environments.",
      "links": {
        "paper": "",
        "code": "",
        "slides": ""
      }
    },
    // Previously hidden URLs: {"paper": "https://ieeexplore.ieee.org/document/10230109"}
    {
      "venue": "ICCCN 2023",
      "authors": "Dey, E., Walczak, M., Anwar, M. S., Roy, N., Freeman, J., Gregory, T., and Busart, C.",
      "title": "A Novel ROS2 QoS Policy-Enabled Synchronizing Middleware for Co-Simulation of Heterogeneous Multi-Robot Systems.",
      "links": {
        "paper": "",
        "code": "",
        "slides": ""
      }
    },
    // Previously hidden URLs: {"paper": "https://ieeexplore.ieee.org/abstract/document/10298549"}
    {
      "venue": "MASS 2023",
      "authors": "Anwar, M. S., Dey, E., Devnath, M. K., Ghosh, I., Khan, N., Freeman, J., Gregory, T., Suri, N., Jayaraja, K., Ramamurthy, S. R., and Roy, N.",
      "title": "HeteroEdge: Addressing Asymmetry in Heterogeneous Collaborative Autonomous Systems.",
      "links": {
        "paper": "",
        "code": "",
        "slides": ""
      }
    },
    // Previously hidden URLs: {"paper": "https://ieeexplore.ieee.org/document/10207645"}
    {
      "venue": "SMARTCOMP 2023",
      "authors": "Devnath, M. K., Chakma, A., Conn, M., Hasan, Z., Dey, E., Anwar, M. S., Pal, B., and Roy, N.",
      "title": "A Systematic Study on Object Recognition Using Millimeter-wave Radar.",
      "links": {
        "paper": "",
        "code": "",
        "slides": ""
      }
    },
    // Previously hidden URLs: {"paper": "https://openaccess.thecvf.com/content/CVPR2023W/FedVision/papers/Ovi_Mixed_Quantization_Enabled_Federated_Learning_To_Tackle_Gradient_Inversion_Attacks_CVPRW_2023_paper.pdf"}
    {
      "venue": "CVPRW 2023",
      "authors": "Ovi, P. R., Dey, E., Roy, N., and Gangopadhyay, A.",
      "title": "Mixed Quantization Enabled Federated Learning to Tackle Gradient Inversion Attacks.",
      "links": {
        "paper": "",
        "code": "",
        "slides": ""
      }
    },
    // Previously hidden URLs: {"paper": "https://www.spiedigitallibrary.org/conference-proceedings-of-spie/12113/121130M/Towards-developing-a-data-security-aware-federated-training-framework-in/10.1117/12.2618904.short?SSO=1", "code": "https://github.com/Emon-dey/Classification-via-Multi-modal-data"}
    {
      "venue": "SPIE 2022",
      "authors": "Ovi, P. R., Dey, E., Roy, N., Gangopadhyay, A., and Erbacher, R. F.",
      "title": "Towards Developing a Data Security Aware Federated Training Framework in Multi-modal Contested Environments.",
      "award": "Best Paper Award.",
      "links": {
        "paper": "",
        "code": "",
        "slides": ""
      }
    },
    // Previously hidden URLs: {"paper": "https://ieeexplore.ieee.org/abstract/document/9881671"}
    {
      "venue": "DCOSS 2022",
      "authors": "Dey, E., Hossain, J., Roy, N., and Busart, C.",
      "title": "SynchroSim: An Integrated Co-simulation Middleware for Heterogeneous Multi-robot System.",
      "links": {
        "paper": "",
        "code": "",
        "slides": ""
      }
    },
    // Previously hidden URLs: {"paper": "https://ieeexplore.ieee.org/abstract/document/9821103", "code": "https://github.com/Emon-dey/Device-implementation-of-rppg"}
    {
      "venue": "SMARTCOMP 2022",
      "authors": "Hasan, Z., Dey, E., Ramamurthy, S. R., Roy, N., and Misra, A.",
      "title": "RhythmEdge: Enabling Contactless Heart Rate Estimation on the Edge.",
      "award": "Best Paper Award.",
      "links": {
        "paper": "",
        "code": "",
        "slides": ""
      }
    },
    // Previously hidden URLs: {"paper": "https://ieeexplore.ieee.org/document/9821075", "code": "https://github.com/Emon-dey/Device-implementation-of-rppg"}
    {
      "venue": "SMARTCOMP 2022 Demo",
      "authors": "Hasan, Z., Dey, E., Ramamurthy, S. R., Roy, N., and Misra, A.",
      "title": "Demo: RhythmEdge: Enabling Contactless Heart Rate Estimation on the Edge.",
      "links": {
        "paper": "",
        "code": "",
        "slides": ""
      }
    },
    // Previously hidden URLs: {"paper": "https://ieeexplore.ieee.org/abstract/document/9556252", "code": "https://github.com/Emon-dey/Accident-risk-prediction"}
    {
      "venue": "SMARTCOMP 2021",
      "authors": "Ovi, P. R., Dey, E., Roy, N., and Gangopadhyay, A.",
      "title": "ARIS: A Real-Time Edge Computed Accident Risk Inference System.",
      "links": {
        "paper": "",
        "code": "",
        "slides": ""
      }
    },
    // Previously hidden URLs: {"paper": "https://ieeexplore.ieee.org/abstract/document/9288008"}
    {
      "venue": "BIBE 2020",
      "authors": "Dey, E., and Roy, N.",
      "title": "OMAD: On-device Mental Anomaly Detection for Substance and Non-Substance Users.",
      "links": {
        "paper": "",
        "code": "",
        "slides": ""
      }
    },
    // Previously hidden URLs: {"paper": "https://ieeexplore.ieee.org/abstract/document/9033597", "code": "https://github.com/Emon-dey/Directive-Contrast"}
    {
      "venue": "I2CT 2019",
      "authors": "Mazumder, A. N., Dey, E., and Majumder, S.",
      "title": "A Color Image Watermarking Scheme Employing the Features of Directive Contrast in the DWT-SVD Domain.",
      "links": {
        "paper": "",
        "code": "",
        "slides": ""
      }
    },
    // Previously hidden URLs: {"paper": "https://ieeexplore.ieee.org/abstract/document/8275190", "code": "https://github.com/Emon-dey/DWT-SVD"}
    {
      "venue": "EICT 2017",
      "authors": "Dey, E., Majumder, S., and Mazumder, A. N.",
      "title": "A New Approach to Color Image Watermarking Based on Joint DWT-SVD Domain in YIQ Color Space.",
      "links": {
        "paper": "",
        "code": "",
        "slides": ""
      }
    },
    {
      "venue": "Under Review",
      "authors": "Raghavan, K., Dey, E., Hahn, S., Munson, T., Li, Y., and Kim, K.",
      "title": "The Foundations of Ensemble Continual Learning in Federated Learning.",
      "links": {
        "paper": "",
        "code": "",
        "slides": ""
      }
    },
  ],

  // Each entry creates an expandable card. numbered: true adds Project 1, 2, etc.
  // For new resource links, use { label: "Code", url: "https://..." }.
  // Empty URLs are hidden. Existing disabled placeholders are preserved.
  projects: [
    {
      "title": "SYNAPS-I: Synergistic Neutron and Photon Autonomous Science-Imaging",
      "period": "Oct. 2025 - Sep. 2026",
      "description": [
        "Designed a physics-aware Vision Transformer for 2D ptychography generalized across thousands of probes.",
        "Optimized the ViT model for large-scale training on Perlmutter and Aurora, scaling up to 24,576 GPUs.",
        "Designed a fine-tuning pipeline with the trained ViT model to facilitate real-time deployment at the beamline."
      ],
      "links": [
        {
          "label": "Media",
          "url": "https://www.aps.anl.gov/APS-News/2026-04-02/real-time-ai-engine-poised-to-revolutionize-large-scale-imaging-data-at"
        },
        {
          "label": "Code",
          "url": "https://github.com/SYNAPS-I/"
        }
      ],
      "numbered": true
    },
    {
      "title": "GridMind: Powering the Control Room of the Future with AI Agents",
      "period": "Mar. 2026 - Sep. 2026",
      "description": [
        "Investigating data and model scaling performance of the proposed Lumina model with heterogeneous graph architecture.",
        "Designing IsoFLOP experiments to reveal compute-optimal balance between model size and training data allocation.",
        "Deploying the Lumina model across multiple DOE supercomputers to conduct federated training."
      ],
      "links": [
        {
          "label": "Media",
          "url": "https://www.anl.gov/article/gridmind-powering-the-control-room-of-the-future-with-ai-agents"
        },
        {
          "label": "Code",
          "url": "https://github.com/argonne-gridfm"
        }
      ],
      "numbered": true
    },
    {
      "title": "AI4S Continual Federated Learning under Intermittent Client Participation",
      "period": "Jun. 2025 - Sep. 2026",
      "description": [
        "Collaborating to develop the foundations of ensemble continual learning in federated learning settings.",
        "Explored the impact of arbitrary arrival and dropping off of client nodes on server aggregation.",
        "Designed the experimental setting to test the proposed ensemble continual learning algorithm."
      ],
      "links": [
        {
          "label": "Project page",
          "url": "#",
          "disabled": true
        },
        {
          "label": "Code",
          "url": "#",
          "disabled": true
        },
        {
          "label": "Related manuscript",
          "url": "#publications"
        }
      ],
      "numbered": true
    },
    {
      "title": "AI4S Asynchronous Federated Learning for High Performance Computing",
      "period": "Aug. 2025 - Sep. 2026",
      "description": [
        "Tackled varied queuing times across multiple DOE supercomputers while deploying federated learning.",
        "Implemented a queue-delay-aware asynchronous training framework and tested it in simulation.",
        "Successfully deployed the proposed framework across Aurora, Perlmutter, Polaris, and Frontier."
      ],
      "links": [
        {
          "label": "Project page",
          "url": "#",
          "disabled": true
        },
        {
          "label": "Code",
          "url": "#",
          "disabled": true
        },
        {
          "label": "Related publication",
          "url": "#publications"
        }
      ],
      "numbered": true
    },
    {
      "title": "Remote Robotic Experimentation using Distributed Virtual Proving Ground, DEVCOM ARL",
      "period": "Summer 2021 - Spring 2025",
      "description": [
        "Demonstrated components that leverage ARL's Distributed Virtual Proving Ground infrastructure.",
        "Conducted field experimentation to demonstrate class-incremental federated learning.",
        "Deployed a lightweight simultaneous localization and mapping system on Clearpath Jackal and SPOT.",
        "Monitored robotic agents' movements and actions from a long-distance remote location."
      ],
      "links": [
        {
          "label": "Project page",
          "url": "https://artiamas.umd.edu/2023-field-experiment/"
        },
        {
          "label": "Code",
          "url": "https://github.com/mahmed10/CRA7_demo"
        },
        {
          "label": "Media",
          "url": "https://www.cbsnews.com/baltimore/news/cutting-edge-umbc-research-uses-artificial-intelligence-and-robots-to-assist-national-security/"
        }
      ]
    },
    {
      "title": "Robust Deep Learning Models for Securing Multi-domain Autonomous Cyber-Physical Systems, ONR",
      "period": "Spring 2023 - Spring 2025",
      "description": [
        "Developed a model-poisoning-attack-resistant federated learning approach for camouflaged and occluded object detection.",
        "Developed a robust federated learning approach for camouflaged and occluded multi-class object detection.",
        "Integrated adaptive quantization-based compressive modeling to reduce communication overhead.",
        "Tackled global and local class imbalances using customized Layer-wise Relevance Propagation."
      ],
      "links": [
        {
          "label": "Project page",
          "url": "#",
          "disabled": true
        },
        {
          "label": "Code",
          "url": "#",
          "disabled": true
        },
        {
          "label": "Related publications",
          "url": "#publications"
        }
      ]
    },
    {
      "title": "Resilient and Effective Communication and Sensing for Autonomous Platforms and Systems, NSF",
      "period": "Spring 2021 - Spring 2025",
      "description": [
        "Explored communication challenges in non-line-of-sight scenarios within ROS-compatible networks.",
        "Designed data-security-aware low-power communication protocols in adversarial contexts.",
        "Proposed a modified sliding-window protocol for high velocity disparity among robotic agents."
      ],
      "links": [
        {
          "label": "Project page",
          "url": "https://mpsc.umbc.edu/projects/robsencom",
          "disabled": true
        },
        {
          "label": "Code",
          "url": "https://github.com/Emon-dey/RobSenCom"
        },
        {
          "label": "Related publications",
          "url": "#publications"
        }
      ]
    },
    {
      "title": "Asynchronous Federated Training in Multi-Modal Contested Environment, DEVCOM ARL",
      "period": "Fall 2022 - Spring 2024",
      "description": [
        "Developed a multi-modal deep model for object detection using image and acoustic data in contested environments.",
        "Addressed data distribution, synchronization, communication overhead, and security issues for asynchronous federated learning.",
        "Proposed a multi-modal federated training setup to reduce resource overhead using 2-bit quantization-based compression."
      ],
      "links": [
        {
          "label": "Project page",
          "url": "#",
          "disabled": true
        },
        {
          "label": "Code",
          "url": "https://github.com/Emon-dey/Classification-via-Multi-modal-data"
        },
        {
          "label": "Related publication",
          "url": "#publications"
        }
      ]
    }
  ],

  // Project demonstrations, displayed in this order.
  projectShowcase: [
    {
      "date": "August 1, 2024",
      "description": "Cross-institutional Remote Robotics Experimentation using ARL's Distributed Virtual Proving Ground Facility, ARL R2C2, Graces Quarters, Maryland."
    },
    {
      "date": "August 2, 2023",
      "description": "Enhancing Situational Awareness with Federated Learning using DVPG, ARL R2C2, Graces Quarters, Maryland."
    },
    {
      "date": "August 2, 2022",
      "description": "AI-Enabled Decision Making in Multiple Domains, ARL R2C2, Graces Quarters, Maryland."
    },
    {
      "date": "April 27, 2022",
      "description": "Deploying Federated Learning via ARL's DVPG Network, RetriEVER Empowered, UMBC."
    }
  ],

  // Positions, newest first. Advisor is optional; description is a list of paragraphs.
  experience: [
    {
      "title": "Postdoctoral Research Associate, EES Division",
      "organization": "Los Alamos National Laboratory, Oct. 2026 - Present, Los Alamos, NM",
      "description": [
        "Working on machine learning-based surrogate modeling of disturbance propagation across interconnected power system infrastructures."
      ],
      "advisor": {
        "name": "Dr. Mohamed Mehana",
        "url": "https://laro.lanl.gov/esploro/profile/mohamed_mehana/overview"
      }
    },
    {
      "title": "Postdoctoral Appointee, MCS Division",
      "organization": "Argonne National Laboratory, Apr. 2025 - September 2026, Lemont, IL",
      "description": [
        "Worked on multi-modal Vision Transformers for diffraction imaging, queue-aware asynchronous federated learning for HPC, federated learning for electrical smart-grid systems, and continual federated learning."
      ],
      "advisor": {
        "name": "Dr. Kibaek Kim",
        "url": "https://www.anl.gov/profile/kibaek-kim"
      }
    },
    {
      "title": "Graduate Research Assistant, CARDS Lab",
      "organization": "University of Maryland, Baltimore County, Aug. 2021 - Apr. 2025, Baltimore, MD",
      "description": [
        "Conducted research on decentralized multi-master ROS systems for communication between UAVs and UGVs, remote robotic experimentation, and robust federated learning for autonomous systems."
      ]
    },
    {
      "title": "Graduate Research Assistant, MPSC Lab",
      "organization": "University of Maryland, Baltimore County, Aug. 2019 - Jul. 2020, Baltimore, MD",
      "description": [
        "Worked on accelerating transfer learning on edge devices by reducing negative transfer and developed DeepIoT for human activity recognition on IoT devices using deep models."
      ]
    },
    {
      "title": "Graduate Teaching Assistant, Department of Information Systems",
      "organization": "University of Maryland, Baltimore County, Aug. 2020 - May 2021, Baltimore, MD",
      "description": [
        "Supported courses on Decision Support Systems, Machine Learning Basics, and Database Application Development."
      ]
    },
    {
      "title": "Lecturer",
      "organization": "Port City International University, Sep. 2018 - Jul. 2019",
      "description": [
        "Taught undergraduate electrical engineering courses including machine design, power systems, and digital signal processing."
      ]
    },
    {
      "title": "Student Mentor, NSF-REU",
      "organization": "University of Maryland, Baltimore County, Summer 2021, 2022, 2023",
      "description": [
        "Supervised student projects in multi-robot middleware, contactless heart-rate monitoring, quantized federated learning, and statistical heterogeneity in federated learning for sea-ship datasets."
      ]
    }
  ],

  // Text entries may optionally start with a link.
  awards: [
    {
      "text": "Best Paper Awards at IEEE SMARTCOMP 2022 and SPIE 2022."
    },
    {
      "link": {
        "url": "https://www.aps.anl.gov/APS-News/2026-04-02/real-time-ai-engine-poised-to-revolutionize-large-scale-imaging-data-at",
        "label": "SYNAPS-I real-time AI imaging project"
      },
      "text": " featured by APS News, Argonne National Laboratory, 2026."
    },
    {
      "link": {
        "url": "https://www.anl.gov/article/gridmind-powering-the-control-room-of-the-future-with-ai-agents",
        "label": "GridMind agentic AI project"
      },
      "text": " featured by Argonne MCS News, 2026."
    },
    {
      "link": {
        "url": "https://www.cbsnews.com/baltimore/news/cutting-edge-umbc-research-uses-artificial-intelligence-and-robots-to-assist-national-security/",
        "label": "Remote robotics experimentation project"
      },
      "text": " featured by CBS News Baltimore, 2023."
    },
    {
      "text": "Student travel grants for BIBE 2020, SPIE 2022, DCOSS 2022, and ICCCN 2023."
    },
    {
      "text": "Audience choice award at UMBC IS Research Symposium."
    }
  ],

  // Presentations in display order.
  talks: [
    {
      "date": "April 15, 2025",
      "title": "Quantized Federated Learning over Data Imbalance and Lossy Communication Channels",
      "event": "IS 698/800 Advanced Deep Learning Techniques."
    },
    {
      "date": "October 17, 2024",
      "title": "Introduction to Crazyflie Functionalities and ROS Integration",
      "event": "IS 709/809 Computational Methods for IS Research."
    },
    {
      "date": "September 17, 2024",
      "title": "Towards Resilient and Secure Federated Learning: Tackling Non-IID Data, Communication Challenges, and Data Security Threats",
      "event": "Argonne MCS Candidate Seminar."
    },
    {
      "date": "February 21-22, 2024",
      "title": "Resilient and Effective Communication and Sensing for Autonomous Vehicles and Systems",
      "event": "ArtIAMAS Winter Meeting and Annual Review."
    },
    {
      "date": "February 13-14, 2023",
      "title": "A Reliable and Low-latency Synchronizing Middleware for Co-simulation of a Heterogeneous Multi-robot System",
      "event": "ArtIAMAS Year 3 Kickoff Meeting."
    },
    {
      "date": "September 29, 2022",
      "title": "Robot Operating System (ROS)",
      "event": "IS 709/809 Computational Methods for IS Research."
    },
    {
      "date": "March 16-17, 2022",
      "title": "Decentralized Multi-master ROS System for Communication Between UGVs and UAVs",
      "event": "ArtIAMAS Annual Review."
    },
    {
      "date": "November 3, 2020",
      "title": "Neural Networks",
      "event": "IS 425 Decision Support Systems."
    }
  ],

  // Resource groups and links, displayed in this order.
  helpfulLinks: [
    {
      "title": "Edge Computing",
      "links": [
        {
          "label": "Demystifying Edge Computing",
          "url": "https://www.forbes.com/sites/janakirammsv/2017/09/15/demystifying-edge-computing-device-edge-vs-cloud-edge/"
        },
        {
          "label": "What is edge computing?",
          "url": "https://www.ge.com/digital/blog/six-important-questions-ask-your-edge-computing-provider"
        },
        {
          "label": "Fog Computing: A Platform for IoT and Analytics",
          "url": "https://link.springer.com/chapter/10.1007/978-3-319-05029-4_7"
        },
        {
          "label": "The Emergence of Edge Computing",
          "url": "https://ieeexplore.ieee.org/abstract/document/7807196"
        }
      ]
    },
    {
      "title": "Federated Learning and Model Compression",
      "links": [
        {
          "label": "TensorFlow Federated Tutorials",
          "url": "https://www.tensorflow.org/federated/tutorials/tutorials_overview"
        },
        {
          "label": "Flower",
          "url": "https://flower.dev/"
        },
        {
          "label": "Awesome Federated Learning",
          "url": "https://github.com/chaoyanghe/Awesome-Federated-Learning"
        },
        {
          "label": "Model Compression Papers",
          "url": "https://github.com/chester256/Model-Compression-Papers"
        },
        {
          "label": "TensorFlow Model Optimization",
          "url": "https://www.tensorflow.org/model_optimization/guide"
        }
      ]
    },
    {
      "title": "Robot Operating Systems",
      "links": [
        {
          "label": "Official ROS Website",
          "url": "http://wiki.ros.org/"
        },
        {
          "label": "ROS Tutorials",
          "url": "http://wiki.ros.org/ROS/Tutorials"
        },
        {
          "label": "ROS Index",
          "url": "https://index.ros.org/packages/"
        },
        {
          "label": "ROS Discourse",
          "url": "https://discourse.ros.org/"
        },
        {
          "label": "ROSbag Data Collection",
          "url": "http://wiki.ros.org/rosbag/Commandline/"
        },
        {
          "label": "Swarm robotics with Crazyflie",
          "url": "https://github.com/USC-ACTLab/crazyswarm"
        },
        {
          "label": "Mapping and Navigation with Turtlebot",
          "url": "https://emanual.robotis.com/docs/en/platform/turtlebot3/overview/"
        }
      ]
    }
  ],

};
