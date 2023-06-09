import { render, screen } from "@testing-library/react";
import { ActiveLink } from ".";

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

describe("ActiveLinkComponent", () => {
  it("renders correctly", () => {
    render(
      <ActiveLink href="/" activeClassName="active">
        <a>Home</a>
      </ActiveLink>,
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("adds active class if the link is currently active", () => {
    render(
      <ActiveLink href="/" activeClassName="active">
        <a>Home</a>
      </ActiveLink>,
    );

    expect(screen.getByText("Home")).toHaveClass("active");
  });
});
