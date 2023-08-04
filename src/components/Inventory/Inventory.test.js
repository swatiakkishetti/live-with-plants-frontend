import React from "react";
import Inventory, { ALL_PRODUCTS } from "./Inventory";
import { waitFor, screen, render } from "@testing-library/react";
import gql from "graphql-tag";
import { MockedProvider} from '@apollo/client/testing';

const mocks = [
    {
        request: {
            query: ALL_PRODUCTS,
        },

        result: {
            data: { 
                allProducts: gql [
                    {
                        productId: 1,
                        productName: 'Alium',
                        description: 'Go for well-drained soil and a sunny spot for aliums, which are also called ornamental onions. These unique purple plants grow from bulbs and have a garlic or onion-like odor.',
                        imageUrl: '/images/Alium.jpeg',
                        category: {
                            categoryId: 1,
                            categoryName: 'Summer Plants',
                            description: 'There is nothing like a garden full of gorgeous flowers that can withstand the summer heat.',
                        },
                        price: 249
                    },
                    {
                        productId: 2,
                        productName: 'Gerbera Daisies',
                        description: 'Often found in rainbow hues, these bold blooms are partial to full sun as well as afternoon shade. Aim for well-drained soil, as they can rot if it is too soggy.',
                        imageUrl: '/images/Gerbera Daisies.jpeg',
                        category: {
                            categoryId: 1,
                            categoryName: 'Summer Plants',
                            description: 'There is nothing like a garden full of gorgeous flowers that can withstand the summer heat.',
                        },
                        price: 149
                    }
                ]
            }
        }
    },
]

test('validate all products', async () => {
    const { findByText, getByText } = render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <Inventory/>
        </MockedProvider>
    )

    await waitFor(() => {
        expect(screen.getByText('Alium')).toBeInTheDocument();
    });
});