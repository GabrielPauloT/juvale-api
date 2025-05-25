import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
export declare class CompanyController {
    private readonly companyService;
    constructor(companyService: CompanyService);
    create(createCompanyDto: CreateCompanyDto): import("generated/prisma").Prisma.Prisma__companyClient<{
        name: string;
        id: number;
        created_at: Date;
        last_modified: Date | null;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    findAll(page: string, perPage: string): import("generated/prisma").Prisma.PrismaPromise<{
        name: string;
        id: number;
        created_at: Date;
        last_modified: Date | null;
    }[]>;
    findOne(id: string): import("generated/prisma").Prisma.Prisma__companyClient<{
        name: string;
        id: number;
        created_at: Date;
        last_modified: Date | null;
    }, null, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    update(id: string, updateCompanyDto: UpdateCompanyDto): import("generated/prisma").Prisma.Prisma__companyClient<{
        name: string;
        id: number;
        created_at: Date;
        last_modified: Date | null;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
}
