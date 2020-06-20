declare namespace java {
    namespace awt {
        namespace event {
            /**
             * An abstract adapter class for receiving keyboard focus events.
             * The methods in this class are empty. This class exists as
             * convenience for creating listener objects.
             * <P>
             * Extend this class to create a <code>FocusEvent</code> listener
             * and override the methods for the events of interest. (If you implement the
             * <code>FocusListener</code> interface, you have to define all of
             * the methods in it. This abstract class defines null methods for them
             * all, so you can only have to define methods for events you care about.)
             * <P>
             * Create a listener object using the extended class and then register it with
             * a component using the component's <code>addFocusListener</code>
             * method. When the component gains or loses the keyboard focus,
             * the relevant method in the listener object is invoked,
             * and the <code>FocusEvent</code> is passed to it.
             * @see FocusEvent
             * @see FocusListener
             * @see <a href="https://docs.oracle.com/javase/tutorial/uiswing/events/focuslistener.html">Tutorial: Writing a Focus Listener</a>
             * @author Carl Quinn
             * @since 1.1
             */
            // @ts-ignore
            class FocusAdapter extends java.lang.Object implements java.awt.event.FocusListener {
                // @ts-ignore
                constructor()
                /**
                 * Invoked when a component gains the keyboard focus.
                 */
                // @ts-ignore
                focusGained(e: java.awt.event.FocusEvent): void
                /**
                 * Invoked when a component loses the keyboard focus.
                 */
                // @ts-ignore
                focusLost(e: java.awt.event.FocusEvent): void
            }
        }
    }
}
