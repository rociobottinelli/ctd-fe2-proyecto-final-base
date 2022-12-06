import { render } from "../../test-utils";
import { screen, waitFor } from "@testing-library/react";
import Cita from "./Cita";
import userEvent from "@testing-library/user-event";

describe("Pruebas en <Cita />", () => {
  test("Primer mensaje sin búsqueda", async () => {
    render(<Cita />);
    const mensaje = await screen.findByText("No se encontro ninguna cita");
    expect(mensaje).toBeInTheDocument();
  });
  test("Mensaje de error al ingresar valor numérico", async () => {
    render(<Cita />);
    const inputCharacter = screen.getByPlaceholderText(
      "Ingresa el nombre del autor"
    );
    userEvent.clear(inputCharacter);
    userEvent.type(inputCharacter, "1");
    const button = await screen.findByLabelText("Obtener Cita");
    userEvent.click(button);
    const mensaje = await screen.findByText(
      "Por favor ingrese un nombre válido"
    );
    expect(mensaje).toBeInTheDocument();
  });
  test("Devolver cita de personaje de forma exitosa", async () => {
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
  test("Borrar input de personaje con botón", async () => {
    render(<Cita />);
    const inputCharacter = screen.getByPlaceholderText("Ingresa el nombre del autor");
    await  userEvent.type(inputCharacter, "Homer");
    expect(inputCharacter).toHaveValue("Homer");
    const buttonClear = screen.getByLabelText("Borrar");
    await userEvent.click(buttonClear);
    expect(inputCharacter).toHaveValue("");

  });
});
