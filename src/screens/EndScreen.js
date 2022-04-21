
function EndScreen({ chosenQuest }) {

    function playAgain() {
        document.location.reload(true);
    }

    return (
        <div>
            <h1>You Win</h1>
            <p>{chosenQuest.area_descriptions.win}</p>
            <button onClick={() => playAgain()}>Play Again</button>
        </div >
    );
}

export default EndScreen;