
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
    }>;
  };
}

const defaultContent: WebsiteContent = {
  hero: {
    title: 'الشيخ عاصم فايد',
    subtitle: 'رحلة روحانية نحو الهدوء والسكينة',
    description: 'مرحباً بكم في عالم من السكينة والهدوء الروحاني'
  },
  colors: {
    primary: '#1e3a8a',
    secondary: '#fbbf24',
    accent: '#059669'
  },
  wisdomQuotes: [
    {
      id: 1,
      arabic: '﴿ وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا ﴾',
      translation: 'ومن يتق الله يجعل له مخرجاً',
      source: 'سورة الطلاق - الآية 2'
    },
    {
      id: 2,
      arabic: '﴿ وَلَا تَيْأَسُوا مِن رَّوْحِ اللَّهِ إِنَّهُ لَا يَيْأَسُ مِن رَّوْحِ اللَّهِ إِلَّا الْقَوْمُ الْكَافِرُونَ ﴾',
      translation: 'لا تيأسوا من روح الله',
      source: 'سورة يوسف - الآية 87'
    },
    {
      id: 3,
      arabic: '﴿ فَإِنَّ مَعَ الْعُسْرِ يُسْرًا ﴾',
      translation: 'فإن مع العسر يسراً',
      source: 'سورة الشرح - الآية 6'
    },
    {
      id: 4,
      arabic: '﴿ وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ ﴾',
      translation: 'وهو معكم أين ما كنتم',
      source: 'سورة الحديد - الآية 4'
    }
  ],
  spiritualJourney: {
    title: 'رحلة روحانية نحو السكينة',
    stages: [
      {
        id: 1,
        title: 'التأمل والصفاء',
        description: 'ابدأ رحلتك بالتأمل الروحي والبحث عن الصفاء الداخلي',
        icon: '🧘‍♂️'
      },
      {
        id: 2,
        title: 'الذكر والتسبيح',
        description: 'اذكر الله كثيراً واشعر بالسكينة تملأ قلبك',
        icon: '📿'
      },
      {
        id: 3,
        title: 'قراءة القرآن',
        description: 'تدبر آيات الله واستمع لكلامه بقلب حاضر',
        icon: '📖'
      },
      {
        id: 4,
        title: 'الدعاء والمناجاة',
        description: 'ادع الله بصدق وانكسار واشعر بقربه منك',
        icon: '🤲'
      },
      {
        id: 5,
        title: 'السكينة والطمأنينة',
        description: 'اشعر بالسلام الداخلي والطمأنينة التي تملأ روحك',
        icon: '✨'
      }
    ]
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
    
    // Apply CSS custom properties for colors
    if (newContent.colors) {
      const root = document.documentElement;
      root.style.setProperty('--primary-color', newContent.colors.primary || content.colors.primary);
      root.style.setProperty('--secondary-color', newContent.colors.secondary || content.colors.secondary);
      root.style.setProperty('--accent-color', newContent.colors.accent || content.colors.accent);
    }
  };

  // Apply colors on mount
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--primary-color', content.colors.primary);
    root.style.setProperty('--secondary-color', content.colors.secondary);
    root.style.setProperty('--accent-color', content.colors.accent);
  }, [content.colors]);

  return { content, updateContent };
};
