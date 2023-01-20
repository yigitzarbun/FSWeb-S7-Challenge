describe("testing cypress", function() {
  it("testing the test for the sake of testing", function() {
    expect(true).to.equal(true);
  });
});

describe("main page to order page flow test", function() {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("Visits mainpage and then clicks to order pizza button", function() {
    cy.get('[data-cy="order-pizza-button"]').click();
    cy.url().should("include", "/pizza");
  });
});

describe("order form test", function() {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });
  it("Visits order pizza page and fills the form", function() {
    cy.get('[data-cy="order-button"]').should("be.disabled");
    cy.get("select").select(1);
    cy.get('[type="radio"]').check("garlic-ranch");
    cy.get('[type="checkbox"]').check([
      "pepperoni",
      "sausage",
      "canadian-bacon",
      "spicy-italian-sausage",
      "grilled-chicken",
      "onions",
      "green-pepper",
      "diced-tomatos",
      "black-olives",
      "roasted-garlic",
      "artichoke-hearts",
      "three-cheese",
      "pineapple",
      "extra-cheese",
    ]);
    cy.get('[type="checkbox"]').uncheck([
      "artichoke-hearts",
      "three-cheese",
      "pineapple",
      "extra-cheese",
    ]);
    cy.get('[data-cy="gluten-free-crust"]').click();
    cy.get('[data-cy="special-text"]')
      .should("be.empty")
      .type("I want my pizza to be delivered hot, fast and  intact");
    cy.get('[data-cy="name"]')
      .should("be.empty")
      .type("Peter Pan");
    cy.get('[data-cy="address"]')
      .should("be.empty")
      .type("Green St. Cave no: 3, Neverland");
    cy.get('[data-cy="order-quantity"]')
      .clear()
      .type("2");
    cy.get('[data-cy="order-button"]').should("not.be.disabled");
    cy.get('[data-cy="order-button"]').click();
    cy.get('[data-cy="order-success-message"]').should("be.visible");
    cy.get('[data-cy="order-success-button"]')
      .should("be.visible")
      .click();
    cy.url().should("include", "/basket");
    cy.get('[data-cy="place-new-order-button"]')
      .should("be.visible")
      .click();
    cy.get('[data-cy="place-new-order-button"]')
      .should("be.visible")
      .click();
    cy.url().should("include", "/pizza");
  });
});

describe("Empty basket to order form page", function() {
  beforeEach(() => {
    cy.visit("http://localhost:3000/basket");
  });
  it("Visits the basket page when the user haven't placed an order and then directs the user to the order form page", function() {
    cy.get('[data-cy="order-now-button"]').click();
    cy.url().should("include", "/pizza");
  });
});
