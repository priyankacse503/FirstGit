function doFirst(){
    var button=document.getElementById('button');
    button.addEventListener("click",save,false);
    display();
}
function save(){
    var Amount=document.getElementById('Amount').value;
    var description=document.getElementById('description').value;
    var category=document.getElementById('category').value;
    var arr=[];
    arr.push(Amount,description,category);
    localStorage.setItem(' ',JSON.stringify(arr));
    display();
    addNewLineElement(object);
    
}
if (document.readyState !== "loading") {
          console.log("vscode");
        
          var keys = Object.keys(localStorage), //taking out all the keys that are there in the local storage
            i = keys.length; //6
          console.log("keys", keys);
          let stringifiedDetailsOfPeople, detailsOfPeople;
        
          // 6 to 0
          Object.keys(localStorage).forEach((key) => {
            //i==2
            if (key.match(/userDetails/g)) {
              //we only care about keys that start with userDetails
              //this is called regex matching
              stringifiedDetailsOfPeople = localStorage.getItem(key);
              console.log("stringifiedDetailsOfPeople", stringifiedDetailsOfPeople);
              detailsOfPeople = JSON.parse(stringifiedDetailsOfPeople);
              console.log("details", detailsOfPeople);
        
              addNewLineElement(detailsOfPeople);
            }
          });
        }
        
        function addNewLineElement(object) {
          const ul = document.getElementById("listOfPeople");
          const li = document.createElement("li");
          li.appendChild(
            document.createTextNode(object.name + " " + object.emailId + " ")
          );
function display(){
    var display_details=document.getElementById('display-details');
    display_details.innerHTML="";
   // var storedNames = JSON.parse(localStorage.getItem(" ")); 
    //display_details.innerHTML+=storedNames;
    for(var i=0;i<localStorage.length;i++)
    {
        var a=localStorage.key(i);
        var b=localStorage.getItem(a);
        var c=localStorage.getItem(b);
        //display_details.innerHTML+="FirstName:"+a+" "+" "+"LastName:"+b+"<br>";
        display_details.innerHTML+=a+" "+b+"<br>";
        addNewLineElement(object);
      // display_details.innerHTML+=storedNames;
    }
}
function addNewLineElement(object) {
    const ul = document.getElementById("listOfPeople");
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(object.Amount + " " + object.description + " "+ object.category+" ")
    );
    // li.appendChild()
    console.log(document.createElement("i"));
    const a1 = document.createElement("input");
    a1.id = "yash";
    a1.type = "button";
    a1.value = "Edit";
    a1.addEventListener("click", () => {
      console.log(object);
      document.getElementById("Amount").value = object.Amount;
      document.getElementById("description").value = object.description;
      document.getElementById("category").value = object.category;
      li.remove();
    });
    a1.className = "delete";
    a1.style.border = "2px solid green";
    console.log(a1);
    li.appendChild(a1);
  
    const a = document.createElement("input");
    a.type = "button";
    a.value = "delete";
    a.addEventListener("click", () => {
      localStorage.removeItem("userDetails" + object.category);
      // axios.delete(`${apiendpoint}/registeruser/${object._id}`);
      li.remove();
    });
    a.className = "delete";
    a.style.border = "2px solid red";
    console.log(a);
    li.appendChild(a);
    console.log(li);
  
    ul.appendChild(li);
  }

function clear()
{
    localStorage.clear();
    location.reload();
}
window.addEventListener("load",doFirst,false);