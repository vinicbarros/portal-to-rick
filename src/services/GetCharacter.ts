import { gql } from "@apollo/client";

export default function GetCharacters(page: number) {
  return gql`
    query {
      characters(page: ${page}) {
        results {
          name
          image
          status
          species
          location {
            name
          }
          origin {
            name
          }
        }
      }
    }
  `;
}
