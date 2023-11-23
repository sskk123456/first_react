import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { AddrTitle } from "./AddrTitle";

export const AddrCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="addr.id" reference="Addr" label="addr">
          <SelectInput optionText={AddrTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="addrs"
          reference="Addr"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AddrTitle} />
        </ReferenceArrayInput>
        <TextInput label="district" source="district" />
        <TextInput label="fullname" source="fullname" />
        <TextInput label="tel" source="tel" />
        <TextInput label="userId" multiline source="userId" />
      </SimpleForm>
    </Create>
  );
};
