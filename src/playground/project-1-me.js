
let onOff = 1;

let buttonDetails = 'Show';

const toggleB = () => {
    if(onOff === 0) {
        onOff = 1;
        buttonDetails = 'hide';
    } else if (onOff === 1) {
        onOff = 0;
        buttonDetails = 'show';
    } else{
        undefined
    }


    render();
}


const appRoot = document.getElementById('app');

const render = () => {
    const template = (
    <div>
    <h1>Visibility Toogle</h1>
    <button onClick={toggleB}> {buttonDetails} Details</button>
    <p hidden={onOff === 0}>Yes, I an visible now</p>
    </div>
);

ReactDOM.render(template, appRoot);
}

render();





