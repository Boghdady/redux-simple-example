import './App.css';

import { connect } from 'react-redux';




function App(props) {



  return (
    <div className="App">
      <header className="App-header">
      <div>Welcome Resct</div>
      <button > + </button>
      <div>{props.count}</div>
      <button > - </button>
      </header>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(App);
