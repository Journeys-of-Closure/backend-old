import { NestFactory } from "@nestjs/core";
import { UserModule } from "./infrastructure/user/user.module";

async function bootstrap() {
  const app = await NestFactory.create(UserModule);
  await app.listen(3000);
}
bootstrap();
