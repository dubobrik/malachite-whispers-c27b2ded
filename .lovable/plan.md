

## Исправление ссылки на MAX в секции контактов

### Проблема
В `Contact.tsx` (строка 164) ссылка на мессенджер MAX ведёт просто на `https://max.ru/` — главную страницу, а не на профиль. В футере ссылка уже правильная.

### Решение
Заменить URL в `src/components/Contact.tsx` строка 164:

**Было:** `https://max.ru/`
**Станет:** `https://max.ru/u/f9LHodD0cOIvw1SL3l9vsB6En_NUgqpTd47pYeudOCQ9CnOibygsbVoY9dM`

Одно изменение, один файл.

