describe("fibonacci page display correctly", function () {
  beforeEach(() => {
    cy.visit("http://localhost:3000/fibonacci");
  });
  //Проверьте, что если в инпуте пусто, то кнопка добавления недоступна.
  it("если в инпуте пусто, то кнопка добавления недоступна", () => {
    cy.get("input").clear();
    cy.get("button").should("be.disabled");
  });
  //Проверьте, что числа генерируются корректно.
  it("Числа генерируются корректно", () => {
    cy.get("input").type("5").should("have.value", "5");
    cy.get("button").contains("Рассчитать").click();

    cy.get("[class^=circle_circle]").as("circles");

    cy.get("@circles").should("have.length", 1).eq(0).contains("1");

    cy.get("@circles").should("have.length", 2).eq(1).contains("1");

    cy.get("@circles").should("have.length", 3).eq(2).contains("2");

    cy.get("@circles").should("have.length", 4).eq(3).contains("3");

    cy.get("@circles").should("have.length", 5).eq(4).contains("5");

    cy.get("@circles").should("have.length", 6).eq(5).contains("8");
  });
});
