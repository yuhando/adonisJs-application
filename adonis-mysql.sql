-- MySQL dump 10.13  Distrib 8.0.20, for macos10.15 (x86_64)
--
-- Host: localhost    Database: adonis-mysql
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `adonis_schema`
--

DROP TABLE IF EXISTS `adonis_schema`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adonis_schema` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `batch` int DEFAULT NULL,
  `migration_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adonis_schema`
--

LOCK TABLES `adonis_schema` WRITE;
/*!40000 ALTER TABLE `adonis_schema` DISABLE KEYS */;
INSERT INTO `adonis_schema` VALUES (4,'1503248427885_user',1,'2021-03-07 11:03:46'),(5,'1503248427886_token',1,'2021-03-07 11:03:46'),(6,'1542316525272_todo_schema',1,'2021-03-07 11:03:46'),(11,'1615029431618_article_schema',2,'2021-03-08 02:57:42'),(12,'1615029610320_meta_article_schema',2,'2021-03-08 02:57:42'),(13,'1615029689405_author_schema',2,'2021-03-08 02:57:42'),(14,'1615029727083_status_schema',2,'2021-03-08 02:57:42');
/*!40000 ALTER TABLE `adonis_schema` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `articles`
--

DROP TABLE IF EXISTS `articles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `articles` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `body` text,
  `date_published` datetime DEFAULT NULL,
  `author_id` int DEFAULT NULL,
  `page_view` int DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles`
--

LOCK TABLES `articles` WRITE;
/*!40000 ALTER TABLE `articles` DISABLE KEYS */;
INSERT INTO `articles` VALUES (1,'Suatu Sore di Pelabuhan Sunda Kelapa','Suatu sore yang terik pada pertengahan Februari 2019, sejumlah remaja naik ke atas kapal layar motor Sinar Keluarga yang bersandar di Pelabuhan Sunda Kelapa, Jakarta Utara. Sesampainya di anjong (segitiga penyeimbang) yang berada di bagian depan kapal, mereka bergantian melompat. Byur, byur, prakk suara tubuh bertemu dengan air laut, susul menyusul. Sementara buruh bongkar muat di sebelahnya terus bekerja, mengangkut muatan, memindahkan barang dari truk ke kapal.','2020-01-02 00:00:00',4,100000,1,'2021-03-09 15:46:42','2021-03-09 15:46:42'),(2,'Gosip Merger Perusahaan Teknologi di Sekitar Kita','Kabar rencana merger antara Gojek dan Grab serta Gojek dan Tokopedia menarik dicermati karena melibatkan dana yang sangat besar dan dapat mengubah dominasi bisnis berbasis daring.','2020-01-01 15:13:14',3,150000,1,'2021-03-09 15:46:42','2021-03-09 15:46:42'),(3,'Universitas Lampung KKN Tatap Muka, 4.300 Mahasiswa Wajib Tes Cepat','Sebanyak 4.300 mahasiswa Universitas Lampung akan mengikuti kegiatan Kuliah Kerja Nyata (KKN) tatap muka mulai 26 Januari 2021. Sebelum diterjunkan ke desa-desa, para mahasiswa itu wajib menjalani tes cepat Covid-19.','2020-01-10 17:18:00',2,300000,0,'2021-03-09 15:46:42','2021-03-09 15:46:42'),(4,'Kisah Berulang Penguasaan Partai di Sumatera Barat','Meski memiliki modal penguasaan hingga dua pertiga wilayah di Sumbar dalam Pemilu 2019, mesin partai dari Gerindra kesulitan untuk mengulang dominasi serupa dalam Pilkada 2020.','2020-09-20 19:00:00',1,400000,1,'2021-03-09 15:46:42','2021-03-09 15:46:42'),(5,'Kapolda Metro Jaya Beri Tugas Penanganan Covid-19 kepada 15 Pejabat Baru','Inspektur Jenderal M Fadil Imran meminta para pejabat baru segera melakukan langkah-langkah taktis yang tidak tanggung-tanggung di lapangan guna turut mengendalikan wabah Covid-19.','2020-12-31 23:59:59',2,600000,1,'2021-03-09 15:46:42','2021-03-09 15:46:42');
/*!40000 ALTER TABLE `articles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `authors`
--

DROP TABLE IF EXISTS `authors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `authors` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authors`
--

LOCK TABLES `authors` WRITE;
/*!40000 ALTER TABLE `authors` DISABLE KEYS */;
INSERT INTO `authors` VALUES (1,'Reporter 1','2021-03-09 15:46:42','2021-03-09 15:46:42'),(2,'Reporter 2','2021-03-09 15:46:42','2021-03-09 15:46:42'),(3,'Reporter 3','2021-03-09 15:46:42','2021-03-09 15:46:42'),(4,'Reporter 4','2021-03-09 15:46:42','2021-03-09 15:46:42'),(5,'Reporter 5','2021-03-09 15:46:42','2021-03-09 15:46:42');
/*!40000 ALTER TABLE `authors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `meta_articles`
--

DROP TABLE IF EXISTS `meta_articles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `meta_articles` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `post_id` int DEFAULT NULL,
  `meta_key` varchar(255) DEFAULT NULL,
  `meta_value` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meta_articles`
--

LOCK TABLES `meta_articles` WRITE;
/*!40000 ALTER TABLE `meta_articles` DISABLE KEYS */;
INSERT INTO `meta_articles` VALUES (1,1,'sponsor','Kompas','2021-03-09 15:46:42','2021-03-09 15:46:42'),(2,1,'sumber','Kompas','2021-03-09 15:46:42','2021-03-09 15:46:42'),(3,2,'sumber','Kontan','2021-03-09 15:46:42','2021-03-09 15:46:42'),(4,2,'sponsor','Kompas','2021-03-09 15:46:42','2021-03-09 15:46:42'),(5,3,'Photographer','Photographer 1','2021-03-09 15:46:42','2021-03-09 15:46:42'),(6,4,'photographer','Photographer 4','2021-03-09 15:46:42','2021-03-09 15:46:42');
/*!40000 ALTER TABLE `meta_articles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `statuses`
--

DROP TABLE IF EXISTS `statuses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `statuses` (
  `id` tinyint(1) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `statuses`
--

LOCK TABLES `statuses` WRITE;
/*!40000 ALTER TABLE `statuses` DISABLE KEYS */;
INSERT INTO `statuses` VALUES (0,'unpublish','2021-03-09 15:46:42','2021-03-09 15:46:42'),(1,'publish','2021-03-09 15:46:42','2021-03-09 15:46:42');
/*!40000 ALTER TABLE `statuses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tokens`
--

DROP TABLE IF EXISTS `tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tokens` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int unsigned DEFAULT NULL,
  `token` varchar(255) NOT NULL,
  `type` varchar(80) NOT NULL,
  `is_revoked` tinyint(1) DEFAULT '0',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tokens_token_unique` (`token`),
  KEY `tokens_user_id_foreign` (`user_id`),
  KEY `tokens_token_index` (`token`),
  CONSTRAINT `tokens_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tokens`
--

LOCK TABLES `tokens` WRITE;
/*!40000 ALTER TABLE `tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(80) NOT NULL,
  `email` varchar(254) NOT NULL,
  `password` varchar(60) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_username_unique` (`username`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','admin@dummy.com','$2a$10$zGjYgIyJQglMW..c7OPfrOECMprnLIukk9N2fwOtKd0yIGdChRCSS','2021-03-09 15:46:42','2021-03-09 15:46:42');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-10  2:29:18
