import { gql } from "@apollo/client";

export default function GetCharacters({ page, name, status }: QueryType) {
  let filter = "";
  if (name.length > 0 && status.length > 0) {
    filter = `name: "${name}", status: "${status}"`;
  } else if (name.length > 0) {
    filter = `name: "${name}"`;
  } else if (status.length > 0) {
    filter = `status: "${status}"`;
  }

  return gql`
    query {
      characters(page: ${page}, filter: { ${filter} } ) {
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

type QueryType = {
  page: number;
  name: string;
  status: string;
};
