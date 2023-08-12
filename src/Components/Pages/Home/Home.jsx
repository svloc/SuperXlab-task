import React from "react";
import { Outlet } from "react-router-dom";
import Wrapper from "./Wrapper";

function Home() {
    return (<Wrapper><Outlet /></Wrapper>);
}

export default Home;