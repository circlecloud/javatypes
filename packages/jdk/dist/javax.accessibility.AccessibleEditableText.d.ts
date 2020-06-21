declare namespace javax {
    namespace accessibility {
        /**
         * <P>The AccessibleEditableText interface should be implemented by all
         * classes that present editable textual information on the display.
         * Along with the AccessibleText interface, this interface provides
         * the standard mechanism for an assistive technology to access
         * that text via its content, attributes, and spatial location.
         * Applications can determine if an object supports the AccessibleEditableText
         * interface by first obtaining its AccessibleContext (see {@link Accessible})
         * and then calling the {@link AccessibleContext#getAccessibleEditableText}
         * method of AccessibleContext.  If the return value is not null, the object
         * supports this interface.
         * @see Accessible
         * @see Accessible#getAccessibleContext
         * @see AccessibleContext
         * @see AccessibleContext#getAccessibleText
         * @see AccessibleContext#getAccessibleEditableText
         * @author Lynn Monsanto
         * @since 1.4
         */
        // @ts-ignore
        interface AccessibleEditableText extends javax.accessibility.AccessibleText {
            /**
             * Sets the text contents to the specified string.
             * @param s the string to set the text contents
             */
            // @ts-ignore
            setTextContents(s: java.lang.String | string): void
            /**
             * Inserts the specified string at the given index/
             * @param index the index in the text where the string will
             *  be inserted
             * @param s the string to insert in the text
             */
            // @ts-ignore
            insertTextAtIndex(index: number /*int*/, s: java.lang.String | string): void
            /**
             * Returns the text string between two indices.
             * @param startIndex the starting index in the text
             * @param endIndex the ending index in the text
             * @return the text string between the indices
             */
            // @ts-ignore
            getTextRange(startIndex: number /*int*/, endIndex: number /*int*/): string
            /**
             * Deletes the text between two indices
             * @param startIndex the starting index in the text
             * @param endIndex the ending index in the text
             */
            // @ts-ignore
            delete(startIndex: number /*int*/, endIndex: number /*int*/): void
            /**
             * Cuts the text between two indices into the system clipboard.
             * @param startIndex the starting index in the text
             * @param endIndex the ending index in the text
             */
            // @ts-ignore
            cut(startIndex: number /*int*/, endIndex: number /*int*/): void
            /**
             * Pastes the text from the system clipboard into the text
             * starting at the specified index.
             * @param startIndex the starting index in the text
             */
            // @ts-ignore
            paste(startIndex: number /*int*/): void
            /**
             * Replaces the text between two indices with the specified
             * string.
             * @param startIndex the starting index in the text
             * @param endIndex the ending index in the text
             * @param s the string to replace the text between two indices
             */
            // @ts-ignore
            replaceText(startIndex: number /*int*/, endIndex: number /*int*/, s: java.lang.String | string): void
            /**
             * Selects the text between two indices.
             * @param startIndex the starting index in the text
             * @param endIndex the ending index in the text
             */
            // @ts-ignore
            selectText(startIndex: number /*int*/, endIndex: number /*int*/): void
            /**
             * Sets attributes for the text between two indices.
             * @param startIndex the starting index in the text
             * @param endIndex the ending index in the text
             * @param as the attribute set
             * @see AttributeSet
             */
            // @ts-ignore
            setAttributes(startIndex: number /*int*/, endIndex: number /*int*/, as: javax.swing.text.AttributeSet): void
        }
    }
}
