declare namespace javax {
    namespace swing {
        namespace DefaultRowSorter {
            /**
             * <code>DefaultRowSorter.ModelWrapper</code> is responsible for providing
             * the data that gets sorted by <code>DefaultRowSorter</code>.  You
             * normally do not interact directly with <code>ModelWrapper</code>.
             * Subclasses of <code>DefaultRowSorter</code> provide an
             * implementation of <code>ModelWrapper</code> wrapping another model.
             * For example,
             * <code>TableRowSorter</code> provides a <code>ModelWrapper</code> that
             * wraps a <code>TableModel</code>.
             * <p>
             * <code>ModelWrapper</code> makes a distinction between values as
             * <code>Object</code>s and <code>String</code>s.  This allows
             * implementations to provide a custom string
             * converter to be used instead of invoking <code>toString</code> on the
             * object.
             * @param <M> the type of the underlying model
             * @param <I> the identifier supplied to the filter
             * @since 1.6
             * @see RowFilter
             * @see RowFilter.Entry
             */
            // @ts-ignore
            abstract class ModelWrapper<M, I> extends java.lang.Object {
                /**
                 * Creates a new <code>ModelWrapper</code>.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Returns the underlying model that this <code>Model</code> is
                 * wrapping.
                 * @return the underlying model
                 */
                // @ts-ignore
                public abstract getModel(): M
                /**
                 * Returns the number of columns in the model.
                 * @return the number of columns in the model
                 */
                // @ts-ignore
                public abstract getColumnCount(): number /*int*/
                /**
                 * Returns the number of rows in the model.
                 * @return the number of rows in the model
                 */
                // @ts-ignore
                public abstract getRowCount(): number /*int*/
                /**
                 * Returns the value at the specified index.
                 * @param row the row index
                 * @param column the column index
                 * @return the value at the specified index
                 * @throws IndexOutOfBoundsException if the indices are outside
                 *          the range of the model
                 */
                // @ts-ignore
                public abstract getValueAt(row: number /*int*/, column: number /*int*/): any
                /**
                 * Returns the value as a <code>String</code> at the specified
                 * index.  This implementation uses <code>toString</code> on
                 * the result from <code>getValueAt</code> (making sure
                 * to return an empty string for null values).  Subclasses that
                 * override this method should never return null.
                 * @param row the row index
                 * @param column the column index
                 * @return the value at the specified index as a <code>String</code>
                 * @throws IndexOutOfBoundsException if the indices are outside
                 *          the range of the model
                 */
                // @ts-ignore
                public getStringValueAt(row: number /*int*/, column: number /*int*/): string
                /**
                 * Returns the identifier for the specified row.  The return value
                 * of this is used as the identifier for the
                 * <code>RowFilter.Entry</code> that is passed to the
                 * <code>RowFilter</code>.
                 * @param row the row to return the identifier for, in terms of
                 *             the underlying model
                 * @return the identifier
                 * @see RowFilter.Entry#getIdentifier
                 */
                // @ts-ignore
                public abstract getIdentifier(row: number /*int*/): I
            }
        }
    }
}
