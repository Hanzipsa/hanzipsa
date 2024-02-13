import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// 전역에서 관리해야 하는 목록
// 1. userId(일단 빼놓기)
// 2. userState(user || zipsa)

// const useUserInfo = create(set => ({
//   userState: '',
//   isLoggedIn: false,
//   setUserState: state => set({ userState: state }),
//   setIsLoggedIn: state => set({ isLoggedIn: state }),
// }));

const useUserInfo = create(
  persist(
    (set, get) => ({
      userState: '',
      isLoggedIn: false,
      setUserState: state => set({ userState: state }),
      setIsLoggedIn: state => set({ isLoggedIn: state }),
    }),
    {
      name: 'user-storage',
    },
  ),
);

export { useUserInfo };