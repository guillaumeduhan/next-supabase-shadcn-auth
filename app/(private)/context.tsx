'use client';
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

  if (loading) return <p>Loading...</p>

  if (!user) return <div>404 or redirect</div>

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