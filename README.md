# Vehicle Rental System

This project is a full-stack application for a vehicle rental system. It includes a React-based front-end and a Node.js back-end with a database to manage users, vehicles, and bookings.

## Project Structure

- **/client**: Contains the React front-end application.
- **/server**: Contains the Node.js back-end application, including API endpoints and database configurations.
- **/shared**: Contains shared code between the front-end and back-end, such as route definitions and data schemas.
- **queries.sql**: Contains SQL queries for various data retrieval tasks.

## Part 1: ERD (Entity Relationship Diagram)

The database schema consists of three main tables: `Users`, `Vehicles`, and `Bookings`.

*   **Users**: Stores information about users, including their role (Admin or Customer).
    - `user_id`: Unique identifier for each user.
    - `name`: Name of the user.
    - `email`: Unique email address for each user.
    - `role`: Role of the user (e.g., 'Admin', 'Customer').
*   **Vehicles**: Contains details about each vehicle, its rental price, and current availability.
    - `vehicle_id`: Unique identifier for each vehicle.
    - `name`: Name of the vehicle.
    - `type`: Type of vehicle (e.g., 'car', 'motorcycle').
    - `price_per_day`: Rental price per day.
    - `status`: Availability status of the vehicle (e.g., 'available', 'booked').
*   **Bookings**: Acts as a linking table between `Users` and `Vehicles` to manage rentals.
    - `booking_id`: Unique identifier for each booking.
    - `user_id`: Foreign key referencing the `Users` table.
    - `vehicle_id`: Foreign key referencing the `Vehicles` table.
    - `start_date`: Start date of the booking.
    - `end_date`: End date of the booking.
    - `total_cost`: Total cost of the booking.
    - `status`: Status of the booking (e.g., 'confirmed', 'completed').

**Relationships:**

*   **One-to-Many**: One `User` can have many `Bookings`.
*   **One-to-Many**: One `Vehicle` can have many `Bookings`.

**To create the ERD, you can use a tool like Lucidchart, draw.io, or any other ERD tool. Once you have created the ERD, you can share the public link in this section.**

## Part 2: SQL Queries

The `queries.sql` file contains SQL queries to retrieve and manipulate data from the database.

### Query 1: Retrieve booking information with customer and vehicle names.

This query retrieves detailed booking information, including the customer's name and the vehicle's name, by joining the `Bookings`, `Users`, and `Vehicles` tables.

```sql
SELECT
    b.booking_id,
    u.name AS customer_name,
    v.name AS vehicle_name,
    b.start_date,
    b.end_date,
    b.status
FROM
    Bookings b
INNER JOIN
    Users u ON b.user_id = u.user_id
INNER JOIN
    Vehicles v ON b.vehicle_id = v.vehicle_id;
```

### Query 2: Find all vehicles that have never been booked.

This query finds all vehicles that do not have any associated bookings in the `Bookings` table using the `NOT EXISTS` subquery.

```sql
SELECT
    *
FROM
    Vehicles v
WHERE
    NOT EXISTS (
        SELECT 1
        FROM Bookings b
        WHERE b.vehicle_id = v.vehicle_id
    );
```

### Query 3: Retrieve all available cars.

This query selects all vehicles that are of type 'car' and have a status of 'available'.

```sql
SELECT
    *
FROM
    Vehicles
WHERE
    type = 'car' AND status = 'available';
```

### Query 4: Find vehicles with more than 2 bookings.

This query identifies vehicles that have been booked more than two times by grouping the bookings by vehicle and using the `HAVING` clause to filter the results.

```sql
SELECT
    v.name AS vehicle_name,
    COUNT(b.booking_id) AS total_bookings
FROM
    Vehicles v
JOIN
    Bookings b ON v.vehicle_id = b.vehicle_id
GROUP BY
    v.name
HAVING
    COUNT(b.booking_id) > 2;
```
