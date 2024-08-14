class UberPrice{
    static baseFare = 50;  // in RS
    static costPerMin = 2;  // 2RS per min

    constructor(pickUpLocation,dropLocation,vehicle,rideDistanceInKm,rideDurationInMin){
        this.pickUpLocation = pickUpLocation;
        this.dropLocation = dropLocation;
        this.vehicle = vehicle;
        this.rideDistanceInKm = rideDistanceInKm;
        this.rideDurationInMin = rideDurationInMin;
    }
    get vehicleCharge(){    // return cost/km
        if(this.vehicle == "bike"){
            return 10;
        }
        else if(this.vehicle == "auto"){
            return 17;
        }
        else if(this.vehicle == "car"){
            return 17;
        }
    }
    get totalFair(){
        let costOfDistance = this.rideDistance * this.vehicleCharge;
        let costForTime = this.rideDuration * UberPrice.costPerMin;
        let totalFair = UberPrice.baseFare + costOfDistance + costForTime;

        return totalFair;
    }
}
let ride = new UberPrice("DMART","T NAGAR","auto",10,20);  //bike or auto or car

console.log(ride1);
console.log(`Total ride fair is ${ride1.totalFair}`);