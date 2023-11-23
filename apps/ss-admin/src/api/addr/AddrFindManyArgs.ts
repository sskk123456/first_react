import { AddrWhereInput } from "./AddrWhereInput";
import { AddrOrderByInput } from "./AddrOrderByInput";

export type AddrFindManyArgs = {
  where?: AddrWhereInput;
  orderBy?: Array<AddrOrderByInput>;
  skip?: number;
  take?: number;
};
