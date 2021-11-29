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

export const GET_PRODUCTS = gql`
  query MyQuery($where: sport_bench_products_bool_exp = {}) {
    sport_bench_products(where: $where) {
      id
      instock
      product_image
      product_name
      rating
      price
      product_category {
        category
      }
    }
  }
`;

export const INSERT_ORDER = gql`
  mutation MyMutation(
    $address: String!
    $color: String!
    $description: String = ""
    $email: bpchar!
    $fullname: name!
    $noTelephone: bpchar!
    $payment_image: bpchar!
    $product_id: uuid!
    $quantity: Int!
    $size: bpchar!
    $total: Int!
    $user_id: bpchar!
  ) {
    insert_sport_bench_orders(
      objects: {
        address: $address
        color: $color
        description: $description
        email: $email
        fullname: $fullname
        noTelephone: $noTelephone
        payment_image: $payment_image
        product_id: $product_id
        quantity: $quantity
        size: $size
        total: $total
        user_id: $user_id
      }
    ) {
      affected_rows
    }
  }
`;
