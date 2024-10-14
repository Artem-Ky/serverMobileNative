import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { FlowOptionsModule } from './flow-options/flow-options.module'
import { LogActiveDayModule } from './log-active-day/log-active-day.module'
import { PrismaService } from './prisma.service'

@Module({
	imports: [
		ConfigModule.forRoot(),
		AuthModule,
		FlowOptionsModule,
		LogActiveDayModule
	],
	controllers: [AppController],
	providers: [AppService, PrismaService]
})
export class AppModule {}
