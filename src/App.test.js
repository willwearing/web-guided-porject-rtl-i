import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App without errors", () => {
  render(<App />);
});

test("renders the app header", () => {
  //Arrange - render our component
  render(<App />);
  //Act - get access to our header element
  const header = screen.getByText(/add new animal/i);
  //Assert - passes if our header element exists
  expect(header).toBeTruthy();
});
