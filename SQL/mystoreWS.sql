-- phpMyAdmin SQL Dump
-- version 4.6.5.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Creato il: Gen 30, 2017 alle 08:37
-- Versione del server: 10.0.28-MariaDB
-- Versione PHP: 7.0.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mystoreWS`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `Item`
--

CREATE TABLE `Item` (
  `item_id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `quantity` int(11) NOT NULL,
  `height` double NOT NULL,
  `width` double NOT NULL,
  `depth` double NOT NULL,
  `storedBox` int(11) NOT NULL,
  `inUse` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struttura della tabella `StoreBox`
--

CREATE TABLE `StoreBox` (
  `box_id` int(11) NOT NULL,
  `father_id` int(11) DEFAULT NULL COMMENT 'id della scatola padre',
  `name` varchar(64) NOT NULL,
  `location` varchar(64) NOT NULL,
  `weight_status` varchar(64) NOT NULL DEFAULT 'VUOTA',
  `space_status` varchar(64) NOT NULL DEFAULT 'VUOTA',
  `height` double NOT NULL,
  `width` double NOT NULL,
  `depth` double NOT NULL,
  `isFragile` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `Item`
--
ALTER TABLE `Item`
  ADD PRIMARY KEY (`item_id`);

--
-- Indici per le tabelle `StoreBox`
--
ALTER TABLE `StoreBox`
  ADD PRIMARY KEY (`box_id`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `Item`
--
ALTER TABLE `Item`
  MODIFY `item_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT per la tabella `StoreBox`
--
ALTER TABLE `StoreBox`
  MODIFY `box_id` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
