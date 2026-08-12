// --- Systemobjekt für Virtual Marketplace ---
const VEC = {
    active: true,
    vector: true,
    genie: true,
    control: false,
    passage: false,
    state: "idle",
    trades: []
};

// --- Kontrolle durch DOO/IT ---
function DOO_control() {
    VEC.control = true;
    VEC.state = "control-ready";
    return "DOO/IT Kontrolle aktiviert.";
}

// --- DOOR Übergang ---
function DOOR_passage() {
    if (!VEC.control) {
        VEC.passage = true;
        VEC.state = "tmp-transition";
        return "DOOR geöffnet (tmp) → Übergang ohne Kontrolle.";
    }
    VEC.passage = true;
    VEC.state = "stable-transition";
    return "DOOR stabil geöffnet → Kontrolle aktiv.";
}

// --- VECTOR Routing ---
function VECTOR_route(input) {
    if (!VEC.passage) return "Kein Übergang aktiv.";
    return `Routing über .VECTOR: ${input}`;
}

// --- GENIE Bewertung ---
function GENIE_rate(value) {
    if (!VEC.genie) return "GENIE nicht aktiv.";
    const score = Math.round(Math.random() * 100);
    return `GENIE Bewertung für '${value}': ${score}`;
}

// --- Marketplace Trade ---
function VEC_trade(item) {
    if (!VEC.passage) return "Trade blockiert → kein Übergang.";
    const rating = GENIE_rate(item);
    VEC.trades.push({ item, rating });
    return `Trade ausgeführt: ${item} → ${rating}`;
}

module.exports = {
    VEC,
    DOO_control,
    DOOR_passage,
    VECTOR_route,
    GENIE_rate,
    VEC_trade
};
