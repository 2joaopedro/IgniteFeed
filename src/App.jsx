import { Header } from './components/Header/Index';
import { SideBar } from './components/SideBar/Index';

import Styles from './App.module.css';
import './global.css';
import { Post } from './components/Post/Index';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    
    content: [
      {type: 'paragraph', content:'Fala galeraa 👋'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 👋'}, 
      {type: 'link', content:'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-04-016')
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    
    content: [
      {type: 'paragraph', content:'Fala galeraa 👋'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 👋'}, 
      {type: 'link', content:'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-10-016')
  },
];

function App() {
  return (
    <div>
      <Header/>
      <div className={Styles.wrapper}>
        <SideBar/>
        <main>
          {
            posts.map(post => {
              return(
                <Post
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              ) 
            })
          }
        </main>
      </div>
    </div>
  )
}

export default App
