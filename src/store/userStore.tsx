import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const KEYS = {
  userId: '@vala/userId',
  userName: '@vala/userName',
  accountNumber: '@vala/accountNumber',
};

export type UserData = {
  userId: string;
  userName: string;
  accountNumber: string;
};

type UserStore = {
  userId: string | null;
  userName: string | null;
  accountNumber: string | null;
  isLoading: boolean;
  setUser: (data: UserData) => Promise<void>;
  clearUser: () => Promise<void>;
};

const UserContext = createContext<UserStore | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
  const [userId, setUserId] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [accountNumber, setAccountNumber] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      AsyncStorage.getItem(KEYS.userId),
      AsyncStorage.getItem(KEYS.userName),
      AsyncStorage.getItem(KEYS.accountNumber),
    ])
      .then(([id, name, account]) => {
        setUserId(id);
        setUserName(name);
        setAccountNumber(account);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const setUser = async (data: UserData) => {
    await AsyncStorage.multiSet([
      [KEYS.userId, data.userId],
      [KEYS.userName, data.userName],
      [KEYS.accountNumber, data.accountNumber],
    ]);
    setUserId(data.userId);
    setUserName(data.userName);
    setAccountNumber(data.accountNumber);
  };

  const clearUser = async () => {
    await AsyncStorage.multiRemove(Object.values(KEYS));
    setUserId(null);
    setUserName(null);
    setAccountNumber(null);
  };

  return (
    <UserContext.Provider value={{ userId, userName, accountNumber, isLoading, setUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within UserProvider');
  return ctx;
}
