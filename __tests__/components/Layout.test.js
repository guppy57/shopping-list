import React from "react";
import { render, screen } from "@testing-library/react";
import Layout from "../../components/Layout";

describe("Layout - Dumb Component", () => {
    it("should render main component", () => {
        render(<Layout/>);
        const main = screen.getByRole("main");
        expect(main).toBeInTheDocument();
    });

    it("should have correct number of children in main tag", () => {
        render(<Layout><div/><div/><div/></Layout>);
        const main = screen.getByRole("main");
        expect(main.children.length).toBe(3);
    });
});
