// Generate a random color

const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervaID;

const startChangingColor = () => {
   if(!intervaID){
    intervaID = setInterval(changeBgColort, 1000);
   }
   
  function changeBgColort() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangingColor = () => {
  clearTimeout(intervaID);
//   intervaID = null;
};

document.querySelector("#start").addEventListener("click", startChangingColor);

document.querySelector("#stop").addEventListener("click", stopChangingColor);
