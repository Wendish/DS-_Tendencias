import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './schema/cats.module';

@Module({
  // imports: [MongooseModule.forRoot('mongodb://localhost:27017/myapp'), CatsModule],
  imports: [MongooseModule.forRoot('mongodb://192.168.99.100:27017/myapp'), CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
