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