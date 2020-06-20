declare namespace javax {
    namespace swing {
        namespace event {
            /**
             * AncestorListener
             * Interface to support notification when changes occur to a JComponent or one
             * of its ancestors.  These include movement and when the component becomes
             * visible or invisible, either by the setVisible() method or by being added
             * or removed from the component hierarchy.
             * @author Dave Moore
             */
            // @ts-ignore
            interface AncestorListener extends java.util.EventListener {
                /**
                 * Called when the source or one of its ancestors is made visible
                 * either by setVisible(true) being called or by its being
                 * added to the component hierarchy.  The method is only called
                 * if the source has actually become visible.  For this to be true
                 * all its parents must be visible and it must be in a hierarchy
                 * rooted at a Window
                 */
                // @ts-ignore
                ancestorAdded(event: javax.swing.event.AncestorEvent): void
                /**
                 * Called when the source or one of its ancestors is made invisible
                 * either by setVisible(false) being called or by its being
                 * remove from the component hierarchy.  The method is only called
                 * if the source has actually become invisible.  For this to be true
                 * at least one of its parents must by invisible or it is not in
                 * a hierarchy rooted at a Window
                 */
                // @ts-ignore
                ancestorRemoved(event: javax.swing.event.AncestorEvent): void
                /**
                 * Called when either the source or one of its ancestors is moved.
                 */
                // @ts-ignore
                ancestorMoved(event: javax.swing.event.AncestorEvent): void
            }
        }
    }
}
