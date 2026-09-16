import React, { createContext, useContext, useState, useEffect } from 'react';

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar: string;
  userType: 'superadmin' | 'employee';
  employeeId?: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: AuthUser | null;
  login: (email: string, pass: string) => Promise<{ success: boolean; message?: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const SUPERADMIN_EMAILS = ['ruthram667@gmail.com', 'jyrukaofficial@gmail.com'];
const SUPERADMIN_PASS = 'jyruka14';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('jyruka_auth');
      return saved === 'true';
    } catch {
      return false;
    }
  });

  const [user, setUser] = useState<AuthUser | null>(() => {
    try {
      const savedUser = localStorage.getItem('jyruka_active_user');
      if (savedUser) return JSON.parse(savedUser);
    } catch {
      return null;
    }
    return null;
  });

  const login = async (email: string, pass: string): Promise<{ success: boolean; message?: string }> => {
    // Artificial small delay for polished UI transition
    await new Promise((resolve) => setTimeout(resolve, 500));

    const cleanEmail = email.trim().toLowerCase();
    const cleanPass = pass.trim();

    // Only SuperAdmin credentials are authorized
    if (SUPERADMIN_EMAILS.includes(cleanEmail) && cleanPass === SUPERADMIN_PASS) {
      const superAdminUser: AuthUser = {
        id: 'superadmin-ruthramoorthy',
        name: 'Ruthramoorthy',
        email: cleanEmail,
        role: 'Founder & SuperAdmin',
        avatar: '/ruthram-profile.png',
        userType: 'superadmin'
      };

      setIsAuthenticated(true);
      setUser(superAdminUser);

      try {
        localStorage.setItem('jyruka_auth', 'true');
        localStorage.setItem('jyruka_active_user', JSON.stringify(superAdminUser));
      } catch (e) {
        console.warn('Storage error', e);
      }

      return { success: true };
    }

    return {
      success: false,
      message: 'Access restricted. Only authorized SuperAdmin credentials may log in.'
    };
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    try {
      localStorage.removeItem('jyruka_auth');
      localStorage.removeItem('jyruka_active_user');
    } catch (e) {
      console.warn('Storage error', e);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
