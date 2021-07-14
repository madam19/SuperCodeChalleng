let korpergrosse = Number(prompt("Ihre Körpergröße in cm: ", ""));
let alter = Number(prompt("Ihre Alter: ", ""));
let koerperbau = confirm("Ihre Koerperbau: Wenn small - press ok", "");
let idealGewicht;
if (koerperbau) {
    idealGewicht = ((korpergrosse - 100) + (alter / 10)) * 0.9 * 0.9;
} else {
    idealGewicht = ((korpergrosse - 100) + (alter / 10)) * 0.9 * 1.1;
}
console.log("Ihre Idealgewicht ist", idealGewicht, "kg");