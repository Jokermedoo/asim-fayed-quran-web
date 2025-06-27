
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Settings, Eye, EyeOff } from 'lucide-react';

const SecureAdminAccess = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [secretKey, setSecretKey] = useState('');
  const [showKey, setShowKey] = useState(false);
  const navigate = useNavigate();

  // Secret key combination - only admin knows this
  const adminSecretKey = 'admin123$%^';

  const handleSecretAccess = () => {
    if (secretKey === adminSecretKey) {
      localStorage.setItem('adminAccess', 'granted');
      navigate('/admin-dashboard');
      setIsOpen(false);
      setSecretKey('');
    } else {
      alert('مفتاح غير صحيح');
      setSecretKey('');
    }
  };

  // Triple click to reveal admin panel
  const handleTripleClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      {/* Hidden trigger - triple click on logo area */}
      <div 
        className="absolute top-4 left-4 w-12 h-12 opacity-0 cursor-pointer z-50"
        onClick={handleTripleClick}
        onDoubleClick={handleTripleClick}
        title="Admin Access"
      />

      {isOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <Card className="w-full max-w-sm bg-gray-900 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Settings className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-bold text-white">Admin Access</h3>
              </div>
              
              <div className="space-y-4">
                <div className="relative">
                  <Input
                    type={showKey ? "text" : "password"}
                    value={secretKey}
                    onChange={(e) => setSecretKey(e.target.value)}
                    placeholder="Enter secret key..."
                    className="bg-gray-800 border-gray-600 text-white pr-10"
                    onKeyPress={(e) => e.key === 'Enter' && handleSecretAccess()}
                  />
                  <button
                    type="button"
                    onClick={() => setShowKey(!showKey)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                
                <div className="flex gap-2">
                  <Button
                    onClick={handleSecretAccess}
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                  >
                    دخول
                  </Button>
                  <Button
                    onClick={() => {
                      setIsOpen(false);
                      setSecretKey('');
                    }}
                    variant="outline"
                    className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-800"
                  >
                    إلغاء
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default SecureAdminAccess;
