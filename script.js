function generateNumber() {
    const min = parseInt(document.querySelector(".input-min").value);
    const max = parseInt(document.querySelector(".input-max").value);

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    alert(result);
}


// const min = document.querySelector (".input.min").value
// const max = document.querySelector (".input.max").value

//  console.log (min, max)
