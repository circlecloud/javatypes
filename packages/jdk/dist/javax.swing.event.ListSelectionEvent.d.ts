declare namespace javax {
    namespace swing {
        namespace event {
            /**
             * An event that characterizes a change in selection. The change is limited to a
             * a single inclusive interval. The selection of at least one index within the
             * range will have changed. A decent {@code ListSelectionModel} implementation
             * will keep the range as small as possible. {@code ListSelectionListeners} will
             * generally query the source of the event for the new selected status of each
             * potentially changed row.
             * <p>
             * <strong>Warning:</strong>
             * Serialized objects of this class will not be compatible with
             * future Swing releases. The current serialization support is
             * appropriate for short term storage or RMI between applications running
             * the same version of Swing.  As of 1.4, support for long term storage
             * of all JavaBeans&trade;
             * has been added to the <code>java.beans</code> package.
             * Please see {@link java.beans.XMLEncoder}.
             * @author Hans Muller
             * @author Ray Ryan
             * @see ListSelectionModel
             */
            // @ts-ignore
            class ListSelectionEvent extends java.util.EventObject {
                /**
                 * Represents a change in selection status between {@code firstIndex} and
                 * {@code lastIndex}, inclusive. {@code firstIndex} is less than or equal to
                 * {@code lastIndex}. The selection of at least one index within the range will
                 * have changed.
                 * @param firstIndex the first index in the range, &lt;= lastIndex
                 * @param lastIndex the last index in the range, &gt;= firstIndex
                 * @param isAdjusting whether or not this is one in a series of
                 *         multiple events, where changes are still being made
                 */
                // @ts-ignore
                constructor(source: any, firstIndex: number /*int*/, lastIndex: number /*int*/, isAdjusting: boolean)
                /**
                 * Returns the index of the first row whose selection may have changed.
                 * {@code getFirstIndex() <= getLastIndex()}
                 * @return the first row whose selection value may have changed,
                 *          where zero is the first row
                 */
                // @ts-ignore
                getFirstIndex(): int
                /**
                 * Returns the index of the last row whose selection may have changed.
                 * {@code getLastIndex() >= getFirstIndex()}
                 * @return the last row whose selection value may have changed,
                 *          where zero is the first row
                 */
                // @ts-ignore
                getLastIndex(): int
                /**
                 * Returns whether or not this is one in a series of multiple events,
                 * where changes are still being made. See the documentation for
                 * {@link javax.swing.ListSelectionModel#setValueIsAdjusting} for
                 * more details on how this is used.
                 * @return {#code true} if this is one in a series of multiple events,
                 *          where changes are still being made
                 */
                // @ts-ignore
                getValueIsAdjusting(): boolean
                /**
                 * Returns a {@code String} that displays and identifies this
                 * object's properties.
                 * @return a String representation of this object
                 */
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}
