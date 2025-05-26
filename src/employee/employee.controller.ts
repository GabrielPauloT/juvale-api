import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeeService.create(createEmployeeDto);
  }

  @Post('/batch')
  createBatch(@Body() createEmployeeDtos: CreateEmployeeDto[]) {
    return this.employeeService.createBatch(createEmployeeDtos);
  }

  @Get()
  findAll(
    @Query('page') page: string,
    @Query('perPage') perPage: string,
    @Query('companyId') companyId: string,
    @Query('date') date: string,
    @Query('name') name?: string,
  ) {
    return this.employeeService.findAll(
      +page,
      +perPage,
      +companyId,
      date,
      name,
    );
  }

  @Get(':code_employee')
  findOne(@Param('code_employee') code_employee: string) {
    return this.employeeService.findOne(code_employee);
  }

  @Patch(':code_employee')
  update(
    @Param('code_employee') code_employee: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    return this.employeeService.update(code_employee, updateEmployeeDto);
  }

  @Delete(':code_employee')
  remove(@Param('code_employee') code_employee: string) {
    return this.employeeService.remove(code_employee);
  }
}
