const React = require("react");

const Hello = () => {
  return <h1>Hello</h1>;
};

const World = () => {
  return <h2>World!</h2>;
};

class Greet extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <World />
      </div>
    );
  }
}

new Greet();
