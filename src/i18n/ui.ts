// Bilingual UI dictionary. English and Chinese are first-class, production-ready
// copy for the SYC public website.

export type Lang = 'en' | 'zh' | 'fr' | 'ru' | 'ja' | 'ko';

const ui = {
  // ---------- navigation & global chrome ----------
  'nav.home': { en: 'Home', zh: '首页', fr: 'Accueil', ru: 'Главная', ja: 'ホーム', ko: '홈' },
  'nav.about': { en: 'About SYC', zh: '关于 SYC', fr: 'À propos de SYC', ru: 'О SYC', ja: 'SYC について', ko: 'SYC 소개' },
  'nav.network': { en: 'Global Network', zh: '全球网络', fr: 'Réseau mondial', ru: 'Глобальная сеть', ja: 'グローバルネットワーク', ko: '글로벌 네트워크' },
  'nav.partnerships': { en: 'Partnerships', zh: '合作伙伴', fr: 'Partenariats', ru: 'Партнёрство', ja: 'パートナーシップ', ko: '파트너십' },
  'nav.people': { en: 'Our People', zh: '我们的团队', fr: 'Notre équipe', ru: 'Наша команда', ja: '私たちのチーム', ko: '우리 팀' },
  'nav.work': { en: 'Our Work', zh: '项目与影响', fr: 'Nos actions', ru: 'Наши проекты', ja: '活動とインパクト', ko: '활동과 영향' },
  'nav.ai': { en: 'AI & Innovation', zh: 'AI 与创新', fr: 'IA et innovation', ru: 'ИИ и инновации', ja: 'AI とイノベーション', ko: 'AI와 혁신' },
  'nav.contact': { en: 'Contact', zh: '联系我们', fr: 'Contact', ru: 'Контакты', ja: 'お問い合わせ', ko: '문의하기' },
  'nav.cta': { en: 'Partner With Us', zh: '与我们合作', fr: 'Collaborer avec nous', ru: 'Сотрудничать с нами', ja: '私たちと協力する', ko: '우리와 협력하기' },
  'nav.menu': { en: 'Toggle menu', zh: '切换菜单', fr: 'Ouvrir le menu', ru: 'Открыть меню', ja: 'メニューを開く', ko: '메뉴 열기' },
  'nav.switchLang': { en: 'Language', zh: '语言', fr: 'Langue', ru: 'Язык', ja: '言語', ko: '언어' },
  'nav.more': { en: 'More', zh: '更多', fr: 'Plus', ru: 'Ещё', ja: 'もっと見る', ko: '더보기' },
  'brand.sub': { en: 'People · Purpose · AI-Native', zh: '人才 · 使命 · AI 原生', fr: 'Personnes · Mission · IA native', ru: 'Люди · Цель · ИИ в основе', ja: '人々 · 使命 · AI ネイティブ', ko: '사람 · 목적 · AI 네이티브' },

  'common.exploreNetwork': { en: 'Explore Our Network', zh: '探索我们的网络', fr: 'Découvrir notre réseau', ru: 'Изучить нашу сеть', ja: 'ネットワークを見る', ko: '네트워크 살펴보기' },
  'common.explorePartnerships': { en: 'Explore Partnerships', zh: '探索合作机会', fr: 'Découvrir les partenariats', ru: 'Изучить партнёрство', ja: 'パートナーシップを見る', ko: '파트너십 살펴보기' },
  'common.partnerWithUs': { en: 'Partner With SYC', zh: '与 SYC 合作', fr: 'Collaborer avec SYC', ru: 'Сотрудничать с SYC', ja: 'SYC と協力する', ko: 'SYC와 협력하기' },
  'common.viewNetwork': { en: 'View Global Network', zh: '查看全球网络', fr: 'Voir le réseau mondial', ru: 'Посмотреть глобальную сеть', ja: 'グローバルネットワークを見る', ko: '글로벌 네트워크 보기' },
  'common.viewAll': { en: 'View all', zh: '查看全部', fr: 'Tout voir', ru: 'Смотреть все', ja: 'すべて見る', ko: '모두 보기' },
  'common.learnMore': { en: 'Learn more', zh: '了解更多', fr: 'En savoir plus', ru: 'Подробнее', ja: '詳しく見る', ko: '자세히 보기' },
  'common.visitPlatform': { en: 'Visit platform', zh: '访问平台', fr: 'Visiter la plateforme', ru: 'Перейти на платформу', ja: 'プラットフォームを見る', ko: '플랫폼 방문' },
  'common.backToTop': { en: 'Back to top', zh: '返回顶部', fr: 'Retour en haut', ru: 'Наверх', ja: 'トップへ戻る', ko: '맨 위로' },
  'common.searchTitle': { en: 'Explore the SYC website', zh: '探索 SYC 网站', fr: 'Explorer le site SYC', ru: 'Исследовать сайт SYC', ja: 'SYC サイトを探索', ko: 'SYC 사이트 살펴보기' },
  'common.sample': { en: 'Community member', zh: '社区成员', fr: 'Membre de la communauté', ru: 'Участник сообщества', ja: 'コミュニティメンバー', ko: '커뮤니티 회원' },
  'common.sampleData': { en: 'Part of a growing global network', zh: '不断成长的全球网络的一部分', fr: 'Une partie d’un réseau mondial en pleine croissance', ru: 'Часть растущего глобального сообщества', ja: '成長し続けるグローバルネットワークの一員', ko: '성장하는 글로벌 네트워크의 일원' },
  'common.draftBanner': { en: 'Connecting young people, institutions and opportunities across borders.', zh: '跨越国界，连接青年、机构与机遇。', fr: 'Relier les jeunes, les institutions et les opportunités au-delà des frontières.', ru: 'Соединяем молодых людей, организации и возможности через границы.', ja: '国境を越えて若者、機関、機会をつなぐ。', ko: '국경을 넘어 청년, 기관, 기회를 연결합니다.' },

  // ---------- shared sections ----------
  'cta.title': { en: 'Connect Youth. Build Global Partnerships.', zh: '连接青年，共建全球合作。', fr: 'Connectons les jeunes. Construisons des partenariats mondiaux.', ru: 'Соединяем молодёжь. Строим глобальные партнёрства.', ja: '若者をつなぎ、世界のパートナーシップを築く。', ko: '청년을 연결하고 글로벌 파트너십을 만듭니다.' },
  'cta.lead': { en: 'Explore opportunities for collaboration across a global, AI-native youth network.', zh: '在全球 AI 原生青年网络中探索合作机会。', fr: 'Découvrez les possibilités de collaboration au sein d’un réseau mondial de jeunes natif IA.', ru: 'Изучайте возможности сотрудничества в глобальной сети молодёжи с ИИ в основе.', ja: 'AI ネイティブなグローバル青年ネットワークで協業の機会を見つけましょう。', ko: 'AI 네이티브 글로벌 청년 네트워크에서 협업 기회를 찾아보세요.' },
  'cta.btn': { en: 'Partner With SYC', zh: '与 SYC 合作', fr: 'Collaborer avec SYC', ru: 'Сотрудничать с SYC', ja: 'SYC と協力する', ko: 'SYC와 협력하기' },

  'footer.about': { en: 'A Singapore-based youth community connecting people, ideas and international collaborators across borders.', zh: '总部位于新加坡的青年社区，跨越国界连接人才、理念与国际合作伙伴。', fr: 'Communauté de jeunes basée à Singapour, qui relie les personnes, les idées et les partenaires internationaux au-delà des frontières.', ru: 'Молодёжное сообщество из Сингапура, объединяющее людей, идеи и международных партнёров через границы.', ja: 'シンガポールを拠点に、人々、アイデア、国際パートナーを国境を越えてつなぐ青年コミュニティ。', ko: '싱가포르를 기반으로 사람, 아이디어, 국제 파트너를 국경 너머로 연결하는 청년 커뮤니티입니다.' },
  'footer.explore': { en: 'Explore', zh: '浏览', fr: 'Explorer', ru: 'Исследовать', ja: '見る', ko: '둘러보기' },
  'footer.collaborate': { en: 'Collaborate', zh: '合作', fr: 'Collaborer', ru: 'Сотрудничать', ja: '協力', ko: '협력' },
  'footer.ecosystem': { en: 'SYC Ecosystem', zh: 'SYC 生态', fr: 'Écosystème SYC', ru: 'Экосистема SYC', ja: 'SYC エコシステム', ko: 'SYC 생태계' },
  'footer.disclaimer': { en: 'Singapore Youth Community — an AI-native global youth network connecting people, purpose and opportunity.', zh: 'Singapore Youth Community — AI 原生全球青年网络，连接人才、使命与机遇。', fr: 'Singapore Youth Community — un réseau mondial de jeunes natif IA qui relie les personnes, la mission et les opportunités.', ru: 'Singapore Youth Community — глобальная молодёжная сеть с ИИ в основе, объединяющая людей, цель и возможности.', ja: 'Singapore Youth Community — 人々、使命、機会をつなぐ AI ネイティブなグローバル青年ネットワーク。', ko: 'Singapore Youth Community — 사람, 목적, 기회를 연결하는 AI 네이티브 글로벌 청년 네트워크입니다.' },

  // ---------- Home ----------
  'seo.index.title': { en: 'SYC — AI-Native Global Youth Community', zh: 'SYC — AI 原生全球青年社区', fr: 'SYC — Communauté de jeunes mondiale natif IA', ru: 'SYC — Глобальное молодёжное сообщество с ИИ в основе', ja: 'SYC — AI ネイティブなグローバル青年コミュニティ', ko: 'SYC — AI 네이티브 글로벌 청년 커뮤니티' },
  'seo.index.desc': { en: 'Singapore Youth Community — an AI-native global youth community connecting partners and young people across 36 countries.', zh: 'Singapore Youth Community — AI 原生全球青年社区，连接 36 国的合作伙伴与青年。', fr: 'Singapore Youth Community — une communauté mondiale de jeunes natif IA qui relie partenaires et jeunes dans 36 pays.', ru: 'Singapore Youth Community — глобальное молодёжное сообщество с ИИ в основе, объединяющее партнёров и молодёжь в 36 странах.', ja: 'Singapore Youth Community — 36 か国のパートナーと若者をつなぐ AI ネイティブなグローバル青年コミュニティ。', ko: 'Singapore Youth Community — 36개국의 파트너와 청년을 연결하는 AI 네이티브 글로벌 청년 커뮤니티입니다.' },
  'home.hero.eyebrow': { en: 'SYC · AI-native global youth community', zh: 'SYC · AI 原生全球青年社区', fr: 'SYC · Communauté de jeunes mondiale natif IA', ru: 'SYC · Глобальное молодёжное сообщество с ИИ в основе', ja: 'SYC · AI ネイティブなグローバル青年コミュニティ', ko: 'SYC · AI 네이티브 글로벌 청년 커뮤니티' },
  'home.hero.title1': { en: '36 Countries.', zh: '36 个国家。', fr: '36 pays.', ru: '36 стран.', ja: '36 か国。', ko: '36개국.' },
  'home.hero.title2': { en: 'One Connected Generation.', zh: '一代人，紧密相连。', fr: 'Une génération connectée.', ru: 'Одно связанное поколение.', ja: 'ひとつの世代、つながり合う。', ko: '하나로 연결된 세대.' },
  'home.hero.lead': { en: 'A global youth community connecting people, institutions and opportunities across borders — with AI helping our network collaborate and grow.', zh: '一个跨越国界、连接人才、机构与机遇的全球青年社区——以 AI 助力网络协作与成长。', fr: 'Une communauté mondiale de jeunes qui relie les personnes, les institutions et les opportunités au-delà des frontières — avec l’IA pour aider notre réseau à collaborer et à grandir.', ru: 'Глобальное молодёжное сообщество, объединяющее людей, организации и возможности через границы — ИИ помогает нашей сети сотрудничать и расти.', ja: '国境を越えて人々、機関、機会をつなぐグローバル青年コミュニティ——AI がネットワークの協業と成長を支えます。', ko: '국경을 넘어 사람, 기관, 기회를 연결하는 글로벌 청년 커뮤니티 — AI가 네트워크의 협업과 성장을 돕습니다.' },
  'home.hero.cta2': { en: 'Explore Partnerships', zh: '探索合作机会', fr: 'Explorer les partenariats', ru: 'Изучить партнёрство', ja: 'パートナーシップを見る', ko: '파트너십 살펴보기' },
  'home.hero.panelTitle1': { en: 'Global Youth Network', zh: '全球青年网络', fr: 'Réseau mondial de jeunes', ru: 'Глобальная молодёжная сеть', ja: 'グローバル青年ネットワーク', ko: '글로벌 청년 네트워크' },
  'home.hero.panelTitle2': { en: 'AI-Native by Design', zh: 'AI 原生设计', fr: 'Natif IA par conception', ru: 'ИИ в основе дизайна', ja: 'AI ネイティブな設計', ko: 'AI 네이티브 설계' },
  'home.hero.reach': { en: 'Youth network reach', zh: '青年网络触达量', fr: 'Portée du réseau de jeunes', ru: 'Охват молодёжной сети', ja: '青年ネットワークのリーチ', ko: '청년 네트워크 도달 범위' },
  'home.hero.reachNote': { en: 'Across our global community', zh: '覆盖我们的全球社区', fr: 'À travers notre communauté mondiale', ru: 'По всему нашему глобальному сообществу', ja: 'グローバルコミュニティ全体で', ko: '우리의 글로벌 커뮤니티 전체' },
  'home.stat.countries': { en: 'Countries in our network', zh: '网络覆盖国家', fr: 'Pays dans notre réseau', ru: 'Стран в нашей сети', ja: 'ネットワーク参加国', ko: '네트워크 참여 국가' },
  'home.stat.reach': { en: 'SYC global youth network reach', zh: 'SYC 全球青年网络触达量', fr: 'Portée du réseau mondial de jeunes SYC', ru: 'Охват глобальной молодёжной сети SYC', ja: 'SYC グローバル青年ネットワークのリーチ', ko: 'SYC 글로벌 청년 네트워크 도달 범위' },
  'home.stat.global': { en: 'Institutional collaboration', zh: '国际合作', fr: 'Collaboration institutionnelle', ru: 'Международное сотрудничество', ja: '国際協力', ko: '국제 협력' },
  'home.stat.ai': { en: 'Digital youth innovation', zh: '数字化青年创新', fr: 'Innovation numérique des jeunes', ru: 'Цифровые инновации молодёжи', ja: 'デジタル青年イノベーション', ko: '디지털 청년 혁신' },
  'home.dual.networkKicker': { en: 'Our global presence', zh: '我们的全球布局', fr: 'Notre présence mondiale', ru: 'Наше глобальное присутствие', ja: '私たちのグローバルな展開', ko: '우리의 글로벌 진출' },
  'home.dual.networkTitle': { en: 'A Network Across 36 Countries', zh: '覆盖 36 国的全球网络', fr: 'Un réseau dans 36 pays', ru: 'Сеть в 36 странах', ja: '36 か国に広がるネットワーク', ko: '36개국에 걸친 네트워크' },
  'home.dual.networkLead': { en: 'Local youth communities, institutional collaborators and international connections — joined by shared purpose and smarter tools.', zh: '本地青年社区、机构合作伙伴与国际连接——由共同使命与更智能的工具凝聚。', fr: 'Communautés de jeunes locales, collaborateurs institutionnels et liens internationaux — réunis par un objectif commun et des outils plus intelligents.', ru: 'Местные молодёжные сообщества, институциональные партнёры и международные связи — объединённые общей целью и более совершенными инструментами.', ja: '地域の青年コミュニティ、機関パートナー、国際的なつながり——共通の使命とスマートなツールで結ばれています。', ko: '지역 청년 커뮤니티, 기관 파트너, 국제적 연결 —共同的 목적과 더 스마트한 도구로 하나가 됩니다.' },
  'home.dual.mapNote': { en: 'Young people and partners connected across regions', zh: '青年与合作伙伴跨越地区紧密相连', fr: 'Jeunes et partenaires connectés entre les régions', ru: 'Молодёжь и партнёры, связанные между регионами', ja: '地域を越えてつながる若者とパートナー', ko: '지역을 넘어 연결된 청년과 파트너' },
  'home.dual.exploreNetwork': { en: 'Explore the network', zh: '探索网络', fr: 'Explorer le réseau', ru: 'Изучить сеть', ja: 'ネットワークを見る', ko: '네트워크 살펴보기' },
  'home.dual.aiKicker': { en: 'AI-native youth community', zh: 'AI 原生青年社区', fr: 'Communauté de jeunes natif IA', ru: 'Молодёжное сообщество с ИИ в основе', ja: 'AI ネイティブな青年コミュニティ', ko: 'AI 네이티브 청년 커뮤니티' },
  'home.dual.aiTitle': { en: 'AI for Global Youth Impact', zh: 'AI 助力全球青年影响力', fr: 'L’IA au service de l’impact mondial des jeunes', ru: 'ИИ во благо глобального влияния молодёжи', ja: 'AI が世界の青年インパクトを支える', ko: 'AI로 글로벌 청년 영향력 실현' },
  'home.dual.aiLead': { en: 'Connecting people, opportunities and projects more intelligently — while keeping real relationships at the center.', zh: '更智能地连接人才、机遇与项目——同时始终把真实的人际关系放在核心。', fr: 'Connecter les personnes, les opportunités et les projets de façon plus intelligente — tout en gardant les vraies relations au cœur de tout.', ru: 'Более разумно соединять людей, возможности и проекты — ставя реальные отношения в центр всего.', ja: '人々、機会、プロジェクトをよりスマートにつなぐ——いつでもリアルな人間関係を中心に。', ko: '사람, 기회, 프로젝트를 더 스마트하게 연결 — 언제나 진정한 관계를 중심에 두고.' },
  'home.dual.ai1': { en: 'Opportunity Matching', zh: '机遇匹配', fr: 'Mise en relation des opportunités', ru: 'Подбор возможностей', ja: '機会マッチング', ko: '기회 매칭' },
  'home.dual.ai1sub': { en: 'Find relevant opportunities and people', zh: '发现匹配的机遇与人才', fr: 'Trouver les opportunités et les personnes pertinentes', ru: 'Находить подходящие возможности и людей', ja: '自分に合う機会と人々を見つける', ko: '관련 기회와 사람을 찾기' },
  'home.dual.ai2': { en: 'Cross-border Collaboration', zh: '跨境协作', fr: 'Collaboration transfrontalière', ru: 'Трансграничное сотрудничество', ja: '国境を越えた協業', ko: '국경을 넘는 협업' },
  'home.dual.ai2sub': { en: 'Connect communities and institutions', zh: '连接社区与机构', fr: 'Connecter les communautés et les institutions', ru: 'Соединять сообщества и организации', ja: 'コミュニティと機関をつなぐ', ko: '커뮤니티와 기관 연결' },
  'home.dual.ai3': { en: 'Insights & Learning', zh: '洞察与学习', fr: 'Analyses et apprentissage', ru: 'Аналитика и обучение', ja: 'インサイトと学び', ko: '인사이트와 학습' },
  'home.dual.ai3sub': { en: 'Turn information into action', zh: '将信息转化为行动', fr: 'Transformer l’information en action', ru: 'Превращать информацию в действия', ja: '情報を行動に変える', ko: '정보를 행동으로 전환' },
  'home.dual.exploreAI': { en: 'Explore AI & Innovation', zh: '探索 AI 与创新', fr: 'Explorer l’IA et l’innovation', ru: 'Изучить ИИ и инновации', ja: 'AI とイノベーションを見る', ko: 'AI와 혁신 살펴보기' },
  'home.country.kicker': { en: 'Global network', zh: '全球网络', fr: 'Réseau mondial', ru: 'Глобальная сеть', ja: 'グローバルネットワーク', ko: '글로벌 네트워크' },
  'home.country.title': { en: 'Our Country Network', zh: '我们的国家网络', fr: 'Notre réseau de pays', ru: 'Наша сеть стран', ja: '私たちの国ネットワーク', ko: '우리의 국가 네트워크' },
  'home.country.lead': { en: 'A glimpse into a vibrant, borderless youth ecosystem spanning regions and cultures.', zh: '一瞥跨越地域与文化的活力无界青年生态。', fr: 'Un aperçu d’un écosystème de jeunes dynamique et sans frontières, à travers les régions et les cultures.', ru: 'Взгляд на живую молодёжную экосистему без границ — через регионы и культуры.', ja: '地域と文化を越えた、生き生きとした国境なき青年エコシステムの一端。', ko: '지역과 문화를 넘어선 활기찬 국경 없는 청년 생태계를 엿보다.' },
  'home.people.kicker': { en: 'The people behind SYC', zh: 'SYC 背后的人', fr: 'Les personnes derrière SYC', ru: 'Люди за SYC', ja: 'SYC を支える人々', ko: 'SYC를 이끄는 사람들' },
  'home.people.title': { en: 'People Make the Network.', zh: '人，成就网络。', fr: 'Les personnes font le réseau.', ru: 'Люди создают сеть.', ja: '人がネットワークをつくる。', ko: '사람이 네트워크를 만듭니다.' },
  'home.people.lead': { en: 'A dedicated space for the country representatives, local teams and people driving collaboration forward.', zh: '为推动合作前行的国家代表、本地团队与伙伴专设的展示空间。', fr: 'Un espace dédié aux représentants nationaux, aux équipes locales et aux personnes qui font avancer la collaboration.', ru: 'Пространство для национальных представителей, местных команд и людей, продвигающих сотрудничество.', ja: '協業を推進する国代表、地域チーム、そして仲間のための dedicated な紹介スペース。', ko: '협업을 이끄는 국가 대표, 현지 팀, 동료들을 위한 소개 공간입니다.' },
  'home.people.more': { en: 'Meet our people', zh: '认识我们的团队', fr: 'Découvrir notre équipe', ru: 'Познакомиться с командой', ja: 'チームを見る', ko: '팀 살펴보기' },
  'home.people.note': { en: 'A community led by people, powered by shared purpose.', zh: '由人引领、以共同使命驱动的社区。', fr: 'Une communauté dirigée par les gens, portée par un objectif commun.', ru: 'Сообщество, ведомое людьми и движимое общей целью.', ja: '人に率いられ、共通の使命で動くコミュニティ。', ko: '사람이 이끌고 공동의 목적이 움직이는 커뮤니티.' },
  'home.partners.kicker': { en: 'Working across borders', zh: '跨越国界协作', fr: 'Travailler au-delà des frontières', ru: 'Работа через границы', ja: '国境を越えた協業', ko: '국경을 넘는 협업' },
  'home.partners.title': { en: 'Partnerships That Create Opportunity.', zh: '创造机遇的合作伙伴关系。', fr: 'Des partenariats qui créent des opportunités.', ru: 'Партнёрства, создающие возможности.', ja: '機会を生むパートナーシップ。', ko: '기회를 만드는 파트너십.' },
  'home.partners.lead': { en: 'SYC connects institutions, programmes and youth organisations across different sectors.', zh: 'SYC 连接不同领域的机构、项目与青年组织。', fr: 'SYC relie les institutions, les programmes et les organisations de jeunesse de différents secteurs.', ru: 'SYC объединяет организации, программы и молодёжные объединения разных секторов.', ja: 'SYC は様々な分野の機関、プログラム、青年組織をつなぎます。', ko: 'SYC는 다양한 분야의 기관, 프로그램, 청년 단체를 연결합니다.' },
  'home.partners.more': { en: 'Explore partnerships', zh: '探索合作', fr: 'Explorer les partenariats', ru: 'Изучить партнёрство', ja: 'パートナーシップを見る', ko: '파트너십 살펴보기' },
  'home.work.kicker': { en: 'Our work', zh: '我们的工作', fr: 'Nos actions', ru: 'Наша работа', ja: '私たちの活動', ko: '우리의 활동' },
  'home.work.title': { en: 'Real People. Shared Purpose. Lasting Impact.', zh: '真实的人，共同的使命，持久的影响。', fr: 'De vraies personnes. Un objectif commun. Un impact durable.', ru: 'Реальные люди. Общая цель. Долгосрочный эффект.', ja: '真の人々。共通の使命。持続的なインパクト。', ko: '진정한 사람들. 공동의 목적. 지속적인 영향.' },
  'home.work.lead': { en: 'From youth exchange to applied AI, our programmes turn connection into meaningful, lasting impact.', zh: '从青年交流到应用 AI，我们的项目将连接转化为有意义、持久的影响。', fr: 'De l’échange de jeunes à l’IA appliquée, nos programmes transforment la connexion en un impact réel et durable.', ru: 'От молодёжного обмена до прикладного ИИ — наши программы превращают связь в реальный и долгосрочный эффект.', ja: '青年交流から実用 AI まで、私たちのプログラムはつながりを有意義で持続的な影響へ変えます。', ko: '청년 교류부터 응용 AI까지, 우리 프로그램은 연결을 의미 있고 지속적인 영향으로 바꿉니다.' },
  'home.work.more': { en: 'Stories and impact', zh: '故事与影响', fr: 'Histoires et impact', ru: 'Истории и влияние', ja: 'ストーリーとインパクト', ko: '이야기와 영향' },
  'home.eco.kicker': { en: 'Digital ecosystem', zh: '数字生态', fr: 'Écosystème numérique', ru: 'Цифровая экосистема', ja: 'デジタルエコシステム', ko: '디지털 생태계' },
  'home.eco.title': { en: 'AI-Native by Design. Human at Heart.', zh: 'AI 原生设计，以人为本。', fr: 'Natif IA par conception. Humain avant tout.', ru: 'ИИ в основе дизайна. Человек в центре.', ja: 'AI ネイティブな設計。人間が中心。', ko: 'AI 네이티브 설계. 사람이 중심.' },
  'home.eco.lead': { en: 'A practical technology layer supporting a youth-led global network — not a replacement for personal connection.', zh: '服务青年主导的全球网络的实用技术层——而非取代人际连接。', fr: 'Une couche technologique pratique au service d’un réseau mondial dirigé par les jeunes — et non un remplacement des liens humains.', ru: 'Практический технологический слой для глобальной сети, ведомой молодёжью, — а не замена человеческих связей.', ja: '青年が主導するグローバルネットワークを支える実用的な技術層——人間のつながりの代替ではありません。', ko: '청년이 이끄는 글로벌 네트워크를 위한 실용적 기술 계층 — 인간적 연결을 대체하지 않습니다.' },
  'home.eco.more': { en: 'Our AI approach', zh: '我们的 AI 理念', fr: 'Notre approche de l’IA', ru: 'Наш подход к ИИ', ja: '私たちの AI アプローチ', ko: '우리의 AI 접근법' },

  // ---------- About ----------
  'seo.about.title': { en: 'About SYC — Singapore Youth Community', zh: '关于 SYC — Singapore Youth Community', fr: 'À propos de SYC — Singapore Youth Community', ru: 'О SYC — Singapore Youth Community', ja: 'SYC について — Singapore Youth Community', ko: 'SYC 소개 — Singapore Youth Community' },
  'seo.about.desc': { en: 'Learn about Singapore Youth Community: our mission, vision and values as an AI-native global youth community.', zh: '了解 Singapore Youth Community 的使命、愿景与价值观。', fr: 'Découvrez Singapore Youth Community : notre mission, notre vision et nos valeurs en tant que communauté de jeunes mondiale natif IA.', ru: 'Узнайте о Singapore Youth Community: наша миссия, видение и ценности как молодёжного сообщества с ИИ в основе.', ja: 'Singapore Youth Community の使命、ビジョン、価値観をご紹介します。AI ネイティブなグローバル青年コミュニティです。', ko: 'Singapore Youth Community의 사명, 비전, 가치관을 알아보세요. AI 네이티브 글로벌 청년 커뮤니티입니다.' },
  'about.hero.eyebrow': { en: 'About SYC', zh: '关于 SYC', fr: 'À propos de SYC', ru: 'О SYC', ja: 'SYC について', ko: 'SYC 소개' },
  'about.hero.title': { en: 'A Global Community, Built on Purpose.', zh: '以使命铸就的全球社区。', fr: 'Une communauté mondiale, forgée par un objectif.', ru: 'Глобальное сообщество, созданное целью.', ja: '使命で築かれたグローバルコミュニティ。', ko: '목적으로 만들어진 글로벌 커뮤니티.' },
  'about.hero.lead': { en: 'Singapore Youth Community connects young people and institutions across borders, using AI as an enabling layer — never a replacement for real relationships.', zh: 'Singapore Youth Community 跨越国界连接青年与机构，以 AI 作为赋能层——永不取代真实的人际关系。', fr: 'Singapore Youth Community relie les jeunes et les institutions au-delà des frontières, en utilisant l’IA comme un levier — jamais en remplacement des vraies relations.', ru: 'Singapore Youth Community объединяет молодёжь и организации через границы, используя ИИ как вспомогательный инструмент — никогда вместо реальных отношений.', ja: 'Singapore Youth Community は国境を越えて若者と機関をつなぎ、AI を補助的な手段として活用します——リアルな人間関係の代替ではありません。', ko: 'Singapore Youth Community는 국경을 넘어 청년과 기관을 연결하며 AI를 지원 도구로 활용합니다 — 진정한 관계를 대체하지 않습니다.' },
  'about.mission.kicker': { en: 'Mission & values', zh: '使命与价值观', fr: 'Mission et valeurs', ru: 'Миссия и ценности', ja: '使命と価値観', ko: '사명과 가치' },
  'about.mission.title': { en: 'Why We Exist', zh: '我们为何存在', fr: 'Pourquoi nous existons', ru: 'Почему мы существуем', ja: '私たちが存在する理由', ko: '우리가 존재하는 이유' },
  'about.vision.title': { en: 'Our Vision', zh: '我们的愿景', fr: 'Notre vision', ru: 'Наше видение', ja: '私たちのビジョン', ko: '우리의 비전' },
  'about.vision.body': { en: 'A world where young people can collaborate across borders with trust, purpose and the right tools.', zh: '一个青年能够凭借信任、使命感与合适工具跨越国界协作的世界。', fr: 'Un monde où les jeunes peuvent collaborer au-delà des frontières avec confiance, un objectif clair et les bons outils.', ru: 'Мир, где молодёжь может сотрудничать через границы с доверием, целью и подходящими инструментами.', ja: '若者が信頼、使命感、適切なツールで国境を越えて協業できる世界。', ko: '청년이 신뢰, 목적, 적절한 도구로 국경을 넘어 협업할 수 있는 세상.' },
  'about.mission.vtitle': { en: 'Our Mission', zh: '我们的使命', fr: 'Notre mission', ru: 'Наша миссия', ja: '私たちの使命', ko: '우리의 사명' },
  'about.mission.mbody': { en: 'To connect youth, institutions and opportunities in a global network that turns connection into real opportunity.', zh: '在全球网络中连接青年、机构与机遇，让连接转化为真实的机会。', fr: 'Relier les jeunes, les institutions et les opportunités dans un réseau mondial qui transforme la connexion en opportunités réelles.', ru: 'Соединять молодёжь, организации и возможности в глобальной сети, превращая связи в реальные возможности.', ja: '青年、機関、機会をグローバルネットワークでつなぎ、つながりを実際の機会へ変えること。', ko: '청년, 기관, 기회를 글로벌 네트워크로 연결해 관계를 실제 기회로 바꾸는 것.' },
  'about.values.title': { en: 'Our Values', zh: '我们的价值观', fr: 'Nos valeurs', ru: 'Наши ценности', ja: '私たちの価値観', ko: '우리의 가치' },
  'about.values.body': { en: 'People first, integrity in every claim, and responsible use of technology in service of community.', zh: '以人为本，坦诚可信，负责任地使用技术服务社区。', fr: 'Les personnes d’abord, l’intégrité dans chaque affirmation et un usage responsable de la technologie au service de la communauté.', ru: 'Люди превыше всего, честность в каждом утверждении и ответственное использование технологий во благо сообщества.', ja: '人を第一に、すべての主張に誠実さを、そしてコミュニティのために技術を責任を持って使うこと。', ko: '사람이 먼저, 모든 주장에 정직함, 그리고 커뮤니티를 위한 기술의 책임 있는 사용.' },
  'about.timeline.kicker': { en: 'Our journey', zh: '我们的历程', fr: 'Notre parcours', ru: 'Наш путь', ja: '私たちの歩み', ko: '우리의 여정' },
  'about.timeline.title': { en: 'How the Network Grew', zh: '网络如何成长', fr: 'Comment le réseau a grandi', ru: 'Как росла сеть', ja: 'ネットワークが育った道のり', ko: '네트워크가 성장해 온 여정' },
  'about.timeline.s1': { en: 'Local roots', zh: '扎根本地', fr: 'Racines locales', ru: 'Местные корни', ja: '地域に根ざす', ko: '지역에 뿌리내리다' },
  'about.timeline.s1d': { en: 'A youth community based in Singapore.', zh: '一个源自新加坡的青年社区。', fr: 'Une communauté de jeunes basée à Singapour.', ru: 'Молодёжное сообщество из Сингапура.', ja: 'シンガポールを拠点とする青年コミュニティ。', ko: '싱가포르에 기반을 둔 청년 커뮤니티.' },
  'about.timeline.s2': { en: 'Regional ties', zh: '区域连接', fr: 'Liens régionaux', ru: 'Региональные связи', ja: '地域のつながり', ko: '지역적 연결' },
  'about.timeline.s2d': { en: 'Building links across the region.', zh: '在区域内建立连接。', fr: 'Créer des liens à travers la région.', ru: 'Строить связи по всему региону.', ja: '地域全体でつながりを築く。', ko: '지역 전체에 걸쳐 연결을 구축하다.' },
  'about.timeline.s3': { en: 'Global network', zh: '全球网络', fr: 'Réseau mondial', ru: 'Глобальная сеть', ja: 'グローバルネットワーク', ko: '글로벌 네트워크' },
  'about.timeline.s3d': { en: 'Connecting partners and youth worldwide.', zh: '连接全球的合作伙伴与青年。', fr: 'Connecter les partenaires et les jeunes du monde entier.', ru: 'Соединять партнёров и молодёжь по всему миру.', ja: '世界中のパートナーと若者をつなぐ。', ko: '전 세계의 파트너와 청년을 연결하다.' },
  'about.timeline.s4': { en: 'AI-native', zh: 'AI 原生', fr: 'Natif IA', ru: 'ИИ в основе', ja: 'AI ネイティブ', ko: 'AI 네이티브' },
  'about.timeline.s4d': { en: 'Applying AI to strengthen collaboration.', zh: '运用 AI 强化协作。', fr: 'Appliquer l’IA pour renforcer la collaboration.', ru: 'Применять ИИ для укрепления сотрудничества.', ja: 'AI を活用して協業を強化する。', ko: 'AI를 활용해 협업을 강화하다.' },

  // ---------- Network ----------
  'seo.network.title': { en: 'Global Network — Singapore Youth Community', zh: '全球网络 — Singapore Youth Community', fr: 'Réseau mondial — Singapore Youth Community', ru: 'Глобальная сеть — Singapore Youth Community', ja: 'グローバルネットワーク — Singapore Youth Community', ko: '글로벌 네트워크 — Singapore Youth Community' },
  'seo.network.desc': { en: 'Explore SYC global youth network across countries and regions, connected through shared purpose and collaboration.', zh: '探索 SYC 跨越国家与地区的全球青年网络，以共同使命与协作相连。', fr: 'Explorez le réseau mondial de jeunes SYC à travers les pays et les régions, unis par un objectif commun et la collaboration.', ru: 'Изучайте глобальную молодёжную сеть SYC по странам и регионам, объединённую общей целью и сотрудничеством.', ja: '共通の使命と協業で結ばれた、国と地域を越える SYC グローバル青年ネットワークを探索。', ko: '공동의 목적과 협업으로 연결된 국가와 지역의 SYC 글로벌 청년 네트워크를 살펴보세요.' },
  'network.hero.eyebrow': { en: 'Global network', zh: '全球网络', fr: 'Réseau mondial', ru: 'Глобальная сеть', ja: 'グローバルネットワーク', ko: '글로벌 네트워크' },
  'network.hero.title': { en: 'A Network That Spans the Globe.', zh: '遍布全球的网络。', fr: 'Un réseau qui s’étend dans le monde entier.', ru: 'Сеть, охватывающая весь мир.', ja: '世界を網羅するネットワーク。', ko: '전 세계를 아우르는 네트워크.' },
  'network.hero.lead': { en: 'Explore the youth communities and institutional collaborators that make up our international network.', zh: '探索构成我们国际网络的青年社区与机构合作伙伴。', fr: 'Explorez les communautés de jeunes et les collaborateurs institutionnels qui composent notre réseau international.', ru: 'Изучайте молодёжные сообщества и институциональных партнёров, составляющие нашу международную сеть.', ja: '私たちの国際ネットワークを構成する青年コミュニティと機関パートナーをご覧ください。', ko: '우리의 국제 네트워크를 이루는 청년 커뮤니티와 기관 파트너를 살펴보세요.' },
  'network.map.kicker': { en: 'Worldwide presence', zh: '全球布局', fr: 'Présence mondiale', ru: 'Глобальное присутствие', ja: 'グローバルな展開', ko: '글로벌 진출' },
  'network.map.title': { en: 'Where Our Network Reaches', zh: '网络覆盖范围', fr: 'Où notre réseau s’étend', ru: 'Где простирается наша сеть', ja: 'ネットワークの到達範囲', ko: '네트워크의 도달 범위' },
  'network.map.note': { en: 'Communities and partners connected across regions', zh: '跨越地区相连的社区与合作伙伴', fr: 'Communautés et partenaires connectés entre les régions', ru: 'Сообщества и партнёры, связанные между регионами', ja: '地域を越えてつながるコミュニティとパートナー', ko: '지역을 넘어 연결된 커뮤니티와 파트너' },
  'network.countries.title': { en: 'Countries in the Network', zh: '网络中的国家', fr: 'Pays du réseau', ru: 'Страны сети', ja: 'ネットワークの参加国', ko: '네트워크의 국가들' },
  'network.filter.all': { en: 'All regions', zh: '所有地区', fr: 'Toutes les régions', ru: 'Все регионы', ja: 'すべての地域', ko: '모든 지역' },
  'network.filter.asia': { en: 'Asia', zh: '亚洲', fr: 'Asie', ru: 'Азия', ja: 'アジア', ko: '아시아' },
  'network.filter.europe': { en: 'Europe', zh: '欧洲', fr: 'Europe', ru: 'Европа', ja: 'ヨーロッパ', ko: '유럽' },
  'network.filter.americas': { en: 'Americas', zh: '美洲', fr: 'Amériques', ru: 'Америка', ja: 'アメリカ', ko: '아메리카' },
  'network.filter.africa': { en: 'Africa', zh: '非洲', fr: 'Afrique', ru: 'Африка', ja: 'アフリカ', ko: '아프리카' },
  'network.filter.oceania': { en: 'Oceania', zh: '大洋洲', fr: 'Océanie', ru: 'Океания', ja: 'オセアニア', ko: '오세아니아' },
  'network.filter.middleeast': { en: 'Middle East', zh: '中东', fr: 'Moyen-Orient', ru: 'Ближний Восток', ja: '中東', ko: '중동' },
  'network.filter.global': { en: 'Global', zh: '全球', fr: 'Mondial', ru: 'Глобально', ja: 'グローバル', ko: '글로벌' },
  'network.empty': { en: 'No matching countries.', zh: '没有匹配的国家。', fr: 'Aucun pays correspondant.', ru: 'Подходящих стран нет.', ja: '該当する国はありません。', ko: '해당하는 국가가 없습니다.' },

  // ---------- Partnerships ----------
  'seo.partnerships.title': { en: 'Partnerships — Singapore Youth Community', zh: '合作伙伴 — Singapore Youth Community', fr: 'Partenariats — Singapore Youth Community', ru: 'Партнёрство — Singapore Youth Community', ja: 'パートナーシップ — Singapore Youth Community', ko: '파트너십 — Singapore Youth Community' },
  'seo.partnerships.desc': { en: 'Explore partnership categories with Singapore Youth Community and how we work together across sectors.', zh: '探索与 Singapore Youth Community 的合作类别及跨领域协作方式。', fr: 'Explorez les catégories de partenariat avec Singapore Youth Community et notre façon de collaborer entre les secteurs.', ru: 'Изучайте категории партнёрства с Singapore Youth Community и то, как мы работаем между секторами.', ja: 'Singapore Youth Community とのパートナーシップの種類と、分野を越えた協業の方法をご紹介。', ko: 'Singapore Youth Community와의 파트너십 분야와 부문 간 협업 방식을 살펴보세요.' },
  'partnerships.hero.eyebrow': { en: 'Partnerships', zh: '合作伙伴', fr: 'Partenariats', ru: 'Партнёрство', ja: 'パートナーシップ', ko: '파트너십' },
  'partnerships.hero.title': { en: 'Working Together, Across Borders.', zh: '跨国界携手合作。', fr: 'Travailler ensemble, au-delà des frontières.', ru: 'Вместе через границы.', ja: '国境を越えて、共に働く。', ko: '국경을 넘어 함께 일하기.' },
  'partnerships.hero.lead': { en: 'SYC works with institutions, programmes and youth organisations across sectors to create opportunity.', zh: 'SYC 与各领域的机构、项目与青年组织合作，共同创造机遇。', fr: 'SYC travaille avec des institutions, des programmes et des organisations de jeunesse de différents secteurs pour créer des opportunités.', ru: 'SYC сотрудничает с организациями, программами и молодёжными объединениями разных секторов ради создания возможностей.', ja: 'SYC は様々な分野の機関、プログラム、青年組織と協力して機会を創出します。', ko: 'SYC는 다양한 분야의 기관, 프로그램, 청년 단체와 협력해 기회를 만듭니다.' },
  'partnerships.grid.title': { en: 'Types of Partners', zh: '合作伙伴类型', fr: 'Types de partenaires', ru: 'Типы партнёров', ja: 'パートナーの種類', ko: '파트너 유형' },
  'partnerships.note': { en: 'From local communities to global institutions, our partners share a commitment to youth opportunity.', zh: '从本地社区到全球机构，我们的合作伙伴共同致力于青年发展机会。', fr: 'Des communautés locales aux institutions mondiales, nos partenaires partagent un engagement pour les opportunités des jeunes.', ru: 'От местных сообществ до глобальных организаций — наши партнёры разделяют приверженность возможностям молодёжи.', ja: '地域コミュニティからグローバル機関まで、私たちのパートナーは青年の機会へのコミットメントを共有しています。', ko: '지역 커뮤니티부터 글로벌 기관까지, 우리 파트너는 청년 기회에 대한 의지를 함께 나눕니다.' },

  // ---------- People ----------
  'seo.people.title': { en: 'Our People — Singapore Youth Community', zh: '我们的团队 — Singapore Youth Community', fr: 'Notre équipe — Singapore Youth Community', ru: 'Наша команда — Singapore Youth Community', ja: '私たちのチーム — Singapore Youth Community', ko: '우리 팀 — Singapore Youth Community' },
  'seo.people.desc': { en: 'Meet the people behind Singapore Youth Community — the team and representatives driving our global network.', zh: '认识 SYC 背后的团队——推动全球网络发展的成员与代表。', fr: 'Découvrez les personnes derrière Singapore Youth Community — l’équipe et les représentants qui animent notre réseau mondial.', ru: 'Познакомьтесь с людьми за Singapore Youth Community — командой и представителями, развивающими нашу глобальную сеть.', ja: 'Singapore Youth Community を支える人々——グローバルネットワークを牽引するチームと代表をご紹介。', ko: 'Singapore Youth Community를 이끄는 사람들 — 글로벌 네트워크를 발전시키는 팀과 대표를 만나보세요.' },
  'people.hero.eyebrow': { en: 'Our people', zh: '我们的团队', fr: 'Notre équipe', ru: 'Наша команда', ja: '私たちのチーム', ko: '우리 팀' },
  'people.hero.title': { en: 'The People Behind the Network.', zh: '网络背后的人。', fr: 'Les personnes derrière le réseau.', ru: 'Люди за сетью.', ja: 'ネットワークを支える人々。', ko: '네트워크 뒤의 사람들.' },
  'people.hero.lead': { en: 'A space dedicated to the country representatives, local teams and people driving collaboration forward.', zh: '为推动合作前行的国家代表、本地团队与伙伴专设的展示空间。', fr: 'Un espace dédié aux représentants nationaux, aux équipes locales et aux personnes qui font avancer la collaboration.', ru: 'Пространство для национальных представителей, местных команд и людей, продвигающих сотрудничество.', ja: '協業を推進する国代表、地域チーム、そして仲間のための紹介スペース。', ko: '협업을 이끄는 국가 대표, 현지 팀, 동료들을 위한 소개 공간입니다.' },
  'people.grid.title': { en: 'Our Team', zh: '我们的团队', fr: 'Notre équipe', ru: 'Наша команда', ja: '私たちのチーム', ko: '우리 팀' },
  'people.note': { en: 'A diverse team united by a belief in the power of connected youth.', zh: '一支因坚信青年连接的力量而凝聚的多元团队。', fr: 'Une équipe diversifiée, unie par la conviction au pouvoir de la jeunesse connectée.', ru: 'Разнообразная команда, объединённая верой в силу связанной молодёжи.', ja: 'つながる青年の力を信じる、多様なチーム。', ko: '연결된 청년의 힘을 믿는 다양한 팀.' },
  'people.sample': { en: 'Community member', zh: '社区成员', fr: 'Membre de la communauté', ru: 'Участник сообщества', ja: 'コミュニティメンバー', ko: '커뮤니티 회원' },

  // ---------- AI ----------
  'seo.ai.title': { en: 'AI & Innovation — Singapore Youth Community', zh: 'AI 与创新 — Singapore Youth Community', fr: 'IA et innovation — Singapore Youth Community', ru: 'ИИ и инновации — Singapore Youth Community', ja: 'AI とイノベーション — Singapore Youth Community', ko: 'AI와 혁신 — Singapore Youth Community' },
  'seo.ai.desc': { en: 'Explore the SYC AI ecosystem: Youth AI OS, YOUTH UNI, YOUTH X UNI and YOUTH X.', zh: '探索 SYC AI 生态：Youth AI OS、YOUTH UNI、YOUTH X UNI 与 YOUTH X。', fr: 'Explorez l’écosystème IA de SYC : Youth AI OS, YOUTH UNI, YOUTH X UNI et YOUTH X.', ru: 'Изучайте экосистему ИИ SYC: Youth AI OS, YOUTH UNI, YOUTH X UNI и YOUTH X.', ja: 'SYC の AI エコシステムをご紹介：Youth AI OS、YOUTH UNI、YOUTH X UNI、YOUTH X。', ko: 'SYC의 AI 생태계를 살펴보세요: Youth AI OS, YOUTH UNI, YOUTH X UNI, YOUTH X.' },
  'ai.hero.eyebrow': { en: 'AI & innovation', zh: 'AI 与创新', fr: 'IA et innovation', ru: 'ИИ и инновации', ja: 'AI とイノベーション', ko: 'AI와 혁신' },
  'ai.hero.title': { en: 'AI for Global Youth Impact.', zh: 'AI 助力全球青年影响力。', fr: 'L’IA au service de l’impact mondial des jeunes.', ru: 'ИИ во благо глобального влияния молодёжи.', ja: 'AI が世界の青年インパクトを支える。', ko: 'AI로 글로벌 청년 영향력 실현.' },
  'ai.hero.lead': { en: 'A practical technology layer that helps a youth-led network collaborate better — with people at the heart.', zh: '帮助青年主导网络更好协作的实用技术层——以人为本。', fr: 'Une couche technologique pratique qui aide un réseau dirigé par les jeunes à mieux collaborer — avec les personnes au cœur.', ru: 'Практический технологический слой, помогающий сети, ведомой молодёжью, лучше сотрудничать — с людьми в центре.', ja: '青年が主導するネットワークの協業を支える実用的な技術層——人々を中心に。', ko: '청년이 이끄는 네트워크의 협업을 돕는 실용적 기술 계층 — 사람이 중심입니다.' },
  'ai.os.kicker': { en: 'Youth AI OS', zh: 'Youth AI OS', fr: 'Youth AI OS', ru: 'Youth AI OS', ja: 'Youth AI OS', ko: 'Youth AI OS' },
  'ai.os.title': { en: 'An AI-Native Collaboration Approach', zh: 'AI 原生的协作方式', fr: 'Une approche de collaboration natif IA', ru: 'Подход к сотрудничеству с ИИ в основе', ja: 'AI ネイティブな協業のアプローチ', ko: 'AI 네이티브 협업 접근법' },
  'ai.os.body': { en: 'Youth AI OS connects people, opportunities and partners intelligently, while keeping real relationships at the center.', zh: 'Youth AI OS 智能地连接人才、机遇与合作伙伴，同时始终把真实关系放在核心。', fr: 'Youth AI OS relie intelligemment les personnes, les opportunités et les partenaires, tout en gardant les vraies relations au cœur de tout.', ru: 'Youth AI OS разумно соединяет людей, возможности и партнёров, сохраняя реальные отношения в центре всего.', ja: 'Youth AI OS は人々、機会、パートナーをスマートにつなぎ、常にリアルな関係を中心に据えます。', ko: 'Youth AI OS는 사람, 기회, 파트너를 스마트하게 연결하며 언제나 진정한 관계를 중심에 둡니다.' },
  'ai.platforms.title': { en: 'The SYC AI Ecosystem', zh: 'SYC AI 生态', fr: 'L’écosystème IA de SYC', ru: 'Экосистема ИИ SYC', ja: 'SYC の AI エコシステム', ko: 'SYC의 AI 생태계' },
  'ai.platforms.lead': { en: 'A family of platforms supporting youth opportunity, community and collaboration.', zh: '支持青年机遇、社区与协作的平台矩阵。', fr: 'Une famille de plateformes au service des opportunités, de la communauté et de la collaboration des jeunes.', ru: 'Семейство платформ для возможностей, сообщества и сотрудничества молодёжи.', ja: '青年の機会、コミュニティ、協業を支えるプラットフォーム群。', ko: '청년의 기회, 커뮤니티, 협업을 지원하는 플랫폼 패밀리.' },
  'ai.stance.kicker': { en: 'AI for good', zh: 'AI 向善', fr: 'L’IA pour le bien', ru: 'ИИ во благо', ja: 'AI による善', ko: 'AI로 더 나은 세상' },
  'ai.stance.title': { en: 'Human at Heart.', zh: '以人为本。', fr: 'Humain avant tout.', ru: 'Человек в центре.', ja: '人間が中心。', ko: '사람이 중심.' },
  'ai.stance.body': { en: 'Technology amplifies human connection — it never replaces the relationships at the core of our community.', zh: '技术放大人际连接——永不取代社区核心的人际关系。', fr: 'La technologie amplifie les liens humains — elle ne remplace jamais les relations au cœur de notre communauté.', ru: 'Технология усиливает человеческие связи — она никогда не заменяет отношения в центре нашего сообщества.', ja: '技術は人間のつながりを増幅する——コミュニティの中心である人間関係を置き換えるものではありません。', ko: '기술은 인간적 연결을 증폭시킵니다 — 커뮤니티 핵심인 관계를 대체하지 않습니다.' },

  // ---------- Impact ----------
  'seo.impact.title': { en: 'Our Work & Impact — Singapore Youth Community', zh: '项目与影响 — Singapore Youth Community', fr: 'Nos actions et notre impact — Singapore Youth Community', ru: 'Наша работа и влияние — Singapore Youth Community', ja: '活動とインパクト — Singapore Youth Community', ko: '활동과 영향 — Singapore Youth Community' },
  'seo.impact.desc': { en: 'Explore thematic programme areas and impact stories from Singapore Youth Community.', zh: '探索 Singapore Youth Community 的主题项目领域与影响力故事。', fr: 'Explorez les domaines thématiques et les récits d’impact de Singapore Youth Community.', ru: 'Изучайте тематические направления и истории влияния Singapore Youth Community.', ja: 'Singapore Youth Community のテーマ別プログラム分野とインパクトの物語をご紹介。', ko: 'Singapore Youth Community의 테마별 프로그램 분야와 영향 이야기를 살펴보세요.' },
  'impact.hero.eyebrow': { en: 'Our work', zh: '我们的工作', fr: 'Nos actions', ru: 'Наша работа', ja: '私たちの活動', ko: '우리의 활동' },
  'impact.hero.title': { en: 'Real People. Shared Purpose. Lasting Impact.', zh: '真实的人，共同的使命，持久的影响。', fr: 'De vraies personnes. Un objectif commun. Un impact durable.', ru: 'Реальные люди. Общая цель. Долгосрочный эффект.', ja: '真の人々。共通の使命。持続的なインパクト。', ko: '진정한 사람들. 공동의 목적. 지속적인 영향.' },
  'impact.hero.lead': { en: 'From youth exchange to applied AI, discover the programmes through which our community creates lasting impact.', zh: '从青年交流到应用 AI，了解我们的社区创造持久影响的项目。', fr: 'De l’échange de jeunes à l’IA appliquée, découvrez les programmes par lesquels notre communauté crée un impact durable.', ru: 'От молодёжного обмена до прикладного ИИ — открывайте программы, через которые наше сообщество создаёт долгосрочный эффект.', ja: '青年交流から実用 AI まで、私たちのコミュニティが持続的な影響を生むプログラムをご紹介。', ko: '청년 교류부터 응용 AI까지, 우리 커뮤니티가 지속적인 영향을 만드는 프로그램을 만나보세요.' },
  'impact.cases.title': { en: 'Programme Areas', zh: '项目领域', fr: 'Domaines d’action', ru: 'Направления работы', ja: 'プログラム分野', ko: '프로그램 분야' },
  'impact.cases.note': { en: 'Three interconnected pillars turn global connection into opportunities for young people.', zh: '三大相互关联的支柱，将全球连接转化为青年的发展机遇。', fr: 'Trois piliers interconnectés transforment la connexion mondiale en opportunités pour les jeunes.', ru: 'Три взаимосвязанных опоры превращают глобальную связь в возможности для молодёжи.', ja: '三つの連動する柱が、世界的なつながりを青年の機会へと変えます。', ko: '세 개의 상호 연결된 축이 글로벌 연결을 청년의 기회로 바꿉니다.' },

  // ---------- Contact ----------
  'seo.contact.title': { en: 'Contact — Singapore Youth Community', zh: '联系我们 — Singapore Youth Community', fr: 'Contact — Singapore Youth Community', ru: 'Контакты — Singapore Youth Community', ja: 'お問い合わせ — Singapore Youth Community', ko: '문의하기 — Singapore Youth Community' },
  'seo.contact.desc': { en: 'Get in touch with Singapore Youth Community for partnership and collaboration enquiries.', zh: '联系 Singapore Youth Community 洽谈合作事宜。', fr: 'Contactez Singapore Youth Community pour toute question sur les partenariats et la collaboration.', ru: 'Свяжитесь с Singapore Youth Community по вопросам партнёрства и сотрудничества.', ja: 'Singapore Youth Community へのパートナーシップや協業に関するお問い合わせ。', ko: '파트너십 및 협업 문의는 Singapore Youth Community로 연락하세요.' },
  'contact.hero.eyebrow': { en: 'Contact', zh: '联系我们', fr: 'Contact', ru: 'Контакты', ja: 'お問い合わせ', ko: '문의하기' },
  'contact.hero.title': { en: 'Let’s Build Something Together.', zh: '让我们携手共创。', fr: 'Construisons quelque chose ensemble.', ru: 'Давайте создадим что-то вместе.', ja: '一緒に何かを作りましょう。', ko: '함께 무언가를 만들어 봅시다.' },
  'contact.hero.lead': { en: 'Tell us about your organisation and how you would like to collaborate with SYC.', zh: '请告诉我们您的机构以及希望与 SYC 合作的方式。', fr: 'Parlez-nous de votre organisation et de la façon dont vous souhaitez collaborer avec SYC.', ru: 'Расскажите о вашей организации и о том, как вы хотите сотрудничать с SYC.', ja: '貴団体と、SYC との協業のご希望についてお聞かせください。', ko: '귀 기관과 SYC와의 협업 방식을 알려주세요.' },
  'contact.form.title': { en: 'Partnership Enquiry', zh: '合作咨询', fr: 'Demande de partenariat', ru: 'Запрос о партнёрстве', ja: 'パートナーシップのお問い合わせ', ko: '파트너십 문의' },
  'contact.form.name': { en: 'Full name', zh: '姓名', fr: 'Nom complet', ru: 'Полное имя', ja: 'お名前', ko: '성명' },
  'contact.form.email': { en: 'Email address', zh: '电子邮箱', fr: 'Adresse e-mail', ru: 'Электронная почта', ja: 'メールアドレス', ko: '이메일 주소' },
  'contact.form.org': { en: 'Organisation', zh: '机构', fr: 'Organisation', ru: 'Организация', ja: '団体名', ko: '기관명' },
  'contact.form.topic': { en: 'Topic', zh: '主题', fr: 'Sujet', ru: 'Тема', ja: '件名', ko: '주제' },
  'contact.form.message': { en: 'Message', zh: '留言', fr: 'Message', ru: 'Сообщение', ja: 'メッセージ', ko: '메시지' },
  'contact.form.submit': { en: 'Send Enquiry', zh: '发送咨询', fr: 'Envoyer la demande', ru: 'Отправить запрос', ja: '送信する', ko: '문의 보내기' },
  'contact.form.successTitle': { en: 'Thank you for reaching out', zh: '感谢您的来信', fr: 'Merci pour votre message', ru: 'Спасибо за ваше обращение', ja: 'お問い合わせありがとうございます', ko: '문의해 주셔서 감사합니다' },
  'contact.form.successBody': { en: 'Your enquiry has been received. A member of our team will be in touch with you shortly.', zh: '我们已收到您的咨询，团队成员将尽快与您联系。', fr: 'Votre demande a bien été reçue. Un membre de notre équipe vous contactera prochainement.', ru: 'Ваш запрос получен. Член нашей команды скоро свяжется с вами.', ja: 'お問い合わせを受け付けました。担当者より追ってご連絡いたします。', ko: '문의가 접수되었습니다. 담당자가 곧 연락드리겠습니다.' },
  'contact.channels.title': { en: 'Other Ways to Reach Us', zh: '其他联系方式', fr: 'Autres façons de nous joindre', ru: 'Другие способы связаться', ja: 'その他のお問い合わせ方法', ko: '다른 연락 방법' },
  'contact.channels.note': { en: 'Reach out to the right team and we will point you in the right direction.', zh: '联系对应的团队，我们将为您提供指引。', fr: 'Contactez la bonne équipe et nous vous orienterons dans la bonne direction.', ru: 'Свяжитесь с нужной командой — и мы направим вас в правильном направлении.', ja: '適切なチームにお問い合わせください。正しい担当をご案内します。', ko: '해당 팀에 문의하시면 올바른 담당자로 안내해 드립니다.' },
  'contact.faq.title': { en: 'Frequently Asked Questions', zh: '常见问题', fr: 'Questions fréquentes', ru: 'Частые вопросы', ja: 'よくある質問', ko: '자주 묻는 질문' },
  'contact.faq.q1': { en: 'Who can partner with SYC?', zh: '哪些机构可以与 SYC 合作？', fr: 'Qui peut s’associer à SYC ?', ru: 'Кто может стать партнёром SYC?', ja: 'SYC と連携できるのは誰ですか？', ko: '누가 SYC와 협력할 수 있나요?' },
  'contact.faq.a1': { en: 'Institutions, universities, youth organisations and innovation partners across sectors.', zh: '各领域的机构、大学、青年组织与创新合作伙伴。', fr: 'Institutions, universités, organisations de jeunesse et partenaires d’innovation de tous secteurs.', ru: 'Организации, университеты, молодёжные объединения и инновационные партнёры всех секторов.', ja: 'あらゆる分野の機関、大学、青年組織、イノベーションパートナーです。', ko: '모든 분야의 기관, 대학, 청년 단체, 혁신 파트너입니다.' },
  'contact.faq.q2': { en: 'How long does a response take?', zh: '多久会收到回复？', fr: 'Combien de temps prend une réponse ?', ru: 'Как быстро приходит ответ?', ja: '返信までどのくらいかかりますか？', ko: '답변은 얼마나 걸리나요?' },
  'contact.faq.a2': { en: 'We aim to respond to every enquiry within a few working days.', zh: '我们力争在几个工作日内回复每一条咨询。', fr: 'Nous nous efforçons de répondre à chaque demande en quelques jours ouvrés.', ru: 'Мы стремимся отвечать на каждый запрос в течение нескольких рабочих дней.', ja: 'すべてのお問い合わせに数営業日以内の返信を目指しています。', ko: '모든 문의에 영업일 기준 며칠 내로 답변드리도록 노력합니다.' },

  // ---------- 404 ----------
  'notfound.title': { en: 'Page Not Found', zh: '页面未找到', fr: 'Page introuvable', ru: 'Страница не найдена', ja: 'ページが見つかりません', ko: '페이지를 찾을 수 없습니다' },
  'notfound.body': { en: 'The page you are looking for does not exist.', zh: '您访问的页面不存在。', fr: 'La page que vous cherchez n’existe pas.', ru: 'Страница, которую вы ищете, не существует.', ja: 'お探しのページは存在しません。', ko: '찾으시는 페이지가 존재하지 않습니다.' },
  'notfound.back': { en: 'Back to home', zh: '返回首页', fr: 'Retour à l’accueil', ru: 'На главную', ja: 'ホームへ戻る', ko: '홈으로 돌아가기' },
  'about.value1.body': { en: 'Young people and communities stay at the centre of our work.', zh: '青年与社区始终是我们工作的中心。', fr: 'Les jeunes et les communautés restent au cœur de notre travail.', ru: 'Молодёжь и сообщества остаются в центре нашей работы.', ja: '若者とコミュニティを常に活動の中心に置きます。', ko: '청년과 커뮤니티를 항상 우리 일의 중심에 둡니다.' },
  'about.value1.title': { en: 'People First', zh: '人为先', fr: 'Les personnes d’abord', ru: 'Люди превыше всего', ja: '人を第一に', ko: '사람이 먼저' },
  'about.value2.body': { en: 'We earn every partnership through sincerity and transparency.', zh: '我们以真诚与透明赢得每一次合作。', fr: 'Nous gagnons chaque partenariat par la sincérité et la transparence.', ru: 'Мы заслуживаем каждое партнёрство искренностью и прозрачностью.', ja: '誠実さと透明性で協力関係を築きます。', ko: '진심과 투명성으로 모든 협력을 얻습니다.' },
  'about.value2.title': { en: 'Integrity', zh: '真诚', fr: 'Intégrité', ru: 'Честность', ja: '誠実さ', ko: '정직함' },
  'about.value3.body': { en: 'Technology in service of the community, never replacing human relationships.', zh: '技术服务于社区，绝不取代人与人之间的关系。', fr: 'La technologie au service de la communauté, sans jamais remplacer les relations humaines.', ru: 'Технологии во благо сообщества, а не вместо человеческих отношений.', ja: '技術はコミュニティに奉仕し、人間関係を置き換えません。', ko: '기술은 커뮤니티를 위해 봉사하며 인간 관계를 대체하지 않습니다.' },
  'about.value3.title': { en: 'Responsible Technology', zh: '负责任的技术', fr: 'Technologie responsable', ru: 'Ответственные технологии', ja: '責任ある技術', ko: '책임 있는 기술' },
  'ai.principle1.body': { en: 'AI serves people and never replaces real relationships in our community.', zh: 'AI 服务于人，绝不取代我们社群中真实的关系。', fr: 'L’IA sert les personnes et ne remplace jamais les vraies relations dans notre communauté.', ru: 'ИИ служит людям и никогда не заменяет реальные отношения в нашем сообществе.', ja: 'AI は人に奉仕し、コミュニティのリアルな関係を決して置き換えません。', ko: 'AI는 사람을 섬기며 커뮤니티의 진정한 관계를 대체하지 않습니다.' },
  'ai.principle1.title': { en: 'People at the Centre', zh: '以人为本', fr: 'Les personnes au centre', ru: 'Люди в центре', ja: '人々が中心', ko: '사람이 중심' },
  'ai.principle2.body': { en: 'We present our technology and practice with clarity and accountability.', zh: '我们清晰、负责任地呈现技术与实践。', fr: 'Nous présentons notre technologie et nos pratiques avec clarté et responsabilité.', ru: 'Мы представляем наши технологии и практику ясно и ответственно.', ja: '私たちの技術と実践を明確かつ責任を持って提示します。', ko: '우리의 기술과 실천을 명확하고 책임감 있게 제시합니다.' },
  'ai.principle2.title': { en: 'Transparent & Responsible', zh: '透明与责任', fr: 'Transparent et responsable', ru: 'Прозрачность и ответственность', ja: '透明性と説明責任', ko: '투명하고 책임감 있게' },
  'ai.principle3.body': { en: 'Opportunities and tools are open to young people from every region.', zh: '机会与工具向所有地区的青年开放。', fr: 'Les opportunités et les outils sont accessibles aux jeunes de toutes les régions.', ru: 'Возможности и инструменты доступны молодёжи всех регионов.', ja: 'すべての地域の若者が機会とツールを利用できます。', ko: '모든 지역의 청년이 기회와 도구를 이용할 수 있습니다.' },
  'ai.principle3.title': { en: 'Cross-Border Access', zh: '跨境可及', fr: 'Accès transfrontalier', ru: 'Трансграничный доступ', ja: '国境を越えた機会', ko: '국경을 넘는 기회' },
  'contact.channel1.body': { en: 'Let’s discuss partnerships, programmes and projects to build together.', zh: '让我们探讨伙伴关系、项目与共同创作的机会。', fr: 'Parlons des partenariats, des programmes et des projets à créer ensemble.', ru: 'Обсудим партнёрство, программы и совместные проекты.', ja: 'パートナーシップ、プログラム、共創の機会について話しましょう。', ko: '파트너십, 프로그램, 공동 창조 기회를 논의해 봅시다.' },
  'contact.channel1.title': { en: 'Partnerships', zh: '合作伙伴', fr: 'Partenariats', ru: 'Партнёрство', ja: 'パートナーシップ', ko: '파트너십' },
  'contact.channel2.body': { en: 'For media and content collaborations, get in touch.', zh: '媒体与内容合作，欢迎联系我们。', fr: 'Pour les collaborations médiatiques et de contenu, contactez-nous.', ru: 'По вопросам медиа- и контент-сотрудничества свяжитесь с нами.', ja: 'メディアやコンテンツの連携は、ぜひお問い合わせください。', ko: '미디어 및 콘텐츠 협업은 저희에게 연락 주세요.' },
  'contact.channel2.title': { en: 'Media & Press', zh: '媒体与公关', fr: 'Médias et presse', ru: 'СМИ и пресса', ja: 'メディア・広報', ko: '미디어 및 언론' },
  'contact.channel3.body': { en: 'For any other questions or ideas, we’d love to hear from you.', zh: '其他问题或想法，欢迎与我们联系。', fr: 'Pour toute autre question ou idée, nous serions ravis de vous entendre.', ru: 'По любым другим вопросам или идеям — будем рады вас услышать.', ja: 'その他のご質問やご提案をお待ちしています。', ko: '그 밖의 질문이나 제안도 기쁘게 듣겠습니다.' },
  'contact.channel3.title': { en: 'General Enquiries', zh: '一般咨询', fr: 'Demandes générales', ru: 'Общие вопросы', ja: '一般のお問い合わせ', ko: '일반 문의' },
  'contact.topic.media': { en: 'Media', zh: '媒体', fr: 'Médias', ru: 'СМИ', ja: 'メディア', ko: '미디어' },
  'contact.topic.other': { en: 'Other', zh: '其他', fr: 'Autre', ru: 'Другое', ja: 'その他', ko: '기타' },
  'contact.topic.partnership': { en: 'Partnership', zh: '合作', fr: 'Partenariat', ru: 'Партнёрство', ja: 'パートナーシップ', ko: '파트너십' },
  'contact.topic.programme': { en: 'Programme', zh: '项目', fr: 'Programme', ru: 'Программа', ja: 'プログラム', ko: '프로그램' },
  'footer.brandSub': { en: 'AI-Native Global Youth Community', zh: 'AI 原生的全球青年社区', fr: 'Communauté de jeunes mondiale natif IA', ru: 'Глобальное молодёжное сообщество с ИИ в основе', ja: 'AI ネイティブなグローバル青年コミュニティ', ko: 'AI 네이티브 글로벌 청년 커뮤니티' },
  'footer.official': { en: 'Official website', zh: '官方网站', fr: 'Site officiel', ru: 'Официальный сайт', ja: '公式サイト', ko: '공식 웹사이트' },
  'footer.rights': { en: 'All rights reserved.', zh: '保留所有权利。', fr: 'Tous droits réservés.', ru: 'Все права защищены.', ja: '無断転載を禁じます。', ko: '모든 권리 보호.' },
  'img.ai': { en: 'AI and youth innovation', zh: 'AI 与青年创新', fr: 'IA et innovation des jeunes', ru: 'ИИ и инновации молодёжи', ja: 'AI と青年のイノベーション', ko: 'AI와 청년 혁신' },
  'img.people': { en: 'Young people collaborating with AI', zh: '使用 AI 协作的青年', fr: 'Jeunes qui collaborent avec l’IA', ru: 'Молодёжь, работающая с ИИ', ja: 'AI と協働する若者たち', ko: 'AI와 협업하는 청년들' },
  'map.alt': { en: 'World map', zh: '世界地图', fr: 'Carte du monde', ru: 'Карта мира', ja: '世界地図', ko: '세계 지도' },
  'map.hub': { en: 'Singapore · SYC Home', zh: '新加坡 · SYC 总部', fr: 'Singapour · Siège de SYC', ru: 'Сингапур · штаб SYC', ja: 'シンガポール · SYC 拠点', ko: '싱가포르 · SYC 거점' },
} satisfies Record<string, Record<Lang, string>>;

export function t(lang: Lang, key: string): string {
  const entry = (ui as Record<string, Record<Lang, string>>)[key];
  if (!entry) return key; // surface missing keys during QA instead of silently hiding them
  return entry[lang];
}


/** All supported UI languages, in switcher order. */
export const LANGS: Lang[] = ['en', 'zh', 'fr', 'ru', 'ja', 'ko'];

export const LANG_META: Record<Lang, { label: string; native: string; og: string }> = {
  en: { label: 'EN',    native: 'English',   og: 'en_US' },
  zh: { label: '中文',   native: '中文',      og: 'zh_CN' },
  fr: { label: 'FR',    native: 'Français',  og: 'fr_FR' },
  ru: { label: 'RU',    native: 'Русский',   og: 'ru_RU' },
  ja: { label: 'JA',    native: '日本語',    og: 'ja_JP' },
  ko: { label: 'KO',    native: '한국어',    og: 'ko_KR' },
};

/** Suffix used by localized content fields, e.g. nameZh / nameFr. */
export const LANG_SUFFIX: Record<Lang, string> = { en: '', zh: 'Zh', fr: 'Fr', ru: 'Ru', ja: 'Ja', ko: 'Ko' };

/** Pick a localized field from a content item, falling back to the English base field. */
export function pick(item: Record<string, any>, field: string, lang: Lang): string {
  const key = field + LANG_SUFFIX[lang];
  const localized = item[key];
  if (typeof localized === 'string' && localized.trim()) return localized;
  const base = item[field];
  return typeof base === 'string' ? base : '';
}
