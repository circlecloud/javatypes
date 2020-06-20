declare namespace javax {
    namespace swing {
        /**
         * <code>JToolBar</code> provides a component that is useful for
         * displaying commonly used <code>Action</code>s or controls.
         * For examples and information on using tool bars see
         * <a href="https://docs.oracle.com/javase/tutorial/uiswing/components/toolbar.html">How to Use Tool Bars</a>,
         * a section in <em>The Java Tutorial</em>.
         * <p>
         * With most look and feels,
         * the user can drag out a tool bar into a separate window
         * (unless the <code>floatable</code> property is set to <code>false</code>).
         * For drag-out to work correctly, it is recommended that you add
         * <code>JToolBar</code> instances to one of the four "sides" of a
         * container whose layout manager is a <code>BorderLayout</code>,
         * and do not add children to any of the other four "sides".
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
         * @beaninfo attribute: isContainer true
         *  description: A component which displays commonly used controls or Actions.
         * @author Georges Saab
         * @author Jeff Shapiro
         * @see Action
         */
        // @ts-ignore
        class JToolBar extends javax.swing.JComponent implements javax.swing.SwingConstants, javax.accessibility.Accessible {
            /**
             * Creates a new tool bar; orientation defaults to <code>HORIZONTAL</code>.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a new tool bar with the specified <code>orientation</code>.
             * The <code>orientation</code> must be either <code>HORIZONTAL</code>
             * or <code>VERTICAL</code>.
             * @param orientation  the orientation desired
             */
            // @ts-ignore
            constructor(orientation: number /*int*/)
            /**
             * Creates a new tool bar with the specified <code>name</code>.  The
             * name is used as the title of the undocked tool bar.  The default
             * orientation is <code>HORIZONTAL</code>.
             * @param name the name of the tool bar
             * @since 1.3
             */
            // @ts-ignore
            constructor(name: string)
            /**
             * Creates a new tool bar with a specified <code>name</code> and
             * <code>orientation</code>.
             * All other constructors call this constructor.
             * If <code>orientation</code> is an invalid value, an exception will
             * be thrown.
             * @param name  the name of the tool bar
             * @param orientation  the initial orientation -- it must be
             *           either <code>HORIZONTAL</code> or <code>VERTICAL</code>
             * @exception IllegalArgumentException if orientation is neither
             *           <code>HORIZONTAL</code> nor <code>VERTICAL</code>
             * @since 1.3
             */
            // @ts-ignore
            constructor(name: string, orientation: number /*int*/)
            /**
             * Returns the tool bar's current UI.
             * @see #setUI
             */
            // @ts-ignore
            getUI(): javax.swing.plaf.ToolBarUI
            /**
             * Sets the L&amp;F object that renders this component.
             * @param ui  the <code>ToolBarUI</code> L&amp;F object
             * @see UIDefaults#getUI
             * @beaninfo bound: true
             *        hidden: true
             *     attribute: visualUpdate true
             *   description: The UI object that implements the Component's LookAndFeel.
             */
            // @ts-ignore
            setUI(ui: javax.swing.plaf.ToolBarUI): void
            /**
             * Notification from the <code>UIFactory</code> that the L&amp;F has changed.
             * Called to replace the UI with the latest version from the
             * <code>UIFactory</code>.
             * @see JComponent#updateUI
             */
            // @ts-ignore
            updateUI(): void
            /**
             * Returns the name of the L&amp;F class that renders this component.
             * @return the string "ToolBarUI"
             * @see JComponent#getUIClassID
             * @see UIDefaults#getUI
             */
            // @ts-ignore
            getUIClassID(): java.lang.String
            /**
             * Returns the index of the specified component.
             * (Note: Separators occupy index positions.)
             * @param c  the <code>Component</code> to find
             * @return an integer indicating the component's position,
             *           where 0 is first
             */
            // @ts-ignore
            getComponentIndex(c: java.awt.Component): int
            /**
             * Returns the component at the specified index.
             * @param i  the component's position, where 0 is first
             * @return the <code>Component</code> at that position,
             *           or <code>null</code> for an invalid index
             */
            // @ts-ignore
            getComponentAtIndex(i: number /*int*/): java.awt.Component
            /**
             * Sets the margin between the tool bar's border and
             * its buttons. Setting to <code>null</code> causes the tool bar to
             * use the default margins. The tool bar's default <code>Border</code>
             * object uses this value to create the proper margin.
             * However, if a non-default border is set on the tool bar,
             * it is that <code>Border</code> object's responsibility to create the
             * appropriate margin space (otherwise this property will
             * effectively be ignored).
             * @param m an <code>Insets</code> object that defines the space
             *          between the border and the buttons
             * @see Insets
             * @beaninfo description: The margin between the tool bar's border and contents
             *        bound: true
             *       expert: true
             */
            // @ts-ignore
            setMargin(m: java.awt.Insets): void
            /**
             * Returns the margin between the tool bar's border and
             * its buttons.
             * @return an <code>Insets</code> object containing the margin values
             * @see Insets
             */
            // @ts-ignore
            getMargin(): java.awt.Insets
            /**
             * Gets the <code>borderPainted</code> property.
             * @return the value of the <code>borderPainted</code> property
             * @see #setBorderPainted
             */
            // @ts-ignore
            isBorderPainted(): boolean
            /**
             * Sets the <code>borderPainted</code> property, which is
             * <code>true</code> if the border should be painted.
             * The default value for this property is <code>true</code>.
             * Some look and feels might not implement painted borders;
             * they will ignore this property.
             * @param b if true, the border is painted
             * @see #isBorderPainted
             * @beaninfo description: Does the tool bar paint its borders?
             *        bound: true
             *       expert: true
             */
            // @ts-ignore
            setBorderPainted(b: boolean): void
            /**
             * Paints the tool bar's border if the <code>borderPainted</code> property
             * is <code>true</code>.
             * @param g  the <code>Graphics</code> context in which the painting
             *          is done
             * @see JComponent#paint
             * @see JComponent#setBorder
             */
            // @ts-ignore
            paintBorder(g: java.awt.Graphics): void
            /**
             * Gets the <code>floatable</code> property.
             * @return the value of the <code>floatable</code> property
             * @see #setFloatable
             */
            // @ts-ignore
            isFloatable(): boolean
            /**
             * Sets the <code>floatable</code> property,
             * which must be <code>true</code> for the user to move the tool bar.
             * Typically, a floatable tool bar can be
             * dragged into a different position within the same container
             * or out into its own window.
             * The default value of this property is <code>true</code>.
             * Some look and feels might not implement floatable tool bars;
             * they will ignore this property.
             * @param b if <code>true</code>, the tool bar can be moved;
             *           <code>false</code> otherwise
             * @see #isFloatable
             * @beaninfo description: Can the tool bar be made to float by the user?
             *        bound: true
             *    preferred: true
             */
            // @ts-ignore
            setFloatable(b: boolean): void
            /**
             * Returns the current orientation of the tool bar.  The value is either
             * <code>HORIZONTAL</code> or <code>VERTICAL</code>.
             * @return an integer representing the current orientation -- either
             *           <code>HORIZONTAL</code> or <code>VERTICAL</code>
             * @see #setOrientation
             */
            // @ts-ignore
            getOrientation(): int
            /**
             * Sets the orientation of the tool bar.  The orientation must have
             * either the value <code>HORIZONTAL</code> or <code>VERTICAL</code>.
             * If <code>orientation</code> is
             * an invalid value, an exception will be thrown.
             * @param o  the new orientation -- either <code>HORIZONTAL</code> or
             *                   <code>VERTICAL</code>
             * @exception IllegalArgumentException if orientation is neither
             *           <code>HORIZONTAL</code> nor <code>VERTICAL</code>
             * @see #getOrientation
             * @beaninfo description: The current orientation of the tool bar
             *        bound: true
             *    preferred: true
             *         enum: HORIZONTAL SwingConstants.HORIZONTAL
             *               VERTICAL   SwingConstants.VERTICAL
             */
            // @ts-ignore
            setOrientation(o: number /*int*/): void
            /**
             * Sets the rollover state of this toolbar. If the rollover state is true
             * then the border of the toolbar buttons will be drawn only when the
             * mouse pointer hovers over them. The default value of this property
             * is false.
             * <p>
             * The implementation of a look and feel may choose to ignore this
             * property.
             * @param rollover true for rollover toolbar buttons; otherwise false
             * @since 1.4
             * @beaninfo bound: true
             *     preferred: true
             *     attribute: visualUpdate true
             *   description: Will draw rollover button borders in the toolbar.
             */
            // @ts-ignore
            setRollover(rollover: boolean): void
            /**
             * Returns the rollover state.
             * @return true if rollover toolbar buttons are to be drawn; otherwise false
             * @see #setRollover(boolean)
             * @since 1.4
             */
            // @ts-ignore
            isRollover(): boolean
            /**
             * Appends a separator of default size to the end of the tool bar.
             * The default size is determined by the current look and feel.
             */
            // @ts-ignore
            addSeparator(): void
            /**
             * Appends a separator of a specified size to the end
             * of the tool bar.
             * @param size the <code>Dimension</code> of the separator
             */
            // @ts-ignore
            addSeparator(size: java.awt.Dimension): void
            /**
             * Adds a new <code>JButton</code> which dispatches the action.
             * @param a the <code>Action</code> object to add as a new menu item
             * @return the new button which dispatches the action
             */
            // @ts-ignore
            add(a: javax.swing.Action): javax.swing.JButton
            /**
             * Factory method which creates the <code>JButton</code> for
             * <code>Action</code>s added to the <code>JToolBar</code>.
             * The default name is empty if a <code>null</code> action is passed.
             * @param a the <code>Action</code> for the button to be added
             * @return the newly created button
             * @see Action
             * @since 1.3
             */
            // @ts-ignore
            createActionComponent(a: javax.swing.Action): javax.swing.JButton
            /**
             * Returns a properly configured <code>PropertyChangeListener</code>
             * which updates the control as changes to the <code>Action</code> occur,
             * or <code>null</code> if the default
             * property change listener for the control is desired.
             * @return <code>null</code>
             */
            // @ts-ignore
            createActionChangeListener(b: javax.swing.JButton): java.beans.PropertyChangeListener
            /**
             * If a <code>JButton</code> is being added, it is initially
             * set to be disabled.
             * @param comp  the component to be enhanced
             * @param constraints  the constraints to be enforced on the component
             * @param index the index of the component
             */
            // @ts-ignore
            addImpl(comp: java.awt.Component, constraints: any, index: number /*int*/): void
            /**
             * Returns a string representation of this <code>JToolBar</code>.
             * This method
             * is intended to be used only for debugging purposes, and the
             * content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not
             * be <code>null</code>.
             * @return a string representation of this <code>JToolBar</code>.
             */
            // @ts-ignore
            paramString(): java.lang.String
            // @ts-ignore
            setLayout(mgr: java.awt.LayoutManager): void
            /**
             * Gets the AccessibleContext associated with this JToolBar.
             * For tool bars, the AccessibleContext takes the form of an
             * AccessibleJToolBar.
             * A new AccessibleJToolBar instance is created if necessary.
             * @return an AccessibleJToolBar that serves as the
             *          AccessibleContext of this JToolBar
             */
            // @ts-ignore
            getAccessibleContext(): javax.accessibility.AccessibleContext
        }
    }
}
