declare namespace javax {
    namespace swing {
        namespace TransferHandler {
            /**
             * This class encapsulates all relevant details of a clipboard
             * or drag and drop transfer, and also allows for customizing
             * aspects of the drag and drop experience.
             * <p>
             * The main purpose of this class is to provide the information
             * needed by a developer to determine the suitability of a
             * transfer or to import the data contained within. But it also
             * doubles as a controller for customizing properties during drag
             * and drop, such as whether or not to show the drop location,
             * and which drop action to use.
             * <p>
             * Developers typically need not create instances of this
             * class. Instead, they are something provided by the DnD
             * implementation to certain methods in <code>TransferHandler</code>.
             * @see #canImport(TransferHandler.TransferSupport)
             * @see #importData(TransferHandler.TransferSupport)
             * @since 1.6
             */
            // @ts-ignore
            class TransferSupport extends java.lang.Object {
                /**
                 * Create a <code>TransferSupport</code> with <code>isDrop()</code>
                 * <code>false</code> for the given component and
                 * <code>Transferable</code>.
                 * @param component the target component
                 * @param transferable the transferable
                 * @throws NullPointerException if either parameter
                 *          is <code>null</code>
                 */
                // @ts-ignore
                constructor(component: java.awt.Component, transferable: java.awt.datatransfer.Transferable)
                /**
                 * Returns whether or not this <code>TransferSupport</code>
                 * represents a drop operation.
                 * @return <code>true</code> if this is a drop operation,
                 *          <code>false</code> otherwise.
                 */
                // @ts-ignore
                public isDrop(): boolean
                /**
                 * Returns the target component of this transfer.
                 * @return the target component
                 */
                // @ts-ignore
                public getComponent(): java.awt.Component
                /**
                 * Returns the current (non-{@code null}) drop location for the component,
                 * when this {@code TransferSupport} represents a drop.
                 * <p>
                 * Note: For components with built-in drop support, this location
                 * will be a subclass of {@code DropLocation} of the same type
                 * returned by that component's {@code getDropLocation} method.
                 * <p>
                 * This method is only for use with drag and drop transfers.
                 * Calling it when {@code isDrop()} is {@code false} results
                 * in an {@code IllegalStateException}.
                 * @return the drop location
                 * @throws IllegalStateException if this is not a drop
                 * @see #isDrop()
                 */
                // @ts-ignore
                public getDropLocation(): javax.swing.TransferHandler.DropLocation
                /**
                 * Sets whether or not the drop location should be visually indicated
                 * for the transfer - which must represent a drop. This is applicable to
                 * those components that automatically
                 * show the drop location when appropriate during a drag and drop
                 * operation). By default, the drop location is shown only when the
                 * {@code TransferHandler} has said it can accept the import represented
                 * by this {@code TransferSupport}. With this method you can force the
                 * drop location to always be shown, or always not be shown.
                 * <p>
                 * This method is only for use with drag and drop transfers.
                 * Calling it when {@code isDrop()} is {@code false} results
                 * in an {@code IllegalStateException}.
                 * @param showDropLocation whether or not to indicate the drop location
                 * @throws IllegalStateException if this is not a drop
                 * @see #isDrop()
                 */
                // @ts-ignore
                public setShowDropLocation(showDropLocation: boolean): void
                /**
                 * Sets the drop action for the transfer - which must represent a drop
                 * - to the given action,
                 * instead of the default user drop action. The action must be
                 * supported by the source's drop actions, and must be one
                 * of {@code COPY}, {@code MOVE} or {@code LINK}.
                 * <p>
                 * This method is only for use with drag and drop transfers.
                 * Calling it when {@code isDrop()} is {@code false} results
                 * in an {@code IllegalStateException}.
                 * @param dropAction the drop action
                 * @throws IllegalStateException if this is not a drop
                 * @throws IllegalArgumentException if an invalid action is specified
                 * @see #getDropAction
                 * @see #getUserDropAction
                 * @see #getSourceDropActions
                 * @see #isDrop()
                 */
                // @ts-ignore
                public setDropAction(dropAction: number /*int*/): void
                /**
                 * Returns the action chosen for the drop, when this
                 * {@code TransferSupport} represents a drop.
                 * <p>
                 * Unless explicitly chosen by way of {@code setDropAction},
                 * this returns the user drop action provided by
                 * {@code getUserDropAction}.
                 * <p>
                 * You may wish to query this in {@code TransferHandler}'s
                 * {@code importData} method to customize processing based
                 * on the action.
                 * <p>
                 * This method is only for use with drag and drop transfers.
                 * Calling it when {@code isDrop()} is {@code false} results
                 * in an {@code IllegalStateException}.
                 * @return the action chosen for the drop
                 * @throws IllegalStateException if this is not a drop
                 * @see #setDropAction
                 * @see #getUserDropAction
                 * @see #isDrop()
                 */
                // @ts-ignore
                public getDropAction(): number /*int*/
                /**
                 * Returns the user drop action for the drop, when this
                 * {@code TransferSupport} represents a drop.
                 * <p>
                 * The user drop action is chosen for a drop as described in the
                 * documentation for {@link java.awt.dnd.DropTargetDragEvent} and
                 * {@link java.awt.dnd.DropTargetDropEvent}. A different action
                 * may be chosen as the drop action by way of the {@code setDropAction}
                 * method.
                 * <p>
                 * You may wish to query this in {@code TransferHandler}'s
                 * {@code canImport} method when determining the suitability of a
                 * drop or when deciding on a drop action to explicitly choose.
                 * <p>
                 * This method is only for use with drag and drop transfers.
                 * Calling it when {@code isDrop()} is {@code false} results
                 * in an {@code IllegalStateException}.
                 * @return the user drop action
                 * @throws IllegalStateException if this is not a drop
                 * @see #setDropAction
                 * @see #getDropAction
                 * @see #isDrop()
                 */
                // @ts-ignore
                public getUserDropAction(): number /*int*/
                /**
                 * Returns the drag source's supported drop actions, when this
                 * {@code TransferSupport} represents a drop.
                 * <p>
                 * The source actions represent the set of actions supported by the
                 * source of this transfer, and are represented as some bitwise-OR
                 * combination of {@code COPY}, {@code MOVE} and {@code LINK}.
                 * You may wish to query this in {@code TransferHandler}'s
                 * {@code canImport} method when determining the suitability of a drop
                 * or when deciding on a drop action to explicitly choose. To determine
                 * if a particular action is supported by the source, bitwise-AND
                 * the action with the source drop actions, and then compare the result
                 * against the original action. For example:
                 * <pre>
                 * boolean copySupported = (COPY &amp; getSourceDropActions()) == COPY;
                 * </pre>
                 * <p>
                 * This method is only for use with drag and drop transfers.
                 * Calling it when {@code isDrop()} is {@code false} results
                 * in an {@code IllegalStateException}.
                 * @return the drag source's supported drop actions
                 * @throws IllegalStateException if this is not a drop
                 * @see #isDrop()
                 */
                // @ts-ignore
                public getSourceDropActions(): number /*int*/
                /**
                 * Returns the data flavors for this transfer.
                 * @return the data flavors for this transfer
                 */
                // @ts-ignore
                public getDataFlavors(): java.awt.datatransfer.DataFlavor[]
                /**
                 * Returns whether or not the given data flavor is supported.
                 * @param df the <code>DataFlavor</code> to test
                 * @return whether or not the given flavor is supported.
                 */
                // @ts-ignore
                public isDataFlavorSupported(df: java.awt.datatransfer.DataFlavor): boolean
                /**
                 * Returns the <code>Transferable</code> associated with this transfer.
                 * <p>
                 * Note: Unless it is necessary to fetch the <code>Transferable</code>
                 * directly, use one of the other methods on this class to inquire about
                 * the transfer. This may perform better than fetching the
                 * <code>Transferable</code> and asking it directly.
                 * @return the <code>Transferable</code> associated with this transfer
                 */
                // @ts-ignore
                public getTransferable(): java.awt.datatransfer.Transferable
            }
        }
    }
}
