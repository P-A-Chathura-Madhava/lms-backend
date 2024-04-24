import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentsRepository: Repository<Student>) {}

  async create(createStudentDto: CreateStudentDto) {
    const student = this.studentsRepository.create(createStudentDto);
    return await this.studentsRepository.save(student);
  }

  findAll() {
    return `This action returns all student`;
  }

  findOne(id: number) {
    return `This action returns a #${id} student`;
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
