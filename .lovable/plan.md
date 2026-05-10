## Цель
Починить мобильную загрузку (белый экран / зависание), сохранив десктопный вид и контент.

## 1. `src/hooks/use-mobile.tsx`
Сделать SSR-безопасным и стабильным:
- Инициализировать состояние через ленивый initializer: `useState(() => typeof window !== 'undefined' && window.innerWidth < 768)`.
- В `useEffect` подписываться на `mql.addEventListener('change', onChange)` и корректно отписываться в cleanup.
- Возвращать `boolean` (без `undefined`), чтобы первый render был детерминирован.

## 2. `src/components/AmbientAtmosphere.tsx`
Сейчас `window.matchMedia(...)` вызывается в render и `return null` идёт ДО хуков `useScroll/useTransform/useMemo` — это нарушает Rules of Hooks и валит мобилу.

Рефакторинг:
- Создать новый файл `src/components/DesktopAmbientAtmosphere.tsx` — туда переезжает вся текущая логика (хуки framer-motion, dust motes, reflections).
- `AmbientAtmosphere.tsx` становится тонким враппером:
  ```tsx
  import { useIsMobile } from "@/hooks/use-mobile";
  import DesktopAmbientAtmosphere from "./DesktopAmbientAtmosphere";
  const AmbientAtmosphere = () => {
    const isMobile = useIsMobile();
    if (isMobile) return null;
    return <DesktopAmbientAtmosphere />;
  };
  ```
- Никаких условных хуков, никаких `window.*` в render.

## 3. `src/index.css`
- Заменить `background-attachment: fixed` на адаптивное поведение. Добавить в конец файла:
  ```css
  @media (max-width: 768px) {
    body { background-attachment: scroll; }
    html, body, #root { overflow-x: hidden; }
  }
  ```
  (`background-attachment: fixed` в основной декларации остаётся для десктопа.)

## 4. Тяжёлые декоративные слои на мобильных
Чтобы не трогать структуру компонентов, отключаем монтирование на mobile через `useIsMobile()` в самих компонентах (early-return после хука):
- `GoldParticles.tsx` — `if (isMobile) return null;` после `useState/useEffect` (или сократить count).
- `MagicalDust.tsx` — то же (после `useMemo`).
- `ParallaxLayer.tsx` — на mobile рендерить детей без transform/parallax обвязки (хук `useParallax` всё равно вызываем, чтобы соблюсти Rules of Hooks; просто не применяем `translateY`).
- `AmbientAtmosphere` уже отключается через враппер (см. п.2).

Тексты, разметка и десктопный вид не меняются.

## 5. Lock-файлы
В проекте сосуществуют `bun.lock` и `package-lock.json`. Стандарт Lovable — Bun.
- Удалить `package-lock.json`, оставить `bun.lock`.
- Убедиться, что `package.json` не содержит конфликтов; ничего в нём не менять.

## 6. Проверка
- Запустить сборку (автоматически харнессом).
- Открыть preview на 375px и 430px, проверить `/` и `/privacy-policy` через browser tools: нет белого экрана, контент рендерится, прокрутка работает, нет `overflow-x`.
- Снять console errors.

## 7. Итоговый отчёт
В финальном сообщении список изменённых/созданных файлов:
- `src/hooks/use-mobile.tsx` — безопасная инициализация
- `src/components/AmbientAtmosphere.tsx` — тонкий враппер
- `src/components/DesktopAmbientAtmosphere.tsx` — новый, вся анимация
- `src/components/GoldParticles.tsx` — skip на mobile
- `src/components/MagicalDust.tsx` — skip на mobile
- `src/components/ParallaxLayer.tsx` — без parallax на mobile
- `src/index.css` — mobile media rule
- удалён `package-lock.json`

## Технические детали
- Никаких изменений бизнес-логики, текстов, секций, маршрутов.
- Все early-returns ставятся ПОСЛЕ всех хуков, чтобы не сломать Rules of Hooks.
- `useIsMobile` возвращает `false` на первом render — это безопасно для SSR/гидратации и совпадает с десктопным дефолтом.
