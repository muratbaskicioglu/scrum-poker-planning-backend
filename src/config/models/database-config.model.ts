export interface DatabaseConfig {
  host: string;
  port: number;
  username: string;
  password: string;
  name: string;
  synchronize?: boolean;
}
