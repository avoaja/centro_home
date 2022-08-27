describe("Login Success Functionality", () => {
  it("Can log in with the right credentials", () => {

    cy.visit("http://localhost:3000");
    cy.get("[data-cy=username]").click();
    cy.get("[data-cy=username]").type("admin@example.com");
    cy.get("[data-cy=password]").click();
    cy.get("[data-cy=password]").type("admin123");
    cy.get("[data-cy=login]").click();
    cy.get("form").submit();
    cy.location().should((loc) => {
      expect(loc.origin).to.eq("http://localhost:3000");
    });
  });

  it("Can log out successfully after logging in", () => {
    cy.visit("http://localhost:3000/login");
    cy.get("[data-cy=username]").click();
    cy.get("[data-cy=username]").type("admin@example.com");
    cy.get("[data-cy=password]").type("admin123");
    cy.get("[data-cy=login]").click();
    cy.get("form").submit();
    cy.location().should((loc) => {
      expect(loc.origin).to.eq("http://localhost:3000"); //login was successful
    });
    // Click logout
    cy.get("[data-cy=logout]").click();
    cy.get("[data-cy=login]").contains("LOGIN");
  });
});

describe("Login Failure Functionality", () => {
  it("Reject login with wrong credentials", () => {
    cy.visit("http://localhost:3000");
    cy.get("[data-cy=username]").click();
    cy.get("[data-cy=username]").type("admin@example.com");
    cy.get("[data-cy=password]").click();
    cy.get("[data-cy=password]").type("admin127"); // wrong password
    cy.get("[data-cy=login]").click();
    cy.get("form").submit();
    cy.get("[data-cy=alert]").contains("Login failed please try again");

  });
});
