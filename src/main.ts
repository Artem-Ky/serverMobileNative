import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { PrismaService } from './prisma.service'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	const prismaService = app.get(PrismaService)
	await prismaService.enableShutdownHooks(app)
	app.setGlobalPrefix('api')

	app.enableCors({
		origin: '*',
		credentials: false,
		allowedHeaders: '*',
	})
	await app.listen(3000, () => {
		console.log(`Server is running on http://localhost:${3000}`)
	})
}
bootstrap()
