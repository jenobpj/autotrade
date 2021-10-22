DROP TABLE IF EXISTS admin CASCADE;

CREATE TABLE admin (
  id SERIAL PRIMARY KEY NOT NULL,
  car_id   INTEGER REFERENCES cars(id)  ON DELETE CASCADE,
  buyer_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  favourite_id  INTEGER REFERENCES favourites(id) ON DELETE CASCADE
);