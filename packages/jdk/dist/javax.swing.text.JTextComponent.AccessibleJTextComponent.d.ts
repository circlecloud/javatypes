declare namespace javax {
    namespace swing {
        namespace text {
            namespace JTextComponent {
                /**
                 * This class implements accessibility support for the
                 * <code>JTextComponent</code> class.  It provides an implementation of
                 * the Java Accessibility API appropriate to menu user-interface elements.
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
                class AccessibleJTextComponent extends javax.swing.JComponent.AccessibleJComponent implements javax.accessibility.AccessibleText, javax.swing.event.CaretListener, javax.swing.event.DocumentListener, javax.accessibility.AccessibleAction, javax.accessibility.AccessibleEditableText, javax.accessibility.AccessibleExtendedText {
                    /**
                     * Constructs an AccessibleJTextComponent.  Adds a listener to track
                     * caret change.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Handles caret updates (fire appropriate property change event,
                     * which are AccessibleContext.ACCESSIBLE_CARET_PROPERTY and
                     * AccessibleContext.ACCESSIBLE_SELECTION_PROPERTY).
                     * This keeps track of the dot position internally.  When the caret
                     * moves, the internal position is updated after firing the event.
                     * @param e the CaretEvent
                     */
                    // @ts-ignore
                    caretUpdate(e: javax.swing.event.CaretEvent): void
                    /**
                     * Handles document insert (fire appropriate property change event
                     * which is AccessibleContext.ACCESSIBLE_TEXT_PROPERTY).
                     * This tracks the changed offset via the event.
                     * @param e the DocumentEvent
                     */
                    // @ts-ignore
                    insertUpdate(e: javax.swing.event.DocumentEvent): void
                    /**
                     * Handles document remove (fire appropriate property change event,
                     * which is AccessibleContext.ACCESSIBLE_TEXT_PROPERTY).
                     * This tracks the changed offset via the event.
                     * @param e the DocumentEvent
                     */
                    // @ts-ignore
                    removeUpdate(e: javax.swing.event.DocumentEvent): void
                    /**
                     * Handles document remove (fire appropriate property change event,
                     * which is AccessibleContext.ACCESSIBLE_TEXT_PROPERTY).
                     * This tracks the changed offset via the event.
                     * @param e the DocumentEvent
                     */
                    // @ts-ignore
                    changedUpdate(e: javax.swing.event.DocumentEvent): void
                    /**
                     * Gets the state set of the JTextComponent.
                     * The AccessibleStateSet of an object is composed of a set of
                     * unique AccessibleState's.  A change in the AccessibleStateSet
                     * of an object will cause a PropertyChangeEvent to be fired
                     * for the AccessibleContext.ACCESSIBLE_STATE_PROPERTY property.
                     * @return an instance of AccessibleStateSet containing the
                     *  current state set of the object
                     * @see AccessibleStateSet
                     * @see AccessibleState
                     * @see #addPropertyChangeListener
                     */
                    // @ts-ignore
                    getAccessibleStateSet(): javax.accessibility.AccessibleStateSet
                    /**
                     * Gets the role of this object.
                     * @return an instance of AccessibleRole describing the role of the
                     *  object (AccessibleRole.TEXT)
                     * @see AccessibleRole
                     */
                    // @ts-ignore
                    getAccessibleRole(): javax.accessibility.AccessibleRole
                    /**
                     * Get the AccessibleText associated with this object.  In the
                     * implementation of the Java Accessibility API for this class,
                     * return this object, which is responsible for implementing the
                     * AccessibleText interface on behalf of itself.
                     * @return this object
                     */
                    // @ts-ignore
                    getAccessibleText(): javax.accessibility.AccessibleText
                    /**
                     * Given a point in local coordinates, return the zero-based index
                     * of the character under that Point.  If the point is invalid,
                     * this method returns -1.
                     * @param p the Point in local coordinates
                     * @return the zero-based index of the character under Point p.
                     */
                    // @ts-ignore
                    getIndexAtPoint(p: java.awt.Point): int
                    /**
                     * Determines the bounding box of the character at the given
                     * index into the string.  The bounds are returned in local
                     * coordinates.  If the index is invalid a null rectangle
                     * is returned.
                     * The screen coordinates returned are "unscrolled coordinates"
                     * if the JTextComponent is contained in a JScrollPane in which
                     * case the resulting rectangle should be composed with the parent
                     * coordinates.  A good algorithm to use is:
                     * <pre>
                     * Accessible a:
                     * AccessibleText at = a.getAccessibleText();
                     * AccessibleComponent ac = a.getAccessibleComponent();
                     * Rectangle r = at.getCharacterBounds();
                     * Point p = ac.getLocation();
                     * r.x += p.x;
                     * r.y += p.y;
                     * </pre>
                     * Note: the JTextComponent must have a valid size (e.g. have
                     * been added to a parent container whose ancestor container
                     * is a valid top-level window) for this method to be able
                     * to return a meaningful (non-null) value.
                     * @param i the index into the String &ge; 0
                     * @return the screen coordinates of the character's bounding box
                     */
                    // @ts-ignore
                    getCharacterBounds(i: number /*int*/): java.awt.Rectangle
                    /**
                     * Returns the number of characters (valid indices)
                     * @return the number of characters &ge; 0
                     */
                    // @ts-ignore
                    getCharCount(): int
                    /**
                     * Returns the zero-based offset of the caret.
                     * Note: The character to the right of the caret will have the
                     * same index value as the offset (the caret is between
                     * two characters).
                     * @return the zero-based offset of the caret.
                     */
                    // @ts-ignore
                    getCaretPosition(): int
                    /**
                     * Returns the AttributeSet for a given character (at a given index).
                     * @param i the zero-based index into the text
                     * @return the AttributeSet of the character
                     */
                    // @ts-ignore
                    getCharacterAttribute(i: number /*int*/): javax.swing.text.AttributeSet
                    /**
                     * Returns the start offset within the selected text.
                     * If there is no selection, but there is
                     * a caret, the start and end offsets will be the same.
                     * Return 0 if the text is empty, or the caret position
                     * if no selection.
                     * @return the index into the text of the start of the selection &ge; 0
                     */
                    // @ts-ignore
                    getSelectionStart(): int
                    /**
                     * Returns the end offset within the selected text.
                     * If there is no selection, but there is
                     * a caret, the start and end offsets will be the same.
                     * Return 0 if the text is empty, or the caret position
                     * if no selection.
                     * @return the index into the text of the end of the selection &ge; 0
                     */
                    // @ts-ignore
                    getSelectionEnd(): int
                    /**
                     * Returns the portion of the text that is selected.
                     * @return the text, null if no selection
                     */
                    // @ts-ignore
                    getSelectedText(): java.lang.String
                    /**
                     * Returns the String at a given index. Whitespace
                     * between words is treated as a word.
                     * @param part the CHARACTER, WORD, or SENTENCE to retrieve
                     * @param index an index within the text
                     * @return the letter, word, or sentence.
                     */
                    // @ts-ignore
                    getAtIndex(part: number /*int*/, index: number /*int*/): java.lang.String
                    /**
                     * Returns the String after a given index. Whitespace
                     * between words is treated as a word.
                     * @param part the CHARACTER, WORD, or SENTENCE to retrieve
                     * @param index an index within the text
                     * @return the letter, word, or sentence.
                     */
                    // @ts-ignore
                    getAfterIndex(part: number /*int*/, index: number /*int*/): java.lang.String
                    /**
                     * Returns the String before a given index. Whitespace
                     * between words is treated a word.
                     * @param part the CHARACTER, WORD, or SENTENCE to retrieve
                     * @param index an index within the text
                     * @return the letter, word, or sentence.
                     */
                    // @ts-ignore
                    getBeforeIndex(part: number /*int*/, index: number /*int*/): java.lang.String
                    /**
                     * Returns the AccessibleEditableText interface for
                     * this text component.
                     * @return the AccessibleEditableText interface
                     * @since 1.4
                     */
                    // @ts-ignore
                    getAccessibleEditableText(): javax.accessibility.AccessibleEditableText
                    /**
                     * Sets the text contents to the specified string.
                     * @param s the string to set the text contents
                     * @since 1.4
                     */
                    // @ts-ignore
                    setTextContents(s: string): void
                    /**
                     * Inserts the specified string at the given index
                     * @param index the index in the text where the string will
                     *  be inserted
                     * @param s the string to insert in the text
                     * @since 1.4
                     */
                    // @ts-ignore
                    insertTextAtIndex(index: number /*int*/, s: string): void
                    /**
                     * Returns the text string between two indices.
                     * @param startIndex the starting index in the text
                     * @param endIndex the ending index in the text
                     * @return the text string between the indices
                     * @since 1.4
                     */
                    // @ts-ignore
                    getTextRange(startIndex: number /*int*/, endIndex: number /*int*/): java.lang.String
                    /**
                     * Deletes the text between two indices
                     * @param startIndex the starting index in the text
                     * @param endIndex the ending index in the text
                     * @since 1.4
                     */
                    // @ts-ignore
                    delete(startIndex: number /*int*/, endIndex: number /*int*/): void
                    /**
                     * Cuts the text between two indices into the system clipboard.
                     * @param startIndex the starting index in the text
                     * @param endIndex the ending index in the text
                     * @since 1.4
                     */
                    // @ts-ignore
                    cut(startIndex: number /*int*/, endIndex: number /*int*/): void
                    /**
                     * Pastes the text from the system clipboard into the text
                     * starting at the specified index.
                     * @param startIndex the starting index in the text
                     * @since 1.4
                     */
                    // @ts-ignore
                    paste(startIndex: number /*int*/): void
                    /**
                     * Replaces the text between two indices with the specified
                     * string.
                     * @param startIndex the starting index in the text
                     * @param endIndex the ending index in the text
                     * @param s the string to replace the text between two indices
                     * @since 1.4
                     */
                    // @ts-ignore
                    replaceText(startIndex: number /*int*/, endIndex: number /*int*/, s: string): void
                    /**
                     * Selects the text between two indices.
                     * @param startIndex the starting index in the text
                     * @param endIndex the ending index in the text
                     * @since 1.4
                     */
                    // @ts-ignore
                    selectText(startIndex: number /*int*/, endIndex: number /*int*/): void
                    /**
                     * Sets attributes for the text between two indices.
                     * @param startIndex the starting index in the text
                     * @param endIndex the ending index in the text
                     * @param as the attribute set
                     * @see AttributeSet
                     * @since 1.4
                     */
                    // @ts-ignore
                    setAttributes(startIndex: number /*int*/, endIndex: number /*int*/, as: javax.swing.text.AttributeSet): void
                    /**
                     * Returns the <code>AccessibleTextSequence</code> at a given
                     * <code>index</code>.
                     * @param part the <code>CHARACTER</code>, <code>WORD</code>,
                     *  <code>SENTENCE</code>, <code>LINE</code> or
                     *  <code>ATTRIBUTE_RUN</code> to retrieve
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
                    getTextSequenceAt(part: number /*int*/, index: number /*int*/): javax.accessibility.AccessibleTextSequence
                    /**
                     * Returns the <code>AccessibleTextSequence</code> after a given
                     * <code>index</code>.
                     * @param part the <code>CHARACTER</code>, <code>WORD</code>,
                     *  <code>SENTENCE</code>, <code>LINE</code> or
                     *  <code>ATTRIBUTE_RUN</code> to retrieve
                     * @param index an index within the text
                     * @return an <code>AccessibleTextSequence</code> specifying the text
                     *  if <code>part</code> and <code>index</code> are valid.  Otherwise,
                     *  <code>null</code> is returned
                     * @see javax.accessibility.AccessibleText#CHARACTER
                     * @see javax.accessibility.AccessibleText#WORD
                     * @see javax.accessibility.AccessibleText#SENTENCE
                     * @see javax.accessibility.AccessibleExtendedText#LINE
                     * @see javax.accessibility.AccessibleExtendedText#ATTRIBUTE_RUN
                     * @since 1.6
                     */
                    // @ts-ignore
                    getTextSequenceAfter(part: number /*int*/, index: number /*int*/): javax.accessibility.AccessibleTextSequence
                    /**
                     * Returns the <code>AccessibleTextSequence</code> before a given
                     * <code>index</code>.
                     * @param part the <code>CHARACTER</code>, <code>WORD</code>,
                     *  <code>SENTENCE</code>, <code>LINE</code> or
                     *  <code>ATTRIBUTE_RUN</code> to retrieve
                     * @param index an index within the text
                     * @return an <code>AccessibleTextSequence</code> specifying the text
                     *  if <code>part</code> and <code>index</code> are valid.  Otherwise,
                     *  <code>null</code> is returned
                     * @see javax.accessibility.AccessibleText#CHARACTER
                     * @see javax.accessibility.AccessibleText#WORD
                     * @see javax.accessibility.AccessibleText#SENTENCE
                     * @see javax.accessibility.AccessibleExtendedText#LINE
                     * @see javax.accessibility.AccessibleExtendedText#ATTRIBUTE_RUN
                     * @since 1.6
                     */
                    // @ts-ignore
                    getTextSequenceBefore(part: number /*int*/, index: number /*int*/): javax.accessibility.AccessibleTextSequence
                    /**
                     * Returns the <code>Rectangle</code> enclosing the text between
                     * two indicies.
                     * @param startIndex the start index in the text
                     * @param endIndex the end index in the text
                     * @return the bounding rectangle of the text if the indices are valid.
                     *  Otherwise, <code>null</code> is returned
                     * @since 1.6
                     */
                    // @ts-ignore
                    getTextBounds(startIndex: number /*int*/, endIndex: number /*int*/): java.awt.Rectangle
                    // @ts-ignore
                    getAccessibleAction(): javax.accessibility.AccessibleAction
                    /**
                     * Returns the number of accessible actions available in this object
                     * If there are more than one, the first one is considered the
                     * "default" action of the object.
                     * @return the zero-based number of Actions in this object
                     * @since 1.4
                     */
                    // @ts-ignore
                    getAccessibleActionCount(): int
                    /**
                     * Returns a description of the specified action of the object.
                     * @param i zero-based index of the actions
                     * @return a String description of the action
                     * @see #getAccessibleActionCount
                     * @since 1.4
                     */
                    // @ts-ignore
                    getAccessibleActionDescription(i: number /*int*/): java.lang.String
                    /**
                     * Performs the specified Action on the object
                     * @param i zero-based index of actions
                     * @return true if the action was performed; otherwise false.
                     * @see #getAccessibleActionCount
                     * @since 1.4
                     */
                    // @ts-ignore
                    doAccessibleAction(i: number /*int*/): boolean
                }
            }
        }
    }
}
