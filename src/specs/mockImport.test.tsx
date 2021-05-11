import React from "react";

it("mocking imports", () => {
  cy.stub(React, "cloneElement").returns("cloneElement");
  // @ts-ignore
  // eslint-disable-next-line jest/valid-expect
  expect(React.cloneElement()).to.equal("cloneElement");
});
