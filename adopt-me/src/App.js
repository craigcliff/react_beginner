const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h1", {}, props.breed),
  ]);
};

const App = () => {
  //  This is how you create React render elements without using JSX
  //  These functions need to be fast (dont add side effects inside render functions)
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Peppa",
      animal: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, {
      name: "Doink",
      animal: "Cat",
      breed: "Havanese",
    }),
  ]);
};
// Creating instance of an App
ReactDOM.render(React.createElement(App), document.getElementById("root"));