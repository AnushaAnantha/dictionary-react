import './App.css';
import DictionaryFormHandler from './dictionary';

export default function App() {
  return (
    <div className="App">
    <div class="container">
      <div class="span-12">
      <header className="App-header">
        <h1 className="typo">DICTIONARY</h1>
      </header>
      </div>
    </div>
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
