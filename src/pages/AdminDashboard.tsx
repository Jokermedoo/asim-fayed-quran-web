
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  LogOut, 
  Settings, 
  Image, 
  Type, 
  Palette, 
  Book,
  Home,
  Eye
} from 'lucide-react';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('content');

  // Content Management State
  const [heroTitle, setHeroTitle] = useState('الشيخ عاصم فايد');
  const [heroSubtitle, setHeroSubtitle] = useState('رحلة روحانية نحو الهدوء والسكينة');
  const [heroDescription, setHeroDescription] = useState('مرحباً بكم في عالم من السكينة والهدوء الروحاني');

  // Colors State
  const [primaryColor, setPrimaryColor] = useState('#1e3a8a');
  const [secondaryColor, setSecondaryColor] = useState('#fbbf24');
  const [accentColor, setAccentColor] = useState('#059669');

  // Wisdom Quotes State
  const [wisdomQuotes, setWisdomQuotes] = useState([
    {
      id: 1,
      arabic: '﴿ وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا ﴾',
      translation: 'ومن يتق الله يجعل له مخرجاً',
      source: 'سورة الطلاق - الآية 2'
    }
  ]);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isAdminLoggedIn');
    if (!isLoggedIn) {
      navigate('/admin-login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    navigate('/');
  };

  const saveContent = () => {
    const contentData = {
      hero: { title: heroTitle, subtitle: heroSubtitle, description: heroDescription },
      colors: { primary: primaryColor, secondary: secondaryColor, accent: accentColor },
      wisdomQuotes
    };
    localStorage.setItem('websiteContent', JSON.stringify(contentData));
    alert('تم حفظ التغييرات بنجاح!');
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
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 font-cairo">
            لوحة تحكم الموقع
          </h1>
          <div className="flex gap-3">
            <Button
              onClick={() => navigate('/')}
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
          <TabsList className="grid grid-cols-4 w-full max-w-2xl mx-auto">
            <TabsTrigger value="content" className="flex items-center gap-2">
              <Type className="w-4 h-4" />
              المحتوى
            </TabsTrigger>
            <TabsTrigger value="wisdom" className="flex items-center gap-2">
              <Book className="w-4 h-4" />
              الحكمة الإسلامية
            </TabsTrigger>
            <TabsTrigger value="design" className="flex items-center gap-2">
              <Palette className="w-4 h-4" />
              التصميم
            </TabsTrigger>
            <TabsTrigger value="media" className="flex items-center gap-2">
              <Image className="w-4 h-4" />
              الوسائط
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
                    value={heroTitle}
                    onChange={(e) => setHeroTitle(e.target.value)}
                    className="font-amiri text-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">العنوان الفرعي</label>
                  <Input
                    value={heroSubtitle}
                    onChange={(e) => setHeroSubtitle(e.target.value)}
                    className="font-cairo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">الوصف</label>
                  <Textarea
                    value={heroDescription}
                    onChange={(e) => setHeroDescription(e.target.value)}
                    rows={4}
                    className="font-cairo"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Wisdom Quotes Management */}
          <TabsContent value="wisdom" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Book className="w-5 h-5" />
                  إدارة آيات الحكمة
                </CardTitle>
                <Button onClick={addNewQuote} className="bg-gold-400 hover:bg-gold-500">
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
                          حذف
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
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
                        value={primaryColor}
                        onChange={(e) => setPrimaryColor(e.target.value)}
                        className="w-12 h-10 rounded border"
                      />
                      <Input
                        value={primaryColor}
                        onChange={(e) => setPrimaryColor(e.target.value)}
                        className="flex-1"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">اللون الثانوي</label>
                    <div className="flex gap-2">
                      <input
                        type="color"
                        value={secondaryColor}
                        onChange={(e) => setSecondaryColor(e.target.value)}
                        className="w-12 h-10 rounded border"
                      />
                      <Input
                        value={secondaryColor}
                        onChange={(e) => setSecondaryColor(e.target.value)}
                        className="flex-1"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">لون التمييز</label>
                    <div className="flex gap-2">
                      <input
                        type="color"
                        value={accentColor}
                        onChange={(e) => setAccentColor(e.target.value)}
                        className="w-12 h-10 rounded border"
                      />
                      <Input
                        value={accentColor}
                        onChange={(e) => setAccentColor(e.target.value)}
                        className="flex-1"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Media Management */}
          <TabsContent value="media" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Image className="w-5 h-5" />
                  إدارة الصور والخلفيات
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-gray-500">
                  <Image className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>إدارة الصور والخلفيات</p>
                  <p className="text-sm">قريباً سيتم إضافة ميزة رفع الصور</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Save Button */}
        <div className="fixed bottom-6 left-6 z-50">
          <Button
            onClick={saveContent}
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white shadow-lg"
          >
            <Settings className="w-5 h-5 ml-2" />
            حفظ جميع التغييرات
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
