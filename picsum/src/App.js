// DELETE THIS LATER
import axios from 'axios'

import Photo from './components/Photo'
import Buttons from './components/Buttons'

import { photoReducer } from "./reducers/photoReducer";

function App() {

  const test = () => {
    axios.get('https://picsum.photos/200')
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log('catch', err)
      })
  }

  test()

  return (
    <div>
      <Photo />
      <Buttons />
    </div>
  );
}

export default App;
