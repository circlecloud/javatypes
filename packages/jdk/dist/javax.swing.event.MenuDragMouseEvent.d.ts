declare namespace javax {
    namespace swing {
        namespace event {
            /**
             * MenuDragMouseEvent is used to notify interested parties that
             * the menu element has received a MouseEvent forwarded to it
             * under drag conditions.
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
            class MenuDragMouseEvent extends java.awt.event.MouseEvent {
                /**
                 * Constructs a MenuDragMouseEvent object.
                 * <p>Absolute coordinates xAbs and yAbs are set to source's location on screen plus
                 * relative coordinates x and y. xAbs and yAbs are set to zero if the source is not showing.
                 * @param source        the Component that originated the event
                 *                       (typically <code>this</code>)
                 * @param id            an int specifying the type of event, as defined
                 *                       in {#link java.awt.event.MouseEvent}
                 * @param when          a long identifying the time the event occurred
                 * @param modifiers     an int specifying any modifier keys held down,
                 *                       as specified in {#link java.awt.event.InputEvent}
                 * @param x             an int specifying the horizontal position at which
                 *                       the event occurred, in pixels
                 * @param y             an int specifying the vertical position at which
                 *                       the event occurred, in pixels
                 * @param clickCount    an int specifying the number of mouse-clicks
                 * @param popupTrigger  a boolean -- true if the event {should?/did?}
                 *                       trigger a popup
                 * @param p             an array of MenuElement objects specifying a path
                 *                         to a menu item affected by the drag
                 * @param m             a MenuSelectionManager object that handles selections
                 * @see MouseEvent#MouseEvent(java.awt.Component, int, long, int, int, int, int, int, int, boolean, int)
                 */
                // @ts-ignore
                constructor(source: java.awt.Component, id: number /*int*/, when: number /*long*/, modifiers: number /*int*/, x: number /*int*/, y: number /*int*/, clickCount: number /*int*/, popupTrigger: boolean, p: javax.swing.MenuElement[], m: javax.swing.MenuSelectionManager)
                /**
                 * Constructs a MenuDragMouseEvent object.
                 * <p>Even if inconsistent values for relative and absolute coordinates are
                 * passed to the constructor, the MenuDragMouseEvent instance is still
                 * created.
                 * @param source        the Component that originated the event
                 *                       (typically <code>this</code>)
                 * @param id            an int specifying the type of event, as defined
                 *                       in {#link java.awt.event.MouseEvent}
                 * @param when          a long identifying the time the event occurred
                 * @param modifiers     an int specifying any modifier keys held down,
                 *                       as specified in {#link java.awt.event.InputEvent}
                 * @param x             an int specifying the horizontal position at which
                 *                       the event occurred, in pixels
                 * @param y             an int specifying the vertical position at which
                 *                       the event occurred, in pixels
                 * @param xAbs          an int specifying the horizontal absolute position at which
                 *                       the event occurred, in pixels
                 * @param yAbs          an int specifying the vertical absolute position at which
                 *                       the event occurred, in pixels
                 * @param clickCount    an int specifying the number of mouse-clicks
                 * @param popupTrigger  a boolean -- true if the event {should?/did?}
                 *                       trigger a popup
                 * @param p             an array of MenuElement objects specifying a path
                 *                         to a menu item affected by the drag
                 * @param m             a MenuSelectionManager object that handles selections
                 * @see MouseEvent#MouseEvent(java.awt.Component, int, long, int, int, int, int, int, int, boolean, int)
                 * @since 1.6
                 */
                // @ts-ignore
                constructor(source: java.awt.Component, id: number /*int*/, when: number /*long*/, modifiers: number /*int*/, x: number /*int*/, y: number /*int*/, xAbs: number /*int*/, yAbs: number /*int*/, clickCount: number /*int*/, popupTrigger: boolean, p: javax.swing.MenuElement[], m: javax.swing.MenuSelectionManager)
                /**
                 * Returns the path to the selected menu item.
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
