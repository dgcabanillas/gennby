Home = React.createClass({
  render() {
    return (
      <div>
        <h1>Welcome to Genbby! </h1>
        { User.isLoggedIn()? 'yes': 'no'}
      </div>
    );
  }
});
