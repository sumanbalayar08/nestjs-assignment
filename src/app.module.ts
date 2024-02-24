import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Vehicle, VehicleSchema } from './vehicle.schema';
import { DatabaseConnectionProvider } from './database.provider';
import { VehicleService } from './vehicle.service';
import { VehicleController } from './vehicle.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: DatabaseConnectionProvider,
    }),
    MongooseModule.forFeature([{ name: Vehicle.name, schema: VehicleSchema }]),
    JwtModule.register({
      secret: 'sumantest', // Replace with your actual secret key
      signOptions: { expiresIn: '1h' }, // Optional: set token expiration
    }),
  ],
  controllers: [VehicleController],
  providers: [DatabaseConnectionProvider, VehicleService],
})
export class AppModule {}
