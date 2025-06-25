
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Lock, User } from 'lucide-react';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple authentication - في التطبيق الحقيقي يجب استخدام نظام أمان أقوى
    if (username === 'admin' && password === 'sheikh2024') {
      localStorage.setItem('isAdminLoggedIn', 'true');
      navigate('/admin-dashboard');
    } else {
      setError('اسم المستخدم أو كلمة المرور غير صحيحة');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-blue-900 via-emerald-800 to-navy-blue-800 flex items-center justify-center p-6" dir="rtl">
      <Card className="w-full max-w-md bg-white/10 backdrop-blur-lg border-gold-400/30">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-amiri text-gold-400 mb-2">
            دخول الأدمن
          </CardTitle>
          <p className="text-white/70 font-cairo">
            لوحة تحكم الموقع الشخصي
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <User className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gold-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="اسم المستخدم"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="pr-12 bg-white/10 border-gold-400/30 text-white placeholder:text-white/50"
                required
              />
            </div>
            <div className="relative">
              <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gold-400 w-5 h-5" />
              <Input
                type="password"
                placeholder="كلمة المرور"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pr-12 bg-white/10 border-gold-400/30 text-white placeholder:text-white/50"
                required
              />
            </div>
            {error && (
              <p className="text-red-400 text-sm font-cairo text-center">{error}</p>
            )}
            <Button
              type="submit"
              className="w-full bg-gold-400 hover:bg-gold-500 text-navy-blue-900 font-cairo font-bold"
            >
              دخول
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
