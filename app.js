const loading = document.getElementById("loading")
const container = document.querySelector(".container")
const tarih =document.querySelector("#tarih")
const button =document.querySelector(".btn")
const carddiv=document.getElementById("cardDiv")

setTimeout(()=>{
    loading.style.display="none"
    container.style.display="block"

},2000)

const fetchCat=()=>{

 fetch("https://api.thecatapi.com/v1/images/search?limit=10")
.then((res)=>{
    if (!res.ok){
        throw new Error("hata var")
    }
    return res.json()
})
.then((data)=>showScreen(data))
.catch((error)=>{
    carddiv.innerHTML=`
    <img src="./img/error.gif" />
    `
})
};
fetchCat()
const showScreen= (data)=>{
    carddiv.innerHTML = "";
    data.forEach((item)=>{    
    carddiv.innerHTML +=`
    <div class="col-12 col-sm-6 col-lg-4">
      <div style="height:200px;">
        <img src=${item.url} class="w-100 h-100" alt="...">
      </div>
</div> 
    `;
    });
}

button.addEventListener("click",()=>{

    loading.style.display = "block"; 
    container.style.display = "none";
    
    setTimeout(()=>{
    loading.style.display="none"
    container.style.display="block"
    
     },500)

    fetchCat()
});

setInterval(()=>{
    const now = new Date();
    tarih.innerHTML=now.toLocaleString(now)
},1000);
