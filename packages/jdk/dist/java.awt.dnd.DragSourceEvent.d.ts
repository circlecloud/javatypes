declare namespace java {
    namespace awt {
        namespace dnd {
            /**
             * This class is the base class for
             * <code>DragSourceDragEvent</code> and
             * <code>DragSourceDropEvent</code>.
             * <p>
             * <code>DragSourceEvent</code>s are generated whenever the drag enters, moves
             * over, or exits a drop site, when the drop action changes, and when the drag
             * ends. The location for the generated <code>DragSourceEvent</code> specifies
             * the mouse cursor location in screen coordinates at the moment this event
             * occurred.
             * <p>
             * In a multi-screen environment without a virtual device, the cursor location is
             * specified in the coordinate system of the <i>initiator</i>
             * <code>GraphicsConfiguration</code>. The <i>initiator</i>
             * <code>GraphicsConfiguration</code> is the <code>GraphicsConfiguration</code>
             * of the <code>Component</code> on which the drag gesture for the current drag
             * operation was recognized. If the cursor location is outside the bounds of
             * the initiator <code>GraphicsConfiguration</code>, the reported coordinates are
             * clipped to fit within the bounds of that <code>GraphicsConfiguration</code>.
             * <p>
             * In a multi-screen environment with a virtual device, the location is specified
             * in the corresponding virtual coordinate system. If the cursor location is
             * outside the bounds of the virtual device the reported coordinates are
             * clipped to fit within the bounds of the virtual device.
             * @since 1.2
             */
            // @ts-ignore
            class DragSourceEvent extends java.util.EventObject {
                /**
                 * Construct a <code>DragSourceEvent</code>
                 * given a specified <code>DragSourceContext</code>.
                 * The coordinates for this <code>DragSourceEvent</code>
                 * are not specified, so <code>getLocation</code> will return
                 * <code>null</code> for this event.
                 * @param dsc the <code>DragSourceContext</code>
                 * @throws IllegalArgumentException if <code>dsc</code> is <code>null</code>.
                 * @see #getLocation
                 */
                // @ts-ignore
                constructor(dsc: java.awt.dnd.DragSourceContext)
                /**
                 * Construct a <code>DragSourceEvent</code> given a specified
                 * <code>DragSourceContext</code>, and coordinates of the cursor
                 * location.
                 * @param dsc the <code>DragSourceContext</code>
                 * @param x   the horizontal coordinate for the cursor location
                 * @param y   the vertical coordinate for the cursor location
                 * @throws IllegalArgumentException if <code>dsc</code> is <code>null</code>.
                 * @since 1.4
                 */
                // @ts-ignore
                constructor(dsc: java.awt.dnd.DragSourceContext, x: number /*int*/, y: number /*int*/)
                /**
                 * This method returns the <code>DragSourceContext</code> that
                 * originated the event.
                 * <P>
                 * @return the <code>DragSourceContext</code> that originated the event
                 */
                // @ts-ignore
                public getDragSourceContext(): java.awt.dnd.DragSourceContext
                /**
                 * This method returns a <code>Point</code> indicating the cursor
                 * location in screen coordinates at the moment this event occurred, or
                 * <code>null</code> if the cursor location is not specified for this
                 * event.
                 * @return the <code>Point</code> indicating the cursor location
                 *          or <code>null</code> if the cursor location is not specified
                 * @since 1.4
                 */
                // @ts-ignore
                public getLocation(): java.awt.Point
                /**
                 * This method returns the horizontal coordinate of the cursor location in
                 * screen coordinates at the moment this event occurred, or zero if the
                 * cursor location is not specified for this event.
                 * @return an integer indicating the horizontal coordinate of the cursor
                 *          location or zero if the cursor location is not specified
                 * @since 1.4
                 */
                // @ts-ignore
                public getX(): number /*int*/
                /**
                 * This method returns the vertical coordinate of the cursor location in
                 * screen coordinates at the moment this event occurred, or zero if the
                 * cursor location is not specified for this event.
                 * @return an integer indicating the vertical coordinate of the cursor
                 *          location or zero if the cursor location is not specified
                 * @since 1.4
                 */
                // @ts-ignore
                public getY(): number /*int*/
            }
        }
    }
}
