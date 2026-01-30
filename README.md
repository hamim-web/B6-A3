# Vehicle Rental System - Database & SQL Assignment

## Project Overview
This project is an assignment designed to demonstrate understanding of database design and SQL querying for a simplified Vehicle Rental System. It includes the database schema design, SQL queries to retrieve and manipulate data, and answers to fundamental database theory questions.

The system is designed to manage users, vehicles, and bookings, with specific business logic such as unique user emails, vehicle availability tracking, and booking management.

## Part 1: ERD (Entity Relationship Diagram)
The database schema consists of three main tables: `Users`, `Vehicles`, and `Bookings`.

*   **Users**: Stores information about users, including their role (Admin or Customer).
*   **Vehicles**: Contains details about each vehicle, its rental price, and current availability.
*   **Bookings**: Acts as a linking table between `Users` and `Vehicles` to manage rentals, including start/end dates, costs, and booking status.

**Relationships:**
*   **One-to-Many**: One `User` can have many `Bookings`.
*   **One-to-Many**: One `Vehicle` can have many `Bookings`.

*(An ERD diagram link would be provided here as per the assignment requirements.)*

## Part 2: SQL Queries
The `queries.sql` file contains the SQL code to answer the specific data retrieval questions from the assignment. The queries demonstrate the use of various SQL concepts:

*   **Query 1**: Uses `INNER JOIN` to retrieve comprehensive booking details, including customer and vehicle names.
*   **Query 2**: Uses `NOT EXISTS` to find all vehicles that have never been part of a booking.
*   **Query 3**: Uses the `WHERE` clause to filter for all available cars.
*   **Query 4**: Uses `GROUP BY` and `HAVING` to find vehicles that have been booked more than twice.

## Part 3: Theory Questions (Viva)
This section covers fundamental concepts in relational database management.

*(A link to the viva video would be provided here as per the assignment requirements.)*

---
*This repository was prepared to fulfill the requirements of the Database Design & SQL Queries assignment.*
