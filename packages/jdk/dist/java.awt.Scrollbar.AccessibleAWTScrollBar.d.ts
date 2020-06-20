declare namespace java {
    namespace awt {
        namespace Scrollbar {
            /**
             * This class implements accessibility support for the
             * <code>Scrollbar</code> class.  It provides an implementation of
             * the Java Accessibility API appropriate to scrollbar
             * user-interface elements.
             * @since 1.3
             */
            // @ts-ignore
            class AccessibleAWTScrollBar extends java.awt.Component.AccessibleAWTComponent implements javax.accessibility.AccessibleValue {
                // @ts-ignore
                constructor()
                /**
                 * Get the state set of this object.
                 * @return an instance of <code>AccessibleState</code>
                 *      containing the current state of the object
                 * @see AccessibleState
                 */
                // @ts-ignore
                getAccessibleStateSet(): javax.accessibility.AccessibleStateSet
                /**
                 * Get the role of this object.
                 * @return an instance of <code>AccessibleRole</code>
                 *      describing the role of the object
                 */
                // @ts-ignore
                getAccessibleRole(): javax.accessibility.AccessibleRole
                /**
                 * Get the <code>AccessibleValue</code> associated with this
                 * object.  In the implementation of the Java Accessibility
                 * API for this class, return this object, which is
                 * responsible for implementing the
                 * <code>AccessibleValue</code> interface on behalf of itself.
                 * @return this object
                 */
                // @ts-ignore
                getAccessibleValue(): javax.accessibility.AccessibleValue
                /**
                 * Get the accessible value of this object.
                 * @return The current value of this object.
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
                 * Get the minimum accessible value of this object.
                 * @return The minimum value of this object.
                 */
                // @ts-ignore
                getMinimumAccessibleValue(): java.lang.Number
                /**
                 * Get the maximum accessible value of this object.
                 * @return The maximum value of this object.
                 */
                // @ts-ignore
                getMaximumAccessibleValue(): java.lang.Number
            }
        }
    }
}
