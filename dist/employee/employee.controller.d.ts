import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
export declare class EmployeeController {
    private readonly employeeService;
    constructor(employeeService: EmployeeService);
    create(createEmployeeDto: CreateEmployeeDto): Promise<{
        name: string;
        id: number;
        created_at: Date;
        last_modified: Date | null;
        salary: import("generated/prisma/runtime/library").Decimal;
        code_company: number;
        job_description: string;
        enabled: boolean;
    }>;
    findAll(page: string, perPage: string): import("generated/prisma").Prisma.PrismaPromise<{
        name: string;
        id: number;
        created_at: Date;
        last_modified: Date | null;
        salary: import("generated/prisma/runtime/library").Decimal;
        code_company: number;
        job_description: string;
        enabled: boolean;
    }[]>;
    findOne(id: string): import("generated/prisma").Prisma.Prisma__employeeClient<{
        name: string;
        id: number;
        created_at: Date;
        last_modified: Date | null;
        salary: import("generated/prisma/runtime/library").Decimal;
        code_company: number;
        job_description: string;
        enabled: boolean;
    }, null, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    update(id: string, updateEmployeeDto: UpdateEmployeeDto): Promise<{
        name: string;
        id: number;
        created_at: Date;
        last_modified: Date | null;
        salary: import("generated/prisma/runtime/library").Decimal;
        code_company: number;
        job_description: string;
        enabled: boolean;
    }>;
    remove(id: string): import("generated/prisma").Prisma.Prisma__employeeClient<{
        name: string;
        id: number;
        created_at: Date;
        last_modified: Date | null;
        salary: import("generated/prisma/runtime/library").Decimal;
        code_company: number;
        job_description: string;
        enabled: boolean;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
}
