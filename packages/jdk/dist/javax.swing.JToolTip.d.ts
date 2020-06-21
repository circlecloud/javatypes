declare namespace javax {
    namespace swing {
        /**
         * Used to display a "Tip" for a Component. Typically components provide api
         * to automate the process of using <code>ToolTip</code>s.
         * For example, any Swing component can use the <code>JComponent</code>
         * <code>setToolTipText</code> method to specify the text
         * for a standard tooltip. A component that wants to create a custom
         * <code>ToolTip</code>
         * display can override <code>JComponent</code>'s <code>createToolTip</code>
         * method and use a subclass of this class.
         * <p>
         * See <a href="https://docs.oracle.com/javase/tutorial/uiswing/components/tooltip.html">How to Use Tool Tips</a>
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
         * @see JComponent#setToolTipText
         * @see JComponent#createToolTip
         * @author Dave Moore
         * @author Rich Shiavi
         */
        // @ts-ignore
        class JToolTip extends javax.swing.JComponent implements javax.accessibility.Accessible {
            /**
             * Creates a tool tip.
             */
            // @ts-ignore
            constructor()
            /**
             * Returns the L&amp;F object that renders this component.
             * @return the <code>ToolTipUI</code> object that renders this component
             */
            // @ts-ignore
            public getUI(): javax.swing.plaf.ToolTipUI
            /**
             * Resets the UI property to a value from the current look and feel.
             * @see JComponent#updateUI
             */
            // @ts-ignore
            public updateUI(): void
            /**
             * Returns the name of the L&amp;F class that renders this component.
             * @return the string "ToolTipUI"
             * @see JComponent#getUIClassID
             * @see UIDefaults#getUI
             */
            // @ts-ignore
            public getUIClassID(): string
            /**
             * Sets the text to show when the tool tip is displayed.
             * The string <code>tipText</code> may be <code>null</code>.
             * @param tipText the <code>String</code> to display
             * @beaninfo preferred: true
             *         bound: true
             *   description: Sets the text of the tooltip
             */
            // @ts-ignore
            public setTipText(tipText: java.lang.String | string): void
            /**
             * Returns the text that is shown when the tool tip is displayed.
             * The returned value may be <code>null</code>.
             * @return the <code>String</code> that is displayed
             */
            // @ts-ignore
            public getTipText(): string
            /**
             * Specifies the component that the tooltip describes.
             * The component <code>c</code> may be <code>null</code>
             * and will have no effect.
             * <p>
             * This is a bound property.
             * @param c the <code>JComponent</code> being described
             * @see JComponent#createToolTip
             * @beaninfo bound: true
             *  description: Sets the component that the tooltip describes.
             */
            // @ts-ignore
            public setComponent(c: javax.swing.JComponent): void
            /**
             * Returns the component the tooltip applies to.
             * The returned value may be <code>null</code>.
             * @return the component that the tooltip describes
             * @see JComponent#createToolTip
             */
            // @ts-ignore
            public getComponent(): javax.swing.JComponent
            /**
             * Returns a string representation of this <code>JToolTip</code>.
             * This method
             * is intended to be used only for debugging purposes, and the
             * content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not
             * be <code>null</code>.
             * @return a string representation of this <code>JToolTip</code>
             */
            // @ts-ignore
            paramString(): string
            /**
             * Gets the AccessibleContext associated with this JToolTip.
             * For tool tips, the AccessibleContext takes the form of an
             * AccessibleJToolTip.
             * A new AccessibleJToolTip instance is created if necessary.
             * @return an AccessibleJToolTip that serves as the
             *          AccessibleContext of this JToolTip
             */
            // @ts-ignore
            public getAccessibleContext(): javax.accessibility.AccessibleContext
        }
    }
}
