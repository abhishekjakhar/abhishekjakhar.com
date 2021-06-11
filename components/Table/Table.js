import * as React from "react";

import DesktopTable from "@components/DesktopTable/DesktopTable";

export default function Table({ data, fields, ...rest }) {
  return (
    <>
      <DesktopTable data={data} fields={fields} {...rest} />
    </>
  );
}
