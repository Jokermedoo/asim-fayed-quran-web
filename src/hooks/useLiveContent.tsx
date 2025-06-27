
import { useState, useEffect } from 'react';
import { contentApi } from '../services/contentApi';
import { WebsiteContent } from './useContentManager';

export const useLiveContent = () => {
  const [content, setContent] = useState<WebsiteContent>(() => contentApi.getContent());

  useEffect(() => {
    // Subscribe to content changes
    const unsubscribe = contentApi.subscribe((newContent) => {
      setContent(newContent);
      
      // Apply color changes immediately to CSS variables
      if (newContent.colors) {
        const root = document.documentElement;
        root.style.setProperty('--primary-color', newContent.colors.primary);
        root.style.setProperty('--secondary-color', newContent.colors.secondary);
        root.style.setProperty('--accent-color', newContent.colors.accent);
      }
    });

    return unsubscribe;
  }, []);

  const updateContent = (updates: Partial<WebsiteContent>) => {
    contentApi.updateContent(updates);
  };

  const resetContent = () => {
    contentApi.resetContent();
  };

  const exportContent = () => {
    contentApi.exportContent();
  };

  const importContent = async (file: File) => {
    try {
      await contentApi.importContent(file);
    } catch (error) {
      console.error('Error importing content:', error);
      throw error;
    }
  };

  return {
    content,
    updateContent,
    resetContent,
    exportContent,
    importContent
  };
};
