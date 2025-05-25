import { AbsenceService } from './absence.service';
import { CreateAbsenceDto } from './dto/create-absence.dto';
import { UpdateAbsenceDto } from './dto/update-absence.dto';
export declare class AbsenceController {
    private readonly absenceService;
    constructor(absenceService: AbsenceService);
    create(createAbsenceDto: CreateAbsenceDto): Promise<{
        id: number;
        created_at: Date;
        last_modified: Date | null;
        code_employee: number;
        absence_date: Date;
        certificate_absence: boolean;
    }>;
    findAll(page: string, perPage: string): import("generated/prisma").Prisma.PrismaPromise<{
        id: number;
        created_at: Date;
        last_modified: Date | null;
        code_employee: number;
        absence_date: Date;
        certificate_absence: boolean;
    }[]>;
    findOne(id: string): import("generated/prisma").Prisma.Prisma__absenceClient<{
        id: number;
        created_at: Date;
        last_modified: Date | null;
        code_employee: number;
        absence_date: Date;
        certificate_absence: boolean;
    }, null, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    update(id: string, updateAbsenceDto: UpdateAbsenceDto): Promise<{
        id: number;
        created_at: Date;
        last_modified: Date | null;
        code_employee: number;
        absence_date: Date;
        certificate_absence: boolean;
    }>;
    remove(id: string): import("generated/prisma").Prisma.Prisma__absenceClient<{
        id: number;
        created_at: Date;
        last_modified: Date | null;
        code_employee: number;
        absence_date: Date;
        certificate_absence: boolean;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
}
