export const isAuthenticated = () => {
  return typeof window !== 'undefined' && localStorage.getItem('authenticated') === 'true';
};


export const login = (email: string, password: string) => {
  if (email === 'user@example.com' && password === '123') {
    localStorage.setItem('authenticated', 'true');
    return true;
  } else {
    return false;
  }
};


export const logout = () => {
  localStorage.removeItem('authenticated');
};

