declare namespace javax {
    namespace swing {
        namespace TransferHandler {
            /**
             * Represents a location where dropped data should be inserted.
             * This is a base class that only encapsulates a point.
             * Components supporting drop may provide subclasses of this
             * containing more information.
             * <p>
             * Developers typically shouldn't create instances of, or extend, this
             * class. Instead, these are something provided by the DnD
             * implementation by <code>TransferSupport</code> instances and by
             * components with a <code>getDropLocation()</code> method.
             * @see javax.swing.TransferHandler.TransferSupport#getDropLocation
             * @since 1.6
             */
            // @ts-ignore
            class DropLocation extends java.lang.Object {
                /**
                 * Constructs a drop location for the given point.
                 * @param dropPoint the drop point, representing the mouse's
                 *         current location within the component.
                 * @throws IllegalArgumentException if the point
                 *          is <code>null</code>
                 */
                // @ts-ignore
                constructor(dropPoint: java.awt.Point)
                /**
                 * Returns the drop point, representing the mouse's
                 * current location within the component.
                 * @return the drop point.
                 */
                // @ts-ignore
                public getDropPoint(): java.awt.Point
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
