import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AnimalForm from "./components/AnimalForm";

describe("Tests Animal Form", () => {
  test("App renders without errors", () => {
    render(<AnimalForm />);
  });

  test("User can fill out and submit form", async () => {
    //arrange
    render(<AnimalForm />);
    //act
    const speciesInput = screen.getByLabelText(/species/i);
    const ageInput = screen.getByLabelText(/age/i);
    const notesInput = screen.getByLabelText(/notes/i);
    const button = screen.getByRole("button", { name: /submit!/i });

    fireEvent.change(speciesInput, {
      target: { name: "species", value: "canine" },
    });
    fireEvent.change(ageInput, {
      target: { name: "age", value: "5" },
    });
    fireEvent.change(notesInput, {
      target: { name: "notes", value: "cute dog" },
    });
    fireEvent.click(button);

    //assert
    const newAnimal = await screen.findByText(/canine/i);
  });
});
