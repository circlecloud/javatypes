declare namespace java {
    namespace awt {
        namespace Label {
            /**
             * This class implements accessibility support for the
             * <code>Label</code> class.  It provides an implementation of the
             * Java Accessibility API appropriate to label user-interface elements.
             * @since 1.3
             */
            // @ts-ignore
            class AccessibleAWTLabel extends java.awt.Component.AccessibleAWTComponent {
                // @ts-ignore
                constructor()
                /**
                 * Get the accessible name of this object.
                 * @return the localized name of the object -- can be null if this
                 *  object does not have a name
                 * @see AccessibleContext#setAccessibleName
                 */
                // @ts-ignore
                public getAccessibleName(): string
                /**
                 * Get the role of this object.
                 * @return an instance of AccessibleRole describing the role of the object
                 * @see AccessibleRole
                 */
                // @ts-ignore
                public getAccessibleRole(): javax.accessibility.AccessibleRole
            }
        }
    }
}
