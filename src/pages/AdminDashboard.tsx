
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { useContentManager } from '../hooks/useContentManager';
import { useToast } from '@/hooks/use-toast';
import { 
  LogOut, Settings, Palette, Type, Book, Home, Eye, Save, Plus, Trash2,
  Globe, Phone, Mail, MapPin, Youtube, Facebook, MessageCircle, Send,
  Download, Upload, RotateCcw, Sparkles, Layout, Search, Monitor
} from 'lucide-react';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { content, updateContent, resetToDefault, exportContent, importContent } = useContentManager();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('hero');
  const [previewMode, setPreviewMode] = useState(false);

  // Local state for real-time editing
  const [heroData, setHeroData] = useState(content.hero);
  const [colorsData, setColorsData] = useState(content.colors);
  const [wisdomQuotes, setWisdomQuotes] = useState(content.wisdomQuotes);
  const [cosmicData, setCosmicData] = useState(content.cosmicExploration);
  const [aboutData, setAboutData] = useState(content.about);
  const [servicesData, setServicesData] = useState(content.services);
  const [socialData, setSocialData] = useState(content.socialMedia);
  const [contactData, setContactData] = useState(content.contact);
  const [designData, setDesignData] = useState(content.design);
  const [layoutData, setLayoutData] = useState(content.layout);
  const [seoData, setSeoData] = useState(content.seo);

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
    setCosmicData(content.cosmicExploration);
    setAboutData(content.about);
    setServicesData(content.services);
    setSocialData(content.socialMedia);
    setContactData(content.contact);
    setDesignData(content.design);
    setLayoutData(content.layout);
    setSeoData(content.seo);
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
      contact: contactData,
      design: designData,
      layout: layoutData,
      seo: seoData
    });
    
    toast({
      title: "تم الحفظ بنجاح! ✅",
      description: "تم حفظ جميع التغييرات وتطبيقها على الموقع",
    });
  };

  const handleFileImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      importContent(file);
      toast({
        title: "تم الاستيراد بنجاح! 📥",
        description: "تم استيراد المحتوى من الملف",
      });
    }
  };

  const handleReset = () => {
    if (confirm('هل أنت متأكد من إعادة تعيين جميع البيانات للوضع الافتراضي؟')) {
      resetToDefault();
      toast({
        title: "تم إعادة التعيين! 🔄",
        description: "تم إعادة تعيين جميع البيانات للوضع الافتراضي",
      });
    }
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100" dir="rtl">
      {/* Enhanced Header */}
      <div className="bg-white shadow-lg border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800 font-cairo">
                  لوحة تحكم الموقع الشخصي
                </h1>
                <p className="text-gray-600 text-sm">إدارة شاملة للمحتوى والتصميم</p>
              </div>
            </div>
            
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
                onClick={exportContent}
                variant="outline"
                className="flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                تصدير
              </Button>
              
              <div className="relative">
                <input
                  type="file"
                  accept=".json"
                  onChange={handleFileImport}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <Button variant="outline" className="flex items-center gap-2">
                  <Upload className="w-4 h-4" />
                  استيراد
                </Button>
              </div>
              
              <Button
                onClick={handleReset}
                variant="outline"
                className="flex items-center gap-2 text-orange-600"
              >
                <RotateCcw className="w-4 h-4" />
                إعادة تعيين
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
      </div>

      <div className="container mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-9 w-full max-w-6xl mx-auto bg-white shadow-md">
            <TabsTrigger value="hero" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              الرئيسية
            </TabsTrigger>
            <TabsTrigger value="quotes" className="flex items-center gap-2">
              <Book className="w-4 h-4" />
              الآيات
            </TabsTrigger>
            <TabsTrigger value="cosmic" className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              الكون
            </TabsTrigger>
            <TabsTrigger value="about" className="flex items-center gap-2">
              <Type className="w-4 h-4" />
              عني
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
            <TabsTrigger value="layout" className="flex items-center gap-2">
              <Layout className="w-4 h-4" />
              التخطيط
            </TabsTrigger>
            <TabsTrigger value="seo" className="flex items-center gap-2">
              <Search className="w-4 h-4" />
              السيو
            </TabsTrigger>
          </TabsList>

          {/* Hero Section Management */}
          <TabsContent value="hero" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                <CardTitle className="flex items-center gap-2 text-blue-800">
                  <Home className="w-5 h-5" />
                  إدارة القسم الرئيسي
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">العنوان الرئيسي</label>
                      <Input
                        value={heroData.title}
                        onChange={(e) => setHeroData({...heroData, title: e.target.value})}
                        className="font-amiri text-lg border-2 focus:border-blue-500"
                        placeholder="اكتب العنوان الرئيسي..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">العنوان الفرعي</label>
                      <Input
                        value={heroData.subtitle}
                        onChange={(e) => setHeroData({...heroData, subtitle: e.target.value})}
                        className="font-cairo border-2 focus:border-blue-500"
                        placeholder="اكتب العنوان الفرعي..."
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">الوصف التفصيلي</label>
                    <Textarea
                      value={heroData.description}
                      onChange={(e) => setHeroData({...heroData, description: e.target.value})}
                      rows={6}
                      className="font-cairo border-2 focus:border-blue-500 resize-none"
                      placeholder="اكتب الوصف التفصيلي للصفحة الرئيسية..."
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Quotes Management */}
          <TabsContent value="quotes" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-green-800">
                  <Book className="w-5 h-5" />
                  إدارة الآيات القرآنية
                </CardTitle>
                <Button onClick={addNewQuote} className="bg-green-600 hover:bg-green-700">
                  <Plus className="w-4 h-4 ml-2" />
                  إضافة آية جديدة
                </Button>
              </CardHeader>
              <CardContent className="space-y-6 p-6 max-h-96 overflow-y-auto">
                {wisdomQuotes.map((quote, index) => (
                  <div key={quote.id} className="border-2 border-gray-200 rounded-lg p-4 space-y-4 hover:border-green-300 transition-colors">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-lg text-gray-800">الآية رقم {index + 1}</h4>
                      <Button
                        onClick={() => deleteQuote(quote.id)}
                        variant="destructive"
                        size="sm"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium mb-2">النص العربي</label>
                        <Textarea
                          value={quote.arabic}
                          onChange={(e) => updateQuote(quote.id, 'arabic', e.target.value)}
                          className="font-amiri text-lg border-2 focus:border-green-500"
                          rows={3}
                          placeholder="اكتب النص العربي للآية..."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">المعنى/الترجمة</label>
                        <Input
                          value={quote.translation}
                          onChange={(e) => updateQuote(quote.id, 'translation', e.target.value)}
                          className="font-cairo border-2 focus:border-green-500"
                          placeholder="اكتب المعنى أو الترجمة..."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">المصدر</label>
                        <Input
                          value={quote.source}
                          onChange={(e) => updateQuote(quote.id, 'source', e.target.value)}
                          className="font-cairo border-2 focus:border-green-500"
                          placeholder="اكتب مصدر الآية..."
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Design Customization */}
          <TabsContent value="design" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                  <CardTitle className="flex items-center gap-2 text-purple-800">
                    <Palette className="w-5 h-5" />
                    ألوان الموقع
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 p-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">اللون الأساسي</label>
                      <div className="flex gap-3">
                        <input
                          type="color"
                          value={colorsData.primary}
                          onChange={(e) => setColorsData({...colorsData, primary: e.target.value})}
                          className="w-12 h-12 rounded-lg border-2 cursor-pointer"
                        />
                        <Input
                          value={colorsData.primary}
                          onChange={(e) => setColorsData({...colorsData, primary: e.target.value})}
                          className="flex-1 font-mono"
                          placeholder="#1e3a8a"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">اللون الثانوي</label>
                      <div className="flex gap-3">
                        <input
                          type="color"
                          value={colorsData.secondary}
                          onChange={(e) => setColorsData({...colorsData, secondary: e.target.value})}
                          className="w-12 h-12 rounded-lg border-2 cursor-pointer"
                        />
                        <Input
                          value={colorsData.secondary}
                          onChange={(e) => setColorsData({...colorsData, secondary: e.target.value})}
                          className="flex-1 font-mono"
                          placeholder="#fbbf24"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">لون التمييز</label>
                      <div className="flex gap-3">
                        <input
                          type="color"
                          value={colorsData.accent}
                          onChange={(e) => setColorsData({...colorsData, accent: e.target.value})}
                          className="w-12 h-12 rounded-lg border-2 cursor-pointer"
                        />
                        <Input
                          value={colorsData.accent}
                          onChange={(e) => setColorsData({...colorsData, accent: e.target.value})}
                          className="flex-1 font-mono"
                          placeholder="#059669"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-indigo-50 to-blue-50">
                  <CardTitle className="flex items-center gap-2 text-indigo-800">
                    <Sparkles className="w-5 h-5" />
                    إعدادات التصميم
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 p-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">نوع الخلفية</label>
                      <Select 
                        value={designData.backgroundType} 
                        onValueChange={(value: 'cosmic' | 'nature' | 'minimal') => 
                          setDesignData({...designData, backgroundType: value})
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cosmic">خلفية كونية</SelectItem>
                          <SelectItem value="nature">خلفية طبيعية</SelectItem>
                          <SelectItem value="minimal">خلفية بسيطة</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">سرعة الحركة</label>
                      <Select 
                        value={designData.animationSpeed} 
                        onValueChange={(value: 'slow' | 'normal' | 'fast') => 
                          setDesignData({...designData, animationSpeed: value})
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="slow">بطيئة</SelectItem>
                          <SelectItem value="normal">عادية</SelectItem>
                          <SelectItem value="fast">سريعة</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium">تفعيل الجسيمات</label>
                      <Switch
                        checked={designData.enableParticles}
                        onCheckedChange={(checked) => 
                          setDesignData({...designData, enableParticles: checked})
                        }
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium">العناصر العائمة</label>
                      <Switch
                        checked={designData.enableFloatingElements}
                        onCheckedChange={(checked) => 
                          setDesignData({...designData, enableFloatingElements: checked})
                        }
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Contact & Social Media */}
          <TabsContent value="contact" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                  <CardTitle className="flex items-center gap-2 text-blue-800">
                    <Phone className="w-5 h-5" />
                    معلومات التواصل
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 p-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      رقم الهاتف
                    </label>
                    <Input
                      value={contactData.phone}
                      onChange={(e) => setContactData({...contactData, phone: e.target.value})}
                      className="font-cairo border-2 focus:border-blue-500"
                      placeholder="+20 100 000 0000"
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
                      className="font-cairo border-2 focus:border-blue-500"
                      placeholder="info@example.com"
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
                      className="font-cairo border-2 focus:border-blue-500"
                      placeholder="المدينة، البلد"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-green-50 to-teal-50">
                  <CardTitle className="flex items-center gap-2 text-green-800">
                    <Globe className="w-5 h-5" />
                    وسائل التواصل الاجتماعي
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 p-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                      <Youtube className="w-4 h-4" />
                      يوتيوب
                    </label>
                    <Input
                      value={socialData.youtube}
                      onChange={(e) => setSocialData({...socialData, youtube: e.target.value})}
                      className="font-cairo border-2 focus:border-green-500"
                      placeholder="https://youtube.com/@username"
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
                      className="font-cairo border-2 focus:border-green-500"
                      placeholder="https://facebook.com/username"
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
                      className="font-cairo border-2 focus:border-green-500"
                      placeholder="https://t.me/username"
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
                      className="font-cairo border-2 focus:border-green-500"
                      placeholder="https://wa.me/201000000000"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* SEO Management */}
          <TabsContent value="seo" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50">
                <CardTitle className="flex items-center gap-2 text-orange-800">
                  <Search className="w-5 h-5" />
                  إعدادات تحسين محركات البحث (SEO)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-6">
                <div>
                  <label className="block text-sm font-medium mb-2">عنوان الصفحة (Meta Title)</label>
                  <Input
                    value={seoData.metaTitle}
                    onChange={(e) => setSeoData({...seoData, metaTitle: e.target.value})}
                    className="font-cairo border-2 focus:border-orange-500"
                    placeholder="عنوان الصفحة الذي يظهر في نتائج البحث"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    الطول المثالي: 50-60 حرف (الحالي: {seoData.metaTitle.length})
                  </p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">وصف الصفحة (Meta Description)</label>
                  <Textarea
                    value={seoData.metaDescription}
                    onChange={(e) => setSeoData({...seoData, metaDescription: e.target.value})}
                    className="font-cairo border-2 focus:border-orange-500"
                    rows={3}
                    placeholder="وصف مختصر عن محتوى الصفحة يظهر في نتائج البحث"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    الطول المثالي: 150-160 حرف (الحالي: {seoData.metaDescription.length})
                  </p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">الكلمات المفتاحية</label>
                  <Textarea
                    value={seoData.keywords.join(', ')}
                    onChange={(e) => setSeoData({...seoData, keywords: e.target.value.split(', ').filter(k => k.trim())})}
                    className="font-cairo border-2 focus:border-orange-500"
                    rows={2}
                    placeholder="كلمة مفتاحية 1, كلمة مفتاحية 2, كلمة مفتاحية 3"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    افصل الكلمات المفتاحية بفواصل
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Fixed Save Button */}
        <div className="fixed bottom-6 left-6 z-50">
          <Button
            onClick={saveAllChanges}
            size="lg"
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
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
