frontend/
├── public/                        # favicon, robots.txt и т.д.
│   └── index.html
├── src/
│   ├── assets/                    # изображения, иконки
│   ├── components/               # переиспользуемые компоненты (UI, формы)
│   ├── pages/                    # страницы (Login.tsx, Dashboard.tsx и т.п.)
│   ├── services/                 # API, WebSocket, auth
│   ├── hooks/                    # кастомные хуки (useAuth, useDevice)
│   ├── types/                    # общие типы (например, `User`, `Device`)
│   ├── App.tsx                   # маршрутизация, глобальная логика
│   └── main.tsx                  # точка входа
├── .env                          # переменные окружения (VITE_API_URL и др.)
├── tailwind.config.js           # конфигурация Tailwind CSS
├── postcss.config.js            # для Tailwind + autoprefixer
├── vite.config.ts               # прокси и alias
├── tsconfig.json                # TypeScript-конфигурация
├── package.json
└── README.md


pages/
├── Login.tsx
├── Register.tsx
├── Dashboard.tsx
└── ControlPanel.tsx
