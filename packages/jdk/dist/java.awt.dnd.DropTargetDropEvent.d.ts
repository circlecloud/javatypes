declare namespace java {
    namespace awt {
        namespace dnd {
            /**
             * The <code>DropTargetDropEvent</code> is delivered
             * via the <code>DropTargetListener</code> drop() method.
             * <p>
             * The <code>DropTargetDropEvent</code> reports the <i>source drop actions</i>
             * and the <i>user drop action</i> that reflect the current state of the
             * drag-and-drop operation.
             * <p>
             * <i>Source drop actions</i> is a bitwise mask of <code>DnDConstants</code>
             * that represents the set of drop actions supported by the drag source for
             * this drag-and-drop operation.
             * <p>
             * <i>User drop action</i> depends on the drop actions supported by the drag
             * source and the drop action selected by the user. The user can select a drop
             * action by pressing modifier keys during the drag operation:
             * <pre>
             * Ctrl + Shift -&gt; ACTION_LINK
             * Ctrl         -&gt; ACTION_COPY
             * Shift        -&gt; ACTION_MOVE
             * </pre>
             * If the user selects a drop action, the <i>user drop action</i> is one of
             * <code>DnDConstants</code> that represents the selected drop action if this
             * drop action is supported by the drag source or
             * <code>DnDConstants.ACTION_NONE</code> if this drop action is not supported
             * by the drag source.
             * <p>
             * If the user doesn't select a drop action, the set of
             * <code>DnDConstants</code> that represents the set of drop actions supported
             * by the drag source is searched for <code>DnDConstants.ACTION_MOVE</code>,
             * then for <code>DnDConstants.ACTION_COPY</code>, then for
             * <code>DnDConstants.ACTION_LINK</code> and the <i>user drop action</i> is the
             * first constant found. If no constant is found the <i>user drop action</i>
             * is <code>DnDConstants.ACTION_NONE</code>.
             * @since 1.2
             */
            // @ts-ignore
            class DropTargetDropEvent extends java.awt.dnd.DropTargetEvent {
                /**
                 * Construct a <code>DropTargetDropEvent</code> given
                 * the <code>DropTargetContext</code> for this operation,
                 * the location of the drag <code>Cursor</code>'s
                 * hotspot in the <code>Component</code>'s coordinates,
                 * the currently
                 * selected user drop action, and the current set of
                 * actions supported by the source.
                 * By default, this constructor
                 * assumes that the target is not in the same virtual machine as
                 * the source; that is, {@link #isLocalTransfer()} will
                 * return <code>false</code>.
                 * <P>
                 * @param dtc        The <code>DropTargetContext</code> for this operation
                 * @param cursorLocn The location of the "Drag" Cursor's
                 *  hotspot in <code>Component</code> coordinates
                 * @param dropAction the user drop action.
                 * @param srcActions the source drop actions.
                 * @throws NullPointerException
                 *  if cursorLocn is <code>null</code>
                 * @throws IllegalArgumentException
                 *          if dropAction is not one of  <code>DnDConstants</code>.
                 * @throws IllegalArgumentException
                 *          if srcActions is not a bitwise mask of <code>DnDConstants</code>.
                 * @throws IllegalArgumentException if dtc is <code>null</code>.
                 */
                // @ts-ignore
                constructor(dtc: java.awt.dnd.DropTargetContext, cursorLocn: java.awt.Point, dropAction: number /*int*/, srcActions: number /*int*/)
                /**
                 * Construct a <code>DropTargetEvent</code> given the
                 * <code>DropTargetContext</code> for this operation,
                 * the location of the drag <code>Cursor</code>'s hotspot
                 * in the <code>Component</code>'s
                 * coordinates, the currently selected user drop action,
                 * the current set of actions supported by the source,
                 * and a <code>boolean</code> indicating if the source is in the same JVM
                 * as the target.
                 * <P>
                 * @param dtc        The DropTargetContext for this operation
                 * @param cursorLocn The location of the "Drag" Cursor's
                 *  hotspot in Component's coordinates
                 * @param dropAction the user drop action.
                 * @param srcActions the source drop actions.
                 * @param isLocal  True if the source is in the same JVM as the target
                 * @throws NullPointerException
                 *          if cursorLocn is  <code>null</code>
                 * @throws IllegalArgumentException
                 *          if dropAction is not one of <code>DnDConstants</code>.
                 * @throws IllegalArgumentException if srcActions is not a bitwise mask of <code>DnDConstants</code>.
                 * @throws IllegalArgumentException  if dtc is <code>null</code>.
                 */
                // @ts-ignore
                constructor(dtc: java.awt.dnd.DropTargetContext, cursorLocn: java.awt.Point, dropAction: number /*int*/, srcActions: number /*int*/, isLocal: boolean)
                /**
                 * This method returns a <code>Point</code>
                 * indicating the <code>Cursor</code>'s current
                 * location in the <code>Component</code>'s coordinates.
                 * <P>
                 * @return the current <code>Cursor</code> location in Component's coords.
                 */
                // @ts-ignore
                public getLocation(): java.awt.Point
                /**
                 * This method returns the current DataFlavors.
                 * <P>
                 * @return current DataFlavors
                 */
                // @ts-ignore
                public getCurrentDataFlavors(): java.awt.datatransfer.DataFlavor[]
                /**
                 * This method returns the currently available
                 * <code>DataFlavor</code>s as a <code>java.util.List</code>.
                 * <P>
                 * @return the currently available DataFlavors as a java.util.List
                 */
                // @ts-ignore
                public getCurrentDataFlavorsAsList(): Array<java.awt.datatransfer.DataFlavor>
                /**
                 * This method returns a <code>boolean</code> indicating if the
                 * specified <code>DataFlavor</code> is available
                 * from the source.
                 * <P>
                 * @param df the <code>DataFlavor</code> to test
                 *  <P>
                 * @return if the DataFlavor specified is available from the source
                 */
                // @ts-ignore
                public isDataFlavorSupported(df: java.awt.datatransfer.DataFlavor): boolean
                /**
                 * This method returns the source drop actions.
                 * @return the source drop actions.
                 */
                // @ts-ignore
                public getSourceActions(): number /*int*/
                /**
                 * This method returns the user drop action.
                 * @return the user drop actions.
                 */
                // @ts-ignore
                public getDropAction(): number /*int*/
                /**
                 * This method returns the <code>Transferable</code> object
                 * associated with the drop.
                 * <P>
                 * @return the <code>Transferable</code> associated with the drop
                 */
                // @ts-ignore
                public getTransferable(): java.awt.datatransfer.Transferable
                /**
                 * accept the drop, using the specified action.
                 * <P>
                 * @param dropAction the specified action
                 */
                // @ts-ignore
                public acceptDrop(dropAction: number /*int*/): void
                /**
                 * reject the Drop.
                 */
                // @ts-ignore
                public rejectDrop(): void
                /**
                 * This method notifies the <code>DragSource</code>
                 * that the drop transfer(s) are completed.
                 * <P>
                 * @param success a <code>boolean</code> indicating that the drop transfer(s) are completed.
                 */
                // @ts-ignore
                public dropComplete(success: boolean): void
                /**
                 * This method returns an <code>int</code> indicating if
                 * the source is in the same JVM as the target.
                 * <P>
                 * @return if the Source is in the same JVM
                 */
                // @ts-ignore
                public isLocalTransfer(): boolean
            }
        }
    }
}
