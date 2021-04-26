CREATE TABLE ADMIN_DETAILS(
	ID VARCHAR(10) PRIMARY KEY,
	FNAME VARCHAR(25) NOT NULL,
	LNAME VARCHAR(25) NOT NULL,
	IMAGE_TYPE VARCHAR(25) NOT NULL,
	IMAGE_DATA MEDIUMBLOB NOT NULL,
	EMAIL VARCHAR(320) NOT NULL UNIQUE,
	PHONE VARCHAR(15) NOT NULL UNIQUE,
	PASSWORD VARBINARY(255) NOT NULL,
	DOB DATE NOT NULL,
	HOUSE VARCHAR(25) NOT NULL,
	STREET VARCHAR(25) NOT NULL,
	CITY VARCHAR(30) NOT NULL,
	STATE VARCHAR(30) NOT NULL,
	COUNTRY VARCHAR(30) NOT NULL,
	PIN INT NOT NULL
);

CREATE TABLE USER_DETAILS(
	ID VARCHAR(10) PRIMARY KEY,
	FNAME VARCHAR(25) NOT NULL,
	LNAME VARCHAR(25) NOT NULL,
	IMAGE_TYPE VARCHAR(25) NOT NULL,
	IMAGE_DATA MEDIUMBLOB NOT NULL,
	EMAIL VARCHAR(320) NOT NULL UNIQUE,
	PHONE VARCHAR(15) NOT NULL UNIQUE,
	PASSWORD VARBINARY(255) NOT NULL,
	DOB DATE NOT NULL,
	HOUSE VARCHAR(25) NOT NULL,
	STREET VARCHAR(25) NOT NULL,
	CITY VARCHAR(30) NOT NULL,
	STATE VARCHAR(30) NOT NULL,
	COUNTRY VARCHAR(30) NOT NULL,
	PIN INT NOT NULL,
	VERFICATION_IMAGE_TYPE VARCHAR(25) NOT NULL, 
	VERFICATION_IMAGE_DATA MEDIUMBLOB NOT NULL
);

CREATE TABLE BOOK_DETAILS(
	ID VARCHAR(10) PRIMARY KEY,
	NAME VARCHAR(50) NOT NULL UNIQUE,
	AUTHOR VARCHAR(50) NOT NULL,
	PUBLISHER VARCHAR(50) NOT NULL,
	COVER_IMAGE_TYPE VARCHAR(25) NOT NULL,
	COVER_IMAGE_DATA MEDIUMBLOB NOT NULL,
	PRICE DECIMAL(7,2),
	CATEGORY VARCHAR(30),
	DESCRIPTION TEXT NOT NULL,
	STOCK INT NOT NULL
);

CREATE TABLE ISSUE_DETAILS(
	ID VARCHAR(10) PRIMARY KEY,
	BOOK_ID VARCHAR(10) NOT NULL,
	USER_ID VARCHAR(10) NOT NULL,
	ADMIN_ID VARCHAR(10) NOT NULL,
	DATE_OF_ISSUE DATE NOT NULL,
	DATE_OF_SUBMISSION DATE NOT NULL,
	DATE_OF_RETURN DATE ,
	STATUS CHAR(8),
	FOREIGN KEY(BOOK_ID) REFERENCES BOOK_DETAILS(ID),
	FOREIGN KEY(USER_ID) REFERENCES USER_DETAILS(ID),
	FOREIGN KEY(ADMIN_ID) REFERENCES ADMIN_DETAILS(ID)
);

CREATE TABLE WAITING_LIST(
	ID VARCHAR(10) PRIMARY KEY,
	BOOK_ID VARCHAR(10) NOT NULL,
	USER_ID VARCHAR(10) NOT NULL,
	DATE_OF_BOOKING DATE NOT NULL,
	FOREIGN KEY(BOOK_ID) REFERENCES BOOK_DETAILS(ID),
	FOREIGN KEY(USER_ID) REFERENCES USER_DETAILS(ID)
);
CREATE TABLE MEMBERSHIP_REQUESTS(
	ID VARCHAR(10) PRIMARY KEY,
	FNAME VARCHAR(25) NOT NULL,
	LNAME VARCHAR(25) NOT NULL,
	IMAGE_TYPE VARCHAR(25) NOT NULL,
	IMAGE_DATA MEDIUMBLOB NOT NULL,
	EMAIL VARCHAR(320) NOT NULL UNIQUE,
	PHONE VARCHAR(15) NOT NULL UNIQUE,
	DOB DATE NOT NULL,
	HOUSE VARCHAR(25) NOT NULL,
	STREET VARCHAR(25) NOT NULL,
	CITY VARCHAR(30) NOT NULL,
	STATE VARCHAR(30) NOT NULL,
	COUNTRY VARCHAR(30) NOT NULL,
	PIN INT NOT NULL,
	VERFICATION_IMAGE_TYPE VARCHAR(25) NOT NULL, 
	VERFICATION_IMAGE_DATA MEDIUMBLOB NOT NULL
);