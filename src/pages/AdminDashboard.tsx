
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useContentManager } from '../hooks/useContentManager';
import { useToast } from '@/hooks/use-toast';
import { 
  LogOut, 
  Settings, 
  Image, 
  Type, 
  Palette, 
  Book,
  Home,
  Eye,
  Save,
  Plus,
  Trash2,
  Globe,
  Phone,
  Mail,
  MapPin,
  Youtube,
  Facebook,
  MessageCircle,
  Send
} from 'lucide-react';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { content, updateContent } = useContentManager();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('content');

  // Local state for editing
  const [heroData, setHeroData] = useState(content.hero);
  const [colorsData, setColorsData] = useState(content.colors);
  const [wisdomQuotes, setWisdomQuotes] = useState(content.wisdomQuotes);
  const [cosmicData, setCosomicData] = useState(content.cosmicExploration);
  const [aboutData, setAboutData] = useState(content.about);
  const [servicesData, setServicesData] = useState(content.services);
  const [socialData, setSocialData] = useState(content.socialMedia);
  const [contactData, setContactData] = useState(content.contact);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isAdminLoggedIn');
    if (!isLoggedIn) {
      navigate('/admin-login');
    }
  }, [navigate]);

  // Update local state when content changes
  useEffect(() => {
    setHeroData(content.hero);
    setColorsData(content.colors);
    setWisdomQuotes(content.wisdomQuotes);
    setCosomicData(content.cosmicExploration);
    setAboutData(content.about);
    setServicesData(content.services);
    setSocialData(content.socialMedia);
    setContactData(content.contact);
  }, [content]);

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    navigate('/');
  };

  const saveAllChanges = () => {
    updateContent({
      hero: heroData,
      colors: colorsData,
      wisdomQuotes,
      cosmicExploration: cosmicData,
      about: aboutData,
      services: servicesData,
      socialMedia: socialData,
      contact: contactData
    });
    
    toast({
      title: "تم الحفظ بنجاح! ✅",
      description: "تم حفظ جميع التغييرات وتطبيقها على الموقع",
    });
  };

  const addNewQuote = () => {
    const newQuote = {
      id: Date.now(),
      arabic: '',
      translation: '',
      source: ''
    };
    setWisdomQuotes([...wisdomQuotes, newQuote]);
  };

  const updateQuote = (id: number, field: string, value: string) => {
    setWisdomQuotes(wisdomQuotes.map(quote => 
      quote.id === id ? { ...quote, [field]: value } : quote
    ));
  };

  const deleteQuote = (id: number) => {
    setWisdomQuotes(wisdomQuotes.filter(quote => quote.id !== id));
  };

  const addNewStage = () => {
    const newStage = {
      id: Date.now(),
      title: '',
      description: '',
      icon: '✨',
      color: 'from-blue-600 to-purple-600'
    };
    setCosomicData({
      ...cosmicData,
      stages: [...cosmicData.stages, newStage]
    });
  };

  const updateStage = (id: number, field: string, value: string) => {
    setCosomicData({
      ...cosmicData,
      stages: cosmicData.stages.map(stage => 
        stage.id === id ? { ...stage, [field]: value } : stage
      )
    });
  };

  const deleteStage = (id: number) => {
    setCosomicData({
      ...cosmicData,
      stages: cosmicData.stages.filter(stage => stage.id !== id)
    });
  };

  const addNewService = () => {
    const newService = {
      id: Date.now(),
      title: '',
      description: '',
      features: [''],
      icon: '📚',
      color: 'from-blue-600 to-indigo-600'
    };
    setServicesData([...servicesData, newService]);
  };

  const updateService = (id: number, field: string, value: any) => {
    setServicesData(servicesData.map(service => 
      service.id === id ? { ...service, [field]: value } : service
    ));
  };

  const deleteService = (id: number) => {
    setServicesData(servicesData.filter(service => service.id !== id));
  };

  const addNewAchievement = () => {
    const newAchievement = {
      id: Date.now(),
      title: '',
      description: '',
      icon: '🏆'
    };
    setAboutData({
      ...aboutData,
      achievements: [...aboutData.achievements, newAchievement]
    });
  };

  const updateAchievement = (id: number, field: string, value: string) => {
    setAboutData({
      ...aboutData,
      achievements: aboutData.achievements.map(achievement => 
        achievement.id === id ? { ...achievement, [field]: value } : achievement
      )
    });
  };

  const deleteAchievement = (id: number) => {
    setAboutData({
      ...aboutData,
      achievements: aboutData.achievements.filter(achievement => achievement.id !== id)
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100" dir="rtl">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 font-cairo">
            لوحة تحكم موقع الشيخ عاصم فايد
          </h1>
          <div className="flex gap-3">
            <Button
              onClick={() => window.open('/', '_blank')}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Eye className="w-4 h-4" />
              معاينة الموقع
            </Button>
            <Button
              onClick={handleLogout}
              variant="destructive"
              className="flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              تسجيل خروج
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-7 w-full max-w-4xl mx-auto">
            <TabsTrigger value="content" className="flex items-center gap-2">
              <Type className="w-4 h-4" />
              المحتوى
            </TabsTrigger>
            <TabsTrigger value="cosmic" className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              الكون
            </TabsTrigger>
            <TabsTrigger value="wisdom" className="flex items-center gap-2">
              <Book className="w-4 h-4" />
              الآيات
            </TabsTrigger>
            <TabsTrigger value="about" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              عن الشيخ
            </TabsTrigger>
            <TabsTrigger value="services" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              الخدمات
            </TabsTrigger>
            <TabsTrigger value="contact" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              التواصل
            </TabsTrigger>
            <TabsTrigger value="design" className="flex items-center gap-2">
              <Palette className="w-4 h-4" />
              التصميم
            </TabsTrigger>
          </TabsList>

          {/* Content Management */}
          <TabsContent value="content" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="w-5 h-5" />
                  إدارة المحتوى الرئيسي
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">العنوان الرئيسي</label>
                  <Input
                    value={heroData.title}
                    onChange={(e) => setHeroData({...heroData, title: e.target.value})}
                    className="font-amiri text-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">العنوان الفرعي</label>
                  <Input
                    value={heroData.subtitle}
                    onChange={(e) => setHeroData({...heroData, subtitle: e.target.value})}
                    className="font-cairo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">الوصف</label>
                  <Textarea
                    value={heroData.description}
                    onChange={(e) => setHeroData({...heroData, description: e.target.value})}
                    rows={4}
                    className="font-cairo"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Cosmic Exploration Management */}
          <TabsContent value="cosmic" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  إدارة آيات الله في الكون
                </CardTitle>
                <Button onClick={addNewStage} className="bg-gold-400 hover:bg-gold-500">
                  <Plus className="w-4 h-4 ml-2" />
                  إضافة مرحلة جديدة
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">عنوان القسم</label>
                  <Input
                    value={cosmicData.title}
                    onChange={(e) => setCosomicData({...cosmicData, title: e.target.value})}
                    className="font-cairo text-lg mb-6"
                  />
                </div>
                
                {cosmicData.stages.map((stage, index) => (
                  <div key={stage.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-bold text-lg">المرحلة {index + 1}</h4>
                      <Button
                        onClick={() => deleteStage(stage.id)}
                        variant="destructive"
                        size="sm"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-medium mb-2">الأيقونة</label>
                        <Input
                          value={stage.icon}
                          onChange={(e) => updateStage(stage.id, 'icon', e.target.value)}
                          className="text-center text-2xl"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">العنوان</label>
                        <Input
                          value={stage.title}
                          onChange={(e) => updateStage(stage.id, 'title', e.target.value)}
                          className="font-cairo"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium mb-2">الوصف</label>
                        <Textarea
                          value={stage.description}
                          onChange={(e) => updateStage(stage.id, 'description', e.target.value)}
                          className="font-cairo"
                          rows={2}
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium mb-2">التدرج اللوني</label>
                        <Input
                          value={stage.color}
                          onChange={(e) => updateStage(stage.id, 'color', e.target.value)}
                          className="font-mono text-sm"
                          placeholder="from-blue-600 to-purple-600"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Wisdom Quotes Management */}
          <TabsContent value="wisdom" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Book className="w-5 h-5" />
                  إدارة آيات القرآن الكريم
                </CardTitle>
                <Button onClick={addNewQuote} className="bg-gold-400 hover:bg-gold-500">
                  <Plus className="w-4 h-4 ml-2" />
                  إضافة آية جديدة
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {wisdomQuotes.map((quote) => (
                  <div key={quote.id} className="border rounded-lg p-4 space-y-3">
                    <div>
                      <label className="block text-sm font-medium mb-2">النص العربي</label>
                      <Textarea
                        value={quote.arabic}
                        onChange={(e) => updateQuote(quote.id, 'arabic', e.target.value)}
                        className="font-amiri text-lg"
                        rows={2}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">الترجمة/المعنى</label>
                      <Input
                        value={quote.translation}
                        onChange={(e) => updateQuote(quote.id, 'translation', e.target.value)}
                        className="font-cairo"
                      />
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-1">
                        <label className="block text-sm font-medium mb-2">المصدر</label>
                        <Input
                          value={quote.source}
                          onChange={(e) => updateQuote(quote.id, 'source', e.target.value)}
                          className="font-cairo"
                        />
                      </div>
                      <div className="flex items-end">
                        <Button
                          onClick={() => deleteQuote(quote.id)}
                          variant="destructive"
                          size="sm"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* About Management */}
          <TabsContent value="about" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Home className="w-5 h-5" />
                  إدارة صفحة "عن الشيخ"
                </CardTitle>
                <Button onClick={addNewAchievement} className="bg-gold-400 hover:bg-gold-500">
                  <Plus className="w-4 h-4 ml-2" />
                  إضافة إنجاز جديد
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">العنوان</label>
                    <Input
                      value={aboutData.title}
                      onChange={(e) => setAboutData({...aboutData, title: e.target.value})}
                      className="font-amiri text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">العنوان الفرعي</label>
                    <Input
                      value={aboutData.subtitle}
                      onChange={(e) => setAboutData({...aboutData, subtitle: e.target.value})}
                      className="font-cairo"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">الوصف</label>
                  <Textarea
                    value={aboutData.description}
                    onChange={(e) => setAboutData({...aboutData, description: e.target.value})}
                    rows={4}
                    className="font-cairo"
                  />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-bold">الإنجازات</h3>
                  {aboutData.achievements.map((achievement, index) => (
                    <div key={achievement.id} className="border rounded-lg p-4 space-y-3">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-bold">الإنجاز {index + 1}</h4>
                        <Button
                          onClick={() => deleteAchievement(achievement.id)}
                          variant="destructive"
                          size="sm"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div>
                          <label className="block text-sm font-medium mb-2">الأيقونة</label>
                          <Input
                            value={achievement.icon}
                            onChange={(e) => updateAchievement(achievement.id, 'icon', e.target.value)}
                            className="text-center text-2xl"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">العنوان</label>
                          <Input
                            value={achievement.title}
                            onChange={(e) => updateAchievement(achievement.id, 'title', e.target.value)}
                            className="font-cairo"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">الوصف</label>
                          <Textarea
                            value={achievement.description}
                            onChange={(e) => updateAchievement(achievement.id, 'description', e.target.value)}
                            className="font-cairo"
                            rows={2}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Services Management */}
          <TabsContent value="services" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  إدارة الخدمات
                </CardTitle>
                <Button onClick={addNewService} className="bg-gold-400 hover:bg-gold-500">
                  <Plus className="w-4 h-4 ml-2" />
                  إضافة خدمة جديدة
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                {servicesData.map((service, index) => (
                  <div key={service.id} className="border rounded-lg p-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-lg">الخدمة {index + 1}</h4>
                      <Button
                        onClick={() => deleteService(service.id)}
                        variant="destructive"
                        size="sm"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">الأيقونة</label>
                        <Input
                          value={service.icon}
                          onChange={(e) => updateService(service.id, 'icon', e.target.value)}
                          className="text-center text-2xl"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">العنوان</label>
                        <Input
                          value={service.title}
                          onChange={(e) => updateService(service.id, 'title', e.target.value)}
                          className="font-cairo"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium mb-2">الوصف</label>
                        <Textarea
                          value={service.description}
                          onChange={(e) => updateService(service.id, 'description', e.target.value)}
                          className="font-cairo"
                          rows={3}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">التدرج اللوني</label>
                        <Input
                          value={service.color}
                          onChange={(e) => updateService(service.id, 'color', e.target.value)}
                          className="font-mono text-sm"
                          placeholder="from-blue-600 to-indigo-600"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">المميزات (مفصولة بفواصل)</label>
                        <Textarea
                          value={service.features.join(', ')}
                          onChange={(e) => updateService(service.id, 'features', e.target.value.split(', '))}
                          className="font-cairo"
                          rows={2}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Contact & Social Media Management */}
          <TabsContent value="contact" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  إدارة معلومات التواصل
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      رقم الهاتف
                    </label>
                    <Input
                      value={contactData.phone}
                      onChange={(e) => setContactData({...contactData, phone: e.target.value})}
                      className="font-cairo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      البريد الإلكتروني
                    </label>
                    <Input
                      value={contactData.email}
                      onChange={(e) => setContactData({...contactData, email: e.target.value})}
                      className="font-cairo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      العنوان
                    </label>
                    <Input
                      value={contactData.address}
                      onChange={(e) => setContactData({...contactData, address: e.target.value})}
                      className="font-cairo"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                      <Youtube className="w-4 h-4" />
                      يوتيوب
                    </label>
                    <Input
                      value={socialData.youtube}
                      onChange={(e) => setSocialData({...socialData, youtube: e.target.value})}
                      className="font-cairo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                      <Facebook className="w-4 h-4" />
                      فيسبوك
                    </label>
                    <Input
                      value={socialData.facebook}
                      onChange={(e) => setSocialData({...socialData, facebook: e.target.value})}
                      className="font-cairo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      تليجرام
                    </label>
                    <Input
                      value={socialData.telegram}
                      onChange={(e) => setSocialData({...socialData, telegram: e.target.value})}
                      className="font-cairo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      واتساب
                    </label>
                    <Input
                      value={socialData.whatsapp}
                      onChange={(e) => setSocialData({...socialData, whatsapp: e.target.value})}
                      className="font-cairo"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Design Customization */}
          <TabsContent value="design" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="w-5 h-5" />
                  تخصيص الألوان والتصميم
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">اللون الأساسي</label>
                    <div className="flex gap-2">
                      <input
                        type="color"
                        value={colorsData.primary}
                        onChange={(e) => setColorsData({...colorsData, primary: e.target.value})}
                        className="w-12 h-10 rounded border"
                      />
                      <Input
                        value={colorsData.primary}
                        onChange={(e) => setColorsData({...colorsData, primary: e.target.value})}
                        className="flex-1"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">اللون الثانوي</label>
                    <div className="flex gap-2">
                      <input
                        type="color"
                        value={colorsData.secondary}
                        onChange={(e) => setColorsData({...colorsData, secondary: e.target.value})}
                        className="w-12 h-10 rounded border"
                      />
                      <Input
                        value={colorsData.secondary}
                        onChange={(e) => setColorsData({...colorsData, secondary: e.target.value})}
                        className="flex-1"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">لون التمييز</label>
                    <div className="flex gap-2">
                      <input
                        type="color"
                        value={colorsData.accent}
                        onChange={(e) => setColorsData({...colorsData, accent: e.target.value})}
                        className="w-12 h-10 rounded border"
                      />
                      <Input
                        value={colorsData.accent}
                        onChange={(e) => setColorsData({...colorsData, accent: e.target.value})}
                        className="flex-1"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Save Button */}
        <div className="fixed bottom-6 left-6 z-50">
          <Button
            onClick={saveAllChanges}
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white shadow-lg"
          >
            <Save className="w-5 h-5 ml-2" />
            حفظ جميع التغييرات
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
