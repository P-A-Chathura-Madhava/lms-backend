import { Injectable } from '@nestjs/common';
import { StudentDto } from './dto/student.dto';

@Injectable()
export class StudentService {
  async create(studentDto: StudentDto) {
    return studentDto;
  }
}
