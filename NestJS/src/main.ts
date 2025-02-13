import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  console.log(process.env.PORT);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

/**
 * Một module gồm:
 *  - imports:      Chứa danh sách các module khác cần thiết để module này hoạt động, giúp module có thể sử dụng các provider từ module khác.
 *  - controllers:  Chứa danh sách các controller xử lý các request HTTP gồm các Router (endpoint)
 *  - providers:    Chứa danh sách các service (hoặc các provider khác) khi muốn dùng Dependenci Injection, có thể được inject vào controller hoặc các provider khác. Nestjs sẽ gom các class và new
 *  - exports:      Chứa danh sách các provider mà module này muốn cung cấp cho các module khác sử dụng.
 */

/**
 * Module trong NestJS
 *  - Module phải được khai báo đúng với @Module()
 *  - Ví dụ tạo module UserModule
 *  - controllers: [UsersController], // Chứa các controller xử lý request
 *  - providers: [UsersService],      // Nếu muốn dùng service theo kiểu DI
 *  - exports: [UsersService],        // Nếu muốn cho phép module khác sử dụng UsersService
 *  - Module phải được import vào AppModule
 */

/**
 * Sử dụng service từ module khác (Ví dụ VideoModule muốn dùng UserService)
 *  - Module chứa service (UserModule) phải export service đó (UserService)
 *  - Module cần sử dụng (VideoModule) phải import module chứa service (UserModule)
 *  - Inject service vào nơi cần sử dụng (VideoService)
 *    - constructor(private readonly usersService: UsersService) {}
 *    - this.usersService
 *  -
 */

/**
 * Vòng lặp module
 * Module A cần Module B, nhưng Module B cũng cần Module A
----------------------------------------------------------------
@Module({
  imports: [OrdersModule], // UsersModule cần OrdersModule
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}

@Module({
  imports: [UsersModule], // OrdersModule cũng cần UsersModule
  providers: [OrdersService],
  exports: [OrdersService],
})
export class OrdersModule {}
=> Lỗi: Nest cannot resolve dependencies of the ...
----------------------------------------------------------------
 * 
 * Sửa lại
----------------------------------------------------------------
@Module({
  imports: [forwardRef(() => OrdersModule)], // Dùng forwardRef để tránh vòng lặp
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}

@Module({
  imports: [forwardRef(() => UsersModule)], // Dùng forwardRef để tránh vòng lặp
  providers: [OrdersService],
  exports: [OrdersService],
})
export class OrdersModule {}
----------------------------------------------------------------
 * 
 *
 *   Khi sử dụng service từ module bị vòng lặp cần forwardRef(() => OrdersService
 * 
constructor(
  @Inject(forwardRef(() => OrdersService)) // Inject đúng cách
  private readonly ordersService: OrdersService
) {}

 */

/**
 * nest g module modules/user
 * nest g controller modules/user --no-spec
 * nest g service modules/user --no-spec
 */
