declare namespace javax {
    namespace swing {
        namespace text {
            namespace AbstractDocument {
                /**
                 * Interface to describe a sequence of character content that
                 * can be edited.  Implementations may or may not support a
                 * history mechanism which will be reflected by whether or not
                 * mutations return an UndoableEdit implementation.
                 * @see AbstractDocument
                 */
                // @ts-ignore
                interface Content {
                    /**
                     * Creates a position within the content that will
                     * track change as the content is mutated.
                     * @param offset the offset in the content &gt;= 0
                     * @return a Position
                     * @exception BadLocationException for an invalid offset
                     */
                    // @ts-ignore
                    createPosition(offset: number /*int*/): javax.swing.text.Position
                    /**
                     * Current length of the sequence of character content.
                     * @return the length &gt;= 0
                     */
                    // @ts-ignore
                    length(): number /*int*/
                    /**
                     * Inserts a string of characters into the sequence.
                     * @param where   offset into the sequence to make the insertion &gt;= 0
                     * @param str     string to insert
                     * @return if the implementation supports a history mechanism,
                     *     a reference to an <code>Edit</code> implementation will be returned,
                     *     otherwise returns <code>null</code>
                     * @exception BadLocationException  thrown if the area covered by
                     *    the arguments is not contained in the character sequence
                     */
                    // @ts-ignore
                    insertString(where: number /*int*/, str: java.lang.String | string): javax.swing.undo.UndoableEdit
                    /**
                     * Removes some portion of the sequence.
                     * @param where   The offset into the sequence to make the
                     *    insertion &gt;= 0.
                     * @param nitems  The number of items in the sequence to remove &gt;= 0.
                     * @return If the implementation supports a history mechanism,
                     *     a reference to an Edit implementation will be returned,
                     *     otherwise null.
                     * @exception BadLocationException  Thrown if the area covered by
                     *    the arguments is not contained in the character sequence.
                     */
                    // @ts-ignore
                    remove(where: number /*int*/, nitems: number /*int*/): javax.swing.undo.UndoableEdit
                    /**
                     * Fetches a string of characters contained in the sequence.
                     * @param where   Offset into the sequence to fetch &gt;= 0.
                     * @param len     number of characters to copy &gt;= 0.
                     * @return the string
                     * @exception BadLocationException  Thrown if the area covered by
                     *    the arguments is not contained in the character sequence.
                     */
                    // @ts-ignore
                    getString(where: number /*int*/, len: number /*int*/): string
                    /**
                     * Gets a sequence of characters and copies them into a Segment.
                     * @param where the starting offset &gt;= 0
                     * @param len the number of characters &gt;= 0
                     * @param txt the target location to copy into
                     * @exception BadLocationException  Thrown if the area covered by
                     *    the arguments is not contained in the character sequence.
                     */
                    // @ts-ignore
                    getChars(where: number /*int*/, len: number /*int*/, txt: javax.swing.text.Segment): void
                }
            }
        }
    }
}
