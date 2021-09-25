"use strict";

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return "You liked this.";
    }

    return <button onClick={() => this.setState({ liked: true })}>Like</button>;
  }
}

function MultipleButton() {
  return (
    <div>
      <p>button1</p>
      <LikeButton />
      <p>button2</p>
      <LikeButton />
      <p>button3</p>
      <LikeButton />
    </div>
  );
}

let domContainer = document.querySelector("#like_button_container");
ReactDOM.render(<MultipleButton />, domContainer);
