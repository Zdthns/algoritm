import {
  defaultColor,
  changingColor,
  modifiedColor,
  circle,
  circle_content,
} from "../support/constants";

describe("service is available", function () {
  beforeEach(() => {
    cy.visit("http://localhost:3000/list");
  });

  it("Блокировка кнопки", function () {
    cy.get('input[placeholder="Введите значение"]').clear();
    cy.get('input[placeholder="Введите индекс"]').clear();

    cy.get("button").contains("Добавить в tail").parent().should("be.disabled");
    cy.get("button").contains("Добавить в head").parent().should("be.disabled");

    cy.get("button")
      .contains("Добавить по индексу")
      .parent()
      .should("be.disabled");
    cy.get("button")
      .contains("Удалить по индексу")
      .parent()
      .should("be.disabled");
  });

  ////отрисовкa дефолтного списка.
  it("дефолтный список", () => {
    cy.get('[class^="circle_circle"]').as("circles");
    cy.get("@circles").should("not.be.empty").should("have.length", 4);
    cy.get('div[class*="circle_content"]').eq(0).contains("head");
    cy.get('div[class*="circle_content"]').eq(3).contains("tail");
    cy.get("@circles")
      .eq(0)
      .should("have.css", "border-color", defaultColor)
      .contains("0");
    cy.get("@circles")
      .eq(1)
      .should("have.css", "border-color", defaultColor)
      .contains("100");
    cy.get("@circles")
      .eq(2)
      .should("have.css", "border-color", defaultColor)
      .contains("6");
    cy.get("@circles")
      .eq(3)
      .should("have.css", "border-color", defaultColor)
      .contains("4");
  });

  ////добавления элемента в head.

  it("Добавить в head", () => {
    cy.get("input").clear();
    cy.get("button").should("be.disabled");

    cy.get('input[placeholder="Введите значение"]')
      .type("a")
      .should("have.value", "a");

    cy.get("button").contains("Добавить в head").click();
    cy.get('[class^="circle_circle"]').as("circles");
    cy.get("@circles").should(($circles) => {
      expect($circles.eq(0)).to.have.css("border-color", defaultColor);
    });
    cy.wait(500);
    cy.get("@circles").should(($circles) => {
      expect($circles.eq(0))
        .to.contain("a")
        .to.have.css("border-color", modifiedColor);
    });

    cy.wait(500);
    cy.get("@circles").should(($circles) => {
      expect($circles.eq(0))
        .to.contain("a")
        .to.have.css("border-color", defaultColor);
    });
  });

  //добавления элемента в tail.
  it("Добавить в tail", () => {
    cy.get("input").clear();
    cy.get("button").should("be.disabled");

    cy.get(circle).should("have.length", 4);

    cy.get('input[placeholder="Введите значение"]')
      .type("s")
      .should("have.value", "s");
    cy.get("button").contains("Добавить в tail").click();

    cy.wait(500);
    cy.get(circle).should("have.length", 5);
    cy.get(circle).eq(3).should("have.css", "border-color", changingColor);
    cy.wait(500);
    cy.get(circle).should("have.length", 5);
    cy.get(circle).eq(3).should("have.css", "border-color", defaultColor);

    cy.get(circle)
      .eq(4)
      .should("have.css", "border-color", modifiedColor)
      .contains("s");
    cy.get(circle_content).last().contains("tail");

    cy.get(circle)
      .eq(4)
      .should("have.css", "border-color", defaultColor)
      .contains("s");
    cy.get(circle_content).last().contains("tail");

    //cy.wait(500);
    //cy.get("@circles")
    //  .eq(4)
    //  .should("have.css", "border-color", defaultColor)
    //  .contains("s");
  });
  //добавления элемента по индексу.
  it("Добовление по индексу", () => {
    cy.get("input").clear();

    cy.get(circle).should("have.length", 4);

    cy.get('input[placeholder="Введите значение"]')
      .type("d")
      .should("have.value", "d");
    cy.get('input[placeholder="Введите индекс"]')
      .type("1")
      .should("have.value", "1");
    cy.get("button").contains("Добавить по индексу").click();
    cy.wait(1000);

    cy.get(circle).should("have.length", 5);

    cy.get(circle).first().should("have.css", "border-color", changingColor);
    cy.wait(500);

    cy.get(circle_content).eq(0).contains("head");
    cy.get(circle).first().should("have.css", "border-color", changingColor);

    cy.get(circle).eq(1).should("have.css", "border-color", changingColor);
    cy.wait(500);

    cy.get(circle)
      .eq(1)
      .should("have.css", "border-color", modifiedColor)
      .contains("d");
    cy.wait(1000);

    cy.get(circle)
      .eq(1)
      .should("have.css", "border-color", defaultColor)
      .contains("d");
  });

  //удаления элемента из head.
  it("удалениe элемента из head", () => {
    cy.get("button").contains("Удалить из head").click();
    cy.get(circle).eq(0).should("have.css", "border-color", changingColor);
    cy.get(circle).eq(1).should("have.css", "border-color", changingColor);

    cy.wait(1000);
    cy.get(circle).eq(0).should("have.css", "border-color", defaultColor);
  });
  //удаления элемента из tail.
  it(" удалениt элемента из tail", () => {
    cy.get("button").contains("Удалить из tail").click();
    cy.get(circle).last().should("have.css", "border-color", changingColor);

    cy.wait(500);
    cy.get(circle).should("have.css", "border-color", defaultColor);
  });
  //удаления элемента по индексу.
  it("Корректность удаления элемента по индексу", () => {
    cy.clock();
    cy.get('input[placeholder="Введите индекс"]')
      .type("0")
      .should("have.value", "0");
    cy.get("button").contains("Удалить по индексу").click();

    cy.get(circle).eq(0).should("have.css", "border-color", changingColor);

    cy.tick(500);
    cy.get(circle).eq(0).should("have.css", "border-color", changingColor);
    cy.get(circle).eq(1).should("have.css", "border-color", defaultColor);

    cy.tick(1000);
    cy.get(circle).should("have.css", "border-color", changingColor);
    cy.tick(1000);
    cy.get(circle).should("have.css", "border-color", defaultColor);
    cy.get(circle).should("have.length", 3);
  });
});
