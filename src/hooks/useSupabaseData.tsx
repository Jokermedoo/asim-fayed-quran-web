
import { useState, useEffect } from 'react';
import { supabase } from '../integrations/supabase/client';

export interface WebsiteSettings {
  section_name: string;
  content: any;
}

export interface InteractiveContent {
  id: string;
  type: string;
  title: string;
  data: any;
  is_active: boolean;
  order_index: number;
}

export interface DesignSettings {
  category: string;
  settings: any;
}

export const useSupabaseData = () => {
  const [websiteSettings, setWebsiteSettings] = useState<WebsiteSettings[]>([]);
  const [interactiveContent, setInteractiveContent] = useState<InteractiveContent[]>([]);
  const [designSettings, setDesignSettings] = useState<DesignSettings[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      
      const [settingsResult, contentResult, designResult] = await Promise.all([
        supabase.from('website_settings').select('*'),
        supabase.from('interactive_content').select('*').order('order_index'),
        supabase.from('design_settings').select('*')
      ]);

      if (settingsResult.data) setWebsiteSettings(settingsResult.data);
      if (contentResult.data) setInteractiveContent(contentResult.data);
      if (designResult.data) setDesignSettings(designResult.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateWebsiteSettings = async (sectionName: string, content: any) => {
    try {
      const { error } = await supabase
        .from('website_settings')
        .upsert({ section_name: sectionName, content });
      
      if (!error) {
        await fetchData();
        return true;
      }
    } catch (error) {
      console.error('Error updating settings:', error);
    }
    return false;
  };

  const updateInteractiveContent = async (id: string, data: Partial<InteractiveContent>) => {
    try {
      const { error } = await supabase
        .from('interactive_content')
        .update(data)
        .eq('id', id);
      
      if (!error) {
        await fetchData();
        return true;
      }
    } catch (error) {
      console.error('Error updating content:', error);
    }
    return false;
  };

  const addInteractiveContent = async (data: Omit<InteractiveContent, 'id'>) => {
    try {
      const { error } = await supabase
        .from('interactive_content')
        .insert(data);
      
      if (!error) {
        await fetchData();
        return true;
      }
    } catch (error) {
      console.error('Error adding content:', error);
    }
    return false;
  };

  const deleteInteractiveContent = async (id: string) => {
    try {
      const { error } = await supabase
        .from('interactive_content')
        .delete()
        .eq('id', id);
      
      if (!error) {
        await fetchData();
        return true;
      }
    } catch (error) {
      console.error('Error deleting content:', error);
    }
    return false;
  };

  const updateDesignSettings = async (category: string, settings: any) => {
    try {
      const { error } = await supabase
        .from('design_settings')
        .upsert({ category, settings });
      
      if (!error) {
        await fetchData();
        return true;
      }
    } catch (error) {
      console.error('Error updating design:', error);
    }
    return false;
  };

  const logAdminActivity = async (action: string, section?: string, oldData?: any, newData?: any) => {
    try {
      await supabase.from('admin_activity').insert({
        action,
        section,
        old_data: oldData,
        new_data: newData,
        ip_address: 'N/A',
        user_agent: navigator.userAgent
      });
    } catch (error) {
      console.error('Error logging activity:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    websiteSettings,
    interactiveContent,
    designSettings,
    loading,
    updateWebsiteSettings,
    updateInteractiveContent,
    addInteractiveContent,
    deleteInteractiveContent,
    updateDesignSettings,
    logAdminActivity,
    refreshData: fetchData
  };
};
