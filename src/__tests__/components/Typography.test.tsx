import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";

import { Typography } from "components/Typography.tsx";

describe("Typography test", () => {
  test("Should render with specific text", () => {
    const { getByText } = render(<Typography>Hello</Typography>);

    const span = getByText("Hello");

    expect(span).toBeInTheDocument();
  });
});
