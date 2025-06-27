
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { 
  Settings, 
  Eye, 
  Palette, 
  Type, 
  X,
  Maximize2,
  LogOut
} from 'lucide-react';

const QuickAdminPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAdminAccess, setHasAdminAccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const adminAccess = localStorage.getItem('adminAccess');
    setHasAdminAccess(adminAccess === 'granted');
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminAccess');
    setHasAdminAccess(false);
    setIsOpen(false);
    window.location.reload();
  };

  const quickActions = [
    {
      icon: Settings,
      label: 'لوحة التحكم الكاملة',
      action: () => navigate('/admin-dashboard'),
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      icon: Type,
      label: 'تعديل النصوص',
      action: () => navigate('/admin-dashboard?tab=hero'),
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      icon: Palette,
      label: 'تغيير الألوان',
      action: () => navigate('/admin-dashboard?tab=design'),
      color: 'bg-purple-600 hover:bg-purple-700'
    },
    {
      icon: Eye,
      label: 'معاينة الموقع',
      action: () => window.open('/', '_blank'),
      color: 'bg-orange-600 hover:bg-orange-700'
    }
  ];

  // Only show for admin users
  if (!hasAdminAccess) {
    return null;
  }

  return (
    <>
      {/* Floating Trigger Button */}
      <motion.div
        className="fixed bottom-4 right-4 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-2xl"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Settings className="w-6 h-6" />}
        </Button>
      </motion.div>

      {/* Quick Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-20 right-4 z-40"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="w-64 bg-white/95 backdrop-blur-lg shadow-2xl border-2 border-white/20">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Maximize2 className="w-5 h-5 text-gray-600" />
                    <h3 className="font-bold text-gray-800 font-cairo">التحكم السريع</h3>
                  </div>
                  <Button
                    onClick={handleLogout}
                    variant="ghost"
                    size="sm"
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <LogOut className="w-4 h-4" />
                  </Button>
                </div>
                
                <div className="space-y-2">
                  {quickActions.map((action, index) => (
                    <motion.button
                      key={index}
                      onClick={action.action}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg text-white font-cairo font-medium transition-all duration-200 ${action.color}`}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <action.icon className="w-4 h-4" />
                      {action.label}
                    </motion.button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default QuickAdminPanel;
