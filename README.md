<div align="center">

# React Native Template Expo

**Production-ready React Native starter with Expo SDK 55, New Architecture, and
TypeScript**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node](https://img.shields.io/badge/Node-24+-339933?logo=node.js&logoColor=white)](https://nodejs.org)
[![pnpm](https://img.shields.io/badge/pnpm-10+-F69220?logo=pnpm&logoColor=white)](https://pnpm.io)
[![Expo](https://img.shields.io/badge/Expo-SDK_55-000020?logo=expo&logoColor=white)](https://expo.dev)
[![React Native](https://img.shields.io/badge/React_Native-0.83-61DAFB?logo=react&logoColor=white)](https://reactnative.dev)

Part of the [@teo-garcia/templates](https://github.com/teo-garcia/templates)
ecosystem

</div>

---

## Features

| Category         | Technologies                                             |
| ---------------- | -------------------------------------------------------- |
| **Framework**    | Expo SDK 55, React Native 0.83, New Architecture only    |
| **Navigation**   | Expo Router v4 with file-based routing                   |
| **UI**           | React 19, NativeWind v5 (Tailwind), Lucide React Native  |
| **Data**         | TanStack Query v5 for server state                       |
| **Type Safety**  | TypeScript strict mode                                   |
| **Testing**      | Jest, jest-expo, Testing Library for React Native        |
| **Code Quality** | ESLint, Prettier, Husky, lint-staged, commitlint         |
| **CI**           | GitHub Actions for lint, typecheck, test, security audit |

---

## Requirements

- Node.js 24+
- pnpm 10+
- Expo CLI
- For iOS: Xcode 16+ (macOS only)
- For Android: Android Studio + JDK 17+

---

## Quick Start

```bash
pnpm install
cp .env.example .env
pnpm dev
```

Press `i` for iOS simulator, `a` for Android emulator, or `w` for web.

---

## Environment Variables

| Variable                   | Description          | Default                 |
| -------------------------- | -------------------- | ----------------------- |
| `EXPO_PUBLIC_API_BASE_URL` | Backend API base URL | `http://localhost:3000` |
| `EXPO_PUBLIC_LOG_LEVEL`    | Log verbosity        | `info`                  |

---

## Scripts

| Command              | Description                                      |
| -------------------- | ------------------------------------------------ |
| `pnpm dev`           | Start Metro bundler                              |
| `pnpm dev:ios`       | Start and open iOS simulator                     |
| `pnpm dev:android`   | Start and open Android emulator                  |
| `pnpm dev:web`       | Start Expo web                                   |
| `pnpm build`         | Export Expo web bundle                           |
| `pnpm build:ios`     | EAS Build for iOS                                |
| `pnpm build:android` | EAS Build for Android                            |
| `pnpm test`          | Run Jest tests                                   |
| `pnpm coverage`      | Run Jest with coverage                           |
| `pnpm check`         | Run full pipeline (lint + types + format + test) |
| `pnpm lint:es`       | Lint and fix with ESLint                         |
| `pnpm lint:ts`       | TypeScript type check                            |
| `pnpm format`        | Format with Prettier                             |

---

## Project Structure

| Path          | Purpose                      |
| ------------- | ---------------------------- |
| `app/`        | Expo Router screens          |
| `components/` | Shared UI components         |
| `features/`   | Feature modules              |
| `lib/`        | API client, hooks, constants |
| `assets/`     | Images and fonts             |

---

## Shared Governance

| Area               | Tooling                                             |
| ------------------ | --------------------------------------------------- |
| Dependency updates | Renovate                                            |
| Issue intake       | GitHub issue templates                              |
| Change review      | Pull request template                               |
| CI                 | GitHub Actions for lint, typecheck, test, and audit |
| Security           | Trivy and `pnpm audit`                              |

---

## Shared Configs

| Package                              | Role                |
| ------------------------------------ | ------------------- |
| `@teo-garcia/eslint-config-shared`   | ESLint rules        |
| `@teo-garcia/prettier-config-shared` | Prettier formatting |
| `@teo-garcia/tsconfig-shared`        | TypeScript settings |

---

## Related Templates

| Template                    | Description             |
| --------------------------- | ----------------------- |
| `react-template-next`       | Next.js SSR template    |
| `react-template-rr`         | React Router + Vite SPA |
| `nest-template-monolith`    | NestJS backend          |
| `fastapi-template-monolith` | FastAPI backend         |

---

## License

MIT

---

<div align="center">
  <sub>Built by <a href="https://github.com/teo-garcia">teo-garcia</a></sub>
</div>
