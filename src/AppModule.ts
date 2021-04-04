import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { LoggerMiddleware } from "./providers/middleware/logger/LoggerMiddleware";
import { UserModule } from './useCases/user/UserModule';

@Module({
    imports: [UserModule]   
})

export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(LoggerMiddleware)
            .forRoutes('/user')
    }
} 