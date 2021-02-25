CREATE DATABASE data_base;
CREATE TABLE eventsdb(
    events_id SERIAL PRIMARY KEY,
    event_name VARCHAR(255),
    event_date DATE
);
CREATE TABLE attendee_DB(
    attendee_id SERIAL PRIMARY KEY,
    attendee_Name VARCHAR(255),
    attendee_Age smallint(0,3),
    attendee_Number smallint(0,10)  UNIQUE,
    attendee_Email  VARCHAR (50) UNIQUE,
    attendee_Address VARCHAR(510)
);