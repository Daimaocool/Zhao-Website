(function () {
  const translations = {
    zh: {
      brand: "林屿",
      navWork: "作品",
      navProfile: "关于",
      navContact: "联系",
      heroTitle: "林屿",
      heroSubtitle: "用产品思维、影像感和工程能力，制作轻盈、清晰、有记忆点的数字体验。",
      chipOne: "交互设计",
      chipTwo: "3D 动效",
      chipThree: "前端实现",
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
      signatureKicker: "方法",
      signatureTitle: "让页面不仅好看，还能被记住、被理解、被使用。",
      signatureOneTitle: "空间叙事",
      signatureOneBody: "用 3D、层次和动效建立第一眼的记忆点，同时不牺牲阅读效率。",
      signatureTwoTitle: "信息结构",
      signatureTwoBody: "把个人能力、作品、流程和联系方式拆成清晰路径，减少理解成本。",
      signatureThreeTitle: "可发布实现",
      signatureThreeBody: "轻量静态架构，无构建依赖，适合 GitHub 与 Cloudflare Pages 自动部署。",
      showcaseKicker: "亮点",
      showcaseTitle: "细节越多，体验越完整。",
      showcaseOneKicker: "首屏体验",
      showcaseOneTitle: "实时 3D 粒子、轨道和光束",
      showcaseOneBody: "无需外部库，Canvas 本地渲染，加载稳定。",
      showcaseTwoKicker: "多语言",
      showcaseTwoTitle: "中文 / English / 日本語",
      showcaseTwoBody: "URL 参数可直达对应语言。",
      showcaseThreeKicker: "交互",
      showcaseThreeTitle: "滚动浮入与卡片高光",
      showcaseThreeBody: "移动端保留层次，减少性能压力。",
      stackKicker: "能力",
      stackTitle: "从概念到发布，一条线做到底。",
      processOne: "发现",
      processTwo: "原型",
      processThree: "视觉",
      processFour: "上线",
      stackOneTitle: "体验策略",
      stackOneBody: "定位、叙事、用户路径和核心转化。",
      stackTwoTitle: "界面设计",
      stackTwoBody: "设计系统、动效规范和高保真原型。",
      stackThreeTitle: "前端实现",
      stackThreeBody: "响应式页面、3D 互动和性能优化。",
      timelineKicker: "节奏",
      timelineTitle: "一个清晰的项目推进方式。",
      timelineOneTitle: "定位与内容框架",
      timelineOneBody: "明确受众、个人叙事、核心作品和转化路径。",
      timelineTwoTitle: "视觉与动效原型",
      timelineTwoBody: "确定色彩、版式、3D 主视觉、滚动节奏和响应式规则。",
      timelineThreeTitle: "实现与发布",
      timelineThreeBody: "完成静态页面、性能检查、GitHub 提交和 Cloudflare 部署。",
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
      chipOne: "Interaction Design",
      chipTwo: "3D Motion",
      chipThree: "Frontend Build",
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
      signatureKicker: "Method",
      signatureTitle: "A page should be beautiful, memorable, readable, and usable.",
      signatureOneTitle: "Spatial Narrative",
      signatureOneBody: "Use 3D, depth, and motion to create a strong first impression without sacrificing clarity.",
      signatureTwoTitle: "Information Structure",
      signatureTwoBody: "Turn capabilities, work, process, and contact points into a path people can scan quickly.",
      signatureThreeTitle: "Deployable Build",
      signatureThreeBody: "A lightweight static architecture with no build dependency, ready for GitHub and Cloudflare Pages.",
      showcaseKicker: "Highlights",
      showcaseTitle: "More detail, more complete experience.",
      showcaseOneKicker: "Hero",
      showcaseOneTitle: "Realtime 3D particles, orbits, and light streaks",
      showcaseOneBody: "Local Canvas rendering, no external runtime dependency.",
      showcaseTwoKicker: "Languages",
      showcaseTwoTitle: "中文 / English / 日本語",
      showcaseTwoBody: "Each language can be opened directly via URL parameters.",
      showcaseThreeKicker: "Interaction",
      showcaseThreeTitle: "Scroll reveals and card highlights",
      showcaseThreeBody: "Responsive motion keeps depth while reducing mobile pressure.",
      stackKicker: "Capabilities",
      stackTitle: "From first concept to launch, I can carry the whole thread.",
      processOne: "Discover",
      processTwo: "Prototype",
      processThree: "Visualize",
      processFour: "Launch",
      stackOneTitle: "Experience Strategy",
      stackOneBody: "Positioning, narrative, user journeys, and conversion logic.",
      stackTwoTitle: "Interface Design",
      stackTwoBody: "Design systems, motion rules, and high-fidelity prototypes.",
      stackThreeTitle: "Frontend Build",
      stackThreeBody: "Responsive pages, 3D interaction, and performance tuning.",
      timelineKicker: "Rhythm",
      timelineTitle: "A clear way to move a project forward.",
      timelineOneTitle: "Positioning and content map",
      timelineOneBody: "Define audience, personal narrative, core work, and conversion path.",
      timelineTwoTitle: "Visual and motion prototype",
      timelineTwoBody: "Set color, layout, 3D hero direction, scroll rhythm, and responsive rules.",
      timelineThreeTitle: "Build and publish",
      timelineThreeBody: "Ship the static page, verify performance, push to GitHub, and deploy with Cloudflare.",
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
      chipOne: "インタラクション",
      chipTwo: "3D モーション",
      chipThree: "フロントエンド",
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
      signatureKicker: "方法",
      signatureTitle: "美しいだけでなく、記憶され、理解され、使われるページへ。",
      signatureOneTitle: "空間的な物語",
      signatureOneBody: "3D、奥行き、モーションで第一印象をつくりながら、読みやすさを保ちます。",
      signatureTwoTitle: "情報構造",
      signatureTwoBody: "能力、作品、プロセス、連絡先をすばやく把握できる導線に整理します。",
      signatureThreeTitle: "公開できる実装",
      signatureThreeBody: "ビルド依存のない軽量な静的構成で、GitHub と Cloudflare Pages に適しています。",
      showcaseKicker: "見どころ",
      showcaseTitle: "細部が増えるほど、体験は完成に近づきます。",
      showcaseOneKicker: "ファーストビュー",
      showcaseOneTitle: "リアルタイム 3D 粒子、軌道、光のライン",
      showcaseOneBody: "外部ライブラリなしのローカル Canvas レンダリング。",
      showcaseTwoKicker: "多言語",
      showcaseTwoTitle: "中文 / English / 日本語",
      showcaseTwoBody: "URL パラメータで各言語を直接開けます。",
      showcaseThreeKicker: "インタラクション",
      showcaseThreeTitle: "スクロール表示とカードハイライト",
      showcaseThreeBody: "モバイルでも奥行きを保ちつつ負荷を抑えます。",
      stackKicker: "できること",
      stackTitle: "コンセプトから公開まで、一本の流れで形にします。",
      processOne: "発見",
      processTwo: "試作",
      processThree: "視覚化",
      processFour: "公開",
      stackOneTitle: "体験戦略",
      stackOneBody: "ポジショニング、物語、ユーザー導線、転換設計。",
      stackTwoTitle: "UI デザイン",
      stackTwoBody: "デザインシステム、モーション設計、高精度プロトタイプ。",
      stackThreeTitle: "フロントエンド",
      stackThreeBody: "レスポンシブ、3D インタラクション、性能改善。",
      timelineKicker: "進行",
      timelineTitle: "明確に前へ進めるプロジェクト進行。",
      timelineOneTitle: "方向性とコンテンツ設計",
      timelineOneBody: "対象、個人の物語、中心となる作品、導線を定義します。",
      timelineTwoTitle: "ビジュアルとモーション試作",
      timelineTwoBody: "色、レイアウト、3D 主役、スクロールのリズム、レスポンシブ規則を決めます。",
      timelineThreeTitle: "実装と公開",
      timelineThreeBody: "静的ページを仕上げ、性能確認、GitHub 反映、Cloudflare 公開まで行います。",
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

  const revealTargets = document.querySelectorAll(
    ".hero-copy, .hero-meta div, .ticker, .intro, .section-heading, .project-card, .signature-grid article, .showcase-panel, .process-strip, .stack-list div, .timeline-list article, .contact",
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
