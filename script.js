//your code here!
let list = document.getElementById("infi-list")


for(let i=1;i<11;i++){
    list.innerHTML+=`
    <li>Item ${i}</li>
    `
}
let count=10

list.addEventListener("scroll",()=>{
    if(list.scrollHeight - list.scrollTop - list.clientHeight < 1){
 
        list.innerHTML += `
        <li>Item ${count+1}</li>
        <li>Item ${count+2}</li>
        `
        count=count+2;
      }
})
