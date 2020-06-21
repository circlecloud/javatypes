declare namespace javax {
    namespace swing {
        namespace JPasswordField {
            /**
             * This class implements accessibility support for the
             * <code>JPasswordField</code> class.  It provides an implementation of the
             * Java Accessibility API appropriate to password field user-interface
             * elements.
             * <p>
             * <strong>Warning:</strong>
             * Serialized objects of this class will not be compatible with
             * future Swing releases. The current serialization support is
             * appropriate for short term storage or RMI between applications running
             * the same version of Swing.  As of 1.4, support for long term storage
             * of all JavaBeans&trade;
             * has been added to the <code>java.beans</code> package.
             * Please see {@link java.beans.XMLEncoder}.
             */
            // @ts-ignore
            class AccessibleJPasswordField extends javax.swing.JTextField.AccessibleJTextField {
                // @ts-ignore
                constructor()
                /**
                 * Gets the role of this object.
                 * @return an instance of AccessibleRole describing the role of the
                 *    object (AccessibleRole.PASSWORD_TEXT)
                 * @see AccessibleRole
                 */
                // @ts-ignore
                public getAccessibleRole(): javax.accessibility.AccessibleRole
                /**
                 * Gets the <code>AccessibleText</code> for the <code>JPasswordField</code>.
                 * The returned object also implements the
                 * <code>AccessibleExtendedText</code> interface.
                 * @return <code>AccessibleText</code> for the JPasswordField
                 * @see javax.accessibility.AccessibleContext
                 * @see javax.accessibility.AccessibleContext#getAccessibleText
                 * @see javax.accessibility.AccessibleText
                 * @see javax.accessibility.AccessibleExtendedText
                 * @since 1.6
                 */
                // @ts-ignore
                public getAccessibleText(): javax.accessibility.AccessibleText
                /**
                 * Returns the <code>String</code> at a given <code>index</code>.
                 * @param part the <code>CHARACTER</code>, <code>WORD</code> or
                 *  <code>SENTENCE</code> to retrieve
                 * @param index an index within the text
                 * @return a <code>String</code> if <code>part</code> and
                 *  <code>index</code> are valid.
                 *  Otherwise, <code>null</code> is returned
                 * @see javax.accessibility.AccessibleText#CHARACTER
                 * @see javax.accessibility.AccessibleText#WORD
                 * @see javax.accessibility.AccessibleText#SENTENCE
                 * @since 1.6
                 */
                // @ts-ignore
                public getAtIndex(part: number /*int*/, index: number /*int*/): string
                /**
                 * Returns the <code>String</code> after a given <code>index</code>.
                 * @param part the <code>CHARACTER</code>, <code>WORD</code> or
                 *  <code>SENTENCE</code> to retrieve
                 * @param index an index within the text
                 * @return a <code>String</code> if <code>part</code> and
                 *  <code>index</code> are valid.
                 *  Otherwise, <code>null</code> is returned
                 * @see javax.accessibility.AccessibleText#CHARACTER
                 * @see javax.accessibility.AccessibleText#WORD
                 * @see javax.accessibility.AccessibleText#SENTENCE
                 * @since 1.6
                 */
                // @ts-ignore
                public getAfterIndex(part: number /*int*/, index: number /*int*/): string
                /**
                 * Returns the <code>String</code> before a given <code>index</code>.
                 * @param part the <code>CHARACTER</code>, <code>WORD</code> or
                 *  <code>SENTENCE</code> to retrieve
                 * @param index an index within the text
                 * @return a <code>String</code> if <code>part</code> and
                 *  <code>index</code> are valid.
                 *  Otherwise, <code>null</code> is returned
                 * @see javax.accessibility.AccessibleText#CHARACTER
                 * @see javax.accessibility.AccessibleText#WORD
                 * @see javax.accessibility.AccessibleText#SENTENCE
                 * @since 1.6
                 */
                // @ts-ignore
                public getBeforeIndex(part: number /*int*/, index: number /*int*/): string
                /**
                 * Returns the text between two <code>indices</code>.
                 * @param startIndex the start index in the text
                 * @param endIndex the end index in the text
                 * @return the text string if the indices are valid.
                 *  Otherwise, <code>null</code> is returned
                 * @since 1.6
                 */
                // @ts-ignore
                public getTextRange(startIndex: number /*int*/, endIndex: number /*int*/): string
                /**
                 * Returns the <code>AccessibleTextSequence</code> at a given
                 * <code>index</code>.
                 * @param part the <code>CHARACTER</code>, <code>WORD</code>,
                 *  <code>SENTENCE</code>, <code>LINE</code> or <code>ATTRIBUTE_RUN</code> to
                 *  retrieve
                 * @param index an index within the text
                 * @return an <code>AccessibleTextSequence</code> specifying the text if
                 *  <code>part</code> and <code>index</code> are valid.  Otherwise,
                 *  <code>null</code> is returned
                 * @see javax.accessibility.AccessibleText#CHARACTER
                 * @see javax.accessibility.AccessibleText#WORD
                 * @see javax.accessibility.AccessibleText#SENTENCE
                 * @see javax.accessibility.AccessibleExtendedText#LINE
                 * @see javax.accessibility.AccessibleExtendedText#ATTRIBUTE_RUN
                 * @since 1.6
                 */
                // @ts-ignore
                public getTextSequenceAt(part: number /*int*/, index: number /*int*/): javax.accessibility.AccessibleTextSequence
                /**
                 * Returns the <code>AccessibleTextSequence</code> after a given
                 * <code>index</code>.
                 * @param part the <code>CHARACTER</code>, <code>WORD</code>,
                 *  <code>SENTENCE</code>, <code>LINE</code> or <code>ATTRIBUTE_RUN</code> to
                 *  retrieve
                 * @param index an index within the text
                 * @return an <code>AccessibleTextSequence</code> specifying the text if
                 *  <code>part</code> and <code>index</code> are valid.  Otherwise,
                 *  <code>null</code> is returned
                 * @see javax.accessibility.AccessibleText#CHARACTER
                 * @see javax.accessibility.AccessibleText#WORD
                 * @see javax.accessibility.AccessibleText#SENTENCE
                 * @see javax.accessibility.AccessibleExtendedText#LINE
                 * @see javax.accessibility.AccessibleExtendedText#ATTRIBUTE_RUN
                 * @since 1.6
                 */
                // @ts-ignore
                public getTextSequenceAfter(part: number /*int*/, index: number /*int*/): javax.accessibility.AccessibleTextSequence
                /**
                 * Returns the <code>AccessibleTextSequence</code> before a given
                 * <code>index</code>.
                 * @param part the <code>CHARACTER</code>, <code>WORD</code>,
                 *  <code>SENTENCE</code>, <code>LINE</code> or <code>ATTRIBUTE_RUN</code> to
                 *  retrieve
                 * @param index an index within the text
                 * @return an <code>AccessibleTextSequence</code> specifying the text if
                 *  <code>part</code> and <code>index</code> are valid.  Otherwise,
                 *  <code>null</code> is returned
                 * @see javax.accessibility.AccessibleText#CHARACTER
                 * @see javax.accessibility.AccessibleText#WORD
                 * @see javax.accessibility.AccessibleText#SENTENCE
                 * @see javax.accessibility.AccessibleExtendedText#LINE
                 * @see javax.accessibility.AccessibleExtendedText#ATTRIBUTE_RUN
                 * @since 1.6
                 */
                // @ts-ignore
                public getTextSequenceBefore(part: number /*int*/, index: number /*int*/): javax.accessibility.AccessibleTextSequence
            }
        }
    }
}
