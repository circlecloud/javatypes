declare namespace javax {
    namespace swing {
        namespace RowSorter {
            /**
             * SortKey describes the sort order for a particular column.  The
             * column index is in terms of the underlying model, which may differ
             * from that of the view.
             * @since 1.6
             */
            // @ts-ignore
            class SortKey extends java.lang.Object {
                /**
                 * Creates a <code>SortKey</code> for the specified column with
                 * the specified sort order.
                 * @param column index of the column, in terms of the model
                 * @param sortOrder the sorter order
                 * @throws IllegalArgumentException if <code>sortOrder</code> is
                 *          <code>null</code>
                 */
                // @ts-ignore
                constructor(column: number /*int*/, sortOrder: javax.swing.SortOrder)
                /**
                 * Returns the index of the column.
                 * @return index of column
                 */
                // @ts-ignore
                getColumn(): int
                /**
                 * Returns the sort order of the column.
                 * @return the sort order of the column
                 */
                // @ts-ignore
                getSortOrder(): javax.swing.SortOrder
                /**
                 * Returns the hash code for this <code>SortKey</code>.
                 * @return hash code
                 */
                // @ts-ignore
                hashCode(): int
                /**
                 * Returns true if this object equals the specified object.
                 * If the specified object is a <code>SortKey</code> and
                 * references the same column and sort order, the two objects
                 * are equal.
                 * @param o the object to compare to
                 * @return true if <code>o</code> is equal to this <code>SortKey</code>
                 */
                // @ts-ignore
                equals(o: any): boolean
            }
        }
    }
}
