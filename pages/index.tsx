import React from "react";
import styled from "styled-components";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { withApollo } from '../lib/apollo'

const Layout = styled.div`
  h1 {
    color: red;
    font-size: 50px;
  }
`;

const Index = (props: any) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map((show: any) => (
        <li key={show.id}>
          <Link href={`/events/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map((entry: any) => entry.show)
  };
};

export default withApollo({ ssr: true })(Index)

