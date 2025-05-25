import { CreateAbsenceDto } from './dto/create-absence.dto';
import { UpdateAbsenceDto } from './dto/update-absence.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class AbsenceService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createAbsenceDto: CreateAbsenceDto): Promise<{
        id: number;
        created_at: Date;
        last_modified: Date | null;
        code_employee: number;
        absence_date: Date;
        certificate_absence: boolean;
    }>;
    findAll(page?: number, perPage?: number): import("generated/prisma").Prisma.PrismaPromise<{
        id: number;
        created_at: Date;
        last_modified: Date | null;
        code_employee: number;
        absence_date: Date;
        certificate_absence: boolean;
    }[]>;
    findOne(id: number): import("generated/prisma").Prisma.Prisma__absenceClient<{
        id: number;
        created_at: Date;
        last_modified: Date | null;
        code_employee: number;
        absence_date: Date;
        certificate_absence: boolean;
    }, null, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    update(id: number, updateAbsenceDto: UpdateAbsenceDto): Promise<{
        id: number;
        created_at: Date;
        last_modified: Date | null;
        code_employee: number;
        absence_date: Date;
        certificate_absence: boolean;
    }>;
    remove(id: number): import("generated/prisma").Prisma.Prisma__absenceClient<{
        id: number;
        created_at: Date;
        last_modified: Date | null;
        code_employee: number;
        absence_date: Date;
        certificate_absence: boolean;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
}
