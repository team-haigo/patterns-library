import React from 'react';

type Variant = 'foo' | 'bar';

export interface AXAPopupProps {
  variant?: Variant;
  slot?: string;
  onClick?: () => void;
}

declare function createAXAPopup(
  createElement: typeof React.createElement
): React.ComponentType<AXAPopupProps>;

export default createAXAPopup;
