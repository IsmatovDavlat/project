const btn2 = document.querySelector(".btn2")
        const close_Btn = document.querySelector(".close_Btn")
        const container = document.querySelector(".container2")

        
        btn2.addEventListener("click", ()=>{
            container.classList.add("active")
            console.log("click");
        })
        close_Btn.addEventListener("click", () =>{
            container.classList.remove("active")
        })



        const scroller = document.querySelector("#scroller");
        const output = document.querySelector("#output");
        
        scroller.addEventListener("scroll", (event) => {
          output.textContent = `scrollTop: ${scroller.scrollTop}`;
        });


const data = [
  
  {id: 1, name : "Davlat", last : "Ismatov", kurs : "front-end",  datasi : "Jan", status: "yaxshi", delet: "o'chirish"},
  {id: 2, name : "Davlat", last : "Ismatov", kurs : "front-end",  datasi : "Jan", status: "qoniqarli", delet: "o'chirish"},
  {id: 3, name : "Davlat", last : "Ismatov", kurs : "front-end",  datasi : "Jan", status: "qoniqarsiz", delet: "o'chirish"},
  {id: 4, name : "Davlat", last : "Ismatov", kurs : "front-end",  datasi : "Jan", status: "yaxshi", delet: "o'chirish"},
  {id: 5, name : "Davlat", last : "Ismatov", kurs : "front-end",  datasi : "Jan", status: "qoniqarli", delet: "o'chirish"},
  {id: 6, name : "Davlat", last : "Ismatov", kurs : "front-end",  datasi : "Jan", status: "qoniqarsiz", delet: "o'chirish"},
  {id: 7, name : "Davlat", last : "Ismatov", kurs : "front-end",  datasi : "Jan", status: "yaxshi", delet: "o'chirish"},
  {id: 8, name : "Davlat", last : "Ismatov", kurs : "front-end",  datasi : "Jan", status: "qoniqarli", delet: "o'chirish"},
  {id: 9, name : "Davlat", last : "Ismatov", kurs : "front-end",  datasi : "Jan", status: "qoniqarsiz", delet: "o'chirish"},
  {id: 10, name : "Davlat", last : "Ismatov", kurs : "front-end",  datasi : "Jan", status: "yaxshi", delet: "o'chirish"}
  ]
// console.log(arr);

const tbody = document.getElementById("table_tbody")

data.forEach(element => {
  tbody.innerHTML += `
  <tr>
  <th scope="row">${element.id}</th>
  <td colspan="2">${element.name}</td>
  <td>${element.last}</td>
  <td>${element.kurs}</td>
  <td>${element.datasi}</td>
  <th>${element.status}</th>
  <td><button type="button" class="btn btn-danger">${element.delet}</button></td>
</tr>
  `
});



// Ma'lumotlarni localStorage ga yozish
function saveDataToLocalStorage(username, email) {
  var users = JSON.parse(localStorage.getItem('users')) || [];
  users.push({ username: username, email: email });
  localStorage.setItem('users', JSON.stringify(users));
  console.log(localStorage.getItem('users'))
}

// Ma'lumotlarni localStorage dan o'qish va jadvalga chiqarish
function loadDataFromLocalStorage() {
  var users = JSON.parse(localStorage.getItem('users')) || [];
  var table = document.getElementById('userTable').getElementsByTagName('tbody')[0];
  table.innerHTML = '';
  users.forEach(function(user) {
      var newRow = table.insertRow(table.rows.length);
      var cell1 = newRow.insertCell(0);
      var cell2 = newRow.insertCell(1);
      var cell3 = newRow.insertCell(2);
      
      cell1.innerHTML = user.username;
      cell2.innerHTML = user.email;
      cell3.innerHTML = '<button onclick="editUser(this)">Edit</button> <button onclick="deleteUser(this)">Delete</button>';
  });
}

// Foydalanuvchi qo'shish
function addUser(event) {
  event.preventDefault();
  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  
  if (username && email) {
      saveDataToLocalStorage(username, email);
      loadDataFromLocalStorage();
      
      document.getElementById('username').value = '';
      document.getElementById('email').value = '';
  } else {
      alert('Please fill out all fields');
  }
}

// Foydalanuvchi o'zgartirish
function editUser(row) {
  var selectedRow = row.parentNode.parentNode;
  var username = selectedRow.cells[0].innerHTML;
  var email = selectedRow.cells[1].innerHTML;
  
  document.getElementById('username').value = username;
  document.getElementById('email').value = email;
  
  selectedRow.remove();
}

// Foydalanuvchi o'chirish
function deleteUser(row) {
  var selectedRow = row.parentNode.parentNode;
  var username = selectedRow.cells[0].innerHTML;
  var email = selectedRow.cells[1].innerHTML;
  var users = JSON.parse(localStorage.getItem('users')) || [];
  var updatedUsers = users.filter(function(user) {
      return user.username !== username || user.email !== email;
  });
  localStorage.setItem('users', JSON.stringify(updatedUsers));
  
  loadDataFromLocalStorage();
}