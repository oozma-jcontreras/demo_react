import { adapt } from 'webcomponents-in-react';

import '@uikit/ds-input'
import '@uikit/ds-button'
import '@uikit/ds-container';
import '@uikit/ds-icon';

const DsInput = adapt('ds-input', {});
const DsButton = adapt('ds-button', {});
const DsContainer = adapt('ds-container', {});
const DsIcon = adapt('ds-icon', {});

export {
    DsInput,
    DsButton,
    DsContainer,
    DsIcon
};