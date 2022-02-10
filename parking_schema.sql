CREATE DATABASE rodeo_stadium;

-- Table Creations

CREATE TABLE stadium(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    address VARCHAR(50),
    capacity INTEGER
);

CREATE TABLE event(
    id INTEGER PRIMARY KEY,
    name VARCHAR(50),
    date DATE,
    num_sold INTEGER,
    stadium_id INTEGER REFERENCES stadium(id)
);

CREATE TABLE parking_lot(
    id SERIAL PRIMARY KEY,
    num_spots INTEGER,
    stadium_id INTEGER REFERENCES stadium(id)
);

CREATE TABLE schedule(
    schedule_num INTEGER PRIMARY KEY,
    start_time TIME,
    end_time TIME,
    lot_id INTEGER REFERENCES parking_lot(id),
    event_id INTEGER REFERENCES event(id)
);

CREATE TABLE employee(
    id INTEGER,
    name VARCHAR(50),
    PRIMARY KEY (id, name),
    schedule_num INTEGER REFERENCES schedule(schedule_num),
    lot_id INTEGER REFERENCES parking_lot(id)
);

CREATE TABLE parking_spot(
    spot_num INTEGER PRIMARY KEY,
    is_available BOOL NOT NULL,
    is_handicap BOOL NOT NULL,
    employee_id INTEGER,
    employee_name VARCHAR(50),
    FOREIGN KEY (employee_id, employee_name) REFERENCES employee(id, name),
    lot_id INTEGER REFERENCES parking_lot(id)
);

CREATE TABLE ticket(
    ticket_num INTEGER PRIMARY KEY,
    price FLOAT,
    event_id INTEGER REFERENCES event(id),
    lot_id INTEGER REFERENCES parking_lot(id)
);

CREATE TABLE vehicle(
    license VARCHAR(30),
    type VARCHAR(30), -- Coupe, Sedan, Hatchback, SUV, Minivan, Van, Truck, RV
    PRIMARY KEY (license, type),
    lot_id INTEGER REFERENCES parking_lot(id),
    spot_num INTEGER REFERENCES parking_spot(spot_num)
);

CREATE TABLE fan(
    ssn INTEGER PRIMARY KEY,
    name VARCHAR(50),
    car_license VARCHAR(30) NOT NULL,
    car_type VARCHAR(30) NOT NULL,
    FOREIGN KEY (car_license, car_type) REFERENCES vehicle(license, type),
    ticket_num INTEGER REFERENCES ticket(ticket_num)
);

-- Table Insertions

INSERT INTO stadium(name, address, capacity)
VALUES('Rodeo', '11059 Harry Hines', 80000);

INSERT INTO stadium(name, address, capacity)
VALUES('Cowpokes', '88 Main Street', 50000);

INSERT INTO event(id, name, date, num_sold, stadium_id)
VALUES (1, 'Dallas AnimeCon OwO', '3-25-22', 35000, 1);

INSERT INTO event(id, name, date, num_sold, stadium_id)
VALUES (2, 'Math Olympics! Proofs Welcome!', '7-16-22', 2000, 2);

INSERT INTO parking_lot(num_spots, stadium_id)
VALUES (3000, 1), (5000, 1), (3000, 2), (600, 2);

INSERT INTO schedule(schedule_num, start_time, end_time, lot_id, event_id) VALUES
(1, '8:00:00', '5:00:00', 1, 1),
(2, '9:30:00', '6:30:00', 2, 1),
(3, '1:00:00', '11:00:00', 1, 2);

INSERT INTO employee(id, name, schedule_num, lot_id) VALUES
('Nicole', 'Sood', 1, 1), ('Trevor', 'Dohm', 1, 2),
('Grace', 'McGinty', 2, 1), ('Josh', 'Govota', 3, 2);

-- FIXME: Add Whatever you want, the first couple of things look good to me!
-- INSERT INTO public.parkingspot(spotnum, lotid, isopen, isdisabled, event, employee) VALUES
-- (1, 1, false, true, 4, 1), (2, 1, true, false, 4, 1), (3, 1, true, false, 4, 1), (4, 1, true, false, 4, 1), (5, 1, false, false, 4, 1),
-- (1, 2, false, true, 5, 3), (2, 2, true, false, 5, 2), (3, 2, true, false, 6, 2), (4, 2, true, false, 5, 1), (5, 2, false, false, 5, 3);
--
-- INSERT INTO public.ticketinfomation(ticketnumber, numberofguests, eventattending, approvedparkinglot) VALUES
-- (1, 4, 4, 1), (2, 5, 5, 2), (3, 1, 5, 2);
--
-- INSERT INTO public.vehicle(licenseplate, type, tickernum) VALUES
-- ('MB56GH8', 'SUV', 1), ('A98B82W', 'Van', 1), ('G4JK901', 'Sudan', 3);
--
-- INSERT INTO public.shiftschedule(event, employee, lotplacement) VALUES
-- (4, 1, 1), (4, 2, 2), (4, 4, 1);
--
-- INSERT INTO public.spotassignement(spotassigned, liscenceplate) VALUES
-- (1, 'MB56GH8'), (10, 'A98B82W'), (8, 'G4JK901');