import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";

function renderApp() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}

test("renders portfolio header navigation", () => {
  renderApp();
  const nav = screen.getByRole("navigation", { name: "주요 섹션" });
  expect(nav).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "About" })).toBeInTheDocument();
});
