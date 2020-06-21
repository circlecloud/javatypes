declare namespace java {
    namespace awt {
        namespace dnd {
            /**
             * The <code>DropTargetEvent</code> is the base
             * class for both the <code>DropTargetDragEvent</code>
             * and the <code>DropTargetDropEvent</code>.
             * It encapsulates the current state of the Drag and
             * Drop operations, in particular the current
             * <code>DropTargetContext</code>.
             * @since 1.2
             */
            // @ts-ignore
            class DropTargetEvent extends java.util.EventObject {
                /**
                 * Construct a <code>DropTargetEvent</code> object with
                 * the specified <code>DropTargetContext</code>.
                 * <P>
                 * @param dtc The <code>DropTargetContext</code>
                 * @throws NullPointerException if {#code dtc} equals {@code null}.
                 * @see #getSource()
                 * @see #getDropTargetContext()
                 */
                // @ts-ignore
                constructor(dtc: java.awt.dnd.DropTargetContext)
                /**
                 * The <code>DropTargetContext</code> associated with this
                 * <code>DropTargetEvent</code>.
                 * @serial 
                 */
                // @ts-ignore
                context: java.awt.dnd.DropTargetContext
                /**
                 * This method returns the <code>DropTargetContext</code>
                 * associated with this <code>DropTargetEvent</code>.
                 * <P>
                 * @return the <code>DropTargetContext</code>
                 */
                // @ts-ignore
                public getDropTargetContext(): java.awt.dnd.DropTargetContext
            }
        }
    }
}
