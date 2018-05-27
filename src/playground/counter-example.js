
class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMiunsOne = this.handleMiunsOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount, 10);
        
        if (!isNaN(count)){
            this.setState(() => (
                { count : count }
            ))
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count){
            localStorage.setItem('count', this.state.count);
        }
    }

    
    
    handleAddOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }

    handleMiunsOne(){
        this.setState((pState) => {
            return{
                count: pState.count - 1
            }
        })
    }

    handleReset(){
        this.setState(() =>{
            return {
                count: 0
            }
        });

        // this.setState({
        //     count: 0
        // })

        // this.setState({
        //     count: this.state.count + 1
        // });
    }

    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne} >+ 1</button>
                <button onClick={this.handleMiunsOne} >- 1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}


ReactDOM.render(<Counter />, document.getElementById('app'));


// let count = 0;

// const addOne = () => {
//     count++;
//     renderCounterApp();
// }

// const minusOne = () => {
//     count--;
//     renderCounterApp();
// }

// const reset = () => {
//     count = 0;
//     renderCounterApp();
// }

// // Challenge

// var appRoot = document.getElementById('app');



// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button id="my-is" className="button" onClick={addOne}>+ 1</button>
//             <button onClick={minusOne}>- 1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot);
// }

// renderCounterApp();