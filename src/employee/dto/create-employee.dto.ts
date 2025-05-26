import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  @IsNotEmpty()
  public codeEmployee: string;

  @IsNumber()
  @IsNotEmpty()
  public codeCompany: number;

  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public jobDescription: string;

  @IsNumber()
  @IsNotEmpty()
  public salary: number;
}
