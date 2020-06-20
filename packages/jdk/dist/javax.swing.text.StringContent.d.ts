declare namespace javax {
    namespace swing {
        namespace text {
            /**
             * An implementation of the AbstractDocument.Content interface that is
             * a brute force implementation that is useful for relatively small
             * documents and/or debugging.  It manages the character content
             * as a simple character array.  It is also quite inefficient.
             * <p>
             * It is generally recommended that the gap buffer or piece table
             * implementations be used instead.  This buffer does not scale up
             * to large sizes.
             * <p>
             * <strong>Warning:</strong>
             * Serialized objects of this class will not be compatible with
             * future Swing releases. The current serialization support is
             * appropriate for short term storage or RMI between applications running
             * the same version of Swing.  As of 1.4, support for long term storage
             * of all JavaBeans&trade;
             * has been added to the <code>java.beans</code> package.
             * Please see {@link java.beans.XMLEncoder}.
             * @author Timothy Prinzing
             */
            // @ts-ignore
            class StringContent extends java.lang.Object implements javax.swing.text.AbstractDocument.Content, java.io.Serializable {
                /**
                 * Creates a new StringContent object.  Initial size defaults to 10.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates a new StringContent object, with the initial
                 * size specified.  If the length is &lt; 1, a size of 1 is used.
                 * @param initialLength the initial size
                 */
                // @ts-ignore
                constructor(initialLength: number /*int*/)
                /**
                 * Returns the length of the content.
                 * @return the length &gt;= 1
                 * @see AbstractDocument.Content#length
                 */
                // @ts-ignore
                length(): int
                /**
                 * Inserts a string into the content.
                 * @param where the starting position &gt;= 0 &amp;&amp; &lt; length()
                 * @param str the non-null string to insert
                 * @return an UndoableEdit object for undoing
                 * @exception BadLocationException if the specified position is invalid
                 * @see AbstractDocument.Content#insertString
                 */
                // @ts-ignore
                insertString(where: number /*int*/, str: string): javax.swing.undo.UndoableEdit
                /**
                 * Removes part of the content.  where + nitems must be &lt; length().
                 * @param where the starting position &gt;= 0
                 * @param nitems the number of characters to remove &gt;= 0
                 * @return an UndoableEdit object for undoing
                 * @exception BadLocationException if the specified position is invalid
                 * @see AbstractDocument.Content#remove
                 */
                // @ts-ignore
                remove(where: number /*int*/, nitems: number /*int*/): javax.swing.undo.UndoableEdit
                /**
                 * Retrieves a portion of the content.  where + len must be &lt;= length().
                 * @param where the starting position &gt;= 0
                 * @param len the length to retrieve &gt;= 0
                 * @return a string representing the content; may be empty
                 * @exception BadLocationException if the specified position is invalid
                 * @see AbstractDocument.Content#getString
                 */
                // @ts-ignore
                getString(where: number /*int*/, len: number /*int*/): java.lang.String
                /**
                 * Retrieves a portion of the content.  where + len must be &lt;= length()
                 * @param where the starting position &gt;= 0
                 * @param len the number of characters to retrieve &gt;= 0
                 * @param chars the Segment object to return the characters in
                 * @exception BadLocationException if the specified position is invalid
                 * @see AbstractDocument.Content#getChars
                 */
                // @ts-ignore
                getChars(where: number /*int*/, len: number /*int*/, chars: javax.swing.text.Segment): void
                /**
                 * Creates a position within the content that will
                 * track change as the content is mutated.
                 * @param offset the offset to create a position for &gt;= 0
                 * @return the position
                 * @exception BadLocationException if the specified position is invalid
                 */
                // @ts-ignore
                createPosition(offset: number /*int*/): javax.swing.text.Position
                /**
                 * Returns a Vector containing instances of UndoPosRef for the
                 * Positions in the range
                 * <code>offset</code> to <code>offset</code> + <code>length</code>.
                 * If <code>v</code> is not null the matching Positions are placed in
                 * there. The vector with the resulting Positions are returned.
                 * <p>
                 * This is meant for internal usage, and is generally not of interest
                 * to subclasses.
                 * @param v the Vector to use, with a new one created on null
                 * @param offset the starting offset &gt;= 0
                 * @param length the length &gt;= 0
                 * @return the set of instances
                 */
                // @ts-ignore
                getPositionsInRange(v: java.util.Vector, offset: number /*int*/, length: number /*int*/): java.util.Vector
                /**
                 * Resets the location for all the UndoPosRef instances
                 * in <code>positions</code>.
                 * <p>
                 * This is meant for internal usage, and is generally not of interest
                 * to subclasses.
                 * @param positions the positions of the instances
                 */
                // @ts-ignore
                updateUndoPositions(positions: java.util.Vector): void
            }
        }
    }
}
