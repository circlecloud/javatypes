declare namespace java {
    namespace awt {
        namespace event {
            /**
             * An abstract adapter class for receiving component events.
             * The methods in this class are empty. This class exists as
             * convenience for creating listener objects.
             * <P>
             * Extend this class to create a <code>ComponentEvent</code> listener
             * and override the methods for the events of interest. (If you implement the
             * <code>ComponentListener</code> interface, you have to define all of
             * the methods in it. This abstract class defines null methods for them
             * all, so you can only have to define methods for events you care about.)
             * <P>
             * Create a listener object using your class and then register it with a
             * component using the component's <code>addComponentListener</code>
             * method. When the component's size, location, or visibility
             * changes, the relevant method in the listener object is invoked,
             * and the <code>ComponentEvent</code> is passed to it.
             * @see ComponentEvent
             * @see ComponentListener
             * @see <a href="https://docs.oracle.com/javase/tutorial/uiswing/events/componentlistener.html">Tutorial: Writing a Component Listener</a>
             * @author Carl Quinn
             * @since 1.1
             */
            // @ts-ignore
            class ComponentAdapter extends java.lang.Object implements java.awt.event.ComponentListener {
                // @ts-ignore
                constructor()
                /**
                 * Invoked when the component's size changes.
                 */
                // @ts-ignore
                componentResized(e: java.awt.event.ComponentEvent): void
                /**
                 * Invoked when the component's position changes.
                 */
                // @ts-ignore
                componentMoved(e: java.awt.event.ComponentEvent): void
                /**
                 * Invoked when the component has been made visible.
                 */
                // @ts-ignore
                componentShown(e: java.awt.event.ComponentEvent): void
                /**
                 * Invoked when the component has been made invisible.
                 */
                // @ts-ignore
                componentHidden(e: java.awt.event.ComponentEvent): void
            }
        }
    }
}
