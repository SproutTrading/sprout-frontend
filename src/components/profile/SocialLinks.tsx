import React, { useEffect, useState } from 'react';
import { MessagesSquare } from 'lucide-react';
import { API_URL, axiosHttp } from '../../lib/axios';

interface SocialLink {
  platform: string;
  username: string;
}

const PLATFORM_STYLES = {
  twitter: {
    bg: 'bg-sky-50',
    border: 'border-sky-200',
    text: 'text-sky-600',
    hover: 'hover:border-sky-300'
  },
  telegram: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-600',
    hover: 'hover:border-blue-300'
  },
  discord: {
    bg: 'bg-indigo-50',
    border: 'border-indigo-200',
    text: 'text-indigo-600',
    hover: 'hover:border-indigo-300'
  },
  github: {
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    text: 'text-orange-600',
    hover: 'hover:border-orange-300'
  }
};

const SocialLinks: React.FC = () => {
  const [links, setLinks] = useState<SocialLink[]>([]);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    twitter: '',
    telegram: '',
    discord: '',
    github: ''
  });

  const handleSave = () => {
    const save = async () => {
      let { data: { ok, data: response } } = await axiosHttp.post(`${API_URL}/users/self/socials`, form);
      if (ok) {
        await getSocials();
        setEditing(false);
      }
    }

    save();
  };

  const getSocials = async () => {
    let { data: { ok, data: response } } = await axiosHttp.get(`${API_URL}/users/self/socials`);
    if (ok) {
      setForm({
        twitter: response.twitter,
        telegram: response.telegram,
        discord: response.discord,
        github: response.github
      });

      const newLinks = [];
      if (response.twitter) newLinks.push({ platform: 'twitter', username: response.twitter });
      if (response.telegram) newLinks.push({ platform: 'telegram', username: response.telegram });
      if (response.discord) newLinks.push({ platform: 'discord', username: response.discord });
      if (response.github) newLinks.push({ platform: 'github', username: response.github });
      setLinks(newLinks);
    }
  }

  useEffect(() => {
    getSocials();
  }, []);

  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold text-emerald-800 flex items-center gap-2">
        <MessagesSquare size={20} />
        Social Links
      </h2>

      {editing ? (
        <div className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className={`p-3 rounded-lg border transition-colors ${PLATFORM_STYLES.twitter.bg} ${PLATFORM_STYLES.twitter.border} ${PLATFORM_STYLES.twitter.hover}`}>
              <label className={`block text-sm font-medium mb-2 ${PLATFORM_STYLES.twitter.text}`}>
                Twitter
              </label>
              <input
                type="text"
                value={form.twitter}
                onChange={(e) => setForm(prev => ({ ...prev, twitter: e.target.value }))}
                placeholder="@username"
                className="w-full px-3 py-1.5 bg-white border border-sky-200 rounded-md text-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
              />
            </div>

            <div className={`p-3 rounded-lg border transition-colors ${PLATFORM_STYLES.telegram.bg} ${PLATFORM_STYLES.telegram.border} ${PLATFORM_STYLES.telegram.hover}`}>
              <label className={`block text-sm font-medium mb-2 ${PLATFORM_STYLES.telegram.text}`}>
                Telegram
              </label>
              <input
                type="text"
                value={form.telegram}
                onChange={(e) => setForm(prev => ({ ...prev, telegram: e.target.value }))}
                placeholder="@username"
                className="w-full px-3 py-1.5 bg-white border border-blue-200 rounded-md text-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>

            <div className={`p-3 rounded-lg border transition-colors ${PLATFORM_STYLES.discord.bg} ${PLATFORM_STYLES.discord.border} ${PLATFORM_STYLES.discord.hover}`}>
              <label className={`block text-sm font-medium mb-2 ${PLATFORM_STYLES.discord.text}`}>
                Discord
              </label>
              <input
                type="text"
                value={form.discord}
                onChange={(e) => setForm(prev => ({ ...prev, discord: e.target.value }))}
                placeholder="username#0000"
                className="w-full px-3 py-1.5 bg-white border border-indigo-200 rounded-md text-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            <div className={`p-3 rounded-lg border transition-colors ${PLATFORM_STYLES.github.bg} ${PLATFORM_STYLES.github.border} ${PLATFORM_STYLES.github.hover}`}>
              <label className={`block text-sm font-medium mb-2 ${PLATFORM_STYLES.github.text}`}>
                GitHub
              </label>
              <input
                type="text"
                value={form.github}
                onChange={(e) => setForm(prev => ({ ...prev, github: e.target.value }))}
                placeholder="username"
                className="w-full px-3 py-1.5 bg-white border border-orange-200 rounded-md text-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
              />
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors text-sm"
            >
              Save Changes
            </button>
            <button
              onClick={() => setEditing(false)}
              className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          {links.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {links.map((link, index) => {
                const styles = PLATFORM_STYLES[link.platform as keyof typeof PLATFORM_STYLES];
                return (
                  <div key={index} className={`p-3 rounded-lg border transition-colors ${styles.bg} ${styles.border} ${styles.hover}`}>
                    <div className={`text-sm font-medium ${styles.text}`}>
                      {link.platform.charAt(0).toUpperCase() + link.platform.slice(1)}
                    </div>
                    <div className="text-gray-900">@{link.username}</div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-sm text-emerald-600">No social links added yet</div>
          )}

          <button
            onClick={() => setEditing(true)}
            className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors text-sm"
          >
            {links.length > 0 ? 'Edit Social Links' : 'Add Social Links'}
          </button>
        </div>
      )}
    </div>
  );
};

export default SocialLinks;