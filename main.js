

//                                                   Add or Delete               ***IMP 

var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
form.addEventListener('submit',addEvent)
itemList.addEventListener('click',removeEvent);

function addEvent(e){
    e.preventDefault();
    var item=document.getElementById('item').value;
    // console.log(item)
    var newItem=document.createElement('li');
    // console.log(newItem);
    newItem.className='list-group-item';
    newItem.appendChild(document.createTextNode(item));
    // console.log(newItem)
    var deleteBtn=document.createElement('button');
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    newItem.appendChild(deleteBtn);
    itemList.appendChild(newItem);
}
function removeEvent(e){
    if(e.target.classList.contains('delete')){
        if(confirm('delete')){
            var li=e.target.parentElement;
            // console.log(li)
            itemList.removeChild(li);
        }
    }
}
// Search todo function
function myFunction() {
    var input, filter, ul, li, a, i, textValue;
    input = document.getElementById('filter');
    filter = input.value.toUpperCase();
    ul = document.getElementById('items');
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        textValue = li[i].textContent || li[i].innerText;
        console.log(textValue);
        if (textValue.toUpperCase().includes(filter)) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}