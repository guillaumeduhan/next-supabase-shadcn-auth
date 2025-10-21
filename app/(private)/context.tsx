'use client';

import Loading from '@/components/Loading';
import { supabase } from '@/lib/supabase/client';
import type { User } from '@supabase/supabase-js';
import { redirect } from 'next/navigation';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { toast } from 'sonner';

interface AppContextType {
  user: User | null;
  saveUser: (data: Partial<User['user_metadata']> & { email?: string }) => Promise<void>;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

function AppWrapper({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const saveUser = async (data: Partial<User['user_metadata']> & { email?: string }) => {
    if (!user) return;

    try {
      const { display_name, position, email, image_url } = data;

      const { error } = await supabase.auth.updateUser({
        email,
        data: { display_name, position, email, image_url },
      });

      if (error) throw error;

      setUser({
        ...user,
        email: email ?? user.email,
        user_metadata: { display_name, position, email },
      });

      toast.success('Profile saved successfully!');
    } catch {
      toast.error('Sorry, something wrong happened. Please try again.');
    }
  };

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase.auth.getUser();

        if (error) throw error;

        if (data?.user) setUser(data.user);
      } catch {
        toast.error('Sorry, something wrong happened. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentUser();
  }, []);

  if (loading) return <div className="min-h-screen w-full flex items-center justify-center">
    <Loading />
  </div>;

  if (!user) redirect('/auth/login');

  return (
    <AppContext.Provider
      value={{
        user,
        saveUser,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppWrapper');
  }
  return context;
}

export default AppWrapper;
