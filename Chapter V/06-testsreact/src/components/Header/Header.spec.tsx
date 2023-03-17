import { render, screen } from "@testing-library/react";
import { Header } from ".";

// Imitação do next/router utilizado no componente utilizado
jest.mock("next/router", () => {
  return {
    useRouter() {
      return {
        asPath: "/",
      };
    },
  };
});


jest.mock("next-auth/react", () => {
  return {
    useSession() {
      return [null, false];
    },
  };
});

describe("ActiveLinkComponent", () => {
  it("renders correctly", () => {
    render(<Header />);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Post")).toBeInTheDocument();
  });
});
