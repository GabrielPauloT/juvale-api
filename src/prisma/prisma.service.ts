import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma';
import { withOptimize } from '@prisma/extension-optimize';
import { withAccelerate } from '@prisma/extension-accelerate';

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  private readonly prisma = new PrismaClient()
    .$extends(withOptimize({ apiKey: process.env.OPTIMIZE_API_KEY }))
    .$extends(withAccelerate());

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
