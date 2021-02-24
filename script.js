const balon = "🎈" 
const div = document.createElement("div")
div.classList.add("balon")
div.innerText = balon
document.body.append(div)
const dFont = 30 / 100 * 10;
let lis = 1;

const balonFunc = event => {
    if (event.key == "ArrowUp") {
        div.style.fontSize = 30 + dFont * lis + "px";
        lis++
        console.log('ArrowUp press');
        if (div.style.fontSize == "150px") {
            div.innerText = "💥"
            div.fontSize = "30px"
            window.removeEventListener("keydown", balonFunc)
            window.setTimeout(() => {
                div.innerText = ""
            }, 2000);
        }
    } else if (event.key == "ArrowDown") {
        div.style.fontSize = 30 + dFont * (lis - 2) + "px" ;
        lis--
        console.log('ArrowDown press');
        if (div.style.fontSize == "9px") {
            lis++
        }
    } 
}

window.addEventListener("keydown", balonFunc)

////////////////////////////////////////////////////////

let lisBackground = -1;
const temperyArrBackground = ["red", "green", "blue", "yellow"]
let temperyColor

const backgroundFunc = () => {
    lisBackground++
    if (lisBackground >= temperyArrBackground.length) {
        lisBackground = 0;
    }
    temperyColor = temperyArrBackground[lisBackground]
    document.body.style.background = temperyColor;
}

window.addEventListener("click", backgroundFunc)