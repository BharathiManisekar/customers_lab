import React, { useState } from "react";
import NameSegment from "../Pages/NameSegment";

const Index = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button style={{ cursor: "pointer" }} onClick={() => setOpen(true)}>
        Name Segment
      </button>

      <NameSegment open={open} setOpen={setOpen} />
    </>
  );
};

export default Index;
