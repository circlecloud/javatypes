declare namespace java {
    namespace awt {
        namespace dnd {
            /**
             * A listener interface for receiving mouse motion events during a drag
             * operation.
             * <p>
             * The class that is interested in processing mouse motion events during
             * a drag operation either implements this interface or extends the abstract
             * <code>DragSourceAdapter</code> class (overriding only the methods of
             * interest).
             * <p>
             * Create a listener object using that class and then register it with
             * a <code>DragSource</code>. Whenever the mouse moves during a drag
             * operation initiated with this <code>DragSource</code>, that object's
             * <code>dragMouseMoved</code> method is invoked, and the
             * <code>DragSourceDragEvent</code> is passed to it.
             * @see DragSourceDragEvent
             * @see DragSource
             * @see DragSourceListener
             * @see DragSourceAdapter
             * @since 1.4
             */
            // @ts-ignore
            interface DragSourceMotionListener extends java.util.EventListener {
                /**
                 * Called whenever the mouse is moved during a drag operation.
                 * @param dsde the <code>DragSourceDragEvent</code>
                 */
                // @ts-ignore
                dragMouseMoved(dsde: java.awt.dnd.DragSourceDragEvent): void
            }
        }
    }
}
