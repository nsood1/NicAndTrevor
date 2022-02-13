-- 1:How many total parking spaces do I have?
SELECT COUNT(*) FROM parking_spot;

-- 2:How many parking lots are there at Cowpokes Stadium?
SELECT COUNT(*) FROM parking_lot
WHERE parking_lot.stadium_id = 2;

-- 3:How many parking spaces are there at Cowpokes Stadium?
SELECT COUNT(*) FROM parking_spot
WHERE parking_spot.lot_id = 2;
-- Note: Adding more Lots can be connected by OR statements.

-- 4:What parking spaces are currently available for use?
SELECT spot_num FROM parking_spot
WHERE is_available = true;

-- 5:What parking spaces ended up being used for Event 1?
SELECT spot_num, lot_id FROM parking_spot
JOIN event e on parking_spot.lot_id = e.stadium_id AND e.id = 1
AND parking_spot.is_available = false;

-- 6:What parking spaces ended up being used for Event 2?
SELECT spot_num, lot_id FROM parking_spot
JOIN event e on parking_spot.lot_id = e.stadium_id AND e.id = 2
AND parking_spot.is_available = false;

-- 7:What employees occupy lot 2 at Rodeo Stadium?
SELECT name, schedule_num FROM employee
WHERE lot_id = 2;
-- Note: Stadium 1, Lot 2. This will be the one with 5000 Spots.

-- 8:How many Trucks have parked at any of my venues?
SELECT COUNT(*) FROM vehicle
WHERE type = 'Truck';

-- 9:How many of each vehicle type have parked at any of my venues?
SELECT type, COUNT(type) AS frequency
FROM vehicle
GROUP BY type
ORDER BY COUNT(type) DESC;
-- Note: Thanks https://www.c-sharpcorner.com/blogs/sql-query-to-find-out-the-frequency-of-each-element-in-a-column1!

SELECT * FROM vehicle;
-- 10: On average, how many vehicles come to an event?
SELECT ((1.0 * (SELECT COUNT(*) FROM vehicle))) /
(SELECT COUNT(*) FROM event) AS average;
-- Note: The 1.0 Makes the output become a Float.