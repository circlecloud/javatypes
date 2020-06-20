declare namespace javax {
    namespace swing {
        namespace RowFilter {
            /**
             * An <code>Entry</code> object is passed to instances of
             * <code>RowFilter</code>, allowing the filter to get the value of the
             * entry's data, and thus to determine whether the entry should be shown.
             * An <code>Entry</code> object contains information about the model
             * as well as methods for getting the underlying values from the model.
             * @param <M> the type of the model; for example <code>PersonModel</code>
             * @param <I> the type of the identifier; when using
             *             <code>TableRowSorter</code> this will be <code>Integer</code>
             * @see javax.swing.RowFilter
             * @see javax.swing.DefaultRowSorter#setRowFilter(javax.swing.RowFilter)
             * @since 1.6
             */
            // @ts-ignore
            class Entry<M, I> extends java.lang.Object {
                /**
                 * Creates an <code>Entry</code>.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Returns the underlying model.
                 * @return the model containing the data that this entry represents
                 */
                // @ts-ignore
                abstract getModel(): M
                /**
                 * Returns the number of values in the entry.  For
                 * example, when used with a table this corresponds to the
                 * number of columns.
                 * @return number of values in the object being filtered
                 */
                // @ts-ignore
                abstract getValueCount(): int
                /**
                 * Returns the value at the specified index.  This may return
                 * <code>null</code>.  When used with a table, index
                 * corresponds to the column number in the model.
                 * @param index the index of the value to get
                 * @return value at the specified index
                 * @throws IndexOutOfBoundsException if index &lt; 0 or
                 *          &gt;= getValueCount
                 */
                // @ts-ignore
                abstract getValue(index: number /*int*/): java.lang.Object
                /**
                 * Returns the string value at the specified index.  If
                 * filtering is being done based on <code>String</code> values
                 * this method is preferred to that of <code>getValue</code>
                 * as <code>getValue(index).toString()</code> may return a
                 * different result than <code>getStringValue(index)</code>.
                 * <p>
                 * This implementation calls <code>getValue(index).toString()</code>
                 * after checking for <code>null</code>.  Subclasses that provide
                 * different string conversion should override this method if
                 * necessary.
                 * @param index the index of the value to get
                 * @return {#code non-null} string at the specified index
                 * @throws IndexOutOfBoundsException if index &lt; 0 ||
                 *          &gt;= getValueCount
                 */
                // @ts-ignore
                getStringValue(index: number /*int*/): java.lang.String
                /**
                 * Returns the identifer (in the model) of the entry.
                 * For a table this corresponds to the index of the row in the model,
                 * expressed as an <code>Integer</code>.
                 * @return a model-based (not view-based) identifier for
                 *          this entry
                 */
                // @ts-ignore
                abstract getIdentifier(): I
            }
        }
    }
}
