export const getProviderId = /* GraphQL */ `
  query GetProvider($id: ID!) {
    getProvider(id: $id) {
      id
    }
  }
`;

export const getProvider = /* GraphQL */ `
  query getProvider($id: ID!) {
    getProvider(id: $id) {
      id
      type
      latitude
      longitude
      heading
      isActive
      userId
      user {
        id
        username
        email
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;

export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        type
        status
        originLatitude
        oreiginLongitude
        destLatitude
        destLongitude
        userId
        user {
          id
          username
          email
          createdAt
          updatedAt
        }
        providerId
        provider {
          id
          type
          latitude
          longitude
          heading
          isActive
          userId
          createdAt
          updatedAt
        }
        updatedAt
      }
      nextToken
    }
  }
`;