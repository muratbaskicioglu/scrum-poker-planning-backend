import { DynamicModule } from '@nestjs/common';

export interface Database {
  /**
   * Implements selected database module with configured options
   */
  register(): DynamicModule;
}
