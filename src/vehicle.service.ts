import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vehicle } from './vehicle.schema';

@Injectable()
export class VehicleService {
  constructor(
    @InjectModel(Vehicle.name) private vehicleModel: Model<Vehicle>,
  ) {}

  async create(Vehicle: Vehicle): Promise<Vehicle> {
    const newVehicle = new this.vehicleModel(Vehicle);
    return newVehicle.save();
  }

  async findAll(): Promise<Vehicle[]> {
    return this.vehicleModel.find().exec();
  }

  async findOne(id: string): Promise<Vehicle> {
    const vehicle = await this.vehicleModel.findById(id).exec();
    if (!vehicle) {
      throw new NotFoundException('Vehicle not found');
    }
    return vehicle;
  }

  async update(id: string, vehicle: Vehicle): Promise<Vehicle> {
    const updatedVehicle = await this.vehicleModel
      .findByIdAndUpdate(id, vehicle, { new: true })
      .exec();
    if (!updatedVehicle) {
      throw new NotFoundException('Vehicle not found');
    }
    return updatedVehicle;
  }

  async remove(id: string): Promise<void> {
    const result = await this.vehicleModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('Vehicle not found');
    }
  }

  async assignDriver(id: string, driverId: string): Promise<Vehicle> {
    const vehicle = await this.vehicleModel
      .findByIdAndUpdate(id, { assignedDriver: driverId }, { new: true })
      .exec();
    if (!vehicle) {
      throw new NotFoundException('Vehicle not found');
    }
    return vehicle;
  }

  async addMaintenanceTask(id: string, task: string): Promise<Vehicle> {
    const vehicle = await this.vehicleModel
      .findByIdAndUpdate(
        id,
        { $push: { maintenanceTasks: task } },
        { new: true },
      )
      .exec();
    if (!vehicle) {
      throw new NotFoundException('Vehicle not found');
    }
    return vehicle;
  }
}
