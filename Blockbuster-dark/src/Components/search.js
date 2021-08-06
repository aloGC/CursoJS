 import { Component, createElement } from '../lib/react/index.js';
 import Form from './form.js'
 import Input from './input.js';
 import Button from './button.js';
//<form action="" id="search-form">
  // <input placeholder="Escribe tu película favorita" name="title" type="Busca una pelicula" />
  // <button>Buscar</button>
  // </form>

 class Search extends Component {
     render (){
         return Form({
             children:[
                 new Input({
                     placeholder: 'Escribe tu película favorita',
                     name:'title', 
                     type:'text'
                 }),

                 new Button(null, 'Buscar')

             ]
         })
     }
 }



export default Search;
 // <section class="wrapper">
  // <div class="actions">
  // 
  // <button id="recommended">Películas recomendadas</button>
 
  // </div>
  // </section>