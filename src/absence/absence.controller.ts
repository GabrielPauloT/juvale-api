import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AbsenceService } from './absence.service';
import { CreateAbsenceDto } from './dto/create-absence.dto';
import { UpdateAbsenceDto } from './dto/update-absence.dto';
import { JwtAuthGuard } from 'src/core/guards/jwt-verify.interceptors';

@Controller('absence')
@UseGuards(JwtAuthGuard)
export class AbsenceController {
  constructor(private readonly absenceService: AbsenceService) {}

  @Post()
  create(@Body() createAbsenceDto: CreateAbsenceDto) {
    return this.absenceService.create(createAbsenceDto);
  }

  @Get()
  findAll(@Query('page') page: string, @Query('perPage') perPage: string) {
    return this.absenceService.findAll(+page, +perPage);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.absenceService.findOne(+id);
  }

  @Get('/code_employee/:codeEmployee/date/:date')
  findByCodeEmployeeAndDate(
    @Param('codeEmployee') codeEmployee: string,
    @Param('date') date: string,
  ) {
    return this.absenceService.findByCodeEmployeeAndDate(codeEmployee, date);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAbsenceDto: UpdateAbsenceDto) {
    return this.absenceService.update(+id, updateAbsenceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.absenceService.remove(+id);
  }
}
