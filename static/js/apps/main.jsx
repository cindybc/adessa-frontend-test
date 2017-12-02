/*import React from 'react';
import ReactDOM from 'react-dom';

const App = ({ message }) => <div>{ message }</div>;

ReactDOM.render(<App message="hello world" />, document.getElementById('app'));*/


     //contador
    var cont = 0;

    //valor canasta
    var total = 0;

$(document).ready(function(){

   //Recorro json y obtengo datos.

   catalog.forEach(function(el){
        recorrer(el);
   });
});


function recorrer(el){

      //Creo cada una de las secciones o cajas donde se agrega luego la información.

	   var box = $('<div/>', {'class': 'box col l2', 'id': 'box-'+ cont});
       var head = $('<div/>', {'class': 'image'});
       var body = $('<div/>', {'class': 'info'});
       var footer = $('<div/>', {'class': 'button', 'id': 'add-'+ cont});

       //Agrego cada elemento del json a las secciones creadas anteriormente.

       head.append($('<img/>',{'src': el.imageURL}));
       body.append($('<p/>', {'text': el.name}));
       body.append($('<p/>', {'text': el.currency + "" + el.price}));
       footer.append($('<button/>', {'class': 'waves-effect waves-light btn-large btnAdd', 'text': 'Add to cart'}));
       
       box.append(head);
       box.append(body);
       box.append(footer);

       //Agrego cada seccion a el id = list (de index.hbs)
       $('#list').append(box);

       //contador
       cont++;
       
       //Compras agregadas al hacer click al boton 'ADD TO CART'
      footer.click(function(){
         $('#total').html(total = total +  el.price);
 

        var boxProduct = $('<div/>', {'class': 'boxProduct col l2', 'id': 'boxProduct-'+ cont});
        var headProduct = $('<div/>', {'class': 'imageProduct'});
        var bodyProduct = $('<div/>', {'class': 'infoProduct'});
        var footerProduct = $('<div/>', {'class': 'buttonProduct', 'id': 'add-'+ cont});

        headProduct.append($('<img/>',{'src': el.imageURL}));
        bodyProduct.append($('<p/>', {'text': el.name}));
        bodyProduct.append($('<p/>', {'text': el.currency + "" + el.price}));
        footerProduct.append($('<button/>', {'class': 'waves-effect waves-light btn-large btnRemove', 'text': 'Remove from cart'}));
       
        boxProduct.append(headProduct);
        boxProduct.append(bodyProduct);
        boxProduct.append(footerProduct);

        $('#product').append(boxProduct);


        //COmpras removidas al hacer click al boton 'REMOVE FROM CART'
        footerProduct.on('click', boxProduct, function(){

            $('#total').html(total = total -  el.price);

            $(this).parent().remove();
       });
      })

}