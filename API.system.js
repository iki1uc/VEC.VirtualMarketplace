// ------------------------------------------------------
// VEC.VirtualMarketplace · System-API (VM01)
// ------------------------------------------------------

const VEC = {
    NAME: "VEC.VirtualMarketplace",
    ID: "VM01",
    TYPE: "Station",
    ROLE: "Market-Exchange",

    MODE: "active",
    STATE: "dynamic",

    VECTOR: true,
    GENIE: true,
    CONTROL: false,
    PASSAGE: false,

    AXIS: {
        ORBIT: 8,
        RESPO: 8,
        MATRIX: 64,
        MODE: ["ax", "xa", "air", "aiv"]
    },

    TMP: {
        MODE: "dual",
        POINT: 9,
        TRANSITION: "idle",
        EXPANSION: ["3to9", "9to81"]
    },

    VALUE: {
        GOLDENE6: ["boerse.json","markt3.json","REAL.json","AIR.json","BIL.json","USE.json"]
    },

    FORM: {
        MAGISCHE6: ["index.html","ID.html","USER.html","USE.html","tmp.core","ice.core"]
    },

    SYNC: {
        ROOT: true,
        ETAGE: true,
        KIND: true,
        MODE: ["arg","xarg","tmparg"]
    },

    TRADES: [],
    LOG: []
};

// ------------------------------------------------------
// DOO/IT Kontrolle
// ------------------------------------------------------
function DOO_control() {
    VEC.CONTROL = true;
    VEC.STATE = "control-ready";
    VEC.LOG.push("DOO/IT aktiviert");
    return "DOO/IT Kontrolle aktiviert.";
}

// ------------------------------------------------------
// DOOR Übergang
// ------------------------------------------------------
function DOOR_passage(mode="tmp") {
    VEC.PASSAGE = true;

    if (mode === "tmp") {
        VEC.TMP.TRANSITION = "tmp→stabil";
        VEC.STATE = "tmp-transition";
        VEC.LOG.push("DOOR geöffnet (tmp)");
        return "DOOR geöffnet (tmp) → Übergang ohne Kontrolle.";
    }

    VEC.TMP.TRANSITION = "stabil→tmp";
    VEC.STATE = "stable-transition";
    VEC.LOG.push("DOOR stabil geöffnet");
    return "DOOR stabil geöffnet → Kontrolle aktiv.";
}

// ------------------------------------------------------
// VECTOR Routing
// ------------------------------------------------------
function VECTOR_route(input) {
    if (!VEC.PASSAGE) return "Kein Übergang aktiv.";
    const out = `Routing über .VECTOR (${VEC.AXIS.MODE.join("/")}) → ${input}`;
    VEC.LOG.push(out);
    return out;
}

// ------------------------------------------------------
// GENIE Bewertung
// ------------------------------------------------------
function GENIE_rate(value) {
    if (!VEC.GENIE) return "GENIE nicht aktiv.";
    const score = Math.round(Math.random() * 100);
    const out = `GENIE Bewertung für '${value}': ${score}`;
    VEC.LOG.push(out);
    return out;
}

// ------------------------------------------------------
// Trade
// ------------------------------------------------------
function VEC_trade(item) {
    if (!VEC.PASSAGE) return "Trade blockiert → kein Übergang.";
