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