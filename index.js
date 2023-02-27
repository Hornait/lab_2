let a = 0;
let b = 0;
let coffee = "";
let arab = 0;
let sugar = 0;
let kA = "";
let sug = "";
let milk = "";
let smailBig = "";

while (a == 0) {
  const cof = prompt(
    "Яку каву ви бажаєте? (американо, американо з молоком, капучіно, лате)"
  );
  if (cof == "Американо" || cof == "американо") {
    console.log("Американо");
    a++;
    coffee = "американо";
  } else if (cof == "Американо з молоком" || cof == "американо з молоком") {
    console.log("Американо з молоком");
    a++;
    coffee = "американо з молоком";
  } else if (cof == "Капучіно" || cof == "капучіно") {
    console.log("Капучіно");
    a++;
    coffee = "капучіно";
  } else if (cof == "Лате" || cof == "лате") {
    console.log("Лате");
    a++;
    coffee = "лате";
  }
}

if (coffee == "американо з молоком") {
  while (b == 0) {
    const amerikWithMilk = prompt("З вершками чи з молоком?");
    if (amerikWithMilk == "З вершками" || amerikWithMilk == "з вершками") {
      console.log("З вершками");
      b++;
      milk = "з вершками";
    } else if (amerikWithMilk == "З молоком" || amerikWithMilk == "з молоком") {
      console.log("З молоком");
      b++;
      milk = "з молоком";
    }
  }
}
if (coffee == "капучіно" || coffee == "лате") {
  while (b == 0) {
    const smallOrBig = prompt("Маленький чи великий?");
    if (smallOrBig == "Маленький" || smallOrBig == "маленький") {
      console.log("Маленький");
      b++;
      smailBig = "маленька";
    } else if (smallOrBig == "Великий" || smallOrBig == "великий") {
      console.log("Великий");
      b++;
      smailBig = "велика";
    }
  }
}

while (arab == 0) {
  const kubOrArabica = prompt("Кубаш чи арабіка?");
  if (kubOrArabica == "Кубаш" || kubOrArabica == "кубаш") {
    console.log("Кубаш");
    arab++;
    kA = "кубаш";
  } else if (kubOrArabica == "Арабіка" || kubOrArabica == "арабіка") {
    console.log("Арабіка");
    arab++;
    kA = "арабіка";
  }
}

while (sugar == 0) {
  const howSugar = prompt("Скільки цукру?");
  if (
    howSugar == 0 ||
    howSugar == 1 ||
    howSugar == 2 ||
    howSugar == 3 ||
    howSugar == 4 ||
    howSugar == 5 ||
    howSugar == 6 ||
    howSugar == 7 ||
    howSugar == 8 ||
    howSugar == 9 ||
    howSugar == 10
  ) {
    console.log(howSugar);
    sugar++;
    sug = howSugar;
  }
}

if (coffee == "американо") {
  if (sug == 1) {
    console.log(
      `Ваше замовлення: ${coffee} - ${kA}, ${sug} ложка цукру`
    );
  } else if (sug > 4) {
    console.log(
      `Ваше замовлення: ${coffee} - ${kA}, ${sug} ложок цукру`
    );
  } else {
    console.log(
      `Ваше замовлення: ${coffee} - ${kA}, ${sug} ложки цукру`
    );
  }
} else if (coffee == "американо з молоком") {
  if (sug == 1) {
    console.log(
      `Ваше замовлення: ${coffee} - ${kA}, ${sug} ложка цукру`
    );
  } else if (sug > 4) {
    console.log(
      `Ваше замовлення: ${coffee} - ${kA}, ${sug} ложок цукру`
    );
  } else {
    console.log(
      `Ваше замовлення: ${coffee} - ${kA}, ${sug} ложки цукру`
    );
  }
} else if (coffee == "капучіно" || coffee == "лате") {
  if (sug == 1) {
    console.log(
      `Ваше замовлення: ${coffee} - ${kA}, ${sug} ложка цукру`
    );
  } else if (sug > 4) {
    console.log(
      `Ваше замовлення: ${coffee} - ${kA}, ${sug} ложок цукру`
    );
  } else {
    console.log(
      `Ваше замовлення: ${coffee} - ${kA}, ${sug} ложки цукру`
    );
  }
}
