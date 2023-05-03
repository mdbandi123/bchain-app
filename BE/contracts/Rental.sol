// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Rental {
    struct Bike{
        string name;
        string img;
        uint rangePower;
        uint maxSpeed;
        uint batteryCapacity;
        uint costPerHour;
        bool isAvailable;
    }
    
    //admin variables
    address owner;
    uint totalHours=0;
    uint totalRents=0;
    uint totalEbikes;

    //array of bikes
    Bike[] bikes;
 
    constructor(){
        //contract deployer address
        owner = msg.sender;

        //initialization of bike values
        bikes.push(Bike("48v/12ah Electric Bicycle Electric Bike", "src/images/b1.png", 60, 50, 576, 680000000000000, true));
        bikes.push(Bike("51v/17ah Electric Bicycle Electric Bike", "src/images/b2.png", 60, 50, 867, 680000000000000, true));
        bikes.push(Bike("43v/11ah Electric Bicycle Electric Bike", "src/images/b3.png", 60, 50, 473, 680000000000000, true));
        bikes.push(Bike("60v/18ah Electric Bicycle Electric Bike", "src/images/b4.png", 60, 50, 1080, 680000000000000, true));
        bikes.push(Bike("42v/16ah Electric Bicycle Electric Bike", "src/images/b5.png", 60, 50, 240, 680000000000000, true));
        bikes.push(Bike("500W 48V Fat Tire Electric 2022", "src/images/b6.png", 70, 50, 240, 800000000000000, true));
        bikes.push(Bike("450W 70V Fat Tire Electric 2022", "src/images/b7.png", 70, 50, 240, 800000000000000, true));
        bikes.push(Bike("700W 80V Fat Tire Electric 2022", "src/images/b8.png", 70, 50, 240, 800000000000000, true));

        totalEbikes=bikes.length;
    }
    
    function getBikes() public view returns (Bike[] memory){
        return bikes;
    }

    function getNumOfBikes() public view returns (uint){
        return totalEbikes;
    }

    function getTotalHours() public view returns (uint){
        return totalHours;
    }

    function getTotalRents() public view returns (uint){
        return totalRents;
    }

    function rent(uint _totalHours, string memory _name) payable public {
        totalHours+=_totalHours;
        totalRents++;
        updateBikes(_name);
    }

    function updateBikes(string memory _name) public {
        for(uint i=0; i<totalEbikes; i++){
            if(keccak256(abi.encodePacked(bikes[i].name)) == keccak256(abi.encodePacked(_name))){
                bikes[i].isAvailable = !bikes[i].isAvailable;
            }
        }
    }


}