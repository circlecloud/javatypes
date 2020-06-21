declare namespace javax {
    namespace swing {
        namespace JFrame {
            /**
             * This class implements accessibility support for the
             * <code>JFrame</code> class.  It provides an implementation of the
             * Java Accessibility API appropriate to frame user-interface
             * elements.
             */
            // @ts-ignore
            class AccessibleJFrame extends java.awt.Frame.AccessibleAWTFrame {
                // @ts-ignore
                constructor()
                /**
                 * Get the accessible name of this object.
                 * @return the localized name of the object -- can be null if this
                 *  object does not have a name
                 */
                // @ts-ignore
                public getAccessibleName(): string
                /**
                 * Get the state of this object.
                 * @return an instance of AccessibleStateSet containing the current
                 *  state set of the object
                 * @see AccessibleState
                 */
                // @ts-ignore
                public getAccessibleStateSet(): javax.accessibility.AccessibleStateSet
            }
        }
    }
}
