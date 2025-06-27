
-- حذف الجداول القديمة غير المحدثة
DROP TABLE IF EXISTS admin_users CASCADE;
DROP TABLE IF EXISTS gallery_items CASCADE;
DROP TABLE IF EXISTS services CASCADE;
DROP TABLE IF EXISTS company_info CASCADE;

-- إنشاء جدول إعدادات الموقع الرئيسية
CREATE TABLE public.website_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  section_name TEXT NOT NULL UNIQUE,
  content JSONB NOT NULL DEFAULT '{}',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- إنشاء جدول الأقسام والمكونات
CREATE TABLE public.sections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  title TEXT NOT NULL,
  content JSONB NOT NULL DEFAULT '{}',
  order_index INTEGER DEFAULT 0,
  is_visible BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- إنشاء جدول المحتوى التفاعلي
CREATE TABLE public.interactive_content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  type TEXT NOT NULL, -- 'slider', 'animation', 'quote', 'service'
  title TEXT NOT NULL,
  data JSONB NOT NULL DEFAULT '{}',
  is_active BOOLEAN DEFAULT true,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- إنشاء جدول الوسائط
CREATE TABLE public.media_assets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  type TEXT NOT NULL, -- 'image', 'video', 'icon'
  url TEXT,
  file_path TEXT,
  alt_text TEXT,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- إنشاء جدول التصميم والألوان
CREATE TABLE public.design_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category TEXT NOT NULL, -- 'colors', 'fonts', 'layout', 'animations'
  settings JSONB NOT NULL DEFAULT '{}',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- إنشاء جدول نشاط الإدارة
CREATE TABLE public.admin_activity (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  action TEXT NOT NULL,
  section TEXT,
  old_data JSONB,
  new_data JSONB,
  ip_address TEXT,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- تفعيل RLS على جميع الجداول (لحماية أفضل)
ALTER TABLE public.website_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.interactive_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.media_assets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.design_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_activity ENABLE ROW LEVEL SECURITY;

-- سياسات أمان للقراءة العامة (للزوار)
CREATE POLICY "Allow public read access to website_settings" ON public.website_settings FOR SELECT USING (true);
CREATE POLICY "Allow public read access to sections" ON public.sections FOR SELECT USING (is_visible = true);
CREATE POLICY "Allow public read access to interactive_content" ON public.interactive_content FOR SELECT USING (is_active = true);
CREATE POLICY "Allow public read access to media_assets" ON public.media_assets FOR SELECT USING (true);
CREATE POLICY "Allow public read access to design_settings" ON public.design_settings FOR SELECT USING (is_active = true);

-- سياسات إدارية (للتحديث والإضافة - بدون مصادقة للبساطة)
CREATE POLICY "Allow all admin operations on website_settings" ON public.website_settings FOR ALL USING (true);
CREATE POLICY "Allow all admin operations on sections" ON public.sections FOR ALL USING (true);
CREATE POLICY "Allow all admin operations on interactive_content" ON public.interactive_content FOR ALL USING (true);
CREATE POLICY "Allow all admin operations on media_assets" ON public.media_assets FOR ALL USING (true);
CREATE POLICY "Allow all admin operations on design_settings" ON public.design_settings FOR ALL USING (true);
CREATE POLICY "Allow all admin operations on admin_activity" ON public.admin_activity FOR ALL USING (true);

-- إدراج البيانات الأساسية
INSERT INTO public.website_settings (section_name, content) VALUES
('hero', '{
  "title": "الشيخ عاصم فايد",
  "subtitle": "درست بالأزهر الشريف وحفظت القرآن الكريم",
  "description": "حاصل على ليسانس اللغة العربية من جامعة الأزهر فرع المنصورة ودبلوم العلوم الشرعية من أكاديمية زاد بالمملكة العربية السعودية. إمام وخطيب ومعلم ومحفظ للقرآن الكريم.",
  "background_image": "",
  "show_particles": true
}'),
('about', '{
  "title": "عن الشيخ عاصم فايد",
  "description": "درست بالأزهر الشريف منذ نعومة أظافري وحفظت القرآن الكريم في سن صغيرة والتحقت بكلية اللغة العربية بجامعة الأزهر فرع المنصورة وحصلت على درجة الليسانس ثم حصلت على دبلوم العلوم الشرعية بأكاديمية زاد بالمملكة العربية السعودية وشرفني الله بإمامة العديد من المساجد وأعمل كمعلم ومحفظ للقرآن الكريم",
  "achievements": [
    {
      "title": "حفظ القرآن الكريم",
      "description": "حفظت كتاب الله في سن صغيرة",
      "icon": "📖"
    },
    {
      "title": "ليسانس اللغة العربية",
      "description": "جامعة الأزهر فرع المنصورة",
      "icon": "🎓"
    },
    {
      "title": "دبلوم العلوم الشرعية",
      "description": "أكاديمية زاد بالمملكة العربية السعودية",
      "icon": "📜"
    },
    {
      "title": "إمام وخطيب",
      "description": "شرفني الله بإمامة العديد من المساجد",
      "icon": "🕌"
    }
  ]
}'),
('contact', '{
  "phone": "+20 100 000 0000",
  "email": "sheikh@example.com",
  "address": "المنصورة، مصر",
  "social_media": {
    "youtube": "https://youtube.com/@sheikhassem",
    "facebook": "https://facebook.com/sheikhassem",
    "telegram": "https://t.me/sheikhassem",
    "whatsapp": "https://wa.me/201000000000"
  }
}');

INSERT INTO public.design_settings (category, settings) VALUES
('colors', '{
  "primary": "#1e3a8a",
  "secondary": "#fbbf24", 
  "accent": "#059669",
  "background": "#f8fafc",
  "text": "#1e293b"
}'),
('animations', '{
  "speed": "normal",
  "enable_particles": true,
  "enable_floating": true,
  "transition_duration": 300
}'),
('layout', '{
  "show_scroll_indicator": true,
  "header_style": "centered",
  "footer_style": "detailed",
  "mobile_optimized": true
}');

-- إضافة المحتوى التفاعلي الأساسي
INSERT INTO public.interactive_content (type, title, data, order_index) VALUES
('quote', 'آية قرآنية 1', '{
  "arabic": "﴿ وَهُوَ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ بِالْحَقِّ ﴾",
  "translation": "وهو الذي خلق السماوات والأرض بالحق",
  "source": "سورة الأنعام - الآية 73"
}', 1),
('quote', 'آية قرآنية 2', '{
  "arabic": "﴿ وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ ﴾",
  "translation": "وجعلنا من الماء كل شيء حي", 
  "source": "سورة الأنبياء - الآية 30"
}', 2),
('service', 'تحفيظ القرآن الكريم', '{
  "description": "تعليم وتحفيظ القرآن الكريم بالتجويد الصحيح",
  "features": ["تعليم التجويد", "الحفظ المتقن", "المراجعة الدورية"],
  "icon": "📖",
  "color": "from-emerald-600 to-teal-600"
}', 1),
('service', 'دروس اللغة العربية', '{
  "description": "تعليم اللغة العربية وقواعدها وبلاغتها",
  "features": ["النحو والصرف", "البلاغة", "الإعراب"],
  "icon": "✍️", 
  "color": "from-blue-600 to-indigo-600"
}', 2);

-- إنشاء دالة لتحديث timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- إضافة triggers للتحديث التلقائي
CREATE TRIGGER update_website_settings_updated_at BEFORE UPDATE ON public.website_settings FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_sections_updated_at BEFORE UPDATE ON public.sections FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_interactive_content_updated_at BEFORE UPDATE ON public.interactive_content FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_design_settings_updated_at BEFORE UPDATE ON public.design_settings FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
