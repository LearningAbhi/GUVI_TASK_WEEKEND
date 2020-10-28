var Availability = /** @class */ (function () {
    function Availability() {
        this.pets = [];
        this.typeOfPets = [];
    }
    Availability.prototype.addPets = function (petDetails) {
        this.pets.push(petDetails);
        var found = false;
        for (var petType in this.typeOfPets) {
            if (petDetails.type.toLowerCase() === this.typeOfPets[petType]) {
                found = true;
            }
        }
        if (!found) {
            this.typeOfPets.push(petDetails.type.toLowerCase());
        }
    };
    Availability.prototype.getAvailablePets = function () {
        return this.pets;
    };
    Availability.prototype.getPetAvailibity = function () {
        var _this = this;
        var availabilityObject = {};
        var _loop_1 = function (pet) {
            var petOfType = this_1.pets.filter(function (data) {
                return data.type.toLowerCase() == _this.typeOfPets[pet];
            });
            availabilityObject[this_1.typeOfPets[pet]] = petOfType.length;
        };
        var this_1 = this;
        for (var pet in this.typeOfPets) {
            _loop_1(pet);
        }
        return availabilityObject;
    };
    return Availability;
}());
var Requests = /** @class */ (function () {
    function Requests() {
        this.requests = [];
    }
    Requests.prototype.addRequest = function (request) {
        this.requests.push(request);
    };
    Requests.prototype.topFiveRequestStatus = function (availability) {
        var topRequests = [];
        var availablePets = availability.getAvailablePets();
        var index = Math.min(5, this.requests.length);
        var _loop_2 = function (i) {
            var requestData = this_2.requests[i];
            var petAvailability = true;
            var _loop_3 = function (request) {
                var value = availablePets.filter(function (item) {
                    return item.type.toLowerCase() == requestData.requests[request].toLowerCase();
                });
                if (value.length === 0) {
                    petAvailability = false;
                    return "break";
                }
            };
            for (var request in requestData.requests) {
                var state_1 = _loop_3(request);
                if (state_1 === "break")
                    break;
            }
            if (petAvailability) {
                this_2.requests[i].status = "Available";
            }
            else {
                this_2.requests[i].status = "Not Available";
            }
            topRequests.push(this_2.requests[i]);
        };
        var this_2 = this;
        for (var i = 0; i < index; i++) {
            _loop_2(i);
        }
        return topRequests;
    };
    Requests.prototype.allRequestStatus = function (availability) {
        var allRequests = [];
        var availablePets = availability.getAvailablePets();
        var _loop_4 = function (i) {
            var requestData = this_3.requests[i];
            var petAvailability = true;
            var _loop_5 = function (request) {
                console.log(requestData.requests[request].toLowerCase());
                var value = availablePets.filter(function (item) {
                    return item.type.toLowerCase() == requestData.requests[request].toLowerCase().trim();
                });
                if (value.length === 0) {
                    petAvailability = false;
                    return "break";
                }
            };
            for (var request in requestData.requests) {
                var state_2 = _loop_5(request);
                if (state_2 === "break")
                    break;
            }
            if (petAvailability) {
                this_3.requests[i].status = "Available";
            }
            else {
                this_3.requests[i].status = "Not Available";
            }
            allRequests.push(this_3.requests[i]);
        };
        var this_3 = this;
        for (var i = 0; i < this.requests.length; i++) {
            _loop_4(i);
        }
        return allRequests;
    };
    return Requests;
}());
var availabilityObject = new Availability();
availabilityObject.addPets({ type: "Dog", color: "Black", age: 7, breed: "German Shepard" });
availabilityObject.addPets({ type: "Cat", color: "Black", age: 7 });
availabilityObject.addPets({ type: "Dog", color: "Black", age: 7 });
availabilityObject.addPets({ type: "Parrot", color: "Black", age: 7 });
availabilityObject.addPets({ type: "Rabbit", color: "Black", age: 7 });
availabilityObject.addPets({ type: "Dog", color: "Black", age: 7 });
availabilityObject.addPets({ type: "Cat", color: "Black", age: 7 });
availabilityObject.addPets({ type: "Rabbit", color: "Black", age: 7 });
availabilityObject.addPets({ type: "Cat", color: "Black", age: 7 });
var requestObject = new Requests();
requestObject.addRequest({ requests: ["Dog", "Cat"], status: "Pending" });
requestObject.addRequest({ requests: ["Dog"], status: "Pending" });
requestObject.addRequest({ requests: ["Cat"], status: "Pending" });
requestObject.addRequest({ requests: ["Tortise"], status: "Pending" });
requestObject.addRequest({ requests: ["Parrot", "Dog"], status: "Pending" });