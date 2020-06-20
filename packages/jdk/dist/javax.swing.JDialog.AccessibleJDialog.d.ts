declare namespace javax {
    namespace swing {
        namespace JDialog {
            /**
             * This class implements accessibility support for the
             * {@code JDialog} class.  It provides an implementation of the
             * Java Accessibility API appropriate to dialog user-interface
             * elements.
             */
            // @ts-ignore
            class AccessibleJDialog extends java.awt.Dialog.AccessibleAWTDialog {
                // @ts-ignore
                constructor()
                /**
                 * Get the accessible name of this object.
                 * @return the localized name of the object -- can be null if this
                 *  object does not have a name
                 */
                // @ts-ignore
                getAccessibleName(): java.lang.String
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
