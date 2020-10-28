interface petData{
    type: string;
    age: number;
    color: string;
    breed?: string;
}

class Availability{
    pets: Array<petData>
    typeOfPets: Array<string>

    constructor(){
        this.pets = []
        this.typeOfPets = []
    }

    addPets(petDetails: petData) {
        this.pets.push(petDetails) 
        let found: boolean =false;  
        for(let petType in this.typeOfPets){
            if (petDetails.type.toLowerCase() === this.typeOfPets[petType]){
                found = true
            }
        }
        if (!found){
            this.typeOfPets.push(petDetails.type.toLowerCase())
        }
    }

    getAvailablePets(): Array<petData>{
        return this.pets
    }

    getPetAvailibity(): object{
        let availabilityObject: object = {}
        for(let pet in this.typeOfPets){
            let petOfType = this.pets.filter((data)=>{
                return data.type.toLowerCase() == this.typeOfPets[pet]
            })
            availabilityObject[this.typeOfPets[pet]] = petOfType.length
        }
        return availabilityObject
    }

}


type requestSatus = "Pending" | "Available" | "Not Available"
interface requestDataConfig{
    requests: Array<string>
    status: requestSatus
}

class Requests{
    requests: Array<requestDataConfig>
    constructor(){
        this.requests = []
    }

    addRequest(request: requestDataConfig): void{
        this.requests.push(request)
    }

    topFiveRequestStatus(availability: Availability): Array<requestDataConfig>{
        let topRequests: Array<requestDataConfig> = []
        let availablePets: Array<petData> = availability.getAvailablePets();
        let index = Math.min(5, this.requests.length)
        for(let i = 0; i<index; i++){
            let requestData = this.requests[i]
            let petAvailability = true;
            for(let request in requestData.requests){
                let value:Array<petData> = availablePets.filter((item)=>{
                    return item.type.toLowerCase() == requestData.requests[request].toLowerCase()
                });
                if (value.length === 0){
                    petAvailability = false
                    break
                }

            }
            if (petAvailability){
                this.requests[i].status = "Available"
            }
            else{
                this.requests[i].status = "Not Available"
            }
            topRequests.push(this.requests[i])
        }
        return topRequests
    }

    allRequestStatus(availability: Availability): Array<requestDataConfig>{
        let allRequests: Array<requestDataConfig> = []
        let availablePets: Array<petData> = availability.getAvailablePets();
        for(let i = 0; i<this.requests.length; i++){
            let requestData = this.requests[i]
            let petAvailability = true;
            for(let request in requestData.requests){
                console.log(requestData.requests[request].toLowerCase())

                let value:Array<petData> = availablePets.filter((item)=>{
                    return item.type.toLowerCase() == requestData.requests[request].toLowerCase().trim()
                });
                
                if (value.length === 0){
                    petAvailability = false
                    break
                }

            }
            if (petAvailability){
                this.requests[i].status = "Available"
            }
            else{
                this.requests[i].status = "Not Available"
            }
            allRequests.push(this.requests[i])
        }
        return allRequests
    }
}

let availabilityObject = new Availability()
availabilityObject.addPets({type:"Dog", color:"Black", age:7, breed:"German Shepard"})
availabilityObject.addPets({type:"Cat", color:"Black", age:7})
availabilityObject.addPets({type:"Dog", color:"Black", age:7})
availabilityObject.addPets({type:"Parrot", color:"Black", age:7})
availabilityObject.addPets({type:"Rabbit", color:"Black", age:7})
availabilityObject.addPets({type:"Dog", color:"Black", age:7})
availabilityObject.addPets({type:"Cat", color:"Black", age:7})
availabilityObject.addPets({type:"Rabbit", color:"Black", age:7})
availabilityObject.addPets({type:"Cat", color:"Black", age:7})

let requestObject = new Requests();

requestObject.addRequest({requests:["Dog", "Cat"], status:"Pending"})
requestObject.addRequest({requests:["Dog"], status:"Pending"})
requestObject.addRequest({requests:["Cat"], status:"Pending"})
requestObject.addRequest({requests:["Tortise"], status:"Pending"})
requestObject.addRequest({requests:["Parrot", "Dog"], status:"Pending"})