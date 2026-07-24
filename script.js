/* ============================================================
   AI SMART METAL INSPECTION SYSTEM — INDUSTRIAL HUD THEME
   ============================================================ */

:root{
  --bg-void:#0b0f12;
  --bg-panel:#12181c;
  --bg-panel-2:#1a2227;
  --bg-panel-3:#20292f;
  --line:rgba(129,161,178,0.14);
  --steel:#4fb3d9;
  --steel-dim:rgba(79,179,217,0.35);
  --amber:#ffb020;
  --amber-dim:rgba(255,176,32,0.35);
  --red:#ef4444;
  --red-dim:rgba(239,68,68,0.35);
  --green:#2dd4a7;
  --green-dim:rgba(45,212,167,0.35);
  --text:#e7edf2;
  --text-muted:#8998a3;
  --text-faint:#5a6870;
  --font-display:'Rajdhani',sans-serif;
  --font-body:'Inter',sans-serif;
  --font-mono:'JetBrains Mono',monospace;
  --radius:10px;
}

*{box-sizing:border-box;}
html,body{height:100%;}
body{
  margin:0;
  background:var(--bg-void);
  color:var(--text);
  font-family:var(--font-body);
  min-height:100vh;
  position:relative;
  overflow-x:hidden;
}

/* focus visibility */
button:focus-visible, input:focus-visible, label:focus-visible{
  outline:2px solid var(--steel);
  outline-offset:2px;
}

@media (prefers-reduced-motion: reduce){
  *{animation-duration:0.001ms !important; animation-iteration-count:1 !important; transition-duration:0.001ms !important;}
}

/* ---------- ambient backdrop ---------- */
.bg-grid{
  position:fixed; inset:0; z-index:0; pointer-events:none;
  background-image:
    linear-gradient(var(--line) 1px, transparent 1px),
    linear-gradient(90deg, var(--line) 1px, transparent 1px);
  background-size:42px 42px;
  mask-image:radial-gradient(ellipse at 50% 0%, black 0%, transparent 75%);
  opacity:0.55;
}

.app{position:relative; z-index:1; max-width:1360px; margin:0 auto; padding:22px 26px 40px;}

/* ============ HEADER ============ */
.topbar{
  display:flex; align-items:center; justify-content:space-between; gap:20px;
  flex-wrap:wrap;
  padding-bottom:18px; margin-bottom:18px;
  border-bottom:1px solid var(--line);
}
.brand{display:flex; align-items:center; gap:14px;}
.brand-mark{color:var(--steel); filter:drop-shadow(0 0 10px var(--steel-dim));}
.brand-text h1{
  font-family:var(--font-display); font-weight:700; font-size:1.5rem;
  letter-spacing:0.02em; margin:0; line-height:1.15;
}
.brand-sub{margin:2px 0 0; font-size:0.78rem; color:var(--text-muted);}

.status-cluster{display:flex; align-items:center; gap:10px; flex-wrap:wrap;}
.status-chip{
  display:flex; align-items:center; gap:6px;
  font-family:var(--font-mono); font-size:0.68rem; letter-spacing:0.04em;
  color:var(--text-muted); background:var(--bg-panel);
  border:1px solid var(--line); border-radius:999px; padding:6px 12px;
}
.status-chip b{color:var(--text); font-weight:600;}
.dot{width:7px; height:7px; border-radius:50%; display:inline-block;}
.dot-idle{background:var(--text-faint);}
.dot-ok{background:var(--green); box-shadow:0 0 6px var(--green);}
.dot-warn{background:var(--amber); box-shadow:0 0 6px var(--amber); animation:pulse 1.2s infinite;}
.dot-err{background:var(--red); box-shadow:0 0 6px var(--red);}
@keyframes pulse{0%,100%{opacity:1;}50%{opacity:0.35;}}

.clock{font-family:var(--font-mono); font-size:0.85rem; color:var(--steel); letter-spacing:0.05em;}

/* ============ TABS ============ */
.tabs{display:flex; gap:8px; margin-bottom:18px;}
.tab{
  display:flex; align-items:center; gap:8px;
  font-family:var(--font-display); font-weight:600; font-size:0.95rem; letter-spacing:0.02em;
  background:var(--bg-panel); color:var(--text-muted);
  border:1px solid var(--line); border-radius:8px 8px 0 0;
  padding:10px 18px; cursor:pointer; transition:all .15s ease;
}
.tab svg{opacity:0.7;}
.tab:hover{color:var(--text);}
.tab.active{
  color:var(--steel); background:var(--bg-panel-2);
  border-color:var(--steel-dim); border-bottom-color:var(--bg-panel-2);
  box-shadow:inset 0 2px 0 var(--steel);
}

/* ============ GRID LAYOUT ============ */
.grid{
  display:grid;
  grid-template-columns:1.35fr 1fr;
  grid-template-areas:
    "stage result"
    "log log";
  gap:18px;
}
.stage-panel{grid-area:stage;}
.result-panel{grid-area:result;}
.log-panel{grid-area:log;}

.panel{
  background:var(--bg-panel); border:1px solid var(--line); border-radius:var(--radius);
  padding:16px; display:flex; flex-direction:column;
}
.panel-head{
  display:flex; align-items:center; justify-content:space-between;
  margin-bottom:14px; padding-bottom:10px; border-bottom:1px solid var(--line);
}
.panel-title{
  font-family:var(--font-display); font-weight:600; font-size:1rem;
  letter-spacing:0.05em; text-transform:uppercase; color:var(--text);
}
.scan-status{
  font-family:var(--font-mono); font-size:0.72rem; letter-spacing:0.08em;
  color:var(--text-faint); border:1px solid var(--line); border-radius:5px; padding:4px 9px;
}
.scan-status.scanning{color:var(--amber); border-color:var(--amber-dim); animation:pulse 1s infinite;}
.scan-status.ok{color:var(--green); border-color:var(--green-dim);}
.scan-status.alert{color:var(--red); border-color:var(--red-dim);}

.badge{
  font-family:var(--font-mono); font-size:0.68rem; letter-spacing:0.06em;
  color:var(--text-faint); border:1px solid var(--line); border-radius:5px; padding:5px 10px;
}
.badge.ok{color:var(--green); border-color:var(--green-dim); background:rgba(45,212,167,0.06);}
.badge.warn{color:var(--amber); border-color:var(--amber-dim); background:rgba(255,176,32,0.06);}
.badge.bad{color:var(--red); border-color:var(--red-dim); background:rgba(239,68,68,0.06);}

/* ============ STAGE (camera / upload) ============ */
.stage{
  position:relative; width:100%; aspect-ratio:4/3; background:#05070a;
  border-radius:8px; overflow:hidden; border:1px solid var(--line);
}
.stage video, .stage img, .stage .overlay{
  position:absolute; inset:0; width:100%; height:100%; object-fit:cover;
}
.stage .overlay{pointer-events:none;}

.stage-empty{
  position:absolute; inset:0; display:flex; flex-direction:column; align-items:center; justify-content:center;
  gap:6px; color:var(--text-faint); text-align:center; padding:20px;
}
.stage-empty svg{color:var(--text-faint); opacity:0.5; margin-bottom:4px;}
.stage-empty p{margin:0; font-family:var(--font-display); font-weight:600; font-size:1rem; color:var(--text-muted);}
.stage-empty span{font-size:0.78rem;}

/* HUD scan frame (signature element) */
.hud-frame{position:absolute; inset:14px; pointer-events:none;}
.corner{position:absolute; width:22px; height:22px; border:2px solid var(--steel); opacity:0.85; filter:drop-shadow(0 0 4px var(--steel-dim));}
.corner.tl{top:0; left:0; border-right:none; border-bottom:none;}
.corner.tr{top:0; right:0; border-left:none; border-bottom:none;}
.corner.bl{bottom:0; left:0; border-right:none; border-top:none;}
.corner.br{bottom:0; right:0; border-left:none; border-top:none;}
.crosshair-v{position:absolute; left:50%; top:44%; width:1px; height:12%; background:var(--steel-dim);}
.crosshair-h{position:absolute; top:50%; left:44%; height:1px; width:12%; background:var(--steel-dim);}

.scan-sweep{
  position:absolute; left:0; right:0; height:2px; top:0;
  background:linear-gradient(90deg, transparent, var(--steel), transparent);
  box-shadow:0 0 10px 2px var(--steel-dim);
  opacity:0; 
}
.scan-sweep.active{opacity:1; animation:sweep 2.1s linear infinite;}
@keyframes sweep{0%{top:0%;}100%{top:100%;}}

/* ============ CONTROLS ============ */
.controls{margin-top:14px;}
.controls-row{display:flex; align-items:center; gap:10px; flex-wrap:wrap;}

.btn{
  font-family:var(--font-body); font-weight:600; font-size:0.85rem;
  border-radius:7px; padding:10px 16px; border:1px solid transparent;
  cursor:pointer; transition:all .15s ease; letter-spacing:0.01em;
}
.btn:disabled{opacity:0.4; cursor:not-allowed;}
.btn-primary{background:var(--steel); color:#04222e;}
.btn-primary:hover:not(:disabled){filter:brightness(1.1);}
.btn-accent{background:var(--amber); color:#2b1a00;}
.btn-accent:hover:not(:disabled){filter:brightness(1.1);}
.btn-ghost{background:transparent; color:var(--text-muted); border-color:var(--line);}
.btn-ghost:hover:not(:disabled){color:var(--text); border-color:var(--steel-dim);}
.btn-outline{background:transparent; color:var(--steel); border-color:var(--steel-dim); width:100%; margin-top:14px;}
.btn-outline:hover:not(:disabled){background:rgba(79,179,217,0.08);}
.btn-sm{padding:5px 10px; font-size:0.72rem;}
.file-btn{display:inline-flex; align-items:center;}

.toggle{display:flex; align-items:center; gap:7px; font-size:0.82rem; color:var(--text-muted); cursor:pointer; margin-left:auto;}
.toggle input{accent-color:var(--steel);}

/* ============ RESULT PANEL ============ */
.result-body{display:flex; flex-direction:column; flex:1;}
.defect-name{
  font-family:var(--font-display); font-weight:700; font-size:1.5rem;
  text-align:center; letter-spacing:0.01em; margin-bottom:6px; color:var(--text);
  min-height:1.8rem;
}
.defect-name.state-ok{color:var(--green);}
.defect-name.state-warn{color:var(--amber);}
.defect-name.state-bad{color:var(--red);}

.gauge-wrap{display:flex; flex-direction:column; align-items:center; margin:6px 0 14px;}
.gauge{width:210px; overflow:visible;}
.gauge-track{fill:none; stroke:var(--bg-panel-3); stroke-width:14; stroke-linecap:round;}
.gauge-fill{fill:none; stroke:var(--steel); stroke-width:14; stroke-linecap:round; transition:stroke-dashoffset .8s ease, stroke .4s ease;}
.gauge-needle{stroke:var(--text); stroke-width:3; stroke-linecap:round; transform-origin:110px 115px; transition:transform .8s cubic-bezier(.34,1.4,.64,1); filter:drop-shadow(0 0 3px rgba(0,0,0,0.6));}
.gauge-hub{fill:var(--text);}
.gauge-value{font-family:var(--font-mono); font-size:15px; fill:var(--text-muted);}
.gauge-tick{stroke:var(--text-faint); stroke-width:1.5;}
.gauge-caption{font-family:var(--font-mono); font-size:0.68rem; letter-spacing:0.1em; color:var(--text-faint); margin-top:2px;}

.confidence-row{margin-bottom:14px;}
.confidence-label{display:flex; justify-content:space-between; font-size:0.78rem; color:var(--text-muted); margin-bottom:6px;}
.confidence-label span:last-child{font-family:var(--font-mono); color:var(--text); font-weight:600;}
.meter{height:8px; background:var(--bg-panel-3); border-radius:99px; overflow:hidden;}
.meter-fill{height:100%; width:0%; background:linear-gradient(90deg, var(--steel), var(--green)); transition:width .8s ease, background .4s ease;}

.stat-grid{display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:14px;}
.stat-box{background:var(--bg-panel-2); border:1px solid var(--line); border-radius:7px; padding:9px 11px;}
.stat-label{display:block; font-size:0.66rem; letter-spacing:0.06em; color:var(--text-faint); text-transform:uppercase; margin-bottom:3px;}
.stat-value{display:block; font-family:var(--font-mono); font-size:0.92rem; color:var(--text); font-weight:600;}

.side-map{display:flex; align-items:stretch; height:44px; border-radius:7px; overflow:hidden; border:1px solid var(--line); margin-bottom:6px;}
.side-half{flex:1; display:flex; align-items:center; justify-content:center; background:var(--bg-panel-2); font-family:var(--font-mono); font-size:0.72rem; letter-spacing:0.08em; color:var(--text-faint); transition:background .4s ease, color .4s ease;}
.side-half.damaged{background:rgba(239,68,68,0.16); color:var(--red);}
.side-div{width:1px; background:var(--line);}

/* ============ LOG TABLE ============ */
.log-panel{padding-bottom:10px;}
.log-actions{display:flex; align-items:center; gap:10px;}
.log-count{font-family:var(--font-mono); font-size:0.72rem; color:var(--text-faint);}
.log-table-wrap{overflow-x:auto; max-height:260px; overflow-y:auto;}
.log-table{width:100%; border-collapse:collapse; font-family:var(--font-mono); font-size:0.78rem;}
.log-table th{
  position:sticky; top:0; background:var(--bg-panel);
  text-align:left; padding:8px 10px; color:var(--text-faint); font-weight:500;
  letter-spacing:0.05em; border-bottom:1px solid var(--line); text-transform:uppercase; font-size:0.66rem;
}
.log-table td{padding:8px 10px; border-bottom:1px solid var(--line); color:var(--text-muted);}
.log-table tr:hover td{background:rgba(79,179,217,0.04); color:var(--text);}
.log-empty-row td{text-align:center; color:var(--text-faint); padding:20px; font-family:var(--font-body);}
.tag{padding:2px 7px; border-radius:5px; font-size:0.72rem;}
.tag-ok{background:rgba(45,212,167,0.12); color:var(--green);}
.tag-warn{background:rgba(255,176,32,0.12); color:var(--amber);}
.tag-bad{background:rgba(239,68,68,0.12); color:var(--red);}

/* ============ FOOTER ============ */
.footer{
  display:flex; justify-content:space-between; flex-wrap:wrap; gap:6px;
  margin-top:20px; padding-top:14px; border-top:1px solid var(--line);
  font-size:0.72rem; color:var(--text-faint);
}

/* ============ RESPONSIVE ============ */
@media (max-width:960px){
  .grid{grid-template-columns:1fr; grid-template-areas:"stage" "result" "log";}
  .gauge{width:180px;}
}
@media (max-width:560px){
  .topbar{flex-direction:column; align-items:flex-start;}
  .controls-row{gap:8px;}
  .btn{padding:9px 12px; font-size:0.8rem;}
  .stat-grid{grid-template-columns:1fr;}
}
