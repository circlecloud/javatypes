declare namespace java {
    namespace awt {
        namespace dnd {
            /**
             * A <code>DragGestureEvent</code> is passed
             * to <code>DragGestureListener</code>'s
             * dragGestureRecognized() method
             * when a particular <code>DragGestureRecognizer</code> detects that a
             * platform dependent drag initiating gesture has occurred
             * on the <code>Component</code> that it is tracking.
             * The {@code action} field of any {@code DragGestureEvent} instance should take one of the following
             * values:
             * <ul>
             * <li> {@code DnDConstants.ACTION_COPY}
             * <li> {@code DnDConstants.ACTION_MOVE}
             * <li> {@code DnDConstants.ACTION_LINK}
             * </ul>
             * Assigning the value different from listed above will cause an unspecified behavior.
             * @see java.awt.dnd.DragGestureRecognizer
             * @see java.awt.dnd.DragGestureListener
             * @see java.awt.dnd.DragSource
             * @see java.awt.dnd.DnDConstants
             */
            // @ts-ignore
            class DragGestureEvent extends java.util.EventObject {
                /**
                 * Constructs a <code>DragGestureEvent</code> object given by the
                 * <code>DragGestureRecognizer</code> instance firing this event,
                 * an {@code act} parameter representing
                 * the user's preferred action, an {@code ori} parameter
                 * indicating the origin of the drag, and a {@code List} of
                 * events that comprise the gesture({@code evs} parameter).
                 * <P>
                 * @param dgr The <code>DragGestureRecognizer</code> firing this event
                 * @param act The user's preferred action.
                 *             For information on allowable values, see
                 *             the class description for {#link DragGestureEvent}
                 * @param ori The origin of the drag
                 * @param evs The <code>List</code> of events that comprise the gesture
                 *  <P>
                 * @throws IllegalArgumentException if any parameter equals {#code null}
                 * @throws IllegalArgumentException if the act parameter does not comply with
                 *                                   the values given in the class
                 *                                   description for {#link DragGestureEvent}
                 * @see java.awt.dnd.DnDConstants
                 */
                // @ts-ignore
                constructor(dgr: java.awt.dnd.DragGestureRecognizer, act: number /*int*/, ori: java.awt.Point, evs: java.util.List<any> | Array<any>)
                /**
                 * Returns the source as a <code>DragGestureRecognizer</code>.
                 * <P>
                 * @return the source as a <code>DragGestureRecognizer</code>
                 */
                // @ts-ignore
                public getSourceAsDragGestureRecognizer(): java.awt.dnd.DragGestureRecognizer
                /**
                 * Returns the <code>Component</code> associated
                 * with this <code>DragGestureEvent</code>.
                 * <P>
                 * @return the Component
                 */
                // @ts-ignore
                public getComponent(): java.awt.Component
                /**
                 * Returns the <code>DragSource</code>.
                 * <P>
                 * @return the <code>DragSource</code>
                 */
                // @ts-ignore
                public getDragSource(): java.awt.dnd.DragSource
                /**
                 * Returns a <code>Point</code> in the coordinates
                 * of the <code>Component</code> over which the drag originated.
                 * <P>
                 * @return the Point where the drag originated in Component coords.
                 */
                // @ts-ignore
                public getDragOrigin(): java.awt.Point
                /**
                 * Returns an <code>Iterator</code> for the events
                 * comprising the gesture.
                 * <P>
                 * @return an Iterator for the events comprising the gesture
                 */
                // @ts-ignore
                public iterator(): java.util.Iterator<java.awt.event.InputEvent>
                /**
                 * Returns an <code>Object</code> array of the
                 * events comprising the drag gesture.
                 * <P>
                 * @return an array of the events comprising the gesture
                 */
                // @ts-ignore
                public toArray(): any[]
                /**
                 * Returns an array of the events comprising the drag gesture.
                 * <P>
                 * @param array the array of <code>EventObject</code> sub(types)
                 *  <P>
                 * @return an array of the events comprising the gesture
                 */
                // @ts-ignore
                public toArray(array: java.lang.Object[] | any[]): any[]
                /**
                 * Returns an <code>int</code> representing the
                 * action selected by the user.
                 * <P>
                 * @return the action selected by the user
                 */
                // @ts-ignore
                public getDragAction(): number /*int*/
                /**
                 * Returns the initial event that triggered the gesture.
                 * <P>
                 * @return the first "triggering" event in the sequence of the gesture
                 */
                // @ts-ignore
                public getTriggerEvent(): java.awt.event.InputEvent
                /**
                 * Starts the drag operation given the <code>Cursor</code> for this drag
                 * operation and the <code>Transferable</code> representing the source data
                 * for this drag operation.
                 * <br>
                 * If a <code>null</code> <code>Cursor</code> is specified no exception will
                 * be thrown and default drag cursors will be used instead.
                 * <br>
                 * If a <code>null</code> <code>Transferable</code> is specified
                 * <code>NullPointerException</code> will be thrown.
                 * @param dragCursor     The initial {#code Cursor} for this drag operation
                 *                        or {@code null} for the default cursor handling;
                 *                        see
                 *                        <a href="DragSourceContext.html#defaultCursor">DragSourceContext</a>
                 *                        for more details on the cursor handling mechanism
                 *                        during drag and drop
                 * @param transferable The <code>Transferable</code> representing the source
                 *                      data for this drag operation.
                 * @throws InvalidDnDOperationException if the Drag and Drop
                 *          system is unable to initiate a drag operation, or if the user
                 *          attempts to start a drag while an existing drag operation is
                 *          still executing.
                 * @throws NullPointerException if the {#code Transferable} is {@code null}
                 * @since 1.4
                 */
                // @ts-ignore
                public startDrag(dragCursor: java.awt.Cursor, transferable: java.awt.datatransfer.Transferable): void
                /**
                 * Starts the drag given the initial <code>Cursor</code> to display,
                 * the <code>Transferable</code> object,
                 * and the <code>DragSourceListener</code> to use.
                 * <P>
                 * @param dragCursor     The initial {#code Cursor} for this drag operation
                 *                        or {@code null} for the default cursor handling;
                 *                        see
                 *                        <a href="DragSourceContext.html#defaultCursor">DragSourceContext</a>
                 *                        for more details on the cursor handling mechanism
                 *                        during drag and drop
                 * @param transferable The source's Transferable
                 * @param dsl          The source's DragSourceListener
                 *  <P>
                 * @throws InvalidDnDOperationException if
                 *  the Drag and Drop system is unable to
                 *  initiate a drag operation, or if the user
                 *  attempts to start a drag while an existing
                 *  drag operation is still executing.
                 */
                // @ts-ignore
                public startDrag(dragCursor: java.awt.Cursor, transferable: java.awt.datatransfer.Transferable, dsl: java.awt.dnd.DragSourceListener): void
                /**
                 * Start the drag given the initial <code>Cursor</code> to display,
                 * a drag <code>Image</code>, the offset of
                 * the <code>Image</code>,
                 * the <code>Transferable</code> object, and
                 * the <code>DragSourceListener</code> to use.
                 * <P>
                 * @param dragCursor     The initial {#code Cursor} for this drag operation
                 *                        or {@code null} for the default cursor handling;
                 *                        see
                 *                        <a href="DragSourceContext.html#defaultCursor">DragSourceContext</a>
                 *                        for more details on the cursor handling mechanism
                 *                        during drag and drop
                 * @param dragImage    The source's dragImage
                 * @param imageOffset  The dragImage's offset
                 * @param transferable The source's Transferable
                 * @param dsl          The source's DragSourceListener
                 *  <P>
                 * @throws InvalidDnDOperationException if
                 *  the Drag and Drop system is unable to
                 *  initiate a drag operation, or if the user
                 *  attempts to start a drag while an existing
                 *  drag operation is still executing.
                 */
                // @ts-ignore
                public startDrag(dragCursor: java.awt.Cursor, dragImage: java.awt.Image, imageOffset: java.awt.Point, transferable: java.awt.datatransfer.Transferable, dsl: java.awt.dnd.DragSourceListener): void
            }
        }
    }
}
