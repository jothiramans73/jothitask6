class Person{
    constructor(name = "not updated",age = "not updated",gender = "not updated",
    dateOfBirth = "not updated",mobileNumber = "not updated",
    email = "not updated",occupation = "not updated",address = "not updated",)
    {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.dateOfBirth = dateOfBirth;
        this.mobileNumber = mobileNumber;
        this.email = email;
        this.occupation = occupation;
        this.address = address;
    }
    get welcome() {
        this.name == "not updated" ? console.log("welcome!") : console.log(`welcome ${this.name}`);
    }
    get isAdult() {
        let returnValue;
        if(this.age == "not updated"){
            console.log("Please enter your age!");

        }
        else{
            returnValue = this.age >= 18 ? true : false;
            console.log(returnValue);
        }
    }
    updateMobileNumber(newMobileNumber){
        this.mobileNumber = newMobileNumber;
        console.log(`Mobile number updated to ${this.mobileNumber}`);
    }
    updateEmail(email){
        this.email = email;
        console.log(`Email updated to ${this.email}`);
    }
    updateOccupation(occupation){
        this.occupation = occupation;
        console.log(`Occupation update to ${this.occupation}`);
    }   
}

let jothi = new Person("Bala",21,"male","30-01-2003");
console.log(jothi);
console.log(jothi.welcome);
console.log(jothi.isAdult);
jothi.updateMobileNumber(1234567890);
jothi.updateEmail("XXXXXXXXXXXXXXX");
jothi.updateOccupation("Web Developer");
console.log(jothi);
