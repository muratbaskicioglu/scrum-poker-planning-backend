import { Module } from '@nestjs/common';

import { PostgresTypeOrmDatabase } from './postgres-type-orm.database';

@Module({
  imports: [new PostgresTypeOrmDatabase().register()],
  providers: [],
  exports: [],
})
export class DatabaseModule {}
