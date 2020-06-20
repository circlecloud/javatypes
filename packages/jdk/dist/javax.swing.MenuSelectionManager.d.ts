declare namespace javax {
    namespace swing {
        /**
         * A MenuSelectionManager owns the selection in menu hierarchy.
         * @author Arnaud Weber
         */
        // @ts-ignore
        class MenuSelectionManager extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Only one ChangeEvent is needed per button model instance since the
             * event's only state is the source property.  The source of events
             * generated is always "this".
             */
            // @ts-ignore
            changeEvent: javax.swing.event.ChangeEvent
            // @ts-ignore
            listenerList: javax.swing.event.EventListenerList
            /**
             * Returns the default menu selection manager.
             * @return a MenuSelectionManager object
             */
            // @ts-ignore
            defaultManager(): javax.swing.MenuSelectionManager
            /**
             * Changes the selection in the menu hierarchy.  The elements
             * in the array are sorted in order from the root menu
             * element to the currently selected menu element.
             * <p>
             * Note that this method is public but is used by the look and
             * feel engine and should not be called by client applications.
             * @param path  an array of <code>MenuElement</code> objects specifying
             *         the selected path
             */
            // @ts-ignore
            setSelectedPath(path: javax.swing.MenuElement[]): void
            /**
             * Returns the path to the currently selected menu item
             * @return an array of MenuElement objects representing the selected path
             */
            // @ts-ignore
            getSelectedPath(): javax.swing.MenuElement[]
            /**
             * Tell the menu selection to close and unselect all the menu components. Call this method
             * when a choice has been made
             */
            // @ts-ignore
            clearSelectedPath(): void
            /**
             * Adds a ChangeListener to the button.
             * @param l the listener to add
             */
            // @ts-ignore
            addChangeListener(l: javax.swing.event.ChangeListener): void
            /**
             * Removes a ChangeListener from the button.
             * @param l the listener to remove
             */
            // @ts-ignore
            removeChangeListener(l: javax.swing.event.ChangeListener): void
            /**
             * Returns an array of all the <code>ChangeListener</code>s added
             * to this MenuSelectionManager with addChangeListener().
             * @return all of the <code>ChangeListener</code>s added or an empty
             *          array if no listeners have been added
             * @since 1.4
             */
            // @ts-ignore
            getChangeListeners(): javax.swing.event.ChangeListener[]
            /**
             * Notifies all listeners that have registered interest for
             * notification on this event type.  The event instance
             * is created lazily.
             * @see EventListenerList
             */
            // @ts-ignore
            fireStateChanged(): void
            /**
             * When a MenuElement receives an event from a MouseListener, it should never process the event
             * directly. Instead all MenuElements should call this method with the event.
             * @param event  a MouseEvent object
             */
            // @ts-ignore
            processMouseEvent(event: java.awt.event.MouseEvent): void
            /**
             * Returns the component in the currently selected path
             * which contains sourcePoint.
             * @param source The component in whose coordinate space sourcePoint
             *         is given
             * @param sourcePoint The point which is being tested
             * @return The component in the currently selected path which
             *          contains sourcePoint (relative to the source component's
             *          coordinate space.  If sourcePoint is not inside a component
             *          on the currently selected path, null is returned.
             */
            // @ts-ignore
            componentForPoint(source: java.awt.Component, sourcePoint: java.awt.Point): java.awt.Component
            /**
             * When a MenuElement receives an event from a KeyListener, it should never process the event
             * directly. Instead all MenuElements should call this method with the event.
             * @param e  a KeyEvent object
             */
            // @ts-ignore
            processKeyEvent(e: java.awt.event.KeyEvent): void
            /**
             * Return true if c is part of the currently used menu
             */
            // @ts-ignore
            isComponentPartOfCurrentMenu(c: java.awt.Component): boolean
        }
    }
}
