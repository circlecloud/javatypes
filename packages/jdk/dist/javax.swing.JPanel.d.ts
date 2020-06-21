declare namespace javax {
    namespace swing {
        /**
         * <code>JPanel</code> is a generic lightweight container.
         * For examples and task-oriented documentation for JPanel, see
         * <a
         * href="https://docs.oracle.com/javase/tutorial/uiswing/components/panel.html">How to Use Panels</a>,
         * a section in <em>The Java Tutorial</em>.
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
         * @beaninfo description: A generic lightweight container.
         * @author Arnaud Weber
         * @author Steve Wilson
         */
        // @ts-ignore
        class JPanel extends javax.swing.JComponent implements javax.accessibility.Accessible {
            /**
             * Creates a new JPanel with the specified layout manager and buffering
             * strategy.
             * @param layout  the LayoutManager to use
             * @param isDoubleBuffered  a boolean, true for double-buffering, which
             *         uses additional memory space to achieve fast, flicker-free
             *         updates
             */
            // @ts-ignore
            constructor(layout: java.awt.LayoutManager, isDoubleBuffered: boolean)
            /**
             * Create a new buffered JPanel with the specified layout manager
             * @param layout  the LayoutManager to use
             */
            // @ts-ignore
            constructor(layout: java.awt.LayoutManager)
            /**
             * Creates a new <code>JPanel</code> with <code>FlowLayout</code>
             * and the specified buffering strategy.
             * If <code>isDoubleBuffered</code> is true, the <code>JPanel</code>
             * will use a double buffer.
             * @param isDoubleBuffered  a boolean, true for double-buffering, which
             *         uses additional memory space to achieve fast, flicker-free
             *         updates
             */
            // @ts-ignore
            constructor(isDoubleBuffered: boolean)
            /**
             * Creates a new <code>JPanel</code> with a double buffer
             * and a flow layout.
             */
            // @ts-ignore
            constructor()
            /**
             * Resets the UI property with a value from the current look and feel.
             * @see JComponent#updateUI
             */
            // @ts-ignore
            public updateUI(): void
            /**
             * Returns the look and feel (L&amp;amp;F) object that renders this component.
             * @return the PanelUI object that renders this component
             * @since 1.4
             */
            // @ts-ignore
            public getUI(): javax.swing.plaf.PanelUI
            /**
             * Sets the look and feel (L&amp;F) object that renders this component.
             * @param ui  the PanelUI L&amp;F object
             * @see UIDefaults#getUI
             * @since 1.4
             * @beaninfo bound: true
             *        hidden: true
             *     attribute: visualUpdate true
             *   description: The UI object that implements the Component's LookAndFeel.
             */
            // @ts-ignore
            public setUI(ui: javax.swing.plaf.PanelUI): void
            /**
             * Returns a string that specifies the name of the L&amp;F class
             * that renders this component.
             * @return "PanelUI"
             * @see JComponent#getUIClassID
             * @see UIDefaults#getUI
             * @beaninfo expert: true
             *    description: A string that specifies the name of the L&amp;F class.
             */
            // @ts-ignore
            public getUIClassID(): string
            /**
             * Returns a string representation of this JPanel. This method
             * is intended to be used only for debugging purposes, and the
             * content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not
             * be <code>null</code>.
             * @return a string representation of this JPanel.
             */
            // @ts-ignore
            paramString(): string
            /**
             * Gets the AccessibleContext associated with this JPanel.
             * For JPanels, the AccessibleContext takes the form of an
             * AccessibleJPanel.
             * A new AccessibleJPanel instance is created if necessary.
             * @return an AccessibleJPanel that serves as the
             *          AccessibleContext of this JPanel
             */
            // @ts-ignore
            public getAccessibleContext(): javax.accessibility.AccessibleContext
        }
    }
}
