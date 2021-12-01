import { useQuery } from '@apollo/client';
import BottomBanner from 'components/BottomBanner/BottomBanner';
import Footer from 'components/Footer/Footer';
import ProductList from 'components/ProductList/ProductList';
import { GET_PRODUCTS } from 'graphql/queries';
import React from 'react'

export default function NewProductPage() {
    const { data } = useQuery(GET_PRODUCTS, {variables: {order_by: {created_at: "desc"}}});

    return (
        <div>
        <ProductList data={data} title="NEW PRODUCT" ></ProductList>
        <BottomBanner></BottomBanner>
        <Footer></Footer>
      </div>
    )
}
