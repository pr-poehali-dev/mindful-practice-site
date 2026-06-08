import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/62ac1cd6-e068-4fbb-ae36-35e6abc26e43/bucket/2f0b83a2-070c-4389-8a93-7525d20292c9.jpg";
const BANYA_IMG = "https://cdn.poehali.dev/projects/62ac1cd6-e068-4fbb-ae36-35e6abc26e43/files/8cd018f6-1bb1-4df7-80f4-32a97e2d27dd.jpg";

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function FadeSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useFadeIn();
  return (
    <div ref={ref} className={`section-fade ${className}`}>
      {children}
    </div>
  );
}

const NAV_LINKS = [
  { label: "Обо мне", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Как работаем", href: "#process" },
  { label: "Отзывы", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contacts" },
];

const SERVICES = [
  {
    icon: "🌬️",
    title: "Индивидуальная онлайн-сессия",
    duration: "45–60 мин",
    desc: "Дыхание, свет, работа с частями. Мягкое сопровождение в восстановлении внутреннего ресурса в удобное для вас время.",
    perks: ["Персональный подход", "Работа с напряжением", "Поддержка 3 дня после"],
    price: "Уточняйте",
    color: "#EEE8D8",
  },
  {
    icon: "🌙",
    title: "Групповая практика «Вечер расслабления»",
    duration: "онлайн / оффлайн",
    desc: "Совместное пространство для замедления. Телесные техники, дыхание, тишина — без оценок и ожиданий.",
    perks: ["Групповая поддержка", "Телесные техники", "Домашняя практика в подарок"],
    price: "Уточняйте",
    color: "#E8EDE5",
  },
  {
    icon: "🌿",
    title: "Банные программы",
    duration: "2–3 часа",
    desc: "Банные ритуалы с вениками из кавказского дуба. Телесное снятие напряжения через тепло, пар и природные ароматы.",
    perks: ["Веники кавказского дуба", "Авторские ритуалы", "Работа с телесным напряжением"],
    price: "Уточняйте",
    color: "#EDE0DC",
  },
  {
    icon: "🎧",
    title: "Цифровые продукты",
    duration: "в любое время",
    desc: "Аудио-практики и гайды для самостоятельной работы. Скачайте и возвращайтесь к практике когда удобно.",
    perks: ["Аудио-практики", "Гайды и инструкции", "Бессрочный доступ"],
    price: "от 500 ₽",
    color: "#F0EDE5",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Заявка",
    desc: "Вы оставляете заявку и заполняете короткую анкету. Подписываете согласие на обработку данных.",
  },
  {
    num: "02",
    title: "Знакомство",
    desc: "Бесплатная 15-минутная встреча. Рассказываете о себе, пробуете мини-практику. Никаких обязательств.",
  },
  {
    num: "03",
    title: "Сессия",
    desc: "Дыхание, свет, телесные техники. Вы всегда в контроле и можете остановиться в любой момент.",
  },
  {
    num: "04",
    title: "Интеграция",
    desc: "Рекомендации и поддержка в течение 3 дней. Вы возвращаетесь к привычной жизни с новым ресурсом.",
  },
];

const REVIEWS = [
  {
    text: "После первой сессии стало значительно спокойнее. Ощущение, будто отпустила что-то тяжёлое, что несла давно.",
    name: "Анна М.",
    role: "предприниматель",
  },
  {
    text: "Появилась ясность в голове. Я наконец-то почувствовала, что нахожусь здесь, а не где-то в завтра.",
    name: "Елена К.",
    role: "дизайнер",
  },
  {
    text: "Банный ритуал — это что-то невероятное. Тело буквально ожило. Почувствовала опору под ногами.",
    name: "Марина Р.",
    role: "руководитель проекта",
  },
];

const FAQS = [
  {
    q: "Безопасны ли практики самогипноза?",
    a: "Да. Во время практики вы полностью в сознании и контролируете происходящее. Самогипноз — это глубокое расслабление с сохранением осознанности. Вы можете остановить процесс в любой момент.",
  },
  {
    q: "Нужно ли медицинское образование для посещения сессий?",
    a: "Нет. Все практики носят развивающий, а не медицинский характер. Они направлены на восстановление ресурса и работу с напряжением, а не на лечение.",
  },
  {
    q: "Можно ли заниматься при наличии диагноза?",
    a: "Да, если вы наблюдаетесь у лечащего врача и он не имеет возражений. Практики развивающие и могут дополнять основное наблюдение, но не заменяют его.",
  },
  {
    q: "Как проходят онлайн-сессии?",
    a: "В видеоформате в удобное для вас время. Нужны наушники, спокойное место и около часа свободного времени.",
  },
  {
    q: "Что такое LOK-метод?",
    a: "Метод Ольги Гельман — авторская система работы с телом и сознанием через дыхание, свет и осознанность. Амина имеет сертификат специалиста этого метода.",
  },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", agree: false });
  const [leadEmail, setLeadEmail] = useState("");
  const [leadAgree, setLeadAgree] = useState(false);

  return (
    <div className="min-h-screen font-montserrat" style={{ background: "var(--color-beige)" }}>

      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: "rgba(245,241,232,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(92,74,58,0.08)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="#hero"
            className="font-cormorant text-2xl font-medium"
            style={{ color: "var(--color-bark)", letterSpacing: "0.02em" }}
          >
            Амина Чинцова
          </a>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-montserrat text-sm transition-colors duration-200"
                style={{ color: "var(--color-bark-light)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-terra)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-bark-light)")}
              >
                {l.label}
              </a>
            ))}
            <a href="#contacts" className="btn-terra text-sm">
              Записаться
            </a>
          </div>
          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Меню">
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {menuOpen && (
          <div
            className="md:hidden px-6 pb-5 flex flex-col gap-4"
            style={{ background: "var(--color-beige)" }}
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-montserrat text-sm py-1"
                style={{ color: "var(--color-bark)" }}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a href="#contacts" className="btn-terra text-sm text-center mt-2">
              Записаться
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div
          className="absolute top-[-80px] right-[-120px] w-[520px] h-[520px] opacity-25 blob-animate"
          style={{
            background: "radial-gradient(circle, #D4A59A 0%, transparent 70%)",
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          }}
        />
        <div
          className="absolute bottom-[-60px] left-[-80px] w-[400px] h-[400px] opacity-20 blob-animate"
          style={{
            background: "radial-gradient(circle, #A8B5A0 0%, transparent 70%)",
            animationDelay: "4s",
          }}
        />

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center py-20">
          <div>
            <div className="animate-fade-up">
              <span
                className="font-montserrat text-xs font-medium uppercase tracking-[0.2em] mb-6 block"
                style={{ color: "var(--color-olive-dark)" }}
              >
                Практики осознанности · Солнечногорск и онлайн
              </span>
            </div>
            <h1
              className="font-cormorant animate-fade-up-delay-1"
              style={{
                fontSize: "clamp(2.6rem, 5vw, 4.2rem)",
                lineHeight: 1.1,
                fontWeight: 400,
                color: "var(--color-bark)",
                letterSpacing: "-0.01em",
              }}
            >
              Вернитесь
              <br />
              <em style={{ fontStyle: "italic", color: "var(--color-terra-dark)" }}>
                «здесь и сейчас»
              </em>
            </h1>
            <p
              className="font-montserrat mt-6 text-base leading-relaxed animate-fade-up-delay-2"
              style={{ color: "var(--color-bark-light)", maxWidth: "420px" }}
            >
              Сопровождение в снятии напряжения и восстановлении ресурса.
              <br />
              Без диагнозов. В вашем темпе.
            </p>
            <div className="flex flex-wrap gap-4 mt-10 animate-fade-up-delay-3">
              <a href="#lead" className="btn-terra text-sm">
                Скачать бесплатную практику
              </a>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-bark text-sm"
              >
                Записаться на сессию
              </a>
            </div>
            <p
              className="font-montserrat text-xs mt-6 animate-fade-up-delay-4"
              style={{ color: "var(--color-bark-light)", opacity: 0.65 }}
            >
              *Услуги носят развивающий характер и не заменяют медицинскую помощь
            </p>
          </div>

          <div className="relative animate-fade-up-delay-2">
            <div className="relative mx-auto" style={{ maxWidth: "420px" }}>
              <div
                className="overflow-hidden shadow-2xl blob-animate"
                style={{
                  borderRadius: "60% 40% 55% 45% / 45% 55% 40% 60%",
                  aspectRatio: "1",
                }}
              >
                <img
                  src={HERO_IMG}
                  alt="Амина Чинцова — практики осознанности"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="absolute -bottom-4 -left-4 md:-left-10 rounded-2xl px-5 py-4 shadow-lg"
                style={{
                  background: "var(--color-cream)",
                  border: "1px solid rgba(168,181,160,0.3)",
                }}
              >
                <p
                  className="font-cormorant text-2xl font-medium"
                  style={{ color: "var(--color-bark)" }}
                >
                  LOK-метод
                </p>
                <p
                  className="font-montserrat text-xs mt-1"
                  style={{ color: "var(--color-bark-light)" }}
                >
                  сертифицированный специалист
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div
          className="absolute right-0 top-0 bottom-0 w-1/2 hidden md:block"
          style={{
            background: "linear-gradient(135deg, #EDE8DC 0%, #E8EDE5 100%)",
            clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        />
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <FadeSection>
            <div className="relative">
              <div
                className="overflow-hidden rounded-3xl shadow-xl"
                style={{ aspectRatio: "4/5" }}
              >
                <img
                  src={BANYA_IMG}
                  alt="Банные ритуалы — телесные практики"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="absolute -top-6 -right-6 w-32 h-32 blob-animate opacity-60"
                style={{ background: "var(--color-terra)", animationDelay: "2s" }}
              />
            </div>
          </FadeSection>
          <FadeSection>
            <span
              className="font-montserrat text-xs uppercase tracking-[0.2em] block mb-4"
              style={{ color: "var(--color-olive-dark)" }}
            >
              Обо мне
            </span>
            <h2
              className="font-cormorant"
              style={{
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                lineHeight: 1.2,
                fontWeight: 400,
                color: "var(--color-bark)",
              }}
            >
              Найти опору
              <br />
              <em style={{ fontStyle: "italic", color: "var(--color-terra-dark)" }}>в себе</em>
            </h2>
            <div className="divider-organic my-6" />
            <p
              className="font-montserrat text-sm leading-loose"
              style={{ color: "var(--color-bark-light)" }}
            >
              Меня зовут{" "}
              <strong style={{ color: "var(--color-bark)" }}>Амина Чинцова</strong> —
              сертифицированный специалист по LOK-методу Ольги Гельман. Работаю с дыханием,
              светом и телесными практиками.
            </p>
            <p
              className="font-montserrat text-sm leading-loose mt-4"
              style={{ color: "var(--color-bark-light)" }}
            >
              Знакомо чувство, когда день прошёл — а вы его не прожили? Я сопровождаю людей в
              возвращении к себе. Не ставлю диагнозов. Работаю мягко, в вашем темпе, уважая
              ваши границы.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Дыхательные практики",
                "Работа со светом",
                "Телесные техники",
                "Банные ритуалы",
                "Самогипноз",
              ].map((tag) => (
                <span
                  key={tag}
                  className="font-montserrat text-xs px-4 py-2 rounded-full"
                  style={{
                    background: "rgba(168,181,160,0.2)",
                    color: "var(--color-bark)",
                    border: "1px solid rgba(168,181,160,0.4)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <p
              className="font-montserrat text-xs mt-8"
              style={{ color: "var(--color-bark-light)", opacity: 0.6 }}
            >
              *Услуги носят развивающий характер и не заменяют медицинскую помощь
            </p>
          </FadeSection>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <FadeSection className="text-center mb-16">
            <span
              className="font-montserrat text-xs uppercase tracking-[0.2em] block mb-3"
              style={{ color: "var(--color-olive-dark)" }}
            >
              Услуги
            </span>
            <h2
              className="font-cormorant"
              style={{
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 400,
                color: "var(--color-bark)",
              }}
            >
              Что я предлагаю
            </h2>
            <div className="divider-organic mx-auto mt-5" />
          </FadeSection>
          <div className="grid md:grid-cols-2 gap-6">
            {SERVICES.map((s, i) => (
              <FadeSection key={i}>
                <div
                  className="card-service"
                  style={{ background: s.color }}
                >
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3
                      className="font-cormorant text-xl font-medium"
                      style={{ color: "var(--color-bark)", lineHeight: 1.3 }}
                    >
                      {s.title}
                    </h3>
                    <span
                      className="font-montserrat text-xs shrink-0 px-3 py-1 rounded-full"
                      style={{
                        background: "rgba(92,74,58,0.08)",
                        color: "var(--color-bark-light)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {s.duration}
                    </span>
                  </div>
                  <p
                    className="font-montserrat text-sm leading-relaxed mb-5"
                    style={{ color: "var(--color-bark-light)" }}
                  >
                    {s.desc}
                  </p>
                  <ul className="flex flex-col gap-2 mb-6">
                    {s.perks.map((p) => (
                      <li
                        key={p}
                        className="flex items-center gap-2 font-montserrat text-xs"
                        style={{ color: "var(--color-bark)" }}
                      >
                        <span style={{ color: "var(--color-olive-dark)" }}>✓</span> {p}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span
                      className="font-cormorant text-lg font-medium"
                      style={{ color: "var(--color-bark)" }}
                    >
                      {s.price}
                    </span>
                    <a href="#contacts" className="btn-terra text-xs">
                      Записаться
                    </a>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section
        id="process"
        className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #EDE8DC 0%, #E8EDE5 100%)" }}
      >
        <div
          className="absolute top-0 left-0 w-64 h-64 opacity-30 blob-animate"
          style={{ background: "var(--color-terra)", marginTop: "-60px", marginLeft: "-60px" }}
        />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <FadeSection className="text-center mb-16">
            <span
              className="font-montserrat text-xs uppercase tracking-[0.2em] block mb-3"
              style={{ color: "var(--color-olive-dark)" }}
            >
              Процесс
            </span>
            <h2
              className="font-cormorant"
              style={{
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 400,
                color: "var(--color-bark)",
              }}
            >
              Как проходит работа
            </h2>
            <div className="divider-organic mx-auto mt-5" />
            <p
              className="font-montserrat text-sm mt-4"
              style={{ color: "var(--color-bark-light)", maxWidth: "420px", margin: "1rem auto 0" }}
            >
              Вы всегда в контроле. Никаких неожиданностей — только то, на что вы согласились.
            </p>
          </FadeSection>
          <div className="grid md:grid-cols-4 gap-6">
            {STEPS.map((s, i) => (
              <FadeSection key={i}>
                <div
                  className="relative p-6 rounded-3xl h-full"
                  style={{
                    background: "rgba(250,250,248,0.7)",
                    border: "1px solid rgba(92,74,58,0.08)",
                  }}
                >
                  <span
                    className="font-cormorant text-5xl block mb-4"
                    style={{ color: "var(--color-terra)", opacity: 0.7, fontWeight: 300 }}
                  >
                    {s.num}
                  </span>
                  <h3
                    className="font-cormorant text-xl font-medium mb-3"
                    style={{ color: "var(--color-bark)" }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="font-montserrat text-sm leading-relaxed"
                    style={{ color: "var(--color-bark-light)" }}
                  >
                    {s.desc}
                  </p>
                  {i < STEPS.length - 1 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 z-10">
                      <Icon name="ChevronRight" size={20} style={{ color: "var(--color-terra)" }} />
                    </div>
                  )}
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD MAGNET */}
      <section id="lead" className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <FadeSection>
            <div
              className="rounded-[2.5rem] overflow-hidden relative"
              style={{ background: "linear-gradient(135deg, var(--color-bark) 0%, #3D2D20 100%)" }}
            >
              <div
                className="absolute top-0 right-0 w-80 h-80 opacity-10 blob-animate"
                style={{ background: "var(--color-terra)" }}
              />
              <div className="relative z-10 p-10 md:p-14 grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <span
                    className="font-montserrat text-xs uppercase tracking-[0.2em] block mb-4"
                    style={{ color: "var(--color-terra)" }}
                  >
                    Бесплатно
                  </span>
                  <h2
                    className="font-cormorant mb-4"
                    style={{
                      fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                      fontWeight: 400,
                      color: "var(--color-cream)",
                      lineHeight: 1.2,
                    }}
                  >
                    5 минут присутствия
                  </h2>
                  <p
                    className="font-montserrat text-sm leading-relaxed"
                    style={{ color: "rgba(250,250,248,0.7)" }}
                  >
                    Аудио-практика возвращения в «здесь и сейчас». Подойдёт для паузы в середине
                    дня, после совещания или перед сном.
                  </p>
                  <p
                    className="font-montserrat text-xs mt-4"
                    style={{ color: "rgba(250,250,248,0.4)" }}
                  >
                    *Практика носит развивающий характер
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <input
                    type="email"
                    placeholder="Ваш email"
                    value={leadEmail}
                    onChange={(e) => setLeadEmail(e.target.value)}
                    className="w-full px-5 py-3.5 rounded-2xl font-montserrat text-sm outline-none"
                    style={{
                      background: "rgba(250,250,248,0.1)",
                      border: "1px solid rgba(250,250,248,0.2)",
                      color: "var(--color-cream)",
                    }}
                  />
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={leadAgree}
                      onChange={(e) => setLeadAgree(e.target.checked)}
                      className="mt-0.5 w-4 h-4 shrink-0"
                      style={{ accentColor: "var(--color-terra)" }}
                    />
                    <span
                      className="font-montserrat text-xs leading-relaxed"
                      style={{ color: "rgba(250,250,248,0.55)" }}
                    >
                      Согласен(а) на обработку персональных данных в соответствии с ФЗ-152
                    </span>
                  </label>
                  <button
                    className="btn-terra text-sm text-center"
                    style={{ opacity: !leadAgree || !leadEmail ? 0.5 : 1 }}
                  >
                    Скачать бесплатно
                  </button>
                </div>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <FadeSection className="text-center mb-16">
            <span
              className="font-montserrat text-xs uppercase tracking-[0.2em] block mb-3"
              style={{ color: "var(--color-olive-dark)" }}
            >
              Отзывы
            </span>
            <h2
              className="font-cormorant"
              style={{
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 400,
                color: "var(--color-bark)",
              }}
            >
              Что говорят клиенты
            </h2>
            <div className="divider-organic mx-auto mt-5" />
          </FadeSection>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <FadeSection key={i}>
                <div
                  className="rounded-3xl p-8 h-full flex flex-col justify-between"
                  style={{
                    background: "var(--color-cream)",
                    border: "1px solid rgba(92,74,58,0.08)",
                  }}
                >
                  <div>
                    <span
                      className="font-cormorant text-5xl leading-none block mb-4"
                      style={{ color: "var(--color-terra)" }}
                    >
                      "
                    </span>
                    <p
                      className="font-montserrat text-sm leading-relaxed"
                      style={{ color: "var(--color-bark)" }}
                    >
                      {r.text}
                    </p>
                  </div>
                  <div
                    className="mt-8 pt-6"
                    style={{ borderTop: "1px solid rgba(92,74,58,0.08)" }}
                  >
                    <p
                      className="font-montserrat text-sm font-medium"
                      style={{ color: "var(--color-bark)" }}
                    >
                      {r.name}
                    </p>
                    <p
                      className="font-montserrat text-xs mt-1"
                      style={{ color: "var(--color-bark-light)" }}
                    >
                      {r.role}
                    </p>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24" style={{ background: "var(--color-cream)" }}>
        <div className="max-w-3xl mx-auto px-6">
          <FadeSection className="text-center mb-14">
            <span
              className="font-montserrat text-xs uppercase tracking-[0.2em] block mb-3"
              style={{ color: "var(--color-olive-dark)" }}
            >
              Вопросы
            </span>
            <h2
              className="font-cormorant"
              style={{
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 400,
                color: "var(--color-bark)",
              }}
            >
              Часто спрашивают
            </h2>
            <div className="divider-organic mx-auto mt-5" />
          </FadeSection>
          <div className="flex flex-col gap-3">
            {FAQS.map((f, i) => (
              <FadeSection key={i}>
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{ border: "1px solid rgba(92,74,58,0.1)" }}
                >
                  <button
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                    style={{
                      background: openFaq === i ? "var(--color-beige)" : "var(--color-cream)",
                    }}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span
                      className="font-montserrat text-sm font-medium"
                      style={{ color: "var(--color-bark)" }}
                    >
                      {f.q}
                    </span>
                    <Icon
                      name={openFaq === i ? "ChevronUp" : "ChevronDown"}
                      size={18}
                      style={{ color: "var(--color-terra)", flexShrink: 0 }}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5" style={{ background: "var(--color-beige)" }}>
                      <p
                        className="font-montserrat text-sm leading-relaxed"
                        style={{ color: "var(--color-bark-light)" }}
                      >
                        {f.a}
                      </p>
                    </div>
                  )}
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <FadeSection className="text-center mb-14">
            <span
              className="font-montserrat text-xs uppercase tracking-[0.2em] block mb-3"
              style={{ color: "var(--color-olive-dark)" }}
            >
              Контакты
            </span>
            <h2
              className="font-cormorant"
              style={{
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 400,
                color: "var(--color-bark)",
              }}
            >
              Начнём знакомство?
            </h2>
            <div className="divider-organic mx-auto mt-5" />
            <p
              className="font-montserrat text-sm mt-4"
              style={{ color: "var(--color-bark-light)" }}
            >
              Отвечаю в течение 2–4 часов
            </p>
          </FadeSection>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <FadeSection>
              <div
                className="rounded-3xl p-8"
                style={{
                  background: "var(--color-cream)",
                  border: "1px solid rgba(92,74,58,0.08)",
                }}
              >
                <h3
                  className="font-cormorant text-2xl font-medium mb-6"
                  style={{ color: "var(--color-bark)" }}
                >
                  Оставить заявку
                </h3>
                <div className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-2xl font-montserrat text-sm outline-none"
                    style={{
                      background: "var(--color-beige)",
                      border: "1px solid rgba(92,74,58,0.12)",
                      color: "var(--color-bark)",
                    }}
                  />
                  <input
                    type="tel"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-2xl font-montserrat text-sm outline-none"
                    style={{
                      background: "var(--color-beige)",
                      border: "1px solid rgba(92,74,58,0.12)",
                      color: "var(--color-bark)",
                    }}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-2xl font-montserrat text-sm outline-none"
                    style={{
                      background: "var(--color-beige)",
                      border: "1px solid rgba(92,74,58,0.12)",
                      color: "var(--color-bark)",
                    }}
                  />
                  <label className="flex items-start gap-3 cursor-pointer mt-1">
                    <input
                      type="checkbox"
                      checked={formData.agree}
                      onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                      className="mt-0.5 w-4 h-4 shrink-0"
                      style={{ accentColor: "var(--color-terra)" }}
                    />
                    <span
                      className="font-montserrat text-xs leading-relaxed"
                      style={{ color: "var(--color-bark-light)" }}
                    >
                      Согласен(а) на обработку персональных данных в соответствии с{" "}
                      <a
                        href="#legal"
                        style={{ color: "var(--color-terra-dark)", textDecoration: "underline" }}
                      >
                        ФЗ-152
                      </a>
                    </span>
                  </label>
                  <button
                    className="btn-terra text-sm mt-2"
                    style={{ opacity: !formData.agree ? 0.5 : 1 }}
                  >
                    Отправить заявку
                  </button>
                </div>
              </div>
            </FadeSection>

            <FadeSection>
              <div className="flex flex-col gap-6">
                <h3
                  className="font-cormorant text-2xl font-medium"
                  style={{ color: "var(--color-bark)" }}
                >
                  Связаться напрямую
                </h3>
                <div className="flex flex-col gap-4">
                  {[
                    {
                      emoji: "✈️",
                      title: "Telegram",
                      sub: "@aminachincova",
                      href: "https://t.me/aminachincova",
                    },
                    {
                      emoji: "💬",
                      title: "WhatsApp",
                      sub: "+7 (900) 000-00-00",
                      href: "https://wa.me/79000000000",
                    },
                    {
                      emoji: "📩",
                      title: "Email",
                      sub: "amina@example.com",
                      href: "mailto:amina@example.com",
                    },
                  ].map((c) => (
                    <a
                      key={c.title}
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-2xl transition-all"
                      style={{
                        background: "var(--color-cream)",
                        border: "1px solid rgba(92,74,58,0.08)",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.borderColor = "var(--color-terra)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.borderColor = "rgba(92,74,58,0.08)")
                      }
                    >
                      <span className="text-2xl">{c.emoji}</span>
                      <div>
                        <p
                          className="font-montserrat text-sm font-medium"
                          style={{ color: "var(--color-bark)" }}
                        >
                          {c.title}
                        </p>
                        <p
                          className="font-montserrat text-xs"
                          style={{ color: "var(--color-bark-light)" }}
                        >
                          {c.sub}
                        </p>
                      </div>
                    </a>
                  ))}
                  <a
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl transition-all"
                    style={{
                      background: "var(--color-beige-dark)",
                      border: "1px solid rgba(92,74,58,0.15)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.borderColor = "var(--color-terra)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.borderColor = "rgba(92,74,58,0.15)")
                    }
                  >
                    <span className="text-2xl">📅</span>
                    <div>
                      <p
                        className="font-montserrat text-sm font-medium"
                        style={{ color: "var(--color-bark)" }}
                      >
                        Онлайн-запись через Calendly
                      </p>
                      <p
                        className="font-montserrat text-xs"
                        style={{ color: "var(--color-bark-light)" }}
                      >
                        Выберите удобное время прямо сейчас
                      </p>
                    </div>
                    <Icon
                      name="ArrowRight"
                      size={16}
                      style={{ color: "var(--color-terra)", marginLeft: "auto" }}
                    />
                  </a>
                </div>
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* LEGAL */}
      <section id="legal" className="py-16" style={{ background: "var(--color-beige-dark)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <FadeSection>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Договор-оферта",
                  body: "ИП Чинцова Амина\nОГРНИП: 322508100218537\nИНН: 352510281200\nг. Солнечногорск, МО",
                  link: "Читать договор →",
                },
                {
                  title: "Политика конфиденциальности",
                  body: "Обработка данных согласно ФЗ-152 «О персональных данных». Ваши данные не передаются третьим лицам.",
                  link: "Читать политику →",
                },
                {
                  title: "Информированное согласие",
                  body: "Перед началом работы вы подписываете согласие, подтверждающее добровольность и осознанность участия.",
                  link: "Скачать PDF →",
                },
              ].map((d) => (
                <div
                  key={d.title}
                  className="rounded-2xl p-6"
                  style={{
                    background: "var(--color-cream)",
                    border: "1px solid rgba(92,74,58,0.08)",
                  }}
                >
                  <h4
                    className="font-cormorant text-lg font-medium mb-3"
                    style={{ color: "var(--color-bark)" }}
                  >
                    {d.title}
                  </h4>
                  <p
                    className="font-montserrat text-xs leading-relaxed mb-4 whitespace-pre-line"
                    style={{ color: "var(--color-bark-light)" }}
                  >
                    {d.body}
                  </p>
                  <a
                    href="#"
                    className="font-montserrat text-xs"
                    style={{ color: "var(--color-terra-dark)", textDecoration: "underline" }}
                  >
                    {d.link}
                  </a>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10" style={{ background: "var(--color-bark)" }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p
              className="font-cormorant text-xl font-medium"
              style={{ color: "var(--color-beige)" }}
            >
              Амина Чинцова
            </p>
            <p
              className="font-montserrat text-xs mt-1"
              style={{ color: "rgba(245,241,232,0.5)" }}
            >
              Практики осознанности · Солнечногорск и онлайн
            </p>
          </div>
          <p
            className="font-montserrat text-xs text-center"
            style={{ color: "rgba(245,241,232,0.4)" }}
          >
            *Услуги носят развивающий характер и не заменяют медицинскую помощь
            <br />
            ОКВЭД: 96.04, 85.41, 96.09, 88.99
          </p>
          <div className="flex gap-6">
            {[
              { label: "Telegram", href: "https://t.me/aminachincova" },
              { label: "Документы", href: "#legal" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="font-montserrat text-xs transition-colors"
                style={{ color: "rgba(245,241,232,0.5)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-terra)")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(245,241,232,0.5)")
                }
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}