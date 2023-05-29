import {
  defaultColor,
  changingColor,
  modifiedColor,
  circle,
} from "../support/constants";

describe("Строка", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/recursion");
  });

  it("Кнопка добавления недоступна, если в инпуте пусто", () => {
    cy.get("input").clear();
    cy.get("button").should("be.disabled");
  });

  it("Строка разворачивается корректно", () => {
    cy.get("input").type("asdfg").should("have.value", "asdfg");
    cy.get("button").contains("Развернуть").click();

    //cy.clock();

    cy.get(circle)
      .eq(0)
      .should("have.css", "border-color", changingColor)
      .contains("a");
    cy.get(circle)
      .eq(4)
      .should("have.css", "border-color", changingColor)
      .contains("g");

    cy.get(circle)
      .eq(0)
      .should("have.css", "border-color", modifiedColor)
      .contains("g");
    cy.get(circle)
      .eq(4)
      .should("have.css", "border-color", modifiedColor)
      .contains("a");

    cy.get(circle)
      .eq(1)
      .should("have.css", "border-color", changingColor)
      .contains("s");
    cy.get(circle)
      .eq(3)
      .should("have.css", "border-color", changingColor)
      .contains("f");

    cy.get(circle)
      .eq(1)
      .should("have.css", "border-color", modifiedColor)
      .contains("f");
    cy.get(circle)
      .eq(3)
      .should("have.css", "border-color", modifiedColor)
      .contains("s");

    cy.get(circle)
      .eq(2)
      .should("have.css", "border-color", defaultColor)
      .contains("d");
    cy.get(circle)
      .eq(2)
      .should("have.css", "border-color", modifiedColor)
      .contains("d");
  });
});
