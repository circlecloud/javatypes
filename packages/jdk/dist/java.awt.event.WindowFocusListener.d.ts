declare namespace java {
    namespace awt {
        namespace event {
            /**
             * The listener interface for receiving <code>WindowEvents</code>, including
             * <code>WINDOW_GAINED_FOCUS</code> and <code>WINDOW_LOST_FOCUS</code> events.
             * The class that is interested in processing a <code>WindowEvent</code>
             * either implements this interface (and
             * all the methods it contains) or extends the abstract
             * <code>WindowAdapter</code> class (overriding only the methods of interest).
             * The listener object created from that class is then registered with a
             * <code>Window</code>
             * using the <code>Window</code>'s <code>addWindowFocusListener</code> method.
             * When the <code>Window</code>'s
             * status changes by virtue of it being opened, closed, activated, deactivated,
             * iconified, or deiconified, or by focus being transfered into or out of the
             * <code>Window</code>, the relevant method in the listener object is invoked,
             * and the <code>WindowEvent</code> is passed to it.
             * @author David Mendenhall
             * @see WindowAdapter
             * @see WindowEvent
             * @see <a href="https://docs.oracle.com/javase/tutorial/uiswing/events/windowlistener.html">Tutorial: Writing a Window Listener</a>
             * @since 1.4
             */
            // @ts-ignore
            interface WindowFocusListener extends java.util.EventListener {
                /**
                 * Invoked when the Window is set to be the focused Window, which means
                 * that the Window, or one of its subcomponents, will receive keyboard
                 * events.
                 */
                // @ts-ignore
                windowGainedFocus(e: java.awt.event.WindowEvent): void
                /**
                 * Invoked when the Window is no longer the focused Window, which means
                 * that keyboard events will no longer be delivered to the Window or any of
                 * its subcomponents.
                 */
                // @ts-ignore
                windowLostFocus(e: java.awt.event.WindowEvent): void
            }
        }
    }
}
