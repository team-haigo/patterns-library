import React from 'react';

type Variant = 'axa-blue' | 'wild-sand' | 'white';

export interface AXAPolicyFeaturesProps {
  title: string;
  variant?: Variant;
  className?: string;
}

export function createAXAPolicyFeatures(
  createElement: typeof React.createElement
): React.ComponentType<AXAPolicyFeaturesProps>;

export interface AXAPolicyFeaturesItemProps {
  title: string;
  description: string;
  icon?: string;
  className?: string;
}

export declare function createAXAPolicyFeaturesItem(
  createElement: typeof React.createElement
): React.ComponentType<AXAPolicyFeaturesItemProps>;
