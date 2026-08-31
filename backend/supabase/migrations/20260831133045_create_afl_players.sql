CREATE TABLE afl_players (
  player_id  UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name VARCHAR(50) NOT NULL,
  last_name  VARCHAR(50) NOT NULL,
  created_at TIMESTAMP   DEFAULT CURRENT_TIMESTAMP
);