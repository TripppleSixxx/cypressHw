describe("Tests for homework 19", () => {
  beforeEach(() => {
    cy.visit("https://qauto.forstudy.space/.", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });
  });

  it("Verify button on Hero section", () => {
    cy.get("[class *= hero-descriptor_btn]")
      .should("be.visible")
      .click();

    cy.get("[class = modal-title]")
      .should("contain", "Registration");
  });

  it("Verify Hillel button", () => {
    cy.get("[class = 'contacts_link display-4']")
      .should("be.visible")
      .invoke("removeAttr", "target")
      .click();

    cy.url().should("contain", "hillel");
  });
});
