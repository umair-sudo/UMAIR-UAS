const optionMenu = document.querySelector(".select-menu"),
      selectBtn = optionMenu.querySelector(".select-btn"),
      options = optionMenu.querySelectorAll(".option"),
      sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption

        optionMenu.classList.remove("active")
    })
})

const optionMenu2 = document.querySelector(".select-menu-2"),
      selectBtn2 = optionMenu2.querySelector(".select-btn-2"),
      options_2 = optionMenu2.querySelectorAll(".option-2"),
      sBtn_text_2 = optionMenu2.querySelector(".sBtn-text-2");

selectBtn2.addEventListener("click", () => optionMenu2.classList.toggle("active"));

options_2.forEach(option_2 =>{
    option_2.addEventListener("click", ()=>{
        let selectedOption = option_2.querySelector(".option-text-2").innerText;
        sBtn_text_2.innerText = selectedOption

        optionMenu2.classList.remove("active")
    })
})
