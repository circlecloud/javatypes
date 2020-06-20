declare namespace javax {
    namespace swing {
        namespace ImageIcon {
            /**
             * This class implements accessibility support for the
             * <code>ImageIcon</code> class.  It provides an implementation of the
             * Java Accessibility API appropriate to image icon user-interface
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
             * @since 1.3
             */
            // @ts-ignore
            class AccessibleImageIcon extends javax.accessibility.AccessibleContext implements javax.accessibility.AccessibleIcon, java.io.Serializable {
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
                 * Gets the state of this object.
                 * @return an instance of AccessibleStateSet containing the current
                 *  state set of the object
                 * @see AccessibleState
                 */
                // @ts-ignore
                getAccessibleStateSet(): javax.accessibility.AccessibleStateSet
                /**
                 * Gets the Accessible parent of this object.  If the parent of this
                 * object implements Accessible, this method should simply return
                 * getParent().
                 * @return the Accessible parent of this object -- can be null if this
                 *  object does not have an Accessible parent
                 */
                // @ts-ignore
                getAccessibleParent(): javax.accessibility.Accessible
                /**
                 * Gets the index of this object in its accessible parent.
                 * @return the index of this object in its parent; -1 if this
                 *  object does not have an accessible parent.
                 * @see #getAccessibleParent
                 */
                // @ts-ignore
                getAccessibleIndexInParent(): int
                /**
                 * Returns the number of accessible children in the object.  If all
                 * of the children of this object implement Accessible, than this
                 * method should return the number of children of this object.
                 * @return the number of accessible children in the object.
                 */
                // @ts-ignore
                getAccessibleChildrenCount(): int
                /**
                 * Returns the nth Accessible child of the object.
                 * @param i zero-based index of child
                 * @return the nth Accessible child of the object
                 */
                // @ts-ignore
                getAccessibleChild(i: number /*int*/): javax.accessibility.Accessible
                /**
                 * Returns the locale of this object.
                 * @return the locale of this object
                 */
                // @ts-ignore
                getLocale(): java.util.Locale
                /**
                 * Gets the description of the icon.  This is meant to be a brief
                 * textual description of the object.  For example, it might be
                 * presented to a blind user to give an indication of the purpose
                 * of the icon.
                 * @return the description of the icon
                 */
                // @ts-ignore
                getAccessibleIconDescription(): java.lang.String
                /**
                 * Sets the description of the icon.  This is meant to be a brief
                 * textual description of the object.  For example, it might be
                 * presented to a blind user to give an indication of the purpose
                 * of the icon.
                 * @param description the description of the icon
                 */
                // @ts-ignore
                setAccessibleIconDescription(description: string): void
                /**
                 * Gets the height of the icon.
                 * @return the height of the icon
                 */
                // @ts-ignore
                getAccessibleIconHeight(): int
                /**
                 * Gets the width of the icon.
                 * @return the width of the icon
                 */
                // @ts-ignore
                getAccessibleIconWidth(): int
            }
        }
    }
}
