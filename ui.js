(function () {
  const translations = {
    zh: {
      brand: "赵宇轩",
      navProfile: "简介",
      navProjects: "项目",
      navSkills: "能力",
      navInterview: "面试",
      navContact: "联系",
      heroBadge: "工业软件 / AI 集成 / 数据中心能源管理",
      heroTitle: "赵宇轩",
      heroSubtitle:
        "计算机科学与技术背景，3 年企业级工业软件开发经验，参与 MES、ERP、EMS、BMS、HMI 与 AI 知识检索系统建设。",
      chipOne: "MES / WAPS",
      chipTwo: "BMS / EMS",
      chipThree: "AI + RAG",
      chipFour: "SCADA / HMI",
      viewProjects: "查看项目",
      viewInterview: "面试亮点",
      heroStatOne: "年级第 2",
      heroStatOneLabel: "专业成绩排名",
      heroStatTwo: "3 年",
      heroStatTwoLabel: "工业软件开发",
      profileKicker: "个人简介",
      profileTitle: "我关注工程落地，也关注系统如何真正服务现场业务。",
      profileBody:
        "我毕业于重庆第二师范学院计算机科学与技术专业，在校专业成绩排名年级第二，获得校级一、二等奖学金。毕业后在惟则信息技术（上海）有限公司工作三年，长期参与制造业、能源管理、数据中心楼宇自控与 AI 资料检索相关项目。",
      eduLabel: "教育背景",
      eduTitle: "重庆第二师范学院",
      eduBody: "计算机科学与技术；专业成绩年级第 2；校级一、二等奖学金。",
      workLabel: "工作经历",
      workTitle: "惟则信息技术（上海）有限公司",
      workBody: "3 年工业软件、企业系统、SCADA/HMI、能源管理与 AI 应用开发经验。",
      targetLabel: "适用场景",
      targetTitle: "考研面试 / 求职 / 项目介绍",
      targetBody: "突出学习能力、工程能力、跨系统集成经验和面向现场问题的解决能力。",
      projectsKicker: "核心项目",
      projectsTitle: "参与过真实业务系统，也独立完成过关键模块。",
      caseOneTitle: "泰国 DAMAC 数据中心 BMS 与能源管理系统",
      caseOneBody:
        "参与 EPMS、CPMS、fitout 核心机房 BMS、HMI 的开发和测试，使用 Schneider PlantSCADA 与 Vijeo（HMIET6700）。独立完成能源管理系统，包括 OPC 数据采集、能源报表和可视化展示。",
      caseTwoTitle: "先正达 MES 与 WAPS 高级排产",
      caseTwoBody:
        "参与 MES 开发工作，开发 WAPS 高级排产能力，围绕生产计划、排产逻辑、现场数据和业务流程完成系统功能建设。",
      caseThreeTitle: "公司 ERP 模块与 AI 资料检索",
      caseThreeBody:
        "参与 ERP 部分模块开发，并接入 AI 能力，涉及 RAG、向量数据库、memory、资料检索等能力，用于提升内部知识查询和业务资料获取效率。",
      caseFourTitle: "广州溢多利 EMS 与 PDA 模块",
      caseFourBody:
        "参与 EMS 约一半模块的开发，并负责 PDA 相关功能建设，覆盖现场移动端数据采集、业务流转和系统联动。",
      skillsKicker: "能力结构",
      skillsTitle: "我的优势在于把业务、系统和现场数据连起来。",
      skillOneTitle: "工业软件开发",
      skillOneBody: "MES、EMS、ERP 模块、排产系统、PDA 移动端与企业内部系统功能开发。",
      skillTwoTitle: "SCADA / HMI / BMS",
      skillTwoBody: "熟悉数据中心 BMS、EPMS、CPMS、PlantSCADA、Vijeo HMI 与现场系统测试。",
      skillThreeTitle: "AI 工具与知识检索",
      skillThreeBody: "熟练运用 AI，理解 RAG、向量数据库、memory、资料检索和企业知识库落地方式。",
      skillFourTitle: "数据采集与可视化",
      skillFourBody: "独立完成 OPC 数据采集、能源报表、可视化展示和面向管理端的数据呈现。",
      interviewKicker: "面试表达",
      interviewTitle: "适合在考研面试和求职中强调的核心叙事。",
      pointOneTitle: "学习能力强",
      pointOneBody: "本科期间专业成绩年级第二，并获得校级一、二等奖学金，能证明持续学习和专业基础。",
      pointTwoTitle: "工程经验完整",
      pointTwoBody: "从制造业 MES/EMS 到数据中心 BMS，再到 ERP 与 AI 检索，经历过多个真实业务系统。",
      pointThreeTitle: "能独立承担模块",
      pointThreeBody: "独立完成过泰国 DAMAC 数据中心能源管理系统，具备从数据采集到报表展示的闭环能力。",
      pointFourTitle: "关注新技术落地",
      pointFourBody: "熟练使用 AI，并参与 RAG、向量数据库、memory 等能力接入，能把新技术转化为业务效率。",
      timelineKicker: "成长路径",
      timelineTitle: "从专业基础到工程现场，再到 AI 应用集成。",
      timeOne: "本科阶段",
      timelineOneTitle: "夯实计算机专业基础",
      timelineOneBody: "计算机科学与技术专业，专业成绩年级第二，获得校级一、二等奖学金。",
      timeTwo: "工作 1-2 年",
      timelineTwoTitle: "参与制造业系统开发",
      timelineTwoBody: "参与先正达 MES/WAPS、ERP 模块、广州溢多利 EMS 和 PDA 等系统建设。",
      timeThree: "工作 3 年",
      timelineThreeTitle: "深入数据中心与能源管理",
      timelineThreeBody: "参与泰国 DAMAC 数据中心 BMS/HMI 开发测试，并独立完成能源管理系统。",
      timeFour: "现在",
      timelineFourTitle: "面向 AI + 工业软件方向继续深化",
      timelineFourBody: "希望在研究生学习或下一份工作中，将工程经验与 AI、数据系统、智能制造结合得更深入。",
      contactKicker: "联系",
      contactTitle: "可用于考研复试自我介绍、求职主页和项目经历展示。",
      contactCta: "可替换为邮箱 / 电话 / 微信",
    },
    en: {
      brand: "Zhao Yuxuan",
      navProfile: "Profile",
      navProjects: "Projects",
      navSkills: "Skills",
      navInterview: "Interview",
      navContact: "Contact",
      heroBadge: "Industrial Software / AI Integration / Data Center Energy",
      heroTitle: "Zhao Yuxuan",
      heroSubtitle:
        "Computer Science and Technology graduate with 3 years of enterprise industrial software experience across MES, ERP, EMS, BMS, HMI, and AI knowledge retrieval systems.",
      chipOne: "MES / WAPS",
      chipTwo: "BMS / EMS",
      chipThree: "AI + RAG",
      chipFour: "SCADA / HMI",
      viewProjects: "View Projects",
      viewInterview: "Interview Highlights",
      heroStatOne: "Ranked #2",
      heroStatOneLabel: "Major ranking",
      heroStatTwo: "3 years",
      heroStatTwoLabel: "Industrial software",
      profileKicker: "Profile",
      profileTitle: "I care about engineering delivery and how systems serve real on-site operations.",
      profileBody:
        "I graduated from Chongqing University of Education, majoring in Computer Science and Technology. I ranked second in my grade and received first- and second-class university scholarships. After graduation, I worked for Weize Information Technology (Shanghai) for three years, focusing on manufacturing systems, energy management, data center BMS, and AI-powered document retrieval.",
      eduLabel: "Education",
      eduTitle: "Chongqing University of Education",
      eduBody: "Computer Science and Technology; ranked #2 in the major; university first- and second-class scholarships.",
      workLabel: "Experience",
      workTitle: "Weize Information Technology (Shanghai) Co., Ltd.",
      workBody: "3 years of industrial software, enterprise systems, SCADA/HMI, energy management, and AI application development.",
      targetLabel: "Use Cases",
      targetTitle: "Graduate interview / Job search / Project profile",
      targetBody: "Highlights learning ability, engineering delivery, cross-system integration, and on-site problem solving.",
      projectsKicker: "Core Projects",
      projectsTitle: "Real business systems, including independently delivered key modules.",
      caseOneTitle: "Thailand DAMAC Data Center BMS and Energy Management",
      caseOneBody:
        "Participated in EPMS, CPMS, fitout core room BMS and HMI development/testing with Schneider PlantSCADA and Vijeo (HMIET6700). Independently delivered an energy management system covering OPC data acquisition, energy reports, and visualization.",
      caseTwoTitle: "Syngenta MES and WAPS Advanced Scheduling",
      caseTwoBody:
        "Participated in MES development and built WAPS advanced scheduling capabilities around production planning, scheduling logic, shop-floor data, and business workflows.",
      caseThreeTitle: "ERP Modules and AI Document Retrieval",
      caseThreeBody:
        "Developed ERP modules and integrated AI capabilities including RAG, vector database, memory, and document retrieval to improve internal knowledge access.",
      caseFourTitle: "Guangzhou VTR EMS and PDA Modules",
      caseFourBody:
        "Developed roughly half of the EMS modules and PDA-related features, covering mobile data collection, workflow execution, and system integration.",
      skillsKicker: "Skill Structure",
      skillsTitle: "My strength is connecting business processes, systems, and on-site data.",
      skillOneTitle: "Industrial Software",
      skillOneBody: "MES, EMS, ERP modules, scheduling systems, PDA mobile workflows, and internal enterprise tools.",
      skillTwoTitle: "SCADA / HMI / BMS",
      skillTwoBody: "Experience with data center BMS, EPMS, CPMS, PlantSCADA, Vijeo HMI, and on-site system testing.",
      skillThreeTitle: "AI and Knowledge Retrieval",
      skillThreeBody: "Skilled with AI tools and familiar with RAG, vector databases, memory, retrieval, and enterprise knowledge bases.",
      skillFourTitle: "Data Acquisition and Visualization",
      skillFourBody: "Independently delivered OPC data acquisition, energy reports, visualization dashboards, and management-facing data views.",
      interviewKicker: "Interview Narrative",
      interviewTitle: "Core points for graduate interviews and job applications.",
      pointOneTitle: "Strong learning ability",
      pointOneBody: "Ranked second in the major and received university scholarships, showing consistent study capability and fundamentals.",
      pointTwoTitle: "Complete engineering exposure",
      pointTwoBody: "Worked across MES/EMS, data center BMS, ERP, and AI retrieval in real business environments.",
      pointThreeTitle: "Independent module ownership",
      pointThreeBody: "Independently delivered the Thailand DAMAC data center energy management system from acquisition to reporting.",
      pointFourTitle: "Practical use of new technology",
      pointFourBody: "Uses AI effectively and has integrated RAG, vector database, and memory capabilities into business workflows.",
      timelineKicker: "Growth Path",
      timelineTitle: "From academic fundamentals to on-site engineering and AI integration.",
      timeOne: "Undergraduate",
      timelineOneTitle: "Built computer science foundations",
      timelineOneBody: "Computer Science and Technology major, ranked #2 in the grade, with first- and second-class scholarships.",
      timeTwo: "Years 1-2",
      timelineTwoTitle: "Manufacturing system development",
      timelineTwoBody: "Worked on Syngenta MES/WAPS, ERP modules, Guangzhou VTR EMS, and PDA systems.",
      timeThree: "Year 3",
      timelineThreeTitle: "Data center and energy management",
      timelineThreeBody: "Worked on Thailand DAMAC data center BMS/HMI and independently delivered energy management.",
      timeFour: "Now",
      timelineFourTitle: "Deepening AI + industrial software",
      timelineFourBody: "Aims to combine engineering experience with AI, data systems, and intelligent manufacturing.",
      contactKicker: "Contact",
      contactTitle: "Built for graduate interviews, job applications, and project experience presentation.",
      contactCta: "Replace with email / phone / WeChat",
    },
    ja: {
      brand: "趙宇軒",
      navProfile: "紹介",
      navProjects: "プロジェクト",
      navSkills: "能力",
      navInterview: "面接",
      navContact: "連絡",
      heroBadge: "産業ソフトウェア / AI 統合 / データセンターエネルギー管理",
      heroTitle: "趙宇軒",
      heroSubtitle:
        "コンピュータ科学と技術を専攻し、MES、ERP、EMS、BMS、HMI、AI 知識検索システムに関わる 3 年の企業向け産業ソフトウェア開発経験があります。",
      chipOne: "MES / WAPS",
      chipTwo: "BMS / EMS",
      chipThree: "AI + RAG",
      chipFour: "SCADA / HMI",
      viewProjects: "プロジェクト",
      viewInterview: "面接ポイント",
      heroStatOne: "学年 2 位",
      heroStatOneLabel: "専門成績",
      heroStatTwo: "3 年",
      heroStatTwoLabel: "産業ソフト開発",
      profileKicker: "自己紹介",
      profileTitle: "実装だけでなく、システムが現場業務にどう役立つかを重視しています。",
      profileBody:
        "重慶第二師範学院のコンピュータ科学と技術専攻を卒業し、在学中は専門成績で学年 2 位、校内一等・二等奨学金を獲得しました。卒業後は惟則信息技術（上海）有限公司で 3 年勤務し、製造業、エネルギー管理、データセンター BMS、AI 資料検索に関わるプロジェクトに参加しました。",
      eduLabel: "学歴",
      eduTitle: "重慶第二師範学院",
      eduBody: "コンピュータ科学と技術；専門成績学年 2 位；校内一等・二等奨学金。",
      workLabel: "職務経験",
      workTitle: "惟則信息技術（上海）有限公司",
      workBody: "産業ソフトウェア、企業システム、SCADA/HMI、エネルギー管理、AI アプリ開発の 3 年経験。",
      targetLabel: "利用場面",
      targetTitle: "大学院面接 / 就職活動 / プロジェクト紹介",
      targetBody: "学習力、実装力、システム統合経験、現場課題への対応力を示します。",
      projectsKicker: "主要プロジェクト",
      projectsTitle: "実業務システムに参加し、重要モジュールも独立して担当しました。",
      caseOneTitle: "タイ DAMAC データセンター BMS とエネルギー管理",
      caseOneBody:
        "EPMS、CPMS、fitout コア機械室 BMS、HMI の開発とテストに参加し、Schneider PlantSCADA と Vijeo（HMIET6700）を使用。OPC データ収集、エネルギーレポート、可視化を含むエネルギー管理システムを独立して完成しました。",
      caseTwoTitle: "Syngenta MES と WAPS 高度スケジューリング",
      caseTwoBody:
        "MES 開発に参加し、生産計画、スケジューリングロジック、現場データ、業務フローに基づく WAPS 高度排程機能を開発しました。",
      caseThreeTitle: "ERP モジュールと AI 資料検索",
      caseThreeBody:
        "ERP の一部モジュール開発に参加し、RAG、ベクトルデータベース、memory、資料検索などの AI 機能を統合しました。",
      caseFourTitle: "広州溢多利 EMS と PDA モジュール",
      caseFourBody:
        "EMS の約半分のモジュールと PDA 関連機能を開発し、現場モバイルデータ収集、業務フロー、システム連携を担当しました。",
      skillsKicker: "能力構成",
      skillsTitle: "業務、システム、現場データをつなげることが強みです。",
      skillOneTitle: "産業ソフトウェア開発",
      skillOneBody: "MES、EMS、ERP モジュール、排程システム、PDA モバイル業務、社内システム開発。",
      skillTwoTitle: "SCADA / HMI / BMS",
      skillTwoBody: "データセンター BMS、EPMS、CPMS、PlantSCADA、Vijeo HMI、現場テストの経験。",
      skillThreeTitle: "AI と知識検索",
      skillThreeBody: "AI ツールを活用し、RAG、ベクトル DB、memory、検索、企業知識ベースを理解しています。",
      skillFourTitle: "データ収集と可視化",
      skillFourBody: "OPC データ収集、エネルギーレポート、可視化ダッシュボード、管理向け表示を独立して実装。",
      interviewKicker: "面接での伝え方",
      interviewTitle: "大学院面接と就職活動で強調しやすいポイント。",
      pointOneTitle: "高い学習能力",
      pointOneBody: "専門成績学年 2 位、校内奨学金の実績があり、継続的な学習力と基礎を示せます。",
      pointTwoTitle: "幅広い実務経験",
      pointTwoBody: "MES/EMS、データセンター BMS、ERP、AI 検索まで、複数の実業務システムを経験。",
      pointThreeTitle: "独立したモジュール担当",
      pointThreeBody: "タイ DAMAC データセンターのエネルギー管理を、収集からレポートまで独立して完成。",
      pointFourTitle: "新技術の実務適用",
      pointFourBody: "AI を活用し、RAG、ベクトル DB、memory を業務効率化へつなげる経験があります。",
      timelineKicker: "成長経路",
      timelineTitle: "専門基礎から現場実装、AI 応用統合へ。",
      timeOne: "学部時代",
      timelineOneTitle: "コンピュータ専門基礎を固める",
      timelineOneBody: "コンピュータ科学と技術専攻、専門成績学年 2 位、校内一等・二等奨学金。",
      timeTwo: "勤務 1-2 年",
      timelineTwoTitle: "製造業システム開発",
      timelineTwoBody: "Syngenta MES/WAPS、ERP モジュール、広州溢多利 EMS、PDA に参加。",
      timeThree: "勤務 3 年",
      timelineThreeTitle: "データセンターとエネルギー管理",
      timelineThreeBody: "タイ DAMAC データセンター BMS/HMI に参加し、エネルギー管理を独立実装。",
      timeFour: "現在",
      timelineFourTitle: "AI + 産業ソフトウェアを深化",
      timelineFourBody: "AI、データシステム、スマート製造と実務経験をより深く結びつけたいと考えています。",
      contactKicker: "連絡",
      contactTitle: "大学院面接、就職用ホームページ、プロジェクト経験紹介に利用できます。",
      contactCta: "メール / 電話 / WeChat に差し替え可能",
    },
  };

  const htmlLang = { zh: "zh-CN", en: "en", ja: "ja" };

  function setLanguage(lang) {
    const key = translations[lang] ? lang : "zh";
    const dictionary = translations[key];
    document.documentElement.lang = htmlLang[key];
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = dictionary[element.dataset.i18n];
      if (value) element.textContent = value;
    });
    document.querySelectorAll("[data-lang]").forEach((button) => {
      button.classList.toggle("active", button.dataset.lang === key);
    });
    const url = new URL(window.location.href);
    url.searchParams.set("lang", key);
    history.replaceState(null, "", url);
  }

  function scrollToTarget(hash) {
    const target = document.querySelector(hash);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  window.setLanguage = setLanguage;
  window.scrollToSection = function (id) {
    scrollToTarget("#" + id);
    history.replaceState(null, "", "#" + id);
  };

  document.addEventListener("click", (event) => {
    const languageButton = event.target.closest("[data-lang]");
    if (languageButton && languageButton.tagName === "BUTTON") {
      setLanguage(languageButton.dataset.lang);
      return;
    }

    const anchor = event.target.closest('a[href^="#"]');
    if (anchor && anchor.hash) {
      event.preventDefault();
      scrollToTarget(anchor.hash);
      history.replaceState(null, "", anchor.hash);
    }
  });

  const initialLanguage = new URLSearchParams(window.location.search).get("lang") || "zh";
  setLanguage(initialLanguage);

  const revealTargets = document.querySelectorAll(
    ".hero-copy, .hero-portrait, .ticker, .intro, .profile-grid article, .section-heading, .case-card, .skill-matrix article, .talking-points article, .timeline-list article, .contact",
  );
  revealTargets.forEach((element, index) => {
    element.classList.add("reveal");
    element.style.setProperty("--reveal-delay", Math.min(index * 45, 360) + "ms");
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 },
  );
  revealTargets.forEach((element) => observer.observe(element));
})();
