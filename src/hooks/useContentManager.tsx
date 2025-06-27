
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
  spiritualJourney: {
    title: string;
    stages: Array<{
      id: number;
      title: string;
      description: string;
      icon: string;
      color: string;
    }>;
  };
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
  design: {
    backgroundType: 'cosmic' | 'nature' | 'minimal';
    animationSpeed: 'slow' | 'normal' | 'fast';
    enableParticles: boolean;
    enableFloatingElements: boolean;
  };
  layout: {
    showScrollIndicator: boolean;
    showFloatingElements: boolean;
    headerStyle: 'minimal' | 'detailed' | 'centered';
    footerStyle: 'simple' | 'detailed';
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
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
    }
  ],
  spiritualJourney: {
    title: 'رحلة التدبر في القرآن',
    stages: [
      {
        id: 1,
        title: 'التلاوة',
        description: 'قراءة القرآن بتأني وخشوع',
        icon: '📖',
        color: 'from-blue-900 to-purple-900'
      },
      {
        id: 2,
        title: 'التدبر',
        description: 'التفكر في معاني الآيات الكريمة',
        icon: '🤲',
        color: 'from-green-800 to-emerald-700'
      },
      {
        id: 3,
        title: 'التطبيق',
        description: 'تطبيق تعاليم القرآن في الحياة',
        icon: '✨',
        color: 'from-gold-600 to-amber-600'
      },
      {
        id: 4,
        title: 'الدعوة',
        description: 'نشر الخير والهداية للآخرين',
        icon: '🌟',
        color: 'from-purple-700 to-indigo-700'
      },
      {
        id: 5,
        title: 'العبادة',
        description: 'زيادة الخشوع والقرب من الله',
        icon: '🕌',
        color: 'from-teal-700 to-cyan-700'
      }
    ]
  },
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
      }
    ]
  },
  about: {
    title: 'الشيخ عاصم فايد',
    subtitle: 'معلم القرآن الكريم والإعجاز العلمي',
    description: 'خريج الأزهر الشريف، متخصص في تفسير القرآن الكريم والإعجاز العلمي.',
    achievements: [
      {
        id: 1,
        title: 'إجازة في القرآن الكريم',
        description: 'حاصل على إجازة في القراءات العشر من الأزهر الشريف',
        icon: '📖'
      }
    ]
  },
  services: [
    {
      id: 1,
      title: 'تفسير القرآن الكريم',
      description: 'دروس تفسير معاصرة تربط بين الآيات والعلوم الحديثة',
      features: ['تفسير مبسط', 'ربط بالعلوم', 'أمثلة معاصرة'],
      icon: '📚',
      color: 'from-emerald-600 to-teal-600'
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
  },
  design: {
    backgroundType: 'cosmic',
    animationSpeed: 'normal',
    enableParticles: true,
    enableFloatingElements: true
  },
  layout: {
    showScrollIndicator: true,
    showFloatingElements: true,
    headerStyle: 'centered',
    footerStyle: 'detailed'
  },
  seo: {
    metaTitle: 'الشيخ عاصم فايد - معلم القرآن الكريم والإعجاز العلمي',
    metaDescription: 'استكشف عظمة الخلق من خلال آيات الله في الكون والطبيعة مع الشيخ عاصم فايد',
    keywords: ['القرآن الكريم', 'الإعجاز العلمي', 'التفسير', 'الشيخ عاصم فايد']
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

  const resetToDefault = () => {
    setContent(defaultContent);
    localStorage.setItem('websiteContent', JSON.stringify(defaultContent));
  };

  const exportContent = () => {
    const dataStr = JSON.stringify(content, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = 'website-content.json';
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const importContent = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importedContent = JSON.parse(e.target?.result as string);
        updateContent(importedContent);
      } catch (error) {
        console.error('Error importing content:', error);
      }
    };
    reader.readAsText(file);
  };

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--primary-color', content.colors.primary);
    root.style.setProperty('--secondary-color', content.colors.secondary);
    root.style.setProperty('--accent-color', content.colors.accent);
  }, [content.colors]);

  return { 
    content, 
    updateContent, 
    resetToDefault, 
    exportContent, 
    importContent 
  };
};
