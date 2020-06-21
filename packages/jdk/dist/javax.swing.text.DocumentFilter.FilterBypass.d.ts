declare namespace javax {
    namespace swing {
        namespace text {
            namespace DocumentFilter {
                /**
                 * Used as a way to circumvent calling back into the Document to
                 * change it. Document implementations that wish to support
                 * a DocumentFilter must provide an implementation that will
                 * not callback into the DocumentFilter when the following methods
                 * are invoked from the DocumentFilter.
                 * @since 1.4
                 */
                // @ts-ignore
                abstract class FilterBypass extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Returns the Document the mutation is occurring on.
                     * @return Document that remove/insertString will operate on
                     */
                    // @ts-ignore
                    public abstract getDocument(): javax.swing.text.Document
                    /**
                     * Removes the specified region of text, bypassing the
                     * DocumentFilter.
                     * @param offset the offset from the beginning &gt;= 0
                     * @param length the number of characters to remove &gt;= 0
                     * @exception BadLocationException some portion of the removal range
                     *    was not a valid part of the document.  The location in the
                     *    exception is the first bad position encountered.
                     */
                    // @ts-ignore
                    public abstract remove(offset: number /*int*/, length: number /*int*/): void
                    /**
                     * Inserts the specified text, bypassing the
                     * DocumentFilter.
                     * @param offset  the offset into the document to insert the
                     *    content &gt;= 0. All positions that track change at or after the
                     *    given location will move.
                     * @param string the string to insert
                     * @param attr the attributes to associate with the inserted
                     *    content.  This may be null if there are no attributes.
                     * @exception BadLocationException  the given insert position is not a
                     *    valid position within the document
                     */
                    // @ts-ignore
                    public abstract insertString(offset: number /*int*/, string: java.lang.String | string, attr: javax.swing.text.AttributeSet): void
                    /**
                     * Deletes the region of text from <code>offset</code> to
                     * <code>offset + length</code>, and replaces it with
                     * <code>text</code>.
                     * @param offset Location in Document
                     * @param length Length of text to delete
                     * @param string Text to insert, null indicates no text to insert
                     * @param attrs AttributeSet indicating attributes of inserted text,
                     *               null is legal.
                     * @exception BadLocationException  the given insert is not a
                     *    valid position within the document
                     */
                    // @ts-ignore
                    public abstract replace(offset: number /*int*/, length: number /*int*/, string: java.lang.String | string, attrs: javax.swing.text.AttributeSet): void
                }
            }
        }
    }
}
