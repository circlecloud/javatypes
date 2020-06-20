declare namespace javax {
    namespace swing {
        namespace text {
            /**
             * An implementation of the AbstractDocument.Content interface
             * implemented using a gapped buffer similar to that used by emacs.
             * The underlying storage is a array of unicode characters with
             * a gap somewhere.  The gap is moved to the location of changes
             * to take advantage of common behavior where most changes are
             * in the same location.  Changes that occur at a gap boundary are
             * generally cheap and moving the gap is generally cheaper than
             * moving the array contents directly to accommodate the change.
             * <p>
             * The positions tracking change are also generally cheap to
             * maintain.  The Position implementations (marks) store the array
             * index and can easily calculate the sequential position from
             * the current gap location.  Changes only require update to the
             * the marks between the old and new gap boundaries when the gap
             * is moved, so generally updating the marks is pretty cheap.
             * The marks are stored sorted so they can be located quickly
             * with a binary search.  This increases the cost of adding a
             * mark, and decreases the cost of keeping the mark updated.
             * @author Timothy Prinzing
             */
            // @ts-ignore
            class GapContent extends javax.swing.text.GapVector implements javax.swing.text.AbstractDocument.Content, java.io.Serializable {
                /**
                 * Creates a new GapContent object.  Initial size defaults to 10.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates a new GapContent object, with the initial
                 * size specified.  The initial size will not be allowed
                 * to go below 2, to give room for the implied break and
                 * the gap.
                 * @param initialLength the initial size
                 */
                // @ts-ignore
                constructor(initialLength: number /*int*/)
                /**
                 * Allocate an array to store items of the type
                 * appropriate (which is determined by the subclass).
                 */
                // @ts-ignore
                allocateArray(len: number /*int*/): java.lang.Object
                /**
                 * Get the length of the allocated array.
                 */
                // @ts-ignore
                getArrayLength(): int
                /**
                 * Returns the length of the content.
                 * @return the length &gt;= 1
                 * @see AbstractDocument.Content#length
                 */
                // @ts-ignore
                length(): int
                /**
                 * Inserts a string into the content.
                 * @param where the starting position &gt;= 0, &lt; length()
                 * @param str the non-null string to insert
                 * @return an UndoableEdit object for undoing
                 * @exception BadLocationException if the specified position is invalid
                 * @see AbstractDocument.Content#insertString
                 */
                // @ts-ignore
                insertString(where: number /*int*/, str: string): javax.swing.undo.UndoableEdit
                /**
                 * Removes part of the content.
                 * @param where the starting position &gt;= 0, where + nitems &lt; length()
                 * @param nitems the number of characters to remove &gt;= 0
                 * @return an UndoableEdit object for undoing
                 * @exception BadLocationException if the specified position is invalid
                 * @see AbstractDocument.Content#remove
                 */
                // @ts-ignore
                remove(where: number /*int*/, nitems: number /*int*/): javax.swing.undo.UndoableEdit
                /**
                 * Retrieves a portion of the content.
                 * @param where the starting position &gt;= 0
                 * @param len the length to retrieve &gt;= 0
                 * @return a string representing the content
                 * @exception BadLocationException if the specified position is invalid
                 * @see AbstractDocument.Content#getString
                 */
                // @ts-ignore
                getString(where: number /*int*/, len: number /*int*/): java.lang.String
                /**
                 * Retrieves a portion of the content.  If the desired content spans
                 * the gap, we copy the content.  If the desired content does not
                 * span the gap, the actual store is returned to avoid the copy since
                 * it is contiguous.
                 * @param where the starting position &gt;= 0, where + len &lt;= length()
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
                 * @param offset the offset to track &gt;= 0
                 * @return the position
                 * @exception BadLocationException if the specified position is invalid
                 */
                // @ts-ignore
                createPosition(offset: number /*int*/): javax.swing.text.Position
                /**
                 * Make the gap bigger, moving any necessary data and updating
                 * the appropriate marks
                 */
                // @ts-ignore
                shiftEnd(newSize: number /*int*/): void
                /**
                 * Move the start of the gap to a new location,
                 * without changing the size of the gap.  This
                 * moves the data in the array and updates the
                 * marks accordingly.
                 */
                // @ts-ignore
                shiftGap(newGapStart: number /*int*/): void
                /**
                 * Resets all the marks that have an offset of 0 to have an index of
                 * zero as well.
                 */
                // @ts-ignore
                resetMarksAtZero(): void
                /**
                 * Adjust the gap end downward.  This doesn't move
                 * any data, but it does update any marks affected
                 * by the boundary change.  All marks from the old
                 * gap start down to the new gap start are squeezed
                 * to the end of the gap (their location has been
                 * removed).
                 */
                // @ts-ignore
                shiftGapStartDown(newGapStart: number /*int*/): void
                /**
                 * Adjust the gap end upward.  This doesn't move
                 * any data, but it does update any marks affected
                 * by the boundary change. All marks from the old
                 * gap end up to the new gap end are squeezed
                 * to the end of the gap (their location has been
                 * removed).
                 */
                // @ts-ignore
                shiftGapEndUp(newGapEnd: number /*int*/): void
                /**
                 * Returns a Vector containing instances of UndoPosRef for the
                 * Positions in the range
                 * <code>offset</code> to <code>offset</code> + <code>length</code>.
                 * If <code>v</code> is not null the matching Positions are placed in
                 * there. The vector with the resulting Positions are returned.
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
                 * @param positions the UndoPosRef instances to reset
                 */
                // @ts-ignore
                updateUndoPositions(positions: java.util.Vector, offset: number /*int*/, length: number /*int*/): void
            }
        }
    }
}
