'use client';
import { LoginForm } from '@/components/login-form';
/* eslint-disable  @typescript-eslint/no-explicit-any */

import { supabase } from '@/lib/supabase/client';
import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'sonner';

const AppContext = createContext<any>(undefined);

function AppWrapper({ children }: {
  children: React.ReactNode
}) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const saveUser = async (d: any) => {
    if (!user) return;

    try {
      const { display_name, position, email, image_url } = d
      const { error } = await supabase.auth.updateUser({
        email,
        data: {
          display_name, position, email, image_url
        }
      })
      setUser({
        ...user,
        email,
        user_metadata: {
          display_name, position, email
        }
      })
      return toast.success('Profile saved successfully!');
    } catch (error) {
      toast.error('Sorry, something wrong happened. Please try again.');
      throw error;
    }
  };

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        setLoading(true);
        const { data } = await supabase.auth.getUser()
        if (data && data.user) {
          setUser(data.user)
        };
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentUser();
  }, []);

  if (loading) return <div className='h-screen w-full flex items-center justify-center'>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path strokeDasharray="16" strokeDashoffset="16" d="M12 3c4.97 0 9 4.03 9 9"><animate fill="freeze" attributeName="strokeDashoffset" dur="0.3s" values="16;0" /><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" /></path><path strokeDasharray="64" strokeDashoffset="64" strokeOpacity=".3" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"><animate fill="freeze" attributeName="strokeDashoffset" dur="1.2s" values="64;0" /></path></g></svg>
  </div>

  if (!user) return <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
    <div className="w-full max-w-sm">
      <LoginForm />
    </div>
  </div>

  return (
    <AppContext.Provider value={{
      user,
      saveUser,
      setUser
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

export default AppWrapper;