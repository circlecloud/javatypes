declare namespace javax {
    namespace swing {
        namespace JComponent {
            /**
             * Inner class of JComponent used to provide default support for
             * accessibility.  This class is not meant to be used directly by
             * application developers, but is instead meant only to be
             * subclassed by component developers.
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
            abstract class AccessibleJComponent extends java.awt.Container.AccessibleAWTContainer implements javax.accessibility.AccessibleExtendedComponent {
                /**
                 * Though the class is abstract, this should be called by
                 * all sub-classes.
                 */
                // @ts-ignore
                constructor()
                /**
                 * This field duplicates the function of the accessibleAWTFocusHandler field
                 * in java.awt.Component.AccessibleAWTComponent, so it has been deprecated.
                 */
                // @ts-ignore
                accessibleFocusHandler: java.awt.event.FocusListener
                /**
                 * Adds a PropertyChangeListener to the listener list.
                 * @param listener  the PropertyChangeListener to be added
                 */
                // @ts-ignore
                public addPropertyChangeListener(listener: java.beans.PropertyChangeListener): void
                /**
                 * Removes a PropertyChangeListener from the listener list.
                 * This removes a PropertyChangeListener that was registered
                 * for all properties.
                 * @param listener  the PropertyChangeListener to be removed
                 */
                // @ts-ignore
                public removePropertyChangeListener(listener: java.beans.PropertyChangeListener): void
                /**
                 * Recursively search through the border hierarchy (if it exists)
                 * for a TitledBorder with a non-null title.  This does a depth
                 * first search on first the inside borders then the outside borders.
                 * The assumption is that titles make really pretty inside borders
                 * but not very pretty outside borders in compound border situations.
                 * It's rather arbitrary, but hopefully decent UI programmers will
                 * not create multiple titled borders for the same component.
                 */
                // @ts-ignore
                getBorderTitle(b: javax.swing.border.Border): string
                /**
                 * Gets the accessible name of this object.  This should almost never
                 * return java.awt.Component.getName(), as that generally isn't
                 * a localized name, and doesn't have meaning for the user.  If the
                 * object is fundamentally a text object (such as a menu item), the
                 * accessible name should be the text of the object (for example,
                 * "save").
                 * If the object has a tooltip, the tooltip text may also be an
                 * appropriate String to return.
                 * @return the localized name of the object -- can be null if this
                 *          object does not have a name
                 * @see AccessibleContext#setAccessibleName
                 */
                // @ts-ignore
                public getAccessibleName(): string
                /**
                 * Gets the accessible description of this object.  This should be
                 * a concise, localized description of what this object is - what
                 * is its meaning to the user.  If the object has a tooltip, the
                 * tooltip text may be an appropriate string to return, assuming
                 * it contains a concise description of the object (instead of just
                 * the name of the object - for example a "Save" icon on a toolbar that
                 * had "save" as the tooltip text shouldn't return the tooltip
                 * text as the description, but something like "Saves the current
                 * text document" instead).
                 * @return the localized description of the object -- can be null if
                 *  this object does not have a description
                 * @see AccessibleContext#setAccessibleDescription
                 */
                // @ts-ignore
                public getAccessibleDescription(): string
                /**
                 * Gets the role of this object.
                 * @return an instance of AccessibleRole describing the role of the
                 *  object
                 * @see AccessibleRole
                 */
                // @ts-ignore
                public getAccessibleRole(): javax.accessibility.AccessibleRole
                /**
                 * Gets the state of this object.
                 * @return an instance of AccessibleStateSet containing the current
                 *  state set of the object
                 * @see AccessibleState
                 */
                // @ts-ignore
                public getAccessibleStateSet(): javax.accessibility.AccessibleStateSet
                /**
                 * Returns the number of accessible children in the object.  If all
                 * of the children of this object implement Accessible, than this
                 * method should return the number of children of this object.
                 * @return the number of accessible children in the object.
                 */
                // @ts-ignore
                public getAccessibleChildrenCount(): number /*int*/
                /**
                 * Returns the nth Accessible child of the object.
                 * @param i zero-based index of child
                 * @return the nth Accessible child of the object
                 */
                // @ts-ignore
                public getAccessibleChild(i: number /*int*/): javax.accessibility.Accessible
                /**
                 * Returns the tool tip text
                 * @return the tool tip text, if supported, of the object;
                 *  otherwise, null
                 * @since 1.4
                 */
                // @ts-ignore
                public getToolTipText(): string
                /**
                 * Returns the titled border text
                 * @return the titled border text, if supported, of the object;
                 *  otherwise, null
                 * @since 1.4
                 */
                // @ts-ignore
                public getTitledBorderText(): string
                /**
                 * Returns key bindings associated with this object
                 * @return the key bindings, if supported, of the object;
                 *  otherwise, null
                 * @see AccessibleKeyBinding
                 * @since 1.4
                 */
                // @ts-ignore
                public getAccessibleKeyBinding(): javax.accessibility.AccessibleKeyBinding
            }
        }
    }
}
