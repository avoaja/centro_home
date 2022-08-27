describe("Chart Rendering", () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    console.log('++++++++++++++++++++++++++++++++++++++++')
    console.log(cy.get('body'))
    return false;
    
  })
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("[data-cy=username]").click();
    cy.get("[data-cy=username]").type("admin@example.com");
    cy.get("[data-cy=password]").click();
    cy.get("[data-cy=password]").type("admin123");
    cy.get("[data-cy=login]").click();
    cy.get("form").submit();
  });

  it("Show pie chart when user clicks on pie chart", () => {
    cy.location().should((loc) => {
      expect(loc.origin).to.eq("http://localhost:3000");
    });
    cy.get("[data-cy=PieChart").click();
    cy.get("g").should("have.class", "recharts-layer recharts-pie"); // this indicates that the pie chart is rendered
  });

  it("Show time series chart when user clicks on pie chart", () => {
    cy.location().should((loc) => {
      expect(loc.origin).to.eq("http://localhost:3000");
    });
    cy.get("[data-cy=TimeSeries").click();
    cy.get("g").should("have.class", "recharts-cartesian-grid"); //this indicates that the time series chart is rendered
  });
});
