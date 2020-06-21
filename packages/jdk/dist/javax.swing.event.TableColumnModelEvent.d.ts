declare namespace javax {
    namespace swing {
        namespace event {
            /**
             * <B>TableColumnModelEvent</B> is used to notify listeners that a table
             * column model has changed, such as a column was added, removed, or
             * moved.
             * <p>
             * <strong>Warning:</strong>
             * Serialized objects of this class will not be compatible with
             * future Swing releases. The current serialization support is
             * appropriate for short term storage or RMI between applications running
             * the same version of Swing.  As of 1.4, support for long term storage
             * of all JavaBeans&trade;
             * has been added to the <code>java.beans</code> package.
             * Please see {@link java.beans.XMLEncoder}.
             * @author Alan Chung
             * @see TableColumnModelListener
             */
            // @ts-ignore
            class TableColumnModelEvent extends java.util.EventObject {
                /**
                 * Constructs a {@code TableColumnModelEvent} object.
                 * @param source  the {#code TableColumnModel} that originated the event
                 * @param from    an int specifying the index from where the column was
                 *                 moved or removed
                 * @param to      an int specifying the index to where the column was
                 *                 moved or added
                 * @see #getFromIndex
                 * @see #getToIndex
                 */
                // @ts-ignore
                constructor(source: javax.swing.table.TableColumnModel, from: number /*int*/, to: number /*int*/)
                /**
                 * The index of the column from where it was moved or removed
                 */
                // @ts-ignore
                fromIndex: number /*int*/
                /**
                 * The index of the column to where it was moved or added
                 */
                // @ts-ignore
                toIndex: number /*int*/
                /**
                 * Returns the fromIndex.  Valid for removed or moved events
                 */
                // @ts-ignore
                public getFromIndex(): number /*int*/
                /**
                 * Returns the toIndex.  Valid for add and moved events
                 */
                // @ts-ignore
                public getToIndex(): number /*int*/
            }
        }
    }
}
