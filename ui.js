(function () {
  const translations = {
    zh: {
      brand: "林屿",
      navWork: "作品",
      navProfile: "关于",
      navContact: "联系",
      heroTitle: "林屿",
      heroSubtitle: "用产品思维、影像感和工程能力，制作轻盈、清晰、有记忆点的数字体验。",
      viewWork: "查看作品",
      sayHello: "聊聊合作",
      metaOneValue: "8 年",
      metaOneLabel: "设计与开发",
      metaTwoValue: "42+",
      metaTwoLabel: "发布项目",
      metaThreeValue: "全球",
      metaThreeLabel: "远程协作",
      profileKicker: "关于",
      profileTitle: "把复杂的想法，变成清晰、漂亮、可用的界面。",
      profileBody:
        "我关注人如何感知信息，也关注系统如何稳定运行。我的工作横跨品牌、交互、前端工程与 3D 视觉，喜欢把抽象叙事做成可触摸的体验。",
      workKicker: "精选作品",
      workTitle: "近期项目",
      workCta: "合作咨询",
      projectOneTitle: "面向研究团队的知识工作台",
      projectOneMeta: "产品策略 / 原型 / 前端",
      projectTwoTitle: "沉浸式品牌发布页面",
      projectTwoMeta: "WebGL / 动效 / 视觉系统",
      projectThreeTitle: "城市数据叙事仪表盘",
      projectThreeMeta: "信息设计 / 地图 / 数据可视化",
      stackKicker: "能力",
      stackTitle: "从概念到发布，一条线做到底。",
      stackOneTitle: "体验策略",
      stackOneBody: "定位、叙事、用户路径和核心转化。",
      stackTwoTitle: "界面设计",
      stackTwoBody: "设计系统、动效规范和高保真原型。",
      stackThreeTitle: "前端实现",
      stackThreeBody: "响应式页面、3D 互动和性能优化。",
      contactKicker: "现在可接新项目",
      contactTitle: "一起做一个让人停下来的数字作品。",
      contactCta: "hello@example.com",
    },
    en: {
      brand: "Lin Yu",
      navWork: "Work",
      navProfile: "Profile",
      navContact: "Contact",
      heroTitle: "Lin Yu",
      heroSubtitle:
        "I shape light, clear, memorable digital experiences with product thinking, cinematic detail, and engineering craft.",
      viewWork: "View Work",
      sayHello: "Start a Chat",
      metaOneValue: "8 yrs",
      metaOneLabel: "Design and engineering",
      metaTwoValue: "42+",
      metaTwoLabel: "Launched projects",
      metaThreeValue: "Global",
      metaThreeLabel: "Remote collaboration",
      profileKicker: "Profile",
      profileTitle: "I turn complex ideas into interfaces that feel clear, beautiful, and usable.",
      profileBody:
        "My work lives between brand, interaction, frontend systems, and spatial visuals. I care about how people perceive information and how products hold up in the real world.",
      workKicker: "Selected Work",
      workTitle: "Recent Projects",
      workCta: "Start a Project",
      projectOneTitle: "Knowledge workspace for research teams",
      projectOneMeta: "Product strategy / Prototype / Frontend",
      projectTwoTitle: "Immersive launch page for a new brand",
      projectTwoMeta: "WebGL / Motion / Visual system",
      projectThreeTitle: "Urban data storytelling dashboard",
      projectThreeMeta: "Information design / Maps / Data viz",
      stackKicker: "Capabilities",
      stackTitle: "From first concept to launch, I can carry the whole thread.",
      stackOneTitle: "Experience Strategy",
      stackOneBody: "Positioning, narrative, user journeys, and conversion logic.",
      stackTwoTitle: "Interface Design",
      stackTwoBody: "Design systems, motion rules, and high-fidelity prototypes.",
      stackThreeTitle: "Frontend Build",
      stackThreeBody: "Responsive pages, 3D interaction, and performance tuning.",
      contactKicker: "Available for selected projects",
      contactTitle: "Let's make a digital piece that makes people stop.",
      contactCta: "hello@example.com",
    },
    ja: {
      brand: "リン・ユ",
      navWork: "作品",
      navProfile: "紹介",
      navContact: "連絡",
      heroTitle: "リン・ユ",
      heroSubtitle: "プロダクト思考、映像的な質感、実装力で軽やかで記憶に残るデジタル体験をつくります。",
      viewWork: "作品を見る",
      sayHello: "相談する",
      metaOneValue: "8 年",
      metaOneLabel: "デザインと開発",
      metaTwoValue: "42+",
      metaTwoLabel: "公開プロジェクト",
      metaThreeValue: "世界",
      metaThreeLabel: "リモート協業",
      profileKicker: "紹介",
      profileTitle: "複雑なアイデアを、明快で美しく使いやすい画面へ。",
      profileBody:
        "ブランド、インタラクション、フロントエンド、3D ビジュアルを横断して活動しています。情報がどう知覚されるか、そして体験がどう安定して機能するかを大切にしています。",
      workKicker: "精选作品",
      workTitle: "最近のプロジェクト",
      workCta: "相談する",
      projectOneTitle: "研究チーム向けナレッジワークスペース",
      projectOneMeta: "戦略 / プロトタイプ / フロントエンド",
      projectTwoTitle: "ブランドローンチの没入型ページ",
      projectTwoMeta: "WebGL / モーション / ビジュアルシステム",
      projectThreeTitle: "都市データのストーリーダッシュボード",
      projectThreeMeta: "情報設計 / 地図 / データ可視化",
      stackKicker: "できること",
      stackTitle: "コンセプトから公開まで、一本の流れで形にします。",
      stackOneTitle: "体験戦略",
      stackOneBody: "ポジショニング、物語、ユーザー導線、転換設計。",
      stackTwoTitle: "UI デザイン",
      stackTwoBody: "デザインシステム、モーション設計、高精度プロトタイプ。",
      stackThreeTitle: "フロントエンド",
      stackThreeBody: "レスポンシブ、3D インタラクション、性能改善。",
      contactKicker: "新規プロジェクト受付中",
      contactTitle: "思わず立ち止まるデジタル作品を一緒に。",
      contactCta: "hello@example.com",
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
})();
