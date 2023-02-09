import React, { useEffect, useState } from "react"
import { useQuery } from "@apollo/client"
import gql from "graphql-tag"

const ALL_CATEGORIES = gql`
{
    allCategories {
     categoryId
     categoryName
     description
    }
}
`;

const Category = () => {
    const { loading, error, data } = useQuery(ALL_CATEGORIES)

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        if(data){
            setCategories(data.allCategories);
        }
    }, [data]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        categories.map(({ categoryId, categoryName, description }) => (
        <div key={categoryId}>
            <p>{`${categoryName}`}</p>
            <p>{`${description}`}</p>
        </div>
    )));
}

export default Category;