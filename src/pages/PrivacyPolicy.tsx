import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen relative">
      {/* Semi-transparent overlay for readability */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(180deg, hsl(160 30% 4% / 0.5) 0%, hsl(160 27% 4.5% / 0.6) 50%, hsl(160 30% 4% / 0.5) 100%)',
      }} />

      <div className="container mx-auto max-w-3xl px-6 py-16 relative z-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-accent/70 hover:text-accent transition-colors duration-300 mb-10 font-body text-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          Вернуться на главную
        </Link>

        <h1
          className="font-display text-3xl md:text-4xl font-bold mb-10"
          style={{
            background: 'linear-gradient(135deg, hsl(43 76% 68%), hsl(43 76% 45%))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Политика обработки персональных данных
        </h1>

        <div className="gold-border-card font-body text-sm text-foreground/60 space-y-6 leading-[1.9]">
          <p className="text-foreground/40 text-xs">Дата последнего обновления: 16 марта 2026 г.</p>

          <section>
            <h2 className="font-display text-lg text-accent/80 font-semibold mb-3">1. Общие положения</h2>
            <p>
              Настоящая Политика обработки персональных данных (далее — «Политика») определяет порядок сбора, хранения, передачи и иных видов обработки персональных данных пользователей сайта (далее — «Сайт»), в соответствии с требованиями Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных».
            </p>
            <p className="mt-2">
              Используя Сайт и предоставляя свои персональные данные, Пользователь выражает согласие с условиями настоящей Политики.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-accent/80 font-semibold mb-3">2. Оператор персональных данных</h2>
            <p>
              Оператором персональных данных является владелец настоящего Сайта (далее — «Оператор»).
            </p>
            <p className="mt-2">Контактные данные Оператора:</p>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
              <li>Email: example@email.com</li>
              <li>Telegram: @username</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg text-accent/80 font-semibold mb-3">3. Собираемые персональные данные</h2>
            <p>Оператор может собирать следующие персональные данные Пользователей:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Имя (указанное в форме обратной связи)</li>
              <li>Контактные данные (адрес электронной почты, Telegram, ВКонтакте или иной мессенджер)</li>
              <li>Предпочтения по услугам (выбранная услуга)</li>
              <li>Удобное время для связи</li>
              <li>Текст сообщения или комментария</li>
            </ul>
            <p className="mt-2">
              Оператор не собирает специальные категории персональных данных (расовая принадлежность, политические взгляды, состояние здоровья и др.).
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-accent/80 font-semibold mb-3">4. Цели обработки персональных данных</h2>
            <p>Персональные данные обрабатываются в следующих целях:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Обработка входящих запросов и заявок Пользователя</li>
              <li>Связь с Пользователем для уточнения деталей заявки</li>
              <li>Организация и проведение консультаций</li>
              <li>Улучшение качества обслуживания</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg text-accent/80 font-semibold mb-3">5. Правовые основания обработки</h2>
            <p>Обработка персональных данных осуществляется на следующих правовых основаниях:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Согласие субъекта персональных данных (п. 1 ч. 1 ст. 6 Федерального закона № 152-ФЗ)</li>
              <li>Исполнение договора, стороной которого является субъект персональных данных (п. 5 ч. 1 ст. 6 Федерального закона № 152-ФЗ)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg text-accent/80 font-semibold mb-3">6. Хранение и защита персональных данных</h2>
            <p>
              Оператор принимает необходимые организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий третьих лиц.
            </p>
            <p className="mt-2">
              Персональные данные хранятся не дольше, чем этого требуют цели их обработки, если иное не предусмотрено законодательством Российской Федерации.
            </p>
            <p className="mt-2">
              По достижении целей обработки или в случае утраты необходимости в их достижении персональные данные подлежат уничтожению или обезличиванию.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-accent/80 font-semibold mb-3">7. Передача персональных данных третьим лицам</h2>
            <p>
              Оператор не передаёт персональные данные третьим лицам, за исключением случаев, предусмотренных законодательством Российской Федерации (по запросу уполномоченных государственных органов).
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-accent/80 font-semibold mb-3">8. Права пользователя</h2>
            <p>Пользователь имеет право:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Получать информацию, касающуюся обработки его персональных данных</li>
              <li>Требовать уточнения, блокирования или уничтожения своих персональных данных</li>
              <li>Отозвать согласие на обработку персональных данных, направив соответствующее заявление Оператору</li>
              <li>Обжаловать действия или бездействие Оператора в уполномоченный орган по защите прав субъектов персональных данных (Роскомнадзор)</li>
            </ul>
            <p className="mt-2">
              Для реализации своих прав Пользователь может обратиться к Оператору по контактным данным, указанным в разделе 2 настоящей Политики.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-accent/80 font-semibold mb-3">9. Согласие на обработку персональных данных</h2>
            <p>
              Заполняя формы на Сайте и отмечая соответствующий чекбокс, Пользователь даёт своё добровольное, информированное и осознанное согласие на обработку своих персональных данных в соответствии с настоящей Политикой.
            </p>
            <p className="mt-2">
              Согласие может быть отозвано Пользователем в любой момент путём направления письменного уведомления Оператору на адрес электронной почты, указанный в разделе 2.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-accent/80 font-semibold mb-3">10. Заключительные положения</h2>
            <p>
              Оператор вправе вносить изменения в настоящую Политику. Актуальная редакция Политики размещается на данной странице.
            </p>
            <p className="mt-2">
              Настоящая Политика действует бессрочно до замены её новой редакцией.
            </p>
          </section>
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-accent/70 hover:text-accent transition-colors duration-300 font-body text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Вернуться на главную
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
