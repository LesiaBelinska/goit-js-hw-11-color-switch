const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

class colorPicker  {
    constructor() { 
        this.intervalId = null;
        this.isActive = false;
    }
    
    onStartBtnClick(evt) {
        if (this.isActive) {
            return;
        }
      
      this.isActive = true;
      this.intervalId = setInterval(() => {
          
        getBodyColor(colors)
        startColorPickerBtn.setAttribute("disabled", "disabled");
        
        }, 1000);
      
}

    onStopBtnClick(evt) {
        clearInterval(this.intervalId);
      this.isActive = false;
      startColorPickerBtn.removeAttribute("disabled");
}
}


function setBodyColor(colorHex) {
  document.body.style.backgroundColor = colorHex;
}

function getBodyColor(colors) {
    let colorIndex = randomIntegerFromInterval(0, colors.length);
    let colorHex = colors[colorIndex];
    setBodyColor(colorHex);
}
const copyOfColorPicker = new colorPicker(); 

const startColorPickerBtn = document.querySelector('button[data-action= "start"]');
const stopColorPickerBtn = document.querySelector('button[data-action= "stop"]');
startColorPickerBtn.addEventListener('click', copyOfColorPicker.onStartBtnClick.bind(copyOfColorPicker));
stopColorPickerBtn.addEventListener('click', copyOfColorPicker.onStopBtnClick.bind(copyOfColorPicker));

