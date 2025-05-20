import { useState } from "react";

const App = () => {
  console.log('App rendered')
  const stories = [
    {
      title: "React",
      url: "https://react.dev/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
    {
      title: "Instagram",
      url: "www.instagram.com",
      author: "Bojan Lukic",
      num_comments: 5,
      points: 2,
      objectID: 2,
    },
  ];

  const handleSearch = (event) => {
    console.log(event.target.value);
    };

  return (
    <div>
      <h1>My hacker stories</h1>

      <Search onSearch={handleSearch}/>

      <hr />

      <List list={stories} />
      <hr />

      <Counter />

      <hr />

      <TextHandler />
    </div>
  );
};

const List = (props) => {
  console.log('List rendered')
  return(
  <ul>
    {props.list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);
}

const Item = (props) => (
  <li>
    <span>
      <a href={props.item.url}>{props.item.title}</a>
    </span>
    <span>{props.item.author}</span>
    <span>{props.item.num_comments}</span>
    <span>{props.item.points}</span>
  </li>
);

const Search = (props) => {
  console.log('Search rendered')
  let [searchTerm, setSearchTerm] = useState('')
  const handleChange = (event) => {
    setSearchTerm(event.target.value)
    props.onSearch(event);
  };
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
    </div>
  );
};

const Counter = () => {
  console.log('Counter rendered')
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <span>Count: {count}</span>
      <button onClick={handleClick}>Increase count</button>
    </div>
  );
};

const other = () => console.log("Some other activity happened.");

const TextHandler = () => {
  console.log('Text Handler rendered')
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} onBlur={other} />

      {text}
    </div>
  );
};

export default App;

// const secondList = [
//   {
//     title: "Zorana",
//     url: "https://react.dev/",
//     author: "Jordan Walke",
//     num_comments: 3,
//     points: 4,
//     objectID: 0,
//   },
//   {
//     title: "Danica",
//     url: "https://redux.js.org/",
//     author: "Dan Abramov, Andrew Clark",
//     num_comments: 2,
//     points: 5,
//     objectID: 1,
//   },
//   {
//     title: "Ljilja",
//     url: "www.instagram.com",
//     author: "Bojan Lukic",
//     num_comments: 5,
//     points: 2,
//     objectID: 2,
//   }
// ];

// const thirdList = [
//   {
//     title: "Sasa",
//     url: "https://react.dev/",
//     author: "Jordan Walke",
//     num_comments: 3,
//     points: 4,
//     objectID: 0,
//   },
//   {
//     title: "Stojan",
//     url: "https://redux.js.org/",
//     author: "Dan Abramov, Andrew Clark",
//     num_comments: 2,
//     points: 5,
//     objectID: 1,
//   },
//   {
//     title: "Dragana",
//     url: "www.instagram.com",
//     author: "Bojan Lukic",
//     num_comments: 5,
//     points: 2,
//     objectID: 2,
//   }
// ];
