declare namespace java {
    namespace awt {
        namespace MenuItem {
            /**
             * Inner class of MenuItem used to provide default support for
             * accessibility.  This class is not meant to be used directly by
             * application developers, but is instead meant only to be
             * subclassed by menu component developers.
             * <p>
             * This class implements accessibility support for the
             * <code>MenuItem</code> class.  It provides an implementation of the
             * Java Accessibility API appropriate to menu item user-interface elements.
             * @since 1.3
             */
            // @ts-ignore
            class AccessibleAWTMenuItem extends java.awt.MenuComponent.AccessibleAWTMenuComponent implements javax.accessibility.AccessibleAction, javax.accessibility.AccessibleValue {
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
                 * Get the role of this object.
                 * @return an instance of AccessibleRole describing the role of the
                 *  object
                 */
                // @ts-ignore
                public getAccessibleRole(): javax.accessibility.AccessibleRole
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
                 * Returns the number of Actions available in this object.  The
                 * default behavior of a menu item is to have one action.
                 * @return 1, the number of Actions in this object
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
                 * @return true if the action was performed; otherwise false.
                 */
                // @ts-ignore
                public doAccessibleAction(i: number /*int*/): boolean
                /**
                 * Get the value of this object as a Number.
                 * @return An Integer of 0 if this isn't selected or an Integer of 1 if
                 *  this is selected.
                 * @see javax.swing.AbstractButton#isSelected()
                 */
                // @ts-ignore
                public getCurrentAccessibleValue(): java.lang.Number
                /**
                 * Set the value of this object as a Number.
                 * @return True if the value was set.
                 */
                // @ts-ignore
                public setCurrentAccessibleValue(n: java.lang.Number): boolean
                /**
                 * Get the minimum value of this object as a Number.
                 * @return An Integer of 0.
                 */
                // @ts-ignore
                public getMinimumAccessibleValue(): java.lang.Number
                /**
                 * Get the maximum value of this object as a Number.
                 * @return An Integer of 0.
                 */
                // @ts-ignore
                public getMaximumAccessibleValue(): java.lang.Number
            }
        }
    }
}
