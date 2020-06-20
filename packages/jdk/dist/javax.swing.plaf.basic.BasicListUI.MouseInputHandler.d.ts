declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                namespace BasicListUI {
                    /**
                     * Mouse input, and focus handling for JList.  An instance of this
                     * class is added to the appropriate java.awt.Component lists
                     * at installUI() time.  Note keyboard input is handled with JComponent
                     * KeyboardActions, see installKeyboardActions().
                     * <p>
                     * <strong>Warning:</strong>
                     * Serialized objects of this class will not be compatible with
                     * future Swing releases. The current serialization support is
                     * appropriate for short term storage or RMI between applications running
                     * the same version of Swing.  As of 1.4, support for long term storage
                     * of all JavaBeans&trade;
                     * has been added to the <code>java.beans</code> package.
                     * Please see {@link java.beans.XMLEncoder}.
                     * @see #createMouseInputListener
                     * @see #installKeyboardActions
                     * @see #installUI
                     */
                    // @ts-ignore
                    class MouseInputHandler extends java.lang.Object implements javax.swing.event.MouseInputListener {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        mouseClicked(e: java.awt.event.MouseEvent): void
                        // @ts-ignore
                        mouseEntered(e: java.awt.event.MouseEvent): void
                        // @ts-ignore
                        mouseExited(e: java.awt.event.MouseEvent): void
                        // @ts-ignore
                        mousePressed(e: java.awt.event.MouseEvent): void
                        // @ts-ignore
                        mouseDragged(e: java.awt.event.MouseEvent): void
                        // @ts-ignore
                        mouseMoved(e: java.awt.event.MouseEvent): void
                        // @ts-ignore
                        mouseReleased(e: java.awt.event.MouseEvent): void
                    }
                }
            }
        }
    }
}
