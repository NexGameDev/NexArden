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
    store.style.display = store.style.display === "none" ? "block" : "none";
}

function selectSeed(type) {
    selectedSeed = seeds[type];
    toggleStore();
}

farm.addEventListener("click", function(e) {

    if (!e.target.classList.contains("plot")) return;
    const plot = e.target;

    // PANEN
    if (plot.classList.contains("ready")) {
        const sellValue = plot.dataset.sell;
        balance += parseInt(sellValue);
        updateBalance();
        plot.className = "plot";
        plot.textContent = "";
        return;
    }

    if (!selectedSeed) return;
    if (balance < selectedSeed.buy) return;
    if (plot.classList.contains("growing")) return;

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
