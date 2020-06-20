declare namespace javax {
    namespace swing {
        namespace event {
            /**
             * MenuKeyEvent is used to notify interested parties that
             * the menu element has received a KeyEvent forwarded to it
             * in a menu tree.
             * <p>
             * <strong>Warning:</strong>
             * Serialized objects of this class will not be compatible with
             * future Swing releases. The current serialization support is
             * appropriate for short term storage or RMI between applications running
             * the same version of Swing.  As of 1.4, support for long term storage
             * of all JavaBeans&trade;
             * has been added to the <code>java.beans</code> package.
             * Please see {@link java.beans.XMLEncoder}.
             * @author Georges Saab
             */
            // @ts-ignore
            class MenuKeyEvent extends java.awt.event.KeyEvent {
                /**
                 * Constructs a MenuKeyEvent object.
                 * @param source     the Component that originated the event
                 *                      (typically <code>this</code>)
                 * @param id         an int specifying the type of event, as defined
                 *                      in {#link java.awt.event.KeyEvent}
                 * @param when       a long identifying the time the event occurred
                 * @param modifiers     an int specifying any modifier keys held down,
                 *                       as specified in {#link java.awt.event.InputEvent}
                 * @param keyCode    an int specifying the specific key that was pressed
                 * @param keyChar    a char specifying the key's character value, if any
                 *                    -- null if the key has no character value
                 * @param p          an array of MenuElement objects specifying a path
                 *                      to a menu item affected by the drag
                 * @param m          a MenuSelectionManager object that handles selections
                 */
                // @ts-ignore
                constructor(source: java.awt.Component, id: number /*int*/, when: number /*long*/, modifiers: number /*int*/, keyCode: number /*int*/, keyChar: string, p: javax.swing.MenuElement[], m: javax.swing.MenuSelectionManager)
                /**
                 * Returns the path to the menu item referenced by this event.
                 * @return an array of MenuElement objects representing the path value
                 */
                // @ts-ignore
                getPath(): javax.swing.MenuElement[]
                /**
                 * Returns the current menu selection manager.
                 * @return a MenuSelectionManager object
                 */
                // @ts-ignore
                getMenuSelectionManager(): javax.swing.MenuSelectionManager
            }
        }
    }
}
