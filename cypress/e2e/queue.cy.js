import {
  defaultColor,
  changingColor,
  //modifiedColor,
  circle,
  circle_content,
} from "../support/constants";

describe("service is available", function () {
  beforeEach(() => {
    cy.visit("http://localhost:3000/queue");
  });

  it("кнопка заблокированна, когда input пустой", function () {
    cy.get("input").clear(); // проверка что инпут пустой
    cy.get("button").contains("Добавить").parent().should("be.disabled"); // проверка блокировки кнопки
  });
  it("Добавление в очередь", () => {
    cy.get("input").type("a").should("have.value", "a");
    cy.get("button").contains("Добавить").click();

    cy.get(circle)
      .eq(0)
      .should("have.css", "border-color", defaultColor)
      .contains("a");
    cy.get(circle_content).eq(0).contains("head");
    cy.get(circle_content).eq(0).contains("tail");

    cy.wait(500);
    cy.get(circle)
      .should("have.css", "border-color", defaultColor)
      .contains("a");

    cy.get("input").type("s").should("have.value", "s");
    cy.get("button").contains("Добавить").click();

    cy.get(circle)
      .eq(0)
      .should("have.css", "border-color", defaultColor)
      .contains("a");
    cy.get(circle_content).eq(0).contains("head");

    cy.get(circle)
      .eq(1)
      .should("have.css", "border-color", changingColor)
      .contains("s");
    cy.get(circle_content).eq(1).contains("tail");

    cy.wait(500);
    cy.get(circle)
      .eq(0)
      .should("have.css", "border-color", defaultColor)
      .contains("a");

    cy.get(circle)
      .eq(1)
      .should("have.css", "border-color", defaultColor)
      .contains("s");
  });

  it("Удаление из очереди", () => {
    cy.get("input").type("a").should("have.value", "a");
    cy.get("button").contains("Добавить").click();
    cy.wait(1000);

    cy.get(circle_content).eq(0).contains("head");
    cy.get(circle_content).eq(0).contains("tail");

    cy.get("input").type("s").should("have.value", "s");
    cy.get("button").contains("Добавить").click();
    cy.wait(1000);

    cy.get("input").type("d").should("have.value", "d");
    cy.get("button").contains("Добавить").click();
    cy.wait(1000);

    cy.get("button").contains("Удалить").click();
    cy.get(circle)
      .eq(0)
      .should("have.css", "border-color", changingColor)
      .contains("a");

    cy.wait(500);
    cy.get(circle)
      .eq(1)
      .should("have.css", "border-color", defaultColor)
      .contains("s");
    cy.get(circle)
      .eq(2)
      .should("have.css", "border-color", defaultColor)
      .contains("d");
  });

  it("Очистить", () => {
    cy.get("input").clear();

    cy.get("input").type("a").should("have.value", "a");
    cy.get("button").contains("Добавить").click();
    cy.wait(1000);

    cy.get("input").type("s").should("have.value", "s");
    cy.get("button").contains("Добавить").click();
    cy.wait(1000);

    cy.get("input").type("d").should("have.value", "d");
    cy.get("button").contains("Добавить").click();
    cy.wait(1000);

    cy.get("button").contains("Очистить").click();

    cy.get(circle_content).should(($circles) => {
      expect($circles).to.contain("");
    });
  });
});
