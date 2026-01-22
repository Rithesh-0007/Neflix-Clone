/* NAVBAR SCROLL EFFECT */
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        nav.style.background = "rgba(0,0,0,0.85)";
    } else {
        nav.style.background = "transparent";
    }
});

/* BUTTON CLICK */
const startBtn = document.querySelector(".btn-red");
const emailInput = document.querySelector(".hero input");

startBtn.addEventListener("click", () => {
    if(emailInput.value === ""){
        alert("Please enter your email");
    } else {
        startBtn.textContent = "Loading...";
    }
});

/* FAQ ACCORDION */
const faqBoxes = document.querySelectorAll(".faqbox");

const answers = [
    "Netflix is a streaming service offering movies, TV shows and more.",
    "Netflix plans start from ₹149 per month.",
    "You can watch Netflix on TV, laptop, tablet and mobile.",
    "You can cancel your membership anytime."
];

faqBoxes.forEach((box, index) => {
    box.addEventListener("click", () => {

        // Close others
        document.querySelectorAll(".answer").forEach(a => a.remove());
        document.querySelectorAll(".icon").forEach(i => i.textContent = "+");

        if (!box.classList.contains("open")) {
            faqBoxes.forEach(b => b.classList.remove("open"));
            box.classList.add("open");

            box.querySelector(".icon").textContent = "×";

            const ans = document.createElement("div");
            ans.className = "answer";
            ans.textContent = answers[index];
            box.after(ans);
        } else {
            box.classList.remove("open");
        }
    });
});