/**
 * Mobile App Usage Inspector (ระบบตรวจสอบประวัติการเปิดแอปมือถือ)
 * Client-side Log Analyzer & Dashboard
 */

// 1. Comprehensive App Knowledge Base
const APP_DATABASE = {
  // Social & Chat
  "com.facebook.katana": { name: "Facebook", cat: "social", color: "#1877F2", icon: "f" },
  "com.facebook.orca": { name: "Messenger", cat: "chat", color: "#0084FF", icon: "💬" },
  "com.facebook.lite": { name: "Facebook Lite", cat: "social", color: "#1877F2", icon: "f" },
  "jp.naver.line.android": { name: "LINE", cat: "chat", color: "#06C755", icon: "L" },
  "com.instagram.android": { name: "Instagram", cat: "social", color: "#E1306C", icon: "📷" },
  "com.zhiliaoapp.musically": { name: "TikTok", cat: "video", color: "#FE2C55", icon: "🎵" },
  "com.ss.android.ugc.trill": { name: "TikTok", cat: "video", color: "#FE2C55", icon: "🎵" },
  "com.twitter.android": { name: "X (Twitter)", cat: "social", color: "#000000", icon: "𝕏" },
  "com.x.android": { name: "X (Twitter)", cat: "social", color: "#000000", icon: "𝕏" },
  "org.telegram.messenger": { name: "Telegram", cat: "chat", color: "#229ED9", icon: "✈️" },
  "com.whatsapp": { name: "WhatsApp", cat: "chat", color: "#25D366", icon: "📞" },
  "com.discord": { name: "Discord", cat: "chat", color: "#5865F2", icon: "🎮" },
  
  // Video & Entertainment
  "com.google.android.youtube": { name: "YouTube", cat: "video", color: "#FF0000", icon: "▶️" },
  "com.netflix.mediaclient": { name: "Netflix", cat: "video", color: "#E50914", icon: "N" },
  "com.spotify.music": { name: "Spotify", cat: "music", color: "#1DB954", icon: "🎧" },
  "in.startv.hotstar": { name: "Disney+ Hotstar", cat: "video", color: "#113CCF", icon: "⭐" },
  "com.tencent.qqlivei18n": { name: "WeTV", cat: "video", color: "#FF5C00", icon: "📺" },
  "com.viu.pad": { name: "Viu", cat: "video", color: "#FBBF24", icon: "🎬" },

  // Browsers
  "com.android.chrome": { name: "Google Chrome", cat: "browser", color: "#4285F4", icon: "🌐" },
  "com.sec.android.app.sbrowser": { name: "Samsung Internet", cat: "browser", color: "#6C5CE7", icon: "🌐" },
  "org.mozilla.firefox": { name: "Firefox", cat: "browser", color: "#FF7139", icon: "🦊" },
  "com.microsoft.emmx": { name: "Microsoft Edge", cat: "browser", color: "#0078D7", icon: "🌐" },

  // Banking & Shopping (Thailand)
  "com.kbank.kplus": { name: "K PLUS (กสิกรไทย)", cat: "finance", color: "#00A950", icon: "💚" },
  "com.scb.phone": { name: "SCB EASY (ไทยพาณิชย์)", cat: "finance", color: "#4E2A84", icon: "💜" },
  "ktb.cs.dpl.android": { name: "Krungthai NEXT (กรุงไทย)", cat: "finance", color: "#00A3E0", icon: "💙" },
  "com.bbl.mobilebanking": { name: "Bangkok Bank (กรุงเทพ)", cat: "finance", color: "#1E3A8A", icon: "🏦" },
  "com.ttbbank.oneapp": { name: "ttb touch (ทหารไทยธนชาต)", cat: "finance", color: "#002D62", icon: "🏦" },
  "com.truemoney.wallet": { name: "TrueMoney Wallet", cat: "finance", color: "#F97316", icon: "💳" },
  "com.shopee.th": { name: "Shopee", cat: "shopping", color: "#EE4D2D", icon: "🛍️" },
  "com.lazada.android": { name: "Lazada", cat: "shopping", color: "#0F146D", icon: "🛒" },
  "com.grabtaxi.passenger": { name: "Grab", cat: "service", color: "#00B14F", icon: "🚗" },
  "com.lineman.customer": { name: "LINE MAN", cat: "service", color: "#00B900", icon: "🛵" },
  "com.foodpanda.android": { name: "foodpanda", cat: "service", color: "#D70F64", icon: "🐼" },

  // Gaming
  "com.garena.game.kgth": { name: "Garena RoV", cat: "game", color: "#D97706", icon: "⚔️" },
  "com.dts.freefireth": { name: "Free Fire", cat: "game", color: "#EF4444", icon: "🔥" },
  "com.tencent.ig": { name: "PUBG Mobile", cat: "game", color: "#F59E0B", icon: "🎯" },
  "com.roblox.client": { name: "Roblox", cat: "game", color: "#000000", icon: "🧱" },
  "com.miHoYo.GenshinImpact": { name: "Genshin Impact", cat: "game", color: "#8B5CF6", icon: "✨" },

  // System & Utilities
  "com.google.android.dialer": { name: "โทรศัพท์ (Phone)", cat: "system", color: "#10B981", icon: "📞" },
  "com.samsung.android.dialer": { name: "โทรศัพท์ (Samsung Phone)", cat: "system", color: "#10B981", icon: "📞" },
  "com.google.android.apps.messaging": { name: "ข้อความ (Messages)", cat: "system", color: "#3B82F6", icon: "✉️" },
  "com.samsung.android.messaging": { name: "ข้อความ (Samsung Messages)", cat: "system", color: "#3B82F6", icon: "✉️" },
  "com.android.settings": { name: "การตั้งค่า (Settings)", cat: "system", color: "#64748B", icon: "⚙️" },
  "com.google.android.apps.photos": { name: "Google Photos (รูปภาพ)", cat: "system", color: "#E11D48", icon: "🖼️" },
  "com.sec.android.gallery3d": { name: "แกลเลอรี (Gallery)", cat: "system", color: "#E11D48", icon: "🖼️" },
  "com.google.android.gm": { name: "Gmail", cat: "work", color: "#EA4335", icon: "✉️" },
  "com.google.android.apps.maps": { name: "Google Maps", cat: "service", color: "#34A853", icon: "🗺️" },
  "com.android.vending": { name: "Google Play Store", cat: "system", color: "#00C853", icon: "🏪" },
  "com.sec.android.app.camera": { name: "กล้อง (Camera)", cat: "system", color: "#EF4444", icon: "📷" },
  "com.google.android.GoogleCamera": { name: "กล้อง (Camera)", cat: "system", color: "#EF4444", icon: "📷" },

  // Cheat & Mod Detection
  "ph4nt0m.lol": { name: "⚠️ Ph4nt0m (โปรแกรมช่วยเล่น)", cat: "cheat", color: "#f43f5e", icon: "🚨", isThreat: true },
  "https://ph4nt0m.lol/": { name: "⚠️ Ph4nt0m (โปรแกรมช่วยเล่น)", cat: "cheat", color: "#f43f5e", icon: "🚨", isThreat: true },
  "com.ph4nt0m.mod": { name: "⚠️ Ph4nt0m Mod Menu (โปรแกรมช่วยเล่น)", cat: "cheat", color: "#f43f5e", icon: "🚨", isThreat: true, isSideloaded: true },
  "com.gameguardian": { name: "⚠️ GameGuardian (โปรแกรมโกงเกม)", cat: "cheat", color: "#f43f5e", icon: "🚨", isThreat: true, isSideloaded: true },
  "com.lulubox": { name: "⚠️ Lulubox (ม็อดสกิน/ช่วยเล่น)", cat: "cheat", color: "#f43f5e", icon: "🚨", isThreat: true, isSideloaded: true },

  // iOS Apps & Sideload Tools
  "org.altstore.AltStore": { name: "AltStore (ลงแอปนอก iOS)", cat: "sideload", color: "#f97316", icon: "📦", os: "ios", isSideloaded: true },
  "com.scarlet.ios": { name: "Scarlet (ตัวติดตั้งแอปองค์กร iOS)", cat: "sideload", color: "#f43f5e", icon: "📦", os: "ios", isSideloaded: true },
  "com.trollstore.app": { name: "TrollStore (เจาะสิทธิ์ระบบ iOS)", cat: "sideload", color: "#8b5cf6", icon: "📦", os: "ios", isSideloaded: true },
  "com.happymod.apk": { name: "HappyMod (สโตร์ม็อดเกมภายนอก)", cat: "sideload", color: "#10b981", icon: "📦", os: "android", isSideloaded: true },
  "com.bityou.ph4nt0m": { name: "⚠️ Ph4nt0m iOS IPA (โปรแกรมช่วยเล่น)", cat: "cheat", color: "#f43f5e", icon: "🚨", os: "ios", isThreat: true, isSideloaded: true },
  "com.apple.mobilesafari": { name: "Safari (iOS)", cat: "browser", color: "#007aff", icon: "🧭", os: "ios" },
  "com.apple.Preferences": { name: "การตั้งค่า (Settings iOS)", cat: "system", color: "#8e8e93", icon: "⚙️", os: "ios" },
  "com.apple.camera": { name: "กล้อง (Camera iOS)", cat: "system", color: "#34c759", icon: "📷", os: "ios" },
  "com.tinder": { name: "Tinder", cat: "social", color: "#fe3c72", icon: "🔥", os: "android" }
};

const CATEGORY_NAMES = {
  social: "โซเชียลมีเดีย",
  chat: "แชท & สื่อสาร",
  video: "วิดีโอ & สตรีมมิ่ง",
  music: "เพลง & เสียง",
  browser: "เว็บเบราว์เซอร์",
  finance: "การเงิน & ธนาคาร",
  shopping: "ช้อปปิ้งออนไลน์",
  game: "เกมส์",
  work: "การทำงาน & เอกสาร",
  service: "บริการ & ขนส่ง",
  system: "ระบบ & เครื่องมือ",
  cheat: "⚠️ โปรแกรมช่วยเล่น",
  sideload: "📦 โปรแกรมนอก Store"
};

const CATEGORY_COLORS = {
  social: "#3b82f6",
  chat: "#10b981",
  video: "#ef4444",
  music: "#1db954",
  browser: "#06b6d4",
  finance: "#f59e0b",
  shopping: "#f97316",
  game: "#8b5cf6",
  work: "#c084fc",
  service: "#14b8a6",
  system: "#64748b",
  cheat: "#f43f5e",
  sideload: "#f97316"
};

// State
let appRecords = [];
let hourlyActivity = new Array(24).fill(0);

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  initDragDrop();
  loadSampleData(); // Load rich demo by default
});

// Tab Switching
function initTabs() {
  const tabs = document.querySelectorAll(".tab-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      document.querySelectorAll(".tab-pane").forEach(p => p.classList.remove("active"));
      
      tab.classList.add("active");
      const target = document.getElementById(tab.dataset.tab);
      if (target) target.classList.add("active");

      if (tab.dataset.tab === "tab-overview") {
        renderCharts();
      }
    });
  });
}

// Drag & Drop File Handling
function initDragDrop() {
  const dropZone = document.getElementById("drop-zone");
  const fileInput = document.getElementById("file-input");

  if (!dropZone || !fileInput) return;

  dropZone.addEventListener("click", () => fileInput.click());

  dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.classList.add("dragover");
  });

  dropZone.addEventListener("dragleave", () => {
    dropZone.classList.remove("dragover");
  });

  dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.classList.remove("dragover");
    if (e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0]);
    }
  });

  fileInput.addEventListener("change", (e) => {
    if (e.target.files.length > 0) {
      handleFile(e.target.files[0]);
    }
  });
}

function handleFile(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    const content = e.target.result;
    parseLogContent(content);
    showToast(`นำเข้าไฟล์ "${file.name}" เรียบร้อยแล้ว`);
  };
  reader.readAsText(file);
}

// Parse Raw Text (Dumpsys, JSON, or Custom formats)
function parseLogContent(text) {
  const parsedRecords = [];
  hourlyActivity = new Array(24).fill(0);

  // Check if JSON
  let isJson = false;
  try {
    const json = JSON.parse(text);
    isJson = true;
    if (Array.isArray(json)) {
      json.forEach(item => {
        parsedRecords.push({
          pkg: item.package || item.pkg || "unknown.app",
          lastUsed: item.lastUsed ? new Date(item.lastUsed) : new Date(),
          durationMs: (item.durationMinutes || 10) * 60 * 1000,
          launchCount: item.launchCount || 1
        });
      });
    }
  } catch (err) {
    isJson = false;
  }

  if (!isJson) {
    // Regex matching Android dumpsys usagestats
    // Pattern 1: package=com.foo.bar total="1:23:45" lastTime="2026-10-17 14:20:00"
    // Pattern 2: time="2026-10-17 14:20:00" type=MOVE_TO_FOREGROUND package=com.foo.bar
    const lines = text.split("\n");
    lines.forEach(line => {
      let pkgMatch = line.match(/package=([a-zA-Z0-9_\.]+)/) || line.match(/pkg=([a-zA-Z0-9_\.]+)/);
      if (!pkgMatch) {
        // Line starting with package name: com.android.chrome 1h 20m
        pkgMatch = line.match(/^([a-zA-Z0-9_\.]{4,})/);
      }

      if (pkgMatch) {
        const pkg = pkgMatch[1];
        if (pkg.includes(".") && !pkg.includes("android.os") && !pkg.includes("android.view")) {
          // Parse time if present
          let timeMatch = line.match(/(\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2})/) || line.match(/(\d{2}:\d{2}:\d{2})/);
          let recordTime = new Date();
          if (timeMatch) {
            recordTime = new Date(timeMatch[1].length === 8 ? `${new Date().toISOString().slice(0, 10)} ${timeMatch[1]}` : timeMatch[1]);
          }

          // Parse duration
          let durationMs = 5 * 60 * 1000; // default 5 min
          let totalMatch = line.match(/total="?([0-9:]+)"?/);
          if (totalMatch) {
            const parts = totalMatch[1].split(":").map(Number);
            if (parts.length === 3) durationMs = (parts[0] * 3600 + parts[1] * 60 + parts[2]) * 1000;
            else if (parts.length === 2) durationMs = (parts[0] * 60 + parts[1]) * 1000;
          }

          parsedRecords.push({
            pkg: pkg,
            lastUsed: isNaN(recordTime.getTime()) ? new Date() : recordTime,
            durationMs: durationMs,
            launchCount: 1
          });
        }
      }
    });
  }

  // Security Scan: Check for cheat domains like ph4nt0m.lol
  let detectedThreat = null;
  const lowerText = text.toLowerCase();
  if (lowerText.includes("ph4nt0m.lol") || lowerText.includes("ph4nt0m") || lowerText.includes("phantom.lol")) {
    detectedThreat = "https://ph4nt0m.lol/";
    // Inject threat record to list
    parsedRecords.unshift({
      pkg: "ph4nt0m.lol",
      lastUsed: new Date(),
      durationMs: 45 * 60 * 1000,
      launchCount: 3,
      isThreat: true
    });
  }

  if (parsedRecords.length === 0) {
    showToast("ไม่พบข้อมูลรูปแบบที่ถูกต้อง กำลังโหลดข้อมูลตัวอย่างแทน", true);
    loadSampleData();
    return;
  }

  // Aggregate by package
  const aggMap = new Map();
  parsedRecords.forEach(rec => {
    if (!aggMap.has(rec.pkg)) {
      aggMap.set(rec.pkg, { ...rec });
    } else {
      const existing = aggMap.get(rec.pkg);
      existing.durationMs += rec.durationMs;
      existing.launchCount += 1;
      if (rec.lastUsed > existing.lastUsed) {
        existing.lastUsed = rec.lastUsed;
      }
      if (rec.isThreat) existing.isThreat = true;
    }
    // Hourly distribution
    const hour = rec.lastUsed.getHours();
    hourlyActivity[hour] = (hourlyActivity[hour] || 0) + 1;
  });

  appRecords = Array.from(aggMap.values());
  updateDashboard();

  if (detectedThreat) {
    triggerThreatAlert(detectedThreat);
  } else {
    dismissThreatAlert();
  }

  switchTab("tab-overview");
}

// Load Rich Demo Data (24h mobile usage with Deleted & Sideloaded apps)
function loadSampleData() {
  const now = new Date();
  const demoList = [
    { pkg: "jp.naver.line.android", hoursAgo: 0.1, durationMin: 125, launches: 32, os: "android", installer: "Google Play Store" },
    { pkg: "com.zhiliaoapp.musically", hoursAgo: 0.5, durationMin: 180, launches: 14, os: "android", installer: "Google Play Store" },
    { pkg: "com.facebook.katana", hoursAgo: 1.2, durationMin: 95, launches: 21, os: "android", installer: "Google Play Store" },
    { pkg: "com.google.android.youtube", hoursAgo: 2.5, durationMin: 210, launches: 9, os: "android", installer: "Google Play Store" },
    { pkg: "com.instagram.android", hoursAgo: 3.1, durationMin: 80, launches: 18, os: "android", installer: "Google Play Store" },
    { pkg: "com.android.chrome", hoursAgo: 4.0, durationMin: 65, launches: 15, os: "android", installer: "Google Play Store" },
    
    // Sideloaded / โปรแกรมนอก Store (Android)
    { pkg: "com.happymod.apk", hoursAgo: 6.0, durationMin: 45, launches: 6, os: "android", isSideloaded: true, installer: "com.android.chrome (ไฟล์ APK นอก Store)" },
    { pkg: "com.ph4nt0m.mod", hoursAgo: 2.1, durationMin: 60, launches: 5, os: "android", isThreat: true, isSideloaded: true, isDeleted: true, installer: "ph4nt0m.lol APK (ถอนการติดตั้งแล้ว)" },
    
    // Deleted Apps / แอปที่ถูกลบไปแล้วแต่ตรวจพบประวัติค้างอยู่
    { pkg: "com.tinder", hoursAgo: 18.0, durationMin: 35, launches: 8, os: "android", isDeleted: true, installer: "Google Play Store (ถอนการติดตั้งแล้ว)" },
    { pkg: "com.gameguardian", hoursAgo: 28.0, durationMin: 110, launches: 12, os: "android", isThreat: true, isSideloaded: true, isDeleted: true, installer: "ไฟล์ APK ภายนอก (ถอนการติดตั้งแล้ว)" },
    
    // iOS Apps (iPhone)
    { pkg: "com.apple.mobilesafari", hoursAgo: 0.8, durationMin: 70, launches: 19, os: "ios", installer: "Apple iOS System" },
    { pkg: "org.altstore.AltStore", hoursAgo: 14.0, durationMin: 25, launches: 4, os: "ios", isSideloaded: true, installer: "AltServer PC (Sideload IPA)" },
    { pkg: "com.bityou.ph4nt0m", hoursAgo: 1.5, durationMin: 85, launches: 7, os: "ios", isThreat: true, isSideloaded: true, installer: "Scarlet Enterprise Profile (iOS)" },
    { pkg: "com.apple.camera", hoursAgo: 16.0, durationMin: 15, launches: 5, os: "ios", installer: "Apple iOS System" },

    { pkg: "com.kbank.kplus", hoursAgo: 4.8, durationMin: 14, launches: 4, os: "android", installer: "Google Play Store" },
    { pkg: "com.shopee.th", hoursAgo: 7.2, durationMin: 45, launches: 8, os: "android", installer: "Google Play Store" },
    { pkg: "com.garena.game.kgth", hoursAgo: 8.5, durationMin: 90, launches: 3, os: "android", installer: "Google Play Store" },
    { pkg: "com.spotify.music", hoursAgo: 11.0, durationMin: 140, launches: 6, os: "android", installer: "Google Play Store" },
    { pkg: "com.android.settings", hoursAgo: 21.0, durationMin: 10, launches: 4, os: "android", installer: "System" }
  ];

  hourlyActivity = [1, 0, 0, 0, 0, 2, 5, 12, 18, 14, 16, 22, 19, 15, 17, 24, 28, 35, 42, 38, 29, 20, 11, 4];

  appRecords = demoList.map(item => {
    const time = new Date(now.getTime() - item.hoursAgo * 3600 * 1000);
    return {
      pkg: item.pkg,
      lastUsed: time,
      durationMs: item.durationMin * 60 * 1000,
      launchCount: item.launches,
      os: item.os || "android",
      installer: item.installer || (item.os === "ios" ? "Apple App Store" : "Google Play Store"),
      isDeleted: item.isDeleted || false,
      isSideloaded: item.isSideloaded || false,
      isThreat: item.isThreat || false
    };
  });

  updateDashboard();
}

// Update KPI Stats, Table, Timeline, Charts
function updateDashboard() {
  if (appRecords.length === 0) return;

  // Sort descending by last used time
  appRecords.sort((a, b) => b.lastUsed - a.lastUsed);

  // 1. KPI Stats
  const totalApps = appRecords.length;
  const totalDurationMs = appRecords.reduce((sum, r) => sum + r.durationMs, 0);
  const totalHours = (totalDurationMs / (1000 * 60 * 60)).toFixed(1);
  const mostRecent = appRecords[0];
  const mostUsed = [...appRecords].sort((a, b) => b.durationMs - a.durationMs)[0];

  const deletedCount = appRecords.filter(r => r.isDeleted).length;
  const sideloadCount = appRecords.filter(r => r.isSideloaded).length;

  document.getElementById("stat-total-apps").textContent = totalApps;
  document.getElementById("stat-total-time").textContent = `${totalHours} ชม.`;
  
  const elDeleted = document.getElementById("stat-deleted-count");
  if (elDeleted) elDeleted.textContent = deletedCount;
  
  const elSideload = document.getElementById("stat-sideload-count");
  if (elSideload) elSideload.textContent = sideloadCount;

  const badgeDeleted = document.getElementById("badge-deleted-total");
  if (badgeDeleted) badgeDeleted.textContent = `${deletedCount} รายการ`;

  const badgeSideload = document.getElementById("badge-sideload-total");
  if (badgeSideload) badgeSideload.textContent = `${sideloadCount} รายการ`;

  // 2. Render Table
  renderAppTable();

  // 3. Render Timeline
  renderTimeline();

  // 4. Render Deleted & Sideloaded Panels
  renderDeletedAndSideloadedPanels();

  // 5. Render Charts
  renderCharts();
}

// Helper: Resolve app metadata from database
function resolveAppMeta(pkg) {
  if (APP_DATABASE[pkg]) {
    return APP_DATABASE[pkg];
  }
  // Fallback detection
  const parts = pkg.split(".");
  const rawName = parts[parts.length - 1];
  const cleanName = rawName.charAt(0).toUpperCase() + rawName.slice(1);
  const isIos = pkg.startsWith("com.apple.") || pkg.toLowerCase().includes("ios");
  return {
    name: cleanName,
    cat: pkg.includes("android") || pkg.includes("system") || pkg.includes("apple") ? "system" : "work",
    color: "#64748b",
    icon: cleanName.charAt(0),
    os: isIos ? "ios" : "android"
  };
}

// Render Table with OS & Status Filtering
function renderAppTable() {
  const tbody = document.getElementById("app-table-body");
  if (!tbody) return;

  const searchQuery = (document.getElementById("search-input")?.value || "").toLowerCase();
  const categoryFilter = document.getElementById("category-filter")?.value || "all";
  const osFilter = document.getElementById("os-filter")?.value || "all";
  const statusFilter = document.getElementById("status-filter")?.value || "all";
  const sortBy = document.getElementById("sort-filter")?.value || "time";

  const maxDuration = Math.max(...appRecords.map(r => r.durationMs), 1);

  // Filter
  let filtered = appRecords.filter(rec => {
    const meta = resolveAppMeta(rec.pkg);
    const os = rec.os || meta.os || "android";
    const isThreatItem = meta.isThreat || rec.isThreat;
    const isDeleted = rec.isDeleted === true;
    const isSideloaded = rec.isSideloaded === true || meta.isSideloaded === true;

    // Search filter
    const matchSearch = meta.name.toLowerCase().includes(searchQuery) || rec.pkg.toLowerCase().includes(searchQuery);
    
    // Category filter
    const matchCat = categoryFilter === "all" || meta.cat === categoryFilter;

    // OS filter
    const matchOs = osFilter === "all" || os === osFilter;

    // Status filter
    let matchStatus = true;
    if (statusFilter === "deleted") matchStatus = isDeleted;
    else if (statusFilter === "sideload") matchStatus = isSideloaded;
    else if (statusFilter === "cheat") matchStatus = isThreatItem;
    else if (statusFilter === "installed") matchStatus = !isDeleted;

    return matchSearch && matchCat && matchOs && matchStatus;
  });

  // Sort
  if (sortBy === "time") {
    filtered.sort((a, b) => b.lastUsed - a.lastUsed);
  } else if (sortBy === "duration") {
    filtered.sort((a, b) => b.durationMs - a.durationMs);
  } else if (sortBy === "launches") {
    filtered.sort((a, b) => b.launchCount - a.launchCount);
  }

  tbody.innerHTML = "";

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding: 40px; color: var(--text-dim);">ไม่พบข้อมูลแอปที่ตรงกับเงื่อนไขการค้นหา</td></tr>`;
    return;
  }

  filtered.forEach((rec, idx) => {
    const meta = resolveAppMeta(rec.pkg);
    const os = rec.os || meta.os || "android";
    const tr = document.createElement("tr");
    const isThreatItem = meta.isThreat || rec.isThreat;
    const isDeleted = rec.isDeleted === true;
    const isSideloaded = rec.isSideloaded === true || meta.isSideloaded === true;

    if (isThreatItem) {
      tr.className = "table-row-threat";
    }

    const durationMin = Math.round(rec.durationMs / (1000 * 60));
    const durationText = durationMin >= 60 ? `${Math.floor(durationMin / 60)} ชม. ${durationMin % 60} น.` : `${durationMin} นาที`;
    const percent = Math.min(100, Math.round((rec.durationMs / maxDuration) * 100));

    // Status HTML
    let statusHtml = "";
    if (isThreatItem) {
      statusHtml += '<span class="badge badge-cheat">⚠️ โปรแกรมช่วยเล่น</span> ';
    }
    if (isDeleted) {
      statusHtml += '<span class="badge badge-deleted">❌ ถูกลบไปแล้ว</span>';
    } else if (isSideloaded) {
      statusHtml += '<span class="badge badge-sideload">📦 โปรแกรมนอก Store</span>';
    } else {
      statusHtml += '<span class="badge" style="background:rgba(16,185,129,0.15); color:#34d399;">🟢 ติดตั้งอยู่</span>';
    }

    const installerText = rec.installer || (os === "ios" ? "Apple App Store" : "Google Play Store");

    tr.innerHTML = `
      <td>
        <div class="app-info-cell">
          <div class="app-avatar" style="background: ${meta.color};">${meta.icon}</div>
          <div class="app-details">
            <div class="app-name">
              ${meta.name}
            </div>
            <div class="app-pkg">${rec.pkg}</div>
          </div>
        </div>
      </td>
      <td>
        <div style="display:flex; flex-direction:column; gap:4px;">
          ${os === 'ios' ? '<span class="badge badge-ios" style="align-self:flex-start;">🍎 iOS</span>' : '<span class="badge" style="background:rgba(59,130,246,0.15); color:#60a5fa; align-self:flex-start;">🤖 Android</span>'}
          <span class="badge badge-${meta.cat}" style="align-self:flex-start;">${CATEGORY_NAMES[meta.cat] || meta.cat}</span>
        </div>
      </td>
      <td>
        <div>${statusHtml}</div>
        <div style="font-size: 0.75rem; color: var(--text-dim); margin-top: 4px;">แหล่งที่มา: ${installerText}</div>
      </td>
      <td>
        <div>${formatExactTime(rec.lastUsed)}</div>
        <div style="font-size: 0.78rem; color: var(--text-dim);">${formatTimeAgo(rec.lastUsed)}</div>
      </td>
      <td>
        <div><strong>${durationText}</strong></div>
        <div class="progress-wrap">
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" style="width: ${percent}%; ${isThreatItem ? 'background:#f43f5e;' : ''}"></div>
          </div>
        </div>
      </td>
      <td>
        <span style="font-weight: 600; color: #fff;">${rec.launchCount} ครั้ง</span>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// Render Deleted & Sideloaded Panels
function renderDeletedAndSideloadedPanels() {
  const deletedListEl = document.getElementById("deleted-apps-list");
  const sideloadListEl = document.getElementById("sideloaded-apps-list");

  if (deletedListEl) {
    const deletedApps = appRecords.filter(r => r.isDeleted);
    deletedListEl.innerHTML = "";
    if (deletedApps.length === 0) {
      deletedListEl.innerHTML = `<div style="text-align:center; padding:30px; color:var(--text-dim);">ไม่พบแอปที่ถูกลบในข้อมูลปัจจุบัน</div>`;
    } else {
      deletedApps.forEach(rec => {
        const meta = resolveAppMeta(rec.pkg);
        const card = document.createElement("div");
        card.style.cssText = "background:rgba(255,255,255,0.03); border:1px solid rgba(244,63,94,0.3); border-radius:var(--radius-sm); padding:12px 16px; display:flex; align-items:center; justify-content:space-between; gap:12px;";
        card.innerHTML = `
          <div style="display:flex; align-items:center; gap:12px;">
            <div class="app-avatar" style="width:38px; height:38px; font-size:1.1rem; background:rgba(244,63,94,0.2); color:#fda4af;">❌</div>
            <div>
              <div style="font-weight:600; color:#fff; display:flex; align-items:center; gap:6px;">
                ${meta.name}
                ${meta.isThreat ? '<span class="badge badge-cheat">⚠️ โปรแกรมช่วยเล่น</span>' : ''}
              </div>
              <div style="font-size:0.75rem; color:var(--text-dim);">${rec.pkg}</div>
              <div style="font-size:0.72rem; color:#fda4af; margin-top:2px;">ร่องรอย: ${rec.installer || 'ตรวจพบในแคช / Package Log'}</div>
            </div>
          </div>
          <div style="text-align:right;">
            <span class="badge badge-deleted">ถอนการติดตั้งแล้ว</span>
            <div style="font-size:0.75rem; color:var(--text-dim); margin-top:4px;">ใช้งานล่าสุด: ${formatTimeAgo(rec.lastUsed)}</div>
          </div>
        `;
        deletedListEl.appendChild(card);
      });
    }
  }

  if (sideloadListEl) {
    const sideloadedApps = appRecords.filter(r => r.isSideloaded);
    sideloadListEl.innerHTML = "";
    if (sideloadedApps.length === 0) {
      sideloadListEl.innerHTML = `<div style="text-align:center; padding:30px; color:var(--text-dim);">ไม่พบโปรแกรมนอก Store</div>`;
    } else {
      sideloadedApps.forEach(rec => {
        const meta = resolveAppMeta(rec.pkg);
        const os = rec.os || meta.os || "android";
        const card = document.createElement("div");
        card.style.cssText = "background:rgba(255,255,255,0.03); border:1px solid rgba(249,115,22,0.3); border-radius:var(--radius-sm); padding:12px 16px; display:flex; align-items:center; justify-content:space-between; gap:12px;";
        card.innerHTML = `
          <div style="display:flex; align-items:center; gap:12px;">
            <div class="app-avatar" style="width:38px; height:38px; font-size:1.1rem; background:rgba(249,115,22,0.2); color:#fdba74;">📦</div>
            <div>
              <div style="font-weight:600; color:#fff; display:flex; align-items:center; gap:6px;">
                ${meta.name}
                ${os === 'ios' ? '<span class="badge badge-ios">🍎 iOS</span>' : '<span class="badge" style="background:rgba(59,130,246,0.15); color:#60a5fa;">🤖 Android</span>'}
              </div>
              <div style="font-size:0.75rem; color:var(--text-dim);">${rec.pkg}</div>
              <div style="font-size:0.72rem; color:#fdba74; margin-top:2px;">แหล่งติดตั้ง: ${rec.installer || 'ไม่ระบุที่มา'}</div>
            </div>
          </div>
          <div style="text-align:right;">
            <span class="badge badge-sideload">โปรแกรมนอก Store</span>
            <div style="font-size:0.75rem; color:var(--text-dim); margin-top:4px;">ใช้งานรวม: ${Math.round(rec.durationMs / 60000)} นาที</div>
          </div>
        `;
        sideloadListEl.appendChild(card);
      });
    }
  }
}

// Render Timeline Feed
function renderTimeline() {
  const container = document.getElementById("timeline-container");
  if (!container) return;

  container.innerHTML = "";
  const sorted = [...appRecords].sort((a, b) => b.lastUsed - a.lastUsed);

  sorted.slice(0, 15).forEach(rec => {
    const meta = resolveAppMeta(rec.pkg);
    const isThreatItem = meta.isThreat || rec.isThreat;
    const durationMin = Math.round(rec.durationMs / (1000 * 60));
    const durationText = durationMin >= 60 ? `${Math.floor(durationMin / 60)} ชม. ${durationMin % 60} น.` : `${durationMin} นาที`;

    const item = document.createElement("div");
    item.className = "timeline-item";

    if (isThreatItem) {
      item.innerHTML = `
        <div class="timeline-dot" style="background: #f43f5e; box-shadow: 0 0 15px #f43f5e;"></div>
        <div class="timeline-card" style="border: 2px solid #f43f5e; background: rgba(244, 63, 94, 0.15);">
          <div style="display:flex; align-items:center; gap:12px;">
            <div class="app-avatar" style="width: 36px; height: 36px; font-size: 1.1rem; background: #f43f5e;">🚨</div>
            <div>
              <div style="font-weight:700; color:#fff;">⚠️ ตรวจพบประวัติเข้าใช้งานโปรแกรมช่วยเล่น: ${meta.name}</div>
              <div style="font-size:0.75rem; color:#fca5a5;">${rec.pkg} &bull; ลิงก์ต้องสงสัย: https://ph4nt0m.lol/</div>
            </div>
          </div>
          <div style="text-align: right;">
            <div class="timeline-time" style="color:#f43f5e;">${formatExactTime(rec.lastUsed)}</div>
            <div style="font-size:0.8rem; color:#fca5a5; font-weight:bold;">🚨 โปรแกรมช่วยเล่นในเครื่อง</div>
          </div>
        </div>
      `;
    } else {
      item.innerHTML = `
        <div class="timeline-dot" style="background: ${meta.color}; box-shadow: 0 0 10px ${meta.color};"></div>
        <div class="timeline-card">
          <div style="display:flex; align-items:center; gap:12px;">
            <div class="app-avatar" style="width: 36px; height: 36px; font-size: 1rem; background: ${meta.color};">${meta.icon}</div>
            <div>
              <div style="font-weight:600; color:#fff;">${meta.name}</div>
              <div style="font-size:0.75rem; color:var(--text-dim);">${rec.pkg}</div>
            </div>
          </div>
          <div style="text-align: right;">
            <div class="timeline-time">${formatExactTime(rec.lastUsed)}</div>
            <div style="font-size:0.8rem; color:var(--text-muted);">เปิดใช้งานนาน ${durationText}</div>
          </div>
        </div>
      `;
    }
    container.appendChild(item);
  });
}

// Render Charts via HTML5 Canvas
function renderCharts() {
  renderHourlyBarChart();
  renderCategoryDonut();
}

function renderHourlyBarChart() {
  const canvas = document.getElementById("hourly-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const w = canvas.width = canvas.parentElement.clientWidth;
  const h = canvas.height = canvas.parentElement.clientHeight || 260;

  ctx.clearRect(0, 0, w, h);

  const paddingLeft = 35;
  const paddingBottom = 30;
  const chartW = w - paddingLeft - 20;
  const chartH = h - paddingBottom - 20;

  const maxVal = Math.max(...hourlyActivity, 10);
  const barWidth = (chartW / 24) * 0.7;
  const step = chartW / 24;

  // Grid lines
  ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = 20 + (chartH / 4) * i;
    ctx.beginPath();
    ctx.moveTo(paddingLeft, y);
    ctx.lineTo(w - 20, y);
    ctx.stroke();

    ctx.fillStyle = "#64748b";
    ctx.font = "10px sans-serif";
    ctx.fillText(Math.round(maxVal - (maxVal / 4) * i), 5, y + 4);
  }

  // Draw Bars
  hourlyActivity.forEach((val, hour) => {
    const x = paddingLeft + hour * step + (step - barWidth) / 2;
    const barH = (val / maxVal) * chartH;
    const y = 20 + chartH - barH;

    // Gradient bar
    const grad = ctx.createLinearGradient(0, y, 0, y + barH);
    grad.addColorStop(0, "#06b6d4");
    grad.addColorStop(1, "rgba(59, 130, 246, 0.4)");

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.roundRect(x, y, barWidth, barH, [4, 4, 0, 0]);
    ctx.fill();

    // Hour label
    if (hour % 3 === 0) {
      ctx.fillStyle = "#94a3b8";
      ctx.font = "10px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(`${hour}:00`, x + barWidth / 2, h - 8);
    }
  });
}

function renderCategoryDonut() {
  const canvas = document.getElementById("donut-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const w = canvas.width = canvas.parentElement.clientWidth;
  const h = canvas.height = canvas.parentElement.clientHeight || 260;

  ctx.clearRect(0, 0, w, h);

  // Group duration by category
  const catTotals = {};
  let totalTime = 0;
  appRecords.forEach(rec => {
    const meta = resolveAppMeta(rec.pkg);
    catTotals[meta.cat] = (catTotals[meta.cat] || 0) + rec.durationMs;
    totalTime += rec.durationMs;
  });

  const centerX = w / 2;
  const centerY = h / 2;
  const radius = Math.min(centerX, centerY) - 25;
  const innerRadius = radius * 0.6;

  let startAngle = -0.5 * Math.PI;

  const legendContainer = document.getElementById("category-legend");
  if (legendContainer) legendContainer.innerHTML = "";

  const sortedCats = Object.entries(catTotals).sort((a, b) => b[1] - a[1]);

  sortedCats.forEach(([cat, duration]) => {
    const sliceAngle = (duration / totalTime) * 2 * Math.PI;
    const color = CATEGORY_COLORS[cat] || "#64748b";

    // Draw donut slice
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle);
    ctx.arc(centerX, centerY, innerRadius, startAngle + sliceAngle, startAngle, true);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();

    startAngle += sliceAngle;

    // Add legend row
    if (legendContainer) {
      const percent = Math.round((duration / totalTime) * 100);
      const row = document.createElement("div");
      row.className = "category-row";
      row.innerHTML = `
        <div class="cat-indicator">
          <div class="cat-dot" style="background: ${color};"></div>
          <span>${CATEGORY_NAMES[cat] || cat}</span>
        </div>
        <div class="cat-percent">${percent}%</div>
      `;
      legendContainer.appendChild(row);
    }
  });

  // Center text
  ctx.fillStyle = "#fff";
  ctx.font = "bold 18px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("หมวดหมู่", centerX, centerY - 8);
  ctx.font = "12px sans-serif";
  ctx.fillStyle = "#94a3b8";
  ctx.fillText("การใช้งาน", centerX, centerY + 12);
}

// Helpers
function formatExactTime(d) {
  const pad = n => String(n).padStart(2, "0");
  return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

function formatTimeAgo(d) {
  const diffSec = Math.floor((new Date() - d) / 1000);
  if (diffSec < 60) return "เมื่อสักครู่";
  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) return `${diffMin} นาทีที่แล้ว`;
  const diffHours = Math.floor(diffMin / 60);
  if (diffHours < 24) return `${diffHours} ชั่วโมงที่แล้ว`;
  return `${Math.floor(diffHours / 24)} วันที่แล้ว`;
}

function switchTab(tabId) {
  const btn = document.querySelector(`[data-tab="${tabId}"]`);
  if (btn) btn.click();
}

function showToast(msg, isError = false) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>${isError ? "⚠️" : "✅"}</span> <span>${msg}</span>`;
  toast.style.borderColor = isError ? "var(--accent-rose)" : "var(--accent-cyan)";
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3500);
}

function copyAdbCommand(cmd) {
  navigator.clipboard.writeText(cmd).then(() => {
    showToast("คัดลอกคำสั่งไปยัง Clipboard แล้ว!");
  });
}

// WebUSB Device Connection
async function requestUsbDevice() {
  if (!("usb" in navigator)) {
    showToast("เบราว์เซอร์นี้ไม่รองรับ WebUSB (กรุณาใช้ Google Chrome หรือ MS Edge)", true);
    return;
  }
  try {
    const device = await navigator.usb.requestDevice({
      filters: [{ classCode: 255 }] // ADB class
    });
    showToast(`เชื่อมต่ออุปกรณ์ USB สำเร็จ: ${device.productName || "Android Device"}`);
  } catch (err) {
    if (err.name !== "NotFoundError") {
      showToast(`การเชื่อมต่อล้มเหลว: ${err.message}`, true);
    }
  }
}

// Export Report
function exportData(format = "csv") {
  if (appRecords.length === 0) {
    showToast("ไม่มีข้อมูลสำหรับส่งออก", true);
    return;
  }

  let content = "";
  let mimeType = "text/csv;charset=utf-8;";
  let filename = `App_Usage_Report_${new Date().toISOString().slice(0, 10)}.csv`;

  if (format === "csv") {
    content = "AppName,PackageName,Category,LastOpened,DurationMinutes,LaunchCount\n";
    appRecords.forEach(r => {
      const meta = resolveAppMeta(r.pkg);
      const min = Math.round(r.durationMs / (1000 * 60));
      content += `"${meta.name}","${r.pkg}","${meta.cat}","${formatExactTime(r.lastUsed)}",${min},${r.launchCount}\n`;
    });
  } else {
    mimeType = "application/json;charset=utf-8;";
    filename = `App_Usage_Report_${new Date().toISOString().slice(0, 10)}.json`;
    content = JSON.stringify(appRecords.map(r => ({
      name: resolveAppMeta(r.pkg).name,
      package: r.pkg,
      category: resolveAppMeta(r.pkg).cat,
      lastOpened: r.lastUsed.toISOString(),
      durationMinutes: Math.round(r.durationMs / (1000 * 60)),
      launchCount: r.launchCount
    })), null, 2);
  }

  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  showToast(`ดาวน์โหลดรายงาน ${filename} สำเร็จ`);
}

// Window resize chart repaint
window.addEventListener("resize", () => {
  renderCharts();
});

// Threat / Cheat Detection Handlers
function triggerThreatAlert(url = "https://ph4nt0m.lol/") {
  const banner = document.getElementById("threat-banner");
  const urlText = document.getElementById("threat-url-text");
  if (urlText) urlText.textContent = url;
  if (banner) {
    banner.classList.add("active");
    banner.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  showToast("🚨 ตรวจพบเว็บไซต์/โปรแกรมช่วยเล่นในเครื่อง: " + url, true);
}

function dismissThreatAlert() {
  const banner = document.getElementById("threat-banner");
  if (banner) {
    banner.classList.remove("active");
  }
}

function viewThreatDetails() {
  switchTab("tab-apps");
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.value = "ph4nt0m";
    renderAppTable();
  }
  const categoryFilter = document.getElementById("category-filter");
  if (categoryFilter) {
    categoryFilter.value = "cheat";
    renderAppTable();
  }
}

function triggerCheatTest() {
  // Inject ph4nt0m cheat record into app records
  const existingIdx = appRecords.findIndex(r => r.pkg === "ph4nt0m.lol" || r.pkg.includes("ph4nt0m"));
  const now = new Date();

  if (existingIdx >= 0) {
    appRecords[existingIdx].lastUsed = now;
    appRecords[existingIdx].launchCount += 1;
    appRecords[existingIdx].isThreat = true;
  } else {
    appRecords.unshift({
      pkg: "ph4nt0m.lol",
      lastUsed: now,
      durationMs: 45 * 60 * 1000,
      launchCount: 5,
      isThreat: true
    });
  }

  // Update hourly
  hourlyActivity[now.getHours()] = (hourlyActivity[now.getHours()] || 0) + 1;

  updateDashboard();
  triggerThreatAlert("https://ph4nt0m.lol/");
  switchTab("tab-overview");
}

function simulateIosThreatTest() {
  const now = new Date();
  
  // Inject iOS threat items
  const iosCheatIdx = appRecords.findIndex(r => r.pkg === "com.bityou.ph4nt0m");
  if (iosCheatIdx >= 0) {
    appRecords[iosCheatIdx].lastUsed = now;
    appRecords[iosCheatIdx].launchCount += 1;
    appRecords[iosCheatIdx].isThreat = true;
  } else {
    appRecords.unshift({
      pkg: "com.bityou.ph4nt0m",
      lastUsed: now,
      durationMs: 85 * 60 * 1000,
      launchCount: 7,
      os: "ios",
      installer: "Scarlet Enterprise Profile (iOS Mod)",
      isSideloaded: true,
      isThreat: true
    });
  }

  // Also ensure AltStore is present
  if (!appRecords.some(r => r.pkg === "org.altstore.AltStore")) {
    appRecords.push({
      pkg: "org.altstore.AltStore",
      lastUsed: new Date(now.getTime() - 3600 * 1000 * 4),
      durationMs: 25 * 60 * 1000,
      launchCount: 3,
      os: "ios",
      installer: "AltServer Sideload (iOS)",
      isSideloaded: true
    });
  }

  updateDashboard();
  triggerThreatAlert("https://ph4nt0m.lol/ (ตรวจพบหลักฐานโปรแกรมนอกบน iOS)");
  switchTab("tab-deleted-sideload");
  showToast("🍎 จำลองตรวจพบโปรแกรมนอก & โปรแกรมช่วยเล่นบน iOS เรียบร้อยแล้ว!", true);
}


