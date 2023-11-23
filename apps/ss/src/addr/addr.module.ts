import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AddrModuleBase } from "./base/addr.module.base";
import { AddrService } from "./addr.service";
import { AddrController } from "./addr.controller";
import { AddrResolver } from "./addr.resolver";

@Module({
  imports: [AddrModuleBase, forwardRef(() => AuthModule)],
  controllers: [AddrController],
  providers: [AddrService, AddrResolver],
  exports: [AddrService],
})
export class AddrModule {}
