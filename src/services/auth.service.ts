// services/auth.service.ts
// Servicio que simula llamadas a una API de autenticación usando localStorage

import type { User, LoginCredentials, SignupData, UserRole } from '../types/auth';

const USER_STORAGE_KEY = 'streaming_user';

/**
 * Cuentas de prueba pre-configuradas
 */
const DEMO_ACCOUNTS = [
  {
    email: 'espectador@gmail.com',
    password: 'espectador123',
    name: 'Usuario Espectador',
    role: 'viewer' as UserRole,
    level: 5,
    points: 820,
    coins: 150,
  },
  {
    email: 'creador@gmail.com',
    password: 'creador123',
    name: 'Usuario Creador',
    role: 'streamer' as UserRole,
  },
];

/**
 * Determina el rol del usuario basado en su email (simulación)
 * En producción, el rol vendría del servidor
 */
const determineUserRole = (email: string): UserRole => {
  const lowerEmail = email.toLowerCase();
  // Si el email contiene "streamer", asignar rol streamer
  if (lowerEmail.includes('streamer')) {
    return 'streamer';
  }
  // Por defecto, todos son viewers (espectadores)
  return 'viewer';
};

/**
 * Genera datos iniciales para viewers (RF009, RF010)
 */
const generateViewerData = () => {
  return {
    level: 5,       // Nivel inicial simulado
    points: 820,    // Puntos iniciales simulados
    coins: 150,     // Saldo inicial de monedas (RF009)
  };
};

/**
 * Simula un delay de red (como si fuera una llamada HTTP)
 */
const simulateNetworkDelay = (): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, 800));
};

/**
 * Simula el login de un usuario
 * En producción, esto haría una petición POST a /api/login
 */
export const loginUser = async (credentials: LoginCredentials): Promise<User> => {
  await simulateNetworkDelay();
  
  // Validación básica simulada
  if (!credentials.email || !credentials.password) {
    throw new Error('Email y contraseña son requeridos');
  }
  
  if (!credentials.email.includes('@')) {
    throw new Error('Email inválido');
  }
  
  if (credentials.password.length < 6) {
    throw new Error('La contraseña debe tener al menos 6 caracteres');
  }
  
  // Verificar si es una cuenta de prueba
  const demoAccount = DEMO_ACCOUNTS.find(
    acc => acc.email.toLowerCase() === credentials.email.toLowerCase() && 
           acc.password === credentials.password
  );
  
  if (demoAccount) {
    // Usar los datos de la cuenta de prueba
    const user: User = {
      id: Math.random().toString(36).substr(2, 9),
      name: demoAccount.name,
      email: demoAccount.email,
      role: demoAccount.role,
      // Añadir datos de viewer si corresponde
      ...(demoAccount.role === 'viewer' ? {
        level: demoAccount.level,
        points: demoAccount.points,
        coins: demoAccount.coins,
      } : {}),
    };
    
    // Guardar en localStorage
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
    return user;
  }
  
  // Si no es una cuenta de prueba, continuar con el flujo normal
  // Determinar rol del usuario
  const role = determineUserRole(credentials.email);
  
  // Simular respuesta exitosa del servidor
  const user: User = {
    id: Math.random().toString(36).substr(2, 9),
    name: credentials.email.split('@')[0],
    email: credentials.email,
    role: role,
    // Añadir datos de viewer si corresponde (RF010)
    ...(role === 'viewer' ? generateViewerData() : {}),
  };
  
  // Guardar en localStorage (simula guardar token JWT)
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
  
  return user;
};

/**
 * Simula el registro de un nuevo usuario
 * En producción, esto haría una petición POST a /api/signup
 */
export const signupUser = async (data: SignupData): Promise<User> => {
  await simulateNetworkDelay();
  
  // Validaciones básicas
  if (!data.name || !data.email || !data.password) {
    throw new Error('Todos los campos son requeridos');
  }
  
  if (!data.email.includes('@')) {
    throw new Error('Email inválido');
  }
  
  if (data.password.length < 6) {
    throw new Error('La contraseña debe tener al menos 6 caracteres');
  }
  
  if (data.name.length < 3) {
    throw new Error('El nombre debe tener al menos 3 caracteres');
  }
  
  // Determinar rol del usuario
  const role = determineUserRole(data.email);
  
  // Simular respuesta exitosa del servidor
  const user: User = {
    id: Math.random().toString(36).substr(2, 9),
    name: data.name,
    email: data.email,
    role: role,
    // Añadir datos de viewer si corresponde (RF010)
    ...(role === 'viewer' ? generateViewerData() : {}),
  };
  
  // Guardar en localStorage
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
  
  return user;
};

/**
 * Cierra la sesión del usuario
 * En producción, podría invalidar el token en el servidor
 */
export const logoutUser = (): void => {
  localStorage.removeItem(USER_STORAGE_KEY);
};

/**
 * Obtiene el usuario actual desde localStorage
 * En producción, validaría un JWT y obtendría datos del servidor
 */
export const getCurrentUser = (): User | null => {
  const userJson = localStorage.getItem(USER_STORAGE_KEY);
  
  if (!userJson) {
    return null;
  }
  
  try {
    return JSON.parse(userJson) as User;
  } catch (error) {
    console.error('Error parsing user data:', error);
    localStorage.removeItem(USER_STORAGE_KEY);
    return null;
  }
};
