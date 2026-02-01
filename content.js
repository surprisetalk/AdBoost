const ADS = [
  {
    headline: "CONGRATULATIONS!",
    body: "You're the millionth person to see this ad.",
  },
  {
    headline: "FREE MEDITATION CLASSES",
    body: "Inquire within.",
  },
  {
    headline: "Artisanal Rocks",
    body: "Your own slice of Earth. Handpicked from somewhere. $47.99",
  },
  {
    headline: "Hot Singles In Your Area Selling Extended Car Warranties",
    body: "They're hot. They're in your area. They're ready to sell you an extended car warranty.",
  },
  {
    headline: "DOCTORS HATE HIM",
    body: "He eats two apples per day!",
  },
  {
    headline: "Placebo Emporium",
    body: "the world's finest placebos at affordable wholesale prices",
  },
  {
    headline: "YOUR INSTANT SUPERLUNAR HOROSCOPE",
    body: "",
  },
  {
    headline: "Protect Your Identity",
    body: "Submit Your Important Documents For Review",
  },
  {
    headline: "Accept The Gift Of Quantum Healing",
    body: "Our supplements are made of 100% organic charm quarks!",
  },
  {
    headline: "30+ FREE EMOJIS",
    body: "🏁🍽🔃⏹📩🙌🏊🏒💨🚜🕊🛍📤🃏💌🔺🚹👯◼️☕️💣🎃🚌♣️🗄📢🎷🔨🐖🐥🌮❣📲😴🌦🏢🚆📭🐡📻",
  },
  {
    headline: "This Ad Intentionally Left Blank",
    body: "Reclaim your attention.",
  },
  {
    headline: "Ancient Chinese Wisdom Exposed!",
    body: '"Cut out doors and windows for the house. The holes make it useful."',
  },
  {
    headline: "ADVERTISEMENT",
    body: "This is an ad. This is an ad. Your lifespan dwindles faster yet.",
  },
  {
    headline: "FREE iPod Nano!",
    body: "Complete 17 quick surveys and refer 400 friends!",
    style: "retro",
  },
  {
    headline: "MAKE $$$ FAST!!!",
    body: "Not a pyramid scheme. It's a reverse funnel system.",
    style: "retro",
  },
  {
    headline: "Your Computer Has 47 Viruses",
    body: "Vaccinate your computer with Totally Antivirus today!",
    style: "darkpattern",
  },
  {
    headline: "We Value Your Privacy",
    body: "That's why we collect it so carefully. Accept the cookies.",
    style: "darkpattern",
  },
  {
    headline: "A/B Testing Your Emotions",
    body: "You're in Group B. How does that make you feel?",
    style: "darkpattern",
  },
  {
    headline: "Gravity Rentals",
    body: "Tired of floating? Rent gravity by the hour! First pull is free.",
  },
  {
    headline: "Insurance Insurance",
    body: "Protect yourself against loss of insurance for $3500/month",
    style: "classified",
  },
  {
    headline: "Homeopathic WiFi",
    body: "To find better signal, you must first lose yourself.",
  },
  {
    headline: "Lorem Ipsum: The Musical",
    body: "Quisque ac nunc tempus, efficitur libero id, porta sapien.",
  },
  {
    headline: "Certified Pre-Owned Beliefs",
    body: "Lightly used ideas. Some existential wear.",
    style: "classified",
  },
  {
    headline: "Subscribe to Weather Premium",
    body: "Unlock seasons 5 and 6. Ad-free rain. Streaming from the cloud now.",
    style: "darkpattern",
  },
];

const STYLES = ["rainbow", "retro", "classified", "darkpattern"];

const style = document.createElement("style");
style.textContent = `
  /* === BASE AD STYLES === */
  .adboost-ad {
    padding: 20px;
    margin: 20px 0;
    text-align: center;
    position: relative;
    box-sizing: border-box;
    clear: both;
  }

  .adboost-ad::before {
    content: "AD";
    position: absolute;
    top: -10px;
    left: 10px;
    background: #ff0000;
    color: white;
    padding: 2px 8px;
    font-size: 10px;
    font-weight: bold;
    font-family: Arial, sans-serif;
  }

  .adboost-ad h3 {
    margin: 0 0 10px 0;
    font-size: 24px;
  }

  .adboost-ad p {
    margin: 0;
    font-size: 16px;
  }

  .adboost-floating {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 999999;
    max-width: 280px;
  }

  /* === STYLE A: RAINBOW (Original) === */
  .adboost-rainbow {
    background: linear-gradient(135deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3);
    background-size: 400% 400%;
    animation: adboost-gradient 3s ease infinite, adboost-bounce 0.5s ease infinite alternate;
    border: 4px dashed #000;
    font-family: "Comic Sans MS", "Chalkboard SE", cursive;
    box-shadow: 5px 5px 0 #000;
  }

  .adboost-rainbow h3 {
    color: #000;
    text-shadow: 2px 2px #fff;
    text-transform: uppercase;
  }

  .adboost-rainbow p {
    color: #333;
  }

  /* === STYLE B: 90s RETRO WEB === */
  .adboost-retro {
    background: #000080 url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2"><circle cx="1" cy="1" r="0.5" fill="white" fill-opacity="0.3"/></svg>');
    background-size: 3px 3px;
    border: 4px outset #c0c0c0;
    font-family: "Times New Roman", serif;
    box-shadow: inset -2px -2px 0 #808080, inset 2px 2px 0 #ffffff;
  }

  .adboost-retro h3 {
    color: #ffff00;
    text-shadow: 2px 2px #ff00ff;
    animation: adboost-blink 1s step-end infinite;
    font-family: "Impact", sans-serif;
  }

  .adboost-retro p {
    color: #00ffff;
    animation: adboost-marquee 8s linear infinite;
  }

  .adboost-retro::after {
    content: "🚧 UNDER CONSTRUCTION 🚧";
    display: block;
    margin-top: 10px;
    font-size: 12px;
    color: #ff6600;
  }

  /* === STYLE C: NEWSPAPER CLASSIFIED === */
  .adboost-classified {
    background: #f5f0e1;
    border: 1px solid #333;
    border-top: 2px solid #333;
    border-bottom: 2px solid #333;
    font-family: "Times New Roman", Georgia, serif;
    padding: 10px 15px;
    text-align: left;
    box-shadow: none;
  }

  .adboost-classified::before {
    content: "CLASSIFIED";
    background: #333;
    color: #f5f0e1;
    font-family: "Times New Roman", serif;
    font-size: 8px;
    letter-spacing: 2px;
  }

  .adboost-classified h3 {
    color: #000;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-bottom: 1px dotted #666;
    padding-bottom: 5px;
    font-weight: bold;
  }

  .adboost-classified p {
    color: #333;
    font-size: 12px;
    line-height: 1.3;
    text-align: justify;
  }

  /* === STYLE D: DARK PATTERNS === */
  .adboost-darkpattern {
    background: linear-gradient(180deg, #2d2d2d, #1a1a1a);
    border: 2px solid #ff4444;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    box-shadow: 0 4px 20px rgba(255, 68, 68, 0.3);
    animation: adboost-urgent 0.5s ease-in-out infinite;
  }

  .adboost-darkpattern::before {
    content: "⚠️ URGENT";
    background: #ff4444;
    animation: adboost-pulse 1s ease-in-out infinite;
  }

  .adboost-darkpattern h3 {
    color: #fff;
    font-size: 20px;
  }

  .adboost-darkpattern p {
    color: #ccc;
  }

  .adboost-darkpattern .fake-close {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 20px;
    height: 20px;
    background: #666;
    color: #999;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-size: 12px;
    line-height: 20px;
  }

  .adboost-darkpattern .fake-close:hover::after {
    content: "Nice try!";
    position: absolute;
    top: 25px;
    right: 0;
    background: #ff4444;
    color: white;
    padding: 4px 8px;
    font-size: 10px;
    white-space: nowrap;
    border-radius: 4px;
  }

  .adboost-darkpattern .countdown {
    font-size: 14px;
    color: #ff4444;
    margin-top: 10px;
    font-weight: bold;
  }

  .adboost-darkpattern .viewers {
    font-size: 11px;
    color: #888;
    margin-top: 5px;
  }

  .adboost-darkpattern .fake-progress {
    width: 100%;
    height: 6px;
    background: #444;
    border-radius: 3px;
    margin-top: 10px;
    overflow: hidden;
  }

  .adboost-darkpattern .fake-progress-bar {
    height: 100%;
    background: linear-gradient(90deg, #ff4444, #ff8800);
    animation: adboost-progress 3s ease-in-out infinite;
  }

  /* === ANIMATIONS === */
  @keyframes adboost-gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @keyframes adboost-bounce {
    from { transform: translateY(0); }
    to { transform: translateY(-10px); }
  }

  @keyframes adboost-blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }

  @keyframes adboost-marquee {
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
  }

  @keyframes adboost-urgent {
    0%, 100% { border-color: #ff4444; }
    50% { border-color: #ff8800; }
  }

  @keyframes adboost-pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }

  @keyframes adboost-progress {
    0% { width: 73%; }
    50% { width: 89%; }
    100% { width: 73%; }
  }
`;
document.head.appendChild(style);

const injectAds = () => {
  const getRandomStyle = () =>
    STYLES[Math.floor(Math.random() * STYLES.length)];

  const createAdElement = (...classes) => {
    const ad = ADS[Math.floor(Math.random() * ADS.length)];
    const adStyle = ad.style || getRandomStyle();

    const div = document.createElement("div");
    div.classList.add("adboost-ad", `adboost-${adStyle}`, ...classes);

    let content = `<h3>${ad.headline}</h3><p>${ad.body}</p>`;

    // Add dark pattern extras
    if (adStyle === "darkpattern") {
      const viewers = Math.floor(Math.random() * 20) + 3;
      const minutes = Math.floor(Math.random() * 10) + 1;
      const seconds = Math.floor(Math.random() * 60);

      content = `
        <button class="fake-close">×</button>
        <h3>${ad.headline}</h3>
        <p>${ad.body}</p>
        <div class="countdown">⏰ Offer expires in ${minutes}:${seconds.toString().padStart(2, "0")}</div>
        <div class="viewers">👁 ${viewers} people viewing this right now</div>
        <div class="fake-progress"><div class="fake-progress-bar"></div></div>
      `;
    }

    div.innerHTML = content;
    return div;
  };

  [...document.querySelectorAll("p")]
    .filter((_, i) => (i + 1) % 4 === 0 && i <= 4 * 5)
    .forEach((p) =>
      p.parentNode.insertBefore(createAdElement(), p.nextSibling),
    );

  document.body.appendChild(createAdElement("adboost-floating"));
};

if (document.readyState !== "loading") injectAds();
else document.addEventListener("DOMContentLoaded", injectAds);
