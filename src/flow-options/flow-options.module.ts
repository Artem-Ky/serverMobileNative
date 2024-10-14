import { Module } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { FlowOptionsController } from './flow-options.controller'
import { FlowOptionsService } from './flow-options.service'

@Module({
	controllers: [FlowOptionsController],
	providers: [FlowOptionsService, PrismaService]
})
export class FlowOptionsModule {}
