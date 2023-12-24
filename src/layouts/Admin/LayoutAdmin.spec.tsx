import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { routerConfig } from "../../routes/router";
import { GoogleOAuthProvider } from "@react-oauth/google";

describe("Layout Admin Test", () => {
  const renderWithRoute = (route = "/") => {
    const router = createMemoryRouter(routerConfig, {
      initialEntries: [route]
    });
    return render(
      <GoogleOAuthProvider clientId="229124352543-qgtig56p68bvurk27a54vl2jr12ct6qe.apps.googleusercontent.com">
        <RouterProvider router={router} />
      </GoogleOAuthProvider>
    );
  };

  it("should render login page because no authenticated", () => {
    renderWithRoute("/admin-dashboard");

    screen.debug();
    const el: HTMLImageElement = screen.getByAltText("login");
    expect(el.src).toContain("login-Admin");
  });
});
