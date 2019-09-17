ReactDOM.render(
  <div>
    <Parent>
      <h1>React</h1>
      <p>Rocks</p>
    </Parent>
    <Parent>
      <img src="images/avatar.png" alt="profile picture" width="100"/>
    </Parent>
    <Parent>
      <a href="http://react.rocks">http://react.rocks</a>
    </Parent>
    <Parent>
      <a className="btn btn-danger" href="http://react.rocks">http://react.rocks</a>
    </Parent>
  </div>,
  document.getElementById('content')
);