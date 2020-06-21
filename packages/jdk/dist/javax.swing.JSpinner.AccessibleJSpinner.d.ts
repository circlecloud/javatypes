declare namespace javax {
    namespace swing {
        namespace JSpinner {
            /**
             * <code>AccessibleJSpinner</code> implements accessibility
             * support for the <code>JSpinner</code> class.
             * @since 1.5
             */
            // @ts-ignore
            class AccessibleJSpinner extends javax.swing.JComponent.AccessibleJComponent implements javax.accessibility.AccessibleValue, javax.accessibility.AccessibleAction, javax.accessibility.AccessibleText, javax.accessibility.AccessibleEditableText, javax.swing.event.ChangeListener {
                /**
                 * AccessibleJSpinner constructor
                 */
                // @ts-ignore
                constructor()
                /**
                 * Invoked when the target of the listener has changed its state.
                 * @param e  a <code>ChangeEvent</code> object. Must not be null.
                 * @throws NullPointerException if the parameter is null.
                 */
                // @ts-ignore
                public stateChanged(e: javax.swing.event.ChangeEvent): void
                /**
                 * Gets the role of this object.  The role of the object is the generic
                 * purpose or use of the class of this object.  For example, the role
                 * of a push button is AccessibleRole.PUSH_BUTTON.  The roles in
                 * AccessibleRole are provided so component developers can pick from
                 * a set of predefined roles.  This enables assistive technologies to
                 * provide a consistent interface to various tweaked subclasses of
                 * components (e.g., use AccessibleRole.PUSH_BUTTON for all components
                 * that act like a push button) as well as distinguish between subclasses
                 * that behave differently (e.g., AccessibleRole.CHECK_BOX for check boxes
                 * and AccessibleRole.RADIO_BUTTON for radio buttons).
                 * <p>Note that the AccessibleRole class is also extensible, so
                 * custom component developers can define their own AccessibleRole's
                 * if the set of predefined roles is inadequate.
                 * @return an instance of AccessibleRole describing the role of the object
                 * @see AccessibleRole
                 */
                // @ts-ignore
                public getAccessibleRole(): javax.accessibility.AccessibleRole
                /**
                 * Returns the number of accessible children of the object.
                 * @return the number of accessible children of the object.
                 */
                // @ts-ignore
                public getAccessibleChildrenCount(): number /*int*/
                /**
                 * Returns the specified Accessible child of the object.  The Accessible
                 * children of an Accessible object are zero-based, so the first child
                 * of an Accessible child is at index 0, the second child is at index 1,
                 * and so on.
                 * @param i zero-based index of child
                 * @return the Accessible child of the object
                 * @see #getAccessibleChildrenCount
                 */
                // @ts-ignore
                public getAccessibleChild(i: number /*int*/): javax.accessibility.Accessible
                /**
                 * Gets the AccessibleAction associated with this object that supports
                 * one or more actions.
                 * @return AccessibleAction if supported by object; else return null
                 * @see AccessibleAction
                 */
                // @ts-ignore
                public getAccessibleAction(): javax.accessibility.AccessibleAction
                /**
                 * Gets the AccessibleText associated with this object presenting
                 * text on the display.
                 * @return AccessibleText if supported by object; else return null
                 * @see AccessibleText
                 */
                // @ts-ignore
                public getAccessibleText(): javax.accessibility.AccessibleText
                /**
                 * Gets the AccessibleValue associated with this object.
                 * @return AccessibleValue if supported by object; else return null
                 * @see AccessibleValue
                 */
                // @ts-ignore
                public getAccessibleValue(): javax.accessibility.AccessibleValue
                /**
                 * Get the value of this object as a Number.  If the value has not been
                 * set, the return value will be null.
                 * @return value of the object
                 * @see #setCurrentAccessibleValue
                 */
                // @ts-ignore
                public getCurrentAccessibleValue(): java.lang.Number
                /**
                 * Set the value of this object as a Number.
                 * @param n the value to set for this object
                 * @return true if the value was set; else False
                 * @see #getCurrentAccessibleValue
                 */
                // @ts-ignore
                public setCurrentAccessibleValue(n: java.lang.Number): boolean
                /**
                 * Get the minimum value of this object as a Number.
                 * @return Minimum value of the object; null if this object does not
                 *  have a minimum value
                 * @see #getMaximumAccessibleValue
                 */
                // @ts-ignore
                public getMinimumAccessibleValue(): java.lang.Number
                /**
                 * Get the maximum value of this object as a Number.
                 * @return Maximum value of the object; null if this object does not
                 *  have a maximum value
                 * @see #getMinimumAccessibleValue
                 */
                // @ts-ignore
                public getMaximumAccessibleValue(): java.lang.Number
                /**
                 * Returns the number of accessible actions available in this object
                 * If there are more than one, the first one is considered the "default"
                 * action of the object.
                 * Two actions are supported: AccessibleAction.INCREMENT which
                 * increments the spinner value and AccessibleAction.DECREMENT
                 * which decrements the spinner value
                 * @return the zero-based number of Actions in this object
                 */
                // @ts-ignore
                public getAccessibleActionCount(): number /*int*/
                /**
                 * Returns a description of the specified action of the object.
                 * @param i zero-based index of the actions
                 * @return a String description of the action
                 * @see #getAccessibleActionCount
                 */
                // @ts-ignore
                public getAccessibleActionDescription(i: number /*int*/): string
                /**
                 * Performs the specified Action on the object
                 * @param i zero-based index of actions. The first action
                 *  (index 0) is AccessibleAction.INCREMENT and the second
                 *  action (index 1) is AccessibleAction.DECREMENT.
                 * @return true if the action was performed; otherwise false.
                 * @see #getAccessibleActionCount
                 */
                // @ts-ignore
                public doAccessibleAction(i: number /*int*/): boolean
                /**
                 * Given a point in local coordinates, return the zero-based index
                 * of the character under that Point.  If the point is invalid,
                 * this method returns -1.
                 * @param p the Point in local coordinates
                 * @return the zero-based index of the character under Point p; if
                 *  Point is invalid return -1.
                 */
                // @ts-ignore
                public getIndexAtPoint(p: java.awt.Point): number /*int*/
                /**
                 * Determines the bounding box of the character at the given
                 * index into the string.  The bounds are returned in local
                 * coordinates.  If the index is invalid an empty rectangle is
                 * returned.
                 * @param i the index into the String
                 * @return the screen coordinates of the character's bounding box,
                 *  if index is invalid return an empty rectangle.
                 */
                // @ts-ignore
                public getCharacterBounds(i: number /*int*/): java.awt.Rectangle
                /**
                 * Returns the number of characters (valid indicies)
                 * @return the number of characters
                 */
                // @ts-ignore
                public getCharCount(): number /*int*/
                /**
                 * Returns the zero-based offset of the caret.
                 * Note: That to the right of the caret will have the same index
                 * value as the offset (the caret is between two characters).
                 * @return the zero-based offset of the caret.
                 */
                // @ts-ignore
                public getCaretPosition(): number /*int*/
                /**
                 * Returns the String at a given index.
                 * @param part the CHARACTER, WORD, or SENTENCE to retrieve
                 * @param index an index within the text
                 * @return the letter, word, or sentence
                 */
                // @ts-ignore
                public getAtIndex(part: number /*int*/, index: number /*int*/): string
                /**
                 * Returns the String after a given index.
                 * @param part the CHARACTER, WORD, or SENTENCE to retrieve
                 * @param index an index within the text
                 * @return the letter, word, or sentence
                 */
                // @ts-ignore
                public getAfterIndex(part: number /*int*/, index: number /*int*/): string
                /**
                 * Returns the String before a given index.
                 * @param part the CHARACTER, WORD, or SENTENCE to retrieve
                 * @param index an index within the text
                 * @return the letter, word, or sentence
                 */
                // @ts-ignore
                public getBeforeIndex(part: number /*int*/, index: number /*int*/): string
                /**
                 * Returns the AttributeSet for a given character at a given index
                 * @param i the zero-based index into the text
                 * @return the AttributeSet of the character
                 */
                // @ts-ignore
                public getCharacterAttribute(i: number /*int*/): javax.swing.text.AttributeSet
                /**
                 * Returns the start offset within the selected text.
                 * If there is no selection, but there is
                 * a caret, the start and end offsets will be the same.
                 * @return the index into the text of the start of the selection
                 */
                // @ts-ignore
                public getSelectionStart(): number /*int*/
                /**
                 * Returns the end offset within the selected text.
                 * If there is no selection, but there is
                 * a caret, the start and end offsets will be the same.
                 * @return the index into the text of the end of the selection
                 */
                // @ts-ignore
                public getSelectionEnd(): number /*int*/
                /**
                 * Returns the portion of the text that is selected.
                 * @return the String portion of the text that is selected
                 */
                // @ts-ignore
                public getSelectedText(): string
                /**
                 * Sets the text contents to the specified string.
                 * @param s the string to set the text contents
                 */
                // @ts-ignore
                public setTextContents(s: java.lang.String | string): void
                /**
                 * Inserts the specified string at the given index/
                 * @param index the index in the text where the string will
                 *  be inserted
                 * @param s the string to insert in the text
                 */
                // @ts-ignore
                public insertTextAtIndex(index: number /*int*/, s: java.lang.String | string): void
                /**
                 * Returns the text string between two indices.
                 * @param startIndex the starting index in the text
                 * @param endIndex the ending index in the text
                 * @return the text string between the indices
                 */
                // @ts-ignore
                public getTextRange(startIndex: number /*int*/, endIndex: number /*int*/): string
                /**
                 * Deletes the text between two indices
                 * @param startIndex the starting index in the text
                 * @param endIndex the ending index in the text
                 */
                // @ts-ignore
                public delete(startIndex: number /*int*/, endIndex: number /*int*/): void
                /**
                 * Cuts the text between two indices into the system clipboard.
                 * @param startIndex the starting index in the text
                 * @param endIndex the ending index in the text
                 */
                // @ts-ignore
                public cut(startIndex: number /*int*/, endIndex: number /*int*/): void
                /**
                 * Pastes the text from the system clipboard into the text
                 * starting at the specified index.
                 * @param startIndex the starting index in the text
                 */
                // @ts-ignore
                public paste(startIndex: number /*int*/): void
                /**
                 * Replaces the text between two indices with the specified
                 * string.
                 * @param startIndex the starting index in the text
                 * @param endIndex the ending index in the text
                 * @param s the string to replace the text between two indices
                 */
                // @ts-ignore
                public replaceText(startIndex: number /*int*/, endIndex: number /*int*/, s: java.lang.String | string): void
                /**
                 * Selects the text between two indices.
                 * @param startIndex the starting index in the text
                 * @param endIndex the ending index in the text
                 */
                // @ts-ignore
                public selectText(startIndex: number /*int*/, endIndex: number /*int*/): void
                /**
                 * Sets attributes for the text between two indices.
                 * @param startIndex the starting index in the text
                 * @param endIndex the ending index in the text
                 * @param as the attribute set
                 * @see AttributeSet
                 */
                // @ts-ignore
                public setAttributes(startIndex: number /*int*/, endIndex: number /*int*/, as: javax.swing.text.AttributeSet): void
            }
        }
    }
}
