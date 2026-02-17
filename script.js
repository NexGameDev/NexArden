let balance = 20;
let selectedSeed = null;

const balanceDisplay = document.getElementById("balance");
const farm = document.getElementById("farm");
const store = document.getElementById("store");

const seeds = {
    spinach: { name: "🌿", buy: 5, sell: 8, grow: 3000 },
    carrot: { name: "🥕", buy: 8, sell: 14, grow: 5000 },
    corn: { name: "🌽", buy: 12, sell: 20, grow: 8000 }
};

function updateBalance() {
    balanceDisplay.textContent = balance + " N";
}

function toggleStore() {
    store.classList.toggle("open");
}

function selectSeed(type) {
    selectedSeed = seeds[type];
    toggleStore();
}

/* AUTO CREATE 25 PLOTS */
for (let i = 0; i < 25; i++) {
    const div = document.createElement("div");
    div.classList.add("plot");
    farm.appendChild(div);
}

/* FARM SYSTEM */
farm.addEventListener("click", function (e) {

    if (!e.target.classList.contains("plot")) return;
    const plot = e.target;

    /* PANEN */
    if (plot.classList.contains("ready")) {
        balance += parseInt(plot.dataset.sell);
        updateBalance();

        plot.className = "plot";
        plot.textContent = "";
        plot.removeAttribute("data-sell");
        return;
    }

    if (!selectedSeed) return;
    if (balance < selectedSeed.buy) return;
    if (plot.classList.contains("growing")) return;

    /* TANAM */
    balance -= selectedSeed.buy;
    updateBalance();

    plot.classList.add("growing");
    plot.textContent = selectedSeed.name;
    plot.dataset.sell = selectedSeed.sell;

    setTimeout(() => {
        plot.classList.remove("growing");
        plot.classList.add("ready");
    }, selectedSeed.grow);
});

updateBalance();
