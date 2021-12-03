import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {ProductModel} from './product.model';
import {FindProductDto} from './dto/find-product.dto';

@Controller('product')
export class ProductController {
  @Post()
  async create(@Body() productDro: Omit<ProductModel, '_id'>) {

  }

  @Get(':id')
  async get(@Param('id') id: number) {

  }

  @Delete(':id')
  async delete(@Param('id') id: number) {

  }

  @Patch(':id')
  async patch(@Param() param, @Body() productDto: ProductModel) {

  }

  @Post('find')
  async find(@Body() findProduct: FindProductDto) {

  }
}
