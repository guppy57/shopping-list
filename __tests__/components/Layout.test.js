import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../../components/Layout";
import Layout from "../../components/Layout";

describe("Layout - Dumb Component", () => {
    it("should render main component", () => {
        render(<Layout/>);
        const main = screen.getByRole("main");
        expect(main).toBeInTheDocument();
    });
});
