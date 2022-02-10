CREATE DATABASE rodeo_stadium;

CREATE TABLE stadium(
    stadiumID SERIAL PRIMARY KEY,
    stadiumNam VARCHAR(20),
    stadiumAddress VARCHAR(30),
    stadiumCapacity INT
);

CREATE TABLE parkingLot(
    lotID SERIAL PRIMARY KEY,
    numberOfSpots INT,
    stadiumID INT references stadium(stadiumID)
);

CREATE TABLE employee(
    employeeID SERIAL PRIMARY KEY,
    firstName VARCHAR(20),
    lastName VARCHAR(20) NOT NULL,
    lotID INT references parkingLot(lotID)
);

CREATE TABLE eventSchedule(
    eventID SERIAL PRIMARY KEY,
    eventName VARCHAR(50),
    eventGuestCap int,
    day DATE,
    eventLocation int REFERENCES stadium(stadiumID)
);

CREATE TABLE parkingSpot(
    spotGeneralID SERIAL PRIMARY KEY,
    spotNum INT NOT NULL,
    lotID INT references  parkingLot(lotID),
    isOpen BOOL NOT NULL,
    isDisabled BOOL NOT NULL,
    event INT references eventSchedule(eventid),
    employee INT references employee(employeeID)
);


CREATE TABLE ticketInfomation(
    ticketNumber INT PRIMARY KEY,
    numberOfGuests INT,
    eventAttending INT REFERENCES eventSchedule(eventID),
    approvedParkingLot INT references parkingLot(lotID)
);

CREATE TABLE shiftSchedule(
    event INT references eventSchedule(eventID),
    employee INT references employee(employeeID),
    lotPlacement INT references parkingLot(lotID),
    PRIMARY KEY (event, employee, lotPlacement)
);

CREATE TABLE spotAssignement(
    spotAssigned INT references parkingspot(spotGeneralID),
    liscencePlate VARCHAR(10) references vehicle(licensePlate),
    PRIMARY KEY (spotAssigned, liscencePlate)
);

CREATE TABLE vehicle(
    licensePlate VARCHAR(10) NOT NULL PRIMARY KEY,
    type VARCHAR(15),
    tickerNum INT references ticketInfomation(ticketNumber)
);

