let selection = document.querySelector('select');
let result = document.querySelector('h3');
let container = document.getElementById('background_img');
console.log(container)

selection.addEventListener('change', ()=>{
    result.innerText = selection.options[selection.selectedIndex].text;
    var city = selection.options[selection.selectedIndex].value
    if(city=="ahmedabad"){
        container.classList.remove("vadodara","surat","rajkot","junagadh")
        container.classList.add("ahmedabad");
    }
    else if(city=="vadodara"){
        container.classList.remove("ahmedabad","surat","rajkot","junagadh")
        container.classList.add("vadodara");
    }
    else if(city=="surat"){
        container.classList.remove("ahmedabad","vadodara","rajkot","junagadh")
        container.classList.add("surat");
    }
    else if(city=="rajkot"){
        container.classList.remove("ahmedabad","vadodara","surat","junagadh")
        container.classList.add("rajkot");
    }
    else{
        container.classList.remove("ahmedabad","vadodara","surat","rajkot")
        container.classList.add("junagadh");
    }
})

