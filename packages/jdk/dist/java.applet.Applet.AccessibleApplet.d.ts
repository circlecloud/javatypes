declare namespace java {
    namespace applet {
        namespace Applet {
            /**
             * This class implements accessibility support for the
             * <code>Applet</code> class.  It provides an implementation of the
             * Java Accessibility API appropriate to applet user-interface elements.
             * @since 1.3
             */
            // @ts-ignore
            class AccessibleApplet extends java.awt.Panel.AccessibleAWTPanel {
                // @ts-ignore
                constructor()
                /**
                 * Get the role of this object.
                 * @return an instance of AccessibleRole describing the role of the
                 *  object
                 */
                // @ts-ignore
                public getAccessibleRole(): javax.accessibility.AccessibleRole
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
