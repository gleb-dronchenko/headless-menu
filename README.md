# Headless Menu

Онлайн-демо: [GitHub Pages](https://gleb-dronchenko.github.io/headless-menu/) · [CodeSandbox](https://codesandbox.io/p/github/gleb-dronchenko/headless-menu)

Headless-меню на React: compound-компоненты без собственных стилей. Меню отдаёт поведение и `data-*` атрибуты, внешний вид задаёт приложение.

Демо собрано на React 19, React Router и Tailwind CSS 4.

## Запуск

```bash
npm install
npm start
```

Dev-сервер: [http://localhost:3000](http://localhost:3000).

| Скрипт | Назначение |
| --- | --- |
| `npm start` | разработка |
| `npm run build` | production-сборка |
| `npm run build:pages` | сборка с `PUBLIC_PATH=/headless-menu/` |

## Компоненты

| Компонент | Роль |
| --- | --- |
| `Menu` | Контекст: `isSidebarOpen`, `isMobile`. |
| `Menu.Sidebar` | Контейнер панели. |
| `Menu.ShortLogo` / `Menu.FullLogo` | Логотип для свёрнутого / раскрытого сайдбара. На mobile не рендерятся. |
| `Menu.List` | Список пунктов. |
| `Menu.Item` | Пункт и локальный стейт подменю. |
| `Menu.Trigger` | Кнопка подменю или внешняя ссылка через `asComponent`. |
| `Menu.Label` | Текст пункта; на свёрнутом desktop — tooltip. |
| `Menu.Submenu` | Подменю: `inline`, `flyout` или `sheet`. |
| `Menu.SubItem` | Вложенный пункт. По умолчанию `asComponent="a"`. |
| `Menu.Toggle` | Свернуть / раскрыть сайдбар. На mobile скрыт. |
| `Menu.Overlay` / `Menu.Title` / `Menu.Close` | Слоты mobile-sheet. |
