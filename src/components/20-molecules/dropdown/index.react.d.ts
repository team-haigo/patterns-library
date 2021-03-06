import React from 'react';

type Item = {
  name: string;
  value?: string;
  selected?: boolean;
  disabled?: boolean;
};

type AXADropdownChangeEvent = {
  target: {
    value: string;
    index: number;
    name: string;
  };
};

export interface AXADropdownProps {
  items: Array<Item>;
  embedded?: boolean;
  refId?: string;
  label?: string;
  required?: boolean;
  invalid?: boolean;
  error?: string;
  native?: boolean;
  onChange?: (e: AXADropdownChangeEvent) => void;
  onFocus?: (e?: any) => void;
  onBlur?: (e?: any) => void;
  defaultTitle?: string;
  value?: string;
  checkMark?: boolean;
  disabled?: boolean;
  dataTestId?: string;
  className?: string;
  maxHeight?: string;
}

declare function createAXADropdown(
  createElement: typeof React.createElement
): React.ComponentType<AXADropdownProps>;

export default createAXADropdown;
