-- Création de la base de données (si elle n'existe pas déjà)
CREATE DATABASE IF NOT EXISTS vehicules_occasion;

-- Utilisation de la base de données
USE vehicules_occasion;

-- Création de la table pour les véhicules
CREATE TABLE IF NOT EXISTS vehicule (
    id INT AUTO_INCREMENT PRIMARY KEY,
    marque VARCHAR(255) NOT NULL,
    modele VARCHAR(255) NOT NULL,
    annee_fabrication INT NOT NULL,
    prix DECIMAL(10, 2) NOT NULL,
    description TEXT
);
