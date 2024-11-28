export const Q6 = () => {
    return (
        <div className="flex flex-col gap-3 text-left text-black text-sm h-full w-full px-10 py-6">
        <p className="text-base text-black/30 mb-1">Question 6:</p>
        <p className="mb-2 text-black/60 text-lg">
        Please write the sample code to debounce handleOnChange
        </p>
        <div className="text-black/30 text-sm border border-black/10 p-4">
          <p className="">{`var SearchBox = React.createClass({`}</p>
          <p className="pl-1">{`render: function() {`}</p>
          <p className="pl-2">{`return <input type="search" name="p" onChange={this.handleOnChange}/>;`}</p>
          <p className="pl-2">{`},`}</p>
          <p className="pl-2">{`handleOnChange: function(event) {`}</p>
          <p className="pl-4">{`// make ajax call`}</p>
          <p className="pl-1">{`}`}</p>
          <p className="">{`});`}</p>
        </div>
        <div className="text-black/70 text-sm border border-black/10 p-4">
          <p className="">{`class SearchBox extends React.Component {`}</p>
          <p className="pl-1">{`constructor(props) {`}</p>
          <p className="pl-2">{` super(props);`}</p>
          <p className="pl-2">{`this.state = {`}</p>
          <p className="pl-4">{`query: '',`}</p>
          <p className="pl-2">{`};`}</p>
          <p className="pl-2 mt-2">{`// Bind the debounce function to the instance`}</p>
          <p className="pl-2">{`this.debouncedOnChange = this.debounce(this.handleOnChange.bind(this),300);`}</p>
          <p className="pl-1">{`}`}</p>
          <p className="pl-1 mt-2 text-black/30">{`// Debounce utility function`}</p>
          <p className="pl-1 mt-2">{`debounce(func, delay){`}</p>
          <p className="pl-2">{`let timer;`}</p>
          <p className="pl-2">{`return (...args) => {`}</p>
          <p className="pl-4">{`clearTimeout(timer);`}</p>
          <p className="pl-4">{`timer = setTimeout(() => func(...args),delay);`}</p>
          <p className="pl-2">{`};`}</p>
          <p className="pl-1">{`}`}</p>
          <p className="pl-1 mt-2">{`handleOnChange(event) {`}</p>
          <p className="pl-2">{`const query = event.target.value;`}</p>
          <p className="pl-2">{`this.setState({query});`}</p>
          <p className="pl-2 mt-1 text-black/30">{`// Simulate an AJAX call`}</p>
          <p className="pl-2">{`console.log('Searching for:`}{"${query}'"}{');'}</p>
          <p className="pl-1">{`}`}</p>
          <p className="pl-1 mt-2">{`render() {`}</p>
          <p className="pl-2">{`return (`}</p>
          <p className="pl-4">{`<input`}</p>
          <p className="pl-5">{`type="search"`}</p>
          <p className="pl-5">{`name="p"`}</p>
          <p className="pl-5">{`onChange={this.debounceOnChange} // Attach the debvounced function`}</p>
          <p className="pl-5">{`placeholder="search..."`}</p>
          <p className="pl-4">{`/>`}</p>
          <p className="pl-2">{`);`}</p>
          <p className="pl-1">{`}`}</p>
          <p className="">{`}`}</p>
          <p className="mt-4">{`ReactDOM.render(<SearchBox />,`}</p>
          <p className="pl-1">{`document.getElementById('root')`}</p>
          <p className="">{`);`}</p>
        </div>
        <div>
            <p className="text-lg text-black">Debounce Utility Function:</p>
            <p className="text-black/70 text-sm">
              <span>The </span>
              <span className="font-medium"> debounce </span>
              <span> function delays the execution of </span>
              <span className="font-medium"> handleOnChange </span>
              <span> until after the user stops typing for the specified delay</span>
              <span> {`(`}</span>
              <span className="font-medium"> 300ms </span>
              <span> in this case</span>
              <span> {`).`}</span>
                </p>
        </div>
        <div>
            <p className="text-lg text-black">How It Works:</p>
            <p className="text-black/70 text-sm">
              <span> Each tiome the  </span>
              <span className="font-medium"> OnChange </span>
              <span> event triggers, the existing timer is cleared </span>
              <span> {`(`}</span>
              <span className="font-medium"> clearTimeout(timer) </span>
              <span> {`).`}</span>
                </p>
        </div>
        <div>
            <p className="text-lg text-black">Functional Updates:</p>
            <p className="text-black/70 text-sm">
              <span>the debounced function is created in the constructor and attached to the</span>
              <span className="font-medium"> OnChange </span>
              <span> handler to avoid creating a new function on every render. </span>
                </p>
        </div>
      </div>
    );
}