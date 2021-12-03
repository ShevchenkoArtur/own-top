import {Controller, Get} from '@nestjs/common';
import {SequelizeModule} from '@nestjs/sequelize';

@Controller('database')
export class DatabaseController {
  constructor(private readonly sequelizeModule: SequelizeModule) {}

  @Get()
  isDbConnection() {
  }
}
