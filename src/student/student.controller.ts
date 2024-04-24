import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { StudentDto } from './dto/student.dto';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  create(@Body(new ValidationPipe()) studentDto: StudentDto) {
    return this.studentService.create(studentDto);
  }
}
