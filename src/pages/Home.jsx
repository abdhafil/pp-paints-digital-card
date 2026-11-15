import { useEffect, useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronDown,
  Heart,
  MapPin,
  Minus,
  Plus,
  Calculator as CalculatorIcon,
  Sparkles,
} from "lucide-react";
import business from "../data/business.js";

const wa = (message) =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
function WhatsAppIcon({ size = 18 }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.1 11.8a8.1 8.1 0 0 1-12 7.1L4 20l1.1-4A8.1 8.1 0 1 1 20.1 11.8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 8.2c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.5.6c-.2.2-.2.4 0 .6.6 1 1.3 1.7 2.4 2.2.2.1.4.1.5-.1l.7-.8c.2-.2.4-.3.7-.2l1.5.7c.3.1.4.3.4.5 0 .4-.2 1.1-.7 1.5-.5.5-1.2.7-2 .6-1.1-.2-2.4-.8-3.7-2-1.5-1.3-2.5-2.9-2.8-4-.2-.9.1-1.5.5-1.8L9 8.2Z"
        fill="currentColor"
      />
    </svg>
  );
}
const groups = {
  Warm: [
    { name: "Sandstone", hex: "#D8B88C" },
    { name: "Soft Linen", hex: "#E9DDC9" },
    { name: "Terracotta", hex: "#C87555" },
    { name: "Honey Glow", hex: "#DDAF55" },
  ],
  Cool: [
    { name: "Coastal Teal", hex: "#4F8990" },
    { name: "Misty Lilac", hex: "#B8A9C8" },
    { name: "Rainwashed", hex: "#B8C9C5" },
    { name: "Deep Blue", hex: "#47637A" },
  ],
  Earthy: [
    { name: "Olive Grove", hex: "#78816A" },
    { name: "Clay Pot", hex: "#A9684F" },
    { name: "Moss", hex: "#69745B" },
    { name: "Warm Stone", hex: "#A89D8D" },
  ],
  Bold: [
    { name: "Hibiscus", hex: "#C8325A" },
    { name: "Midnight", hex: "#343B4C" },
    { name: "Saffron", hex: "#D59731" },
    { name: "Jade", hex: "#2F7567" },
  ],
};

function SectionHead({ eyebrow, title, text, light = false }) {
  return (
    <div className={`section-head ${light ? "light" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function Room({ main, feature, split }) {
  return (
    <svg
      className="room-svg"
      viewBox="0 0 800 470"
      role="img"
      aria-label={`Illustration of a living room with ${main.name} main walls and ${feature.name} feature wall`}
    >
      <defs>
        <linearGradient id="wallShade" x2="0" y2="1">
          <stop stopColor="#fff" stopOpacity=".18" />
          <stop offset="1" stopColor="#34291d" stopOpacity=".12" />
        </linearGradient>
        <linearGradient id="floor" x2="0" y2="1">
          <stop stopColor="#c59d72" />
          <stop offset="1" stopColor="#9e7857" />
        </linearGradient>
        <clipPath id="afterClip">
          <rect x={800 - split * 8} y="0" width={split * 8} height="365" />
        </clipPath>
      </defs>
      <rect width="800" height="365" fill="#d7d0c3" />
      <g clipPath="url(#afterClip)">
        <rect width="800" height="365" fill={main.hex} />
        <path d="M0 0h800v365H0z" fill="url(#wallShade)" />
        <path d="M510 0h290v365H510z" fill={feature.hex} opacity=".97" />
      </g>
      <path d="M0 365h800v105H0z" fill="url(#floor)" />
      <path d="M0 365h800" stroke="#f4e3c9" strokeWidth="10" />
      <rect x="86" y="68" width="190" height="166" rx="3" fill="#f5eee0" />
      <rect x="99" y="81" width="164" height="140" fill="#b9d4d0" />
      <path d="M181 81v140M99 151h164" stroke="#f9f4ea" strokeWidth="9" />
      <path d="M99 179q48-40 82 0t82 0v42H99z" fill="#7ba29a" opacity=".7" />
      <rect x="119" y="95" width="118" height="91" rx="1" fill="#f4f0e7" />
      <rect x="127" y="103" width="102" height="75" fill="#d8b88c" />
      <path d="M137 168l26-40 20 24 18-30 20 46z" fill="#7d8b6b" />
      <circle cx="179" cy="120" r="9" fill="#d3a557" />
      <rect x="594" y="84" width="112" height="174" rx="3" fill="#f5efe2" />
      <rect x="605" y="95" width="90" height="152" fill="#fff" />
      <rect x="613" y="103" width="74" height="136" fill="#cfbfa3" />
      <path d="M650 103v136" stroke="#fff" strokeWidth="5" />
      <ellipse
        cx="424"
        cy="382"
        rx="183"
        ry="28"
        fill="#46372a"
        opacity=".18"
      />
      <path d="M281 288q0-34 37-34h217q38 0 38 35v69H281z" fill="#bd886b" />
      <path
        d="M305 269q0-20 27-20h63v88h-90zM463 249h44q36 0 36 32v56h-80z"
        fill="#d4a184"
      />
      <rect x="267" y="314" width="315" height="67" rx="24" fill="#c89174" />
      <rect x="290" y="303" width="110" height="52" rx="20" fill="#e2b499" />
      <rect x="420" y="303" width="134" height="52" rx="20" fill="#d9a68b" />
      <path
        d="M294 375v20m260-20v20"
        stroke="#694b3b"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path d="M184 365q5-75 37-78 27 3 32 78" fill="#71856a" />
      <path
        d="M221 287v-84m0 28-25-18m25 34 23-20"
        stroke="#53694d"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path d="M168 365h81v-12h-81z" fill="#b97851" />
    </svg>
  );
}

function Visualiser() {
  const [target, setTarget] = useState("main");
  const [main, setMain] = useState(groups.Warm[0]);
  const [feature, setFeature] = useState(groups.Cool[0]);
  const [group, setGroup] = useState("Warm");
  const [split, setSplit] = useState(100);
  const [saved, setSaved] = useState([]);
  const pick = (c) => (target === "main" ? setMain(c) : setFeature(c));
  const current = target === "main" ? main : feature;
  const save = () =>
    setSaved((items) =>
      items.some(
        (x) => x.main.hex === main.hex && x.feature.hex === feature.hex,
      )
        ? items
        : [...items.slice(-2), { main, feature }],
    );
  return (
    <section id="visualiser" className="visual-section anchor-section">
      <div className="wrap">
        <SectionHead
          eyebrow="Make it yours"
          title="See your space in colour"
          text="Try a pairing, compare the mood, and take your favourites with you."
        />
        <div className="visual-grid">
          <div className="visual-preview">
            <div className="room-label">
              <span>
                <i style={{ background: main.hex }} />
                {main.name}
              </span>
              <span>
                <i style={{ background: feature.hex }} />
                {feature.name}
              </span>
            </div>
            <div className="room-frame">
              <Room main={main} feature={feature} split={split} />
            </div>
            <div className="compare">
              <span>Before / after</span>
              <input
                aria-label="Before and after comparison slider"
                type="range"
                min="5"
                max="100"
                value={split}
                onChange={(e) => setSplit(Number(e.target.value))}
                style={{ "--range": `${split}%` }}
              />
            </div>
            <p className="room-note">
              On-screen colours are a guide. Visit the store to see real shade
              cards.
            </p>
          </div>
          <div className="swatch-panel">
            <div
              className="paint-tabs"
              role="tablist"
              aria-label="Select wall to colour"
            >
              {[
                ["main", "Main walls", main],
                ["feature", "Feature wall", feature],
              ].map(([key, label, color]) => (
                <button
                  role="tab"
                  aria-selected={target === key}
                  className={target === key ? "selected" : ""}
                  key={key}
                  onClick={() => setTarget(key)}
                >
                  <span>{label}</span>
                  <i style={{ background: color.hex }} />
                  <small>{color.name}</small>
                </button>
              ))}
            </div>
            <p className="choose-label">
              Choose a shade for{" "}
              <b>{target === "main" ? "main walls" : "the feature wall"}</b>
            </p>
            <div className="group-tabs">
              {Object.keys(groups).map((name) => (
                <button
                  className={name === group ? "active" : ""}
                  key={name}
                  onClick={() => setGroup(name)}
                >
                  {name}
                </button>
              ))}
            </div>
            <div className="swatches">
              {groups[group].map((color) => (
                <button
                  type="button"
                  className={`swatch ${current.hex === color.hex ? "chosen" : ""}`}
                  key={color.hex}
                  aria-label={`${color.name}, ${color.hex}${current.hex === color.hex ? ", selected" : ""}`}
                  aria-pressed={current.hex === color.hex}
                  onClick={() => pick(color)}
                >
                  <span
                    className="swatch-chip"
                    style={{ background: color.hex }}
                  >
                    {current.hex === color.hex && <Check size={17} />}
                  </span>
                  <span className="swatch-name">{color.name}</span>
                  <span className="swatch-hex">{color.hex}</span>
                </button>
              ))}
            </div>
            <div className="selected-combo">
              <span className="combo-dots">
                <i style={{ background: main.hex }} />
                <i style={{ background: feature.hex }} />
              </span>
              <span>Main wall + Feature wall</span>
            </div>
            <button
              className="button button-dark full"
              onClick={() =>
                window.open(
                  wa(
                    `Hi P P Paints, I'd like to ask about this colour combination: Main walls ${main.name} (${main.hex}) and feature wall ${feature.name} (${feature.hex}).`,
                  ),
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            >
              <WhatsAppIcon /> Ask for this combination
            </button>
            <button className="save-combo" onClick={save}>
              <Heart size={16} /> Save this combination
            </button>
            {saved.length > 0 && (
              <div className="saved">
                <b>Saved combinations</b>
                <div>
                  {saved.map((item, i) => (
                    <button
                      key={`${item.main.hex}-${item.feature.hex}`}
                      aria-label={`Apply saved combination ${i + 1}: ${item.main.name} and ${item.feature.name}`}
                      onClick={() => {
                        setMain(item.main);
                        setFeature(item.feature);
                      }}
                    >
                      <i style={{ background: item.main.hex }} />
                      <i style={{ background: item.feature.hex }} />
                      <span>
                        {item.main.name} + {item.feature.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const fieldData = [
  { key: "length", label: "Length" },
  { key: "width", label: "Width" },
  { key: "height", label: "Wall height" },
  { key: "coats", label: "Coats" },
  { key: "doors", label: "Doors" },
  { key: "windows", label: "Windows" },
];
function Calculator() {
  const [unit, setUnit] = useState("ft");
  const [type, setType] = useState("Interior");
  const [values, setValues] = useState({
    length: 12,
    width: 10,
    height: 9,
    coats: 2,
    doors: 1,
    windows: 2,
  });
  const factor = unit === "m" ? 3.28084 : 1;
  const area = Math.max(
    0,
    (2 * (values.length + values.width) * values.height -
      values.doors * 20 -
      values.windows * 15) /
      (factor * factor),
  );
  const liters = Math.ceil((area * values.coats) / business.coverage);
  const packSizes = business.packSizes;
  const packs = useMemo(() => {
    let remain = liters;
    const result = [];
    for (const size of packSizes) {
      const count = Math.floor(remain / size);
      if (count) result.push([size, count]);
      remain -= count * size;
    }
    if (remain > 0) result.push([1, remain]);
    return result;
  }, [liters]);
  const packText = packs.length
    ? packs.map(([s, n]) => `${n} × ${s}L`).join(" + ")
    : "Less than 1L";
  const update = (key, raw) => {
    const n = raw === "" ? "" : Number(raw);
    const max =
      key === "length" || key === "width" || key === "height"
        ? unit === "m"
          ? 30
          : 100
        : key === "coats"
          ? 6
          : 20;
    setValues((v) => ({
      ...v,
      [key]:
        n === ""
          ? ""
          : Math.max(
              key === "doors" || key === "windows" ? 0 : 1,
              Math.min(max, n),
            ),
    }));
  };
  const message = `Hi P P Paints, please help estimate paint for an ${type.toLowerCase()} room. Length: ${values.length} ${unit}, Width: ${values.width} ${unit}, Wall height: ${values.height} ${unit}, Coats: ${values.coats}, Doors: ${values.doors}, Windows: ${values.windows}. Estimated paint: ${liters}L for ${Math.round(area)} sq ft (${business.coverage} sq ft/L/coat coverage). Suggested packs: ${packText}.`;
  return (
    <section id="calculator" className="calculator-section anchor-section">
      <div className="wrap">
        <SectionHead
          eyebrow="Plan with confidence"
          title="A quick paint estimate"
          text="Get a helpful starting point for the amount of paint your room may need."
        />
        <div className="calculator-grid">
          <div className="calc-form">
            <div className="calc-top">
              <div className="segmented">
                <button
                  className={type === "Interior" ? "active" : ""}
                  onClick={() => setType("Interior")}
                >
                  Interior
                </button>
                <button
                  className={type === "Exterior" ? "active" : ""}
                  onClick={() => setType("Exterior")}
                >
                  Exterior
                </button>
              </div>
              <label className="unit-select">
                Units{" "}
                <select value={unit} onChange={(e) => setUnit(e.target.value)}>
                  <option value="ft">Feet (ft)</option>
                  <option value="m">Metres (m)</option>
                </select>
                <ChevronDown size={14} />
              </label>
            </div>
            <div className="fields">
              {fieldData.map(({ key, label }) => (
                <div className="field" key={key}>
                  <label htmlFor={`input-${key}`}>
                    {label}
                    {["length", "width", "height"].includes(key) && (
                      <span className="unit">({unit})</span>
                    )}
                  </label>
                  <div className="stepper">
                    <button
                      type="button"
                      aria-label={`Decrease ${label}`}
                      onClick={() =>
                        update(
                          key,
                          Math.max(
                            key === "doors" || key === "windows" ? 0 : 1,
                            Number(values[key] || 0) - 1,
                          ),
                        )
                      }
                    >
                      <Minus size={15} />
                    </button>
                    <input
                      id={`input-${key}`}
                      type="number"
                      min={key === "doors" || key === "windows" ? 0 : 1}
                      max={key === "coats" ? 6 : 100}
                      value={values[key]}
                      onChange={(e) => update(key, e.target.value)}
                      onBlur={() => values[key] === "" && update(key, 1)}
                      aria-describedby={`help-${key}`}
                    />
                    <button
                      type="button"
                      aria-label={`Increase ${label}`}
                      onClick={() => update(key, Number(values[key] || 0) + 1)}
                    >
                      <Plus size={15} />
                    </button>
                  </div>
                  <small id={`help-${key}`}>
                    {["length", "width", "height"].includes(key)
                      ? `Room ${label.toLowerCase()} in ${unit}`
                      : key === "coats"
                        ? "Usually 2 coats"
                        : "Approximate count"}
                  </small>
                </div>
              ))}
            </div>
          </div>
          <div className="result-card">
            <div className="result-kicker">
              <CalculatorIcon size={16} /> YOUR ROUGH ESTIMATE
            </div>
            <div className="litres">
              <span>{liters}</span>
              <b>litres</b>
            </div>
            <p className="result-type">
              {type} paint · {values.coats} coats
            </p>
            <div className="result-stats">
              <div>
                <small>Paintable area</small>
                <b>
                  {Math.round(area)} <span>sq ft</span>
                </b>
              </div>
              <div>
                <small>Coverage used</small>
                <b>
                  {business.coverage} <span>sq ft/L/coat</span>
                </b>
              </div>
            </div>
            <div className="pack-note">
              <small>Suggested pack combination</small>
              <b>{packText}</b>
            </div>
            <a
              className="button button-light full"
              href={wa(message)}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon /> Send this to the store
            </a>
            <p className="disclaimer">
              A rough guide only. Actual coverage varies by surface, product and
              application.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 8);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);
  const navigateToSection = (event) => {
    const href = event.currentTarget.getAttribute("href");
    if (!href?.startsWith("#")) return;
    const section = document.querySelector(href);
    if (!section) return;
    event.preventDefault();
    const contentSelector = {
      "#collection": ".category-grid",
      "#visualiser": ".visual-grid",
      "#calculator": ".calculator-grid",
      "#visit": ".visit-grid",
    }[href];
    const content = section.querySelector(contentSelector) || section;
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches
      ? "auto"
      : "smooth";
    content.scrollIntoView({ behavior, block: "center" });
    window.history.pushState(null, "", href);
    event.currentTarget.closest("details")?.removeAttribute("open");
  };
  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <div className="nav-wrap">
        <a className="brand" href="#home" aria-label="P P Paints home">
          <img src="/images/logo/logo.jpg" alt="P P Paints logo" />
          <span>
            <span className="brand-name">P P PAINTS</span>
            <small>KALLADIKODE</small>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#collection" onClick={navigateToSection}>
            Collection
          </a>
          <a href="#visualiser" onClick={navigateToSection}>
            Visualiser
          </a>
          <a href="#calculator" onClick={navigateToSection}>
            Calculator
          </a>
          <a href="#visit" onClick={navigateToSection}>
            Visit
          </a>
        </nav>
        <a
          className="nav-cta"
          href={wa("Hi P P Paints, I'd like to know more about your paints.")}
          target="_blank"
          rel="noreferrer"
        >
          <WhatsAppIcon /> Chat with us
        </a>
        <details className="mobile-nav">
          <summary aria-label="Open navigation menu">
            <span>Menu</span>
            <ChevronDown size={15} />
          </summary>
          <nav aria-label="Mobile navigation">
            <a href="#collection" onClick={navigateToSection}>
              Collection
            </a>
            <a href="#visualiser" onClick={navigateToSection}>
              Visualiser
            </a>
            <a href="#calculator" onClick={navigateToSection}>
              Calculator
            </a>
            <a href="#visit" onClick={navigateToSection}>
              Visit
            </a>
            <a href={wa("Hi P P Paints!")}>WhatsApp</a>
          </nav>
        </details>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="home">
        <section className="hero">
          <img
            className="hero-photo"
            src={business.heroImage}
            alt="A calm, sunlit living room with warm painted walls"
            fetchPriority="high"
          />
          <div className="hero-overlay" />
          <div className="hero-content">
            <span className="hero-kicker">
              <i /> YOUR COLOUR STORY STARTS HERE
            </span>
            <h1>
              A little colour.
              <br />
              <em>A lot of home.</em>
            </h1>
            <p>
              The Perfect Painting Solution. Premium interior and exterior
              paints, waterproofing, finishes and tools — with honest, expert
              advice to help you choose. Come to us, we will help you.
            </p>
            <div className="hero-actions">
              <a className="button button-light" href="#collection">
                Explore the collection <ArrowRight size={17} />
              </a>
              <a
                className="button button-outline"
                href={wa("Hi P P Paints, I'd like some help choosing paint.")}
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon /> Chat on WhatsApp
              </a>
            </div>
          </div>
          {/* <a
            href="#collection"
            className="scroll-hint"
            aria-label="Scroll to collection"
          >
            <ArrowDown size={18} />
          </a> */}
          <span className="hero-index">
            P P PAINTS <i /> KALLADIKODE, KERALA
          </span>
        </section>
        <section id="collection" className="collection-section anchor-section">
          <div className="wrap">
            <div className="collection-top">
              <SectionHead
                eyebrow="The right finish"
                title="Everything for a fresh start"
                text="From the first coat to the final touch, let’s find what your space needs."
              />
              {/* <span className="collection-aside">
                <Sparkles size={17} /> Ask us about current availability
              </span> */}
            </div>
            <div className="category-grid">
              {business.categories.map((item, i) => (
                <article className="category-card" key={item.name}>
                  <div className="category-photo">
                    <img
                      src={item.image}
                      alt={`${item.name} for home painting projects`}
                      loading="lazy"
                    />
                    {/* <span>0{i + 1}</span> */}
                  </div>
                  <div className="category-copy">
                    <div>
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                    </div>
                    <a
                      href={wa(
                        `Hi P P Paints, I'd like to enquire about ${item.name.toLowerCase()}.`,
                      )}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Enquire about ${item.name}`}
                    >
                      <ArrowRight size={18} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <p className="brand-note">
              Brand availability: <b>please ask the store</b> for current brands
              and stock.
            </p>
          </div>
        </section>
        <Visualiser />
        <Calculator />
        <section id="visit" className="visit-section anchor-section">
          <div className="wrap visit-grid">
            <div>
              <SectionHead
                eyebrow="Around the corner"
                title="Drop by for a colour chat"
                text="Bring your ideas, room photos or a shade you love. We’ll help you find a place to start."
              />
              <div className="visit-details">
                <span className="visit-pin">
                  <MapPin size={20} />
                </span>
                <div>
                  <b>{business.name}</b>
                  <p>{business.location}</p>
                  <small>
                    Opening hours: <b>please contact the store to confirm</b>
                  </small>
                </div>
              </div>
              <div className="visit-actions">
                <a
                  className="button button-dark"
                  href={business.maps}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MapPin size={17} /> Get directions
                </a>
                <a
                  className="visit-phone"
                  href={`tel:${business.phones[0].tel}`}
                >
                  Call {business.phones[0].number}
                </a>
              </div>
            </div>
            <div className="map-card">
              <iframe
                title="Map showing P P Paints in Kalladikode"
                src={business.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a href={business.maps} target="_blank" rel="noreferrer">
                Open in Google Maps <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="wrap footer-inner">
            <a className="brand footer-brand" href="#home">
              <img src="/images/logo/logo.jpg" alt="" />
              <span>
                <span className="brand-name">P P PAINTS</span>
                <small>KALLADIKODE</small>
              </span>
            </a>
            {/* <p>Colour for the moments that make a home.</p> */}
            <span>© {new Date().getFullYear()} P P Paints</span>
          </div>
        </footer>
      </main>
      <a
        className="floating-wa"
        href={wa("Hi P P Paints!")}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with P P Paints on WhatsApp"
      >
        <WhatsAppIcon size={25} />
      </a>
    </>
  );
}
