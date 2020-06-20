declare namespace java {
    namespace awt {
        namespace Choice {
            /**
             * This class implements accessibility support for the
             * <code>Choice</code> class.  It provides an implementation of the
             * Java Accessibility API appropriate to choice user-interface elements.
             * @since 1.3
             */
            // @ts-ignore
            class AccessibleAWTChoice extends java.awt.Component.AccessibleAWTComponent implements javax.accessibility.AccessibleAction {
                // @ts-ignore
                constructor()
                /**
                 * Get the AccessibleAction associated with this object.  In the
                 * implementation of the Java Accessibility API for this class,
                 * return this object, which is responsible for implementing the
                 * AccessibleAction interface on behalf of itself.
                 * @return this object
                 * @see AccessibleAction
                 */
                // @ts-ignore
                getAccessibleAction(): javax.accessibility.AccessibleAction
                /**
                 * Get the role of this object.
                 * @return an instance of AccessibleRole describing the role of the
                 *  object
                 * @see AccessibleRole
                 */
                // @ts-ignore
                getAccessibleRole(): javax.accessibility.AccessibleRole
                /**
                 * Returns the number of accessible actions available in this object
                 * If there are more than one, the first one is considered the "default"
                 * action of the object.
                 * @return the zero-based number of Actions in this object
                 */
                // @ts-ignore
                getAccessibleActionCount(): int
                /**
                 * Returns a description of the specified action of the object.
                 * @param i zero-based index of the actions
                 * @return a String description of the action
                 * @see #getAccessibleActionCount
                 */
                // @ts-ignore
                getAccessibleActionDescription(i: number /*int*/): java.lang.String
                /**
                 * Perform the specified Action on the object
                 * @param i zero-based index of actions
                 * @return true if the action was performed; otherwise false.
                 * @see #getAccessibleActionCount
                 */
                // @ts-ignore
                doAccessibleAction(i: number /*int*/): boolean
            }
        }
    }
}
