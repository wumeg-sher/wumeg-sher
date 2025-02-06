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

    this.minHumidity = 0; 
    this.maxHumidity = 100; 

    this.upButton = createButton('Up');
    this.upButton.position(this.x + 150, this.y + 40);
    this.upButton.mousePressed(() => {
      if (this.currentHumidity < this.minHumidity) {
        this.targetHumidity++;  
      }
    });

    this.downButton = createButton('Down');
    this.downButton.position(this.x + 100, this.y + 40);
    this.downButton.mousePressed(() => {
      if (this.currentHumidity > this.maxHumidity) {
        this.temperature--;  // Decrement the temperature
      }
    });

  }

  // Method to update the temperature and render the console
  update() {
    this.temperature = this.slider.value(); // Update temperature based on slider value
  }

  // Method to display the console and temperature
  display() {
    fill(200);
    rect(this.x, this.y, this.width, this.height, 10); // Draw the console background

    fill(0);
    textSize(16);
    textAlign(LEFT, TOP);
    text("Temperature Control Console", this.x + 20, this.y + 10);
    textSize(14);
    text("Current Temperature: " + this.temperature + "°C", this.x + 20, this.y + 70);
    text("Adjust Temperature:", this.x + 20, this.y + 30);
  }
}

let tempConsole;

function setup() {
  createCanvas(400, 300);
  tempConsole = new TemperatureControlConsole(50, 50, 300, 180); // Create console
}

function draw() {
  background(240);

  tempConsole.update(); // Update temperature
  tempConsole.display(); // Display the console
}
