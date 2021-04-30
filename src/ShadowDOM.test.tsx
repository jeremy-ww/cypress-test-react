import React from "react";
import { mount } from "@cypress/react";
import ShadowDOM from "./ShadowDOM";

it("renders learn react link", () => {
  mount(<ShadowDOM />);
  cy.get("ui5-button").first().click();

  cy.get("ui5-dialog")
    .shadow()
    .get(".ui5-popup-header-root")
    .should("have.id", "ui5-popup-header");
});
