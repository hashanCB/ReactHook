import React, { useDeferredValue, useMemo } from "react";

const DefRender = ({ namev }) => {
  const defvalue = useDeferredValue(namev);
  const namelist = useMemo(() => {
    const paragraphs = [];
    for (let i = 0; i < 20000; i++) {
      paragraphs.push(
        <p className="text-black" key={i}>
          {defvalue}
        </p>
      );
    }
    return paragraphs;
  }, [defvalue]);

  return namelist;
};

export default DefRender;
