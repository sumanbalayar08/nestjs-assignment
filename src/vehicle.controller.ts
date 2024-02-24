import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Res,
  Get,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { Vehicle } from './vehicle.schema';
import { VehicleService } from './vehicle.service';

@Controller('vehicle')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Post()
  async createProduct(@Res() response, @Body() vehicle: Vehicle) {
    const newVehicle = await this.vehicleService.create(vehicle);
    return response.status(HttpStatus.CREATED).json({
      newVehicle,
    });
  }

  @Get()
  async getAllVehicles() {
    return this.vehicleService.findAll();
  }

  @Get(':id')
  async getVehicleById(@Param('id') id: string) {
    return this.vehicleService.findOne(id);
  }

  @Patch(':id')
  async updateVehicle(@Param('id') id: string, @Body() vehicle: Vehicle) {
    return this.vehicleService.update(id, vehicle);
  }

  @Delete(':id')
  async deleteVehicle(@Param('id') id: string) {
    await this.vehicleService.remove(id);
    return { message: 'Vehicle deleted successfully' };
  }

  @Patch(':id/driver')
  async assignDriver(
    @Param('id') id: string,
    @Body('driverId') driverId: string,
  ) {
    return this.vehicleService.assignDriver(id, driverId);
  }

  @Patch(':id/maintenance-task')
  async addMaintenanceTask(
    @Param('id') id: string,
    @Body('task') task: string,
  ) {
    return this.vehicleService.addMaintenanceTask(id, task);
  }
}
