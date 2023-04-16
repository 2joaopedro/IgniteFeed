import { Header } from './components/Header/Index';
import { SideBar } from './components/SideBar/Index';

import Styles from './App.module.css';
import './global.css';
import { Post } from './components/Post/Index';

function App() {
  return (
    <div>
      <Header/>
      <div className={Styles.wrapper}>
        <SideBar/>
        <main>
          <Post/>
          <Post/>
        </main>
      </div>
    </div>
  )
}

export default App
