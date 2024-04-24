import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findAll() {
    return await this.studentsRepository.find();
  }

  async findOne(id: number) {
    return await this.studentsRepository.findOne({
      where: {id}
    });
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    const student = await this.findOne(id);
    if (!student) {
      throw new NotFoundException();
    }
    Object.assign(student, updateStudentDto);
    return await this.studentsRepository.save(student);
  }

  async remove(id: number) {
    const student = await this.findOne(id);
    if (!student) {
      throw new NotFoundException();
    }
    return await this.studentsRepository.remove(student);
  }
}
