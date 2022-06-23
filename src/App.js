import { useState } from 'react';
import './App.css';
import GigaNoobMode from './components/giganoob_mode/GigaNoobMode';
import HardMode from './components/hard_mode/HardMode';
import InsaneMode from './components/insane_mode/InsaneMode';
import MainScreen from './components/main_screen/MainScreen';
import NoobMode from './components/noob_mode/NoobMode';
import NormalMode from './components/normal_mode/NormalMode';

function App() {

  const [currentDifficultyLevel, setCurrentDifficultyLevel] = useState("");
  const [hasStarted, setHasStarted] = useState(false);
  const [isAudioBussy, setIsAudioBussy] = useState(false);

  const renderMode = () => {
    if (hasStarted) {
      switch (currentDifficultyLevel) {
        case "Giga Noob":
          return <GigaNoobMode
            setIsAudioBussy={setIsAudioBussy}>
          </GigaNoobMode>;
        case "Noob":
          return <NoobMode
            setIsAudioBussy={setIsAudioBussy}>
          </NoobMode>;
        case "Normal":
          return <NormalMode
            setIsAudioBussy={setIsAudioBussy}>
          </NormalMode>;
        case "Hard":
          return <HardMode
            setIsAudioBussy={setIsAudioBussy}>
          </HardMode>;
        case "Insane":
          return <InsaneMode
            setIsAudioBussy={setIsAudioBussy}>
          </InsaneMode>;  
        default:
          return <MainScreen></MainScreen>;
      }
    }
  }


  return (
    <div>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
      {!hasStarted
      ? <MainScreen
        currentDifficultyLevel={currentDifficultyLevel}
        setCurrentDifficultyLevel={setCurrentDifficultyLevel}
        hasStarted={hasStarted}
        setHasStarted={setHasStarted}>
      </MainScreen>
      : renderMode()
    }
    </div>
  );
}

export default App;
