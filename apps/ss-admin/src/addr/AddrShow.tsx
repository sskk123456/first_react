import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ADDR_TITLE_FIELD } from "./AddrTitle";

export const AddrShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField reference="Addr" target="addrId" label="Addrs">
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
