abstract class Car {
    protected mileage: number;
    protected fuel: number;
    
    public abstract drive(): void;
    public abstract refuel(): void;
    }

class Fiesta extends Car{
        
    constructor(mileage: number, fuel: number) {
        super();
        this.mileage = mileage;
        this.fuel = fuel
    }
    public drive(distance: number):void {
        if (distance < 0) {
            return console.log ("Введите число больше 0");
        }
        this.mileage -= distance;
        this.fuel -= distance * 0.05;
        if (this.fuel <= 0) {
            console.log("Вам необходимо запрввиться");
        }
    } 
    public refuel (liters: number): void {
        if (liters < 0) {
            return console.log ("Введите число больше 0");
        }
        this.fuel += liters;
    }  
    public get mileage(): number {
        return this.mileage;
    }
    public get fuel(): number {
         return this.fuel;
    }

}
    


