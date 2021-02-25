CREATE DATABASE data_base;
CREATE TABLE eventsdb(
    events_id SERIAL PRIMARY KEY,
    event_name VARCHAR(255),
    event_date DATE
);