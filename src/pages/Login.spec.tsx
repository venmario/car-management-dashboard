import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Login from "./Login";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

describe("login page", () => {
  it("should render login page", () => {
    render(
      <GoogleOAuthProvider clientId="229124352543-qgtig56p68bvurk27a54vl2jr12ct6qe.apps.googleusercontent.com">
        <Login />
      </GoogleOAuthProvider>,
      { wrapper: BrowserRouter }
    );
    const el: HTMLImageElement = screen.getByAltText("login");
    expect(el.src).toContain("login-Admin");
  });
});
