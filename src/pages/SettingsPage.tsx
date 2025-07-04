import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bell, Trash, HelpCircle, RefreshCw, Moon, Sun } from 'lucide-react';
import { useWeather } from '../context/WeatherContext';
import { requestNotificationPermission, sendNotification } from '../utils/serviceWorker';
import { clearLocalStorage } from '../utils/storage';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

const SettingsPage: React.FC = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState<boolean>(false);
  const [notificationTime, setNotificationTime] = useState<string>('09:00');
  const [resetConfirmOpen, setResetConfirmOpen] = useState<boolean>(false);
  
  const { refreshWeather } = useWeather();
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  useEffect(() => {
    const checkNotificationPermission = async () => {
      if ('Notification' in window) {
        const permission = await Notification.requestPermission();
        setNotificationsEnabled(permission === 'granted');
      }
    };
    checkNotificationPermission();
  }, []);
  
  const handleToggleNotifications = async () => {
    const permission = await requestNotificationPermission();
    setNotificationsEnabled(permission);
    
    if (permission) {
      localStorage.setItem('notification-time', notificationTime);
      // Send a test notification
      await sendNotification(t('settings.notifications.enabled'), {
        body: t('settings.notifications.testMessage'),
        icon: '/pwa-192x192.png'
      });
    }
  };
  
  const handleResetData = () => {
    clearLocalStorage();
    setResetConfirmOpen(false);
    window.location.href = '/';
  };
  
  const handleRefreshWeather = () => {
    refreshWeather();
    alert(t('settings.weather.refreshed'));
  };
  
  return (
    <motion.div 
      className="container mx-auto px-4 py-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className="card mb-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.3 }}
      >
        <h2 className="text-xl font-semibold mb-4">{t('settings.notifications.title')}</h2>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="mr-3 text-blue-500">
              <Bell size={22} />
            </div>
            <div>
              <p className="font-medium">{t('settings.notifications.dailyReminders')}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{t('settings.notifications.description')}</p>
            </div>
          </div>
          
          <button 
            onClick={handleToggleNotifications}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              notificationsEnabled ? 'bg-green-600' : 'bg-gray-200 dark:bg-gray-700'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                notificationsEnabled ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
        
        {notificationsEnabled && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {t('settings.notifications.reminderTime')}
            </label>
            <input 
              type="time" 
              value={notificationTime}
              onChange={(e) => setNotificationTime(e.target.value)}
              className="input"
            />
          </div>
        )}
      </motion.div>

      <motion.div 
        className="card mb-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        <h2 className="text-xl font-semibold mb-4">{t('settings.appearance.title')}</h2>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="mr-3 text-yellow-500">
              {theme === 'dark' ? <Moon size={22} /> : <Sun size={22} />}
            </div>
            <div>
              <p className="font-medium">{t('settings.appearance.darkMode')}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{t('settings.appearance.description')}</p>
            </div>
          </div>
          
          <button 
            onClick={toggleTheme}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              theme === 'dark' ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </motion.div>
      
      <motion.div 
        className="card mb-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.3 }}
      >
        <h2 className="text-xl font-semibold mb-4">{t('settings.weather.title')}</h2>
        
        <button 
          className="flex items-center justify-between w-full py-2"
          onClick={handleRefreshWeather}
        >
          <div className="flex items-center">
            <div className="mr-3 text-blue-500">
              <RefreshCw size={22} />
            </div>
            <div>
              <p className="font-medium">{t('settings.weather.refresh')}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{t('settings.weather.description')}</p>
            </div>
          </div>
        </button>
      </motion.div>
      
      <motion.div 
        className="card mb-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.3 }}
      >
        <h2 className="text-xl font-semibold mb-4">{t('settings.data.title')}</h2>
        
        <button 
          className="flex items-center justify-between w-full py-2 text-red-500"
          onClick={() => setResetConfirmOpen(true)}
        >
          <div className="flex items-center">
            <div className="mr-3">
              <Trash size={22} />
            </div>
            <div>
              <p className="font-medium">{t('settings.data.reset')}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{t('settings.data.description')}</p>
            </div>
          </div>
        </button>
      </motion.div>
      
      <motion.div 
        className="card"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      >
        <h2 className="text-xl font-semibold mb-4">{t('settings.about.title')}</h2>
        
        <div className="flex items-center py-2">
          <div className="mr-3 text-green-500">
            <HelpCircle size={22} />
          </div>
          <div>
            <p className="font-medium">{t('settings.about.appName')}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{t('settings.about.version')} {t('settings.about.versionNumber')}</p>
          </div>
        </div>
      </motion.div>
      
      {/* Reset Confirmation Modal */}
      {resetConfirmOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-sm w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-2 dark:text-white">{t('settings.data.confirmReset')}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {t('settings.data.confirmMessage')}
            </p>
            <div className="flex justify-end space-x-2">
              <button 
                className="btn-outline"
                onClick={() => setResetConfirmOpen(false)}
              >
                {t('common.cancel')}
              </button>
              <button 
                className="btn bg-red-600 text-white hover:bg-red-700"
                onClick={handleResetData}
              >
                {t('settings.data.reset')}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default SettingsPage;