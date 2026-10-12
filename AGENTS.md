# AGENTS.md

## La app es `frontend/`
- Todo el código vive en `frontend/`. Ejecutar los comandos desde ahí.
- La raíz sólo conserva `vercel.json`, `README.md`, `AGENTS.md` y `.gitignore`; la copia vieja (`src/`, `index.html`, `package.json`, `public/`) fue eliminada. No recrearla.

## Comandos (package manager: pnpm)
- Instalar: `pnpm install` (usar `frontend/pnpm-lock.yaml`; NO usar npm ni generar `package-lock.json`).
- Dev: `pnpm dev` · Build: `pnpm build` · Preview: `pnpm preview` · Lint: `pnpm lint`
- No hay tests ni typecheck.

## Entorno (Firebase)
- Requiere `frontend/.env` (ignorado por git, no commiteado) con: `VITE_API_KEY`, `VITE_AUTH_DOMAIN`, `VITE_PROJECT_ID`, `VITE_STORAGE_BUCKET`, `VITE_MESSAGING_SENDER_ID`, `VITE_APP_ID`.
- Sin ese archivo, Firebase queda `undefined` y la app arranca rota. En Vercel las mismas claves deben estar como Environment Variables.
- No tocar `frontend/src/firebase/config.js` sin motivo: Auth y Firestore están en uso.

## Deploy Vercel = Linux (case-sensitive)
- Los imports deben coincidir EXACTO con mayúsculas del disco: en Windows funciona, en Vercel falla el build. Ya corregidos: `Navbar` (era `navbar`), `Contact/Formik` (era `formik`), `img/GymFuncional.png` (era `gymFuncional.png`). Mantener ese criterio al crear archivos/imports nuevos.
- El `vercel.json` de la raíz compila `frontend/` (`cd frontend && pnpm build`, salida `frontend/dist`) y reescribe todo a `/index.html` (SPA).

## Stack
React 19 + Vite 8 (`@vitejs/plugin-react`, Oxc), React Router 7, Redux Toolkit + react-redux + redux-persist (persiste `cart` y `user`, clave `root`), Firebase (Auth + Firestore), styled-components, Formik + Yup, react-toastify, react-icons.

## Gotchas
- `src/redux/store.js`: usa `storage: storage.default` de `redux-persist/lib/storage`.
- Hay `console.log`/`console.error` de debug dispersos en pages (Login, Orders, CompleteOrderForm).
- Imágenes referenciadas que git reporta borradas rompen el build; recuperar con `git restore`.
