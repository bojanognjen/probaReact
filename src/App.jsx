import { createRoot } from 'react-dom/client'

const firstList = [
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
  }
];

const secondList = [
  {
    title: "Zorana",
    url: "https://react.dev/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Danica",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
  {
    title: "Ljilja",
    url: "www.instagram.com",
    author: "Bojan Lukic",
    num_comments: 5,
    points: 2,
    objectID: 2,
  }
];

const thirdList = [
  {
    title: "Sasa",
    url: "https://react.dev/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Stojan",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
  {
    title: "Dragana",
    url: "www.instagram.com",
    author: "Bojan Lukic",
    num_comments: 5,
    points: 2,
    objectID: 2,
  }
];

function App() {
  return (
    <div>
      <h1>My hacker stories</h1>

      <Search />

      <hr />

      <List list={firstList}/>
      <List list={secondList}/>
      <List list={thirdList}/>
    </div>
  );
}

function List({list}) {
  return (
    <ul>
        {list.map((item) => (
          <Item item={item}/>
        ))}
    </ul>
  );
}

function Item({ item }) {
  return (
    <li>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
    </li>
  );
}

function Search() {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;
