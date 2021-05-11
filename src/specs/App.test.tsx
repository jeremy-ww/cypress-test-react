import React from "react";
import { mount } from "@cypress/react";
import App from "../App";

beforeEach(() => {
  cy.intercept("GET", "https://www.example.com/widgets", {
    statusCode: 200,
    body: "it worked!",
  });
});

it("renders learn react link", () => {
  mount(<App />);
  cy.get("div").contains("2");

  /* eslint-disable */
  fetch("https://www.example.com/widgets")
    .then((res) => res.text())
    .then((res) => {
      console.log(res);
    });
});
