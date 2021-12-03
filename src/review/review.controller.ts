import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {ReviewModel} from './review.model';

@Controller('review')
export class ReviewController {
  @Post()
  async create(@Body() reviewDto: Omit<ReviewModel, '_id'>) {

  }

  @Get('byProduct/:productId')
  async getByProduct(@Param('productId') id: number) {

  }

  @Delete(':id')
  async delete(@Param('id') id: number) {

  }
}
