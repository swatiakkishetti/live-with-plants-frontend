import gql from "graphql-tag";

export const PRODUCT_BY_CATEGORY_NAME = gql`
  query productByCategoryName($categoryName: String!) {
    productByCategoryName(categoryName: $categoryName) {
      productId
      productName
      description
      imageUrl
      category {
        categoryId
        categoryName
        description
      }
      price
    }
  }
`;