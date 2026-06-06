// frontend/src/pages/Settings.tsx
/*
 * Settings page
 * Why: Allows users to update preferences (theme, notifications, privacy).
 * What it does: Fetches current settings, presents a form, and saves changes.
 * Dependencies: api service, useAuthStore for user context.
 * Common Mistakes: Forgetting to show success/error feedback.
 */
import React, { useEffect, useState } from 'react';
import api from '../services/api';
import toast from 'react-hot-toast';
import { useAuthStore } from '../store/authStore';

interface UserPreferences {
  theme: 'light' | 'dark';
  emailNotifications: boolean;
  profileVisibility: 'public' | 'private';
}

const Settings: React.FC = () => {
  const user = useAuthStore((s) => s.user);
  const [preferences, setPreferences] = useState<UserPreferences>({
    theme: 'light',
    emailNotifications: true,
    profileVisibility: 'public',
  });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await api.get('/settings');
        if (res.data.preferences) {
          setPreferences(res.data.preferences);
        }
      } catch (err) {
        // use defaults if fetch fails
      }
    };
    fetchSettings();
  }, []);

  const handleSave = async () => {
    try {
      setSaving(true);
      await api.put('/settings', { preferences });
      toast.success('Settings saved');
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Could not save settings');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Settings</h1>

      <div className="bg-white rounded-xl shadow p-6 space-y-8">
        {/* Theme */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Appearance</h2>
          <div className="flex gap-4">
            {(['light', 'dark'] as const).map((theme) => (
              <label
                key={theme}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg border cursor-pointer ${
                  preferences.theme === theme ? 'border-primary bg-primary/5' : 'border-gray-200'
                }`}
              >
                <input
                  type="radio"
                  name="theme"
                  value={theme}
                  checked={preferences.theme === theme}
                  onChange={(e) => setPreferences({ ...preferences, theme: e.target.value as 'light' | 'dark' })}
                  className="sr-only"
                />
                <span className="capitalize">{theme}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Email Notifications */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Notifications</h2>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={preferences.emailNotifications}
              onChange={(e) => setPreferences({ ...preferences, emailNotifications: e.target.checked })}
              className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
            />
            <span>Receive email notifications about new questions and achievements</span>
          </label>
        </div>

        {/* Profile Visibility */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Privacy</h2>
          <select
            value={preferences.profileVisibility}
            onChange={(e) => setPreferences({ ...preferences, profileVisibility: e.target.value as 'public' | 'private' })}
            className="block w-full max-w-xs border border-gray-300 rounded-lg p-2 focus:ring-primary focus:border-primary"
          >
            <option value="public">Public – everyone can see my progress</option>
            <option value="private">Private – only I can see my progress</option>
          </select>
        </div>

        <div className="pt-4 border-t">
          <button
            onClick={handleSave}
            disabled={saving}
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark disabled:opacity-50"
          >
            {saving ? 'Saving...' : 'Save Settings'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;