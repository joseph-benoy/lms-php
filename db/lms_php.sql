-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 26, 2021 at 05:00 PM
-- Server version: 8.0.23-0ubuntu0.20.04.1
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lms_php`
--

-- --------------------------------------------------------

--
-- Table structure for table `ADMIN_DETAILS`
--

CREATE TABLE `ADMIN_DETAILS` (
  `ID` varchar(10) NOT NULL,
  `FNAME` varchar(25) NOT NULL,
  `LNAME` varchar(25) NOT NULL,
  `IMAGE_TYPE` varchar(25) NOT NULL,
  `IMAGE_DATA` mediumblob NOT NULL,
  `EMAIL` varchar(320) NOT NULL,
  `PHONE` varchar(15) NOT NULL,
  `PASSWORD` varbinary(255) NOT NULL,
  `DOB` date NOT NULL,
  `HOUSE` varchar(25) NOT NULL,
  `STREET` varchar(25) NOT NULL,
  `CITY` varchar(30) NOT NULL,
  `STATE` varchar(30) NOT NULL,
  `COUNTRY` varchar(30) NOT NULL,
  `PIN` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `BOOK_DETAILS`
--

CREATE TABLE `BOOK_DETAILS` (
  `ID` varchar(10) NOT NULL,
  `NAME` varchar(50) NOT NULL,
  `AUTHOR` varchar(50) NOT NULL,
  `PUBLISHER` varchar(50) NOT NULL,
  `COVER_IMAGE_TYPE` varchar(25) NOT NULL,
  `COVER_IMAGE_DATA` mediumblob NOT NULL,
  `PRICE` decimal(7,2) DEFAULT NULL,
  `CATEGORY` varchar(30) DEFAULT NULL,
  `DESCRIPTION` text NOT NULL,
  `STOCK` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ISSUE_DETAILS`
--

CREATE TABLE `ISSUE_DETAILS` (
  `ID` varchar(10) NOT NULL,
  `BOOK_ID` varchar(10) NOT NULL,
  `USER_ID` varchar(10) NOT NULL,
  `ADMIN_ID` varchar(10) NOT NULL,
  `DATE_OF_ISSUE` date NOT NULL,
  `DATE_OF_SUBMISSION` date NOT NULL,
  `DATE_OF_RETURN` date DEFAULT NULL,
  `STATUS` char(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `USER_DETAILS`
--

CREATE TABLE `USER_DETAILS` (
  `ID` varchar(10) NOT NULL,
  `FNAME` varchar(25) NOT NULL,
  `LNAME` varchar(25) NOT NULL,
  `IMAGE_TYPE` varchar(25) NOT NULL,
  `IMAGE_DATA` mediumblob NOT NULL,
  `EMAIL` varchar(320) NOT NULL,
  `PHONE` varchar(15) NOT NULL,
  `PASSWORD` varbinary(255) NOT NULL,
  `DOB` date NOT NULL,
  `HOUSE` varchar(25) NOT NULL,
  `STREET` varchar(25) NOT NULL,
  `CITY` varchar(30) NOT NULL,
  `STATE` varchar(30) NOT NULL,
  `COUNTRY` varchar(30) NOT NULL,
  `PIN` int NOT NULL,
  `VERFICATION_IMAGE_TYPE` varchar(25) NOT NULL,
  `VERFICATION_IMAGE_DATA` mediumblob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `WAITING_LIST`
--

CREATE TABLE `WAITING_LIST` (
  `ID` varchar(10) NOT NULL,
  `BOOK_ID` varchar(10) NOT NULL,
  `USER_ID` varchar(10) NOT NULL,
  `DATE_OF_BOOKING` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ADMIN_DETAILS`
--
ALTER TABLE `ADMIN_DETAILS`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `EMAIL` (`EMAIL`),
  ADD UNIQUE KEY `PHONE` (`PHONE`);

--
-- Indexes for table `BOOK_DETAILS`
--
ALTER TABLE `BOOK_DETAILS`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `NAME` (`NAME`);

--
-- Indexes for table `ISSUE_DETAILS`
--
ALTER TABLE `ISSUE_DETAILS`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `BOOK_ID` (`BOOK_ID`),
  ADD KEY `USER_ID` (`USER_ID`),
  ADD KEY `ADMIN_ID` (`ADMIN_ID`);

--
-- Indexes for table `USER_DETAILS`
--
ALTER TABLE `USER_DETAILS`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `EMAIL` (`EMAIL`),
  ADD UNIQUE KEY `PHONE` (`PHONE`);

--
-- Indexes for table `WAITING_LIST`
--
ALTER TABLE `WAITING_LIST`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `BOOK_ID` (`BOOK_ID`),
  ADD KEY `USER_ID` (`USER_ID`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `ISSUE_DETAILS`
--
ALTER TABLE `ISSUE_DETAILS`
  ADD CONSTRAINT `ISSUE_DETAILS_ibfk_1` FOREIGN KEY (`BOOK_ID`) REFERENCES `BOOK_DETAILS` (`ID`),
  ADD CONSTRAINT `ISSUE_DETAILS_ibfk_2` FOREIGN KEY (`USER_ID`) REFERENCES `USER_DETAILS` (`ID`),
  ADD CONSTRAINT `ISSUE_DETAILS_ibfk_3` FOREIGN KEY (`ADMIN_ID`) REFERENCES `ADMIN_DETAILS` (`ID`);

--
-- Constraints for table `WAITING_LIST`
--
ALTER TABLE `WAITING_LIST`
  ADD CONSTRAINT `WAITING_LIST_ibfk_1` FOREIGN KEY (`BOOK_ID`) REFERENCES `BOOK_DETAILS` (`ID`),
  ADD CONSTRAINT `WAITING_LIST_ibfk_2` FOREIGN KEY (`USER_ID`) REFERENCES `USER_DETAILS` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
