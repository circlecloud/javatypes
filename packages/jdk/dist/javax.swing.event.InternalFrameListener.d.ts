declare namespace javax {
    namespace swing {
        namespace event {
            /**
             * The listener interface for receiving internal frame events.
             * This class is functionally equivalent to the WindowListener class
             * in the AWT.
             * <p>
             * See <a href="https://docs.oracle.com/javase/tutorial/uiswing/events/internalframelistener.html">How to Write an Internal Frame Listener</a>
             * in <em>The Java Tutorial</em> for further documentation.
             * @see java.awt.event.WindowListener
             * @author Thomas Ball
             */
            // @ts-ignore
            interface InternalFrameListener extends java.util.EventListener {
                /**
                 * Invoked when a internal frame has been opened.
                 * @see javax.swing.JInternalFrame#show
                 */
                // @ts-ignore
                internalFrameOpened(e: javax.swing.event.InternalFrameEvent): void
                /**
                 * Invoked when an internal frame is in the process of being closed.
                 * The close operation can be overridden at this point.
                 * @see javax.swing.JInternalFrame#setDefaultCloseOperation
                 */
                // @ts-ignore
                internalFrameClosing(e: javax.swing.event.InternalFrameEvent): void
                /**
                 * Invoked when an internal frame has been closed.
                 * @see javax.swing.JInternalFrame#setClosed
                 */
                // @ts-ignore
                internalFrameClosed(e: javax.swing.event.InternalFrameEvent): void
                /**
                 * Invoked when an internal frame is iconified.
                 * @see javax.swing.JInternalFrame#setIcon
                 */
                // @ts-ignore
                internalFrameIconified(e: javax.swing.event.InternalFrameEvent): void
                /**
                 * Invoked when an internal frame is de-iconified.
                 * @see javax.swing.JInternalFrame#setIcon
                 */
                // @ts-ignore
                internalFrameDeiconified(e: javax.swing.event.InternalFrameEvent): void
                /**
                 * Invoked when an internal frame is activated.
                 * @see javax.swing.JInternalFrame#setSelected
                 */
                // @ts-ignore
                internalFrameActivated(e: javax.swing.event.InternalFrameEvent): void
                /**
                 * Invoked when an internal frame is de-activated.
                 * @see javax.swing.JInternalFrame#setSelected
                 */
                // @ts-ignore
                internalFrameDeactivated(e: javax.swing.event.InternalFrameEvent): void
            }
        }
    }
}
