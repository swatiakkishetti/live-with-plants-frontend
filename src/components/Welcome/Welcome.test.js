import React from "react";
import {render, screen} from '@testing-library/react';
import Welcome from "./Welcome";

describe('Text related', () => {
    test('read welcome to the inventory exact text', () => {
        render(<Welcome/>)
        const welcomeText = screen.getByText("Welcome to the inventory!");
        expect(welcomeText).toBeInTheDocument();
    });

    test('read welcome to the inventory text', () => {
        render(<Welcome/>)
        const welcomeText = screen.getByText("welcome to the inventory", {exact: false});
        expect(welcomeText).toBeInTheDocument();
    });
})


