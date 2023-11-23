export type Addr = {
  addr?: Addr | null;
  addrs?: Array<Addr>;
  createdAt: Date;
  district: string | null;
  fullname: string | null;
  id: string;
  tel: string | null;
  updatedAt: Date;
  userId: string | null;
};
