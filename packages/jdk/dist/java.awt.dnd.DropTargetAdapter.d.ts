declare namespace java {
    namespace awt {
        namespace dnd {
            /**
             * An abstract adapter class for receiving drop target events. The methods in
             * this class are empty. This class exists only as a convenience for creating
             * listener objects.
             * <p>
             * Extend this class to create a <code>DropTargetEvent</code> listener
             * and override the methods for the events of interest. (If you implement the
             * <code>DropTargetListener</code> interface, you have to define all of
             * the methods in it. This abstract class defines a null implementation for
             * every method except <code>drop(DropTargetDropEvent)</code>, so you only have
             * to define methods for events you care about.) You must provide an
             * implementation for at least <code>drop(DropTargetDropEvent)</code>. This
             * method cannot have a null implementation because its specification requires
             * that you either accept or reject the drop, and, if accepted, indicate
             * whether the drop was successful.
             * <p>
             * Create a listener object using the extended class and then register it with
             * a <code>DropTarget</code>. When the drag enters, moves over, or exits
             * the operable part of the drop site for that <code>DropTarget</code>, when
             * the drop action changes, and when the drop occurs, the relevant method in
             * the listener object is invoked, and the <code>DropTargetEvent</code> is
             * passed to it.
             * <p>
             * The operable part of the drop site for the <code>DropTarget</code> is
             * the part of the associated <code>Component</code>'s geometry that is not
             * obscured by an overlapping top-level window or by another
             * <code>Component</code> higher in the Z-order that has an associated active
             * <code>DropTarget</code>.
             * <p>
             * During the drag, the data associated with the current drag operation can be
             * retrieved by calling <code>getTransferable()</code> on
             * <code>DropTargetDragEvent</code> instances passed to the listener's
             * methods.
             * <p>
             * Note that <code>getTransferable()</code> on the
             * <code>DropTargetDragEvent</code> instance should only be called within the
             * respective listener's method and all the necessary data should be retrieved
             * from the returned <code>Transferable</code> before that method returns.
             * @see DropTargetEvent
             * @see DropTargetListener
             * @author David Mendenhall
             * @since 1.4
             */
            // @ts-ignore
            class DropTargetAdapter extends java.lang.Object implements java.awt.dnd.DropTargetListener {
                // @ts-ignore
                constructor()
                /**
                 * Called while a drag operation is ongoing, when the mouse pointer enters
                 * the operable part of the drop site for the <code>DropTarget</code>
                 * registered with this listener.
                 * @param dtde the <code>DropTargetDragEvent</code>
                 */
                // @ts-ignore
                dragEnter(dtde: java.awt.dnd.DropTargetDragEvent): void
                /**
                 * Called when a drag operation is ongoing, while the mouse pointer is still
                 * over the operable part of the drop site for the <code>DropTarget</code>
                 * registered with this listener.
                 * @param dtde the <code>DropTargetDragEvent</code>
                 */
                // @ts-ignore
                dragOver(dtde: java.awt.dnd.DropTargetDragEvent): void
                /**
                 * Called if the user has modified
                 * the current drop gesture.
                 * @param dtde the <code>DropTargetDragEvent</code>
                 */
                // @ts-ignore
                dropActionChanged(dtde: java.awt.dnd.DropTargetDragEvent): void
                /**
                 * Called while a drag operation is ongoing, when the mouse pointer has
                 * exited the operable part of the drop site for the
                 * <code>DropTarget</code> registered with this listener.
                 * @param dte the <code>DropTargetEvent</code>
                 */
                // @ts-ignore
                dragExit(dte: java.awt.dnd.DropTargetEvent): void
            }
        }
    }
}
