:root {
    --sky: #87CEEB;
    --sky-dark: #6fb6d6;
    --soil: #8B5A2B;
    --soil-dark: #5a381a;
    --soil-light: #a06a3a;
    --grass: #3fa34d;
    --grass-dark: #2c7a35;
    --ui-yellow: #f4c430;
    --ui-yellow-dark: #b8860b;
}

html, body {
    width: 100%;
    height: 100%;
    touch-action: manipulation;
    -webkit-text-size-adjust: 100%;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    image-rendering: pixelated;
    font-family: 'Press Start 2P', monospace;
}

body {
    background: repeating-linear-gradient(
        0deg,
        var(--sky),
        var(--sky) 40px,
        var(--sky-dark) 40px,
        var(--sky-dark) 80px
    );
    min-height: 100dvh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

/* ===== GAME CONTAINER ===== */

.game-wrapper {
    width: 100%;
    max-width: 360px;
    height: 100dvh;
    max-height: 640px;
    background: #ffffff;
    border: 6px solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

/* ===== HEADER ===== */

.header {
    background: var(--ui-yellow);
    border-bottom: 6px solid black;
    padding: 16px;
    text-align: center;
}

.header h1 {
    font-size: 18px;
    letter-spacing: 6px;
    text-shadow:
        4px 4px 0 #000,
        6px 6px 0 #555;
}

.balance {
    margin-top: 10px;
    font-size: 12px;
}

/* ===== FARM AREA ===== */

.farm {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 8px;
    padding: 12px;
    flex-grow: 1;

    background: repeating-linear-gradient(
        45deg,
        var(--grass),
        var(--grass) 8px,
        var(--grass-dark) 8px,
        var(--grass-dark) 16px
    );
}

/* ===== PLOT ===== */

.plot {
    background:
        repeating-linear-gradient(
            0deg,
            #8B5A2B,
            #8B5A2B 4px,
            #7a4e24 4px,
            #7a4e24 8px
        );

    border: 4px solid var(--soil-dark);

    box-shadow:
        inset -4px -4px #3e2612,
        inset 4px 4px var(--soil-light),
        3px 3px 0 #000;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 8px;
    text-align: center;

    transition: 0.1s;
}

.plot:hover {
    transform: scale(1.05);
}

.plot:active {
    transform: scale(0.95);
}

.plot.growing {
    background: #6b4423;
}

.plot.ready {
    background: #a66b3d;
    color: #fff;
}

/* ===== SHOP ===== */

.shop {
    background: #222;
    padding: 14px;
    border-top: 6px solid black;
}

.shop-title {
    color: white;
    margin-bottom: 12px;
    font-size: 12px;
}

/* ===== BUTTON ===== */

button {
    width: 100%;
    padding: 12px;
    font-size: 10px;
    background: var(--ui-yellow);
    border: 4px solid var(--ui-yellow-dark);
    box-shadow: 4px 4px #8b6508;
    cursor: pointer;
}

button:active {
    transform: translate(4px,4px);
    box-shadow: none;
}
