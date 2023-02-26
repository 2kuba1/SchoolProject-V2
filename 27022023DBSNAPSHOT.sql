-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 27 Lut 2023, 00:16
-- Wersja serwera: 10.4.27-MariaDB
-- Wersja PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `highschooldb`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `announcements`
--

CREATE TABLE `announcements` (
  `Id` int(11) NOT NULL,
  `Title` longtext NOT NULL,
  `Description` longtext NOT NULL,
  `CreationDate` datetime(6) NOT NULL,
  `CreatedBy` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Zrzut danych tabeli `announcements`
--

INSERT INTO `announcements` (`Id`, `Title`, `Description`, `CreationDate`, `CreatedBy`) VALUES
(18, 'Our School', 'Our school is nice', '2023-02-25 22:33:21.299155', 2),
(19, 'Our Students', 'We have cool students', '2023-02-25 22:34:01.059215', 2),
(20, 'Our Teachers', 'We have cool Teachers', '2023-02-25 22:34:27.879919', 2),
(21, 'JOl jol jol', 'hejka jestem marek', '2023-02-26 00:22:43.952159', 2),
(22, 'string', 'string', '2023-02-26 18:38:41.321184', 2),
(23, 'string', 'string', '2023-02-26 18:38:42.742768', 2),
(24, 'string', 'string', '2023-02-26 18:38:43.534454', 2),
(25, 'asdasdasdasdasdasdasdsdfasdfjhasdfjhasgdjfhkgasdjhfgsajekhgrfjkhaesgffcfewfqwefew', 'string', '2023-02-26 18:54:35.459238', 2),
(26, 'Our school is very nice and cool I love our teachers and my life changed so mutch when I joined this school', 'string', '2023-02-26 18:58:58.868785', 2),
(27, 'string', 'string', '2023-02-27 00:05:16.336314', 2),
(28, 'string', 'string', '2023-02-27 00:05:16.996769', 2),
(29, 'string', 'string', '2023-02-27 00:05:17.951827', 2);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `applications`
--

CREATE TABLE `applications` (
  `Id` int(11) NOT NULL,
  `FirstName` longtext NOT NULL,
  `LastName` longtext NOT NULL,
  `Age` int(11) NOT NULL,
  `DateOfBirth` longtext NOT NULL,
  `Email` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `images`
--

CREATE TABLE `images` (
  `Id` int(11) NOT NULL,
  `ImageUrl` longtext NOT NULL,
  `AnnouncementId` int(11) NOT NULL,
  `FileName` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Zrzut danych tabeli `images`
--

INSERT INTO `images` (`Id`, `ImageUrl`, `AnnouncementId`, `FileName`) VALUES
(11, 'https://yjvgyugzpihjaeyadykg.supabase.co/storage/v1/object/public/images/strona.png', 18, 'strona.png'),
(12, 'https://yjvgyugzpihjaeyadykg.supabase.co/storage/v1/object/public/images/czarneusz.jpg', 18, 'czarneusz.jpg'),
(13, 'https://yjvgyugzpihjaeyadykg.supabase.co/storage/v1/object/public/images/ss1.png', 18, 'ss1.png'),
(14, 'https://yjvgyugzpihjaeyadykg.supabase.co/storage/v1/object/public/images/ss2.png', 18, 'ss2.png'),
(15, 'https://yjvgyugzpihjaeyadykg.supabase.co/storage/v1/object/public/images/image.png', 18, 'image.png');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `roles`
--

CREATE TABLE `roles` (
  `Id` int(11) NOT NULL,
  `Name` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Zrzut danych tabeli `roles`
--

INSERT INTO `roles` (`Id`, `Name`) VALUES
(1, 'User'),
(2, 'Admin');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `thumbnails`
--

CREATE TABLE `thumbnails` (
  `Id` int(11) NOT NULL,
  `ThumbnailUrl` longtext NOT NULL,
  `AnnouncementId` int(11) NOT NULL DEFAULT 0,
  `FileName` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Zrzut danych tabeli `thumbnails`
--

INSERT INTO `thumbnails` (`Id`, `ThumbnailUrl`, `AnnouncementId`, `FileName`) VALUES
(20, 'https://yjvgyugzpihjaeyadykg.supabase.co/storage/v1/object/public/thumbnails/jolo.png', 18, 'jolo.png'),
(21, 'https://yjvgyugzpihjaeyadykg.supabase.co/storage/v1/object/public/thumbnails/czarneusz.jpg', 19, 'czarneusz.jpg'),
(22, 'https://yjvgyugzpihjaeyadykg.supabase.co/storage/v1/object/public/thumbnails/image.png', 20, 'image.png'),
(23, 'https://yjvgyugzpihjaeyadykg.supabase.co/storage/v1/object/public/thumbnails/strona.png', 21, 'strona.png');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `Id` int(11) NOT NULL,
  `FirstName` longtext NOT NULL,
  `LastName` longtext NOT NULL,
  `Email` longtext NOT NULL,
  `PasswordHash` longtext NOT NULL,
  `ApplicationStatus` longtext NOT NULL,
  `ApplicationId` int(11) DEFAULT NULL,
  `RoleId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Zrzut danych tabeli `users`
--

INSERT INTO `users` (`Id`, `FirstName`, `LastName`, `Email`, `PasswordHash`, `ApplicationStatus`, `ApplicationId`, `RoleId`) VALUES
(1, 'Jakub', 'Wojtyna', '2kubaa1@gmail.com', '$2a$11$OeE5bi/VhPGA5Gm5mvGJy.hSMjzCjx8y9Syugurv0O.MxEHad/tB6', 'Approved', NULL, 1),
(2, 'Dejvid', 'Bi', 'dejvid.bi@gmail.com', '$2a$11$zIwbSHUch7MU1q1d7ksHhuT44G8xWoeWCVmz33swFoc.4CksUDjb2', 'Unknown', NULL, 2),
(3, 'xdd', 'xdd', 'xdd@gmail.com', '$2a$11$/ncbRgl.NJw0quRA99x11OcQ1tXS0gXVcRPGKJEHOCU/Mr4Q2VOQa', 'Unknown', NULL, 2),
(4, 'xdd', 'xdd', 'xddd@gmail.com', '$2a$11$ctmZkKj93wPXJPotSWM9VOFv/VUdMmeI0aWMbdVfqO3TSrfTmcqRO', 'Rejected', NULL, 1),
(5, 'string', 'string', 'string', '$2a$11$ElOcE4I5tDS3MqwkEKrjhufzgkir2vzMxmbTSqxvRToPPGhI.dyue', 'Unknown', NULL, 1);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `__efmigrationshistory`
--

CREATE TABLE `__efmigrationshistory` (
  `MigrationId` varchar(150) NOT NULL,
  `ProductVersion` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Zrzut danych tabeli `__efmigrationshistory`
--

INSERT INTO `__efmigrationshistory` (`MigrationId`, `ProductVersion`) VALUES
('20230221101137_Init', '7.0.3'),
('20230221102831_ApplicationRecordsInUsersAreNowNullable', '7.0.3'),
('20230221160506_ForignKeyToImages', '7.0.3'),
('20230222121253_ModifyAnnouncementEntity', '7.0.3'),
('20230222123040_ModifyImageEntity', '7.0.3'),
('20230222213141_ModifyTypeOfDateOfBirth', '7.0.3');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `announcements`
--
ALTER TABLE `announcements`
  ADD PRIMARY KEY (`Id`);

--
-- Indeksy dla tabeli `applications`
--
ALTER TABLE `applications`
  ADD PRIMARY KEY (`Id`);

--
-- Indeksy dla tabeli `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `IX_Images_AnnouncementId` (`AnnouncementId`);

--
-- Indeksy dla tabeli `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`Id`);

--
-- Indeksy dla tabeli `thumbnails`
--
ALTER TABLE `thumbnails`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `IX_Thumbnails_AnnouncementId` (`AnnouncementId`);

--
-- Indeksy dla tabeli `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `IX_Users_ApplicationId` (`ApplicationId`),
  ADD KEY `IX_Users_RoleId` (`RoleId`);

--
-- Indeksy dla tabeli `__efmigrationshistory`
--
ALTER TABLE `__efmigrationshistory`
  ADD PRIMARY KEY (`MigrationId`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `announcements`
--
ALTER TABLE `announcements`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT dla tabeli `applications`
--
ALTER TABLE `applications`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT dla tabeli `images`
--
ALTER TABLE `images`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT dla tabeli `roles`
--
ALTER TABLE `roles`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT dla tabeli `thumbnails`
--
ALTER TABLE `thumbnails`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT dla tabeli `users`
--
ALTER TABLE `users`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `FK_Images_Announcements_AnnouncementId` FOREIGN KEY (`AnnouncementId`) REFERENCES `announcements` (`Id`) ON DELETE CASCADE;

--
-- Ograniczenia dla tabeli `thumbnails`
--
ALTER TABLE `thumbnails`
  ADD CONSTRAINT `FK_Thumbnails_Announcements_AnnouncementId` FOREIGN KEY (`AnnouncementId`) REFERENCES `announcements` (`Id`) ON DELETE CASCADE;

--
-- Ograniczenia dla tabeli `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `FK_Users_Applications_ApplicationId` FOREIGN KEY (`ApplicationId`) REFERENCES `applications` (`Id`),
  ADD CONSTRAINT `FK_Users_Roles_RoleId` FOREIGN KEY (`RoleId`) REFERENCES `roles` (`Id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
