export const Q5 = () => {
  return (
    <div className="flex flex-col gap-3 text-left text-black text-sm h-full w-full px-10 py-6">
      <p className="text-base text-black/30 mb-1">Question 5:</p>
      <p className="mb-2 text-black/60 text-lg">
        Can you explain the problem with the following code, and how to fix it.
      </p>
      <div className="text-black/30 text-sm border border-black/10 p-4">
        <p className="">{`class Count extends React.Component {`}</p>
        <p className="pl-1">{`constructor(props) {`}</p>
        <p className="pl-2">{`super(props);`}</p>
        <p className="pl-2">{`this.state = { count: 0 };`}</p>
        <p className="pl-2">{`this.handleAddCount = this.handleAddCount.bind(this);`}</p>
        <p className="pl-1">{`}`}</p>
        <p className="pl-1 mt-2">{`handleAddCount(){`}</p>
        <p className="pl-2">{`this.setState({ count: this.state.count + 1 });`}</p>
        <p className="pl-2">{`this.setState({ count: this.state.count + 1 });`}</p>
        <p className="pl-2">{`this.setState({ count: this.state.count + 1 });`}</p>
        <p className="pl-1">{`}`}</p>
        <p className="pl-1 mt-2">{`render() {`}</p>
        <p className="pl-2">{`return (`}</p>
        <p className="pl-4">{`<div>`}</p>
        <p className="pl-4">{`<h2>{this.state.count}</h2>`}</p>
        <p className="pl-4">{`<button onClick={this.handleAddCount}>Add</button>`}</p>
        <p className="pl-2">{`</div>`}</p>
        <p className="pl-2">{`);`}</p>
        <p className="pl-1">{`}`}</p>
        <p className="">{`}`}</p>
        <p className="mt-4">{`ReactDOM.render(`}</p>
        <p className="pl-1">{`<Count />,`}</p>
        <p className="pl-1">{`document.getElementById('root')`}</p>
        <p className="">{`);`}</p>
      </div>
      <div className="text-black/70 text-sm border border-black/10 p-4">
        <p className="">{`class Count extends React.Component {`}</p>
        <p className="pl-1">{`constructor(props) {`}</p>
        <p className="pl-2">{`super(props);`}</p>
        <p className="pl-2">{`this.state = { count: 0 };`}</p>
        <p className="pl-2">{`this.handleAddCount = this.handleAddCount.bind(this);`}</p>
        <p className="pl-1">{`}`}</p>
        <p className="pl-1 mt-2">{`handleAddCount(){`}</p>
        <p className="pl-2 text-black/40">{`// Use the functional form of setState`}</p>
        <p className="pl-2">{`this.setState((prevState) => ({ count: prevState.count + 3 }));`}</p>
        <p className="pl-1">{`}`}</p>
        <p className="pl-1 mt-2">{`render() {`}</p>
        <p className="pl-2">{`return (`}</p>
        <p className="pl-4">{`<div>`}</p>
        <p className="pl-4">{`<h2>{this.state.count}</h2>`}</p>
        <p className="pl-4">{`<button onClick={this.handleAddCount}>Add</button>`}</p>
        <p className="pl-2">{`</div>`}</p>
        <p className="pl-2">{`);`}</p>
        <p className="pl-1">{`}`}</p>
        <p className="">{`}`}</p>
        <p className="mt-4">{`ReactDOM.render(`}</p>
        <p className="pl-1">{`<Count />,`}</p>
        <p className="pl-1">{`document.getElementById('root')`}</p>
        <p className="">{`);`}</p>
      </div>
      <div>
          <p className="text-lg text-black">Why This Works</p>
          <p className="text-black/70 text-sm">
            <span className="font-medium">{`this.setState((prevState)=> ({ count: prevState.count + 1}))`}</span>
            <span> ensure that each </span>
            <span className="font-medium"> setState </span>
            <span> call updates the state based on the latest value of </span>
            <span className="font-medium"> prevState </span>
            <span>, avoiding issues with batched updates.</span>
              </p>
      </div>
      <div>
          <p className="text-lg text-black">Batched Updates in React</p>
          <p className="text-black/70 text-sm">
            <span> React combines multiple </span>
            <span className="font-medium"> setState </span>
            <span> calls into a single update for performance reasons. Using the functional form ensure the updates happen sequentially and correctly </span>
              </p>
      </div>
    </div>
  );
};
