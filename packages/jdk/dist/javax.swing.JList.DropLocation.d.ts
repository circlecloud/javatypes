declare namespace javax {
    namespace swing {
        namespace JList {
            /**
             * A subclass of <code>TransferHandler.DropLocation</code> representing
             * a drop location for a <code>JList</code>.
             * @see #getDropLocation
             * @since 1.6
             */
            // @ts-ignore
            class DropLocation extends javax.swing.TransferHandler.DropLocation {
                /**
                 * Returns the index where dropped data should be placed in the
                 * list. Interpretation of the value depends on the drop mode set on
                 * the associated component. If the drop mode is either
                 * <code>DropMode.USE_SELECTION</code> or <code>DropMode.ON</code>,
                 * the return value is an index of a row in the list. If the drop mode is
                 * <code>DropMode.INSERT</code>, the return value refers to the index
                 * where the data should be inserted. If the drop mode is
                 * <code>DropMode.ON_OR_INSERT</code>, the value of
                 * <code>isInsert()</code> indicates whether the index is an index
                 * of a row, or an insert index.
                 * <p>
                 * <code>-1</code> indicates that the drop occurred over empty space,
                 * and no index could be calculated.
                 * @return the drop index
                 */
                // @ts-ignore
                public getIndex(): number /*int*/
                /**
                 * Returns whether or not this location represents an insert
                 * location.
                 * @return whether or not this is an insert location
                 */
                // @ts-ignore
                public isInsert(): boolean
                /**
                 * Returns a string representation of this drop location.
                 * This method is intended to be used for debugging purposes,
                 * and the content and format of the returned string may vary
                 * between implementations.
                 * @return a string representation of this drop location
                 */
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
