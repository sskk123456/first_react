import { AddrWhereUniqueInput } from "./AddrWhereUniqueInput";
import { AddrUpdateInput } from "./AddrUpdateInput";

export type UpdateAddrArgs = {
  where: AddrWhereUniqueInput;
  data: AddrUpdateInput;
};
