
//OOPS

function createCar(name, type, model, year,price,color){
    this.name = name;
    this.type = type;
    this.model = model;
    this.year = year;
    this.price = price;
    this.color= color;
    this.write = function(){
        let h1 = document.createElement("h1");
        h1.textContent="Wantto buy a car"
        h1.style.color =color;

        document.body.append(h1);
    }
}

let newCar = new createCar("Fiat","Hybrid","Evtype",2026, 600000,"Red" )
