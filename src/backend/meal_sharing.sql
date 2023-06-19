

/*INSERT INTO meal (`title`, `description`,`location`, `when`,`max_reservations`, `price`,`created_date`) 
VALUES ( 'Pancakes' , 'flour, eggs, milk, sunflower or vegetable oil', 'Kolding','2023-04-02 20:00:00', 3 , 80, '2023-04-19');

INSERT INTO meal (`title`, `description`,`location`, `when`,`max_reservations`, `price`,`created_date`) 
VALUES ( 'Fluffy American pancakes' , 'flour, baking powdder, caster sugar, egg, milk, butter', 'Kolding','2023-04-07 18:00:00', 4 , 90, '2023-04-30');

select * from reservation;

INSERT INTO reservation (`number_of_guests`, `meal_id`,`created_date`, `contact_phonenumber`,`contact_name`, `contact_email`) 
VALUES ( 3 , 55 ,'2023-05-01',  45772358 ,'Anna', Null );

INSERT INTO reservation (`number_of_guests`, `meal_id`,`created_date`, `contact_phonenumber`,`contact_name`, `contact_email`) 
VALUES ( 2 , 3,'2023-04-10',  26773450 ,'Viktoria', 'torytory@gmail.com' );

INSERT INTO review(`title`, `description`,`meal_id`, `stars`,`created_date`) 
VALUES ('Excellent' ,'It was the best dish I ever had',  2 ,5, '2023-01-28' );
INSERT INTO review(`title`, `description`,`meal_id`, `stars`,`created_date`) 
VALUES ('Good', Null, 7, 4, '2023-02-24');*/

 
SET NAMES utf8mb4;
CREATE DATABASE meal_sharing;
USE meal_shering;


CREATE TABLE "meal" (
  "id" int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(255) NOT NULL,
  `description` text NULL DEFAULT NULL, 
  `location` varchar(255) NOT NULL ,
  `when` varchar(255) NULL DEFAULT NULL,
  `max_reservations`  int(10) NULL DEFAULT NULL,
  `price` decimal(5,2) NOT NULL,
  `created_date` DATE NOT NULL
);

CREATE TABLE `reservation` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `number_of_guests` int(32) NOT NULL,
  `meal_id` int(10) unsigned NOT NULL,
  `created_date` DATE NOT NULL, 
  `contact_phonenumber` varchar(255) NOT NULL,
  `contact_name` varchar(255) NOT NULL,
  `contact_email` varchar(255) NULL DEFAULT NULL,
  CONSTRAINT `fk_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE `review` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(255) NOT NULL,
  `description` text(10) NULL DEFAULT NULL,
  `review_meal_id` int(10) unsigned NOT NULL, 
  `stars` int(10) unsigned NOT NULL,
  `created_date` DATE NOT NULL,
  CONSTRAINT `fk_review_meal_id` FOREIGN KEY (`review_meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);
-- Queries 
-- #1Meal
-- Get all meals
SELECT * FROM Meal; 

-- Add a new meal
INSERT INTO Meal (`title`, `description`,`location`, `when`,`max_reservations`, `price`,`created_date`) 
VALUES ( 'Pancakes' , 'flour, eggs, milk, sunflower or vegetable oil', 'Kolding','2023-04-02 20:00:00', 3 , 80, '2023-04-19');

INSERT INTO Meal (`title`, `description`,`location`, `when`,`max_reservations`, `price`,`created_date`) 
VALUES ( 'Fluffy American pancakes' , 'flour, baking powdder, caster sugar, egg, milk, butter', 'Kolding','2023-04-07 18:00:00', 4 , 90, '2023-04-30');

-- Get a meal with any id, fx 1
SELECT * FROM meal
WHERE id =1;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Meal
SET price = 95,
    max_reservations = 5
WHERE id= 1;

-- Delete a meal with any id, fx 1
DELETE FROM Meal 
WHERE id= 2;

-- #2 Reservation 
-- Get all reservations
SELECT * FROM reservation;

-- Add a new reservation
INSERT INTO reservation (`number_of_guests`, `meal_id`,`created_date`, `contact_phonenumber`,`contact_name`, `contact_email`) 
VALUES ( 3 , 1 ,'2023-05-01',  45772358 ,'Anna', Null );
INSERT INTO reservation (`number_of_guests`, `meal_id`,`created_date`, `contact_phonenumber`,`contact_name`, `contact_email`) 
VALUES ( 2 , 3,'2023-04-10',  26773450 ,'Viktoria', 'torytory@gmail.com' );

-- Get a reservation with any id, fx 1
SELECT * FROM reservation
WHERE id=7;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Reservation 
SET contact_email = 'ann123@gmail.com'
WHERE id=1;

-- Delete a reservation with any id, fx 1
DELETE FROM reservation
WHERE id=2;

-- #3 Review 
-- Get all reviews
SELECT * FROM review;

-- Add a new review
INSERT INTO review(`title`, `description`,`meal_id`, `stars`,`created_date`) 
VALUES ('Excellent' ,'It was the best dish I ever had',  2 ,5, '2023-01-28' );
INSERT INTO review(`title`, `description`,`meal_id`, `stars`,`created_date`) 
VALUES ('Good', Null, 7, 4, '2023-02-24');

-- Get a review with any id, fx 1
SELECT * FROM review 
WHERE id= 3;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review
SET stars= 5
WHERE id=7;

-- Delete a review with any id, fx 1
DELETE FROM review 
WHERE id=1;


-- Additional queries
-- Now add a couple of different meals, reservations and reviews with different attributes. With those meals create the following queries
-- Adding to meal
INSERT INTO meal (`title`, `description`,`location`, `when`,`max_reservations`, `price`,`created_date`) 
VALUES ( 'Cheesy Broccoli Soup' , 'butter, cubed onion, garlic, broccoli florets, carrot, chicken stock, cream, bay leaves', 'Arhus','2023-04-24 15:00:00', 8 , 80, '2023-03-28');
INSERT INTO meal (`title`, `description`,`location`, `when`,`max_reservations`, `price`,`created_date`) 
VALUES ( 'Sour Cream-Lemon Pie' , 'Sugar, milk, lemon juice, egg yolks, butter, lemon zest, sour cream, heavy whipping cream', 'Kolding','2023-04-30 10:00:00', 4 , 125, '2023-03-30');
INSERT INTO meal (`title`, `description`,`location`, `when`,`max_reservations`, `price`,`created_date`) 
VALUES ('California Sushi Rolls' , 'Sushi rice, rice vinegar, sesame seeds, black sesame seeds, nori sheets, cucumber, crabmeat sticks, avocado, soy sauce, wasabi, ginger', 'Vajle','2023-04-31 12:30:00', 5 , 100, '2023-03-28');
INSERT INTO meal (`title`, `description`,`location`, `when`,`max_reservations`, `price`,`created_date`) 
VALUES ( 'Broccoli Shrimp Alfredo' , 'Fettuccine, shrimp,  garlic, butter, cream cheese, milk, Parmesan cheese, broccoli florets', 'Fredericia','2021-04-03 13:15:00', 5 , 135, '2021-02-28');

-- Adding to Reservation
INSERT INTO reservation (`number_of_guests`, `meal_id`,`created_date`, `contact_phonenumber`,`contact_name`, `contact_email`) 
VALUES (3 , 5 ,'2023-04-18', 45773218,'Marcin', 'marc@gmail.com');
INSERT INTO reservation (`number_of_guests`, `meal_id`,`created_date`, `contact_phonenumber`,`contact_name`, `contact_email`) 
VALUES (3 , 4,'2023-04-29', 23873467 ,'Karolina', 'karol@gmail.com');
INSERT INTO reservation (`number_of_guests`, `meal_id`,`created_date`, `contact_phonenumber`,`contact_name`, `contact_email`) 
VALUES ( 2 , 3,'2023-04-31', 34455678,'Hans', 'hans@gmail.com');

-- Adding to review
INSERT INTO review(`title`, `description`,`meal_id`, `stars`,`created_date`) 
VALUES ('Not Good' ,'It tasted row and dry',  5 ,2, '2023-04-31' );
INSERT INTO review(`title`, `description`,`meal_id`, `stars`,`created_date`)
VALUES ( 'Perfect' ,NULL ,  3 ,5, '2023-01-23' );
INSERT INTO review (`title`, `description`,`meal_id`, `stars`,`created_date`)
VALUES ( 'Good' ,'It tasted qute tasty', 4 ,5,'2023-02-12' );

-- Get meals that has a price smaller than a specific price fx 90
SELECT * FROM meal
WHERE price< 90;

-- Get meals that still has available reservations
SELECT * FROM meal
WHERE max_reservations > (SELECT SUM(number_of_guests)
        FROM reservation
        WHERE meal_id = meal.id);
            
-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT * FROM meal
WHERE title LIKE '%Rød grød med%';

-- Get meals that has been created between two dates
SELECT * FROM meal
WHERE created_date 
BETWEEN  '2023-01-01' AND '2023-05-01';

-- Get only specific number of meals fx return only 5 meals
SELECT * FROM meal
LIMIT 5;

-- Get the meals that have good reviews
SELECT meal.* FROM meal
JOIN review ON meal.id= review.meal_id AND review.title='Good';

-- Get reservations for a specific meal sorted by created_date
SELECT * FROM reservation
WHERE meal_id =5 
ORDER BY created_date;

-- Sort all meals by average number of stars in the reviews
SELECT meal.* FROM meal
JOIN review ON meal.id= review.meal_id
GROUP BY review.meal_id
ORDER BY AVG(review.stars);
