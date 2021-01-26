import { themedStyle } from '@connectv/jss-theme';
import { CodedocTheme } from '@codedoc/core';
import { theme } from '../../theme';

export const TagStyle = themedStyle<CodedocTheme>(theme => ({
    tag: {
        color: 'blue'
    }
}))