declare namespace javax {
    namespace swing {
        /**
         * An implementation of a two-state button.
         * The <code>JRadioButton</code> and <code>JCheckBox</code> classes
         * are subclasses of this class.
         * For information on using them see
         * <a
         * href="https://docs.oracle.com/javase/tutorial/uiswing/components/button.html">How to Use Buttons, Check Boxes, and Radio Buttons</a>,
         * a section in <em>The Java Tutorial</em>.
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
         *  description: An implementation of a two-state button.
         * @see JRadioButton
         * @see JCheckBox
         * @author Jeff Dinkins
         */
        // @ts-ignore
        class JToggleButton extends javax.swing.AbstractButton implements javax.accessibility.Accessible {
            /**
             * Creates an initially unselected toggle button
             * without setting the text or image.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates an initially unselected toggle button
             * with the specified image but no text.
             * @param icon  the image that the button should display
             */
            // @ts-ignore
            constructor(icon: javax.swing.Icon)
            /**
             * Creates a toggle button with the specified image
             * and selection state, but no text.
             * @param icon  the image that the button should display
             * @param selected  if true, the button is initially selected;
             *                   otherwise, the button is initially unselected
             */
            // @ts-ignore
            constructor(icon: javax.swing.Icon, selected: boolean)
            /**
             * Creates an unselected toggle button with the specified text.
             * @param text  the string displayed on the toggle button
             */
            // @ts-ignore
            constructor(text: java.lang.String | string)
            /**
             * Creates a toggle button with the specified text
             * and selection state.
             * @param text  the string displayed on the toggle button
             * @param selected  if true, the button is initially selected;
             *                   otherwise, the button is initially unselected
             */
            // @ts-ignore
            constructor(text: java.lang.String | string, selected: boolean)
            /**
             * Creates a toggle button where properties are taken from the
             * Action supplied.
             * @since 1.3
             */
            // @ts-ignore
            constructor(a: javax.swing.Action)
            /**
             * Creates a toggle button that has the specified text and image,
             * and that is initially unselected.
             * @param text the string displayed on the button
             * @param icon  the image that the button should display
             */
            // @ts-ignore
            constructor(text: java.lang.String | string, icon: javax.swing.Icon)
            /**
             * Creates a toggle button with the specified text, image, and
             * selection state.
             * @param text the text of the toggle button
             * @param icon  the image that the button should display
             * @param selected  if true, the button is initially selected;
             *                   otherwise, the button is initially unselected
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
             * Returns a string that specifies the name of the l&amp;f class
             * that renders this component.
             * @return String "ToggleButtonUI"
             * @see JComponent#getUIClassID
             * @see UIDefaults#getUI
             * @beaninfo description: A string that specifies the name of the L&amp;F class
             */
            // @ts-ignore
            public getUIClassID(): string
            /**
             * Returns a string representation of this JToggleButton. This method
             * is intended to be used only for debugging purposes, and the
             * content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not
             * be <code>null</code>.
             * @return a string representation of this JToggleButton.
             */
            // @ts-ignore
            paramString(): string
            /**
             * Gets the AccessibleContext associated with this JToggleButton.
             * For toggle buttons, the AccessibleContext takes the form of an
             * AccessibleJToggleButton.
             * A new AccessibleJToggleButton instance is created if necessary.
             * @return an AccessibleJToggleButton that serves as the
             *          AccessibleContext of this JToggleButton
             * @beaninfo expert: true
             *   description: The AccessibleContext associated with this ToggleButton.
             */
            // @ts-ignore
            public getAccessibleContext(): javax.accessibility.AccessibleContext
        }
    }
}
