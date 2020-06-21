declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                /**
                 * The interface which defines the methods required for the implementation of the popup
                 * portion of a combo box.
                 * <p>
                 * <strong>Warning:</strong>
                 * Serialized objects of this class will not be compatible with
                 * future Swing releases. The current serialization support is
                 * appropriate for short term storage or RMI between applications running
                 * the same version of Swing.  As of 1.4, support for long term storage
                 * of all JavaBeans&trade;
                 * has been added to the <code>java.beans</code> package.
                 * Please see {@link java.beans.XMLEncoder}.
                 * @author Tom Santos
                 */
                // @ts-ignore
                interface ComboPopup {
                    /**
                     * Shows the popup
                     */
                    // @ts-ignore
                    show(): void
                    /**
                     * Hides the popup
                     */
                    // @ts-ignore
                    hide(): void
                    /**
                     * Returns true if the popup is visible (currently being displayed).
                     * @return <code>true</code> if the component is visible; <code>false</code> otherwise.
                     */
                    // @ts-ignore
                    isVisible(): boolean
                    /**
                     * Returns the list that is being used to draw the items in the combo box.
                     * This method is highly implementation specific and should not be used
                     * for general list manipulation.
                     */
                    // @ts-ignore
                    getList(): javax.swing.JList<any>
                    /**
                     * Returns a mouse listener that will be added to the combo box or null.
                     * If this method returns null then it will not be added to the combo box.
                     * @return a <code>MouseListener</code> or null
                     */
                    // @ts-ignore
                    getMouseListener(): java.awt.event.MouseListener
                    /**
                     * Returns a mouse motion listener that will be added to the combo box or null.
                     * If this method returns null then it will not be added to the combo box.
                     * @return a <code>MouseMotionListener</code> or null
                     */
                    // @ts-ignore
                    getMouseMotionListener(): java.awt.event.MouseMotionListener
                    /**
                     * Returns a key listener that will be added to the combo box or null.
                     * If this method returns null then it will not be added to the combo box.
                     */
                    // @ts-ignore
                    getKeyListener(): java.awt.event.KeyListener
                    /**
                     * Called to inform the ComboPopup that the UI is uninstalling.
                     * If the ComboPopup added any listeners in the component, it should remove them here.
                     */
                    // @ts-ignore
                    uninstallingUI(): void
                }
            }
        }
    }
}
