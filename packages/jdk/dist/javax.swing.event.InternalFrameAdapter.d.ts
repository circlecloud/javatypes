declare namespace javax {
    namespace swing {
        namespace event {
            /**
             * An abstract adapter class for receiving internal frame events.
             * The methods in this class are empty. This class exists as
             * convenience for creating listener objects, and is functionally
             * equivalent to the WindowAdapter class in the AWT.
             * <p>
             * See <a href="https://docs.oracle.com/javase/tutorial/uiswing/events/internalframelistener.html">How to Write an Internal Frame Listener</a>
             * in <em>The Java Tutorial</em>
             * @see InternalFrameEvent
             * @see InternalFrameListener
             * @see java.awt.event.WindowListener
             * @author Thomas Ball
             */
            // @ts-ignore
            class InternalFrameAdapter extends java.lang.Object implements javax.swing.event.InternalFrameListener {
                // @ts-ignore
                constructor()
                /**
                 * Invoked when an internal frame has been opened.
                 */
                // @ts-ignore
                internalFrameOpened(e: javax.swing.event.InternalFrameEvent): void
                /**
                 * Invoked when an internal frame is in the process of being closed.
                 * The close operation can be overridden at this point.
                 */
                // @ts-ignore
                internalFrameClosing(e: javax.swing.event.InternalFrameEvent): void
                /**
                 * Invoked when an internal frame has been closed.
                 */
                // @ts-ignore
                internalFrameClosed(e: javax.swing.event.InternalFrameEvent): void
                /**
                 * Invoked when an internal frame is iconified.
                 */
                // @ts-ignore
                internalFrameIconified(e: javax.swing.event.InternalFrameEvent): void
                /**
                 * Invoked when an internal frame is de-iconified.
                 */
                // @ts-ignore
                internalFrameDeiconified(e: javax.swing.event.InternalFrameEvent): void
                /**
                 * Invoked when an internal frame is activated.
                 */
                // @ts-ignore
                internalFrameActivated(e: javax.swing.event.InternalFrameEvent): void
                /**
                 * Invoked when an internal frame is de-activated.
                 */
                // @ts-ignore
                internalFrameDeactivated(e: javax.swing.event.InternalFrameEvent): void
            }
        }
    }
}
