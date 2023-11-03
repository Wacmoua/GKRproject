CREATE TABLE IF NOT EXISTS photo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    vehicule_id INT NOT NULL,
    filename VARCHAR(255) NOT NULL,
    FOREIGN KEY (vehicule_id) REFERENCES vehicule(id)
);
