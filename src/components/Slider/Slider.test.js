import { render, screen } from "@testing-library/react";
import React from "react";
import Slider from "./Slider";


describe('Slider component', () => {

    jest.mock('../../images/category-icon.png', () => 'icon1');
jest.mock('../../images/slide-image-2.jpeg', () => 'icon2');
jest.mock('../../images/slide-image-3.jpeg', () => 'icon3');
jest.mock('../../images/slide-image-4.jpeg', () => 'icon4');
jest.mock('../../images/slide-image-5.webp', () => 'icon5');
jest.mock('../../images/slide-image-6.webp', () => 'icon6');

    test('validate six images to be present', () => {
        render(<Slider/>);
        const imageElements = screen.getAllByRole('img');
        expect(imageElements).toHaveLength(6);
    });

    test('validate every image to have an alt attribute', () => {
        render(<Slider/>);
        const imageElements = screen.getAllByRole('img');
        
        const expectedAlts=['icon1', 'icon2', 'icon3', 'icon4', 'icon5', 'icon6'];
        imageElements.forEach((image, index) => {
            expect(image).toHaveAttribute('alt', expectedAlts[index]);
        })
    })
})

