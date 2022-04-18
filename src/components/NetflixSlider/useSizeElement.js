import { useState, useRef, useEffect } from "react";

const useSizeElement = () => {
  const elementRef = useRef(null);
  const [width, setWidth] = useState(274);

  // useEffect(() => {
  //   setWidth(elementRef.current.clientWidth);
  // }, [elementRef.current]);

  return { width, elementRef };
};

export default useSizeElement;
