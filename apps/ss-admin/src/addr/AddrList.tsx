import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ADDR_TITLE_FIELD } from "./AddrTitle";

export const AddrList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Addrs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField label="addr" source="addr.id" reference="Addr">
          <TextField source={ADDR_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="district" source="district" />
        <TextField label="fullname" source="fullname" />
        <TextField label="ID" source="id" />
        <TextField label="tel" source="tel" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userId" source="userId" />
      </Datagrid>
    </List>
  );
};
