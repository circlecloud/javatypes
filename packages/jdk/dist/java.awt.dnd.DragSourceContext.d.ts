declare namespace java {
    namespace awt {
        namespace dnd {
            /**
             * The <code>DragSourceContext</code> class is responsible for managing the
             * initiator side of the Drag and Drop protocol. In particular, it is responsible
             * for managing drag event notifications to the
             * {@linkplain DragSourceListener DragSourceListeners}
             * and {@linkplain DragSourceMotionListener DragSourceMotionListeners}, and providing the
             * {@link Transferable} representing the source data for the drag operation.
             * <p>
             * Note that the <code>DragSourceContext</code> itself
             * implements the <code>DragSourceListener</code> and
             * <code>DragSourceMotionListener</code> interfaces.
             * This is to allow the platform peer
             * (the {@link DragSourceContextPeer} instance)
             * created by the {@link DragSource} to notify
             * the <code>DragSourceContext</code> of
             * state changes in the ongoing operation. This allows the
             * <code>DragSourceContext</code> object to interpose
             * itself between the platform and the
             * listeners provided by the initiator of the drag operation.
             * <p>
             * <a name="defaultCursor"></a>
             * By default, {@code DragSourceContext} sets the cursor as appropriate
             * for the current state of the drag and drop operation. For example, if
             * the user has chosen {@linkplain DnDConstants#ACTION_MOVE the move action},
             * and the pointer is over a target that accepts
             * the move action, the default move cursor is shown. When
             * the pointer is over an area that does not accept the transfer,
             * the default "no drop" cursor is shown.
             * <p>
             * This default handling mechanism is disabled when a custom cursor is set
             * by the {@link #setCursor} method. When the default handling is disabled,
             * it becomes the responsibility
             * of the developer to keep the cursor up to date, by listening
             * to the {@code DragSource} events and calling the {@code setCursor()} method.
             * Alternatively, you can provide custom cursor behavior by providing
             * custom implementations of the {@code DragSource}
             * and the {@code DragSourceContext} classes.
             * @see DragSourceListener
             * @see DragSourceMotionListener
             * @see DnDConstants
             * @since 1.2
             */
            // @ts-ignore
            class DragSourceContext extends java.lang.Object implements java.awt.dnd.DragSourceListener, java.awt.dnd.DragSourceMotionListener, java.io.Serializable {
                /**
                 * Called from <code>DragSource</code>, this constructor creates a new
                 * <code>DragSourceContext</code> given the
                 * <code>DragSourceContextPeer</code> for this Drag, the
                 * <code>DragGestureEvent</code> that triggered the Drag, the initial
                 * <code>Cursor</code> to use for the Drag, an (optional)
                 * <code>Image</code> to display while the Drag is taking place, the offset
                 * of the <code>Image</code> origin from the hotspot at the instant of the
                 * triggering event, the <code>Transferable</code> subject data, and the
                 * <code>DragSourceListener</code> to use during the Drag and Drop
                 * operation.
                 * <br>
                 * If <code>DragSourceContextPeer</code> is <code>null</code>
                 * <code>NullPointerException</code> is thrown.
                 * <br>
                 * If <code>DragGestureEvent</code> is <code>null</code>
                 * <code>NullPointerException</code> is thrown.
                 * <br>
                 * If <code>Cursor</code> is <code>null</code> no exception is thrown and
                 * the default drag cursor behavior is activated for this drag operation.
                 * <br>
                 * If <code>Image</code> is <code>null</code> no exception is thrown.
                 * <br>
                 * If <code>Image</code> is not <code>null</code> and the offset is
                 * <code>null</code> <code>NullPointerException</code> is thrown.
                 * <br>
                 * If <code>Transferable</code> is <code>null</code>
                 * <code>NullPointerException</code> is thrown.
                 * <br>
                 * If <code>DragSourceListener</code> is <code>null</code> no exception
                 * is thrown.
                 * @param dscp       the <code>DragSourceContextPeer</code> for this drag
                 * @param trigger    the triggering event
                 * @param dragCursor     the initial {#code Cursor} for this drag operation
                 *                        or {@code null} for the default cursor handling;
                 *                        see <a href="DragSourceContext.html#defaultCursor">class level documentation</a>
                 *                        for more details on the cursor handling mechanism during drag and drop
                 * @param dragImage  the <code>Image</code> to drag (or <code>null</code>)
                 * @param offset     the offset of the image origin from the hotspot at the
                 *                    instant of the triggering event
                 * @param t          the <code>Transferable</code>
                 * @param dsl        the <code>DragSourceListener</code>
                 * @throws IllegalArgumentException if the <code>Component</code> associated
                 *          with the trigger event is <code>null</code>.
                 * @throws IllegalArgumentException if the <code>DragSource</code> for the
                 *          trigger event is <code>null</code>.
                 * @throws IllegalArgumentException if the drag action for the
                 *          trigger event is <code>DnDConstants.ACTION_NONE</code>.
                 * @throws IllegalArgumentException if the source actions for the
                 *          <code>DragGestureRecognizer</code> associated with the trigger
                 *          event are equal to <code>DnDConstants.ACTION_NONE</code>.
                 * @throws NullPointerException if dscp, trigger, or t are null, or
                 *          if dragImage is non-null and offset is null
                 */
                // @ts-ignore
                constructor(dscp: java.awt.dnd.peer.DragSourceContextPeer, trigger: java.awt.dnd.DragGestureEvent, dragCursor: java.awt.Cursor, dragImage: java.awt.Image, offset: java.awt.Point, t: java.awt.datatransfer.Transferable, dsl: java.awt.dnd.DragSourceListener)
                /**
                 * An <code>int</code> used by updateCurrentCursor()
                 * indicating that the <code>Cursor</code> should change
                 * to the default (no drop) <code>Cursor</code>.
                 */
                // @ts-ignore
                static readonly DEFAULT: number /*int*/
                /**
                 * An <code>int</code> used by updateCurrentCursor()
                 * indicating that the <code>Cursor</code>
                 * has entered a <code>DropTarget</code>.
                 */
                // @ts-ignore
                static readonly ENTER: number /*int*/
                /**
                 * An <code>int</code> used by updateCurrentCursor()
                 * indicating that the <code>Cursor</code> is
                 * over a <code>DropTarget</code>.
                 */
                // @ts-ignore
                static readonly OVER: number /*int*/
                /**
                 * An <code>int</code> used by updateCurrentCursor()
                 * indicating that the user operation has changed.
                 */
                // @ts-ignore
                static readonly CHANGED: number /*int*/
                /**
                 * Returns the <code>DragSource</code>
                 * that instantiated this <code>DragSourceContext</code>.
                 * @return the <code>DragSource</code> that
                 *    instantiated this <code>DragSourceContext</code>
                 */
                // @ts-ignore
                public getDragSource(): java.awt.dnd.DragSource
                /**
                 * Returns the <code>Component</code> associated with this
                 * <code>DragSourceContext</code>.
                 * @return the <code>Component</code> that started the drag
                 */
                // @ts-ignore
                public getComponent(): java.awt.Component
                /**
                 * Returns the <code>DragGestureEvent</code>
                 * that initially triggered the drag.
                 * @return the Event that triggered the drag
                 */
                // @ts-ignore
                public getTrigger(): java.awt.dnd.DragGestureEvent
                /**
                 * Returns a bitwise mask of <code>DnDConstants</code> that
                 * represent the set of drop actions supported by the drag source for the
                 * drag operation associated with this <code>DragSourceContext</code>.
                 * @return the drop actions supported by the drag source
                 */
                // @ts-ignore
                public getSourceActions(): number /*int*/
                /**
                 * Sets the cursor for this drag operation to the specified
                 * <code>Cursor</code>.  If the specified <code>Cursor</code>
                 * is <code>null</code>, the default drag cursor behavior is
                 * activated for this drag operation, otherwise it is deactivated.
                 * @param c     the initial {#code Cursor} for this drag operation,
                 *                        or {@code null} for the default cursor handling;
                 *                        see {@linkplain Cursor class
                 *                        level documentation} for more details
                 *                        on the cursor handling during drag and drop
                 */
                // @ts-ignore
                public setCursor(c: java.awt.Cursor): void
                /**
                 * Returns the current drag <code>Cursor</code>.
                 * <P>
                 * @return the current drag <code>Cursor</code>
                 */
                // @ts-ignore
                public getCursor(): java.awt.Cursor
                /**
                 * Add a <code>DragSourceListener</code> to this
                 * <code>DragSourceContext</code> if one has not already been added.
                 * If a <code>DragSourceListener</code> already exists,
                 * this method throws a <code>TooManyListenersException</code>.
                 * <P>
                 * @param dsl the <code>DragSourceListener</code> to add.
                 *  Note that while <code>null</code> is not prohibited,
                 *  it is not acceptable as a parameter.
                 *  <P>
                 * @throws TooManyListenersException if
                 *  a <code>DragSourceListener</code> has already been added
                 */
                // @ts-ignore
                public addDragSourceListener(dsl: java.awt.dnd.DragSourceListener): void
                /**
                 * Removes the specified <code>DragSourceListener</code>
                 * from  this <code>DragSourceContext</code>.
                 * @param dsl the <code>DragSourceListener</code> to remove;
                 *      note that while <code>null</code> is not prohibited,
                 *      it is not acceptable as a parameter
                 */
                // @ts-ignore
                public removeDragSourceListener(dsl: java.awt.dnd.DragSourceListener): void
                /**
                 * Notifies the peer that the <code>Transferable</code>'s
                 * <code>DataFlavor</code>s have changed.
                 */
                // @ts-ignore
                public transferablesFlavorsChanged(): void
                /**
                 * Calls <code>dragEnter</code> on the
                 * <code>DragSourceListener</code>s registered with this
                 * <code>DragSourceContext</code> and with the associated
                 * <code>DragSource</code>, and passes them the specified
                 * <code>DragSourceDragEvent</code>.
                 * @param dsde the <code>DragSourceDragEvent</code>
                 */
                // @ts-ignore
                public dragEnter(dsde: java.awt.dnd.DragSourceDragEvent): void
                /**
                 * Calls <code>dragOver</code> on the
                 * <code>DragSourceListener</code>s registered with this
                 * <code>DragSourceContext</code> and with the associated
                 * <code>DragSource</code>, and passes them the specified
                 * <code>DragSourceDragEvent</code>.
                 * @param dsde the <code>DragSourceDragEvent</code>
                 */
                // @ts-ignore
                public dragOver(dsde: java.awt.dnd.DragSourceDragEvent): void
                /**
                 * Calls <code>dragExit</code> on the
                 * <code>DragSourceListener</code>s registered with this
                 * <code>DragSourceContext</code> and with the associated
                 * <code>DragSource</code>, and passes them the specified
                 * <code>DragSourceEvent</code>.
                 * @param dse the <code>DragSourceEvent</code>
                 */
                // @ts-ignore
                public dragExit(dse: java.awt.dnd.DragSourceEvent): void
                /**
                 * Calls <code>dropActionChanged</code> on the
                 * <code>DragSourceListener</code>s registered with this
                 * <code>DragSourceContext</code> and with the associated
                 * <code>DragSource</code>, and passes them the specified
                 * <code>DragSourceDragEvent</code>.
                 * @param dsde the <code>DragSourceDragEvent</code>
                 */
                // @ts-ignore
                public dropActionChanged(dsde: java.awt.dnd.DragSourceDragEvent): void
                /**
                 * Calls <code>dragDropEnd</code> on the
                 * <code>DragSourceListener</code>s registered with this
                 * <code>DragSourceContext</code> and with the associated
                 * <code>DragSource</code>, and passes them the specified
                 * <code>DragSourceDropEvent</code>.
                 * @param dsde the <code>DragSourceDropEvent</code>
                 */
                // @ts-ignore
                public dragDropEnd(dsde: java.awt.dnd.DragSourceDropEvent): void
                /**
                 * Calls <code>dragMouseMoved</code> on the
                 * <code>DragSourceMotionListener</code>s registered with the
                 * <code>DragSource</code> associated with this
                 * <code>DragSourceContext</code>, and them passes the specified
                 * <code>DragSourceDragEvent</code>.
                 * @param dsde the <code>DragSourceDragEvent</code>
                 * @since 1.4
                 */
                // @ts-ignore
                public dragMouseMoved(dsde: java.awt.dnd.DragSourceDragEvent): void
                /**
                 * Returns the <code>Transferable</code> associated with
                 * this <code>DragSourceContext</code>.
                 * @return the <code>Transferable</code>
                 */
                // @ts-ignore
                public getTransferable(): java.awt.datatransfer.Transferable
                /**
                 * If the default drag cursor behavior is active, this method
                 * sets the default drag cursor for the specified actions
                 * supported by the drag source, the drop target action,
                 * and status, otherwise this method does nothing.
                 * @param sourceAct the actions supported by the drag source
                 * @param targetAct the drop target action
                 * @param status one of the fields <code>DEFAULT</code>,
                 *                <code>ENTER</code>, <code>OVER</code>,
                 *                <code>CHANGED</code>
                 */
                // @ts-ignore
                updateCurrentCursor(sourceAct: number /*int*/, targetAct: number /*int*/, status: number /*int*/): void
            }
        }
    }
}
