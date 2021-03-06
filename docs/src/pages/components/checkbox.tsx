import React, { ReactElement } from 'react';
import Page from '../../components/Page';
import SyntaxHighlighter from '../../components/SyntaxHighlighter';
import { Checkbox } from '../../patterns/index';

interface Props {}

export default function CheckboxPage({}: Props): ReactElement {
  return (
    <Page>
      <p className="paragraph">
        Checkboxes allow the user to select one or more items from a group.
      </p>
      <div className="Preview">
        <Checkbox label="I agree to conditions of data protection" />
      </div>
      <SyntaxHighlighter>{`
import '@axa-ch/checkbox';
...
<axa-checkbox label="I agree to conditions of data protection"></axa-checkbox>
  `}</SyntaxHighlighter>

      <h2 className="h2">Usage</h2>
      <p className="paragraph">
        Check boxes are most frequently used in forms.
      </p>

      <h2 className="h2">Variation</h2>
      <div className="Preview">
        <Checkbox
          label="I agree to conditions of data protection"
          variant="checkmark"
        />
      </div>
      <SyntaxHighlighter>{`
import '@axa-ch/checkbox';
...
<axa-checkbox label="I agree to conditions of data protection" variant="checkmark"></axa-checkbox>
  `}</SyntaxHighlighter>
    </Page>
  );
}
