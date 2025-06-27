
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { useSupabaseData } from '../hooks/useSupabaseData';
import { 
  LogOut, Settings, Palette, Type, Book, Home, Eye, Save, Plus, Trash2,
  Globe, Phone, Mail, MapPin, Youtube, Facebook, MessageCircle, Send,
  Download, Upload, RotateCcw, Sparkles, Layout, Search, Shield, Activity
} from 'lucide-react';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const {
    websiteSettings,
    interactiveContent,
    designSettings,
    loading,
    updateWebsiteSettings,
    updateInteractiveContent,
    addInteractiveContent,
    deleteInteractiveContent,
    updateDesignSettings,
    logAdminActivity
  } = useSupabaseData();

  const [activeTab, setActiveTab] = useState('hero');
  const [localData, setLocalData] = useState<any>({});

  useEffect(() => {
    if (websiteSettings.length > 0) {
      const dataMap: any = {};
      websiteSettings.forEach(setting => {
        dataMap[setting.section_name] = setting.content;
      });
      setLocalData(dataMap);
    }
  }, [websiteSettings]);

  const handleLogout = () => {
    localStorage.removeItem('adminAccess');
    navigate('/');
  };

  const getSettingByName = (name: string) => {
    return websiteSettings.find(s => s.section_name === name)?.content || {};
  };

  const getDesignSettingByCategory = (category: string) => {
    return designSettings.find(s => s.category === category)?.settings || {};
  };

  const saveSection = async (sectionName: string, data: any) => {
    try {
      const success = await updateWebsiteSettings(sectionName, data);
      if (success) {
        await logAdminActivity(`Updated ${sectionName}`, sectionName, getSettingByName(sectionName), data);
        toast({
          title: "تم الحفظ بنجاح! ✅",
          description: `تم حفظ تعديلات ${sectionName} وتطبيقها فوراً`,
        });
      } else {
        toast({
          title: "خطأ في الحفظ ❌",
          description: "فشل في حفظ التعديلات، يرجى المحاولة مرة أخرى",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Save error:', error);
      toast({
        title: "خطأ في الحفظ ❌",
        description: "حدث خطأ غير متوقع",
        variant: "destructive"
      });
    }
  };

  const saveDesignSettings = async (category: string, settings: any) => {
    try {
      const success = await updateDesignSettings(category, settings);
      if (success) {
        await logAdminActivity(`Updated design ${category}`, 'design', getDesignSettingByCategory(category), settings);
        toast({
          title: "تم تحديث التصميم! 🎨",
          description: `تم تطبيق إعدادات ${category} فوراً`,
        });
      }
    } catch (error) {
      console.error('Design save error:', error);
    }
  };

  const addNewQuote = async () => {
    const newQuote = {
      type: 'quote',
      title: 'آية قرآنية جديدة',
      data: {
        arabic: '',
        translation: '',
        source: ''
      },
      is_active: true,
      order_index: interactiveContent.filter(c => c.type === 'quote').length + 1
    };

    const success = await addInteractiveContent(newQuote);
    if (success) {
      toast({
        title: "تمت الإضافة! ➕",
        description: "تم إضافة آية قرآنية جديدة",
      });
    }
  };

  const updateQuote = async (id: string, data: any) => {
    const success = await updateInteractiveContent(id, { data });
    if (success) {
      toast({
        title: "تم التحديث! ✏️",
        description: "تم تحديث الآية القرآنية",
      });
    }
  };

  const deleteQuote = async (id: string) => {
    if (confirm('هل أنت متأكد من حذف هذه الآية؟')) {
      const success = await deleteInteractiveContent(id);
      if (success) {
        toast({
          title: "تم الحذف! 🗑️",
          description: "تم حذف الآية القرآنية",
        });
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center" dir="rtl">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-xl text-gray-600">جاري تحميل لوحة التحكم...</p>
        </div>
      </div>
    );
  }

  const heroData = getSettingByName('hero');
  const aboutData = getSettingByName('about');
  const contactData = getSettingByName('contact');
  const quotes = interactiveContent.filter(c => c.type === 'quote');
  const services = interactiveContent.filter(c => c.type === 'service');
  const colors = getDesignSettingByCategory('colors');
  const animations = getDesignSettingByCategory('animations');
  const layoutSettings = getDesignSettingByCategory('layout');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100" dir="rtl">
      {/* Enhanced Header */}
      <div className="bg-white shadow-lg border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-6 py-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="text-center lg:text-right">
                <h1 className="text-xl lg:text-2xl font-bold text-gray-800 font-cairo">
                  لوحة التحكم المتقدمة
                </h1>
                <p className="text-gray-600 text-sm">إدارة شاملة مع قاعدة بيانات متطورة</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 lg:gap-3">
              <Button
                onClick={() => window.open('/', '_blank')}
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <Eye className="w-4 h-4" />
                <span className="hidden sm:inline">معاينة</span>
              </Button>
              
              <Button
                onClick={handleLogout}
                variant="destructive"
                size="sm"
                className="flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">خروج</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 py-6 lg:py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-3 lg:grid-cols-9 w-full bg-white shadow-md">
            <TabsTrigger value="hero" className="flex items-center gap-1 lg:gap-2 text-xs lg:text-sm">
              <Home className="w-3 h-3 lg:w-4 lg:h-4" />
              <span className="hidden sm:inline">الرئيسية</span>
            </TabsTrigger>
            <TabsTrigger value="about" className="flex items-center gap-1 lg:gap-2 text-xs lg:text-sm">
              <Type className="w-3 h-3 lg:w-4 lg:h-4" />
              <span className="hidden sm:inline">عني</span>
            </TabsTrigger>
            <TabsTrigger value="quotes" className="flex items-center gap-1 lg:gap-2 text-xs lg:text-sm">
              <Book className="w-3 h-3 lg:w-4 lg:h-4" />
              <span className="hidden sm:inline">الآيات</span>
            </TabsTrigger>
            <TabsTrigger value="services" className="flex items-center gap-1 lg:gap-2 text-xs lg:text-sm">
              <Settings className="w-3 h-3 lg:w-4 lg:h-4" />
              <span className="hidden sm:inline">الخدمات</span>
            </TabsTrigger>
            <TabsTrigger value="contact" className="flex items-center gap-1 lg:gap-2 text-xs lg:text-sm">
              <Phone className="w-3 h-3 lg:w-4 lg:h-4" />
              <span className="hidden sm:inline">التواصل</span>
            </TabsTrigger>
            <TabsTrigger value="design" className="flex items-center gap-1 lg:gap-2 text-xs lg:text-sm">
              <Palette className="w-3 h-3 lg:w-4 lg:h-4" />
              <span className="hidden sm:inline">التصميم</span>
            </TabsTrigger>
            <TabsTrigger value="layout" className="flex items-center gap-1 lg:gap-2 text-xs lg:text-sm">
              <Layout className="w-3 h-3 lg:w-4 lg:h-4" />
              <span className="hidden sm:inline">التخطيط</span>
            </TabsTrigger>
            <TabsTrigger value="seo" className="flex items-center gap-1 lg:gap-2 text-xs lg:text-sm">
              <Search className="w-3 h-3 lg:w-4 lg:h-4" />
              <span className="hidden sm:inline">السيو</span>
            </TabsTrigger>
            <TabsTrigger value="activity" className="flex items-center gap-1 lg:gap-2 text-xs lg:text-sm">
              <Activity className="w-3 h-3 lg:w-4 lg:h-4" />
              <span className="hidden sm:inline">النشاط</span>
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
              <CardContent className="space-y-6 p-4 lg:p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">العنوان الرئيسي</label>
                      <Input
                        value={heroData.title || ''}
                        onChange={(e) => setLocalData({...localData, hero: {...heroData, title: e.target.value}})}
                        className="font-amiri text-lg border-2 focus:border-blue-500"
                        placeholder="اكتب العنوان الرئيسي..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">العنوان الفرعي</label>
                      <Input
                        value={heroData.subtitle || ''}
                        onChange={(e) => setLocalData({...localData, hero: {...heroData, subtitle: e.target.value}})}
                        className="font-cairo border-2 focus:border-blue-500"
                        placeholder="اكتب العنوان الفرعي..."
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">الوصف التفصيلي</label>
                    <Textarea
                      value={heroData.description || ''}
                      onChange={(e) => setLocalData({...localData, hero: {...heroData, description: e.target.value}})}
                      rows={6}
                      className="font-cairo border-2 focus:border-blue-500 resize-none"
                      placeholder="اكتب الوصف التفصيلي للصفحة الرئيسية..."
                    />
                  </div>
                </div>
                <Button
                  onClick={() => saveSection('hero', localData.hero || heroData)}
                  className="w-full lg:w-auto bg-blue-600 hover:bg-blue-700"
                >
                  <Save className="w-4 h-4 ml-2" />
                  حفظ القسم الرئيسي
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* About Section Management */}
          <TabsContent value="about" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-indigo-50 to-blue-50">
                <CardTitle className="flex items-center gap-2 text-indigo-800">
                  <Type className="w-5 h-5" />
                  إدارة قسم عني
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-4 lg:p-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">العنوان</label>
                  <Input
                    value={aboutData.title || ''}
                    onChange={(e) => setLocalData({...localData, about: {...aboutData, title: e.target.value}})}
                    className="font-cairo border-2 focus:border-indigo-500"
                    placeholder="العنوان"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">الوصف الشخصي</label>
                  <Textarea
                    value={aboutData.description || ''}
                    onChange={(e) => setLocalData({...localData, about: {...aboutData, description: e.target.value}})}
                    rows={6}
                    className="font-cairo border-2 focus:border-indigo-500"
                    placeholder="اكتب نبذة شخصية مفصلة..."
                  />
                </div>
                <Button
                  onClick={() => saveSection('about', localData.about || aboutData)}
                  className="w-full lg:w-auto bg-indigo-600 hover:bg-indigo-700"
                >
                  <Save className="w-4 h-4 ml-2" />
                  حفظ قسم عني
                </Button>
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
                <Button onClick={addNewQuote} size="sm" className="bg-green-600 hover:bg-green-700">
                  <Plus className="w-4 h-4 ml-2" />
                  إضافة آية
                </Button>
              </CardHeader>
              <CardContent className="space-y-6 p-4 lg:p-6 max-h-96 overflow-y-auto">
                {quotes.map((quote, index) => (
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
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">النص العربي</label>
                        <Textarea
                          value={quote.data.arabic || ''}
                          onChange={(e) => {
                            const newData = {...quote.data, arabic: e.target.value};
                            updateQuote(quote.id, newData);
                          }}
                          className="font-amiri text-lg border-2 focus:border-green-500"
                          rows={3}
                          placeholder="اكتب النص العربي للآية..."
                        />
                      </div>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">المعنى/الترجمة</label>
                          <Input
                            value={quote.data.translation || ''}
                            onChange={(e) => {
                              const newData = {...quote.data, translation: e.target.value};
                              updateQuote(quote.id, newData);
                            }}
                            className="font-cairo border-2 focus:border-green-500"
                            placeholder="اكتب المعنى..."
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">المصدر</label>
                          <Input
                            value={quote.data.source || ''}
                            onChange={(e) => {
                              const newData = {...quote.data, source: e.target.value};
                              updateQuote(quote.id, newData);
                            }}
                            className="font-cairo border-2 focus:border-green-500"
                            placeholder="اكتب مصدر الآية..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Contact Management */}
          <TabsContent value="contact" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                <CardTitle className="flex items-center gap-2 text-blue-800">
                  <Phone className="w-5 h-5" />
                  معلومات التواصل
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-4 lg:p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        رقم الهاتف
                      </label>
                      <Input
                        value={contactData.phone || ''}
                        onChange={(e) => setLocalData({...localData, contact: {...contactData, phone: e.target.value}})}
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
                        value={contactData.email || ''}
                        onChange={(e) => setLocalData({...localData, contact: {...contactData, email: e.target.value}})}
                        className="font-cairo border-2 focus:border-blue-500"
                        placeholder="sheikh@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        العنوان
                      </label>
                      <Input
                        value={contactData.address || ''}
                        onChange={(e) => setLocalData({...localData, contact: {...contactData, address: e.target.value}})}
                        className="font-cairo border-2 focus:border-blue-500"
                        placeholder="المدينة، البلد"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-bold text-lg text-gray-800 mb-4">وسائل التواصل الاجتماعي</h3>
                    <div>
                      <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                        <Youtube className="w-4 h-4" />
                        يوتيوب
                      </label>
                      <Input
                        value={contactData.social_media?.youtube || ''}
                        onChange={(e) => {
                          const socialMedia = {...(contactData.social_media || {}), youtube: e.target.value};
                          setLocalData({...localData, contact: {...contactData, social_media: socialMedia}});
                        }}
                        className="font-cairo border-2 focus:border-blue-500"
                        placeholder="https://youtube.com/@username"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                        <MessageCircle className="w-4 h-4" />
                        واتساب
                      </label>
                      <Input
                        value={contactData.social_media?.whatsapp || ''}
                        onChange={(e) => {
                          const socialMedia = {...(contactData.social_media || {}), whatsapp: e.target.value};
                          setLocalData({...localData, contact: {...contactData, social_media: socialMedia}});
                        }}
                        className="font-cairo border-2 focus:border-blue-500"
                        placeholder="https://wa.me/201000000000"
                      />
                    </div>
                  </div>
                </div>
                <Button
                  onClick={() => saveSection('contact', localData.contact || contactData)}
                  className="w-full lg:w-auto bg-blue-600 hover:bg-blue-700"
                >
                  <Save className="w-4 h-4 ml-2" />
                  حفظ معلومات التواصل
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Design Settings */}
          <TabsContent value="design" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                <CardTitle className="flex items-center gap-2 text-purple-800">
                  <Palette className="w-5 h-5" />
                  إعدادات الألوان والتصميم
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-4 lg:p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-bold text-lg text-gray-800">الألوان</h3>
                    <div>
                      <label className="block text-sm font-medium mb-2">اللون الأساسي</label>
                      <div className="flex gap-3">
                        <input
                          type="color"
                          value={colors.primary || '#1e3a8a'}
                          onChange={(e) => saveDesignSettings('colors', {...colors, primary: e.target.value})}
                          className="w-12 h-12 rounded-lg border-2 cursor-pointer"
                        />
                        <Input
                          value={colors.primary || '#1e3a8a'}
                          onChange={(e) => saveDesignSettings('colors', {...colors, primary: e.target.value})}
                          className="flex-1 font-mono"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">اللون الثانوي</label>
                      <div className="flex gap-3">
                        <input
                          type="color"
                          value={colors.secondary || '#fbbf24'}
                          onChange={(e) => saveDesignSettings('colors', {...colors, secondary: e.target.value})}
                          className="w-12 h-12 rounded-lg border-2 cursor-pointer"
                        />
                        <Input
                          value={colors.secondary || '#fbbf24'}
                          onChange={(e) => saveDesignSettings('colors', {...colors, secondary: e.target.value})}
                          className="flex-1 font-mono"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-bold text-lg text-gray-800">الحركات والتأثيرات</h3>
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium">تفعيل الجسيمات</label>
                      <Switch
                        checked={animations.enable_particles || false}
                        onCheckedChange={(checked) => 
                          saveDesignSettings('animations', {...animations, enable_particles: checked})
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium">العناصر العائمة</label>
                      <Switch
                        checked={animations.enable_floating || false}
                        onCheckedChange={(checked) => 
                          saveDesignSettings('animations', {...animations, enable_floating: checked})
                        }
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Activity Log */}
          <TabsContent value="activity" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100">
                <CardTitle className="flex items-center gap-2 text-gray-800">
                  <Activity className="w-5 h-5" />
                  سجل النشاط الإداري
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 lg:p-6">
                <div className="text-center py-8">
                  <Activity className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">سيتم عرض سجل النشاط قريباً</p>
                  <p className="text-sm text-gray-500">جميع التعديلات والتغييرات سيتم تسجيلها هنا</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
