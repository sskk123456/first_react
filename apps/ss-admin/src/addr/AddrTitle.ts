import { Addr as TAddr } from "../api/addr/Addr";

export const ADDR_TITLE_FIELD = "fullname";

export const AddrTitle = (record: TAddr): string => {
  return record.fullname?.toString() || String(record.id);
};
