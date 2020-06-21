declare namespace javax {
    namespace swing {
        namespace JInternalFrame {
            /**
             * This class implements accessibility support for the
             * <code>JInternalFrame</code> class.  It provides an implementation of the
             * Java Accessibility API appropriate to internal frame user-interface
             * elements.
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
            class AccessibleJInternalFrame extends javax.swing.JComponent.AccessibleJComponent implements javax.accessibility.AccessibleValue {
                // @ts-ignore
                constructor()
                /**
                 * Get the accessible name of this object.
                 * @return the localized name of the object -- can be <code>null</code> if this
                 *  object does not have a name
                 * @see #setAccessibleName
                 */
                // @ts-ignore
                public getAccessibleName(): string
                /**
                 * Get the role of this object.
                 * @return an instance of AccessibleRole describing the role of the
                 *  object
                 * @see AccessibleRole
                 */
                // @ts-ignore
                public getAccessibleRole(): javax.accessibility.AccessibleRole
                /**
                 * Gets the AccessibleValue associated with this object.  In the
                 * implementation of the Java Accessibility API for this class,
                 * returns this object, which is responsible for implementing the
                 * <code>AccessibleValue</code> interface on behalf of itself.
                 * @return this object
                 */
                // @ts-ignore
                public getAccessibleValue(): javax.accessibility.AccessibleValue
                /**
                 * Get the value of this object as a Number.
                 * @return value of the object -- can be <code>null</code> if this object does not
                 *  have a value
                 */
                // @ts-ignore
                public getCurrentAccessibleValue(): java.lang.Number
                /**
                 * Set the value of this object as a Number.
                 * @return <code>true</code> if the value was set
                 */
                // @ts-ignore
                public setCurrentAccessibleValue(n: java.lang.Number): boolean
                /**
                 * Get the minimum value of this object as a Number.
                 * @return Minimum value of the object; <code>null</code> if this object does not
                 *  have a minimum value
                 */
                // @ts-ignore
                public getMinimumAccessibleValue(): java.lang.Number
                /**
                 * Get the maximum value of this object as a Number.
                 * @return Maximum value of the object; <code>null</code> if this object does not
                 *  have a maximum value
                 */
                // @ts-ignore
                public getMaximumAccessibleValue(): java.lang.Number
            }
        }
    }
}
