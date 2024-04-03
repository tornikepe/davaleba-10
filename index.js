// 1
function largerNumber(m, n) {
  if (m > n) {
    return m;
  } else if (n > m) {
    return n;
  } else {
    return 0;
  }
}

// 2
function sumNumbers(a, b) {
  return a + b;
}

// 3
function Name() {
  let firstName = "Tornike";
  let lastName = "Peitrishvili";
  console.log("სახელი: " + firstName);
  console.log("გვარი: " + lastName);
}

// 4
function printFullName(firstname, lastname) {
  let fullName = firstname + " " + lastname;
  return fullName;
}

// 5
function namravli(n) {
  let x = 1;
  for (let i = 1; i <= n; i++) {
    x *= i;
  }
  return x;
}

// 6
let student = {
  firstname: "Tornike",
  lastname: "Peitrishvili",
  age: 21,
  scores: [4, 7, 5, 3, 2],
  getFullName: function () {
    return this.firstname + " " + this.lastname;
  },
};

// 7
let student1 = {
  firstname: "Tornike",
  lastname: "Peitrishvili",
  age: 21,
  scores: [4, 7, 5, 3, 2],
  getFullName() {
    return this.firstname + " " + this.lastname;
  },
  getTotalScore() {
    return this.scores.reduce((total, score) => total + score, 0);
  },
};

// 8
console.log("სახელი:", student.firstname, "ასაკი:", student.age);
