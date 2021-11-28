import React, { useEffect, useRef, useImperativeHandle } from "react";

export default function Demo() {
  const inputRef = useRef();

  useEffect(() => {
      inputRef.current.focus()
  },[]);

  return <FancyInput ref={inputRef} />;
}

const FancyInput = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(
    ref,
    () => ({
      focus: ()=>inputRef.current.focus()
    }),
    [inputRef]
  );
  return <input ref={inputRef} />;
});
