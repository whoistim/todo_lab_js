var myForm = document.getElementById("addToDo");// DOM action gets entire form called "addToDo"
var list = document.getElementById("toDoList");//toDoList is the ul element in the HTML.

myForm.addEventListener("submit", function ( event ) {// attaches listener to the form.
	event.preventDefault();//keeps the page from reloading.
	
	var enteredToDo = this.newToDo.value;//what the user entered into the form.
  var listItem = document.createElement ("li"); //creates a new li element
	var text = document.createTextNode(enteredToDo); // creates a text node for the li element.


	listItem.appendChild(text);  //inserts the users' entry into the li
  list.appendChild(listItem);//inserts the li into the list declared in global frame.

  var newDeleteButton = document.createElement ("button");//creates a button
  text = document.createTextNode("Delete");//creates a text node with "delete" for the button
  newDeleteButton.appendChild(text);//inserts the delete label into the button

  var makeDoneButton = document.createElement ("button");//makes the "Done" button.
  text = document.createTextNode("Done");
  makeDoneButton.appendChild(text);

  listItem.appendChild(makeDoneButton);//inserts the Done button into the li
  listItem.appendChild(newDeleteButton);//inserts the Delete button into the li

  makeDoneButton.addEventListener("click", function ( event ) { //attaches listener to the Done.
    listItem.classList.add("done");//updates the class of the li to done ==> line-through style.
    listItem.removeChild(makeDoneButton);//takes out the Done button. Otherwise it gets in the way later.
    listItem.removeChild(newDeleteButton);//takes out the Delete button.

    var  undoButton = document.createElement ("button");//creates the Undo button.
    text = document.createTextNode("Undo");//creates the text node for the button text.
    undoButton.appendChild(text);//labels it "Undo".
    listItem.appendChild(undoButton);//inserts the Undo button.
    listItem.appendChild(newDeleteButton);//puts the Delete button back.

    undoButton.addEventListener("click", function ( event ) {//turns on listening for the Undo Button.
      listItem.classList.remove("done");
      listItem.removeChild(undoButton);
      listItem.removeChild(newDeleteButton);
      listItem.appendChild(makeDoneButton);
      listItem.appendChild(newDeleteButton);

      });

  });
  newDeleteButton.addEventListener("click", function ( event ) {
    list.removeChild(listItem);  

  });



	this.title.value = "";

});





