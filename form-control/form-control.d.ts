import React from "react";
import { FormControlProps } from "./types";
declare const FormControl: {
    ({ componentClass, ...props }: FormControlProps<"input" | "textarea">): JSX.Element;
    Feedback: ({ children, className, ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>) => JSX.Element;
    Static: ({ className, children, ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>) => JSX.Element;
};
export { FormControl };
