import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// function Poster({ post }) {
//   post = {
//     image:
//       "https://cdn.britannica.com/60/5760-004-FDD0E2AB/Apples.jpg?s=1500x700&q=85",
//     title: "APPLE",
//     text: "This is a fruit",
//   };
//   return (
//     <div>
//       <img src={post.image} alt="fruit" />
//       <h1>{post.title}</h1>
//       <p>{post.text}</p>
//     </div>
//   );
// }

// function IconButton({ children }) {
//   return (
//     <button>
//       <i class="target-icon" />
//       {children}
//     </button>
//   );
// }

function NavItem({ url, text }) {
  return <a href={url}>{text}</a>;
}

function Nav({ children }) {
  React.Children.forEach(children);
  console.log(children);
  return (
    <div>
      <NavItem url="/" text="Home" />
      <NavItem url="/about" text="About" />
      <a href="/contact">Contact</a>
    </div>
  );
}

ReactDOM.render(<Nav children={NavItem} />, document.querySelector("#root"));
