import React from 'react';

// class App extends Component {
//   render() {
//     const dom = <h1>Hi!</h1>;
//     return dom;
//   } 
// }

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>Nya!</div>
}

export default App;
