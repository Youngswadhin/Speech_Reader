import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="container">
       <nav>
        <img src="note.png" class="logo" height="40px" width="40px" alt="note-pic">
          <h1 class="head" style="color: white;"></h1>
       
          <button class="button">Create Notes</button>
       </nav>
       <h1 class="heading">Notes</h1>
       <div class="notes-container">
          <!-- <p contenteditable="true" class="input-box"> 
           <img class="red" src="https://imgs.search.brave.com/A8yvL5i5o8kRW8qeseBGyG_BH8MlyiHOzOw-McOEP0c/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTMvUmVk/LUNpcmNsZS5wbmc" alt="">
          </p> -->
       </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
    <script src="script.js"></script>
  );
}

export default App;