import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { JWTModule } from 'src/auth/JWT.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Student]),
    JWTModule
  ],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
