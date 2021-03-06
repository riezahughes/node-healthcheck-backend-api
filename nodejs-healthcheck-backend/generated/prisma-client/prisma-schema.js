module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateEndpoint {
  count: Int!
}

type AggregateError {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Endpoint {
  id: ID!
  name: String!
  is_working: Boolean
  file_name: String!
  last_checked: DateTime
  errors(where: ErrorWhereInput, orderBy: ErrorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Error!]
}

type EndpointConnection {
  pageInfo: PageInfo!
  edges: [EndpointEdge]!
  aggregate: AggregateEndpoint!
}

input EndpointCreateInput {
  id: ID
  name: String!
  is_working: Boolean
  file_name: String!
  last_checked: DateTime
  errors: ErrorCreateManyWithoutEndpointInput
}

input EndpointCreateOneWithoutErrorsInput {
  create: EndpointCreateWithoutErrorsInput
  connect: EndpointWhereUniqueInput
}

input EndpointCreateWithoutErrorsInput {
  id: ID
  name: String!
  is_working: Boolean
  file_name: String!
  last_checked: DateTime
}

type EndpointEdge {
  node: Endpoint!
  cursor: String!
}

enum EndpointOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  is_working_ASC
  is_working_DESC
  file_name_ASC
  file_name_DESC
  last_checked_ASC
  last_checked_DESC
}

type EndpointPreviousValues {
  id: ID!
  name: String!
  is_working: Boolean
  file_name: String!
  last_checked: DateTime
}

type EndpointSubscriptionPayload {
  mutation: MutationType!
  node: Endpoint
  updatedFields: [String!]
  previousValues: EndpointPreviousValues
}

input EndpointSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: EndpointWhereInput
  AND: [EndpointSubscriptionWhereInput!]
  OR: [EndpointSubscriptionWhereInput!]
  NOT: [EndpointSubscriptionWhereInput!]
}

input EndpointUpdateInput {
  name: String
  is_working: Boolean
  file_name: String
  last_checked: DateTime
  errors: ErrorUpdateManyWithoutEndpointInput
}

input EndpointUpdateManyMutationInput {
  name: String
  is_working: Boolean
  file_name: String
  last_checked: DateTime
}

input EndpointUpdateOneRequiredWithoutErrorsInput {
  create: EndpointCreateWithoutErrorsInput
  update: EndpointUpdateWithoutErrorsDataInput
  upsert: EndpointUpsertWithoutErrorsInput
  connect: EndpointWhereUniqueInput
}

input EndpointUpdateWithoutErrorsDataInput {
  name: String
  is_working: Boolean
  file_name: String
  last_checked: DateTime
}

input EndpointUpsertWithoutErrorsInput {
  update: EndpointUpdateWithoutErrorsDataInput!
  create: EndpointCreateWithoutErrorsInput!
}

input EndpointWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  is_working: Boolean
  is_working_not: Boolean
  file_name: String
  file_name_not: String
  file_name_in: [String!]
  file_name_not_in: [String!]
  file_name_lt: String
  file_name_lte: String
  file_name_gt: String
  file_name_gte: String
  file_name_contains: String
  file_name_not_contains: String
  file_name_starts_with: String
  file_name_not_starts_with: String
  file_name_ends_with: String
  file_name_not_ends_with: String
  last_checked: DateTime
  last_checked_not: DateTime
  last_checked_in: [DateTime!]
  last_checked_not_in: [DateTime!]
  last_checked_lt: DateTime
  last_checked_lte: DateTime
  last_checked_gt: DateTime
  last_checked_gte: DateTime
  errors_every: ErrorWhereInput
  errors_some: ErrorWhereInput
  errors_none: ErrorWhereInput
  AND: [EndpointWhereInput!]
  OR: [EndpointWhereInput!]
  NOT: [EndpointWhereInput!]
}

input EndpointWhereUniqueInput {
  id: ID
}

type Error {
  id: ID!
  endpoint: Endpoint!
  time_of_error: DateTime!
  notes: String
}

type ErrorConnection {
  pageInfo: PageInfo!
  edges: [ErrorEdge]!
  aggregate: AggregateError!
}

input ErrorCreateInput {
  id: ID
  endpoint: EndpointCreateOneWithoutErrorsInput!
  notes: String
}

input ErrorCreateManyWithoutEndpointInput {
  create: [ErrorCreateWithoutEndpointInput!]
  connect: [ErrorWhereUniqueInput!]
}

input ErrorCreateWithoutEndpointInput {
  id: ID
  notes: String
}

type ErrorEdge {
  node: Error!
  cursor: String!
}

enum ErrorOrderByInput {
  id_ASC
  id_DESC
  time_of_error_ASC
  time_of_error_DESC
  notes_ASC
  notes_DESC
}

type ErrorPreviousValues {
  id: ID!
  time_of_error: DateTime!
  notes: String
}

input ErrorScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  time_of_error: DateTime
  time_of_error_not: DateTime
  time_of_error_in: [DateTime!]
  time_of_error_not_in: [DateTime!]
  time_of_error_lt: DateTime
  time_of_error_lte: DateTime
  time_of_error_gt: DateTime
  time_of_error_gte: DateTime
  notes: String
  notes_not: String
  notes_in: [String!]
  notes_not_in: [String!]
  notes_lt: String
  notes_lte: String
  notes_gt: String
  notes_gte: String
  notes_contains: String
  notes_not_contains: String
  notes_starts_with: String
  notes_not_starts_with: String
  notes_ends_with: String
  notes_not_ends_with: String
  AND: [ErrorScalarWhereInput!]
  OR: [ErrorScalarWhereInput!]
  NOT: [ErrorScalarWhereInput!]
}

type ErrorSubscriptionPayload {
  mutation: MutationType!
  node: Error
  updatedFields: [String!]
  previousValues: ErrorPreviousValues
}

input ErrorSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ErrorWhereInput
  AND: [ErrorSubscriptionWhereInput!]
  OR: [ErrorSubscriptionWhereInput!]
  NOT: [ErrorSubscriptionWhereInput!]
}

input ErrorUpdateInput {
  endpoint: EndpointUpdateOneRequiredWithoutErrorsInput
  notes: String
}

input ErrorUpdateManyDataInput {
  notes: String
}

input ErrorUpdateManyMutationInput {
  notes: String
}

input ErrorUpdateManyWithoutEndpointInput {
  create: [ErrorCreateWithoutEndpointInput!]
  delete: [ErrorWhereUniqueInput!]
  connect: [ErrorWhereUniqueInput!]
  set: [ErrorWhereUniqueInput!]
  disconnect: [ErrorWhereUniqueInput!]
  update: [ErrorUpdateWithWhereUniqueWithoutEndpointInput!]
  upsert: [ErrorUpsertWithWhereUniqueWithoutEndpointInput!]
  deleteMany: [ErrorScalarWhereInput!]
  updateMany: [ErrorUpdateManyWithWhereNestedInput!]
}

input ErrorUpdateManyWithWhereNestedInput {
  where: ErrorScalarWhereInput!
  data: ErrorUpdateManyDataInput!
}

input ErrorUpdateWithoutEndpointDataInput {
  notes: String
}

input ErrorUpdateWithWhereUniqueWithoutEndpointInput {
  where: ErrorWhereUniqueInput!
  data: ErrorUpdateWithoutEndpointDataInput!
}

input ErrorUpsertWithWhereUniqueWithoutEndpointInput {
  where: ErrorWhereUniqueInput!
  update: ErrorUpdateWithoutEndpointDataInput!
  create: ErrorCreateWithoutEndpointInput!
}

input ErrorWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  endpoint: EndpointWhereInput
  time_of_error: DateTime
  time_of_error_not: DateTime
  time_of_error_in: [DateTime!]
  time_of_error_not_in: [DateTime!]
  time_of_error_lt: DateTime
  time_of_error_lte: DateTime
  time_of_error_gt: DateTime
  time_of_error_gte: DateTime
  notes: String
  notes_not: String
  notes_in: [String!]
  notes_not_in: [String!]
  notes_lt: String
  notes_lte: String
  notes_gt: String
  notes_gte: String
  notes_contains: String
  notes_not_contains: String
  notes_starts_with: String
  notes_not_starts_with: String
  notes_ends_with: String
  notes_not_ends_with: String
  AND: [ErrorWhereInput!]
  OR: [ErrorWhereInput!]
  NOT: [ErrorWhereInput!]
}

input ErrorWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createEndpoint(data: EndpointCreateInput!): Endpoint!
  updateEndpoint(data: EndpointUpdateInput!, where: EndpointWhereUniqueInput!): Endpoint
  updateManyEndpoints(data: EndpointUpdateManyMutationInput!, where: EndpointWhereInput): BatchPayload!
  upsertEndpoint(where: EndpointWhereUniqueInput!, create: EndpointCreateInput!, update: EndpointUpdateInput!): Endpoint!
  deleteEndpoint(where: EndpointWhereUniqueInput!): Endpoint
  deleteManyEndpoints(where: EndpointWhereInput): BatchPayload!
  createError(data: ErrorCreateInput!): Error!
  updateError(data: ErrorUpdateInput!, where: ErrorWhereUniqueInput!): Error
  updateManyErrors(data: ErrorUpdateManyMutationInput!, where: ErrorWhereInput): BatchPayload!
  upsertError(where: ErrorWhereUniqueInput!, create: ErrorCreateInput!, update: ErrorUpdateInput!): Error!
  deleteError(where: ErrorWhereUniqueInput!): Error
  deleteManyErrors(where: ErrorWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  endpoint(where: EndpointWhereUniqueInput!): Endpoint
  endpoints(where: EndpointWhereInput, orderBy: EndpointOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Endpoint]!
  endpointsConnection(where: EndpointWhereInput, orderBy: EndpointOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EndpointConnection!
  error(where: ErrorWhereUniqueInput!): Error
  errors(where: ErrorWhereInput, orderBy: ErrorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Error]!
  errorsConnection(where: ErrorWhereInput, orderBy: ErrorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ErrorConnection!
  node(id: ID!): Node
}

type Subscription {
  endpoint(where: EndpointSubscriptionWhereInput): EndpointSubscriptionPayload
  error(where: ErrorSubscriptionWhereInput): ErrorSubscriptionPayload
}
`
      }
    