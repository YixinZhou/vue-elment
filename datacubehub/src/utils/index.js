import { setting } from '@/config/setting';
const { title } = setting;

export const getPageTitle = (pageTitle) => {
  if (pageTitle) {
    return `${pageTitle}-${title}`;
  }
  return `${title}`;
};

export function localGet (key) {
  const value = window.localStorage.getItem(key)
  try {
    return JSON.parse(window.localStorage.getItem(key))
  } catch (error) {
    return value
  }
}