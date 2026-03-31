

## Исправление email-адреса на savanadi@yandex.ru

### Проблема
В двух местах сайта используется заглушка `example@email.com` вместо реального адреса `savanadi@yandex.ru`:
1. **Contact.tsx** (строка 166) — секция контактов
2. **Footer.tsx** (строка 37) — футер сайта

### Решение
Заменить `mailto:example@email.com` на `mailto:savanadi@yandex.ru` в обоих файлах.

### Изменения

**Файл 1: `src/components/Contact.tsx`** (строка 166)
- Было: `{ href: "mailto:example@email.com", icon: Mail, label: "Email" }`
- Станет: `{ href: "mailto:savanadi@yandex.ru", icon: Mail, label: "Email" }`

**Файл 2: `src/components/Footer.tsx`** (строка 37)
- Было: `{ href: "mailto:example@email.com", icon: Mail }`
- Станет: `{ href: "mailto:savanadi@yandex.ru", icon: Mail }`

Два файла, по одной строке в каждом.

