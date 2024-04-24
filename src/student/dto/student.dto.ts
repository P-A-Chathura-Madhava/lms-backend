import { IsString, IsInt, IsBoolean } from 'class-validator';

export class StudentDto {
  @IsInt()
  id: number;

  @IsString()
  name: string;

  @IsString()
  address: number;

  @IsBoolean()
  active: boolean;
}
