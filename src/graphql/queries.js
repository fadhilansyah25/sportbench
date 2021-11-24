import { gql } from "@apollo/client";

export const USER_REGISTRATION = gql`
  mutation MyMutation(
    $email: bpchar!
    $fullname: name!
    $id: bpchar!
    $no_telephone: bpchar!
  ) {
    insert_sport_bench_users(
      objects: {
        email: $email
        fullname: $fullname
        id: $id
        no_telephone: $no_telephone
      }
    ) {
      affected_rows
    }
  }
`;

export const GET_USER = gql`
  query MyQuery($where: sport_bench_users_bool_exp = {}) {
    sport_bench_users(where: $where) {
      email
      fullname
      no_telephone
    }
  }
`;
