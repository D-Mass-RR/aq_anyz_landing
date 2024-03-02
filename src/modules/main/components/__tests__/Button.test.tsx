import { render, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";

import { Button } from "../Button.tsx";

describe("Button test", () => {
  test("Should render the specified label and register the click", () => {
    const onClick = vi.fn();
    const label = "This is a button";

    const { getByText, getByRole } = render(
      <Button.Primary onClick={onClick}>{label}</Button.Primary>
    );

    const button = getByRole("button");

    expect(getByText(label)).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
