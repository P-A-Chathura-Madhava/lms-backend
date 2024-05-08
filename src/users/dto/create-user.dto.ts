import { IsArray, IsBoolean, IsString } from "class-validator";
import { Role } from "src/enums/role.enum";

export class CreateUserDto {
    @IsString()
    username: string;

    @IsString()
    password: string;

    @IsString()
    roles: string;
}
