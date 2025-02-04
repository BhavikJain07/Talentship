console.log("Start")


async function fetchData(){
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    console.log("Output from Async Await");
    console.log(response.json())
}

fetchData()

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then((json) => {
        console.log("Output from Promise");
        console.log(json);
      })




console.log("End")