declare namespace java {
    namespace awt {
        namespace event {
            /**
             * An abstract adapter class for receiving keyboard events.
             * The methods in this class are empty. This class exists as
             * convenience for creating listener objects.
             * <P>
             * Extend this class to create a <code>KeyEvent</code> listener
             * and override the methods for the events of interest. (If you implement the
             * <code>KeyListener</code> interface, you have to define all of
             * the methods in it. This abstract class defines null methods for them
             * all, so you can only have to define methods for events you care about.)
             * <P>
             * Create a listener object using the extended class and then register it with
             * a component using the component's <code>addKeyListener</code>
             * method. When a key is pressed, released, or typed,
             * the relevant method in the listener object is invoked,
             * and the <code>KeyEvent</code> is passed to it.
             * @author Carl Quinn
             * @see KeyEvent
             * @see KeyListener
             * @see <a href="https://docs.oracle.com/javase/tutorial/uiswing/events/keylistener.html">Tutorial: Writing a Key Listener</a>
             * @since 1.1
             */
            // @ts-ignore
            class KeyAdapter extends java.lang.Object implements java.awt.event.KeyListener {
                // @ts-ignore
                constructor()
                /**
                 * Invoked when a key has been typed.
                 * This event occurs when a key press is followed by a key release.
                 */
                // @ts-ignore
                keyTyped(e: java.awt.event.KeyEvent): void
                /**
                 * Invoked when a key has been pressed.
                 */
                // @ts-ignore
                keyPressed(e: java.awt.event.KeyEvent): void
                /**
                 * Invoked when a key has been released.
                 */
                // @ts-ignore
                keyReleased(e: java.awt.event.KeyEvent): void
            }
        }
    }
}
