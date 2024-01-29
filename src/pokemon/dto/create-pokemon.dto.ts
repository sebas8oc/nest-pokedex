import { IsInt, IsPositive, IsString, MinLength } from "class-validator";

export class CreatePokemonDto {

    // isInt, isPositive, min 1
    @IsInt()
    @IsPositive()
    no: number;

    // isStrig, Minlength
    @IsString()
    @MinLength(1)
    name: string;

}
