import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { FadeSection, REVIEWS, FAQS } from "./shared";

interface ReviewsContactsFooterProps {
  openFaq: number | null;
  setOpenFaq: (v: number | null) => void;
  formData: { name: string; phone: string; email: string; agree: boolean };
  setFormData: (v: { name: string; phone: string; email: string; agree: boolean }) => void;
}

export default function ReviewsContactsFooter({
  openFaq,
  setOpenFaq,
  formData,
  setFormData,
}: ReviewsContactsFooterProps) {
  return (
    <>
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
              Работаю онлайн и очно — прилечу в любую точку России и мира. Отвечаю в течение
              2–4 часов
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
                      sub: "@AminaChinczova",
                      href: "https://t.me/AminaChinczova",
                    },
                    {
                      emoji: "💬",
                      title: "WhatsApp",
                      sub: "+7 (928) 452-35-99",
                      href: "https://wa.me/79284523599",
                    },
                    {
                      emoji: "📩",
                      title: "Email",
                      sub: "aminachinczova@mail.ru",
                      href: "mailto:aminachinczova@mail.ru",
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
                  body: "ИП Чинцова Амина\nОГРНИП: 322508100218537\nИНН: 352510281200",
                  link: "Читать договор →",
                  tab: "offer",
                },
                {
                  title: "Политика конфиденциальности",
                  body: "Обработка данных согласно ФЗ-152 «О персональных данных». Ваши данные не передаются третьим лицам.",
                  link: "Читать политику →",
                  tab: "privacy",
                },
                {
                  title: "Информированное согласие",
                  body: "Перед началом работы вы подписываете согласие, подтверждающее добровольность и осознанность участия.",
                  link: "Читать согласие →",
                  tab: "informed",
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
                  <Link
                    to={`/legal?tab=${d.tab}`}
                    className="font-montserrat text-xs"
                    style={{ color: "var(--color-terra-dark)", textDecoration: "underline" }}
                  >
                    {d.link}
                  </Link>
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
              Практики осознанности · Россия и весь мир
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
              { label: "Telegram", href: "https://t.me/AminaChinczova" },
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
    </>
  );
}
