import React from "react";
import { Button, Dialog } from "@ui5/webcomponents-react";

function ShadowDOM() {
  const ref = React.useRef<{ open: Function }>();
  return (
    <>
      <Button
        onClick={function noRefCheck() {
          ref?.current?.open();
        }}
      >
        Open Dialog
      </Button>
      <Dialog
        ref={ref}
        className=""
        headerText="Dialog Header"
        slot=""
        style={{}}
        tooltip=""
      >
        Press "Escape" to close the Dialog.
      </Dialog>
    </>
  );
}

export default ShadowDOM;
