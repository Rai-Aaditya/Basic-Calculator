let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML=='C'){
            string = ""
            document.querySelector('input').value=string;
        }
        else{
        console.log(e.target);
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }
    })
})

const toggler = document.getElementById('toggler');
toggler.addEventListener('click', ()=>{
    if(document.body.classList.contains('light')){
        document.body.classList.remove('light');
        document.body.classList.toggle('dark');
        const bodyChildren = document.body.querySelectorAll('*');
        bodyChildren.forEach((child)=>{
            if(child.classList.contains('light')) child.classList.remove('light');
            child.classList.toggle('dark');
        })
    }
    else{
        document.body.classList.remove('dark');
        document.body.classList.toggle('light');
        const bodyChildren = document.body.querySelectorAll('*');
        bodyChildren.forEach((child)=>{
            if(child.classList.contains('dark')) child.classList.remove('dark');
            child.classList.toggle('light');
        })
    }
})