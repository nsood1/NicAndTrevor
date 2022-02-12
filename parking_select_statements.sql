-- 1:How many total parking spaces do I have?
SELECT COUNT(*) FROM parking_spot;

-- 2:How many parking lots are there at Cowpokes Stadium?
SELECT COUNT(*) FROM parking_lot
WHERE parking_lot.stadium_id = 2;

-- 3:How many parking spaces are there at Cowpokes Stadium?
SELECT COUNT(*) FROM parking_spot
WHERE parking_spot.lot_id = 2;

-- 4:What parking spaces are currently available for use?
SELECT spot_num FROM parking_spot
WHERE is_available = false;

-- 5:What parking spaces ended up being used for Event 1?
SELECT spot_num, lot_id FROM parking_spot
JOIN event e on parking_spot.lot_id = e.stadium_id AND e.id = 1
AND parking_spot.is_available = false;

-- 6:What parking spaces ended up being used for Event 2?
SELECT spot_num, lot_id FROM parking_spot
JOIN event e on parking_spot.lot_id = e.stadium_id AND e.id = 2
AND parking_spot.is_available = false;

-- 7:What employees occupy lot 2 at Rodeo Stadium?
--TREVOR: i check i understood this one right pls....
SELECT name, schedule_num FROM employee
WHERE lot_id = 1;

-- 8:How many Trucks have parked at any of my venues?
SELECT count(*) FROM vehicle
WHERE type = 'Truck';

-- 9:How many of each vehicle type have parked at any of my venues?

-- 10: On average, how many vehicles come to an event?