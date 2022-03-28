function returnFirstTwoDrivers(drivers) {
    return drivers = ['Antonia', 'Nuru'];
};
    
    function returnLastTwoDrivers(drivers) {
        return drivers = ['Amari', 'Mo'];
    }
    
    const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
    
    
    const createFareMultiplier = function(num) {
        return function(multiplier) {
            return num * multiplier;
        }
    }
    
    const fareDoubler = function(createFareMultiplier) {
        return createFareMultiplier * 2;
        }
    
    const fareTripler = function(createFareMultiplier) {
        return createFareMultiplier * 3;
    }
    