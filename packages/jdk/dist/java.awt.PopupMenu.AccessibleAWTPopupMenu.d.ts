declare namespace java {
    namespace awt {
        namespace PopupMenu {
            /**
             * Inner class of PopupMenu used to provide default support for
             * accessibility.  This class is not meant to be used directly by
             * application developers, but is instead meant only to be
             * subclassed by menu component developers.
             * <p>
             * The class used to obtain the accessible role for this object.
             * @since 1.3
             */
            // @ts-ignore
            class AccessibleAWTPopupMenu extends java.awt.Menu.AccessibleAWTMenu {
                // @ts-ignore
                constructor()
                /**
                 * Get the role of this object.
                 * @return an instance of AccessibleRole describing the role of the
                 *  object
                 */
                // @ts-ignore
                getAccessibleRole(): javax.accessibility.AccessibleRole
            }
        }
    }
}
