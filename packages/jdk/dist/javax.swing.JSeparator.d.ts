declare namespace javax {
    namespace swing {
        /**
         * <code>JSeparator</code> provides a general purpose component for
         * implementing divider lines - most commonly used as a divider
         * between menu items that breaks them up into logical groupings.
         * Instead of using <code>JSeparator</code> directly,
         * you can use the <code>JMenu</code> or <code>JPopupMenu</code>
         * <code>addSeparator</code> method to create and add a separator.
         * <code>JSeparator</code>s may also be used elsewhere in a GUI
         * wherever a visual divider is useful.
         * <p>
         * For more information and examples see
         * <a
         * href="https://docs.oracle.com/javase/tutorial/uiswing/components/menu.html">How to Use Menus</a>,
         * a section in <em>The Java Tutorial.</em>
         * <p>
         * <strong>Warning:</strong> Swing is not thread safe. For more
         * information see <a
         * href="package-summary.html#threading">Swing's Threading
         * Policy</a>.
         * <p>
         * <strong>Warning:</strong>
         * Serialized objects of this class will not be compatible with
         * future Swing releases. The current serialization support is
         * appropriate for short term storage or RMI between applications running
         * the same version of Swing.  As of 1.4, support for long term storage
         * of all JavaBeans&trade;
         * has been added to the <code>java.beans</code> package.
         * Please see {@link java.beans.XMLEncoder}.
         * @beaninfo attribute: isContainer false
         *     description: A divider between menu items.
         * @author Georges Saab
         * @author Jeff Shapiro
         */
        // @ts-ignore
        class JSeparator extends javax.swing.JComponent implements javax.swing.SwingConstants, javax.accessibility.Accessible {
            /**
             * Creates a new horizontal separator.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a new separator with the specified horizontal or
             * vertical orientation.
             * @param orientation an integer specifying
             *           <code>SwingConstants.HORIZONTAL</code> or
             *           <code>SwingConstants.VERTICAL</code>
             * @exception IllegalArgumentException if <code>orientation</code>
             *           is neither <code>SwingConstants.HORIZONTAL</code> nor
             *           <code>SwingConstants.VERTICAL</code>
             */
            // @ts-ignore
            constructor(orientation: number /*int*/)
            /**
             * Returns the L&amp;F object that renders this component.
             * @return the SeparatorUI object that renders this component
             */
            // @ts-ignore
            getUI(): javax.swing.plaf.SeparatorUI
            /**
             * Sets the L&amp;F object that renders this component.
             * @param ui  the SeparatorUI L&amp;F object
             * @see UIDefaults#getUI
             * @beaninfo bound: true
             *        hidden: true
             *     attribute: visualUpdate true
             *   description: The UI object that implements the Component's LookAndFeel.
             */
            // @ts-ignore
            setUI(ui: javax.swing.plaf.SeparatorUI): void
            /**
             * Resets the UI property to a value from the current look and feel.
             * @see JComponent#updateUI
             */
            // @ts-ignore
            updateUI(): void
            /**
             * Returns the name of the L&amp;F class that renders this component.
             * @return the string "SeparatorUI"
             * @see JComponent#getUIClassID
             * @see UIDefaults#getUI
             */
            // @ts-ignore
            getUIClassID(): java.lang.String
            /**
             * Returns the orientation of this separator.
             * @return The value of the orientation property, one of the
             *            following constants defined in <code>SwingConstants</code>:
             *            <code>VERTICAL</code>, or
             *            <code>HORIZONTAL</code>.
             * @see SwingConstants
             * @see #setOrientation
             */
            // @ts-ignore
            getOrientation(): int
            /**
             * Sets the orientation of the separator.
             * The default value of this property is HORIZONTAL.
             * @param orientation  either <code>SwingConstants.HORIZONTAL</code>
             *                   or <code>SwingConstants.VERTICAL</code>
             * @exception IllegalArgumentException  if <code>orientation</code>
             *           is neither <code>SwingConstants.HORIZONTAL</code>
             *           nor <code>SwingConstants.VERTICAL</code>
             * @see SwingConstants
             * @see #getOrientation
             * @beaninfo bound: true
             *     preferred: true
             *          enum: HORIZONTAL SwingConstants.HORIZONTAL
             *                VERTICAL   SwingConstants.VERTICAL
             *     attribute: visualUpdate true
             *   description: The orientation of the separator.
             */
            // @ts-ignore
            setOrientation(orientation: number /*int*/): void
            /**
             * Returns a string representation of this <code>JSeparator</code>.
             * This method
             * is intended to be used only for debugging purposes, and the
             * content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not
             * be <code>null</code>.
             * @return a string representation of this <code>JSeparator</code>
             */
            // @ts-ignore
            paramString(): java.lang.String
            /**
             * Gets the AccessibleContext associated with this JSeparator.
             * For separators, the AccessibleContext takes the form of an
             * AccessibleJSeparator.
             * A new AccessibleJSeparator instance is created if necessary.
             * @return an AccessibleJSeparator that serves as the
             *          AccessibleContext of this JSeparator
             */
            // @ts-ignore
            getAccessibleContext(): javax.accessibility.AccessibleContext
        }
    }
}
