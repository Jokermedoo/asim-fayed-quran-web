
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
}

const defaultContent: WebsiteContent = {
  hero: {
    title: 'الشيخ عاصم فايد',
    subtitle: 'رحلة في أعماق القرآن الكريم',
    description: 'استكشف عظمة الخلق من خلال آيات الله في الكون والطبيعة'
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
        description: 'تأمل في عظمة خلق السماوات والنجوم',
        icon: '⭐',
        color: 'from-blue-900 to-purple-900'
      },
      {
        id: 2,
        title: 'الشلالات والمياه',
        description: 'وجعلنا من الماء كل شيء حي',
        icon: '💧',
        color: 'from-blue-800 to-teal-700'
      },
      {
        id: 3,
        title: 'الجبال والأرض',
        description: 'والجبال أرساها متاعاً لكم ولأنعامكم',
        icon: '🏔️',
        color: 'from-gray-700 to-blue-800'
      },
      {
        id: 4,
        title: 'الغابات والنبات',
        description: 'فأنبتنا به من كل زوج كريم',
        icon: '🌲',
        color: 'from-green-800 to-emerald-700'
      },
      {
        id: 5,
        title: 'الليل والنهار',
        description: 'وجعلنا الليل والنهار آيتين',
        icon: '🌙',
        color: 'from-indigo-900 to-purple-800'
      },
      {
        id: 6,
        title: 'المحيطات والبحار',
        description: 'وهو الذي سخر البحر',
        icon: '🌊',
        color: 'from-cyan-800 to-blue-900'
      }
    ]
  },
  about: {
    title: 'الشيخ عاصم فايد',
    subtitle: 'معلم القرآن الكريم والتفسير',
    description: 'خريج الأزهر الشريف، متخصص في تفسير القرآن الكريم وعلوم الطبيعة في الإسلام. يربط بين آيات الله في الكتاب وآيات الله في الكون.',
    achievements: [
      {
        id: 1,
        title: 'إجازة في القرآن الكريم',
        description: 'حاصل على إجازة في القراءات العشر',
        icon: '📖'
      },
      {
        id: 2,
        title: 'دكتوراه في التفسير',
        description: 'متخصص في التفسير العلمي للقرآن',
        icon: '🎓'
      },
      {
        id: 3,
        title: 'مؤلف ومحاضر',
        description: 'له عدة مؤلفات في الإعجاز العلمي',
        icon: '✍️'
      },
      {
        id: 4,
        title: 'باحث في الفلك',
        description: 'متخصص في علم الفلك الإسلامي',
        icon: '🔭'
      }
    ]
  },
  services: [
    {
      id: 1,
      title: 'تفسير القرآن الكريم',
      description: 'دروس في تفسير القرآن مع ربطه بالعلوم الحديثة',
      features: ['تفسير مبسط', 'ربط بالعلوم', 'أمثلة عملية', 'تطبيق في الحياة'],
      icon: '📚',
      color: 'from-emerald-600 to-teal-600'
    },
    {
      id: 2,
      title: 'الإعجاز العلمي',
      description: 'اكتشاف المعجزات العلمية في آيات القرآن',
      features: ['معجزات فلكية', 'إعجاز طبيعي', 'أبحاث حديثة', 'أدلة علمية'],
      icon: '🔬',
      color: 'from-blue-600 to-indigo-600'
    },
    {
      id: 3,
      title: 'تحفيظ القرآن',
      description: 'برامج تحفيظ متدرجة للجميع',
      features: ['طرق حديثة', 'مراجعة منتظمة', 'متابعة فردية', 'جوائز تشجيعية'],
      icon: '🕌',
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 4,
      title: 'علم الفلك الإسلامي',
      description: 'دراسة الكون من منظور إسلامي',
      features: ['تاريخ الفلك', 'علماء مسلمون', 'آيات كونية', 'مراقبة السماء'],
      icon: '🌟',
      color: 'from-yellow-600 to-orange-600'
    }
  ]
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
