import { CreateUserDto } from '@/users/dto/create-user.dto';
import { UsersService } from '@/users/users.service';
import { VehiclesService } from '@/vehicles/vehicles.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly vehiclesService: VehiclesService,
  ) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.createUser(createUserDto);
  }

  @Get()
  async findAll() {
    return await this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.usersService.findById(+id);
  }

  @Get(':id/vehicles')
  async findUserVehicles(@Param('id') id: string) {
    return await this.vehiclesService.findByUserId(+id);
  }
}
