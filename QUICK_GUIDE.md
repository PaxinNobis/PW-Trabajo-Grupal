# 🚀 Guía Rápida - RF006, RF008, RF010

## ⚡ Resumen de Implementación

| Requerimiento | Descripción | Ruta | Acceso |
|---------------|-------------|------|--------|
| **RF006** | Página de inicio con enlaces | `/` | Público |
| **RF008** | Términos y Condiciones | `/terms` | Público |
| **RF010** | Perfil con nivel/puntos | `/profile` | Solo autenticados |

---

## 🎯 RF006 - Página de Inicio

### ¿Qué se implementó?
- ✅ Hero con título "StreamPlatform"
- ✅ Botones "Iniciar Sesión" y "Registrarse"
- ✅ Card con enlaces a "Nosotros" y "Términos"
- ✅ Mensaje de bienvenida si está autenticado

### Ubicación
`src/pages/Home.tsx`

### Cómo probar
```
1. Visitar http://localhost:5173
2. Ver título "StreamPlatform"
3. Ver botones de login/registro
4. Ver enlaces a Nosotros y Términos
5. Hacer clic en cada enlace
```

---

## 📄 RF008 - Términos y Condiciones

### ¿Qué se implementó?
- ✅ Página completa de términos
- ✅ Imagen ilustrativa
- ✅ 8 secciones de contenido
- ✅ Botón "Regresar" con `useNavigate(-1)`

### Ubicación
`src/pages/Terms.tsx`

### Cómo probar
```
1. Ir a http://localhost:5173/terms
2. Ver imagen de header
3. Leer secciones de términos
4. Hacer clic en "Regresar"
5. Verificar que vuelve a la página anterior
```

---

## 👁️ RF010 - Perfil de Espectador

### ¿Qué se implementó?
- ✅ Badge con rol del usuario
- ✅ Sección "Estadísticas de Espectador" (solo viewers)
- ✅ Nivel: 5
- ✅ Puntos: 820
- ✅ Progress bar de progreso

### Ubicación
`src/pages/Profile.tsx`

### Cómo probar

#### Caso 1: Viewer (Espectador)
```
1. Registrarse con: viewer@test.com / 123456
2. Ir a /profile
3. ✅ Ver badge "👁️ Espectador"
4. ✅ Ver sección "Estadísticas de Espectador"
5. ✅ Ver Nivel: 5
6. ✅ Ver Puntos: 820
7. ✅ Ver progress bar (65%)
```

#### Caso 2: Streamer
```
1. Cerrar sesión
2. Registrarse con: streamer@test.com / 123456
3. Ir a /profile
4. ✅ Ver badge "📺 Streamer"
5. ✅ NO ver sección de estadísticas
6. ✅ Solo información básica
```

---

## 🔐 Sistema de Roles

### Regla Simple
```
Email contiene "streamer" → Rol: streamer
Cualquier otro email       → Rol: viewer
```

### Ejemplos
```
✅ viewer@test.com         → viewer
✅ streamer@test.com       → streamer
✅ john@example.com        → viewer (default)
✅ alice.streamer@xyz.com  → streamer
```

---

## 🗺️ Rutas Disponibles

```
/              → Home (con enlaces)
/about         → Nosotros
/terms         → Términos y Condiciones
/login         → Login
/signup        → Registro
/profile       → Perfil (con nivel/puntos si viewer)
/explore       → Explorar streams
```

---

## 📦 Archivos Modificados

### Tipos
- `src/types/auth.ts` - Añadido `UserRole`, `level`, `points`

### Servicios
- `src/services/auth.service.ts` - Lógica de roles y datos de viewer

### Páginas
- `src/pages/Home.tsx` - Hero con enlaces (RF006)
- `src/pages/Terms.tsx` - Nueva página (RF008)
- `src/pages/Profile.tsx` - Estadísticas de viewer (RF010)

### Componentes
- `src/components/Navbar.tsx` - Enlaces a Nosotros y Términos

### Rutas
- `src/routes/AppRouter.tsx` - Rutas `/about` y `/terms`

---

## 🧪 Tests Rápidos

### Test 1: Home (30 segundos)
```bash
1. Abrir http://localhost:5173
2. ✅ Ver título "StreamPlatform"
3. ✅ Ver botones de login/registro
4. ✅ Ver enlaces a Nosotros y Términos
```

### Test 2: Términos (30 segundos)
```bash
1. Clic en "Términos"
2. ✅ Ver imagen y contenido
3. ✅ Clic en "Regresar"
4. ✅ Vuelve a Home
```

### Test 3: Perfil Viewer (1 minuto)
```bash
1. Registrarse: viewer@test.com / 123456
2. Ir a Perfil
3. ✅ Ver nivel 5 y puntos 820
4. ✅ Ver progress bar
```

### Test 4: Perfil Streamer (1 minuto)
```bash
1. Registrarse: streamer@test.com / 123456
2. Ir a Perfil
3. ✅ NO ver estadísticas de espectador
4. ✅ Solo ver info básica
```

---

## 💾 Datos Simulados

### Viewer
```json
{
  "id": "abc123",
  "name": "Test Viewer",
  "email": "viewer@test.com",
  "role": "viewer",
  "level": 5,
  "points": 820
}
```

### Streamer
```json
{
  "id": "xyz789",
  "name": "Test Streamer",
  "email": "streamer@test.com",
  "role": "streamer"
}
```

---

## ✅ Checklist de Validación

### RF006
- [ ] Título "StreamPlatform" visible
- [ ] Botón "Iniciar Sesión" funcional
- [ ] Botón "Registrarse" funcional
- [ ] Enlace "Nosotros" funcional
- [ ] Enlace "Términos" funcional

### RF008
- [ ] Página /terms accesible
- [ ] Imagen ilustrativa presente
- [ ] 8 secciones de contenido
- [ ] Botón "Regresar" funcional

### RF010
- [ ] Rol visible en perfil
- [ ] Nivel 5 mostrado (viewers)
- [ ] Puntos 820 mostrados (viewers)
- [ ] Progress bar visible (viewers)
- [ ] NO mostrado para streamers

---

## 🐛 Solución de Problemas

### No veo las estadísticas en el perfil
**Solución**: Verifica que te registraste con un email que NO contenga "streamer"

### El botón Regresar no funciona
**Solución**: Asegúrate de haber llegado a /terms desde otra página

### No aparecen los enlaces en Home
**Solución**: Recarga la página y verifica que no hay errores en consola

---

## 🚀 Cómo Ejecutar

```bash
# Instalar dependencias
npm install

# Iniciar desarrollo
npm run dev

# Abrir navegador
http://localhost:5173
```

---

## 📝 Notas Importantes

### Roles
- Por defecto, todos son **viewers**
- Solo si el email contiene "streamer" → **streamer**

### Persistencia
- Los datos se guardan en `localStorage`
- Persisten al recargar la página
- Se borran al cerrar sesión

### Producción
- En producción, roles desde backend
- Nivel y puntos desde base de datos
- Sistema de recompensas real

---

## ✅ Estado

```
✅ RF006 - Implementado y funcional
✅ RF008 - Implementado y funcional
✅ RF010 - Implementado y funcional
✅ Sin errores TypeScript
✅ Arquitectura modular
✅ Buenas prácticas aplicadas
```

---

**Versión**: 1.0.0  
**Fecha**: 12 de octubre de 2025  
**Estado**: ✅ Completado
