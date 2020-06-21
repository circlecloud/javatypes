declare namespace java {
    namespace awt {
        namespace dnd {
            /**
             * This abstract subclass of <code>DragGestureRecognizer</code>
             * defines a <code>DragGestureRecognizer</code>
             * for mouse-based gestures.
             * Each platform implements its own concrete subclass of this class,
             * available via the Toolkit.createDragGestureRecognizer() method,
             * to encapsulate
             * the recognition of the platform dependent mouse gesture(s) that initiate
             * a Drag and Drop operation.
             * <p>
             * Mouse drag gesture recognizers should honor the
             * drag gesture motion threshold, available through
             * {@link DragSource#getDragThreshold}.
             * A drag gesture should be recognized only when the distance
             * in either the horizontal or vertical direction between
             * the location of the latest mouse dragged event and the
             * location of the corresponding mouse button pressed event
             * is greater than the drag gesture motion threshold.
             * <p>
             * Drag gesture recognizers created with
             * {@link DragSource#createDefaultDragGestureRecognizer}
             * follow this convention.
             * @author Laurence P. G. Cable
             * @see java.awt.dnd.DragGestureListener
             * @see java.awt.dnd.DragGestureEvent
             * @see java.awt.dnd.DragSource
             */
            // @ts-ignore
            abstract class MouseDragGestureRecognizer extends java.awt.dnd.DragGestureRecognizer implements java.awt.event.MouseListener, java.awt.event.MouseMotionListener {
                /**
                 * Construct a new <code>MouseDragGestureRecognizer</code>
                 * given the <code>DragSource</code> for the
                 * <code>Component</code> c, the <code>Component</code>
                 * to observe, the action(s)
                 * permitted for this drag operation, and
                 * the <code>DragGestureListener</code> to
                 * notify when a drag gesture is detected.
                 * <P>
                 * @param ds  The DragSource for the Component c
                 * @param c   The Component to observe
                 * @param act The actions permitted for this Drag
                 * @param dgl The DragGestureListener to notify when a gesture is detected
                 */
                // @ts-ignore
                constructor(ds: java.awt.dnd.DragSource, c: java.awt.Component, act: number /*int*/, dgl: java.awt.dnd.DragGestureListener)
                /**
                 * Construct a new <code>MouseDragGestureRecognizer</code>
                 * given the <code>DragSource</code> for
                 * the <code>Component</code> c,
                 * the <code>Component</code> to observe, and the action(s)
                 * permitted for this drag operation.
                 * <P>
                 * @param ds  The DragSource for the Component c
                 * @param c   The Component to observe
                 * @param act The actions permitted for this drag
                 */
                // @ts-ignore
                constructor(ds: java.awt.dnd.DragSource, c: java.awt.Component, act: number /*int*/)
                /**
                 * Construct a new <code>MouseDragGestureRecognizer</code>
                 * given the <code>DragSource</code> for the
                 * <code>Component</code> c, and the
                 * <code>Component</code> to observe.
                 * <P>
                 * @param ds  The DragSource for the Component c
                 * @param c   The Component to observe
                 */
                // @ts-ignore
                constructor(ds: java.awt.dnd.DragSource, c: java.awt.Component)
                /**
                 * Construct a new <code>MouseDragGestureRecognizer</code>
                 * given the <code>DragSource</code> for the <code>Component</code>.
                 * <P>
                 * @param ds  The DragSource for the Component
                 */
                // @ts-ignore
                constructor(ds: java.awt.dnd.DragSource)
                /**
                 * register this DragGestureRecognizer's Listeners with the Component
                 */
                // @ts-ignore
                registerListeners(): void
                /**
                 * unregister this DragGestureRecognizer's Listeners with the Component
                 * subclasses must override this method
                 */
                // @ts-ignore
                unregisterListeners(): void
                /**
                 * Invoked when the mouse has been clicked on a component.
                 * <P>
                 * @param e the <code>MouseEvent</code>
                 */
                // @ts-ignore
                public mouseClicked(e: java.awt.event.MouseEvent): void
                /**
                 * Invoked when a mouse button has been
                 * pressed on a <code>Component</code>.
                 * <P>
                 * @param e the <code>MouseEvent</code>
                 */
                // @ts-ignore
                public mousePressed(e: java.awt.event.MouseEvent): void
                /**
                 * Invoked when a mouse button has been released on a component.
                 * <P>
                 * @param e the <code>MouseEvent</code>
                 */
                // @ts-ignore
                public mouseReleased(e: java.awt.event.MouseEvent): void
                /**
                 * Invoked when the mouse enters a component.
                 * <P>
                 * @param e the <code>MouseEvent</code>
                 */
                // @ts-ignore
                public mouseEntered(e: java.awt.event.MouseEvent): void
                /**
                 * Invoked when the mouse exits a component.
                 * <P>
                 * @param e the <code>MouseEvent</code>
                 */
                // @ts-ignore
                public mouseExited(e: java.awt.event.MouseEvent): void
                /**
                 * Invoked when a mouse button is pressed on a component.
                 * <P>
                 * @param e the <code>MouseEvent</code>
                 */
                // @ts-ignore
                public mouseDragged(e: java.awt.event.MouseEvent): void
                /**
                 * Invoked when the mouse button has been moved on a component
                 * (with no buttons no down).
                 * <P>
                 * @param e the <code>MouseEvent</code>
                 */
                // @ts-ignore
                public mouseMoved(e: java.awt.event.MouseEvent): void
            }
        }
    }
}
