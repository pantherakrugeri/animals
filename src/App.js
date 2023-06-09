function App () {
    const handleClick = () => {
        console.log('btn was clicked!');
    }

    return (
        <div>
            <button onClick={handleClick}>Add Animal</button>
        </div>
    )
}

export default App;