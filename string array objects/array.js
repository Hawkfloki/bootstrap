// function table2() {
//     let a = parseInt(document.getElementById('table').value);
    
//     tab = '<ol>';
//     for (let i = 1; i < 11; i++) 
//        {
//         b = a * i;
//         tab += "<li>" +b+"</li>"
//     }
//     tab+='</ol>'
//     document.getElementById("show").innerHTML=tab;

// }
function popup() {
    document.getElementById('form').style.display='block';


}
function hide(){
    document.getElementById('form').style.display='none';
}
function menu(){
    document.getElementById('nav').style.width='0px';

}

function nav() {
    document.getElementById('nav').style.width='500px';

}


    document.getElementById("add task").addEventListener('click',function(evnt){
        evnt.preventDefault()
        let inputvalue = document.getElementById('todo-input').value;
        let newItem = document.getElementById('li');
        newItem.innerHTML=inputvalue;
        let list=document.getElementById('todo-result');
        list.appendChild(newItem);
        
     
         document.getElementById('todo-result').innerHTML= inputValue;
    })


    function clear(){
        document.getElementById('todo-result').innerHTML='';
    }

   function addtask(){
    const inputs =document.getElementById('inp');
    const text = document.getElementById('text');
    if(
        inputs.value ===""
    ){
        alert("please enter task");
    }
    else{
        const newE1 = document.createElement("li");
        newE1.innerHTML=inputs.value;
        newE1.id= "new1";
        const delButton=document.createElement("button");
        delButton.type="button";
        delButton.onclick= function(){del(new1);};
        delButton.innerHTML= "X";
        new1.appendChild(delButton);

        
        text.appendChild(newE1);
        inputs.value= "";
        

    }
   }
   let dt=new Date();
   console.log(dt.getMonth());
   console.log(dt.getFullYear());

   function valid(){
    
   }


