declare namespace javax {
    namespace swing {
        namespace JInternalFrame {
            namespace JDesktopIcon {
                /**
                 * This class implements accessibility support for the
                 * <code>JInternalFrame.JDesktopIcon</code> class.  It provides an
                 * implementation of the Java Accessibility API appropriate to
                 * desktop icon user-interface elements.
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
                class AccessibleJDesktopIcon extends javax.swing.JComponent.AccessibleJComponent implements javax.accessibility.AccessibleValue {
                    // @ts-ignore
                    constructor()
                    /**
                     * Gets the role of this object.
                     * @return an instance of AccessibleRole describing the role of the
                     *  object
                     * @see AccessibleRole
                     */
                    // @ts-ignore
                    getAccessibleRole(): javax.accessibility.AccessibleRole
                    /**
                     * Gets the AccessibleValue associated with this object.  In the
                     * implementation of the Java Accessibility API for this class,
                     * returns this object, which is responsible for implementing the
                     * <code>AccessibleValue</code> interface on behalf of itself.
                     * @return this object
                     */
                    // @ts-ignore
                    getAccessibleValue(): javax.accessibility.AccessibleValue
                    /**
                     * Gets the value of this object as a <code>Number</code>.
                     * @return value of the object -- can be <code>null</code> if this object does not
                     *  have a value
                     */
                    // @ts-ignore
                    getCurrentAccessibleValue(): java.lang.Number
                    /**
                     * Sets the value of this object as a <code>Number</code>.
                     * @return <code>true</code> if the value was set
                     */
                    // @ts-ignore
                    setCurrentAccessibleValue(n: java.lang.Number): boolean
                    /**
                     * Gets the minimum value of this object as a <code>Number</code>.
                     * @return minimum value of the object; <code>null</code> if this object does not
                     *  have a minimum value
                     */
                    // @ts-ignore
                    getMinimumAccessibleValue(): java.lang.Number
                    /**
                     * Gets the maximum value of this object as a <code>Number</code>.
                     * @return maximum value of the object; <code>null</code> if this object does not
                     *  have a maximum value
                     */
                    // @ts-ignore
                    getMaximumAccessibleValue(): java.lang.Number
                }
            }
        }
    }
}
