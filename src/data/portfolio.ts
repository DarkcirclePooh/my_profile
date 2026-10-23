export type Locale = 'ko' | 'en';

type Focus = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
};

type Experience = {
  period: string;
  discipline: string;
  title: string;
  description: string;
  details: string[];
  tags: string[];
};

type PortfolioCopy = {
  name: string;
  title: string;
  description: string;
  skip: string;
  home: string;
  nav: { focus: string; journey: string; contact: string };
  language: string;
  hero: {
    eyebrow: string;
    intro: string;
    lines: [string, string];
    description: string;
    primary: string;
    secondary: string;
    scroll: string;
    artCaption: string;
    artDescription: string;
    range: string;
  };
  focus: {
    eyebrow: string;
    title: [string, string];
    description: string;
    items: Focus[];
  };
  journey: {
    eyebrow: string;
    title: [string, string];
    description: string;
    range: string;
    items: Experience[];
  };
  contact: {
    eyebrow: string;
    title: [string, string];
    description: string;
    email: string;
    github: string;
  };
  footer: { note: string; top: string };
};

export const profile = {
  englishName: 'Bosoo Kim',
  koreanName: '김보수',
  email: 'darkcirclepooh@gmail.com',
  github: 'https://github.com/DarkcirclePooh',
  year: '2026',
};

export const portfolio: Record<Locale, PortfolioCopy> = {
  ko: {
    name: '김보수',
    title: '김보수 · Bosoo Kim — O-RAN & vRAN Engineer',
    description:
      '김보수의 포트폴리오. O-RAN 기반 vRAN, OAM·O1, CNF 배포부터 LTE·5G Radio Protocol과 상호운용 검증까지 이어지는 통신 개발 경험을 소개합니다.',
    skip: '본문으로 바로가기',
    home: '김보수 — 처음으로',
    nav: { focus: '전문 분야', journey: '경력', contact: '연락하기' },
    language: '언어 선택',
    hero: {
      eyebrow: '김보수 · BOSOO KIM',
      intro: 'O-RAN과 vRAN,',
      lines: ['통신 인프라의', '다음을 구현합니다.'],
      description:
        '모바일의 무선 프로토콜부터 클라우드 네이티브 RAN까지.\n통신 개발 경험을 연결해, 다음 단계의 인프라를 만듭니다.',
      primary: '경력 살펴보기',
      secondary: '이야기 나누기',
      scroll: '스크롤하여 둘러보기',
      artCaption: '연결의 다음을 설계하다',
      artDescription:
        '무선 통신에서 클라우드 네이티브 RAN으로 이어지는 경험을 표현한 네트워크 아트',
      range: '통신 기술과 함께 이어온 여정',
    },
    focus: {
      eyebrow: '01 / CURRENT FOCUS',
      title: ['연결의 중심을,', '클라우드로.'],
      description:
        '2022–2026년의 초점은 O-RAN 기반 vRAN 개발입니다.\n무선 통신에서 쌓은 경험을 OAM·O1과 CNF 배포로 확장했습니다.',
      items: [
        {
          title: 'O-RAN / vRAN',
          subtitle: 'OPEN & VIRTUALIZED',
          description:
            '모바일과 Radio Protocol 개발 경험을 바탕으로 O-RAN 기반의 가상화 RAN을 개발합니다.',
          tags: ['O-RAN', 'vRAN'],
        },
        {
          title: 'OAM / O1',
          subtitle: 'OPERATIONS & MANAGEMENT',
          description: 'vRAN의 운용과 관리를 위한 OAM 및 O1 영역을 개발합니다.',
          tags: ['OAM', 'O1'],
        },
        {
          title: 'CNF Deployment',
          subtitle: 'CLOUD-NATIVE NETWORK',
          description:
            '클라우드 네이티브 네트워크 기능인 CNF의 배포를 다룹니다.',
          tags: ['CNF', 'Deployment'],
        },
      ],
    },
    journey: {
      eyebrow: '02 / THE JOURNEY',
      title: ['기술은 진화하고,', '경험은 연결됩니다.'],
      description:
        'UI에서 BSP, Radio Protocol을 거쳐 vRAN까지.\n각 단계의 경험이 다음 기술을 이해하는 기반이 되었습니다.',
      range: '2003년부터 이어온 통신 개발',
      items: [
        {
          period: '2022 — 2026',
          discipline: 'CLOUD-NATIVE RAN',
          title: 'O-RAN 기반 vRAN 개발',
          description:
            '무선 통신에서 클라우드 네이티브 인프라로 개발 영역을 확장했습니다.',
          details: ['OAM / O1 개발', 'CNF deployment'],
          tags: ['O-RAN', 'vRAN', 'OAM', 'O1', 'CNF'],
        },
        {
          period: '2010 — 2022',
          discipline: 'RADIO PROTOCOL & VALIDATION',
          title: 'LTE에서 5G까지, 연결을 검증하다',
          description:
            '미국 통신사향 스마트폰의 Radio Protocol 개발과 네트워크 상호운용 검증을 수행했습니다.',
          details: [
            'VZW향 세계 최초 LTE / CDMA 듀얼 모드 스마트폰 개발',
            'AT&T / T-Mobile향 스마트폰 개발 — Radio Protocol',
            'Ericsson(E///) · Nokia와 Network Vendor IOT (NV-IOT)',
            'VoLTE / SRVCC / LTE Carrier Aggregation / 5G NR EN-DC / 5G NR SA validation & verification',
          ],
          tags: [
            'LTE / CDMA',
            'VoLTE',
            'SRVCC',
            'LTE CA',
            '5G NR EN-DC',
            '5G NR SA',
          ],
        },
        {
          period: '2005 — 2010',
          discipline: 'MOBILE BROADCAST / BSP',
          title: '모바일 방송을 기기 위에',
          description:
            'TDMB / MBMS 방송 기능을 지원하는 모바일폰을 개발했습니다.',
          details: ['방송 기능을 위한 BSP 개발'],
          tags: ['TDMB', 'MBMS', 'BSP'],
        },
        {
          period: '2003 — 2005',
          discipline: 'IMS / USER INTERFACE',
          title: '커뮤니케이션의 접점에서 시작하다',
          description: 'IMS 환경에서 Push-to-Talk 기능의 UI를 개발했습니다.',
          details: ['IMS Push-to-Talk 기능 개발 — UI'],
          tags: ['IMS', 'Push-to-Talk', 'UI'],
        },
      ],
    },
    contact: {
      eyebrow: '03 / LET’S CONNECT',
      title: ['다음 연결을', '함께 만듭니다.'],
      description:
        'O-RAN, vRAN, 그리고 통신 기술의 다음 이야기.\n함께 나누고 싶은 생각이 있다면 편하게 연락해 주세요.',
      email: '이메일 보내기',
      github: 'GitHub 프로필',
    },
    footer: { note: '연결을 만드는 엔지니어.', top: '맨 위로' },
  },
  en: {
    name: 'Bosoo Kim',
    title: 'Bosoo Kim — O-RAN & vRAN Engineer',
    description:
      'The portfolio of Bosoo Kim. Experience spanning O-RAN-based vRAN, OAM, O1 and CNF deployment, with a background in LTE/5G radio protocols and interoperability validation.',
    skip: 'Skip to content',
    home: 'Bosoo Kim — home',
    nav: { focus: 'Expertise', journey: 'Journey', contact: 'Contact' },
    language: 'Select language',
    hero: {
      eyebrow: 'BOSOO KIM · 김보수',
      intro: 'O-RAN & vRAN.',
      lines: ['Engineering the', 'next connection.'],
      description:
        'From mobile radio protocols to cloud-native RAN.\nConnecting years of telecom development to build what comes next.',
      primary: 'Explore my journey',
      secondary: 'Let’s connect',
      scroll: 'Scroll to explore',
      artCaption: 'ENGINEERING THE NEXT CONNECTION',
      artDescription:
        'Network art connecting a career in radio communications to cloud-native RAN',
      range: 'A journey through telecommunications',
    },
    focus: {
      eyebrow: '01 / CURRENT FOCUS',
      title: ['The heart of the network.', 'Reimagined in the cloud.'],
      description:
        'My focus in 2022–2026: O-RAN-based vRAN development.\nBuilding on a radio background through OAM, O1 and CNF deployment.',
      items: [
        {
          title: 'O-RAN / vRAN',
          subtitle: 'OPEN & VIRTUALIZED',
          description:
            'Developing O-RAN-based virtualized RAN, grounded in mobile and radio protocol experience.',
          tags: ['O-RAN', 'vRAN'],
        },
        {
          title: 'OAM / O1',
          subtitle: 'OPERATIONS & MANAGEMENT',
          description:
            'Developing OAM and O1 capabilities for vRAN operations and management.',
          tags: ['OAM', 'O1'],
        },
        {
          title: 'CNF Deployment',
          subtitle: 'CLOUD-NATIVE NETWORK',
          description:
            'Working on the deployment of cloud-native network functions.',
          tags: ['CNF', 'Deployment'],
        },
      ],
    },
    journey: {
      eyebrow: '02 / THE JOURNEY',
      title: ['Technology evolves.', 'Experience connects.'],
      description:
        'From UI and BSP to radio protocols and vRAN.\nEach chapter builds the foundation for the next.',
      range: 'Telecom development since 2003',
      items: [
        {
          period: '2022 — 2026',
          discipline: 'CLOUD-NATIVE RAN',
          title: 'Developing O-RAN-based vRAN',
          description:
            'Extending a radio communications background into cloud-native infrastructure.',
          details: ['OAM / O1 development', 'CNF deployment'],
          tags: ['O-RAN', 'vRAN', 'OAM', 'O1', 'CNF'],
        },
        {
          period: '2010 — 2022',
          discipline: 'RADIO PROTOCOL & VALIDATION',
          title: 'Validating connections, from LTE to 5G',
          description:
            'Radio protocol development and network interoperability validation for US-carrier smartphones.',
          details: [
            'Development of the world’s first LTE / CDMA dual-mode smartphone for VZW',
            'Smartphone development for AT&T / T-Mobile — Radio Protocol',
            'Network Vendor IOT (NV-IOT) with Ericsson (E///) and Nokia',
            'VoLTE / SRVCC / LTE Carrier Aggregation / 5G NR EN-DC / 5G NR SA validation & verification',
          ],
          tags: [
            'LTE / CDMA',
            'VoLTE',
            'SRVCC',
            'LTE CA',
            '5G NR EN-DC',
            '5G NR SA',
          ],
        },
        {
          period: '2005 — 2010',
          discipline: 'MOBILE BROADCAST / BSP',
          title: 'Bringing broadcast to mobile',
          description:
            'Developing mobile phones with TDMB / MBMS broadcast capabilities.',
          details: ['BSP development for mobile broadcast functionality'],
          tags: ['TDMB', 'MBMS', 'BSP'],
        },
        {
          period: '2003 — 2005',
          discipline: 'IMS / USER INTERFACE',
          title: 'Starting at the point of communication',
          description:
            'Developing the user interface for Push-to-Talk functionality in IMS.',
          details: ['IMS Push-to-Talk development — UI'],
          tags: ['IMS', 'Push-to-Talk', 'UI'],
        },
      ],
    },
    contact: {
      eyebrow: '03 / LET’S CONNECT',
      title: ['Let’s build the', 'next connection.'],
      description:
        'O-RAN, vRAN, and what’s next in telecommunications.\nHave something in mind? I’d love to hear from you.',
      email: 'Send an email',
      github: 'GitHub profile',
    },
    footer: { note: 'An engineer making connections.', top: 'Back to top' },
  },
};
