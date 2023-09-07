let city = prompt('Введите название города');
let yearsT = prompt('Год образования');
let num = prompt('Введите население');

if (city.length >= 0 && yearsT.length >= 0 && num.length >= 0) {
    let yearsNow = new Date().getFullYear();
    let count = yearsNow - yearsT;

    alert(`Городу ${city} исполнилось ${count} лет с момента его образования. Население - ${num} человек `);
    document.location = "?";
}