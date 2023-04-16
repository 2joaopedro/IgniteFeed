import { Header } from './components/Header/Index';
import { SideBar } from './components/SideBar/Index';

import Styles from './App.module.css';
import './global.css';

function App() {
  return (
    <div>
      <Header/>
      <div className={Styles.wrapper}>
        <SideBar/>
        <main>
          <h1>Post</h1>
        </main>
      </div>
    </div>
  )
}

export default App
