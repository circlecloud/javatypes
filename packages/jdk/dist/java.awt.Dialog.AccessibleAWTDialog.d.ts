declare namespace java {
    namespace awt {
        namespace Dialog {
            /**
             * This class implements accessibility support for the
             * <code>Dialog</code> class.  It provides an implementation of the
             * Java Accessibility API appropriate to dialog user-interface elements.
             * @since 1.3
             */
            // @ts-ignore
            class AccessibleAWTDialog extends java.awt.Window.AccessibleAWTWindow {
                // @ts-ignore
                constructor()
                /**
                 * Get the role of this object.
                 * @return an instance of AccessibleRole describing the role of the
                 *  object
                 * @see AccessibleRole
                 */
                // @ts-ignore
                getAccessibleRole(): javax.accessibility.AccessibleRole
                /**
                 * Get the state of this object.
                 * @return an instance of AccessibleStateSet containing the current
                 *  state set of the object
                 * @see AccessibleState
                 */
                // @ts-ignore
                getAccessibleStateSet(): javax.accessibility.AccessibleStateSet
            }
        }
    }
}