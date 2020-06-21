declare namespace java {
    namespace awt {
        namespace Window {
            /**
             * This class implements accessibility support for the
             * {@code Window} class.  It provides an implementation of the
             * Java Accessibility API appropriate to window user-interface elements.
             * @since 1.3
             */
            // @ts-ignore
            class AccessibleAWTWindow extends java.awt.Container.AccessibleAWTContainer {
                // @ts-ignore
                constructor()
                /**
                 * Get the role of this object.
                 * @return an instance of AccessibleRole describing the role of the
                 *  object
                 * @see javax.accessibility.AccessibleRole
                 */
                // @ts-ignore
                public getAccessibleRole(): javax.accessibility.AccessibleRole
                /**
                 * Get the state of this object.
                 * @return an instance of AccessibleStateSet containing the current
                 *  state set of the object
                 * @see javax.accessibility.AccessibleState
                 */
                // @ts-ignore
                public getAccessibleStateSet(): javax.accessibility.AccessibleStateSet
            }
        }
    }
}
