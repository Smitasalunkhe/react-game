import './App.css';
import logo from './images/logo.jpeg';
import Player from './components/Player';
import Game_Board from './components/Game_Board';
import { useState, useEffect } from 'react';

function App() {

  let [player1, setPlayer1] = useState("Player1"); // update

  let [player2, setPlayer2] = useState("Player2"); // update

  return (
    <div>
      <h1 className="Game-Heading"> Tic Tac Toe Game </h1>

      <div className='img-container'>
        <img src={logo} height="80px" width="80px" id='logo' />
      </div>

      <div className='Main-section'>
        <div className='Game-container'>

          <div className='player-section'>

            <Player name="Player1" symbol="X" setPlayer={setPlayer1} />        {/* update*/}

            <Player name="Player2" symbol="O" setPlayer={setPlayer2} />         {/* update*/}
          </div>

          <div className='game-section'>
            <Game_Board player1={player1} player2={player2} />               {/* update*/}
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
/*
function App() {

    let[Player_X, setPlayer_X] = useState("");
    let[Player_O, setPlayer_O] = useState("");

    


    return(
        <div>
            <h1 className="Game-Heading"> Tic Tac Toe Game </h1>
            
            <div className='img-container'>
                <img src={logo} height="80px" width="80px" /> 
            </div>

            <div className='Main-section'>
                <div className='Game-container'>

                    <div className='player-section'>
                        <Player name="Player1" symbol="X"/>
                        <Player name="Player2" symbol="O"/>
                    </div>
                    
                    <div className='game-section'>
                        <Game_Board Player1={Player_X} Player2={Player_O}/>                    
                    </div>
                </div>
            </div>
        </div>
    );
}



*/
/*
    let getPlayerName = (player1, player2)=>{
        
        if(player1 != null) {
            setPlayer_X(player1);
            console.log(Player_X);
        }
        else {
            setPlayer_O(player2);
        }
    }
*/