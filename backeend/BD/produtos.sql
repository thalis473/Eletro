-- MariaDB dump 10.17  Distrib 10.4.14-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: eletrorecode
-- ------------------------------------------------------
-- Server version	10.4.14-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `produtos`
--

DROP TABLE IF EXISTS `produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `produtos` (
  `id_produtos` int(11) NOT NULL AUTO_INCREMENT,
  `categoria` varchar(45) COLLATE utf8_bin NOT NULL,
  `img` varchar(100) COLLATE utf8_bin NOT NULL,
  `descricao` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id_produtos`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
INSERT INTO `produtos` VALUES (1,'fogao','/produtos_img/fogao.jpg','Fogão 5 Bocas Mueller Decorato Acendimento'),(2,'geladeira','/produtos_img/geladeira.jpg','Geladeira/Refrigerador Brastemp Frost Free Du'),(3,'liquidificador','/produtos_img/liquidificador.jpg','Liquidificador Philco PH900 2L Preto com Filt'),(4,'maquina de lavar','/produtos_img/maquina_de_lavar.jpg','Lavadora de Roupas Electrolux 8.5KG'),(5,'cafeteira','/produtos_img/cafeteira.jpg','Cafeteira Elétrica Britânia CP15 Xícaras'),(6,'ventilador','/produtos_img/ventilador.jpg','Ventilador de Mesa Arno Silence Repelente Líq'),(7,'torradeira','/produtos_img/torradeira.jpg','Torradeira Lenoxx PTR 203 2 Fatias'),(8,'tv','/produtos_img/televisao.jpg','Smart TV LED PRO 43\'\'Full HD LG 43LM 631 3'),(9,'microondas','/produtos_img/microondas.webp','Electrolux MT30S 20'),(10,'impressora','/produtos_img/impressora.webp','Impressora Tanque de Tinta Epson'),(11,'radio','/produtos_img/radio.webp','Radio Britania'),(12,'arcondicionado','/produtos_img/microondas.webp','Ar-Condicionado Split Samsung Digital');
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-03 12:33:31
