import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_ITEMS = [
  { id: "home", label: "Главная" },
  { id: "sync", label: "Синхронизация" },
  { id: "notifications", label: "Уведомления" },
];

const FEATURES = [
  {
    icon: "BookOpen",
    title: "Умная домашка",
    desc: "Планировщик сам распределяет задания по дням, учитывая сложность и дедлайны.",
    color: "from-violet-500 to-purple-600",
    glow: "shadow-violet-500/30",
  },
  {
    icon: "Moon",
    title: "Режим сна",
    desc: "Напоминания об отдыхе и персональный график сна для продуктивного дня.",
    color: "from-blue-500 to-cyan-500",
    glow: "shadow-blue-500/30",
  },
  {
    icon: "Zap",
    title: "Быстрые задачи",
    desc: "Добавляй задания за секунды — голосом, текстом или фото страницы учебника.",
    color: "from-orange-400 to-pink-500",
    glow: "shadow-orange-500/30",
  },
];

const SYNC_ITEMS = [
  { icon: "Smartphone", label: "iOS & Android" },
  { icon: "Monitor", label: "Веб-версия" },
  { icon: "Users", label: "Класс & семья" },
  { icon: "Cloud", label: "Облако" },
];

const NOTIFICATIONS = [
  {
    time: "08:00",
    type: "Домашка",
    text: "Математика — стр. 45, задачи 1-5",
    tag: "warn",
    icon: "BookOpen",
  },
  {
    time: "22:30",
    type: "Сон",
    text: "Пора ложиться спать! Подъём в 7:00",
    tag: "sleep",
    icon: "Moon",
  },
  {
    time: "14:00",
    type: "Перерыв",
    text: "Сделай 10 минут отдыха и разминки",
    tag: "info",
    icon: "Coffee",
  },
  {
    time: "17:00",
    type: "Синхронизация",
    text: "Расписание обновлено учителем",
    tag: "sync",
    icon: "RefreshCw",
  },
];

export default function Index() {
  const [activeNav, setActiveNav] = useState("home");

  const scrollTo = (id: string) => {
    setActiveNav(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="edu-root">
      {/* NAV */}
      <nav className="edu-nav">
        <div className="edu-nav-inner">
          <div className="edu-logo">
            <span className="edu-logo-icon">📚</span>
            <span className="edu-logo-text">EduPlan</span>
          </div>
          <div className="edu-nav-links">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                className={`edu-nav-link ${activeNav === item.id ? "active" : ""}`}
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <button className="edu-cta-btn-sm">Скачать</button>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="edu-hero">
        <div className="edu-hero-bg">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
          <div className="blob blob-3" />
          <div className="grid-overlay" />
        </div>
        <div className="edu-hero-content">
          <div className="edu-badge">
            <Icon name="Sparkles" size={14} />
            <span>Новый уровень учёбы</span>
          </div>
          <h1 className="edu-hero-title">
            Планируй учёбу —<br />
            <span className="edu-gradient-text">побеждай каждый день</span>
          </h1>
          <p className="edu-hero-sub">
            Умный планировщик для школьников: домашка, сон, расписание
            и синхронизация со всеми устройствами
          </p>
          <div className="edu-hero-actions">
            <button className="edu-cta-btn">
              <Icon name="Download" size={18} />
              Скачать бесплатно
            </button>
            <button className="edu-ghost-btn">
              <Icon name="Play" size={18} />
              Смотреть видео
            </button>
          </div>
          <div className="edu-hero-stats">
            <div className="edu-stat">
              <span className="edu-stat-num">50K+</span>
              <span className="edu-stat-label">учеников</span>
            </div>
            <div className="edu-stat-divider" />
            <div className="edu-stat">
              <span className="edu-stat-num">4.9★</span>
              <span className="edu-stat-label">рейтинг</span>
            </div>
            <div className="edu-stat-divider" />
            <div className="edu-stat">
              <span className="edu-stat-num">100%</span>
              <span className="edu-stat-label">бесплатно</span>
            </div>
          </div>
        </div>

        {/* Floating app card */}
        <div className="edu-hero-card">
          <div className="edu-app-preview">
            <div className="edu-app-header">
              <span className="edu-app-greeting">Привет, Саша 👋</span>
              <div className="edu-app-time">22:15</div>
            </div>
            <div className="edu-app-sleep-card">
              <Icon name="Moon" size={20} />
              <div>
                <div className="edu-app-sleep-title">Режим сна</div>
                <div className="edu-app-sleep-sub">Подъём через 8 ч 45 мин</div>
              </div>
              <div className="edu-app-sleep-badge">Скоро</div>
            </div>
            <div className="edu-app-tasks-title">Домашка на завтра</div>
            <div className="edu-app-tasks">
              {[
                { sub: "Математика", task: "§12, задачи 1–6", done: true },
                { sub: "Русский язык", task: "Упр. 45, диктант", done: false },
                { sub: "История", task: "Читать параграф 8", done: false },
              ].map((t, i) => (
                <div key={i} className={`edu-app-task ${t.done ? "done" : ""}`}>
                  <div className={`edu-task-check ${t.done ? "checked" : ""}`}>
                    {t.done && <Icon name="Check" size={10} />}
                  </div>
                  <div>
                    <div className="edu-task-sub">{t.sub}</div>
                    <div className="edu-task-name">{t.task}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="edu-app-progress">
              <span>Выполнено</span>
              <span>1/3</span>
            </div>
            <div className="edu-progress-bar">
              <div className="edu-progress-fill" style={{ width: "33%" }} />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="edu-features">
        <div className="edu-section-inner">
          <div className="edu-section-badge">Возможности</div>
          <h2 className="edu-section-title">Всё для успешной учёбы</h2>
          <p className="edu-section-sub">Три ключевых инструмента, которые изменят твой подход к учёбе</p>
          <div className="edu-features-grid">
            {FEATURES.map((f, i) => (
              <div key={i} className={`edu-feature-card shadow-lg ${f.glow}`}>
                <div className={`edu-feature-icon bg-gradient-to-br ${f.color}`}>
                  <Icon name={f.icon} size={24} />
                </div>
                <h3 className="edu-feature-title">{f.title}</h3>
                <p className="edu-feature-desc">{f.desc}</p>
                <div className="edu-feature-arrow">
                  <Icon name="ArrowRight" size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SYNC */}
      <section id="sync" className="edu-sync">
        <div className="edu-section-inner edu-sync-inner">
          <div className="edu-sync-left">
            <div className="edu-section-badge">Синхронизация</div>
            <h2 className="edu-section-title" style={{ textAlign: "left" }}>
              Один аккаунт —<br />все устройства
            </h2>
            <p className="edu-section-sub" style={{ textAlign: "left" }}>
              Расписание и домашние задания мгновенно синхронизируются между телефоном, планшетом и компьютером. Даже без интернета.
            </p>
            <div className="edu-sync-items">
              {SYNC_ITEMS.map((s, i) => (
                <div key={i} className="edu-sync-item">
                  <div className="edu-sync-icon">
                    <Icon name={s.icon} size={20} />
                  </div>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
            <button className="edu-cta-btn">
              <Icon name="RefreshCw" size={18} />
              Подключить синхронизацию
            </button>
          </div>
          <div className="edu-sync-right">
            <div className="edu-sync-visual">
              <div className="edu-sync-center-icon">
                <Icon name="RefreshCw" size={32} />
              </div>
              {SYNC_ITEMS.map((s, i) => (
                <div key={i} className={`edu-sync-orbit edu-sync-orbit-${i}`}>
                  <div className="edu-sync-orbit-icon">
                    <Icon name={s.icon} size={18} />
                  </div>
                </div>
              ))}
              <div className="edu-sync-ring edu-sync-ring-1" />
              <div className="edu-sync-ring edu-sync-ring-2" />
            </div>
          </div>
        </div>
      </section>

      {/* NOTIFICATIONS */}
      <section id="notifications" className="edu-notifs">
        <div className="edu-section-inner">
          <div className="edu-section-badge">Уведомления</div>
          <h2 className="edu-section-title">
            Никогда ничего<br />не пропустишь
          </h2>
          <p className="edu-section-sub">Умные напоминания точно в нужный момент</p>
          <div className="edu-notifs-list">
            {NOTIFICATIONS.map((n, i) => (
              <div
                key={i}
                className={`edu-notif-card edu-notif-${n.tag}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="edu-notif-time">{n.time}</div>
                <div className={`edu-notif-icon-wrap edu-notif-icon-${n.tag}`}>
                  <Icon name={n.icon} size={18} />
                </div>
                <div className="edu-notif-body">
                  <div className="edu-notif-type">{n.type}</div>
                  <div className="edu-notif-text">{n.text}</div>
                </div>
                <div className={`edu-notif-dot edu-notif-dot-${n.tag}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BOTTOM */}
      <section className="edu-bottom-cta">
        <div className="blob blob-cta-1" />
        <div className="blob blob-cta-2" />
        <div className="edu-bottom-cta-inner">
          <h2 className="edu-bottom-title">Готов учиться умнее?</h2>
          <p className="edu-bottom-sub">
            Присоединяйся к 50 000 школьников, которые уже используют EduPlan
          </p>
          <div className="edu-bottom-btns">
            <button className="edu-cta-btn edu-cta-btn-lg">
              <Icon name="Download" size={20} />
              Скачать для Android
            </button>
            <button className="edu-cta-btn edu-cta-btn-lg edu-cta-btn-ios">
              <Icon name="Smartphone" size={20} />
              Скачать для iOS
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="edu-footer">
        <div className="edu-footer-inner">
          <div className="edu-logo">
            <span className="edu-logo-icon">📚</span>
            <span className="edu-logo-text">EduPlan</span>
          </div>
          <p className="edu-footer-copy">© 2026 EduPlan — планировщик для школьников</p>
        </div>
      </footer>
    </div>
  );
}