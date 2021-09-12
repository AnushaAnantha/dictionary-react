import './App.css';
import DictionaryFormHandler from './dictionary';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
       <img src="https://image.flaticon.com/icons/png/512/817/817215.png" className="image-styling" alt="cartoon" width="200px" height="200px"/>
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
