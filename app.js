const all = document.getElementById('all');
const pending = document.getElementById('pending');
const complete = document.getElementById('complete');
const clearAll = document.getElementById('clear-all')
const input = document.getElementById('box');
const list = document.querySelector('.toDo-List');
const alert = document.getElementById('alert');


var labelCount = 0;
alert.style.visibility = "hidden";

input.addEventListener('keypress', (e) => {
         labelCount++
         if (e.key === 'Enter') {
                  if (labelCount < 8) {
                           let div = document.createElement('div')
                           div.id = 'listed'
                           let listItem = document.createElement('input');
                           listItem.id = 'task'
                           let label = document.createElement('label')
                           label.setAttribute('for', 'task')
                           listItem.setAttribute('type', 'checkbox');
                           let content = input.value;
                           label.textContent = content;
                           div.appendChild(listItem)
                           div.appendChild(label)
                           list.appendChild(div);

                  } else {
                          alert.style.visibility = 'visible';
                  }

         }


})

complete.addEventListener('click', () => {
         alert.style.visibility = "hidden"

         let tasks = document.querySelectorAll('#listed');
         let arr = []
         arr = document.querySelectorAll("#task")

         for (let i = 0; i < arr.length; i++) {

                  if (arr[i].checked === true) {

                           tasks[i].style.visibility = "visible";

                  } else if (arr[i].checked !== true) {

                           tasks[i].style.visibility = "hidden";
                  }
         }
})

pending.addEventListener('click', () => {
         alert.style.visibility = "hidden"

         let tasks = document.querySelectorAll('#listed');
         let arr = []
         arr = document.querySelectorAll("#task")

         for (let i = 0; i < arr.length; i++) {

                  if (arr[i].checked === true) {

                           tasks[i].style.visibility = "hidden";

                  } else if (arr[i].checked !== true) {

                           tasks[i].style.visibility = "visible";
                  }
         }

})

all.addEventListener('click', ()=>{
         alert.style.visibility = "hidden"

         let tasks = document.querySelectorAll('#listed');

         for(let i=0; i<tasks.length ; i++){
                  tasks[i].style.visibility = "visible";
         }
         

})

clearAll.addEventListener('click', ()=> {
         alert.style.visibility = "hidden"
         let tasks = document.querySelectorAll('#listed');
         for(let i=0; i<tasks.length ; i++){
                  tasks[i].remove();
                  labelCount = 0;
         }
         
})
