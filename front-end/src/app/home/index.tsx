"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from '../autenticacao/auth'; 

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    console.log('Checking authentication status');
    
    if (!isAuthenticated()) {
      console.log('Redirecting to /');
      router.push('/front-end/src/app/page.tsx'); 
    } else {  
      console.log('User authenticated');
    }
  }, [router]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">Bem Vindo!</h1>
    </main>
  );
}
