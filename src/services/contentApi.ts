
import { WebsiteContent } from '../hooks/useContentManager';

class ContentAPI {
  private static instance: ContentAPI;
  private storageKey = 'websiteContent_v2';
  private subscribers: Array<(content: WebsiteContent) => void> = [];

  private constructor() {}

  static getInstance(): ContentAPI {
    if (!ContentAPI.instance) {
      ContentAPI.instance = new ContentAPI();
    }
    return ContentAPI.instance;
  }

  // Subscribe to content changes
  subscribe(callback: (content: WebsiteContent) => void) {
    this.subscribers.push(callback);
    return () => {
      this.subscribers = this.subscribers.filter(sub => sub !== callback);
    };
  }

  // Notify all subscribers of changes
  private notifySubscribers(content: WebsiteContent) {
    this.subscribers.forEach(callback => callback(content));
  }

  // Get content from storage
  getContent(): WebsiteContent {
    try {
      const stored = localStorage.getItem(this.storageKey);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (error) {
      console.error('Error loading content:', error);
    }
    return this.getDefaultContent();
  }

  // Update content and notify subscribers
  updateContent(updates: Partial<WebsiteContent>): void {
    const currentContent = this.getContent();
    const newContent = { ...currentContent, ...updates };
    
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(newContent));
      this.notifySubscribers(newContent);
    } catch (error) {
      console.error('Error saving content:', error);
    }
  }

  // Reset to default content
  resetContent(): void {
    const defaultContent = this.getDefaultContent();
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(defaultContent));
      this.notifySubscribers(defaultContent);
    } catch (error) {
      console.error('Error resetting content:', error);
    }
  }

  // Export content as JSON file
  exportContent(): void {
    const content = this.getContent();
    const dataStr = JSON.stringify(content, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = `website-content-${new Date().toISOString().split('T')[0]}.json`;
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  }

  // Import content from file
  importContent(file: File): Promise<void> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedContent = JSON.parse(e.target?.result as string);
          localStorage.setItem(this.storageKey, JSON.stringify(importedContent));
          this.notifySubscribers(importedContent);
          resolve();
        } catch (error) {
          reject(error);
        }
      };
      reader.onerror = () => reject(new Error('File reading failed'));
      reader.readAsText(file);
    });
  }

  private getDefaultContent(): WebsiteContent {
    return {
      hero: {
        title: 'الشيخ عاصم فايد',
        subtitle: 'رحلة في أعماق القرآن الكريم والإعجاز العلمي',
        description: 'استكشف عظمة الخلق من خلال آيات الله في الكون والطبيعة - دروس قرآنية معاصرة تربط بين العلم والإيمان'
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
        description: 'خريج الأزهر الشريف، متخصص في تفسير القرآن الكريم والإعجاز العلمي في ضوء الاكتشافات العلمية الحديثة.',
        achievements: [
          {
            id: 1,
            title: 'إجازة في القرآن الكريم',
            description: 'حاصل على إجازة في القراءات العشر من الأزهر الشريف',
            icon: '📖'
          },
          {
            id: 2,
            title: 'دراسات في الإعجاز العلمي',
            description: 'تخصص في ربط الآيات القرآنية بالاكتشافات العلمية الحديثة',
            icon: '🔬'
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
        },
        {
          id: 2,
          title: 'الإعجاز العلمي',
          description: 'استكشاف الإعجاز العلمي في القرآن الكريم',
          features: ['اكتشافات حديثة', 'أدلة علمية', 'شرح مفصل'],
          icon: '🔬',
          color: 'from-blue-600 to-indigo-600'
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
        metaDescription: 'استكشف عظمة الخلق من خلال آيات الله في الكون والطبيعة مع الشيخ عاصم فايد - دروس قرآنية معاصرة',
        keywords: ['القرآن الكريم', 'الإعجاز العلمي', 'التفسير', 'الشيخ عاصم فايد', 'العلوم الحديثة']
      }
    };
  }
}

export const contentApi = ContentAPI.getInstance();
