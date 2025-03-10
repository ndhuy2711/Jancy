import type {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";
import React from "react";

export default function Main(
  {children}:{ children: React.ReactNode }
) {
  return <div className="main main-has-sub-menu">{children}</div>;
}
