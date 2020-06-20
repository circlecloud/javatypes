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
                    propertyChange(e: java.beans.PropertyChangeEvent): void
                    // @ts-ignore
                    checkOpacity(b: javax.swing.AbstractButton): void
                    /**
                     * Register default key actions: pressing space to "click" a
                     * button and registring the keyboard mnemonic (if any).
                     */
                    // @ts-ignore
                    installKeyboardActions(c: javax.swing.JComponent): void
                    /**
                     * Unregister's default key actions
                     */
                    // @ts-ignore
                    uninstallKeyboardActions(c: javax.swing.JComponent): void
                    // @ts-ignore
                    stateChanged(e: javax.swing.event.ChangeEvent): void
                    // @ts-ignore
                    focusGained(e: java.awt.event.FocusEvent): void
                    // @ts-ignore
                    focusLost(e: java.awt.event.FocusEvent): void
                    // @ts-ignore
                    mouseMoved(e: java.awt.event.MouseEvent): void
                    // @ts-ignore
                    mouseDragged(e: java.awt.event.MouseEvent): void
                    // @ts-ignore
                    mouseClicked(e: java.awt.event.MouseEvent): void
                    // @ts-ignore
                    mousePressed(e: java.awt.event.MouseEvent): void
                    // @ts-ignore
                    mouseReleased(e: java.awt.event.MouseEvent): void
                    // @ts-ignore
                    mouseEntered(e: java.awt.event.MouseEvent): void
                    // @ts-ignore
                    mouseExited(e: java.awt.event.MouseEvent): void
                }
            }
        }
    }
}
