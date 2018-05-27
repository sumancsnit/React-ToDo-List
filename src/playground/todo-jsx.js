console.log('Yes app.js is running ok');

const app = {
    title: 'JenySys APP',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

function isEpisode(epi) {
    if (epi) {
        return <p>Episode : {epi}</p>;
    }
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }

    renderApp();
}

const removeAll = () => {
    app.options = [];

    renderApp();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];

    alert(option);
    
}

const appRoot = document.getElementById('app');

const renderApp = () => {
    const template = (
    <div>
        <h2>Series name: {app.title ? app.title : 'Anonymous'}</h2>
        <h3>{app.subtitle}</h3>
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>Random Things</button>
        <button onClick={removeAll}>Remove List</button>

        <ol>
            {app.options.map((items) => {
                return <li key={items}> ITEMS: {items} </li>
            })}
        </ol>

        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Option</button>
        </form>
    </div>
);

    ReactDOM.render(template, appRoot);

}

renderApp();