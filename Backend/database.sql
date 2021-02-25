CREATE DATABASE data_base;
CREATE TABLE events_db(
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
CREATE TABLE event_attendee_DB(
    attendee_id integer(0,5) REFERENCES attendee_DB(attendee_id),
    events_id integer(0,5) REFERENCES events_db(events_id),
    PRIMARY KEY(attendee_id,events_id)
);