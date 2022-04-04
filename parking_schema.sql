CREATE DATABASE rodeo_stadium;

-- Create Tables :)

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

-- Table Insertions :|

INSERT INTO stadium(name, address, capacity)
VALUES('Rodeo', '11059 Harry Hines', 80000),
('Cowpokes', '88 Main Street', 50000);

INSERT INTO event(id, name, date, num_sold, stadium_id)
VALUES (1, 'Dallas AnimeCon OwO', '3-25-22', 35000, 1),
 (2, 'Math Olympics! Proofs Welcome!', '7-16-22', 2000, 2);

INSERT INTO parking_lot(num_spots, stadium_id)
VALUES (3000, 1), (5000, 1), (3000, 2), (600, 2);

INSERT INTO schedule(schedule_num, start_time, end_time, lot_id, event_id) VALUES
(1, '8:00:00', '5:00:00', 1, 1),
(2, '9:30:00', '6:30:00', 2, 1),
(3, '1:00:00', '11:00:00', 1, 2);

INSERT INTO employee(id, name, schedule_num, lot_id) VALUES
(1, 'Nicole Sood', 1, 1), (2, 'Trevor Dohm', 1, 2),
(3, 'Grace McGinty', 2, 1), (4, 'Josh Govota', 3, 2);
-- Note: There is also a lot 3 and 4, defined above.

INSERT INTO parking_spot(spot_num, is_available, is_handicap, employee_id, employee_name, lot_id) VALUES
(101, false, true, 1, 'Nicole Sood', 1), (102, false, false, 1, 'Nicole Sood', 1),
(103, true, true, 1, 'Nicole Sood', 1), (104, true, false, 1, 'Nicole Sood', 1),
(105, true, true, 1, 'Nicole Sood', 1), (106, true, false, 1, 'Nicole Sood', 1)  ;

INSERT INTO parking_spot(spot_num, is_available, is_handicap, employee_id, employee_name, lot_id) VALUES
(201, false, true, 2, 'Trevor Dohm', 2), (202, false, false, 2, 'Trevor Dohm', 2),
(203, false, true, 2, 'Trevor Dohm', 2), (204, false, false, 2, 'Trevor Dohm', 2),
(205, false, true, 2, 'Trevor Dohm', 2), (206, false, false, 2, 'Trevor Dohm', 2);

INSERT INTO ticket(ticket_num, price, event_id, lot_id) VALUES
(1, 88.00, 1, 1), (2, 76.98, 1, 1), (3, 149.98, 2, 2);

INSERT INTO vehicle(license, type, lot_id, spot_num) VALUES
('MB34HGL', 'Van', 1, 101), ('LR64NDK', 'SUV', 2, 202),
('NLF16LB', 'Truck', 1, 102), ('LB06NGL', 'RV', 2, 201);

INSERT INTO fan(ssn, name, car_license, car_type, ticket_num) VALUES
(1111, 'Elizabeth Windsor', 'NLF16LB', 'Truck', 1),
(2222, 'Taylor Swift', 'MB34HGL', 'Van', 2),
(3333, 'Harry Styles', 'LB06NGL', 'RV', 3);