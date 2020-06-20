declare namespace java {
    namespace awt {
        namespace MenuBar {
            /**
             * Inner class of MenuBar used to provide default support for
             * accessibility.  This class is not meant to be used directly by
             * application developers, but is instead meant only to be
             * subclassed by menu component developers.
             * <p>
             * This class implements accessibility support for the
             * <code>MenuBar</code> class.  It provides an implementation of the
             * Java Accessibility API appropriate to menu bar user-interface elements.
             * @since 1.3
             */
            // @ts-ignore
            class AccessibleAWTMenuBar extends java.awt.MenuComponent.AccessibleAWTMenuComponent {
                // @ts-ignore
                constructor()
                /**
                 * Get the role of this object.
                 * @return an instance of AccessibleRole describing the role of the
                 *  object
                 * @since 1.4
                 */
                // @ts-ignore
                getAccessibleRole(): javax.accessibility.AccessibleRole
            }
        }
    }
}
