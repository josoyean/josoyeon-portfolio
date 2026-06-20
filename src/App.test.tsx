import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("@vercel/speed-insights/react", () => ({
  SpeedInsights: () => null,
}));

test("renders portfolio header navigation", () => {
  render(<App />);
  expect(screen.getByRole("navigation", { name: "주요 섹션" })).toBeInTheDocument();
  expect(screen.getByText("About")).toBeInTheDocument();
});
