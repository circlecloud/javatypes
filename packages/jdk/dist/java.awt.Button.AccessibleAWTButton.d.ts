declare namespace java {
    namespace awt {
        namespace Button {
            /**
             * This class implements accessibility support for the
             * <code>Button</code> class.  It provides an implementation of the
             * Java Accessibility API appropriate to button user-interface elements.
             * @since 1.3
             */
            // @ts-ignore
            class AccessibleAWTButton extends java.awt.Component.AccessibleAWTComponent implements javax.accessibility.AccessibleAction, javax.accessibility.AccessibleValue {
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
                 * Get the AccessibleAction associated with this object.  In the
                 * implementation of the Java Accessibility API for this class,
                 * return this object, which is responsible for implementing the
                 * AccessibleAction interface on behalf of itself.
                 * @return this object
                 */
                // @ts-ignore
                getAccessibleAction(): javax.accessibility.AccessibleAction
                /**
                 * Get the AccessibleValue associated with this object.  In the
                 * implementation of the Java Accessibility API for this class,
                 * return this object, which is responsible for implementing the
                 * AccessibleValue interface on behalf of itself.
                 * @return this object
                 */
                // @ts-ignore
                getAccessibleValue(): javax.accessibility.AccessibleValue
                /**
                 * Returns the number of Actions available in this object.  The
                 * default behavior of a button is to have one action - toggle
                 * the button.
                 * @return 1, the number of Actions in this object
                 */
                // @ts-ignore
                getAccessibleActionCount(): int
                /**
                 * Return a description of the specified action of the object.
                 * @param i zero-based index of the actions
                 */
                // @ts-ignore
                getAccessibleActionDescription(i: number /*int*/): java.lang.String
                /**
                 * Perform the specified Action on the object
                 * @param i zero-based index of actions
                 * @return true if the the action was performed; else false.
                 */
                // @ts-ignore
                doAccessibleAction(i: number /*int*/): boolean
                /**
                 * Get the value of this object as a Number.
                 * @return An Integer of 0 if this isn't selected or an Integer of 1 if
                 *  this is selected.
                 * @see javax.swing.AbstractButton#isSelected()
                 */
                // @ts-ignore
                getCurrentAccessibleValue(): java.lang.Number
                /**
                 * Set the value of this object as a Number.
                 * @return True if the value was set.
                 */
                // @ts-ignore
                setCurrentAccessibleValue(n: java.lang.Number): boolean
                /**
                 * Get the minimum value of this object as a Number.
                 * @return An Integer of 0.
                 */
                // @ts-ignore
                getMinimumAccessibleValue(): java.lang.Number
                /**
                 * Get the maximum value of this object as a Number.
                 * @return An Integer of 0.
                 */
                // @ts-ignore
                getMaximumAccessibleValue(): java.lang.Number
                /**
                 * Get the role of this object.
                 * @return an instance of AccessibleRole describing the role of the
                 *  object
                 * @see AccessibleRole
                 */
                // @ts-ignore
                getAccessibleRole(): javax.accessibility.AccessibleRole
            }
        }
    }
}
