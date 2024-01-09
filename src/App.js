import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Categories from "./components/Products/Categories";
import ProductList from "./components/Products/ProductList";
import Search from "./components/Products/Search";

function App() {
  const [search, setSearch] = useState("");
  const [click, setClick] = useState("");
  const [refresh, setRefresh]=useState(true)
  const handleSearch = (e) => {
    setSearch(e);
  };
  const handleClick = (categories) => {
    setClick(categories);
    setRefresh(!refresh)
  };
  console.log(refresh);
  return (
    <div>
      <Header />
      <Categories handleClick={handleClick} />
      <Search handleSearch={handleSearch} />
      <ProductList search={search} click={click} refresh={refresh}/>
    </div>
  );
}

export default App;
