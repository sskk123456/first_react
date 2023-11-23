import { AddrWhereUniqueInput } from "./AddrWhereUniqueInput";
import { AddrCreateNestedManyWithoutAddrsInput } from "./AddrCreateNestedManyWithoutAddrsInput";

export type AddrCreateInput = {
  addr?: AddrWhereUniqueInput | null;
  addrs?: AddrCreateNestedManyWithoutAddrsInput;
  district?: string | null;
  fullname?: string | null;
  tel?: string | null;
  userId?: string | null;
};
