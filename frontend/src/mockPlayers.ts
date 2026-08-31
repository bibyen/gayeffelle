export interface Player {
  player_id: string;
  first_name: string;
  last_name: string;
}

export const MOCK_PLAYERS: Player[] = [
  { player_id: "1", first_name: "John", last_name: "Smith" },
  { player_id: "2", first_name: "Sarah", last_name: "Jones" },
  { player_id: "3", first_name: "David", last_name: "Miller" }
];
