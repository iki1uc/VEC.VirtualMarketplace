<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>◈ LÄUFER · TMP · USER-TREE · UNI · iki1uc</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box;}
  :root{
    --bg:#03060c; --fg:#c8d8e8;
    --cyan:#6cf; --gold:#f0d080; --gold2:#ffe9b0;
    --violet:#b388ff; --green:#8cf0d0; --pink:#ff9ec4;
    --red:#ff6666; --orange:#ff8c00;
    --user:#f0d080;   /* USER = gold */
    --work:#8cf0d0;   /* WORK = grün */
    --run:#6cf;       /* RUNNER = cyan */
    --done:#3a5a4a;
    --line:rgba(120,220,150,0.08);
    --panel:rgba(6,10,18,0.75);
    --serif:'Yu Mincho','Hiragino Mincho ProN',serif;
    --mono:'Consolas','Courier New',monospace;
  }
  html,body{min-height:100%;}
  body{
    background:#03060c;
    background-image:
      radial-gradient(ellipse at 50% 20%, #0c1a30 0%, #050a14 55%, #010205 100%);
    color:var(--fg);
    font-family:var(--mono);
    min-height:100vh;
    overflow-x:hidden;
  }

  /* ── BG-GRID ─────────────────────────────── */
  #bg{
    position:fixed; inset:0; z-index:-1;
    opacity:0.05; pointer-events:none;
    display:grid;
    grid-template-columns:repeat(10,1fr);
    grid-template-rows:repeat(10,1fr);
    gap:2px;
  }
  #bg div{
    background:transparent;
    border:1px solid rgba(120,220,150,0.1);
    border-radius:2px;
  }

  /* ── LAYOUT ──────────────────────────────── */
  #hub{
    display:flex; flex-direction:column;
    min-height:100vh;
    padding:14px 18px 18px;
    max-width:1700px; margin:0 auto;
    gap:12px;
  }

  /* ── HEADER ──────────────────────────────── */
  header{
    display:flex; flex-wrap:wrap;
    justify-content:space-between; align-items:center;
    padding:12px 20px;
    background:var(--panel);
    backdrop-filter:blur(12px);
    border-radius:16px;
    border:1px solid var(--line);
  }
  header .brand{
    font-size:22px; font-weight:300; letter-spacing:3px;
    background:linear-gradient(135deg,#7ee0a0,#d8f0c0,#b388ff,#f0d080);
    -webkit-background-clip:text; -webkit-text-fill-color:transparent;
    font-family:var(--serif);
    display:flex; align-items:center; gap:12px;
  }
  header .brand .lg{
    -webkit-text-fill-color:#6cf;
    font-size:26px; line-height:1;
    text-shadow:0 0 20px rgba(108,204,255,0.7);
  }
  header .brand small{
    font-size:10px; -webkit-text-fill-color:#4a5a6a;
    letter-spacing:1.5px; font-family:var(--mono);
  }
  .stats{
    display:flex; gap:14px; font-size:10.5px;
    color:#6a8a7a; flex-wrap:wrap; align-items:center;
  }
  .stats b{font-weight:bold;}
  .v-cyan{color:var(--cyan);}
  .v-gold{color:var(--gold);}
  .v-violet{color:var(--violet);}
  .v-green{color:var(--green);}
  .v-pink{color:var(--pink);}
  .led{
    display:inline-block; width:8px; height:8px;
    border-radius:50%; margin-right:4px;
  }
  .led.green{background:#8cf0d0;box-shadow:0 0 8px #8cf0d0;}
  .led.gold{background:#f0d080;box-shadow:0 0 8px #f0d080;}
  .led.cyan{background:#6cf;box-shadow:0 0 8px #6cf;}
  .led.violet{background:#b388ff;box-shadow:0 0 8px #b388ff;}
  .led.pulse{animation:pulse 1.6s infinite;}
  @keyframes pulse{0%,100%{opacity:.4}50%{opacity:1}}

  /* ── MAIN GRID ──────────────────────────── */
  #main{
    display:grid;
    grid-template-columns: 1.15fr 1fr 1fr;
    gap:12px;
    align-items:start;
  }
  @media(max-width:1200px){
    #main{grid-template-columns:1fr 1fr;}
  }
  @media(max-width:820px){
    #main{grid-template-columns:1fr;}
  }

  .box{
    background:var(--panel);
    backdrop-filter:blur(12px);
    border:1px solid var(--line);
    border-radius:16px;
    padding:14px;
    margin-bottom:12px;
  }
  .box h2{
    font-size:12px; font-weight:400; letter-spacing:3px;
    color:var(--gold); margin-bottom:10px;
    text-transform:uppercase;
    display:flex; justify-content:space-between; align-items:center;
    font-family:var(--serif);
  }
  .box h2 .badge{
    font-size:9px; color:#5a7a8a; font-weight:400;
    letter-spacing:1px; font-family:var(--mono);
  }

  /* ── TMP BLOCK-GRID (10×10) ─────────────── */
  #tmpGrid{
    display:grid;
    grid-template-columns:repeat(10,1fr);
    grid-template-rows:repeat(10,1fr);
    gap:2px;
    aspect-ratio:1;
    background:#050a12;
    padding:8px;
    border-radius:10px;
    border:1px solid rgba(108,204,255,0.2);
    width:100%;
    max-width:520px;
    margin:0 auto;
    position:relative;
  }
  .tcell{
    background:rgba(20,28,40,0.55);
    border-radius:3px;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:7.5px;
    color:#3a4a5a;
    transition:all .25s;
    position:relative;
    user-select:none;
    font-family:var(--mono);
  }
  .tcell.done{
    background:rgba(140,240,208,0.16);
    color:#8cf0d0;
    box-shadow:inset 0 0 6px rgba(140,240,208,0.25);
  }
  .tcell.user{
    background:rgba(240,208,128,0.3);
    color:#ffe9b0;
    font-weight:bold;
    box-shadow:inset 0 0 12px rgba(240,208,128,0.6);
  }
  .tcell.runner{
    outline:2px solid #6cf;
    outline-offset:1px;
    background:rgba(108,204,255,0.25);
    color:#fff;
    z-index:3;
    animation:runPulse .7s ease-in-out infinite;
  }
  @keyframes runPulse{
    0%,100%{box-shadow:0 0 8px rgba(108,204,255,0.6);}
    50%{box-shadow:0 0 20px rgba(108,204,255,0.9);}
  }
  .tcell .slotn{
    position:absolute;
    top:1px; left:2px;
    font-size:6px;
    color:#3a4a5a;
  }
  .tcell.done .slotn{color:#4a7a6a;}
  .tcell.user .slotn{color:#7a6a3a;}

  /* ── CONTROLS ──────────────────────────── */
  .ctrl{
    display:flex; gap:6px; flex-wrap:wrap;
    margin-top:10px;
  }
  .ctrl button{
    flex:1; min-width:70px;
    background:rgba(20,28,40,0.7);
    border:1px solid rgba(120,220,150,0.22);
    color:#c8e8d8;
    padding:6px 8px;
    border-radius:5px;
    font-family:inherit; font-size:9.5px;
    letter-spacing:1.2px; cursor:pointer;
    text-transform:uppercase;
    transition:.2s;
  }
  .ctrl button:hover{
    border-color:#8cf0d0;
    background:rgba(140,240,208,0.12);
    color:#fff;
  }
  .ctrl button.primary{
    border-color:rgba(108,204,255,0.4);
    color:var(--cyan);
  }
  .ctrl button.primary:hover{
    background:rgba(108,204,255,0.15);
    color:#fff;
    box-shadow:0 0 14px rgba(108,204,255,0.5);
  }
  .ctrl button.gold{
    border-color:rgba(240,208,128,0.4);color:var(--gold);
  }
  .ctrl button.gold:hover{
    background:rgba(240,208,128,0.12);border-color:var(--gold);color:#fff;
  }
  .ctrl button.violet{
    border-color:rgba(179,136,255,0.4);color:var(--violet);
  }
  .ctrl button.violet:hover{
    background:rgba(179,136,255,0.12);border-color:var(--violet);color:#fff;
  }
  .ctrl button.red{
    border-color:rgba(255,102,102,0.4);color:var(--red);
  }
  .ctrl button.red:hover{
    background:rgba(255,102,102,0.12);border-color:var(--red);color:#fff;
  }

  input[type=range]{
    -webkit-appearance:none; appearance:none;
    width:100%; height:3px;
    background:linear-gradient(90deg,var(--cyan),var(--gold));
    border-radius:2px; outline:none;
    margin-top:8px;
  }
  input[type=range]::-webkit-slider-thumb{
    -webkit-appearance:none;
    width:12px; height:12px; border-radius:50%;
    background:#fff;
    border:2px solid var(--cyan);
    box-shadow:0 0 8px var(--cyan);
    cursor:pointer;
  }

  /* ── METRICS ───────────────────────────── */
  .metrics{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:5px;
  }
  .metric{
    display:flex; justify-content:space-between;
    padding:5px 9px;
    background:rgba(0,0,0,0.35);
    border-radius:5px;
    border-left:3px solid var(--cyan);
    font-size:10px;
  }
  .metric.gold{border-left-color:var(--gold);}
  .metric.violet{border-left-color:var(--violet);}
  .metric.green{border-left-color:var(--green);}
  .metric.pink{border-left-color:var(--pink);}
  .metric .lbl{color:#8aa8a0;}
  .metric .val{font-weight:bold;color:#d0e8e0;}
  .metric .val.gold{color:var(--gold);}
  .metric .val.violet{color:var(--violet);}
  .metric .val.green{color:var(--green);}
  .metric .val.cyan{color:var(--cyan);}
  .metric .val.pink{color:var(--pink);}

  /* ── USER-TREE ─────────────────────────── */
  #userTree{
    max-height:180px;
    overflow-y:auto;
    padding-right:4px;
  }
  .urow{
    display:flex; justify-content:space-between;
    padding:5px 9px;
    background:rgba(240,208,128,0.06);
    border-left:3px solid var(--gold);
    border-radius:4px;
    margin-bottom:4px;
    font-size:10px;
    animation:uIn .4s ease-out;
  }
  @keyframes uIn{from{opacity:0;transform:translateX(-8px);}to{opacity:1;transform:none;}}
  .urow .b{color:#8aa8a0;}
  .urow .v{color:var(--gold);font-weight:bold;}
  .urow .base{color:#5a7a8a;font-size:9px;}

  /* ── BLOCK-CHAIN ───────────────────────── */
  #blockChain{
    display:flex; gap:4px;
    overflow-x:auto;
    padding-bottom:6px;
  }
  .bchip{
    flex-shrink:0;
    width:80px;
    padding:6px 8px;
    background:rgba(20,28,40,0.6);
    border:1px solid rgba(108,204,255,0.15);
    border-radius:6px;
    text-align:center;
    font-size:9px;
    transition:.25s;
  }
  .bchip.active{
    border-color:var(--cyan);
    background:rgba(108,204,255,0.12);
    box-shadow:0 0 12px rgba(108,204,255,0.3);
  }
  .bchip.done{
    border-color:var(--green);
    background:rgba(140,240,208,0.1);
  }
  .bchip.future{opacity:0.35;}
  .bchip .base{
    font-weight:bold; color:var(--cyan);
    font-size:11px;
  }
  .bchip .bar{
    height:3px; background:#0a1420; border-radius:2px;
    margin-top:5px; overflow:hidden;
  }
  .bchip .bar .fill{
    height:100%; width:0%;
    background:linear-gradient(90deg,#3a5a4a,#8cf0d0);
    transition:width .25s;
  }
  .bchip .done-num{
    font-size:8px; color:#5a7a8a; margin-top:3px;
  }

  /* ── UNI-PANEL ─────────────────────────── */
  #uniPanel{
    display:flex; flex-direction:column;
    gap:8px;
  }
  #uniOrb{
    width:180px; height:180px;
    margin:0 auto;
    position:relative;
    display:flex; align-items:center; justify-content:center;
  }
  #uniOrb svg{position:absolute;inset:0;overflow:visible;}
  #uniCore{
    width:80px; height:80px;
    border-radius:50%;
    background:radial-gradient(circle at 40% 35%,
      #c8f0ff 0%, #6cf 35%, #b388ff 70%, #1a0a2a 100%);
    box-shadow:
      0 0 30px rgba(108,204,255,0.6),
      0 0 60px rgba(179,136,255,0.4),
      inset 0 0 20px rgba(255,255,255,0.2);
    display:flex; align-items:center; justify-content:center;
    font-family:var(--serif);
    font-size:28px; color:#fff;
    font-weight:bold;
    text-shadow:0 0 12px rgba(255,255,255,0.6);
    z-index:2;
    transition:transform .4s;
  }
  #uniCore.pulse{
    animation:uniPulse 1.8s ease-in-out infinite;
  }
  @keyframes uniPulse{
    0%,100%{transform:scale(1);}
    50%{transform:scale(1.08);}
  }

  /* ── LOG ──────────────────────────────── */
  #log{
    background:rgba(0,0,0,0.5);
    border-radius:12px;
    border:1px solid var(--line);
    padding:8px 12px;
    font-size:9.5px; line-height:1.6;
    color:#8ab0c0;
    max-height:130px; overflow-y:auto;
  }
  #log .entry{padding:1px 0;border-bottom:1px solid rgba(255,255,255,0.02);}
  #log .time{color:#3a4a5a;margin-right:6px;}
  #log .tag{color:#6cf;margin-right:4px;}
  #log .ok{color:#8cf0d0;}
  #log .warn{color:#f0d080;}
  #log .err{color:#ff6666;}
  #log .user{color:#f0d080;font-weight:bold;}
  #log .uni{color:#b388ff;}
  #log .gold{color:#f0d080;font-weight:bold;}

  /* ── FOOTER ──────────────────────────── */
  footer{
    text-align:center;
    font-size:9px; color:#3a4a4a;
    padding:8px 16px;
    border-top:1px solid rgba(120,220,150,0.03);
  }
  footer .gold{color:#f0d080;}
  footer a{color:var(--cyan);text-decoration:none;}
  footer a:hover{text-decoration:underline;}

  /* ── FL76 ────────────────────────────── */
  #fl76{
    position:fixed; bottom:14px; right:14px;
    padding:6px 12px;
    background:rgba(6,10,18,0.92);
    border:1px solid rgba(140,240,208,0.3);
    border-radius:6px;
    font-size:10px; letter-spacing:1.5px;
    color:#8cf0b0; z-index:12;
    text-align:right; min-width:130px;
  }
  #fl76 .num{font-size:16px;font-weight:bold;color:#8cf0b0;}
  #fl76.outside{border-color:rgba(255,102,102,0.5);}
  #fl76.outside .num{color:#ff6666;}
  #fl76.edge{border-color:rgba(240,208,128,0.5);}
  #fl76.edge .num{color:#f0d080;}

  @media (max-width:700px){
    #hub{padding:8px;}
    header .brand{font-size:16px;letter-spacing:2px;}
    header .brand .lg{font-size:20px;}
    .tcell{font-size:6px;}
    #fl76{bottom:8px;right:8px;font-size:9px;padding:4px 8px;min-width:100px;}
  }
</style>
</head>
<body>

<div id="bg"></div>

<div id="hub">

  <!-- HEADER -->
  <header>
    <div class="brand">
      <span class="lg">▶</span>
      LÄUFER · TMP · USER-TREE · UNI
      <small>1000 → 100er schritte · 1 user / 100 · 99 work</small>
    </div>
    <div class="stats">
      <span><span class="led cyan pulse"></span> RUN <b class="v-cyan" id="hRun">0</b></span>
      <span><span class="led gold"></span> USER <b class="v-gold" id="hUser">0</b></span>
      <span><span class="led green"></span> WORK <b class="v-green" id="hWork">0</b></span>
      <span><span class="led violet"></span> BLOCK <b class="v-violet" id="hBlock">0</b></span>
      <span>UNI <b class="v-cyan" id="hUni">0.00</b></span>
      <span id="hClock" style="color:#4a5a6a;">⏱️ --:--</span>
    </div>
  </header>

  <!-- MAIN -->
  <div id="main">

    <!-- LEFT: TMP-GRID + CONTROLS -->
    <div>
      <div class="box">
        <h2>
          ◈ TMP-BLOCK <span class="badge" id="gridBadge">1000–1099</span>
        </h2>
        <div id="tmpGrid"></div>
        <div style="text-align:center;font-size:9px;color:#5a7a8a;margin-top:8px;">
          <span class="v-cyan">■</span> Runner ·
          <span class="v-green">■</span> Done ·
          <span class="v-gold">■</span> USER
        </div>
      </div>

      <div class="box">
        <h2>⚙ STEUERUNG <span class="badge" id="ctrlBadge">idle</span></h2>
        <div class="ctrl">
          <button id="btnRun" class="primary">▶ RUN</button>
          <button id="btnStep">⏭ STEP</button>
          <button id="btnAuto" class="gold">♾ AUTO</button>
          <button id="btnSkipBlock" class="violet">⏩ SKIP</button>
          <button id="btnReset" class="red">⟲ RESET</button>
        </div>
        <input type="range" id="speed" min="30" max="600" value="180" step="10">
        <div style="display:flex;justify-content:space-between;font-size:9px;color:#5a7a8a;margin-top:4px;">
          <span>Speed</span>
          <span id="speedVal" style="color:var(--cyan);font-weight:bold;">180 ms</span>
        </div>
      </div>

      <div class="box">
        <h2>👤 USER-TREE <span class="badge" id="userBadge">0 gefunden</span></h2>
        <div id="userTree">
          <div style="color:#5a7a8a;font-size:10px;text-align:center;padding:12px 0;">
            Noch keine User im TMP-Lauf ...
          </div>
        </div>
      </div>
    </div>

    <!-- MID: METRICS + TOOLS -->
    <div>
      <div class="box">
        <h2>📊 TMP-METRIKEN <span class="badge">LIVE</span></h2>
        <div class="metrics">
          <div class="metric"><span class="lbl">Runner-Slot</span><span class="val cyan" id="mSlot">0</span></div>
          <div class="metric violet"><span class="lbl">Block-Idx</span><span class="val violet" id="mBIdx">0</span></div>
          <div class="metric green"><span class="lbl">Tools aktiv</span><span class="val green" id="mTools">0</span></div>
          <div class="metric gold"><span class="lbl">Users gef.</span><span class="val gold" id="mUsers">0</span></div>
          <div class="metric"><span class="lbl">Läufe total</span><span class="val cyan" id="mRuns">0</span></div>
          <div class="metric violet"><span class="lbl">Blocks voll</span><span class="val violet" id="mBlocksDone">0</span></div>
          <div class="metric green"><span class="lbl">TMP-Basis</span><span class="val green" id="mBase">1000</span></div>
          <div class="metric gold"><span class="lbl">UNI-Level</span><span class="val gold" id="mUni">0.00</span></div>
        </div>
      </div>

      <div class="box">
        <h2>🔧 99 WORK-TOOLS <span class="badge" id="toolBadge">—</span></h2>
        <div id="toolList" style="
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:3px;
          max-height:220px;
          overflow-y:auto;
          font-size:8.5px;
        ">
          <!-- wird gefüllt -->
        </div>
        <div style="margin-top:8px;font-size:9px;color:#5a7a8a;text-align:center;">
          Slot <b style="color:var(--gold);" id="curUserSlot">—</b> =
          <span style="color:var(--gold);">USER</span> ·
          alle anderen = <span style="color:var(--green);">WORK</span>
        </div>
      </div>
    </div>

    <!-- RIGHT: UNI + CHAIN -->
    <div>
      <div class="box">
        <h2>◉ UNI · TMP-LAUF <span class="badge" id="uniBadge">idle</span></h2>
        <div id="uniPanel">
          <div id="uniOrb">
            <svg viewBox="-100 -100 200 200" width="180" height="180">
              <circle cx="0" cy="0" r="84" fill="none"
                stroke="rgba(108,204,255,0.15)" stroke-width="0.8"/>
              <circle cx="0" cy="0" r="68" fill="none"
                stroke="rgba(240,208,128,0.12)" stroke-width="0.5" stroke-dasharray="3 5"/>
              <circle cx="0" cy="0" r="52" fill="none"
                stroke="rgba(179,136,255,0.12)" stroke-width="0.5" stroke-dasharray="2 4"/>
              <line x1="-84" y1="0" x2="84" y2="0"
                stroke="rgba(108,204,255,0.1)" stroke-width="0.5"/>
              <line x1="0" y1="-84" x2="0" y2="84"
                stroke="rgba(108,204,255,0.1)" stroke-width="0.5"/>
              <g id="uniNodes"></g>
            </svg>
            <div id="uniCore">◉</div>
          </div>

          <div class="metrics" style="margin-top:6px;">
            <div class="metric"><span class="lbl">Fusion</span><span class="val cyan" id="mFusion">0.00</span></div>
            <div class="metric green"><span class="lbl">Kohärenz</span><span class="val green" id="mKoh">0.00</span></div>
            <div class="metric gold"><span class="lbl">Union-Score</span><span class="val gold" id="mUnion">0.00</span></div>
            <div class="metric violet"><span class="lbl">Orbit-Läufe</span><span class="val violet" id="mOrbit">0</span></div>
          </div>
        </div>
      </div>

      <div class="box">
        <h2>⛓ BLOCK-CHAIN <span class="badge" id="chainBadge">0 / 10</span></h2>
        <div id="blockChain"></div>
      </div>
    </div>

  </div>

  <!-- LOG -->
  <div id="log">
    <div class="entry"><span class="time">[init]</span><span class="tag">läufer</span><span class="gold">▶ LÄUFER · TMP · USER-TREE gestartet bei 1000</span></div>
    <div class="entry"><span class="time">[init]</span><span class="tag">läufer</span><span class="ok">1 User pro 100er Block · 99 Work-Slots pro Block</span></div>
  </div>

  <footer>
    <span class="gold">▶</span> LÄUFER · TMP · USER-TREE · UNI · iki1uc
    <span class="gold">▶</span> 1000 → ∞ in 100er Schritten · <a href="mind.html">mind.html</a> · <a href="index.html">index.html</a>
  </footer>

</div>

<!-- FL76 -->
<div id="fl76">
  <div>FL76</div>
  <div class="num" id="fl76num">76</div>
  <div style="font-size:8px;color:#4a5a5a;">ms · Kaiser</div>
</div>

<script>
"use strict";
// ═══════════════════════════════════════════════════════════════════
// ▶ LÄUFER · TMP · USER-TREE · UNI
// 100er Schritte ab 1000 · 1 User pro Block · 99 Work-Slots
// ═══════════════════════════════════════════════════════════════════

const N = 100;             // Slots pro Block
const BLOCK_STEP = 100;    // Basis-Schritt
const BLOCK_START = 1000;  // Startbasis
const INIT_BLOCKS = 10;    // Anzahl initialer Blöcke

// ─── 99 WORK-TOOLS (aus Präfix × Domäne) ─────────────────────
function buildTools() {
  const prefixes = ['INIT','BOOT','LOAD','SYNC','MOUNT','LINK','BIND','HOOK','PIPE','STREAM','CAST'];
  const domains  = ['NC','AX','TMP','ROM','RES','ORB','VEC','SYS','GEO'];
  const tools = [];
  for (const p of prefixes) {
    for (const d of domains) {
      tools.push(`${p}.${d}`);
      if (tools.length >= 99) return tools;
    }
  }
  return tools;
}
const WORK_TOOLS = buildTools(); // 99 Stück

// ─── USER-POSITION (deterministisch pro Block) ───────────────
// Werte 1–98, damit Slot 0 & 99 frei bleiben
const USER_SLOTS = [13, 47, 88, 21, 73, 5, 96, 34, 62, 8,
                    55, 91, 17, 79, 42, 68, 29, 3, 85, 51];

function userSlotFor(blockIdx) {
  return USER_SLOTS[blockIdx % USER_SLOTS.length];
}

// ─── BLOCK-KLASSE ────────────────────────────────────────────
class TMPBlock {
  constructor(idx) {
    this.idx = idx;
    this.base = BLOCK_START + idx * BLOCK_STEP;
    this.cells = [];
    this.userSlot = userSlotFor(idx);
    this.doneCount = 0;
    this.userFound = false;
    for (let i = 0; i < N; i++) {
      const isUser = i === this.userSlot;
      this.cells.push({
        slot: i,
        state: 0,      // 0=idle, 1=done, 2=user
        tool: isUser ? 'USER' : WORK_TOOLS[(i + idx * 7) % WORK_TOOLS.length],
        isUser,
      });
    }
  }
  complete() { return this.doneCount >= N; }
}

// ─── GLOBALER STATE ─────────────────────────────────────────
const S = {
  blocks: [],
  blockIdx: 0,
  slot: 0,
  totalRuns: 0,
  totalUsers: 0,
  totalTools: 0,
  blocksDone: 0,
  auto: false,
  speed: 180,
  timer: null,
  userLog: [],
  uniLevel: 0,
  fusion: 0,
  koh: 0,
  union: 0,
  orbitRuns: 0,
  // FL76
  flRaw: 76, flSmooth: 76, lastFrameT: 0,
};

// ─── INITIALISIERUNG ────────────────────────────────────────
function initBlocks(n) {
  S.blocks = [];
  for (let i = 0; i < n; i++) S.blocks.push(new TMPBlock(i));
}

// ─── TICK (Einzelschritt) ────────────────────────────────────
function tick() {
  if (S.blockIdx >= S.blocks.length) {
    // Erweitern
    S.blocks.push(new TMPBlock(S.blocks.length));
  }
  const block = S.blocks[S.blockIdx];
  const cell = block.cells[S.slot];

  if (cell.state === 0) {
    cell.state = cell.isUser ? 2 : 1;
    block.doneCount++;
    S.totalRuns++;
    if (cell.isUser) {
      block.userFound = true;
      S.totalUsers++;
      S.userLog.push({
        blockIdx: block.idx,
        slot: S.slot,
        base: block.base + S.slot,
        blockBase: block.base,
      });
      log(`👤 USER aktiviert · Block ${block.idx} · Slot ${S.slot} · Basis ${block.base + S.slot}`, 'läufer', 'user');
    } else {
      S.totalTools++;
    }
    renderCell(block.idx, S.slot, cell);
  }

  // Vorrücken
  S.slot++;
  if (S.slot >= N) {
    S.slot = 0;
    if (block.complete()) {
      S.blocksDone++;
      log(`✔ Block ${block.idx} (${block.base}–${block.base + 99}) komplett · User gefunden: ${block.userFound}`, 'läufer', 'ok');
    }
    S.blockIdx++;
    if (S.blockIdx < S.blocks.length) {
      log(`▶ Block ${S.blockIdx} startet @ Basis ${S.blocks[S.blockIdx].base}`, 'läufer', 'ok');
      buildGrid(); // neues Grid rendern
      buildChain();
    }
  }

  // UNI-Fusion
  computeUni();
  renderHeaderAndMetrics();
  updateRunner();
  updateToolHighlight();
}

// ─── RENDERING: GRID ────────────────────────────────────────
function buildGrid() {
  const el = document.getElementById('tmpGrid');
  el.innerHTML = '';
  const block = S.blocks[S.blockIdx];
  if (!block) return;

  document.getElementById('gridBadge').textContent =
    `${block.base}–${block.base + 99}`;

  for (let i = 0; i < N; i++) {
    const cell = block.cells[i];
    const div = document.createElement('div');
    div.className = 'tcell';
    div.dataset.slot = i;
    div.innerHTML = `<span class="slotn">${String(i).padStart(2,'0')}</span>`;
    if (cell.state === 1) div.classList.add('done');
    if (cell.state === 2) div.classList.add('user');
    el.appendChild(div);
  }
  updateRunner();
}

function renderCell(blockIdx, slot, cell) {
  if (blockIdx !== S.blockIdx) return;
  const el = document.querySelector(`.tcell[data-slot="${slot}"]`);
  if (!el) return;
  el.classList.toggle('done', cell.state === 1);
  el.classList.toggle('user', cell.state === 2);
}

function updateRunner() {
  document.querySelectorAll('.tcell').forEach(el => el.classList.remove('runner'));
  const el = document.querySelector(`.tcell[data-slot="${S.slot}"]`);
  if (el) el.classList.add('runner');
}

// ─── RENDERING: TOOL-LIST ───────────────────────────────────
function buildToolList() {
  const el = document.getElementById('toolList');
  el.innerHTML = '';
  const block = S.blocks[S.blockIdx];
  if (!block) return;

  for (let i = 0; i < N; i++) {
    const cell = block.cells[i];
    const div = document.createElement('div');
    div.dataset.tool = i;
    const color = cell.isUser ? 'var(--gold)' :
                  cell.state === 1 ? 'var(--green)' :
                  '#5a7a8a';
    div.style.cssText = `
      padding:2px 4px;border-radius:3px;
      background:${cell.isUser ? 'rgba(240,208,128,0.1)' : cell.state === 1 ? 'rgba(140,240,208,0.08)' : 'rgba(0,0,0,0.25)'};
      color:${color};
      text-align:center;
      font-size:8px;
      border:1px solid ${cell.isUser ? 'rgba(240,208,128,0.25)' : cell.state === 1 ? 'rgba(140,240,208,0.2)' : 'rgba(255,255,255,0.04)'};
      white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
    `;
    div.title = `Slot ${i} · ${cell.tool}`;
    div.textContent = cell.isUser ? '★ USER' : cell.tool;
    el.appendChild(div);
  }
}

function updateToolHighlight() {
  const block = S.blocks[S.blockIdx];
  if (!block) return;
  document.getElementById('curUserSlot').textContent = block.userSlot;
  document.getElementById('toolBadge').textContent = `Slot ${S.slot} = ${block.cells[S.slot].tool}`;

  document.querySelectorAll('#toolList [data-tool]').forEach(el => {
    const i = parseInt(el.dataset.tool, 10);
    const cell = block.cells[i];
    if (i === S.slot) {
      el.style.outline = '2px solid #6cf';
    } else {
      el.style.outline = 'none';
    }
    // Update color/state
    const color = cell.isUser ? 'var(--gold)' :
                  cell.state === 1 ? 'var(--green)' :
                  '#5a7a8a';
    el.style.color = color;
    el.style.background = cell.isUser ? 'rgba(240,208,128,0.1)' :
                          cell.state === 1 ? 'rgba(140,240,208,0.08)' :
                          'rgba(0,0,0,0.25)';
  });
}

// ─── RENDERING: CHAIN ───────────────────────────────────────
function buildChain() {
  const el = document.getElementById('blockChain');
  el.innerHTML = '';
  S.blocks.forEach((b, i) => {
    const chip = document.createElement('div');
    chip.className = 'bchip';
    if (i < S.blockIdx) chip.classList.add('done');
    else if (i === S.blockIdx) chip.classList.add('active');
    else chip.classList.add('future');

    const pct = (b.doneCount / N) * 100;
    chip.innerHTML = `
      <div class="base">${b.base}</div>
      <div class="bar"><div class="fill" style="width:${pct}%"></div></div>
      <div class="done-num">${b.doneCount}/100 ${b.userFound ? '★' : ''}</div>
    `;
    el.appendChild(chip);
  });
  document.getElementById('chainBadge').textContent = `${S.blockIdx} / ${S.blocks.length}`;
}

// ─── RENDERING: USER-TREE ───────────────────────────────────
function renderUserTree() {
  const el = document.getElementById('userTree');
  if (S.userLog.length === 0) {
    el.innerHTML = `<div style="color:#5a7a8a;font-size:10px;text-align:center;padding:12px 0;">
      Noch keine User im TMP-Lauf ...
    </div>`;
    document.getElementById('userBadge').textContent = '0 gefunden';
    return;
  }
  el.innerHTML = '';
  // Neueste zuerst
  const sorted = S.userLog.slice().reverse();
  sorted.forEach(u => {
    const div = document.createElement('div');
    div.className = 'urow';
    div.innerHTML = `
      <span class="b">Block ${u.blockIdx}</span>
      <span class="v">Slot ${u.slot}</span>
      <span class="base">Basis ${u.base}</span>
    `;
    el.appendChild(div);
  });
  document.getElementById('userBadge').textContent = `${S.userLog.length} gefunden`;
}

// ─── UNI-BERECHNUNG ─────────────────────────────────────────
function computeUni() {
  // Fusion: wie vollständig ist der aktuelle Block
  const cur = S.blocks[S.blockIdx];
  const curPct = cur ? cur.doneCount / N : 0;
  const blocksPct = S.blocksDone / Math.max(1, S.blocks.length);
  S.fusion = curPct * 0.4 + blocksPct * 0.6;

  // Kohärenz: User-Rate = gefundene User / erwartete User
  const expected = S.blockIdx + (S.slot > (cur ? cur.userSlot : 0) ? 1 : 0);
  S.koh = expected > 0 ? Math.min(1, S.totalUsers / expected) : 0;

  // Union-Score: Arbeit + User
  S.union = (S.totalTools + S.totalUsers * 5) / Math.max(1, S.totalRuns) / 5;

  // Orbit-Läufe = vollendete Blöcke
  S.orbitRuns = S.blocksDone;

  // UNI-Level = User / Block
  S.uniLevel = S.blockIdx > 0
    ? S.totalUsers / S.blockIdx
    : (cur && cur.userFound ? 1 : 0);
}

// ─── HEADER + METRICS ──────────────────────────────────────
function renderHeaderAndMetrics() {
  document.getElementById('hRun').textContent = S.totalRuns;
  document.getElementById('hUser').textContent = S.totalUsers;
  document.getElementById('hWork').textContent = S.totalTools;
  document.getElementById('hBlock').textContent = S.blockIdx;
  document.getElementById('hUni').textContent = S.uniLevel.toFixed(2);

  document.getElementById('mSlot').textContent = S.slot;
  document.getElementById('mBIdx').textContent = S.blockIdx;
  document.getElementById('mTools').textContent = S.totalTools;
  document.getElementById('mUsers').textContent = S.totalUsers;
  document.getElementById('mRuns').textContent = S.totalRuns;
  document.getElementById('mBlocksDone').textContent = S.blocksDone;
  const cur = S.blocks[S.blockIdx];
  document.getElementById('mBase').textContent = cur ? cur.base : '—';
  document.getElementById('mUni').textContent = S.uniLevel.toFixed(2);

  document.getElementById('mFusion').textContent = S.fusion.toFixed(2);
  document.getElementById('mKoh').textContent = S.koh.toFixed(2);
  document.getElementById('mUnion').textContent = S.union.toFixed(2);
  document.getElementById('mOrbit').textContent = S.orbitRuns;

  // UNI-Core pulsieren lassen, wenn aktiv
  const core = document.getElementById('uniCore');
  core.classList.toggle('pulse', S.auto || S.totalRuns > 0);
  core.style.transform = `scale(${1 + S.fusion * 0.1})`;

  // Badges
  const uniBadge = document.getElementById('uniBadge');
  if (S.auto) uniBadge.textContent = 'RUN';
  else if (S.totalRuns > 0) uniBadge.textContent = 'pause';
  else uniBadge.textContent = 'idle';

  const ctrlBadge = document.getElementById('ctrlBadge');
  ctrlBadge.textContent = S.auto ? 'auto' : (S.totalRuns > 0 ? 'ready' : 'idle');
}

// ─── AUTO-MODUS ─────────────────────────────────────────────
function startAuto() {
  if (S.timer) return;
  S.auto = true;
  document.getElementById('btnAuto').textContent = '⏸ STOP';
  document.getElementById('btnAuto').style.color = '#ff6666';
  S.timer = setInterval(tick, S.speed);
}

function stopAuto() {
  S.auto = false;
  if (S.timer) { clearInterval(S.timer); S.timer = null; }
  document.getElementById('btnAuto').textContent = '♾ AUTO';
  document.getElementById('btnAuto').style.color = '';
}

// ─── BUTTONS ────────────────────────────────────────────────
function bindButtons() {
  document.getElementById('btnRun').addEventListener('click', () => {
    startAuto();
    log('▶ LÄUFER gestartet', 'läufer', 'ok');
  });
  document.getElementById('btnStep').addEventListener('click', () => {
    if (S.auto) stopAuto();
    tick();
  });
  document.getElementById('btnAuto').addEventListener('click', () => {
    if (S.auto) { stopAuto(); log('⏸ AUTO gestoppt', 'läufer', 'warn'); }
    else { startAuto(); log('♾ AUTO gestartet', 'läufer', 'ok'); }
  });
  document.getElementById('btnSkipBlock').addEventListener('click', () => {
    // Restlichen aktuellen Block bis Slot 99 durchlaufen
    let safety = 0;
    while (S.slot !== 0 && safety < 200) { tick(); safety++; }
    log(`⏩ Skip · Block gewechselt zu ${S.blocks[S.blockIdx]?.base}`, 'läufer', 'violet');
  });
  document.getElementById('btnReset').addEventListener('click', () => {
    stopAuto();
    S.blockIdx = 0; S.slot = 0;
    S.totalRuns = 0; S.totalUsers = 0; S.totalTools = 0; S.blocksDone = 0;
    S.userLog = []; S.uniLevel = 0; S.fusion = 0; S.koh = 0; S.union = 0; S.orbitRuns = 0;
    initBlocks(INIT_BLOCKS);
    buildGrid();
    buildChain();
    buildToolList();
    renderUserTree();
    computeUni();
    renderHeaderAndMetrics();
    updateRunner();
    updateToolHighlight();
    document.getElementById('log').innerHTML =
      '<div class="entry"><span class="time">[reset]</span><span class="tag">läufer</span><span class="warn">⟲ LÄUFER zurückgesetzt · Basis 1000</span></div>';
  });

  document.getElementById('speed').addEventListener('input', (e) => {
    S.speed = parseInt(e.target.value, 10);
    document.getElementById('speedVal').textContent = S.speed + ' ms';
    if (S.auto) {
      stopAuto();
      startAuto();
    }
  });
}

// ─── UNI-ORB NODES ─────────────────────────────────────────
function buildUniNodes() {
  const g = document.getElementById('uniNodes');
  if (!g) return;
  g.innerHTML = '';
  const axes = ['ces','in','me','run','sec','u'];
  const colors = ['#7fdcff','#8cf0d0','#f0d080','#a888ff','#ff9ec4','#c8f0ff'];
  axes.forEach((a, i) => {
    const angle = (i / axes.length) * Math.PI * 2 - Math.PI / 2;
    const x = Math.cos(angle) * 84;
    const y = Math.sin(angle) * 84;
    const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    c.setAttribute('cx', x);
    c.setAttribute('cy', y);
    c.setAttribute('r', 7);
    c.setAttribute('fill', 'rgba(6,10,18,0.9)');
    c.setAttribute('stroke', colors[i]);
    c.setAttribute('stroke-width', '1.5');
    c.setAttribute('opacity', '0.85');
    g.appendChild(c);
  });
}

// ─── CLOCK ──────────────────────────────────────────────────
function updateClock() {
  document.getElementById('hClock').textContent = '⏱️ ' + new Date().toLocaleTimeString('de-DE');
}
setInterval(updateClock, 1000);

// ─── FL76 ──────────────────────────────────────────────────
function tickFl76(now) {
  if (S.lastFrameT > 0) {
    S.flRaw = now - S.lastFrameT;
    S.flSmooth = S.flSmooth * 0.88 + S.flRaw * 0.12;
  }
  S.lastFrameT = now;
  const fl = Math.round(S.flSmooth);
  const mon = document.getElementById('fl76');
  document.getElementById('fl76num').textContent = fl;
  if (fl >= 60 && fl <= 90) mon.className = '';
  else if (fl < 40 || fl > 120) mon.className = 'outside';
  else mon.className = 'edge';
  requestAnimationFrame(tickFl76);
}

// ─── LOG ───────────────────────────────────────────────────
function log(msg, tag = 'läufer', type = '') {
  const box = document.getElementById('log');
  const entry = document.createElement('div');
  entry.className = 'entry';
  const t = new Date().toLocaleTimeString('de-DE');
  entry.innerHTML = `<span class="time">[${t}]</span><span class="tag">${tag}</span><span class="${type}">${msg}</span>`;
  box.appendChild(entry);
  box.scrollTop = box.scrollHeight;
  while (box.children.length > 60) box.removeChild(box.firstChild);
}

// ─── KEYBOARD ──────────────────────────────────────────────
document.addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT') return;
  if (e.key === ' ') { e.preventDefault(); document.getElementById('btnRun').click(); }
  if (e.key === 's' || e.key === 'S') document.getElementById('btnStep').click();
  if (e.key === 'a' || e.key === 'A') document.getElementById('btnAuto').click();
  if (e.key === 'r' || e.key === 'R') document.getElementById('btnReset').click();
  if (e.key === 'k' || e.key === 'K') document.getElementById('btnSkipBlock').click();
});

// ─── BG-GRID ──────────────────────────────────────────────
function buildBG() {
  const bg = document.getElementById('bg');
  for (let i = 0; i < 100; i++) {
    bg.appendChild(document.createElement('div'));
  }
}

// ─── INIT ─────────────────────────────────────────────────
function init() {
  buildBG();
  buildUniNodes();
  initBlocks(INIT_BLOCKS);
  buildGrid();
  buildChain();
  buildToolList();
  renderUserTree();
  computeUni();
  renderHeaderAndMetrics();
  updateRunner();
  updateToolHighlight();
  bindButtons();

  log('▶ LÄUFER · TMP · USER-TREE · UNI bereit', 'init', 'gold');
  log('→ 100er Schritte ab 1000 · 1 User / 100 · 99 Work', 'init', 'ok');
  log('→ Tasten: Space=Run · S=Step · A=Auto · K=Skip · R=Reset', 'init', 'warn');

  requestAnimationFrame(tickFl76);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// ─── PUBLIC API ───────────────────────────────────────────
window.LAEUFER = {
  run: () => document.getElementById('btnRun').click(),
  step: () => document.getElementById('btnStep').click(),
  auto: () => document.getElementById('btnAuto').click(),
  skip: () => document.getElementById('btnSkipBlock').click(),
  reset: () => document.getElementById('btnReset').click(),
  state: () => ({
    blockIdx: S.blockIdx,
    slot: S.slot,
    base: S.blocks[S.blockIdx]?.base,
    totalRuns: S.totalRuns,
    totalUsers: S.totalUsers,
    totalTools: S.totalTools,
    blocksDone: S.blocksDone,
    userLog: S.userLog.slice(),
    uniLevel: S.uniLevel,
    fusion: S.fusion,
    koh: S.koh,
    union: S.union,
  }),
  blocks: () => S.blocks.map(b => ({
    idx: b.idx, base: b.base,
    doneCount: b.doneCount, userSlot: b.userSlot,
    userFound: b.userFound,
  })),
  jumpToBlock: (idx) => {
    S.blockIdx = Math.min(idx, S.blocks.length - 1);
    S.slot = 0;
    while (S.blocks.length <= S.blockIdx) S.blocks.push(new TMPBlock(S.blocks.length));
    buildGrid(); buildChain(); buildToolList(); renderHeaderAndMetrics();
  },
};
window.L = window.LAEUFER;

console.log('%c▶ LÄUFER · TMP · USER-TREE · UNI geladen',
  'color:#6cf;font-weight:bold;font-size:14px;');
console.log('→ window.L.run() · .step() · .auto() · .skip() · .state()');
console.log('→ 1000 → 1099 → 1100 → 1199 → ... · 1 USER / 100 · 99 WORK');
</script>
</body>
</html>
