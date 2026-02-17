let balance = 5;
let selectedSeed = false;
let growTime = 10000;
let sellPrice = 8;
let seedPrice = 5;

const farm = document.getElementById("farm");
const balanceText = document.getElementById("balance");

let plots = [];

function updateBalance() {
    balanceText.innerText = balance + " N";
}

function saveGame() {
    localStorage.setItem("nexarden_save", JSON.stringify({
        balance: balance,
        plots: plots,
        lastTime: Date.now()
    }));
}

function loadGame() {
    const save = localStorage.getItem("nexarden_save");
    if (save) {
        const data = JSON.parse(save);
        balance = data.balance;
        plots = data.plots;

        let offlineTime = Date.now() - data.lastTime;

        plots.forEach(plot => {
            if (plot.planted && !plot.ready) {
                plot.timeLeft -= offlineTime;
                if (plot.timeLeft <= 0) {
                    plot.ready = true;
                }
            }
        });
    }
}

function createFarm() {
    for (let i = 0; i < 9; i++) {
        let plotDiv = document.createElement("div");
        plotDiv.classList.add("plot");

        if (!plots[i]) {
            plots.push({
                planted: false,
                ready: false,
                timeLeft: 0
            });
        }

        updatePlotUI(i, plotDiv);

        plotDiv.addEventListener("click", () => handlePlot(i));
        farm.appendChild(plotDiv);
    }
}

function updatePlotUI(index, plotDiv) {
    let plot = plots[index];

    plotDiv.className = "plot";

    if (plot.ready) {
        plotDiv.classList.add("ready");
        plotDiv.innerText = "READY";
    } else if (plot.planted) {
        plotDiv.classList.add("growing");
        plotDiv.innerText = "GROWING";
    } else {
        plotDiv.innerText = "";
    }
}

function handlePlot(index) {
    let plot = plots[index];
    let plotDiv = farm.children[index];

    if (!plot.planted && selectedSeed && balance >= seedPrice) {
        balance -= seedPrice;
        plot.planted = true;
        plot.timeLeft = growTime;
        selectedSeed = false;
    }
    else if (plot.ready) {
        balance += sellPrice;
        plot.planted = false;
        plot.ready = false;
    }

    updatePlotUI(index, plotDiv);
    updateBalance();
    saveGame();
}

function selectSeed() {
    selectedSeed = true;
}

function gameLoop() {
    plots.forEach((plot, index) => {
        if (plot.planted && !plot.ready) {
            plot.timeLeft -= 1000;
            if (plot.timeLeft <= 0) {
                plot.ready = true;
                updatePlotUI(index, farm.children[index]);
            }
        }
    });

    saveGame();
}

loadGame();
createFarm();
updateBalance();

setInterval(gameLoop, 1000);
