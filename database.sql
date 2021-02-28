CREATE DATABASE data_base;
CREATE TABLE events_db(
    events_id SERIAL PRIMARY KEY,
    event_name VARCHAR(255) NOT NULL,
    event_date DATE NOT NULL
);
CREATE TABLE attendee_DB(
    attendee_id SERIAL PRIMARY KEY,
    attendee_Name VARCHAR(255) NOT NULL,
    attendee_Age int NOT NULL,
    attendee_Number int UNIQUE NOT NULL,
    attendee_Email  VARCHAR(50) UNIQUE NOT NULL,
    attendee_Address VARCHAR(510) NOT NULL
);
CREATE TABLE event_attendee_DB(
    attendee_id integer REFERENCES attendee_DB(attendee_id),
    events_id integer REFERENCES events_db(events_id) ON DELETE CASCADE
);
CREATE TABLE ADMIN_DB(
    admin_id SERIAL PRIMARY KEY,
    admin_name VARCHAR(255) NOT NULL,
    admin_password  int NOT NULL
);