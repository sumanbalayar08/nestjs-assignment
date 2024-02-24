import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VehicleDocument = Vehicle & Document;

@Schema()
export class Vehicle {
  @Prop({ required: true })
  make: string;

  @Prop({ required: true })
  model: string;

  @Prop({ required: true })
  year: number;

  @Prop({ required: true })
  registrationNumber: string;

  @Prop({
    required: true,
    enum: ['Active', 'Maintenance', 'Retired'],
    default: 'Active',
  })
  status: string;

  @Prop({ required: true })
  location: string;

  @Prop()
  assignedDriver: string; // You can adjust the type based on your driver schema

  @Prop()
  maintenanceTasks: string[]; // You can adjust the type based on your maintenance task schema
}

export const VehicleSchema = SchemaFactory.createForClass(Vehicle);
