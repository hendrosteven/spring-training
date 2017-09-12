-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.7.9 - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Version:             9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping structure for table dbproduct.tbl_category
CREATE TABLE IF NOT EXISTS `tbl_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Dumping data for table dbproduct.tbl_category: ~3 rows (approximately)
DELETE FROM `tbl_category`;
/*!40000 ALTER TABLE `tbl_category` DISABLE KEYS */;
INSERT INTO `tbl_category` (`id`, `name`, `description`) VALUES
	(1, 'Monitor', '-'),
	(2, 'Printer', '-'),
	(3, 'Laptop', '-');
/*!40000 ALTER TABLE `tbl_category` ENABLE KEYS */;

-- Dumping structure for table dbproduct.tbl_customer
CREATE TABLE IF NOT EXISTS `tbl_customer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Dumping data for table dbproduct.tbl_customer: ~1 rows (approximately)
DELETE FROM `tbl_customer`;
/*!40000 ALTER TABLE `tbl_customer` DISABLE KEYS */;
INSERT INTO `tbl_customer` (`id`, `name`, `email`, `phone`) VALUES
	(1, 'Hendro Steven', 'hendro.steven@gmail.com', '2324243');
/*!40000 ALTER TABLE `tbl_customer` ENABLE KEYS */;

-- Dumping structure for table dbproduct.tbl_order
CREATE TABLE IF NOT EXISTS `tbl_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_id` int(11) DEFAULT NULL,
  `order_date` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_tbl_order_tbl_customer` (`customer_id`),
  CONSTRAINT `FK_tbl_order_tbl_customer` FOREIGN KEY (`customer_id`) REFERENCES `tbl_customer` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Dumping data for table dbproduct.tbl_order: ~1 rows (approximately)
DELETE FROM `tbl_order`;
/*!40000 ALTER TABLE `tbl_order` DISABLE KEYS */;
INSERT INTO `tbl_order` (`id`, `customer_id`, `order_date`) VALUES
	(2, 1, '2017-09-12');
/*!40000 ALTER TABLE `tbl_order` ENABLE KEYS */;

-- Dumping structure for table dbproduct.tbl_order_item
CREATE TABLE IF NOT EXISTS `tbl_order_item` (
  `order_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `price` double DEFAULT NULL,
  KEY `FK_tbl_order_item_tbl_order` (`order_id`),
  KEY `FK_tbl_order_item_tbl_product` (`product_id`),
  CONSTRAINT `FK_tbl_order_item_tbl_order` FOREIGN KEY (`order_id`) REFERENCES `tbl_order` (`id`),
  CONSTRAINT `FK_tbl_order_item_tbl_product` FOREIGN KEY (`product_id`) REFERENCES `tbl_product` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table dbproduct.tbl_order_item: ~2 rows (approximately)
DELETE FROM `tbl_order_item`;
/*!40000 ALTER TABLE `tbl_order_item` DISABLE KEYS */;
INSERT INTO `tbl_order_item` (`order_id`, `product_id`, `quantity`, `price`) VALUES
	(2, 1, 2, 10000000),
	(2, 2, 3, 850000);
/*!40000 ALTER TABLE `tbl_order_item` ENABLE KEYS */;

-- Dumping structure for table dbproduct.tbl_product
CREATE TABLE IF NOT EXISTS `tbl_product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_tbl_product_tbl_category` (`category_id`),
  CONSTRAINT `FK_tbl_product_tbl_category` FOREIGN KEY (`category_id`) REFERENCES `tbl_category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- Dumping data for table dbproduct.tbl_product: ~4 rows (approximately)
DELETE FROM `tbl_product`;
/*!40000 ALTER TABLE `tbl_product` DISABLE KEYS */;
INSERT INTO `tbl_product` (`id`, `name`, `price`, `description`, `category_id`) VALUES
	(1, 'Asus N12', 10000000, 'No Description', 3),
	(2, 'Printer', 850000, 'No Description', 2),
	(3, 'Monitor LG', 1500000, 'No Description', 1),
	(4, 'Monitor Samsung', 1500000, 'No Description', 1);
/*!40000 ALTER TABLE `tbl_product` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
