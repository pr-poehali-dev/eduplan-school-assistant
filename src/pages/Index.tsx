import Icon from "@/components/ui/icon";

const FEATURES = [
  {
    icon: "BookOpen",
    title: "Умная домашка",
    desc: "Планировщик распределяет задания по дням с учётом сложности и дедлайнов.",
  },
  {
    icon: "Moon",
    title: "Режим сна",
    desc: "Напоминания об отдыхе и персональный график для продуктивного следующего дня.",
  },
  {
    icon: "Bell",
    title: "Уведомления",
    desc: "Умные оповещения о домашке, переменах и важных событиях без спама.",
  },
  {
    icon: "RefreshCw",
    title: "Синхронизация",
    desc: "Все устройства в реальном времени. Даже без интернета всё работает.",
  },
];

const SCREENS = [
  { emoji: "📋", label: "Домашка" },
  { emoji: "🌙", label: "Сон" },
  { emoji: "📅", label: "Расписание" },
  { emoji: "🔔", label: "Уведомления" },
];

export default function Index() {
  return (
    <div className="app-shell">
      {/* ── NAV ── */}
      <header className="app-nav">
        <div className="app-nav-inner">
          <div className="app-logo">
            <span className="app-logo-mark">EP</span>
            <span className="app-logo-name">EduPlan</span>
          </div>
          <a href="#download" className="app-dl-btn">
            <Icon name="Download" size={15} />
            Скачать
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-noise" />
        <div className="hero-glow-1" />
        <div className="hero-glow-2" />
        <div className="hero-inner">
          <p className="hero-eyebrow">Приложение для школьников</p>
          <h1 className="hero-title">
            Успевай всё.<br />
            <em>Без стресса.</em>
          </h1>
          <p className="hero-sub">
            EduPlan — планировщик, который сам раскидывает домашку, следит за
            твоим сном и держит расписание в порядке.
          </p>
          <div className="hero-actions" id="download">
            <a href="#" className="btn-primary">
              <Icon name="Smartphone" size={18} />
              App Store
            </a>
            <a href="#" className="btn-primary btn-android">
              <Icon name="Smartphone" size={18} />
              Google Play
            </a>
            <a href="#" className="btn-ghost">
              <Icon name="Monitor" size={16} />
              Веб-версия
            </a>
          </div>
          <p className="hero-note">Бесплатно · iOS & Android · Без рекламы</p>
        </div>

        {/* Floating mock phone */}
        <div className="phone-wrap">
          <div className="phone">
            <div className="phone-notch" />
            <div className="phone-screen">
              <div className="phone-status">
                <span>09:41</span>
                <div className="phone-status-icons">
                  <Icon name="Wifi" size={12} />
                  <Icon name="Battery" size={12} />
                </div>
              </div>
              <p className="phone-greeting">Привет, Саша 👋</p>
              <p className="phone-date">Среда, 12 марта</p>

              <div className="phone-card sleep">
                <div className="phone-card-icon">
                  <Icon name="Moon" size={16} />
                </div>
                <div>
                  <p className="phone-card-title">Ложись спать в 22:00</p>
                  <p className="phone-card-sub">Подъём через 8ч 45мин</p>
                </div>
              </div>

              <p className="phone-section-title">Домашка на завтра</p>
              <div className="phone-tasks">
                {[
                  { s: "Математика", t: "§12, задачи 1–6", done: true },
                  { s: "Русский", t: "Упр. 45", done: false },
                  { s: "История", t: "Параграф 8", done: false },
                ].map((item, i) => (
                  <div key={i} className={`phone-task ${item.done ? "done" : ""}`}>
                    <span className={`phone-check ${item.done ? "checked" : ""}`}>
                      {item.done && <Icon name="Check" size={8} />}
                    </span>
                    <div>
                      <span className="phone-task-sub">{item.s}</span>
                      <span className="phone-task-name">{item.t}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="phone-progress-wrap">
                <span>Готово</span><span>1 / 3</span>
              </div>
              <div className="phone-progress-track">
                <div className="phone-progress-fill" style={{ width: "33%" }} />
              </div>
            </div>
          </div>
          {/* Floating badges */}
          <div className="float-badge float-badge-1">
            <Icon name="Star" size={12} />4.9 рейтинг
          </div>
          <div className="float-badge float-badge-2">
            <Icon name="Users" size={12} />50K+ учеников
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="features">
        <div className="section-inner">
          <p className="section-label">Возможности</p>
          <h2 className="section-title">Всё, что нужно для учёбы</h2>
          <div className="features-grid">
            {FEATURES.map((f, i) => (
              <div key={i} className="feature-card">
                <div className="feature-icon-wrap">
                  <Icon name={f.icon} size={22} />
                </div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOWNLOAD CTA ── */}
      <section className="cta-section">
        <div className="cta-glow" />
        <div className="section-inner cta-inner">
          <p className="section-label">Скачай сейчас</p>
          <h2 className="cta-title">Бесплатно.<br />Навсегда.</h2>
          <p className="cta-sub">
            Никаких подписок, никакой рекламы. Просто скачай и начни учиться лучше.
          </p>
          <div className="cta-btns">
            <a href="#" className="store-btn">
              <Icon name="Apple" size={20} />
              <div>
                <span className="store-btn-sub">Скачать в</span>
                <span className="store-btn-main">App Store</span>
              </div>
            </a>
            <a href="#" className="store-btn">
              <span className="store-android-icon">▶</span>
              <div>
                <span className="store-btn-sub">Скачать в</span>
                <span className="store-btn-main">Google Play</span>
              </div>
            </a>
          </div>
          <div className="cta-stats">
            {[
              { n: "50K+", l: "учеников" },
              { n: "4.9", l: "рейтинг" },
              { n: "0₽", l: "навсегда" },
            ].map((s, i) => (
              <div key={i} className="cta-stat">
                <span className="cta-stat-num">{s.n}</span>
                <span className="cta-stat-label">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="app-footer">
        <div className="app-nav-inner">
          <span className="footer-logo">EduPlan</span>
          <span className="footer-copy">© 2025 · Сделано для школьников</span>
        </div>
      </footer>
    </div>
  );
}
