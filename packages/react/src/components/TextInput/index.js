/**
 * Copyright IBM Corp. 2016, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { deprecateFieldOnObject } from '../../internal/deprecateFieldOnObject';

import ControlledPasswordInput from './ControlledPasswordInput';
import PasswordInput from './PasswordInput';
import TextInput from './TextInput';

TextInput.ControlledPasswordInput = ControlledPasswordInput;
TextInput.PasswordInput = PasswordInput;

if (__DEV__) {
  deprecateFieldOnObject(
    TextInput,
    'ControlledPasswordInput',
    ControlledPasswordInput
  );
  deprecateFieldOnObject(TextInput, 'PasswordInput', PasswordInput);
}

export { default as TextInputSkeleton } from './TextInput.Skeleton';
export default TextInput;
export { TextInput };
