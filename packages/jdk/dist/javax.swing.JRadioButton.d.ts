declare namespace javax {
    namespace swing {
        /**
         * An implementation of a radio button -- an item that can be selected or
         * deselected, and which displays its state to the user.
         * Used with a {@link ButtonGroup} object to create a group of buttons
         * in which only one button at a time can be selected. (Create a ButtonGroup
         * object and use its <code>add</code> method to include the JRadioButton objects
         * in the group.)
         * <blockquote>
         * <strong>Note:</strong>
         * The ButtonGroup object is a logical grouping -- not a physical grouping.
         * To create a button panel, you should still create a {@link JPanel} or similar
         * container-object and add a {@link javax.swing.border.Border} to it to set it off from surrounding
         * components.
         * </blockquote>
         * <p>
         * Buttons can be configured, and to some degree controlled, by
         * <code><a href="Action.html">Action</a></code>s.  Using an
         * <code>Action</code> with a button has many benefits beyond directly
         * configuring a button.  Refer to <a href="Action.html#buttonActions">
         * Swing Components Supporting <code>Action</code></a> for more
         * details, and you can find more information in <a
         * href="https://docs.oracle.com/javase/tutorial/uiswing/misc/action.html">How
         * to Use Actions</a>, a section in <em>The Java Tutorial</em>.
         * <p>
         * See <a href="https://docs.oracle.com/javase/tutorial/uiswing/components/button.html">How to Use Buttons, Check Boxes, and Radio Buttons</a>
         * in <em>The Java Tutorial</em>
         * for further documentation.
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
         *  description: A component which can display it's state as selected or deselected.
         * @see ButtonGroup
         * @see JCheckBox
         * @author Jeff Dinkins
         */
        // @ts-ignore
        class JRadioButton extends javax.swing.JToggleButton implements javax.accessibility.Accessible {
            /**
             * Creates an initially unselected radio button
             * with no set text.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates an initially unselected radio button
             * with the specified image but no text.
             * @param icon  the image that the button should display
             */
            // @ts-ignore
            constructor(icon: javax.swing.Icon)
            /**
             * Creates a radiobutton where properties are taken from the
             * Action supplied.
             * @since 1.3
             */
            // @ts-ignore
            constructor(a: javax.swing.Action)
            /**
             * Creates a radio button with the specified image
             * and selection state, but no text.
             * @param icon  the image that the button should display
             * @param selected  if true, the button is initially selected;
             *                   otherwise, the button is initially unselected
             */
            // @ts-ignore
            constructor(icon: javax.swing.Icon, selected: boolean)
            /**
             * Creates an unselected radio button with the specified text.
             * @param text  the string displayed on the radio button
             */
            // @ts-ignore
            constructor(text: java.lang.String | string)
            /**
             * Creates a radio button with the specified text
             * and selection state.
             * @param text  the string displayed on the radio button
             * @param selected  if true, the button is initially selected;
             *                   otherwise, the button is initially unselected
             */
            // @ts-ignore
            constructor(text: java.lang.String | string, selected: boolean)
            /**
             * Creates a radio button that has the specified text and image,
             * and that is initially unselected.
             * @param text  the string displayed on the radio button
             * @param icon  the image that the button should display
             */
            // @ts-ignore
            constructor(text: java.lang.String | string, icon: javax.swing.Icon)
            /**
             * Creates a radio button that has the specified text, image,
             * and selection state.
             * @param text  the string displayed on the radio button
             * @param icon  the image that the button should display
             */
            // @ts-ignore
            constructor(text: java.lang.String | string, icon: javax.swing.Icon, selected: boolean)
            /**
             * Resets the UI property to a value from the current look and feel.
             * @see JComponent#updateUI
             */
            // @ts-ignore
            public updateUI(): void
            /**
             * Returns the name of the L&amp;F class
             * that renders this component.
             * @return String "RadioButtonUI"
             * @see JComponent#getUIClassID
             * @see UIDefaults#getUI
             * @beaninfo expert: true
             *    description: A string that specifies the name of the L&amp;F class.
             */
            // @ts-ignore
            public getUIClassID(): string
            /**
             * Returns a string representation of this JRadioButton. This method
             * is intended to be used only for debugging purposes, and the
             * content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not
             * be <code>null</code>.
             * @return a string representation of this JRadioButton.
             */
            // @ts-ignore
            paramString(): string
            /**
             * Gets the AccessibleContext associated with this JRadioButton.
             * For JRadioButtons, the AccessibleContext takes the form of an
             * AccessibleJRadioButton.
             * A new AccessibleJRadioButton instance is created if necessary.
             * @return an AccessibleJRadioButton that serves as the
             *          AccessibleContext of this JRadioButton
             * @beaninfo expert: true
             *   description: The AccessibleContext associated with this Button
             */
            // @ts-ignore
            public getAccessibleContext(): javax.accessibility.AccessibleContext
        }
    }
}
