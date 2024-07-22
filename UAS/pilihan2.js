const optionMenu = document.querySelector(".select-menu-2"),
      selectBtn = optionMenu2.querySelector(".select-btn-2"),
      options_2 = optionMenu2.querySelectorAll(".option-2"),
      sBtn_text_2 = optionMenu2.querySelector(".sBtn-text--2");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

options_2.forEach(option_2 =>{
    option_2.addEventListener("click", ()=>{
        let selectedOption = option_2.querySelector(".option-text-2").innerText;
        sBtn_text_2.innerText = selectedOption

        optionMenu.classList.remove("active")
    })
})
