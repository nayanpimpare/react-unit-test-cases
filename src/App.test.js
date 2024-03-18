/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("App: ", () => {
  test("renders learn react link", () => {
    const { rerender, unmount } = render(<App {...{ fname: "Nayan" }} />);
    const linkElement = screen.getByText(/learn react/i);

    rerender(<App {...{ fname: "Nayan Pimpare" }} />);
    expect(linkElement).toBeInTheDocument();
    unmount();
  });

  test("should called handleClick function", () => {
    const { container, unmount } = render(<App />);
    let count = 0;
    while (count < 5) {
      fireEvent.click(screen.getByTestId("img"));
      count++;
    }

    expect(container.querySelector(".App-link")).toBeInTheDocument();
    unmount();
  });
});
