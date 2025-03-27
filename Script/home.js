var arr = []
async function getData(){
    try{
    const data = await fetch("https://dummyjson.com/recipes")
    let response = await data.json();
    arr = JSON.stringify(response, null, 2)
    document.body.innerText = Array(arr)[0]
    }catch(error){
        console.error("Error", error)
    }
}

getData()