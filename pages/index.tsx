import React from "react";
import styled from "styled-components";
import { withApollo } from "../lib/apollo";
import UpcomingEvents from "../components/upcoming-events";

const Main = styled.main`
  h1 {
    font-size: 40px;
  }
`;

const Index = () => (
  <Main>
    <h1>Events for kids and families arround the world</h1>
    <UpcomingEvents />
  </Main>
);

export default withApollo({ ssr: true })(Index);
