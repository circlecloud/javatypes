declare namespace javax {
    namespace swing {
        namespace JSlider {
            /**
             * This class implements accessibility support for the
             * <code>JSlider</code> class.  It provides an implementation of the
             * Java Accessibility API appropriate to slider user-interface elements.
             * <p>
             * <strong>Warning:</strong>
             * Serialized objects of this class will not be compatible with
             * future Swing releases. The current serialization support is
             * appropriate for short term storage or RMI between applications running
             * the same version of Swing.  As of 1.4, support for long term storage
             * of all JavaBeans&trade;
             * has been added to the <code>java.beans</code> package.
             * Please see {@link java.beans.XMLEncoder}.
             */
            // @ts-ignore
            class AccessibleJSlider extends javax.swing.JComponent.AccessibleJComponent implements javax.accessibility.AccessibleValue {
                // @ts-ignore
                constructor()
                /**
                 * Get the state set of this object.
                 * @return an instance of AccessibleState containing the current state
                 *  of the object
                 * @see AccessibleState
                 */
                // @ts-ignore
                getAccessibleStateSet(): javax.accessibility.AccessibleStateSet
                /**
                 * Get the role of this object.
                 * @return an instance of AccessibleRole describing the role of the object
                 */
                // @ts-ignore
                getAccessibleRole(): javax.accessibility.AccessibleRole
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
