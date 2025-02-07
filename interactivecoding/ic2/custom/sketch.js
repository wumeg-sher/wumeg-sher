function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}



class HumidityConsole {
  constructor(x, y, currentHumidity=50) {
    this.x = x;  
    this.y = y; 
    this.currentHumidity = currentHumidity;
    this.targetHumidity = currentHumidity;

    this.minHumidity = 0; 
    this.maxHumidity = 100; 

    this.upButton = createButton('Up');
    this.upButton.position(this.x + 175, this.y + 200);
    this.upButton.mousePressed(() => {
      if (this.currentHumidity < this.minHumidity) {
        this.targetHumidity+=5;  
      }
    });

    this.downButton = createButton('Down');
    this.downButton.position(this.x + 120, this.y + 200);
    this.downButton.mousePressed(() => {
      if (this.currentHumidity > this.maxHumidity) {
        this.targetHumidity-=5;  
      }
    });

    this.offButton = createButton('Off');
    this.offButton.position(this.x + 290, this.y + 200);
    let isOn = false;
    this.offButton.mousePressed(() => {
      if (isOn == true) {

        isOn == false;  
      } else if (isOn == false){
        
        isOn == true;  
      }
    });
  }

  // update() {
  //   this.currentHumidity = this.targetHumidity.value();
  // }

  display() {
    fill(200);
    rect(this.x, this.y, 350, 250, 10);

    fill(100);
    rect(this.x + 20, this.y + 50, 310, 110, 10);

    fill(0);
    textSize(16);
    text("Humidity", this.x + 140, this.y + 35);
    textSize(14);
    text("Current Humidity: ", this.x + 30, this.y + 75);
    text("Target Humidity: ", this.x + 180, this.y + 75);
    text("Adjust Humidity:", this.x + 30, this.y + 190);

    textFont('Courier New');
    textSize (40);
    text(this.currentHumidity, this.x + 110, this.y + 120);
    text(this.targetHumidity, this.x + 260, this.y + 120);
  }
}

let humidityConsole;

function setup() {
  createCanvas(400, 300);
  humidityConsole = new HumidityConsole(20, 20, 50);
}

function draw() {
  background(240);

  // humidityConsole.update(); 
  humidityConsole.display();
}
