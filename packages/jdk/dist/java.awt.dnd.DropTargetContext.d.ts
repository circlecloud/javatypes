declare namespace java {
    namespace awt {
        namespace dnd {
            /**
             * A <code>DropTargetContext</code> is created
             * whenever the logical cursor associated
             * with a Drag and Drop operation coincides with the visible geometry of
             * a <code>Component</code> associated with a <code>DropTarget</code>.
             * The <code>DropTargetContext</code> provides
             * the mechanism for a potential receiver
             * of a drop operation to both provide the end user with the appropriate
             * drag under feedback, but also to effect the subsequent data transfer
             * if appropriate.
             * @since 1.2
             */
            // @ts-ignore
            class DropTargetContext extends java.lang.Object implements java.io.Serializable {
                /**
                 * This method returns the <code>DropTarget</code> associated with this
                 * <code>DropTargetContext</code>.
                 * <P>
                 * @return the <code>DropTarget</code> associated with this <code>DropTargetContext</code>
                 */
                // @ts-ignore
                public getDropTarget(): java.awt.dnd.DropTarget
                /**
                 * This method returns the <code>Component</code> associated with
                 * this <code>DropTargetContext</code>.
                 * <P>
                 * @return the Component associated with this Context
                 */
                // @ts-ignore
                public getComponent(): java.awt.Component
                /**
                 * Called when associated with the <code>DropTargetContextPeer</code>.
                 * <P>
                 * @param dtcp the <code>DropTargetContextPeer</code>
                 */
                // @ts-ignore
                public addNotify(dtcp: java.awt.dnd.peer.DropTargetContextPeer): void
                /**
                 * Called when disassociated with the <code>DropTargetContextPeer</code>.
                 */
                // @ts-ignore
                public removeNotify(): void
                /**
                 * This method sets the current actions acceptable to
                 * this <code>DropTarget</code>.
                 * <P>
                 * @param actions an <code>int</code> representing the supported action(s)
                 */
                // @ts-ignore
                setTargetActions(actions: number /*int*/): void
                /**
                 * This method returns an <code>int</code> representing the
                 * current actions this <code>DropTarget</code> will accept.
                 * <P>
                 * @return the current actions acceptable to this <code>DropTarget</code>
                 */
                // @ts-ignore
                getTargetActions(): number /*int*/
                /**
                 * This method signals that the drop is completed and
                 * if it was successful or not.
                 * <P>
                 * @param success true for success, false if not
                 *  <P>
                 * @throws InvalidDnDOperationException if a drop is not outstanding/extant
                 */
                // @ts-ignore
                public dropComplete(success: boolean): void
                /**
                 * accept the Drag.
                 * <P>
                 * @param dragOperation the supported action(s)
                 */
                // @ts-ignore
                acceptDrag(dragOperation: number /*int*/): void
                /**
                 * reject the Drag.
                 */
                // @ts-ignore
                rejectDrag(): void
                /**
                 * called to signal that the drop is acceptable
                 * using the specified operation.
                 * must be called during DropTargetListener.drop method invocation.
                 * <P>
                 * @param dropOperation the supported action(s)
                 */
                // @ts-ignore
                acceptDrop(dropOperation: number /*int*/): void
                /**
                 * called to signal that the drop is unacceptable.
                 * must be called during DropTargetListener.drop method invocation.
                 */
                // @ts-ignore
                rejectDrop(): void
                /**
                 * get the available DataFlavors of the
                 * <code>Transferable</code> operand of this operation.
                 * <P>
                 * @return a <code>DataFlavor[]</code> containing the
                 *  supported <code>DataFlavor</code>s of the
                 *  <code>Transferable</code> operand.
                 */
                // @ts-ignore
                getCurrentDataFlavors(): java.awt.datatransfer.DataFlavor[]
                /**
                 * This method returns a the currently available DataFlavors
                 * of the <code>Transferable</code> operand
                 * as a <code>java.util.List</code>.
                 * <P>
                 * @return the currently available
                 *  DataFlavors as a <code>java.util.List</code>
                 */
                // @ts-ignore
                getCurrentDataFlavorsAsList(): Array<java.awt.datatransfer.DataFlavor>
                /**
                 * This method returns a <code>boolean</code>
                 * indicating if the given <code>DataFlavor</code> is
                 * supported by this <code>DropTargetContext</code>.
                 * <P>
                 * @param df the <code>DataFlavor</code>
                 *  <P>
                 * @return if the <code>DataFlavor</code> specified is supported
                 */
                // @ts-ignore
                isDataFlavorSupported(df: java.awt.datatransfer.DataFlavor): boolean
                /**
                 * get the Transferable (proxy) operand of this operation
                 * <P>
                 * @throws InvalidDnDOperationException if a drag is not outstanding/extant
                 *  <P>
                 * @return the <code>Transferable</code>
                 */
                // @ts-ignore
                getTransferable(): java.awt.datatransfer.Transferable
                /**
                 * Creates a TransferableProxy to proxy for the specified
                 * Transferable.
                 * @param t the <tt>Transferable</tt> to be proxied
                 * @param local <tt>true</tt> if <tt>t</tt> represents
                 *         the result of a local drag-n-drop operation.
                 * @return the new <tt>TransferableProxy</tt> instance.
                 */
                // @ts-ignore
                createTransferableProxy(t: java.awt.datatransfer.Transferable, local: boolean): java.awt.datatransfer.Transferable
            }
        }
    }
}
