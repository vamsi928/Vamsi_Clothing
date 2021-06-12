import React from "react";
import "./homepage.style.scss";
import Directory from "../../Components/directory/directory.Component";
import styled from "styled-components";

const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomepageComponent = () => {
  return (
    <HomePage>
      <Directory />
    </HomePage>
  );
};

export default HomepageComponent;
