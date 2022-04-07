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
        alert("Ahmedabad is famous for Kankaria lake")
    }
    else if(city=="vadodara"){
        container.classList.remove("ahmedabad","surat","rajkot","junagadh")
        container.classList.add("vadodara");
        alert("Vadodara is famous for MSU")
    }
    else if(city=="surat"){
        container.classList.remove("ahmedabad","vadodara","rajkot","junagadh")
        container.classList.add("surat");
        alert("Surat is famous for 'Surati locho' ")
    }
    else if(city=="rajkot"){
        container.classList.remove("ahmedabad","vadodara","surat","junagadh")
        container.classList.add("rajkot");
        alert("Rajkot is famous for Iron and forging industries")
    }
    else{
        container.classList.remove("ahmedabad","vadodara","surat","rajkot")
        container.classList.add("junagadh");
        alert("Junagadh is famous for tourism")
    }
})

