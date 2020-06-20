declare namespace javax {
    namespace swing {
        namespace event {
            /**
             * An <code>AWTEvent</code> that adds support for
             * <code>JInternalFrame</code> objects as the event source.  This class has the
             * same event types as <code>WindowEvent</code>,
             * although different IDs are used.
             * Help on handling internal frame events
             * is in
             * <a href="https://docs.oracle.com/javase/tutorial/uiswing/events/internalframelistener.html" target="_top">How to Write an Internal Frame Listener</a>,
             * a section in <em>The Java Tutorial</em>.
             * <p>
             * <strong>Warning:</strong>
             * Serialized objects of this class will not be compatible with
             * future Swing releases. The current serialization support is
             * appropriate for short term storage or RMI between applications running
             * the same version of Swing.  As of 1.4, support for long term storage
             * of all JavaBeans&trade;
             * has been added to the <code>java.beans</code> package.
             * Please see {@link java.beans.XMLEncoder}.
             * @see java.awt.event.WindowEvent
             * @see java.awt.event.WindowListener
             * @see JInternalFrame
             * @see InternalFrameListener
             * @author Thomas Ball
             */
            // @ts-ignore
            class InternalFrameEvent extends java.awt.AWTEvent {
                /**
                 * Constructs an <code>InternalFrameEvent</code> object.
                 * @param source the <code>JInternalFrame</code> object that originated the event
                 * @param id     an integer indicating the type of event
                 */
                // @ts-ignore
                constructor(source: javax.swing.JInternalFrame, id: number /*int*/)
                /**
                 * The first number in the range of IDs used for internal frame events.
                 */
                // @ts-ignore
                readonly INTERNAL_FRAME_FIRST: number /*int*/
                /**
                 * The last number in the range of IDs used for internal frame events.
                 */
                // @ts-ignore
                readonly INTERNAL_FRAME_LAST: number /*int*/
                /**
                 * The "window opened" event.  This event is delivered only
                 * the first time the internal frame is made visible.
                 * @see JInternalFrame#show
                 */
                // @ts-ignore
                readonly INTERNAL_FRAME_OPENED: number /*int*/
                /**
                 * The "window is closing" event. This event is delivered when
                 * the user attempts to close the internal frame, such as by
                 * clicking the internal frame's close button,
                 * or when a program attempts to close the internal frame
                 * by invoking the <code>setClosed</code> method.
                 * @see JInternalFrame#setDefaultCloseOperation
                 * @see JInternalFrame#doDefaultCloseAction
                 * @see JInternalFrame#setClosed
                 */
                // @ts-ignore
                readonly INTERNAL_FRAME_CLOSING: number /*int*/
                /**
                 * The "window closed" event. This event is delivered after
                 * the internal frame has been closed as the result of a call to
                 * the <code>setClosed</code> or
                 * <code>dispose</code> method.
                 * @see JInternalFrame#setClosed
                 * @see JInternalFrame#dispose
                 */
                // @ts-ignore
                readonly INTERNAL_FRAME_CLOSED: number /*int*/
                /**
                 * The "window iconified" event.
                 * This event indicates that the internal frame
                 * was shrunk down to a small icon.
                 * @see JInternalFrame#setIcon
                 */
                // @ts-ignore
                readonly INTERNAL_FRAME_ICONIFIED: number /*int*/
                /**
                 * The "window deiconified" event type. This event indicates that the
                 * internal frame has been restored to its normal size.
                 * @see JInternalFrame#setIcon
                 */
                // @ts-ignore
                readonly INTERNAL_FRAME_DEICONIFIED: number /*int*/
                /**
                 * The "window activated" event type. This event indicates that keystrokes
                 * and mouse clicks are directed towards this internal frame.
                 * @see JInternalFrame#show
                 * @see JInternalFrame#setSelected
                 */
                // @ts-ignore
                readonly INTERNAL_FRAME_ACTIVATED: number /*int*/
                /**
                 * The "window deactivated" event type. This event indicates that keystrokes
                 * and mouse clicks are no longer directed to the internal frame.
                 * @see JInternalFrame#setSelected
                 */
                // @ts-ignore
                readonly INTERNAL_FRAME_DEACTIVATED: number /*int*/
                /**
                 * Returns a parameter string identifying this event.
                 * This method is useful for event logging and for debugging.
                 * @return a string identifying the event and its attributes
                 */
                // @ts-ignore
                paramString(): java.lang.String
                /**
                 * Returns the originator of the event.
                 * @return the <code>JInternalFrame</code> object that originated the event
                 * @since 1.3
                 */
                // @ts-ignore
                getInternalFrame(): javax.swing.JInternalFrame
            }
        }
    }
}
