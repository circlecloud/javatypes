declare namespace java {
    namespace awt {
        namespace event {
            /**
             * An abstract adapter class for receiving mouse events.
             * The methods in this class are empty. This class exists as
             * convenience for creating listener objects.
             * <P>
             * Mouse events let you track when a mouse is pressed, released, clicked,
             * moved, dragged, when it enters a component, when it exits and
             * when a mouse wheel is moved.
             * <P>
             * Extend this class to create a {@code MouseEvent}
             * (including drag and motion events) or/and {@code MouseWheelEvent}
             * listener and override the methods for the events of interest. (If you implement the
             * {@code MouseListener},
             * {@code MouseMotionListener}
             * interface, you have to define all of
             * the methods in it. This abstract class defines null methods for them
             * all, so you can only have to define methods for events you care about.)
             * <P>
             * Create a listener object using the extended class and then register it with
             * a component using the component's {@code addMouseListener}
             * {@code addMouseMotionListener}, {@code addMouseWheelListener}
             * methods.
             * The relevant method in the listener object is invoked  and the {@code MouseEvent}
             * or {@code MouseWheelEvent}  is passed to it in following cases:
             * <ul>
             * <li>when a mouse button is pressed, released, or clicked (pressed and  released)
             * <li>when the mouse cursor enters or exits the component
             * <li>when the mouse wheel rotated, or mouse moved or dragged
             * </ul>
             * @author Carl Quinn
             * @author Andrei Dmitriev
             * @see MouseEvent
             * @see MouseWheelEvent
             * @see MouseListener
             * @see MouseMotionListener
             * @see MouseWheelListener
             * @see <a href="https://docs.oracle.com/javase/tutorial/uiswing/events/mouselistener.html">Tutorial: Writing a Mouse Listener</a>
             * @since 1.1
             */
            // @ts-ignore
            abstract class MouseAdapter extends java.lang.Object implements java.awt.event.MouseListener, java.awt.event.MouseWheelListener, java.awt.event.MouseMotionListener {
                // @ts-ignore
                constructor()
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public mouseClicked(e: java.awt.event.MouseEvent): void
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public mousePressed(e: java.awt.event.MouseEvent): void
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public mouseReleased(e: java.awt.event.MouseEvent): void
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public mouseEntered(e: java.awt.event.MouseEvent): void
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public mouseExited(e: java.awt.event.MouseEvent): void
                /**
                 * {@inheritDoc}
                 * @since 1.6
                 */
                // @ts-ignore
                public mouseWheelMoved(e: java.awt.event.MouseWheelEvent): void
                /**
                 * {@inheritDoc}
                 * @since 1.6
                 */
                // @ts-ignore
                public mouseDragged(e: java.awt.event.MouseEvent): void
                /**
                 * {@inheritDoc}
                 * @since 1.6
                 */
                // @ts-ignore
                public mouseMoved(e: java.awt.event.MouseEvent): void
            }
        }
    }
}
