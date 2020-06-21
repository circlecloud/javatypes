declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                /**
                 * Button Listener
                 * @author Jeff Dinkins
                 * @author Arnaud Weber (keyboard UI support)
                 */
                // @ts-ignore
                class BasicButtonListener extends java.lang.Object implements java.awt.event.MouseListener, java.awt.event.MouseMotionListener, java.awt.event.FocusListener, javax.swing.event.ChangeListener, java.beans.PropertyChangeListener {
                    // @ts-ignore
                    constructor(b: javax.swing.AbstractButton)
                    // @ts-ignore
                    public propertyChange(e: java.beans.PropertyChangeEvent): void
                    // @ts-ignore
                    checkOpacity(b: javax.swing.AbstractButton): void
                    /**
                     * Register default key actions: pressing space to "click" a
                     * button and registring the keyboard mnemonic (if any).
                     */
                    // @ts-ignore
                    public installKeyboardActions(c: javax.swing.JComponent): void
                    /**
                     * Unregister's default key actions
                     */
                    // @ts-ignore
                    public uninstallKeyboardActions(c: javax.swing.JComponent): void
                    // @ts-ignore
                    public stateChanged(e: javax.swing.event.ChangeEvent): void
                    // @ts-ignore
                    public focusGained(e: java.awt.event.FocusEvent): void
                    // @ts-ignore
                    public focusLost(e: java.awt.event.FocusEvent): void
                    // @ts-ignore
                    public mouseMoved(e: java.awt.event.MouseEvent): void
                    // @ts-ignore
                    public mouseDragged(e: java.awt.event.MouseEvent): void
                    // @ts-ignore
                    public mouseClicked(e: java.awt.event.MouseEvent): void
                    // @ts-ignore
                    public mousePressed(e: java.awt.event.MouseEvent): void
                    // @ts-ignore
                    public mouseReleased(e: java.awt.event.MouseEvent): void
                    // @ts-ignore
                    public mouseEntered(e: java.awt.event.MouseEvent): void
                    // @ts-ignore
                    public mouseExited(e: java.awt.event.MouseEvent): void
                }
            }
        }
    }
}
