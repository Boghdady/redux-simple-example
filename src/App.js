import './App.css';

import { connect } from 'react-redux';




function App(props) {



  return (
    <div className="App">
      <header className="App-header">
      <div>Welcome Resct</div>
      <button onClick={props.increase}> + </button>
      <div>{props.count}</div>
      <button onClick={props.decrease} > - </button>
      </header>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    increase: () => dispatch({type:"INCREASE"}),
    decrease: () => dispatch({type: "DECREASE"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
