import { IsBoolean, IsString } from "class-validator";

export class CreateStudentDto {
    @IsString()
    name: string;

    @IsString()
    address: string;

    @IsBoolean()
    active: boolean;
}
