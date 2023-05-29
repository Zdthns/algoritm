describe("application is available", () => {
  //приложение поднялось
  it("should be available on localhost:3000", () => {
    cy.visit("http://localhost:3000");
  });
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  //6 страниц с визуализацией алгоритмов будут доступны пользователю
  it("Строка", () => {
    cy.get('a[href*="recursion"]').click();
    cy.contains("Строка");
  });

  it("Последовательность Фибоначчи", () => {
    cy.get('a[href*="fibonacci"]').click();
    cy.contains("Последовательность Фибоначчи");
  });

  it("Сортировка массива", () => {
    cy.get('a[href*="sorting"]').click();
    cy.contains("Сортировка массива");
  });

  it("Стек", () => {
    cy.get('a[href*="stack"]').click();
    cy.contains("Стек");
  });

  it("Очередь", () => {
    cy.get('a[href*="queue"]').click();
    cy.contains("Очередь");
  });

  it("Связный списокge", () => {
    cy.get('a[href*="list"]').click();
    cy.contains("Связный список");
  });
});
