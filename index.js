const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(2, 4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num1) {
    return function (num2) {
        return num1 * num2;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);


function selectDifferentDrivers(arrayOfDrivers, driversFunction) {
    if (driversFunction === returnLastTwoDrivers)
        return returnLastTwoDrivers(arrayOfDrivers);
        else if (driversFunction === returnFirstTwoDrivers)
            return returnFirstTwoDrivers(arrayOfDrivers);
        else return "No drivers for you!";
}

/*
function selectDifferentDrivers(drivers, function) {
    if function = returnFirstTwoDrivers {
        return returnFirstTwoDrivers(drivers);
    }   else if function = returnLastTwoDrivers {
        return returnLastTwoDrivers(drivers);
    }
}

*/ 


console.log(returnLastTwoDrivers(drivers));