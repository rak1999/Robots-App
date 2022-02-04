import React from "react";
import ProductGrid from "./components/ProductGrid";
import Search from "./components/Search";

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Desi Myntra</h1>
        <Search />
        <ProductGrid />
      </>
    );
  }
}

export default App;
