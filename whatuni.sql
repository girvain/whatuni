-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 21, 2018 at 01:08 PM
-- Server version: 5.7.21
-- PHP Version: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `whatuni`
--

-- --------------------------------------------------------

--
-- Table structure for table `search_log`
--

CREATE TABLE `search_log` (
  `search_text` varchar(255) NOT NULL,
  `total` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `search_log`
--

INSERT INTO `search_log` (`search_text`, `total`) VALUES
('526251', 1),
('a', 1),
('bowling', 2),
('builder', 8),
('business', 37),
('climber', 1),
('council', 2),
('developer', 1),
('engineering', 3),
('fasion', 2),
('fishing', 3),
('fs', 1),
('german', 6),
('grapher', 1),
('greek', 4),
('job', 2),
('john smith', 3),
('magic', 2),
('medical', 17),
('medical science', 1),
('nursing', 1),
('physical', 8),
('programer', 2),
('s', 1),
('science', 53),
('services', 1),
('sport', 1),
('ssdfsd', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `search_log`
--
ALTER TABLE `search_log`
  ADD UNIQUE KEY `search_text` (`search_text`);
