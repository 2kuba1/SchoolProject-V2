-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 27 Mar 2023, 22:07
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
(1, 'Jeste admine', 'Jeste zajebiste admine na wlasnej stronie ouou je i je piotrek jest pieskiem bo mi ukradl pasy do supabase i juz mu nie ufam ouou je i je ', '2023-03-20 21:21:20.819247', 1);

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
-- Struktura tabeli dla tabeli `comments`
--

CREATE TABLE `comments` (
  `Id` int(11) NOT NULL,
  `Name` longtext NOT NULL,
  `Content` longtext NOT NULL,
  `CreationDate` datetime(6) NOT NULL,
  `CreatedBy` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Zrzut danych tabeli `comments`
--

INSERT INTO `comments` (`Id`, `Name`, `Content`, `CreationDate`, `CreatedBy`) VALUES
(2, 'string', 'Jebac disa kruwa', '2023-03-22 21:59:09.166000', 0);

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
(1, 'https://lfjhgwpnexjkwmpxtwau.supabase.co/storage/v1/object/public/images/333873470_739057554528072_4346759767898271164_n.jpg', 1, '333873470_739057554528072_4346759767898271164_n.jpg'),
(2, 'https://lfjhgwpnexjkwmpxtwau.supabase.co/storage/v1/object/public/images/332359434_526191219433659_7068389750592544825_n.png', 1, '332359434_526191219433659_7068389750592544825_n.png');

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
(1, 'https://lfjhgwpnexjkwmpxtwau.supabase.co/storage/v1/object/public/thumbnails/332031701_157338447119192_8718644420365053884_n.jpg', 1, '332031701_157338447119192_8718644420365053884_n.jpg');

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
(1, 'Jakub', 'Admin', 'admin@admin.com', '$2a$11$uyTeNxtsa3rkkIPo3t4h3OF8XlKWv0NrpwY34LvBZPgklRGZ.2yDa', 'Unknown', NULL, 2);

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
('20230222213141_ModifyTypeOfDateOfBirth', '7.0.3'),
('20230322215640_AddCommentsTable', '7.0.3');

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
-- Indeksy dla tabeli `comments`
--
ALTER TABLE `comments`
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
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT dla tabeli `applications`
--
ALTER TABLE `applications`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `comments`
--
ALTER TABLE `comments`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT dla tabeli `images`
--
ALTER TABLE `images`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT dla tabeli `roles`
--
ALTER TABLE `roles`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT dla tabeli `thumbnails`
--
ALTER TABLE `thumbnails`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT dla tabeli `users`
--
ALTER TABLE `users`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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
