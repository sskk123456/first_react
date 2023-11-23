import { AddrWhereUniqueInput } from "./AddrWhereUniqueInput";
import { AddrUpdateManyWithoutAddrsInput } from "./AddrUpdateManyWithoutAddrsInput";

export type AddrUpdateInput = {
  addr?: AddrWhereUniqueInput | null;
  addrs?: AddrUpdateManyWithoutAddrsInput;
  district?: string | null;
  fullname?: string | null;
  tel?: string | null;
  userId?: string | null;
};
