# Viva Practice: Theory Question Answers

Here are the answers to the theory questions for your viva.

### Question 1: What is a foreign key and why is it important in relational databases?

**Answer:**
A foreign key is a column or a set of columns in one table that refers to the primary key of another table. It acts as a link between the two tables.

Its importance comes from two main functions:
1.  **Establishing Relationships:** Foreign keys are the mechanism used to model relationships between tables. For example, in our vehicle rental system, a `user_id` in the `Bookings` table links a specific booking to a specific user in the `Users` table.
2.  **Enforcing Referential Integrity:** This ensures that the relationships between tables remain consistent. For instance, it can prevent you from creating a booking for a `user_id` that does not exist in the `Users` table. It also prevents you from deleting a user who still has active bookings, which would create "orphan" records and corrupt the data's integrity.

### Question 2: What is the difference between WHERE and HAVING clauses in SQL?

**Answer:**
The main difference between `WHERE` and `HAVING` is when they are used in a query and what they filter.

1.  **`WHERE` Clause:**
    *   **When it's used:** It filters rows *before* any grouping or aggregation takes place.
    *   **What it filters:** It operates on individual rows.
    *   **Example:** `SELECT * FROM Vehicles WHERE type = 'car';` In this case, `WHERE` filters the rows to include only cars before any other processing happens.

2.  **`HAVING` Clause:**
    *   **When it's used:** It filters groups *after* grouping and aggregation have been performed by the `GROUP BY` clause.
    *   **What it filters:** It operates on aggregated data (the results of functions like `COUNT()`, `SUM()`, `AVG()`, etc.).
    *   **Example:** `SELECT vehicle_name, COUNT(*) FROM Bookings GROUP BY vehicle_name HAVING COUNT(*) > 2;` Here, `HAVING` filters out the groups that have a count of 2 or less, after the bookings have already been grouped by vehicle.

In short: **`WHERE` filters rows, `HAVING` filters groups.**

### Question 3: What is a primary key and what are its characteristics?

**Answer:**
A primary key is a special column (or set of columns) in a relational database table that is used to uniquely identify each record or row within that table.

It has two main characteristics:
1.  **Must be Unique:** Every value in the primary key column must be unique. No two rows can have the same primary key value. This is how the key guarantees that each row is uniquely identifiable.
2.  **Cannot be NULL:** A primary key column cannot contain `NULL` values. Every row must have a value for its primary key. This ensures that every record in the table can be reliably identified.

For example, the `user_id` in the `Users` table ensures that we can distinguish every user from one another, even if they have the same name.

### Question 4: What is the difference between INNER JOIN and LEFT JOIN in SQL?

**Answer:**
The difference between `INNER JOIN` and `LEFT JOIN` lies in how they handle records that don't have a match in the other table.

1.  **`INNER JOIN`:**
    *   **Result:** It returns only the rows where the join condition is met in **both** tables. If a row in the left table does not have a matching row in the right table (or vice-versa), it is excluded from the result set.
    *   **Use Case:** Use it when you only want to see data that has a complete relationship. For our assignment, using an `INNER JOIN` between `Bookings` and `Users` will only show bookings that are linked to an existing user.

2.  **`LEFT JOIN` (or LEFT OUTER JOIN):**
    *   **Result:** It returns **all** rows from the **left** table, regardless of whether there is a match in the right table. If a match is found in the right table, the corresponding data is included. If no match is found, the columns from the right table will contain `NULL` values for that row.
    *   **Use Case:** Use it when you want to see all records from one table and see any associated data from another. For example, if you wanted to list all users and, if they have them, their booking dates, you would use a `LEFT JOIN` from `Users` to `Bookings`. Users without any bookings would still appear in the list, but with `NULL` for the booking information.