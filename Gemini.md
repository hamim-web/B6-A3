Vehicle Rental System - Database Design & SQL Queries
Overview & Objectives
This assignment is designed to evaluate your understanding of database table design, ERD relationships and SQL queries. You will work with a simplified Vehicle Rental System database.

By completing this assignment, you will be able to:

Design an ERD with 1 to 1, 1 to Many and Many to 1 relationships
Understand primary keys and foreign keys
Write SQL queries using JOIN, EXISTS and WHERE
Database Design & Business Logic
The system manages:

Users
Vehicles
Bookings
Business Logic - What Your Database Must Handle
Your database design should support these real world scenarios:

Users Table Must Store:
User role (Admin or Customer)
Name, email, password, phone number
Each email must be unique (no duplicate accounts)
Vehicles Table Must Store:
Vehicle name, type (car/bike/truck), model
Registration number (must be unique)
Rental price per day
Availability status (available/rented/maintenance)
Bookings Table Must Store:
Which user made the booking (link to Users table)
Which vehicle was booked (link to Vehicles table)
Start date and end date of rental
Booking status (pending/confirmed/completed/cancelled)
Total cost of the booking
Part 1: ERD Design (Mandatory)
Note: You must submit your ERD in the submission otherwise you will get 0 marks.

Design an Entity Relationship Diagram (ERD) for the Vehicle Rental System.

Required Tables
You must include the following tables:

Users
Vehicles
Bookings
Relationship Requirements
Your ERD must clearly show:

One to Many: User → Bookings
Many to One: Bookings → Vehicle
One to One (logical): Each booking connects exactly one user and one vehicle
ERD Must Include
Primary Keys (PK)
Foreign Keys (FK)
Relationship cardinality
Status fields (e.g. booking status, vehicle availability)
Submission Format
You need to submit your ERD as:

Lucidchart ERD Tool
Submit a public, shareable ERD link.
Part 2: SQL Queries
Write SQL queries based on your designed schema.

Check Sample Input/Output: To understand the expected results for each query, please refer to the Sample Query Results (QUERY.md) file.

Query 1: JOIN
Retrieve booking information along with:

Customer name
Vehicle name
Concepts used: INNER JOIN

Query 2: EXISTS
Find all vehicles that have never been booked.

Concepts used: NOT EXISTS

Query 3: WHERE
Retrieve all available vehicles of a specific type (e.g. cars).

Concepts used: SELECT, WHERE

Query 4: GROUP BY and HAVING
Find the total number of bookings for each vehicle and display only those vehicles that have more than 2 bookings.

Concepts used: GROUP BY, HAVING, COUNT

Part 3: Theory Questions (Viva Practice - Progress, Not Perfection)
Note: Answer the questions in your own words and record them on camera in Bengali or English. Spend about two minutes on each question.

"This video is a safe space to practice - confidence grows every time you speak."

Question 1
What is a foreign key and why is it important in relational databases?

Question 2
What is the difference between WHERE and HAVING clauses in SQL?

Question 3
What is a primary key and what are its characteristics?

Question 4
What is the difference between INNER JOIN and LEFT JOIN in SQL?

Evaluation Criteria
Section	Marks
ERD Design	60%
SQL Queries	20%
Theory Answers	20%
📚 Additional Resources
Sample Query Results - Expected input and output examples for SQL queries
Submission Guide - Assignment submission guidelines and deadlines

Sample SQL Queries - Expected Output
This document provides sample data and the expected outputs for the SQL queries defined in the assignment.

Sample Data (Input)
Users Table
user_id	name	email	phone	role
1	Alice	alice@example.com	1234567890	Customer
2	Bob	bob@example.com	0987654321	Admin
3	Charlie	charlie@example.com	1122334455	Customer
Vehicles Table
vehicle_id	name	type	model	registration_number	rental_price	status
1	Toyota Corolla	car	2022	ABC-123	50	available
2	Honda Civic	car	2021	DEF-456	60	rented
3	Yamaha R15	bike	2023	GHI-789	30	available
4	Ford F-150	truck	2020	JKL-012	100	maintenance
Bookings Table
booking_id	user_id	vehicle_id	start_date	end_date	status	total_cost
1	1	2	2023-10-01	2023-10-05	completed	240
2	1	2	2023-11-01	2023-11-03	completed	120
3	3	2	2023-12-01	2023-12-02	confirmed	60
4	1	1	2023-12-10	2023-12-12	pending	100
Expected Query Results
Query 1: JOIN
Requirement: Retrieve booking information along with Customer name and Vehicle name.

Expected Output:

booking_id	customer_name	vehicle_name	start_date	end_date	status
1	Alice	Honda Civic	2023-10-01	2023-10-05	completed
2	Alice	Honda Civic	2023-11-01	2023-11-03	completed
3	Charlie	Honda Civic	2023-12-01	2023-12-02	confirmed
4	Alice	Toyota Corolla	2023-12-10	2023-12-12	pending
Query 2: EXISTS
Requirement: Find all vehicles that have never been booked.

Expected Output:

vehicle_id	name	type	model	registration_number	rental_price	status
3	Yamaha R15	bike	2023	GHI-789	30	available
4	Ford F-150	truck	2020	JKL-012	100	maintenance
Query 3: WHERE
Requirement: Retrieve all available vehicles of a specific type (e.g. cars).

Expected Output:

vehicle_id	name	type	model	registration_number	rental_price	status
1	Toyota Corolla	car	2022	ABC-123	50	available
Query 4: GROUP BY and HAVING
Requirement: Find the total number of bookings for each vehicle and display only those vehicles that have more than 2 bookings.

Expected Output:

vehicle_name	total_bookings
Honda Civic	3

Submission Guide
← Back to Main Documentation

Submission Guidelines

Documentation
README.md: Must be professional and include:
Explaination of the project
queries.sql: Must include all the queries with solutions
2. What You Need to Provide
GitHub Repository Link (Which will include queries.sql and README.md)
ERD Link (You need to use Lucidchart or any other ERD tool to create the ERD and share the public link)
Viva Video Link (You can upload it on YouTube or Google Drive but make sure to share the public link)
📝 Example Submission Format
GitHub Repo: Your GitHub Repo Link
ERD Link: Your ERD Link
Viva Video Link: Your Viva Video Link
🎓 Assignment Deadlines
⏰ Deadline
60 Marks: December 23, 2025, at 11:59 PM
50 Marks: December 24, 2025, at 11:59 PM
30 Marks: After December 24, 2025, at 11:59 PM
🚫 Important Note
Plagiarism will not be tolerated. Ensure that the code you submit is your own work. Any instances of plagiarism will result in 0 Marks.