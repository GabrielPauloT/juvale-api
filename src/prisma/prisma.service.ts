import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma';
import { withOptimize } from '@prisma/extension-optimize';
import { withAccelerate } from '@prisma/extension-accelerate';

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  private prisma: any;

  constructor() {
    const prisma = new PrismaClient({
      datasources: {
        db: {
          url: process.env.DATABASE_URL, // ✅ Carrega no runtime, não no import
        },
      },
    })
      .$extends(withOptimize({ apiKey: process.env.OPTIMIZE_API_KEY }))
      .$extends(withAccelerate());

    this.prisma = prisma;
  }

  async onModuleInit() {
    await this.prisma.$connect();
  }

  async onModuleDestroy() {
    await this.prisma.$disconnect();
  }

  get client() {
    return this.prisma;
  }
}
