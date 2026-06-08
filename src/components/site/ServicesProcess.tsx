import Icon from "@/components/ui/icon";
import { FadeSection, SERVICES, STEPS } from "./shared";

interface LeadMagnetProps {
  leadEmail: string;
  setLeadEmail: (v: string) => void;
  leadAgree: boolean;
  setLeadAgree: (v: boolean) => void;
}

export default function ServicesProcess({
  leadEmail,
  setLeadEmail,
  leadAgree,
  setLeadAgree,
}: LeadMagnetProps) {
  return (
    <>
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
                <div className="card-service" style={{ background: s.color }}>
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
              style={{
                color: "var(--color-bark-light)",
                maxWidth: "420px",
                margin: "1rem auto 0",
              }}
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
                      <Icon
                        name="ChevronRight"
                        size={20}
                        style={{ color: "var(--color-terra)" }}
                      />
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
              style={{
                background: "linear-gradient(135deg, var(--color-bark) 0%, #3D2D20 100%)",
              }}
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
    </>
  );
}
