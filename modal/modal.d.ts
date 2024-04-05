import React from "react";
import type { ModalProps, HeaderProps, BodyProps, FooterProps } from "./types";
declare const Modal: {
    ({ children, open, onClose, onKeyDown, size, variant, }: ModalProps): React.JSX.Element;
    Header: ({ children, showCloseButton, closeButtonClassNames, borderless, }: HeaderProps) => React.JSX.Element;
    Body: ({ children, alignment, borderless, className, }: BodyProps) => React.JSX.Element;
    Footer: ({ children, alignment }: FooterProps) => React.JSX.Element;
};
export { Modal };
