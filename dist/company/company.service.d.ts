import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class CompanyService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createCompanyDto: CreateCompanyDto): import("generated/prisma").Prisma.Prisma__companyClient<{
        name: string;
        id: number;
        created_at: Date;
        last_modified: Date | null;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    findAll(page?: number, perPage?: number): import("generated/prisma").Prisma.PrismaPromise<{
        name: string;
        id: number;
        created_at: Date;
        last_modified: Date | null;
    }[]>;
    findOne(id: number): import("generated/prisma").Prisma.Prisma__companyClient<{
        name: string;
        id: number;
        created_at: Date;
        last_modified: Date | null;
    }, null, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    update(id: number, updateCompanyDto: UpdateCompanyDto): import("generated/prisma").Prisma.Prisma__companyClient<{
        name: string;
        id: number;
        created_at: Date;
        last_modified: Date | null;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
}
