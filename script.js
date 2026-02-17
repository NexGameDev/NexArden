:root {
    --soil1: #8B5A2B;
    --soil2: #7a4e24;
    --soil3: #6b4423;
    --soil4: #5a381a;

    --grass1: #3fa34d;
    --grass2: #2c7a35;
    --grass3: #24662b;

    --ui-yellow: #f4c430;
    --ui-dark: #111;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    image-rendering: pixelated;
    font-family: 'Press Start 2P', monospace;
}

body {
    background:
        repeating-linear-gradient(
            0deg,
            #87CEEB,
            #87CEEB 30px,
            #6fb6d6 30px,
            #6fb6d6 60px
        );
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100dvh;
    overflow: hidden;
}

.game-wrapper {
    width: 360px;
    height: 640px;
    border: 6px solid black;
    background: #fff;
    display: flex;
    flex-direction: column;
}

.header {
    background: var(--ui-yellow);
    border-bottom: 6px solid black;
    padding: 12px;
    text-align: center;
    position: relative;
}

.header h1 {
    font-size: 15px;
    letter-spacing: 2px;
}

.balance {
    font-size: 10px;
    margin-top: 6px;
}

.store-btn {
    position: absolute;
    right: 10px;
    top: 10px;
    background: #222;
    color: white;
    border: 3px solid black;
    font-size: 14px;
    padding: 6px;
}

/* ===== FARM ===== */

.farm {
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 6px;
    padding: 10px;

    background:
        repeating-linear-gradient(
            45deg,
            var(--grass1),
            var(--grass1) 8px,
            var(--grass2) 8px,
            var(--grass2) 16px
        );
}

.plot {
    background:
        repeating-linear-gradient(
            0deg,
            var(--soil1),
            var(--soil1) 4px,
            var(--soil2) 4px,
            var(--soil2) 8px
        );
    border: 4px solid var(--soil4);
    box-shadow:
        inset -3px -3px var(--soil3),
        inset 3px 3px #a06a3a,
        3px 3px 0 black;
    font-size: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* ===== STORE PANEL ===== */

.store {
    background: #222;
    padding: 10px;
    border-top: 6px solid black;
    display: none;
}

.store-item {
    background: var(--ui-yellow);
    padding: 8px;
    margin-bottom: 8px;
    border: 4px solid #b8860b;
    font-size: 8px;
        }
