import React, { useEffect, useState, useContext } from "react";
import propTypes from "prop-types";
import { userContext } from "../pages/Home";
// import { Button, Text } from "./styles.js";

function Child({ name = "Jason", isLogin, fruits }) {
  const [age, setAge] = useState(15);
  const [list, setList] = useState(["jason", "toni", "ker", "fendi"]);
  const [newList, setNewList] = useState("");
  const h2 = <h2>{isLogin === true ? "is Logged in" : "log out"}</h2>;
  const [data, setData] = useState({
    names: "Jason",
    comments: "comm-1",
    age: 15,
  });

  const tes = useContext(userContext);

  const [data2, setData2] = useState([
    {
      id: 1,
      names: "Jason1",
      comments: "comm-1",
      age: 15,
    },
    {
      id: 2,
      names: "Jason2",
      comments: "comm-2",
      age: 15,
    },
    {
      id: 3,
      names: "Jason3",
      comments: "comm-3",
      age: 15,
    },
  ]);

  useEffect(() => {
    let timeout;
    if (age !== 15) {
      timeout = setTimeout(() => {
        alert("time out");
      }, 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [age]);

  const debounce = (func, delay) => {
    let timeoutId;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    };
  };

  const clickHandler = (text = "test") => {
    console.log(text);
    setAge((age) => age + 1);
    setAge((age) => age + 1);
    setAge((age) => age + 1);
    setAge((age) => age + 1);
    setAge((age) => age + 1);
  };

  const changeHandler = (e, properties) => {
    let newData = { ...data };
    newData[properties] = e.target.value;
    setData(newData);
  };

  const addList = () => {
    setList([...list, newList]);
  };

  const filterList = () => {
    setList(list.filter((item) => item.includes("a")));
  };

  const filters = () => {
    setData2((data2) => data2.filter((item) => item.id > 2));
  };

  const adds = (names, age, comments) => {
    setData2([
      ...data2,
      {
        names,
        age,
        comments,
        id: data2.length + 1,
      },
    ]);
  };
  return (
    <React.Fragment>
      <h1>{tes}</h1>
      {/* <Text>
        this is {name}, {name} {h2} my age is {age}
        {fruits
          .filter((fruits) => fruits.qty > 11)
          .map((fruit, index) => (
            <h1 key={index}>
              {fruit.name} qty is {fruit.qty}
            </h1>
          ))}
      </Text> */}
      {/* <Button onClick={() => clickHandler("bro")}>Click me</Button> */}
      <input
        value={data.names}
        type="text"
        onChange={(e) => changeHandler(e, "names")}
      />
      <h1>{data.names}</h1>
      <input
        value={data.age}
        type="text"
        onChange={(e) => changeHandler(e, "age")}
      />
      <h1>{data.age}</h1>
      <input
        value={data.comments}
        type="text"
        onChange={(e) => changeHandler(e, "comments")}
      />
      <h1>{data.comments}</h1>
      {list.map((item, index) => (
        <h1 key={index}>{item}</h1>
      ))}
      <input type="text" onChange={(e) => setNewList(e.target.value)} />
      <button onClick={addList}>Submit</button>
      <button onClick={filterList}>Filter</button>

      {data2.map((item) => (
        <ul key={item.id}>
          <li>{item.names}</li>
          <li>{item.comments}</li>
          <li>{item.age}</li>
        </ul>
      ))}

      <button onClick={filters}>filter</button>
      <button onClick={() => adds("jason-4", 17, "comments-4")}>Add</button>
    </React.Fragment>
  );
}
Child.propTypes = {
  name: propTypes.string,
  isLogin: propTypes.bool,
  fruits: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string,
      qty: propTypes.number,
    })
  ),
};

export default Child; // Corrected from child to Child
