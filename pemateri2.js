// Pembalajaran 2: Percabangan

// if
if (true) {
  console.log("nilai true");
}

if (false) {
  console.log("nilai else");
}

// if else
if (true) {
  console.log("nilai true");
} else {
  console.log("nilai else");
}

if (false) {
  console.log("nilai false");
} else {
  console.log("nilai true");
}

// operator perbandingan
// <, >, ==, ===, <=, >=

const test1 = 1;
const test2 = 2;
const test3 = "2";

console.log(test1 < test2);
console.log(test1 > test2);
console.log(test1 == test2);
console.log(test1 == test3);
console.log(test1 === test2);
console.log(test1 === test3);
console.log(test1 <= test2);
console.log(test1 >= test2);
console.log(test1 != test2);
console.log(!test1 == test2);

//
if (test1 < test2) {
  console.log("Nilai Test 1 lebih kecil dari nilai Test 2");
}

if (test1 < test2) {
  console.log("Nilai Test 1 lebih kecil dari nilai Test 2");
} else {
  console.log("Nilai Test 1 tidak lebih kecil dari nilai Test 2");
}

//
const input1 = parseInt(prompt("Input bilangan ke-1"));
const input2 = parseInt(prompt("Input bilangan ke-2"));

if (input1 < input2) {
  console.log("Inputan 1 lebih kecil dari inputan 2");
} else {
  console.log("Inputan 1 tidak lebih kecil dari inputan 2");
}

// if else if else
if (input1 == input2) {
  console.log("Inputan 1 sama dengan inputan 2");
} else if (input1 < input2) {
  console.log("Inputan 1 lebih kecil dari inputan 2");
} else {
  console.log("Inputan 1 lebih besar dari inputan 2");
}

input1 == input2
  ? "Input 1 sama dengan input 2"
  : "Input 1 tidak sama dengan 2";

// switch case
const input = parseInt(prompt("Input bilangan"));

switch (input) {
  case 1:
    console.log("Inputan 1");
    break;
  case 2:
    console.log("Inputan 2");
    break;
  case 3:
    console.log("Inputan 3");
    break;
  default:
    console.log("Inputan tidak ditemukan");
}

// switch case dengan if else

if (input == 1) {
  console.log("Inputan 1");
}

if (input == 2) {
  console.log("Inputan 2");
}

if (input == 3) {
  console.log("Inputan 3");
}

if (input != 1 && input != 2 && input != 3) {
  console.log("Inputan tidak ditemukan");
}
