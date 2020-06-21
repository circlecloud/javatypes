declare namespace javax {
    namespace swing {
        /**
         * An implementation of a "push" button.
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
         * for information and examples of using buttons.
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
         *  description: An implementation of a \"push\" button.
         * @author Jeff Dinkins
         */
        // @ts-ignore
        class JButton extends javax.swing.AbstractButton implements javax.accessibility.Accessible {
            /**
             * Creates a button with no set text or icon.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a button with an icon.
             * @param icon  the Icon image to display on the button
             */
            // @ts-ignore
            constructor(icon: javax.swing.Icon)
            /**
             * Creates a button with text.
             * @param text  the text of the button
             */
            // @ts-ignore
            constructor(text: java.lang.String | string)
            /**
             * Creates a button where properties are taken from the
             * <code>Action</code> supplied.
             * @param a the <code>Action</code> used to specify the new button
             * @since 1.3
             */
            // @ts-ignore
            constructor(a: javax.swing.Action)
            /**
             * Creates a button with initial text and an icon.
             * @param text  the text of the button
             * @param icon  the Icon image to display on the button
             */
            // @ts-ignore
            constructor(text: java.lang.String | string, icon: javax.swing.Icon)
            /**
             * Resets the UI property to a value from the current look and
             * feel.
             * @see JComponent#updateUI
             */
            // @ts-ignore
            public updateUI(): void
            /**
             * Returns a string that specifies the name of the L&amp;F class
             * that renders this component.
             * @return the string "ButtonUI"
             * @see JComponent#getUIClassID
             * @see UIDefaults#getUI
             * @beaninfo expert: true
             *    description: A string that specifies the name of the L&amp;F class.
             */
            // @ts-ignore
            public getUIClassID(): string
            /**
             * Gets the value of the <code>defaultButton</code> property,
             * which if <code>true</code> means that this button is the current
             * default button for its <code>JRootPane</code>.
             * Most look and feels render the default button
             * differently, and may potentially provide bindings
             * to access the default button.
             * @return the value of the <code>defaultButton</code> property
             * @see JRootPane#setDefaultButton
             * @see #isDefaultCapable
             * @beaninfo description: Whether or not this button is the default button
             */
            // @ts-ignore
            public isDefaultButton(): boolean
            /**
             * Gets the value of the <code>defaultCapable</code> property.
             * @return the value of the <code>defaultCapable</code> property
             * @see #setDefaultCapable
             * @see #isDefaultButton
             * @see JRootPane#setDefaultButton
             */
            // @ts-ignore
            public isDefaultCapable(): boolean
            /**
             * Sets the <code>defaultCapable</code> property,
             * which determines whether this button can be
             * made the default button for its root pane.
             * The default value of the <code>defaultCapable</code>
             * property is <code>true</code> unless otherwise
             * specified by the look and feel.
             * @param defaultCapable <code>true</code> if this button will be
             *         capable of being the default button on the
             *         <code>RootPane</code>; otherwise <code>false</code>
             * @see #isDefaultCapable
             * @beaninfo bound: true
             *     attribute: visualUpdate true
             *   description: Whether or not this button can be the default button
             */
            // @ts-ignore
            public setDefaultCapable(defaultCapable: boolean): void
            /**
             * Overrides <code>JComponent.removeNotify</code> to check if
             * this button is currently set as the default button on the
             * <code>RootPane</code>, and if so, sets the <code>RootPane</code>'s
             * default button to <code>null</code> to ensure the
             * <code>RootPane</code> doesn't hold onto an invalid button reference.
             */
            // @ts-ignore
            public removeNotify(): void
            /**
             * Returns a string representation of this <code>JButton</code>.
             * This method is intended to be used only for debugging purposes, and the
             * content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not
             * be <code>null</code>.
             * @return a string representation of this <code>JButton</code>
             */
            // @ts-ignore
            paramString(): string
            /**
             * Gets the <code>AccessibleContext</code> associated with this
             * <code>JButton</code>. For <code>JButton</code>s,
             * the <code>AccessibleContext</code> takes the form of an
             * <code>AccessibleJButton</code>.
             * A new <code>AccessibleJButton</code> instance is created if necessary.
             * @return an <code>AccessibleJButton</code> that serves as the
             *          <code>AccessibleContext</code> of this <code>JButton</code>
             * @beaninfo expert: true
             *   description: The AccessibleContext associated with this Button.
             */
            // @ts-ignore
            public getAccessibleContext(): javax.accessibility.AccessibleContext
        }
    }
}
