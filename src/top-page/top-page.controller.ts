import {Body, Controller, Get, Param, Patch, Post} from '@nestjs/common';
import {TopPageModel} from './top-page.model';
import {FindTopPageDto} from './dto/find-top-page.dto';

@Controller('top-page')
export class TopPageController {
  @Post()
  async create(@Body() topPageDto: Omit<TopPageModel, '_id'>) {

  }

  @Get(':id')
  async get(@Param('id') id: number) {

  }

  @Patch(':id')
  async patch(@Param() param, @Body() topPageDto: TopPageModel) {

  }

  @Post('find')
  async find(@Body() findTopPageDto: FindTopPageDto) {

  }
}
