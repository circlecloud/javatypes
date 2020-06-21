declare namespace java {
    namespace awt {
        namespace Checkbox {
            /**
             * This class implements accessibility support for the
             * <code>Checkbox</code> class.  It provides an implementation of the
             * Java Accessibility API appropriate to checkbox user-interface elements.
             * @since 1.3
             */
            // @ts-ignore
            class AccessibleAWTCheckbox extends java.awt.Component.AccessibleAWTComponent implements java.awt.event.ItemListener, javax.accessibility.AccessibleAction, javax.accessibility.AccessibleValue {
                // @ts-ignore
                constructor()
                /**
                 * Fire accessible property change events when the state of the
                 * toggle button changes.
                 */
                // @ts-ignore
                public itemStateChanged(e: java.awt.event.ItemEvent): void
                /**
                 * Get the AccessibleAction associated with this object.  In the
                 * implementation of the Java Accessibility API for this class,
                 * return this object, which is responsible for implementing the
                 * AccessibleAction interface on behalf of itself.
                 * @return this object
                 */
                // @ts-ignore
                public getAccessibleAction(): javax.accessibility.AccessibleAction
                /**
                 * Get the AccessibleValue associated with this object.  In the
                 * implementation of the Java Accessibility API for this class,
                 * return this object, which is responsible for implementing the
                 * AccessibleValue interface on behalf of itself.
                 * @return this object
                 */
                // @ts-ignore
                public getAccessibleValue(): javax.accessibility.AccessibleValue
                /**
                 * Returns the number of Actions available in this object.
                 * If there is more than one, the first one is the "default"
                 * action.
                 * @return the number of Actions in this object
                 */
                // @ts-ignore
                public getAccessibleActionCount(): number /*int*/
                /**
                 * Return a description of the specified action of the object.
                 * @param i zero-based index of the actions
                 */
                // @ts-ignore
                public getAccessibleActionDescription(i: number /*int*/): string
                /**
                 * Perform the specified Action on the object
                 * @param i zero-based index of actions
                 * @return true if the the action was performed; else false.
                 */
                // @ts-ignore
                public doAccessibleAction(i: number /*int*/): boolean
                /**
                 * Get the value of this object as a Number.  If the value has not been
                 * set, the return value will be null.
                 * @return value of the object
                 * @see #setCurrentAccessibleValue
                 */
                // @ts-ignore
                public getCurrentAccessibleValue(): java.lang.Number
                /**
                 * Set the value of this object as a Number.
                 * @return True if the value was set; else False
                 * @see #getCurrentAccessibleValue
                 */
                // @ts-ignore
                public setCurrentAccessibleValue(n: java.lang.Number): boolean
                /**
                 * Get the minimum value of this object as a Number.
                 * @return Minimum value of the object; null if this object does not
                 *  have a minimum value
                 * @see #getMaximumAccessibleValue
                 */
                // @ts-ignore
                public getMinimumAccessibleValue(): java.lang.Number
                /**
                 * Get the maximum value of this object as a Number.
                 * @return Maximum value of the object; null if this object does not
                 *  have a maximum value
                 * @see #getMinimumAccessibleValue
                 */
                // @ts-ignore
                public getMaximumAccessibleValue(): java.lang.Number
                /**
                 * Get the role of this object.
                 * @return an instance of AccessibleRole describing the role of
                 *  the object
                 * @see AccessibleRole
                 */
                // @ts-ignore
                public getAccessibleRole(): javax.accessibility.AccessibleRole
                /**
                 * Get the state set of this object.
                 * @return an instance of AccessibleState containing the current state
                 *  of the object
                 * @see AccessibleState
                 */
                // @ts-ignore
                public getAccessibleStateSet(): javax.accessibility.AccessibleStateSet
            }
        }
    }
}
