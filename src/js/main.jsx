import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import Navbar from './components/navbar';
import Jumbotron from './components/Jumbotron';
import Cards from './components/Cards';
import Footer from './components/footer';

let data = [
  { title: 'Card #1', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy', imageCard: 'https://picsum.photos/500/325' },
  { title: 'Card #2', description: 'text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has', imageCard: 'https://picsum.photos/500/325' },
  { title: 'Card #3', description: 'survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in', imageCard: 'https://picsum.photos/500/325' },
  { title: 'Card #4', description: 'the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing', imageCard: 'https://picsum.photos/500/325' },
  { title: 'Card #5', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of', imageCard: 'https://picsum.photos/500/325' },
  { title: 'Card #6', description: 'using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here', imageCard: 'https://picsum.photos/500/325' },
  { title: 'Card #7', description: 'making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their', imageCard: 'https://picsum.photos/500/325' },
  { title: 'Card #8', description: 'default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved', imageCard: 'https://picsum.photos/500/325' },
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <div className='container'>
      <Jumbotron />
      <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4'>
        {data.map((item, idx) => {
          return <Cards key={idx} title={item.title} description={item.description} imageCard={item.imageCard} />
        })}
      </div>
    </div>
    <Footer />
  </React.StrictMode>,
)
