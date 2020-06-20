declare namespace javax {
    namespace swing {
        namespace JMenu {
            /**
             * A listener class that watches for a popup window closing.
             * When the popup is closing, the listener deselects the menu.
             * <p>
             * <strong>Warning:</strong>
             * Serialized objects of this class will not be compatible with
             * future Swing releases. The current serialization support is
             * appropriate for short term storage or RMI between applications running
             * the same version of Swing.  As of 1.4, support for long term storage
             * of all JavaBeans&trade;
             * has been added to the <code>java.beans</code> package.
             * Please see {@link java.beans.XMLEncoder}.
             */
            // @ts-ignore
            class WinListener extends java.awt.event.WindowAdapter implements java.io.Serializable {
                /**
                 * Create the window listener for the specified popup.
                 * @since 1.4
                 */
                // @ts-ignore
                constructor(p: javax.swing.JPopupMenu)
                /**
                 * Deselect the menu when the popup is closed from outside.
                 */
                // @ts-ignore
                windowClosing(e: java.awt.event.WindowEvent): void
            }
        }
    }
}
