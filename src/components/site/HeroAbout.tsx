import Icon from "@/components/ui/icon";
import { FadeSection, NAV_LINKS, HERO_IMG, BANYA_IMG } from "./shared";

interface HeroAboutProps {
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
}

export default function HeroAbout({ menuOpen, setMenuOpen }: HeroAboutProps) {
  return (
    <>
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
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Меню"
          >
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
                Практики осознанности · Россия и весь мир
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
    </>
  );
}
