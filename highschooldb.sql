-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 27 Kwi 2023, 18:45
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
(1, 'Day of Sport', 'Sport day is an event that is eagerly awaited by students in high schools around the world. It is an annual event that allows students to showcase their athletic abilities and team spirit. The sport day is a day full of excitement, fun, and healthy competition that brings the entire school community together.\n\nDuring sport day, students participate in various athletic events such as running, jumping, and throwing. The events are organized in such a way that students can compete based on their age and ability level. The winners of each event receive medals, certificates, and sometimes trophies.\n\nSport day is not just about winning, but also about teamwork, sportsmanship, and building a sense of community. Students are encouraged to cheer for their classmates, regardless of whether they win or lose. This spirit of camaraderie is what makes sport day so special.\n\nSport day also helps to promote physical fitness and healthy living among students. It encourages them to engage in regular physical activity and adopt healthy habits that they can carry with them throughout their lives.\n\nIn addition, sport day provides an opportunity for students to take a break from their academic studies and have some fun. It is a day when they can let loose and enjoy themselves, while still learning valuable life skills such as perseverance, determination, and resilience.\n\nOverall, sport day is an important event in high schools as it helps to promote physical fitness, teamwork, and healthy competition. It is a day that students look forward to every year and is a highlight of the school calendar.', '2023-04-27 17:45:35.843741', 1),
(2, 'Achievements of our students', 'High school students can achieve great things during their academic years. These achievements are not only significant for their personal growth and development but also for their future careers and opportunities. There are many types of achievements that high school students can accomplish, including academic, athletic, artistic, and leadership accomplishments.\n\nAcademic achievements are one of the most important types of accomplishments for high school students. These can include earning high grades, getting into a top university or college, winning academic competitions, or receiving scholarships or awards. These achievements demonstrate a student\'s dedication to learning, critical thinking skills, and ability to succeed academically.\n\nAthletic achievements are another important type of accomplishment for high school students. These can include winning championships, setting records, or earning recognition for sportsmanship. Athletic accomplishments demonstrate a student\'s physical ability, perseverance, and commitment to teamwork.\n\nArtistic achievements are also noteworthy accomplishments for high school students. These can include winning awards or recognition for music, theater, or visual arts. Artistic accomplishments demonstrate a student\'s creativity, artistic skill, and dedication to their craft.\n\nLeadership achievements are also important for high school students. These can include holding leadership positions in school clubs or organizations, starting a community service project, or organizing a fundraising event. Leadership accomplishments demonstrate a student\'s ability to inspire and motivate others, take initiative, and make a positive impact in their community.\n\nOverall, high school students can achieve a variety of accomplishments that showcase their talents, abilities, and commitment to personal growth and development. These achievements can provide a strong foundation for future success and opportunities.', '2023-04-27 18:04:29.919750', 1),
(3, 'Contest in our school', 'Contests in high school are an important part of the academic experience. These contests are designed to challenge students and encourage them to explore their interests and talents. There are many different types of contests in high school, including academic, artistic, athletic, and leadership competitions.\n\nAcademic contests are among the most popular and prestigious contests in high school. These can include science fairs, math competitions, debate tournaments, and spelling bees. Academic contests allow students to showcase their knowledge, critical thinking skills, and ability to work under pressure.\n\nArtistic contests are another important type of contest in high school. These can include music competitions, drama festivals, and art exhibitions. Artistic contests allow students to showcase their creativity, artistic skill, and ability to express themselves.\n\nAthletic contests are also popular in high school. These can include team sports such as football, basketball, and soccer, as well as individual sports such as track and field, cross country, and swimming. Athletic contests allow students to showcase their physical abilities, teamwork, and sportsmanship.\n\nLeadership contests are another important type of contest in high school. These can include student council elections, speech contests, and community service projects. Leadership contests allow students to showcase their leadership skills, initiative, and ability to make a positive impact in their community.\n\nOverall, contests in high school provide students with opportunities to challenge themselves, explore their interests and talents, and develop important skills such as critical thinking, creativity, leadership, and teamwork. These contests also provide a sense of community and school spirit, as students come together to support and cheer on their classmates.', '2023-04-27 18:07:36.793592', 1),
(4, 'Volleyball competition', 'Volleyball competitions are a popular and exciting event in schools around the world. These competitions bring together students from different grades to showcase their athletic abilities and team spirit. Volleyball competitions in schools provide an opportunity for students to have fun and enjoy the benefits of physical activity.\n\nDuring volleyball competitions in schools, students participate in various matches and games, playing against teams from their own school as well as those from other schools. The competitions are organized in such a way that students can compete based on their age and ability level, allowing for fair and healthy competition.\n\nVolleyball competitions in schools promote physical fitness and healthy living among students. Playing volleyball helps to improve cardiovascular health, endurance, and strength. It also helps to improve hand-eye coordination and overall agility, making it an excellent form of exercise for students.\n\nIn addition to physical benefits, volleyball competitions in schools also promote teamwork and sportsmanship. Volleyball is a team sport, and students must work together to achieve success. Playing volleyball teaches students to communicate effectively, collaborate, and trust each other.\n\nVolleyball competitions in schools also help to build a sense of community and school spirit. These events bring together students, teachers, and parents, creating an atmosphere of excitement and enthusiasm. Students are encouraged to cheer for their classmates, regardless of whether they win or lose. This spirit of camaraderie is what makes volleyball competitions in schools so special.\n\nOverall, volleyball competitions in schools provide students with an opportunity to participate in healthy physical activity, learn important life skills, and develop a sense of community and school spirit. These events are a highlight of the school year and are eagerly anticipated by students and teachers alike.', '2023-04-27 18:23:02.342079', 1);

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

--
-- Zrzut danych tabeli `applications`
--

INSERT INTO `applications` (`Id`, `FirstName`, `LastName`, `Age`, `DateOfBirth`, `Email`) VALUES
(1, 'Piotrek', 'Tyszko', 18, '2003-03-03', 'piotrek@gmail.com'),
(2, 'Jakubek', 'Wojtytna', 20, '2003-02-18', 'jakub@gmail.com'),
(3, 'Czarnuszek', 'Mateusz', 20, '2003-03-02', 'czarnuszek@gmail.com');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `comments`
--

CREATE TABLE `comments` (
  `Id` int(11) NOT NULL,
  `Name` longtext NOT NULL,
  `Content` longtext NOT NULL,
  `CreationDate` datetime(6) NOT NULL,
  `CreatedBy` int(11) NOT NULL,
  `AnnouncementId` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Zrzut danych tabeli `comments`
--

INSERT INTO `comments` (`Id`, `Name`, `Content`, `CreationDate`, `CreatedBy`, `AnnouncementId`) VALUES
(1, 'Jakub Wojtyna', 'Im very proud of our students!', '2023-04-27 18:04:54.339784', 1, 2),
(2, 'Piotrek Tyszko', 'I have watched all matches and they were so excitable', '2023-04-27 18:43:29.910547', 2, 4),
(3, 'Piotrek Tyszko', 'Yo! It s me on the thumbnail (guy on a front with black jacket)', '2023-04-27 18:44:15.574225', 2, 3),
(4, 'Mateusz Czarnojan', 'I\'ve played basketball in it was a cool experience', '2023-04-27 18:45:36.157931', 4, 1);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `contacts`
--

CREATE TABLE `contacts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
(1, 'https://lfjhgwpnexjkwmpxtwau.supabase.co/storage/v1/object/public/images/zdj3.jpg', 1, 'zdj3.jpg'),
(2, 'https://lfjhgwpnexjkwmpxtwau.supabase.co/storage/v1/object/public/images/zdj4.jpg', 1, 'zdj4.jpg'),
(3, 'https://lfjhgwpnexjkwmpxtwau.supabase.co/storage/v1/object/public/images/zdj1.jpg', 1, 'zdj1.jpg'),
(4, 'https://lfjhgwpnexjkwmpxtwau.supabase.co/storage/v1/object/public/images/zdj6.jpg', 2, 'zdj6.jpg'),
(5, 'https://lfjhgwpnexjkwmpxtwau.supabase.co/storage/v1/object/public/images/zdj5.jpg', 2, 'zdj5.jpg'),
(6, 'https://lfjhgwpnexjkwmpxtwau.supabase.co/storage/v1/object/public/images/zdj7.jpg', 2, 'zdj7.jpg'),
(7, 'https://lfjhgwpnexjkwmpxtwau.supabase.co/storage/v1/object/public/images/zdj10.jpg', 3, 'zdj10.jpg'),
(8, 'https://lfjhgwpnexjkwmpxtwau.supabase.co/storage/v1/object/public/images/zdj11.jpg', 3, 'zdj11.jpg'),
(9, 'https://lfjhgwpnexjkwmpxtwau.supabase.co/storage/v1/object/public/images/zdj11.jpg', 3, 'zdj11.jpg'),
(10, 'https://lfjhgwpnexjkwmpxtwau.supabase.co/storage/v1/object/public/images/zdj9.jpg', 3, 'zdj9.jpg'),
(11, 'https://lfjhgwpnexjkwmpxtwau.supabase.co/storage/v1/object/public/images/zdj13.jpg', 4, 'zdj13.jpg'),
(12, 'https://lfjhgwpnexjkwmpxtwau.supabase.co/storage/v1/object/public/images/zdj14.jpg', 4, 'zdj14.jpg'),
(13, 'https://lfjhgwpnexjkwmpxtwau.supabase.co/storage/v1/object/public/images/zdj16.jpg', 4, 'zdj16.jpg');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Zrzut danych tabeli `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(2, '2019_08_19_000000_create_failed_jobs_table', 1),
(3, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(4, '2023_04_24_163331_create_contacts_table', 1);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
(1, 'https://lfjhgwpnexjkwmpxtwau.supabase.co/storage/v1/object/public/thumbnails/zdj2.jpg', 1, 'zdj2.jpg'),
(2, 'https://lfjhgwpnexjkwmpxtwau.supabase.co/storage/v1/object/public/thumbnails/zdj8.jpg', 2, 'zdj8.jpg'),
(3, 'https://lfjhgwpnexjkwmpxtwau.supabase.co/storage/v1/object/public/thumbnails/zdj12.jpg', 3, 'zdj12.jpg'),
(4, 'https://lfjhgwpnexjkwmpxtwau.supabase.co/storage/v1/object/public/thumbnails/zdj15.jpg', 4, 'zdj15.jpg');

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
(1, 'Jakub', 'Wojtyna', '2kubaa1@gmail.com', '$2a$11$ngoXfGp/5a1v/feHhATCPuMTGvHyz9j/AmgudBSLo8VM8FOuhU/cC', 'Unknown', NULL, 2),
(2, 'Piotrek', 'Tyszko', 'piotrek@gmail.com', '$2a$11$k6MJRsEufx2fe99HTSg1QuNHBwjffGgwXLMduicuH2c/yEUwXGZH6', 'Unknown', 1, 1),
(3, 'Jakubek', 'Wojtyna', 'jakub@gmail.com', '$2a$11$Wu1xQDUlwIJ5hDcv.zf76..cHIfhGgyf643llWGsdVYS/M5V5R3nC', 'Unknown', 2, 1),
(4, 'Mateusz', 'Czarnojan', 'czarnuszek@gmail.com', '$2a$11$B3if2XBTSB2qDpaM314DC.hHNzydVRBVBNGwEMiFfadKhRy61KrW6', 'Unknown', 3, 1);

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
('20230322215640_AddCommentsTable', '7.0.3'),
('20230329151603_AddRelationBetweenCommentAndAnnouncement', '7.0.3');

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
  ADD PRIMARY KEY (`Id`),
  ADD KEY `IX_Comments_AnnouncementId` (`AnnouncementId`);

--
-- Indeksy dla tabeli `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indeksy dla tabeli `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `IX_Images_AnnouncementId` (`AnnouncementId`);

--
-- Indeksy dla tabeli `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indeksy dla tabeli `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

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
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT dla tabeli `applications`
--
ALTER TABLE `applications`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT dla tabeli `comments`
--
ALTER TABLE `comments`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT dla tabeli `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `images`
--
ALTER TABLE `images`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT dla tabeli `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT dla tabeli `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `roles`
--
ALTER TABLE `roles`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT dla tabeli `thumbnails`
--
ALTER TABLE `thumbnails`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT dla tabeli `users`
--
ALTER TABLE `users`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `FK_Comments_Announcements_AnnouncementId` FOREIGN KEY (`AnnouncementId`) REFERENCES `announcements` (`Id`) ON DELETE CASCADE;

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
