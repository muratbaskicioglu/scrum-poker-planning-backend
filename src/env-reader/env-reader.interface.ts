import { EnvMap } from './models/env-map.model';

export abstract class EnvReader {
  /**
   * Reads environment variables from located source
   * The source can be a file or an API
   */
  public abstract read(): any;

  /**
   * Parses read environment variables into an object definition
   */
  public abstract getParsed(): EnvMap;
}
