declare namespace java {
    namespace awt {
        namespace Menu {
            /**
             * Inner class of Menu used to provide default support for
             * accessibility.  This class is not meant to be used directly by
             * application developers, but is instead meant only to be
             * subclassed by menu component developers.
             * <p>
             * This class implements accessibility support for the
             * <code>Menu</code> class.  It provides an implementation of the
             * Java Accessibility API appropriate to menu user-interface elements.
             * @since 1.3
             */
            // @ts-ignore
            class AccessibleAWTMenu extends java.awt.MenuItem.AccessibleAWTMenuItem {
                // @ts-ignore
                constructor()
                /**
                 * Get the role of this object.
                 * @return an instance of AccessibleRole describing the role of the
                 *  object
                 */
                // @ts-ignore
                public getAccessibleRole(): javax.accessibility.AccessibleRole
            }
        }
    }
}
