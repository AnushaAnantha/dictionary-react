import './App.css';
import DictionaryFormHandler from './dictionary';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
       <img src="https://www.cartoonistgroup.com/properties/grimmy/art_images/cg5c3bbd3fa7512.jpg"
       className="image-styling" alt="cartoon"/>
      </header>
        <main>
          <DictionaryFormHandler />
        </main>
        <div class="row" id="padding-top">
        <p>Powered by <a
          href="https://github.com/AnushaAnantha/dictionary-react"
          rel="link to github" 
        >  <img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" 
        alt="Github logo"
        width="50" height="50"/>
        </a>
        </p>
        </div>
    </div>
  );
}
