declare namespace javax {
    namespace swing {
        /**
         * Any component that can be placed into a menu should implement this interface.
         * This interface is used by <code>MenuSelectionManager</code>
         * to handle selection and navigation in menu hierarchies.
         * @author Arnaud Weber
         */
        // @ts-ignore
        interface MenuElement {
            /**
             * Processes a mouse event. <code>event</code> is a <code>MouseEvent</code>
             * with source being the receiving element's component.
             * <code>path</code> is the path of the receiving element in the menu
             * hierarchy including the receiving element itself.
             * <code>manager</code> is the <code>MenuSelectionManager</code>
             * for the menu hierarchy.
             * This method should process the <code>MouseEvent</code> and change
             * the menu selection if necessary
             * by using <code>MenuSelectionManager</code>'s API
             * Note: you do not have to forward the event to sub-components.
             * This is done automatically by the <code>MenuSelectionManager</code>.
             */
            // @ts-ignore
            processMouseEvent(event: java.awt.event.MouseEvent, path: javax.swing.MenuElement[], manager: javax.swing.MenuSelectionManager): void
            /**
             * Process a key event.
             */
            // @ts-ignore
            processKeyEvent(event: java.awt.event.KeyEvent, path: javax.swing.MenuElement[], manager: javax.swing.MenuSelectionManager): void
            /**
             * Call by the <code>MenuSelectionManager</code> when the
             * <code>MenuElement</code> is added or remove from
             * the menu selection.
             */
            // @ts-ignore
            menuSelectionChanged(isIncluded: boolean): void
            /**
             * This method should return an array containing the sub-elements for the receiving menu element
             * @return an array of MenuElements
             */
            // @ts-ignore
            getSubElements(): javax.swing.MenuElement[]
            /**
             * This method should return the java.awt.Component used to paint the receiving element.
             * The returned component will be used to convert events and detect if an event is inside
             * a MenuElement's component.
             * @return the Component value
             */
            // @ts-ignore
            getComponent(): java.awt.Component
        }
    }
}
