import { Module } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { LogActiveDayController } from './log-active-day.controller'
import { LogActiveDayService } from './log-active-day.service'

@Module({
	controllers: [LogActiveDayController],
	providers: [LogActiveDayService, PrismaService]
})
export class LogActiveDayModule {}
