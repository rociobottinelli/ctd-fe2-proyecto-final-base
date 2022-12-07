import { render } from "../../test-utils";
import { screen, waitFor } from "@testing-library/react";
import Cita from "./Cita";
import userEvent from "@testing-library/user-event";

describe("Pruebas en <Cita />", () => {
  test("First message without searching", async () => {
    render(<Cita />);
    const message = await screen.findByText("No se encontro ninguna cita");
    expect(message).toBeInTheDocument();
  });
  test("Error message when searching numbers", async () => {
    render(<Cita />);
    const inputCharacter = screen.getByPlaceholderText(
      "Ingresa el nombre del autor"
    );
    userEvent.clear(inputCharacter);
    userEvent.type(inputCharacter, "1");
    const button = await screen.findByLabelText("Obtener Cita");
    userEvent.click(button);
    const message = await screen.findByText(
      "Por favor ingrese un nombre válido"
    );
    expect(message).toBeInTheDocument();
  });
  test("Return a characters quote successfully", async () => {
    render(<Cita />);
    const mockQuote = "Nothing you say can upset us. We're the MTV generation.";
    const mockAuthor = "Bart Simpson";
    const inputCharacter = screen.getByLabelText("Author Cita");
    userEvent.type(inputCharacter, mockAuthor);
    await waitFor(() => expect(inputCharacter).toHaveValue(mockAuthor));
    const buttonQuote = screen.getByLabelText("Obtener Cita");
    userEvent.click(buttonQuote);

    expect(await screen.findByText(mockQuote)).toBeInTheDocument();
    expect(await screen.findByText(mockAuthor)).toBeInTheDocument();
  });
  test("Clear input using button", async () => {
    render(<Cita />);
    const inputCharacter = screen.getByPlaceholderText("Ingresa el nombre del autor");
    await  userEvent.type(inputCharacter, "Homer");
    expect(inputCharacter).toHaveValue("Homer");
    const buttonClear = screen.getByLabelText("Borrar");
    await userEvent.click(buttonClear);
    expect(inputCharacter).toHaveValue("");

  });
  test("Return random quote successfully", async () => {
    render(<Cita />);
    const mockRandomQuote = "Nothing you say can upset us. We're the MTV generation.";
    const buttonRandomQuote = screen.getByLabelText("Obtener cita aleatoria");
    userEvent.click(buttonRandomQuote);
    expect(await screen.findByText(mockRandomQuote)).toBeInTheDocument();
  });
});
