const e = React.createElement();

function H1() {
  return e("h1", {}, "Hello World");
}

ReactDOM.render(<h1>hello world</h1>, document.getElementById("root"));
