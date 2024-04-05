import { Menu } from "@headlessui/react";
import React from "react";
import { type ButtonProps } from "../../button";
export type MenuItemsProps = React.ComponentPropsWithoutRef<typeof Menu.Items> & ButtonProps;
export declare const MenuItem: ({ children, className, ...props }: MenuItemsProps) => JSX.Element;
