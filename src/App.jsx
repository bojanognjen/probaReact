import { useState, useEffect } from "react";

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
  
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem('search') ?? 'React'
  )

  const searchedStories = stories.filter((story)=>  story.title.toLocaleLowerCase().includes(searchTerm.toLowerCase()))
  
  useEffect(()=> {
    localStorage.setItem('search', searchTerm)
  }, [searchTerm])

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
    };

  return (
    <div>
      <h1>My hacker stories</h1>

      <Search search={searchTerm} onSearch={handleSearch}/>

      <hr />

      <List list={searchedStories} />
      <hr />

      <Counter />

      <hr />

      <TextHandler />
    </div>
  );
};

const List = ({list}) => (
  <ul>
    {list.map((item) => (
      <Item key={item.objectID} 
          item={item}
          />
    ))}
  </ul>
);


const Item = ({item}) => (
  <li>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </li>
);

const Search = ({search, onSearch}) => {
  console.log('Search rendered')

  return (
    <div>
      <InputWithLabel id={search} value={search} onInputChange={onSearch} children="Search: "/>
    </div>
  );
};

const InputWithLabel = ({id, type = 'text', value, onInputChange, children}) => {
  return(
    <>
      <label htmlFor={id}>{children}</label>
      <input id={id} type={type} value={value} onChange={onInputChange} />
    </>
  )
}

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
