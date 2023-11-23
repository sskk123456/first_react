import { AddrWhereUniqueInput } from "./AddrWhereUniqueInput";
import { AddrListRelationFilter } from "./AddrListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AddrWhereInput = {
  addr?: AddrWhereUniqueInput;
  addrs?: AddrListRelationFilter;
  district?: StringNullableFilter;
  fullname?: StringNullableFilter;
  id?: StringFilter;
  tel?: StringNullableFilter;
  userId?: StringNullableFilter;
};
