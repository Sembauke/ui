import React from "react";
import { PanelProps } from "./types";
export declare const Heading: ({ children, className, ...props }: React.ComponentProps<"div">) => JSX.Element;
export declare const Title: ({ children, ...props }: React.ComponentProps<"h3">) => JSX.Element;
export declare const Panel: {
    ({ children, className, variant, ...restProps }: PanelProps): JSX.Element;
    Body: ({ children, className, ...props }: React.ComponentProps<"div">) => JSX.Element;
    Heading: ({ children, className, ...props }: React.ComponentProps<"div">) => JSX.Element;
    Title: ({ children, ...props }: React.ComponentProps<"h3">) => JSX.Element;
};
