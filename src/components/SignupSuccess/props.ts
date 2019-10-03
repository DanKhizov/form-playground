export interface Props {
  fieldValues: {
    name: string;
    email: string;
    phoneNumbers: {
      value: string;
    }[];
  };
}
