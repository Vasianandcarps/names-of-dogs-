let en = ["ни", "буль", "коль", "то", "ро", "паль", "ми", "ма"];
let n = prompt("Количество слогов в кличке");

// let rand2 = Math.floor(Math.random() * en.length);
// let rand3 = Math.floor(Math.random() * en.length);
for (var i = 0; i < n; i++) {
  let rand1 = Math.floor(Math.random() * en.length);
  let phrase = en[rand1];
  document.write(phrase);
}
// let phrase = en[rand1] + en[rand2] + en[rand3];
