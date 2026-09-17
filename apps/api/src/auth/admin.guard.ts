import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException
} from '@nestjs/common';

@Injectable()
export class AdminGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest();
        const token = request.headers['x-admin-token'];
        const expected = process.env.ADMIN_TOKEN;

        if (!expected || token !== expected) {
            throw new UnauthorizedException('admin token required');
        }

        return true;
    }
}
