import { defaultColor, changingColor } from "../support/constants";

describe("service is available", function () {
  beforeEach(() => {
    cy.visit("http://localhost:3000/stack");
  });
  it("кнопка заблокированна, когда input пустой", function () {
    cy.get("input").clear(); // проверка что инпут пустой
    cy.get("button").should("have.disabled", "disabled"); // проверка блокировки кнопки
  });

  it("добавление в стек", () => {
    cy.get("input").type("a").should("have.value", "a");
    cy.get("button")
      .should("not.have.attr", "disabled")
      .contains("Добавить")
      .click();

    cy.get('[class^="circle_circle"]').as("circle");
    cy.get("@circle").should(($circle) => {
      expect($circle)
        .to.contain("a")
        .to.have.css("border-color", changingColor);
    });

    cy.wait(500);
    cy.get("@circle").should(($circle) => {
      expect($circle).to.contain("a").to.have.css("border-color", defaultColor);
    });
  });
  it("удаление из стека", () => {
    cy.get("input").type("a").should("have.value", "a");
    cy.get("button").contains("Добавить").click();

    cy.wait(500);
    cy.get("input").type("s").should("have.value", "s");
    cy.get("button").contains("Добавить").click();

    cy.wait(500);
    cy.get("input").type("d").should("have.value", "d");
    cy.get("button").contains("Добавить").click();

    cy.wait(500);
    cy.get("button").contains("Удалить").click();
    cy.get('[class^="circle_circle"]').as("circle");

    cy.get("@circle")
      .last()
      .should(($circle) => {
        expect($circle).to.have.css("border-color", changingColor);
      });

    cy.wait(500);
    cy.get("@circle").should(($circle) => {
      expect($circle).to.have.length(2);
    });
  });
  it("очистить стек", () => {
    cy.clock();
    cy.get("input").type("a").should("have.value", "a");
    cy.get("button").contains("Добавить").click();
    cy.tick(500);
    cy.clock();

    cy.get("input").type("s").should("have.value", "s");
    cy.get("button").contains("Добавить").click();
    cy.tick(500);

    cy.get("input").type("d").should("have.value", "d");
    cy.get("button").contains("Добавить").click();
    cy.wait(500);

    cy.get("button").contains("Очистить").click();
    cy.wait(500);
    cy.get('div[class*="circle_circle"]').should("have.length", 0);
  });
});
