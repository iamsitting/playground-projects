import { Controller, Get } from '@nestjs/common';

@Controller('api/auth')
export class AuthController {
  @Get('health')
  health() {
    return { status: 'ok', feature: 'auth' };
  }
}
