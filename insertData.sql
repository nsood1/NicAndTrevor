INSERT INTO public.stadium(stadiumnam, stadiumaddress, stadiumcapacity)
VALUES('Rodeo', '11059 Harry Hines', 80000);

INSERT INTO public.stadium(stadiumnam, stadiumaddress, stadiumcapacity)
VALUES('Cowpokes', '88 Main Street', 50000);

INSERT INTO public.parkinglot(numberofspots, stadiumid)
VALUES  (3000, 1),
 (5000, 1),
 (3000, 2),
 (600, 2);

INSERT INTO public.employee(firstname, lastname, lotid) VALUES
('Nicole', 'Sood', 1), ('Trevor', 'Dohm', 2),
('Grace', 'McGinty', 1), ('Josh', 'Govota', 4);

INSERT INTO public.eventschedule(eventname, eventguestcap, eventlocation) VALUES
('Dallas Lunchs', 10000, 1), ('Margarita Madness', 3000, 2),
('Stampede 2021', 4000,  2);

INSERT INTO public.parkingspot(spotnum, lotid, isopen, isdisabled, event, employee) VALUES
(1, 1, false, true, 4, 1), (2, 1, true, false, 4, 1), (3, 1, true, false, 4, 1), (4, 1, true, false, 4, 1), (5, 1, false, false, 4, 1),
(1, 2, false, true, 5, 3), (2, 2, true, false, 5, 2), (3, 2, true, false, 6, 2), (4, 2, true, false, 5, 1), (5, 2, false, false, 5, 3);

INSERT INTO public.ticketinfomation(ticketnumber, numberofguests, eventattending, approvedparkinglot) VALUES
(1, 4, 4, 1), (2, 5, 5, 2), (3, 1, 5, 2);

INSERT INTO public.vehicle(licenseplate, type, tickernum) VALUES
('MB56GH8', 'SUV', 1), ('A98B82W', 'Van', 1), ('G4JK901', 'Sudan', 3);

INSERT INTO public.shiftschedule(event, employee, lotplacement) VALUES
(4, 1, 1), (4, 2, 2), (4, 4, 1);

INSERT INTO public.spotassignement(spotassigned, liscenceplate) VALUES
(1, 'MB56GH8'), (10, 'A98B82W'), (8, 'G4JK901');