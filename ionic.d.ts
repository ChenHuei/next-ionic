import { ReactText, HTMLAttributes } from "react";
import { JSX as LocalJSX } from "@ionic/react";
import IonicIntrinsicElements = LocalJSX.IntrinsicElements;

type ToReact<T> = {
  [P in keyof T]?: T[P] &
    Omit<HTMLAttributes<Element>, "className"> & {
      class?: string;
      key?: ReactText;
    };
};

declare global {
  export namespace JSX {
    interface IntrinsicElements extends ToReact<IonicIntrinsicElements> {
      key?: string;
    }
  }
}
