// types/auth.ts
// Define los tipos relacionados con autenticación

/**
 * Roles disponibles en la plataforma
 */
export type UserRole = 'viewer' | 'streamer';

/**
 * Interfaz para el usuario autenticado
 */
export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  // Datos específicos para viewers (RF010)
  level?: number;      // Nivel del espectador
  points?: number;     // Puntos acumulados
}

/**
 * Datos necesarios para iniciar sesión
 */
export interface LoginCredentials {
  email: string;
  password: string;
}

/**
 * Datos necesarios para registrarse
 */
export interface SignupData {
  name: string;
  email: string;
  password: string;
}

/**
 * Contexto de autenticación - estado y métodos disponibles
 */
export interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  signup: (data: SignupData) => Promise<void>;
  logout: () => void;
}
