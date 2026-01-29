import React, { useState, useEffect } from "react";
import "./ComingSoon.css"; // tumhare existing CSS

const ComingSoon = () => {
  // Countdown state
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  // Email subscription state
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState({ text: "", color: "" });

  // ===== Countdown logic =====
  useEffect(() => {
    const target = Date.now() + 30 * 24 * 60 * 60 * 1000; // 30 days from now

    function pad(n) {
      return String(n).padStart(2, "0");
    }

    function updateCountdown() {
      const now = Date.now();
      const diff = Math.max(0, target - now);

      const s = Math.floor(diff / 1000);
      const days = Math.floor(s / 86400);
      const hours = Math.floor((s % 86400) / 3600);
      const minutes = Math.floor((s % 3600) / 60);
      const seconds = Math.floor(s % 60);

      setTimeLeft({
        days: pad(days),
        hours: pad(hours),
        minutes: pad(minutes),
        seconds: pad(seconds),
      });
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  // ===== Form submit =====
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setMsg({ text: "Please enter a valid email address.", color: "#ffb3b3" });
      return;
    }

    setMsg({ text: "Thanks! You are on the list.", color: "#9be7b0" });
    console.log("Subscribed (demo):", email);
    setEmail("");
  };

  return (
    <main className="wrap" role="main" aria-labelledby="main-heading">
      {/* LEFT */}
      <section className="hero" aria-hidden="false">
        <div className="brand" aria-hidden="true">
          <div className="logo" aria-hidden="true">L</div>
          <div>
            <div className="site-title">Comming soon</div>
            <div className="subtitle">Something awesome is coming soon</div>
          </div>
        </div>

        <h1 id="main-heading">We are launching soon</h1>
        <p className="lead">
          We're putting the finishing touches on our new site. Subscribe to get notified when we go
          live — exclusive early access and launch offers for subscribers.
        </p>

        <div className="countdown" aria-live="polite" id="countdown" title="Countdown to launch">
          <div className="item">
            <div className="num">{timeLeft.days}</div>
            <div className="lbl">Days</div>
          </div>
          <div className="item">
            <div className="num">{timeLeft.hours}</div>
            <div className="lbl">Hours</div>
          </div>
          <div className="item">
            <div className="num">{timeLeft.minutes}</div>
            <div className="lbl">Minutes</div>
          </div>
          <div className="item">
            <div className="num">{timeLeft.seconds}</div>
            <div className="lbl">Seconds</div>
          </div>
        </div>

        <p className="note">Tip: change the target date in the script at the bottom to your real launch date.</p>
      </section>

      {/* RIGHT */}
      <aside className="panel" aria-label="Subscribe panel">
        <div>
          <h3>Get notified</h3>
          <p>Enter your email and we'll ping you when we launch.</p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="input-row">
            <input
              type="email"
              placeholder="Your email address"
              aria-label="Email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" aria-label="Subscribe now">
              Notify me
            </button>
          </div>
          {msg.text && (
            <div role="status" aria-live="polite" className="success" style={{ color: msg.color }}>
              {msg.text}
            </div>
          )}
        </form>

        <div className="socials" aria-hidden="false">
          <a href="#" title="Twitter" aria-label="Twitter">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9.06 9.06 0 0 1-2.88 1.11A4.52 4.52 0 0 0 12 4.77a12.83 12.83 0 0 1-9.3-4.72 4.5 4.5 0 0 0 1.4 6.03A4.48 4.48 0 0 1 2 5.86v.06A4.52 4.52 0 0 0 6.07 10a4.48 4.48 0 0 1-2.04.08 4.52 4.52 0 0 0 4.22 3.14A9.06 9.06 0 0 1 1 18.58a12.8 12.8 0 0 0 6.92 2.03c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.39-.02-.58A9.2 9.2 0 0 0 23 3z" />
            </svg>
          </a>
          <a href="#" title="Facebook" aria-label="Facebook">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M18 2h-3a4 4 0 0 0-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 0 1 1-1h2z" />
            </svg>
          </a>
          <a href="#" title="Instagram" aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <path d="M16 11.37A4 4 0 1 1 11.37 7 4 4 0 0 1 16 11.37z" />
              <path d="M17.5 6.5h.01" />
            </svg>
          </a>
        </div>

        <small style={{ color: "var(--muted)", marginTop: "auto" }}>
          We respect your privacy — no spam.
        </small>
      </aside>

      <footer>
        <div>© {new Date().getFullYear()} lehubitacademy.in</div>
        <div>Built with ♥ — <span style={{ color: "var(--muted)" }}>Coming Soon Page</span></div>
      </footer>
    </main>
  );
};

export default ComingSoon;
