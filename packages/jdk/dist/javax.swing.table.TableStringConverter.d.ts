declare namespace javax {
    namespace swing {
        namespace table {
            /**
             * TableStringConverter is used to convert objects from the model into
             * strings.  This is useful in filtering and searching when the model returns
             * objects that do not have meaningful <code>toString</code> implementations.
             * @since 1.6
             */
            // @ts-ignore
            abstract class TableStringConverter extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Returns the string representation of the value at the specified
                 * location.
                 * @param model the <code>TableModel</code> to fetch the value from
                 * @param row the row the string is being requested for
                 * @param column the column the string is being requested for
                 * @return the string representation.  This should never return null.
                 * @throws NullPointerException if <code>model</code> is null
                 * @throws IndexOutOfBoundsException if the arguments are outside the
                 *          bounds of the model
                 */
                // @ts-ignore
                public abstract toString(model: javax.swing.table.TableModel, row: number /*int*/, column: number /*int*/): string
            }
        }
    }
}
