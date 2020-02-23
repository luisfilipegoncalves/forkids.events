import React from "react";
import styled from "styled-components";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { withApollo } from "../../lib/apollo";

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

export const ALL_EVENTS_QUERY = gql`
  query events {
    events {
      id
      name
      createdAt
    }
  }
`;

const Events = () => {
  const { data, error } = useQuery(ALL_EVENTS_QUERY);
  if (error) console.error(error);
  const events = data && Array.isArray(data.events) ? data.events : [];
  console.log("DATA: ", data);
  return (
    <div>
      <Title>Events </Title>
      <ul>
        {events.map((event: any) => (
          <li key={event.id}>{event.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default withApollo({ ssr: true })(Events);
