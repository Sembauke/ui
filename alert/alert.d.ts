import React from "react";
type AlertVariant = "success" | "info" | "warning" | "danger";
export type AlertProps = React.ComponentProps<"div"> & {
    variant: AlertVariant;
};
/**
 * `Alert` is used to display a short, important message that does not interrupt the user's workflow.
 *
 * `Alert` is not dismissable.
 */
export declare const Alert: ({ children, className, variant, ...props }: AlertProps) => JSX.Element;
export {};
