import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

// Local Imports
import { Sidebar } from "./components/Sidebar";

import { About, Calendar } from "./pages";
function App() {
  return (
    <Router>
      <Flex direction={["column", "column", "row", "row"]} minH="100vh">
        <Sidebar />
        <Flex
          bgColor="gray.200"
          w="full"
          alignContent="center"
          justifyContent="center"
          alignItems="center"
        >
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/" component={Calendar} />
          </Switch>
        </Flex>
      </Flex>
    </Router>
  );
}

export default App;
