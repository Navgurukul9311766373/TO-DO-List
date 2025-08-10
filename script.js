const inputbox = document.getElementById("inputbox");
const list = document.getElementById("list");

function addTask() {
    if (inputbox.value === "") {
        alert("You have to write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        list.appendChild(li);

        let image = document.createElement('img');
        image.src = "image/cross.png";

        image.addEventListener("click", function (e) {
            e.stopPropagation();
            li.remove(); 
            saveData();  
        });

        li.appendChild(image);

        li.addEventListener("click", function () {
            li.classList.toggle("checked");
            saveData();
        });

        saveData();
    }

    inputbox.value = "";
}


function saveData() {
    localStorage.setItem("data", list.innerHTML);
}

function showTask() {
    list.innerHTML = localStorage.getItem("data");
}
showTask();

