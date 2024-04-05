/// <reference types="react" />
export interface CloseButtonProps {
    className?: string;
    label?: string;
    onClick: () => void;
}
/**
 * Basic UI component for closing modals, alerts, etc.
 */
export declare function CloseButton({ className, label, onClick, }: CloseButtonProps): JSX.Element;
