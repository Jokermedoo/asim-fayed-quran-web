
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Settings } from 'lucide-react';

const AdminAccess = () => {
  const navigate = useNavigate();

  const handleAdminAccess = () => {
    navigate('/admin-login');
  };

  return (
    <div className="fixed top-4 left-4 z-50">
      <Button
        onClick={handleAdminAccess}
        variant="ghost"
        size="sm"
        className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20"
      >
        <Settings className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default AdminAccess;
