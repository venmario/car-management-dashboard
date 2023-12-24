import { render, screen } from "@testing-library/react";
import LandingPage from "./LandingPage";
import { describe, expect, it } from "vitest";
import { BrowserRouter } from "react-router-dom";

describe("Landing Page", () => {
  it("should render all section in landing page", () => {
    render(<LandingPage />, { wrapper: BrowserRouter });

    const heroSection = screen.getByTestId("hero");
    const ourserviceSection = screen.getByTestId("ourservice");
    const whyusSection = screen.getByTestId("whyus");
    const testimonialsSection = screen.getByTestId("testimonials");
    const ctabannerSection = screen.getByTestId("ctabanner");
    const faqSection = screen.getByTestId("faq");
    expect(heroSection).toBeInTheDocument();
    expect(ourserviceSection).toBeInTheDocument();
    expect(whyusSection).toBeInTheDocument();
    expect(testimonialsSection).toBeInTheDocument();
    expect(ctabannerSection).toBeInTheDocument();
    expect(faqSection).toBeInTheDocument();
  });
});
