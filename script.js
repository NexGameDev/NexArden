let balance = 5;
let selectedSeed = null;

const balanceDisplay = document.getElementById("balance");
const farm = document.getElementById("farm");

/* ============================= */
/* UPDATE BALANCE UI */
/* ============================= */
function updateBalance() {
    balanceDisplay.textContent = balance + " N";
}

/* ============================= */
/* SELECT SEED */
/* ============================= */
function selectSeed() {
    selectedSeed = {
        name: "Water Spinach",
        buy: 5,
        sell: 8,
        growTime: 5000 // 5 seconds
    };

    alert("Water Spinach selected!");
}

/* ============================= */
/* PLANT SYSTEM */
/* ============================= */
farm.addEventListener("click", function(e) {

    if (!e.target.classList.contains("plot")) return;

    const plot = e.target;

    // If no seed selected
    if (!selectedSeed) {
        alert("Select a seed first!");
        return;
    }

    // If not enough money
    if (balance < selectedSeed.buy) {
        alert("Not enough Next Coin!");
        return;
    }

    // If already planted
    if (plot.classList.contains("growing")) return;
    if (plot.classList.contains("ready")) return;

    // Deduct money
    balance -= selectedSeed.buy;
    updateBalance();

    // Start growing
    plot.classList.add("growing");
    plot.textContent = "Growing...";

    setTimeout(() => {
        plot.classList.remove("growing");
        plot.classList.add("ready");
        plot.textContent = "READY!";
    }, selectedSeed.growTime);
});

/* ============================= */
/* HARVEST SYSTEM */
/* ============================= */
farm.addEventListener("click", function(e) {

    if (!e.target.classList.contains("ready")) return;

    const plot = e.target;

    balance += selectedSeed.sell;
    updateBalance();

    plot.classList.remove("ready");
    plot.textContent = "";
});

/* ============================= */
/* INIT */
/* ============================= */
updateBalance();
