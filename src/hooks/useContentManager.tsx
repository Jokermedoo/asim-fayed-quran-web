
import { useState, useEffect } from 'react';

export interface WebsiteContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  wisdomQuotes: Array<{
    id: number;
    arabic: string;
    translation: string;
    source: string;
  }>;
  cosmicExploration: {
    title: string;
    stages: Array<{
      id: number;
      title: string;
      description: string;
      icon: string;
      color: string;
    }>;
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    achievements: Array<{
      id: number;
      title: string;
      description: string;
      icon: string;
    }>;
  };
  services: Array<{
    id: number;
    title: string;
    description: string;
    features: string[];
    icon: string;
    color: string;
  }>;
  socialMedia: {
    youtube: string;
    facebook: string;
    telegram: string;
    whatsapp: string;
  };
  contact: {
    phone: string;
    email: string;
    address: string;
  };
}

const defaultContent: WebsiteContent = {
  hero: {
    title: 'الشيخ عاصم فايد',
    subtitle: 'رحلة في أعماق القرآن الكريم والإعجاز العلمي',
    description: 'استكشف عظمة الخلق من خلال آيات الله في الكون والطبيعة - دروس قرآنية معاصرة'
  },
  colors: {
    primary: '#1e3a8a',
    secondary: '#fbbf24',
    accent: '#059669'
  },
  wisdomQuotes: [
    {
      id: 1,
      arabic: '﴿ وَهُوَ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ بِالْحَقِّ ﴾',
      translation: 'وهو الذي خلق السماوات والأرض بالحق',
      source: 'سورة الأنعام - الآية 73'
    },
    {
      id: 2,
      arabic: '﴿ وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ ﴾',
      translation: 'وجعلنا من الماء كل شيء حي',
      source: 'سورة الأنبياء - الآية 30'
    },
    {
      id: 3,
      arabic: '﴿ وَالسَّمَاءَ بَنَيْنَاهَا بِأَيْدٍ وَإِنَّا لَمُوسِعُونَ ﴾',
      translation: 'والسماء بنيناها بأيد وإنا لموسعون',
      source: 'سورة الذاريات - الآية 47'
    },
    {
      id: 4,
      arabic: '﴿ وَأَنزَلْنَا مِنَ السَّمَاءِ مَاءً فَأَنبَتْنَا بِهِ مِن كُلِّ زَوْجٍ كَرِيمٍ ﴾',
      translation: 'وأنزلنا من السماء ماء فأنبتنا به من كل زوج كريم',
      source: 'سورة لقمان - الآية 10'
    },
    {
      id: 5,
      arabic: '﴿ وَسَخَّرَ لَكُمُ اللَّيْلَ وَالنَّهَارَ وَالشَّمْسَ وَالْقَمَرَ وَالنُّجُومُ ﴾',
      translation: 'وسخر لكم الليل والنهار والشمس والقمر والنجوم',
      source: 'سورة النحل - الآية 12'
    },
    {
      id: 6,
      arabic: '﴿ أَفَلَا يَنظُرُونَ إِلَى الْإِبِلِ كَيْفَ خُلِقَتْ ﴾',
      translation: 'أفلا ينظرون إلى الإبل كيف خلقت',
      source: 'سورة الغاشية - الآية 17'
    }
  ],
  cosmicExploration: {
    title: 'آيات الله في الكون',
    stages: [
      {
        id: 1,
        title: 'النجوم والكواكب',
        description: 'تأمل في عظمة خلق السماوات والنجوم وما كشفه العلم الحديث',
        icon: '⭐',
        color: 'from-blue-900 to-purple-900'
      },
      {
        id: 2,
        title: 'الماء والحياة',
        description: 'وجعلنا من الماء كل شيء حي - الإعجاز في خلق الحياة',
        icon: '💧',
        color: 'from-blue-800 to-teal-700'
      },
      {
        id: 3,
        title: 'الجبال والأرض',
        description: 'والجبال أرساها - حكمة الله في استقرار الأرض',
        icon: '🏔️',
        color: 'from-gray-700 to-blue-800'
      },
      {
        id: 4,
        title: 'النبات والأشجار',
        description: 'فأنبتنا به من كل زوج كريم - معجزة التنوع النباتي',
        icon: '🌲',
        color: 'from-green-800 to-emerald-700'
      },
      {
        id: 5,
        title: 'الليل والنهار',
        description: 'وجعلنا الليل والنهار آيتين - نظام دقيق لا يختل',
        icon: '🌙',
        color: 'from-indigo-900 to-purple-800'
      },
      {
        id: 6,
        title: 'البحار والمحيطات',
        description: 'وهو الذي سخر البحر - خزائن المياه في الأرض',
        icon: '🌊',
        color: 'from-cyan-800 to-blue-900'
      }
    ]
  },
  about: {
    title: 'الشيخ عاصم فايد',
    subtitle: 'معلم القرآن الكريم والإعجاز العلمي',
    description: 'خريج الأزهر الشريف، متخصص في تفسير القرآن الكريم والإعجاز العلمي. أهدف إلى ربط آيات الله في الكتاب بآيات الله في الكون لفهم أعمق للدين.',
    achievements: [
      {
        id: 1,
        title: 'إجازة في القرآن الكريم',
        description: 'حاصل على إجازة في القراءات العشر من الأزهر الشريف',
        icon: '📖'
      },
      {
        id: 2,
        title: 'دكتوراه في التفسير',
        description: 'متخصص في التفسير العلمي والإعجاز القرآني',
        icon: '🎓'
      },
      {
        id: 3,
        title: 'مؤلف ومحاضر',
        description: 'له عدة مؤلفات في الإعجاز العلمي والتفسير المعاصر',
        icon: '✍️'
      },
      {
        id: 4,
        title: 'باحث في الإعجاز',
        description: 'متخصص في ربط الاكتشافات العلمية بالآيات القرآنية',
        icon: '🔬'
      }
    ]
  },
  services: [
    {
      id: 1,
      title: 'تفسير القرآن الكريم',
      description: 'دروس تفسير معاصرة تربط بين الآيات والعلوم الحديثة',
      features: ['تفسير مبسط', 'ربط بالعلوم', 'أمثلة معاصرة', 'تطبيق عملي'],
      icon: '📚',
      color: 'from-emerald-600 to-teal-600'
    },
    {
      id: 2,
      title: 'الإعجاز العلمي',
      description: 'كشف المعجزات العلمية في القرآن الكريم',
      features: ['معجزات فلكية', 'إعجاز طبيعي', 'أبحاث حديثة', 'أدلة علمية'],
      icon: '🔬',
      color: 'from-blue-600 to-indigo-600'
    },
    {
      id: 3,
      title: 'تحفيظ وتجويد',
      description: 'برامج تحفيظ القرآن مع أحكام التجويد',
      features: ['طرق حديثة', 'مراجعة منتظمة', 'متابعة فردية', 'إجازات معتمدة'],
      icon: '🕌',
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 4,
      title: 'محاضرات ودورات',
      description: 'محاضرات في الإعجاز ودورات تدريبية',
      features: ['محاضرات عامة', 'دورات متخصصة', 'ورش عمل', 'استشارات'],
      icon: '🎤',
      color: 'from-yellow-600 to-orange-600'
    }
  ],
  socialMedia: {
    youtube: 'https://youtube.com/@sheikhassem',
    facebook: 'https://facebook.com/sheikhassem',
    telegram: 'https://t.me/sheikhassem',
    whatsapp: 'https://wa.me/201000000000'
  },
  contact: {
    phone: '+20 100 000 0000',
    email: 'info@sheikhassem.com',
    address: 'القاهرة، مصر'
  }
};

export const useContentManager = () => {
  const [content, setContent] = useState<WebsiteContent>(() => {
    const saved = localStorage.getItem('websiteContent');
    return saved ? JSON.parse(saved) : defaultContent;
  });

  const updateContent = (newContent: Partial<WebsiteContent>) => {
    const updatedContent = { ...content, ...newContent };
    setContent(updatedContent);
    localStorage.setItem('websiteContent', JSON.stringify(updatedContent));
    
    if (newContent.colors) {
      const root = document.documentElement;
      root.style.setProperty('--primary-color', newContent.colors.primary || content.colors.primary);
      root.style.setProperty('--secondary-color', newContent.colors.secondary || content.colors.secondary);
      root.style.setProperty('--accent-color', newContent.colors.accent || content.colors.accent);
    }
  };

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--primary-color', content.colors.primary);
    root.style.setProperty('--secondary-color', content.colors.secondary);
    root.style.setProperty('--accent-color', content.colors.accent);
  }, [content.colors]);

  return { content, updateContent };
};
