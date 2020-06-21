declare namespace javax {
    namespace swing {
        /**
         * Defines common behaviors for buttons and menu items.
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
         * For further information see
         * <a
         * href="https://docs.oracle.com/javase/tutorial/uiswing/components/button.html">How to Use Buttons, Check Boxes, and Radio Buttons</a>,
         * a section in <em>The Java Tutorial</em>.
         * <p>
         * <strong>Warning:</strong>
         * Serialized objects of this class will not be compatible with
         * future Swing releases. The current serialization support is
         * appropriate for short term storage or RMI between applications running
         * the same version of Swing.  As of 1.4, support for long term storage
         * of all JavaBeans&trade;
         * has been added to the <code>java.beans</code> package.
         * Please see {@link java.beans.XMLEncoder}.
         * @author Jeff Dinkins
         */
        // @ts-ignore
        abstract class AbstractButton extends javax.swing.JComponent implements java.awt.ItemSelectable, javax.swing.SwingConstants {
            // @ts-ignore
            constructor()
            /**
             * Identifies a change in the button model.
             */
            // @ts-ignore
            public static readonly MODEL_CHANGED_PROPERTY: java.lang.String | string
            /**
             * Identifies a change in the button's text.
             */
            // @ts-ignore
            public static readonly TEXT_CHANGED_PROPERTY: java.lang.String | string
            /**
             * Identifies a change to the button's mnemonic.
             */
            // @ts-ignore
            public static readonly MNEMONIC_CHANGED_PROPERTY: java.lang.String | string
            /**
             * Identifies a change in the button's margins.
             */
            // @ts-ignore
            public static readonly MARGIN_CHANGED_PROPERTY: java.lang.String | string
            /**
             * Identifies a change in the button's vertical alignment.
             */
            // @ts-ignore
            public static readonly VERTICAL_ALIGNMENT_CHANGED_PROPERTY: java.lang.String | string
            /**
             * Identifies a change in the button's horizontal alignment.
             */
            // @ts-ignore
            public static readonly HORIZONTAL_ALIGNMENT_CHANGED_PROPERTY: java.lang.String | string
            /**
             * Identifies a change in the button's vertical text position.
             */
            // @ts-ignore
            public static readonly VERTICAL_TEXT_POSITION_CHANGED_PROPERTY: java.lang.String | string
            /**
             * Identifies a change in the button's horizontal text position.
             */
            // @ts-ignore
            public static readonly HORIZONTAL_TEXT_POSITION_CHANGED_PROPERTY: java.lang.String | string
            /**
             * Identifies a change to having the border drawn,
             * or having it not drawn.
             */
            // @ts-ignore
            public static readonly BORDER_PAINTED_CHANGED_PROPERTY: java.lang.String | string
            /**
             * Identifies a change to having the border highlighted when focused,
             * or not.
             */
            // @ts-ignore
            public static readonly FOCUS_PAINTED_CHANGED_PROPERTY: java.lang.String | string
            /**
             * Identifies a change from rollover enabled to disabled or back
             * to enabled.
             */
            // @ts-ignore
            public static readonly ROLLOVER_ENABLED_CHANGED_PROPERTY: java.lang.String | string
            /**
             * Identifies a change to having the button paint the content area.
             */
            // @ts-ignore
            public static readonly CONTENT_AREA_FILLED_CHANGED_PROPERTY: java.lang.String | string
            /**
             * Identifies a change to the icon that represents the button.
             */
            // @ts-ignore
            public static readonly ICON_CHANGED_PROPERTY: java.lang.String | string
            /**
             * Identifies a change to the icon used when the button has been
             * pressed.
             */
            // @ts-ignore
            public static readonly PRESSED_ICON_CHANGED_PROPERTY: java.lang.String | string
            /**
             * Identifies a change to the icon used when the button has
             * been selected.
             */
            // @ts-ignore
            public static readonly SELECTED_ICON_CHANGED_PROPERTY: java.lang.String | string
            /**
             * Identifies a change to the icon used when the cursor is over
             * the button.
             */
            // @ts-ignore
            public static readonly ROLLOVER_ICON_CHANGED_PROPERTY: java.lang.String | string
            /**
             * Identifies a change to the icon used when the cursor is
             * over the button and it has been selected.
             */
            // @ts-ignore
            public static readonly ROLLOVER_SELECTED_ICON_CHANGED_PROPERTY: java.lang.String | string
            /**
             * Identifies a change to the icon used when the button has
             * been disabled.
             */
            // @ts-ignore
            public static readonly DISABLED_ICON_CHANGED_PROPERTY: java.lang.String | string
            /**
             * Identifies a change to the icon used when the button has been
             * disabled and selected.
             */
            // @ts-ignore
            public static readonly DISABLED_SELECTED_ICON_CHANGED_PROPERTY: java.lang.String | string
            /**
             * The data model that determines the button's state.
             */
            // @ts-ignore
            model: javax.swing.ButtonModel
            /**
             * The button model's <code>changeListener</code>.
             */
            // @ts-ignore
            changeListener: javax.swing.event.ChangeListener
            /**
             * The button model's <code>ActionListener</code>.
             */
            // @ts-ignore
            actionListener: java.awt.event.ActionListener
            /**
             * The button model's <code>ItemListener</code>.
             */
            // @ts-ignore
            itemListener: java.awt.event.ItemListener
            /**
             * Only one <code>ChangeEvent</code> is needed per button
             * instance since the
             * event's only state is the source property.  The source of events
             * generated is always "this".
             */
            // @ts-ignore
            changeEvent: javax.swing.event.ChangeEvent
            /**
             * Sets the <code>hideActionText</code> property, which determines
             * whether the button displays text from the <code>Action</code>.
             * This is useful only if an <code>Action</code> has been
             * installed on the button.
             * @param hideActionText <code>true</code> if the button's
             *                        <code>text</code> property should not reflect
             *                        that of the <code>Action</code>; the default is
             *                        <code>false</code>
             * @see <a href="Action.html#buttonActions">Swing Components Supporting
             *       <code>Action</code></a>
             * @since 1.6
             * @beaninfo bound: true
             *     expert: true
             *   description: Whether the text of the button should come from
             *                the <code>Action</code>.
             */
            // @ts-ignore
            public setHideActionText(hideActionText: boolean): void
            /**
             * Returns the value of the <code>hideActionText</code> property, which
             * determines whether the button displays text from the
             * <code>Action</code>.  This is useful only if an <code>Action</code>
             * has been installed on the button.
             * @return <code>true</code> if the button's <code>text</code>
             *          property should not reflect that of the
             *          <code>Action</code>; the default is <code>false</code>
             * @since 1.6
             */
            // @ts-ignore
            public getHideActionText(): boolean
            /**
             * Returns the button's text.
             * @return the buttons text
             * @see #setText
             */
            // @ts-ignore
            public getText(): string
            /**
             * Sets the button's text.
             * @param text the string used to set the text
             * @see #getText
             * @beaninfo bound: true
             *     preferred: true
             *     attribute: visualUpdate true
             *   description: The button's text.
             */
            // @ts-ignore
            public setText(text: java.lang.String | string): void
            /**
             * Returns the state of the button. True if the
             * toggle button is selected, false if it's not.
             * @return true if the toggle button is selected, otherwise false
             */
            // @ts-ignore
            public isSelected(): boolean
            /**
             * Sets the state of the button. Note that this method does not
             * trigger an <code>actionEvent</code>.
             * Call <code>doClick</code> to perform a programmatic action change.
             * @param b  true if the button is selected, otherwise false
             */
            // @ts-ignore
            public setSelected(b: boolean): void
            /**
             * Programmatically perform a "click". This does the same
             * thing as if the user had pressed and released the button.
             */
            // @ts-ignore
            public doClick(): void
            /**
             * Programmatically perform a "click". This does the same
             * thing as if the user had pressed and released the button.
             * The button stays visually "pressed" for <code>pressTime</code>
             * milliseconds.
             * @param pressTime the time to "hold down" the button, in milliseconds
             */
            // @ts-ignore
            public doClick(pressTime: number /*int*/): void
            /**
             * Sets space for margin between the button's border and
             * the label. Setting to <code>null</code> will cause the button to
             * use the default margin.  The button's default <code>Border</code>
             * object will use this value to create the proper margin.
             * However, if a non-default border is set on the button,
             * it is that <code>Border</code> object's responsibility to create the
             * appropriate margin space (else this property will
             * effectively be ignored).
             * @param m the space between the border and the label
             * @beaninfo bound: true
             *     attribute: visualUpdate true
             *   description: The space between the button's border and the label.
             */
            // @ts-ignore
            public setMargin(m: java.awt.Insets): void
            /**
             * Returns the margin between the button's border and
             * the label.
             * @return an <code>Insets</code> object specifying the margin
             *           between the botton's border and the label
             * @see #setMargin
             */
            // @ts-ignore
            public getMargin(): java.awt.Insets
            /**
             * Returns the default icon.
             * @return the default <code>Icon</code>
             * @see #setIcon
             */
            // @ts-ignore
            public getIcon(): javax.swing.Icon
            /**
             * Sets the button's default icon. This icon is
             * also used as the "pressed" and "disabled" icon if
             * there is no explicitly set pressed icon.
             * @param defaultIcon the icon used as the default image
             * @see #getIcon
             * @see #setPressedIcon
             * @beaninfo bound: true
             *        attribute: visualUpdate true
             *      description: The button's default icon
             */
            // @ts-ignore
            public setIcon(defaultIcon: javax.swing.Icon): void
            /**
             * Returns the pressed icon for the button.
             * @return the <code>pressedIcon</code> property
             * @see #setPressedIcon
             */
            // @ts-ignore
            public getPressedIcon(): javax.swing.Icon
            /**
             * Sets the pressed icon for the button.
             * @param pressedIcon the icon used as the "pressed" image
             * @see #getPressedIcon
             * @beaninfo bound: true
             *     attribute: visualUpdate true
             *   description: The pressed icon for the button.
             */
            // @ts-ignore
            public setPressedIcon(pressedIcon: javax.swing.Icon): void
            /**
             * Returns the selected icon for the button.
             * @return the <code>selectedIcon</code> property
             * @see #setSelectedIcon
             */
            // @ts-ignore
            public getSelectedIcon(): javax.swing.Icon
            /**
             * Sets the selected icon for the button.
             * @param selectedIcon the icon used as the "selected" image
             * @see #getSelectedIcon
             * @beaninfo bound: true
             *     attribute: visualUpdate true
             *   description: The selected icon for the button.
             */
            // @ts-ignore
            public setSelectedIcon(selectedIcon: javax.swing.Icon): void
            /**
             * Returns the rollover icon for the button.
             * @return the <code>rolloverIcon</code> property
             * @see #setRolloverIcon
             */
            // @ts-ignore
            public getRolloverIcon(): javax.swing.Icon
            /**
             * Sets the rollover icon for the button.
             * @param rolloverIcon the icon used as the "rollover" image
             * @see #getRolloverIcon
             * @beaninfo bound: true
             *     attribute: visualUpdate true
             *   description: The rollover icon for the button.
             */
            // @ts-ignore
            public setRolloverIcon(rolloverIcon: javax.swing.Icon): void
            /**
             * Returns the rollover selection icon for the button.
             * @return the <code>rolloverSelectedIcon</code> property
             * @see #setRolloverSelectedIcon
             */
            // @ts-ignore
            public getRolloverSelectedIcon(): javax.swing.Icon
            /**
             * Sets the rollover selected icon for the button.
             * @param rolloverSelectedIcon the icon used as the
             *           "selected rollover" image
             * @see #getRolloverSelectedIcon
             * @beaninfo bound: true
             *     attribute: visualUpdate true
             *   description: The rollover selected icon for the button.
             */
            // @ts-ignore
            public setRolloverSelectedIcon(rolloverSelectedIcon: javax.swing.Icon): void
            /**
             * Returns the icon used by the button when it's disabled.
             * If no disabled icon has been set this will forward the call to
             * the look and feel to construct an appropriate disabled Icon.
             * <p>
             * Some look and feels might not render the disabled Icon, in which
             * case they will ignore this.
             * @return the <code>disabledIcon</code> property
             * @see #getPressedIcon
             * @see #setDisabledIcon
             * @see javax.swing.LookAndFeel#getDisabledIcon
             */
            // @ts-ignore
            public getDisabledIcon(): javax.swing.Icon
            /**
             * Sets the disabled icon for the button.
             * @param disabledIcon the icon used as the disabled image
             * @see #getDisabledIcon
             * @beaninfo bound: true
             *     attribute: visualUpdate true
             *   description: The disabled icon for the button.
             */
            // @ts-ignore
            public setDisabledIcon(disabledIcon: javax.swing.Icon): void
            /**
             * Returns the icon used by the button when it's disabled and selected.
             * If no disabled selection icon has been set, this will forward
             * the call to the LookAndFeel to construct an appropriate disabled
             * Icon from the selection icon if it has been set and to
             * <code>getDisabledIcon()</code> otherwise.
             * <p>
             * Some look and feels might not render the disabled selected Icon, in
             * which case they will ignore this.
             * @return the <code>disabledSelectedIcon</code> property
             * @see #getDisabledIcon
             * @see #setDisabledSelectedIcon
             * @see javax.swing.LookAndFeel#getDisabledSelectedIcon
             */
            // @ts-ignore
            public getDisabledSelectedIcon(): javax.swing.Icon
            /**
             * Sets the disabled selection icon for the button.
             * @param disabledSelectedIcon the icon used as the disabled
             *           selection image
             * @see #getDisabledSelectedIcon
             * @beaninfo bound: true
             *     attribute: visualUpdate true
             *   description: The disabled selection icon for the button.
             */
            // @ts-ignore
            public setDisabledSelectedIcon(disabledSelectedIcon: javax.swing.Icon): void
            /**
             * Returns the vertical alignment of the text and icon.
             * @return the <code>verticalAlignment</code> property, one of the
             *           following values:
             *  <ul>
             *  <li>{#code SwingConstants.CENTER} (the default)
             *  <li>{@code SwingConstants.TOP}
             *  <li>{@code SwingConstants.BOTTOM}
             *  </ul>
             */
            // @ts-ignore
            public getVerticalAlignment(): number /*int*/
            /**
             * Sets the vertical alignment of the icon and text.
             * @param alignment one of the following values:
             *  <ul>
             *  <li>{#code SwingConstants.CENTER} (the default)
             *  <li>{@code SwingConstants.TOP}
             *  <li>{@code SwingConstants.BOTTOM}
             *  </ul>
             * @throws IllegalArgumentException if the alignment is not one of the legal
             *          values listed above
             * @beaninfo bound: true
             *          enum: TOP    SwingConstants.TOP
             *                CENTER SwingConstants.CENTER
             *                BOTTOM  SwingConstants.BOTTOM
             *     attribute: visualUpdate true
             *   description: The vertical alignment of the icon and text.
             */
            // @ts-ignore
            public setVerticalAlignment(alignment: number /*int*/): void
            /**
             * Returns the horizontal alignment of the icon and text.
             * {@code AbstractButton}'s default is {@code SwingConstants.CENTER},
             * but subclasses such as {@code JCheckBox} may use a different default.
             * @return the <code>horizontalAlignment</code> property,
             *              one of the following values:
             *  <ul>
             *    <li>{#code SwingConstants.RIGHT}
             *    <li>{@code SwingConstants.LEFT}
             *    <li>{@code SwingConstants.CENTER}
             *    <li>{@code SwingConstants.LEADING}
             *    <li>{@code SwingConstants.TRAILING}
             *  </ul>
             */
            // @ts-ignore
            public getHorizontalAlignment(): number /*int*/
            /**
             * Sets the horizontal alignment of the icon and text.
             * {@code AbstractButton}'s default is {@code SwingConstants.CENTER},
             * but subclasses such as {@code JCheckBox} may use a different default.
             * @param alignment the alignment value, one of the following values:
             *  <ul>
             *    <li>{#code SwingConstants.RIGHT}
             *    <li>{@code SwingConstants.LEFT}
             *    <li>{@code SwingConstants.CENTER}
             *    <li>{@code SwingConstants.LEADING}
             *    <li>{@code SwingConstants.TRAILING}
             *  </ul>
             * @throws IllegalArgumentException if the alignment is not one of the
             *          valid values
             * @beaninfo bound: true
             *          enum: LEFT     SwingConstants.LEFT
             *                CENTER   SwingConstants.CENTER
             *                RIGHT    SwingConstants.RIGHT
             *                LEADING  SwingConstants.LEADING
             *                TRAILING SwingConstants.TRAILING
             *     attribute: visualUpdate true
             *   description: The horizontal alignment of the icon and text.
             */
            // @ts-ignore
            public setHorizontalAlignment(alignment: number /*int*/): void
            /**
             * Returns the vertical position of the text relative to the icon.
             * @return the <code>verticalTextPosition</code> property,
             *           one of the following values:
             *  <ul>
             *  <li>{#code SwingConstants.CENTER} (the default)
             *  <li>{@code SwingConstants.TOP}
             *  <li>{@code SwingConstants.BOTTOM}
             *  </ul>
             */
            // @ts-ignore
            public getVerticalTextPosition(): number /*int*/
            /**
             * Sets the vertical position of the text relative to the icon.
             * @param textPosition  one of the following values:
             *  <ul>
             *  <li>{#code SwingConstants.CENTER} (the default)
             *  <li>{@code SwingConstants.TOP}
             *  <li>{@code SwingConstants.BOTTOM}
             *  </ul>
             * @beaninfo bound: true
             *          enum: TOP    SwingConstants.TOP
             *                CENTER SwingConstants.CENTER
             *                BOTTOM SwingConstants.BOTTOM
             *     attribute: visualUpdate true
             *   description: The vertical position of the text relative to the icon.
             */
            // @ts-ignore
            public setVerticalTextPosition(textPosition: number /*int*/): void
            /**
             * Returns the horizontal position of the text relative to the icon.
             * @return the <code>horizontalTextPosition</code> property,
             *           one of the following values:
             *  <ul>
             *  <li>{#code SwingConstants.RIGHT}
             *  <li>{@code SwingConstants.LEFT}
             *  <li>{@code SwingConstants.CENTER}
             *  <li>{@code SwingConstants.LEADING}
             *  <li>{@code SwingConstants.TRAILING} (the default)
             *  </ul>
             */
            // @ts-ignore
            public getHorizontalTextPosition(): number /*int*/
            /**
             * Sets the horizontal position of the text relative to the icon.
             * @param textPosition one of the following values:
             *  <ul>
             *  <li>{#code SwingConstants.RIGHT}
             *  <li>{@code SwingConstants.LEFT}
             *  <li>{@code SwingConstants.CENTER}
             *  <li>{@code SwingConstants.LEADING}
             *  <li>{@code SwingConstants.TRAILING} (the default)
             *  </ul>
             * @exception IllegalArgumentException if <code>textPosition</code>
             *           is not one of the legal values listed above
             * @beaninfo bound: true
             *          enum: LEFT     SwingConstants.LEFT
             *                CENTER   SwingConstants.CENTER
             *                RIGHT    SwingConstants.RIGHT
             *                LEADING  SwingConstants.LEADING
             *                TRAILING SwingConstants.TRAILING
             *     attribute: visualUpdate true
             *   description: The horizontal position of the text relative to the icon.
             */
            // @ts-ignore
            public setHorizontalTextPosition(textPosition: number /*int*/): void
            /**
             * Returns the amount of space between the text and the icon
             * displayed in this button.
             * @return an int equal to the number of pixels between the text
             *          and the icon.
             * @since 1.4
             * @see #setIconTextGap
             */
            // @ts-ignore
            public getIconTextGap(): number /*int*/
            /**
             * If both the icon and text properties are set, this property
             * defines the space between them.
             * <p>
             * The default value of this property is 4 pixels.
             * <p>
             * This is a JavaBeans bound property.
             * @since 1.4
             * @see #getIconTextGap
             * @beaninfo bound: true
             *     attribute: visualUpdate true
             *   description: If both the icon and text properties are set, this
             *                property defines the space between them.
             */
            // @ts-ignore
            public setIconTextGap(iconTextGap: number /*int*/): void
            /**
             * Verify that the {@code key} argument is a legal value for the
             * {@code horizontalAlignment} and {@code horizontalTextPosition}
             * properties. Valid values are:
             * <ul>
             * <li>{@code SwingConstants.RIGHT}
             * <li>{@code SwingConstants.LEFT}
             * <li>{@code SwingConstants.CENTER}
             * <li>{@code SwingConstants.LEADING}
             * <li>{@code SwingConstants.TRAILING}
             * </ul>
             * @param key the property value to check
             * @param exception the message to use in the
             *         {#code IllegalArgumentException} that is thrown for an invalid
             *         value
             * @return the {#code key} argument
             * @exception IllegalArgumentException if key is not one of the legal
             *             values listed above
             * @see #setHorizontalTextPosition
             * @see #setHorizontalAlignment
             */
            // @ts-ignore
            checkHorizontalKey(key: number /*int*/, exception: java.lang.String | string): number /*int*/
            /**
             * Verify that the {@code key} argument is a legal value for the
             * vertical properties. Valid values are:
             * <ul>
             * <li>{@code SwingConstants.CENTER}
             * <li>{@code SwingConstants.TOP}
             * <li>{@code SwingConstants.BOTTOM}
             * </ul>
             * @param key the property value to check
             * @param exception the message to use in the
             *         {#code IllegalArgumentException} that is thrown for an invalid
             *         value
             * @return the {#code key} argument
             * @exception IllegalArgumentException if key is not one of the legal
             *             values listed above
             */
            // @ts-ignore
            checkVerticalKey(key: number /*int*/, exception: java.lang.String | string): number /*int*/
            /**
             * {@inheritDoc}
             * @since 1.6
             */
            // @ts-ignore
            public removeNotify(): void
            /**
             * Sets the action command for this button.
             * @param actionCommand the action command for this button
             */
            // @ts-ignore
            public setActionCommand(actionCommand: java.lang.String | string): void
            /**
             * Returns the action command for this button.
             * @return the action command for this button
             */
            // @ts-ignore
            public getActionCommand(): string
            /**
             * Sets the <code>Action</code>.
             * The new <code>Action</code> replaces any previously set
             * <code>Action</code> but does not affect <code>ActionListeners</code>
             * independently added with <code>addActionListener</code>.
             * If the <code>Action</code> is already a registered
             * <code>ActionListener</code> for the button, it is not re-registered.
             * <p>
             * Setting the <code>Action</code> results in immediately changing
             * all the properties described in <a href="Action.html#buttonActions">
             * Swing Components Supporting <code>Action</code></a>.
             * Subsequently, the button's properties are automatically updated
             * as the <code>Action</code>'s properties change.
             * <p>
             * This method uses three other methods to set
             * and help track the <code>Action</code>'s property values.
             * It uses the <code>configurePropertiesFromAction</code> method
             * to immediately change the button's properties.
             * To track changes in the <code>Action</code>'s property values,
             * this method registers the <code>PropertyChangeListener</code>
             * returned by <code>createActionPropertyChangeListener</code>. The
             * default {@code PropertyChangeListener} invokes the
             * {@code actionPropertyChanged} method when a property in the
             * {@code Action} changes.
             * @param a the <code>Action</code> for the <code>AbstractButton</code>,
             *           or <code>null</code>
             * @since 1.3
             * @see Action
             * @see #getAction
             * @see #configurePropertiesFromAction
             * @see #createActionPropertyChangeListener
             * @see #actionPropertyChanged
             * @beaninfo bound: true
             *     attribute: visualUpdate true
             *   description: the Action instance connected with this ActionEvent source
             */
            // @ts-ignore
            public setAction(a: javax.swing.Action): void
            /**
             * Returns the currently set <code>Action</code> for this
             * <code>ActionEvent</code> source, or <code>null</code>
             * if no <code>Action</code> is set.
             * @return the <code>Action</code> for this <code>ActionEvent</code>
             *           source, or <code>null</code>
             * @since 1.3
             * @see Action
             * @see #setAction
             */
            // @ts-ignore
            public getAction(): javax.swing.Action
            /**
             * Sets the properties on this button to match those in the specified
             * <code>Action</code>.  Refer to <a href="Action.html#buttonActions">
             * Swing Components Supporting <code>Action</code></a> for more
             * details as to which properties this sets.
             * @param a the <code>Action</code> from which to get the properties,
             *           or <code>null</code>
             * @since 1.3
             * @see Action
             * @see #setAction
             */
            // @ts-ignore
            configurePropertiesFromAction(a: javax.swing.Action): void
            /**
             * Updates the button's state in response to property changes in the
             * associated action. This method is invoked from the
             * {@code PropertyChangeListener} returned from
             * {@code createActionPropertyChangeListener}. Subclasses do not normally
             * need to invoke this. Subclasses that support additional {@code Action}
             * properties should override this and
             * {@code configurePropertiesFromAction}.
             * <p>
             * Refer to the table at <a href="Action.html#buttonActions">
             * Swing Components Supporting <code>Action</code></a> for a list of
             * the properties this method sets.
             * @param action the <code>Action</code> associated with this button
             * @param propertyName the name of the property that changed
             * @since 1.6
             * @see Action
             * @see #configurePropertiesFromAction
             */
            // @ts-ignore
            actionPropertyChanged(action: javax.swing.Action, propertyName: java.lang.String | string): void
            /**
             * Creates and returns a <code>PropertyChangeListener</code> that is
             * responsible for listening for changes from the specified
             * <code>Action</code> and updating the appropriate properties.
             * <p>
             * <b>Warning:</b> If you subclass this do not create an anonymous
             * inner class.  If you do the lifetime of the button will be tied to
             * that of the <code>Action</code>.
             * @param a the button's action
             * @since 1.3
             * @see Action
             * @see #setAction
             */
            // @ts-ignore
            createActionPropertyChangeListener(a: javax.swing.Action): java.beans.PropertyChangeListener
            /**
             * Gets the <code>borderPainted</code> property.
             * @return the value of the <code>borderPainted</code> property
             * @see #setBorderPainted
             */
            // @ts-ignore
            public isBorderPainted(): boolean
            /**
             * Sets the <code>borderPainted</code> property.
             * If <code>true</code> and the button has a border,
             * the border is painted. The default value for the
             * <code>borderPainted</code> property is <code>true</code>.
             * <p>
             * Some look and feels might not support
             * the <code>borderPainted</code> property,
             * in which case they ignore this.
             * @param b if true and border property is not <code>null</code>,
             *           the border is painted
             * @see #isBorderPainted
             * @beaninfo bound: true
             *     attribute: visualUpdate true
             *   description: Whether the border should be painted.
             */
            // @ts-ignore
            public setBorderPainted(b: boolean): void
            /**
             * Paint the button's border if <code>BorderPainted</code>
             * property is true and the button has a border.
             * @param g the <code>Graphics</code> context in which to paint
             * @see #paint
             * @see #setBorder
             */
            // @ts-ignore
            paintBorder(g: java.awt.Graphics): void
            /**
             * Gets the <code>paintFocus</code> property.
             * @return the <code>paintFocus</code> property
             * @see #setFocusPainted
             */
            // @ts-ignore
            public isFocusPainted(): boolean
            /**
             * Sets the <code>paintFocus</code> property, which must
             * be <code>true</code> for the focus state to be painted.
             * The default value for the <code>paintFocus</code> property
             * is <code>true</code>.
             * Some look and feels might not paint focus state;
             * they will ignore this property.
             * @param b if <code>true</code>, the focus state should be painted
             * @see #isFocusPainted
             * @beaninfo bound: true
             *     attribute: visualUpdate true
             *   description: Whether focus should be painted
             */
            // @ts-ignore
            public setFocusPainted(b: boolean): void
            /**
             * Gets the <code>contentAreaFilled</code> property.
             * @return the <code>contentAreaFilled</code> property
             * @see #setContentAreaFilled
             */
            // @ts-ignore
            public isContentAreaFilled(): boolean
            /**
             * Sets the <code>contentAreaFilled</code> property.
             * If <code>true</code> the button will paint the content
             * area.  If you wish to have a transparent button, such as
             * an icon only button, for example, then you should set
             * this to <code>false</code>. Do not call <code>setOpaque(false)</code>.
             * The default value for the the <code>contentAreaFilled</code>
             * property is <code>true</code>.
             * <p>
             * This function may cause the component's opaque property to change.
             * <p>
             * The exact behavior of calling this function varies on a
             * component-by-component and L&amp;F-by-L&amp;F basis.
             * @param b if true, the content should be filled; if false
             *           the content area is not filled
             * @see #isContentAreaFilled
             * @see #setOpaque
             * @beaninfo bound: true
             *     attribute: visualUpdate true
             *   description: Whether the button should paint the content area
             *                or leave it transparent.
             */
            // @ts-ignore
            public setContentAreaFilled(b: boolean): void
            /**
             * Gets the <code>rolloverEnabled</code> property.
             * @return the value of the <code>rolloverEnabled</code> property
             * @see #setRolloverEnabled
             */
            // @ts-ignore
            public isRolloverEnabled(): boolean
            /**
             * Sets the <code>rolloverEnabled</code> property, which
             * must be <code>true</code> for rollover effects to occur.
             * The default value for the <code>rolloverEnabled</code>
             * property is <code>false</code>.
             * Some look and feels might not implement rollover effects;
             * they will ignore this property.
             * @param b if <code>true</code>, rollover effects should be painted
             * @see #isRolloverEnabled
             * @beaninfo bound: true
             *     attribute: visualUpdate true
             *   description: Whether rollover effects should be enabled.
             */
            // @ts-ignore
            public setRolloverEnabled(b: boolean): void
            /**
             * Returns the keyboard mnemonic from the the current model.
             * @return the keyboard mnemonic from the model
             */
            // @ts-ignore
            public getMnemonic(): number /*int*/
            /**
             * Sets the keyboard mnemonic on the current model.
             * The mnemonic is the key which when combined with the look and feel's
             * mouseless modifier (usually Alt) will activate this button
             * if focus is contained somewhere within this button's ancestor
             * window.
             * <p>
             * A mnemonic must correspond to a single key on the keyboard
             * and should be specified using one of the <code>VK_XXX</code>
             * keycodes defined in <code>java.awt.event.KeyEvent</code>.
             * These codes and the wider array of codes for international
             * keyboards may be obtained through
             * <code>java.awt.event.KeyEvent.getExtendedKeyCodeForChar</code>.
             * Mnemonics are case-insensitive, therefore a key event
             * with the corresponding keycode would cause the button to be
             * activated whether or not the Shift modifier was pressed.
             * <p>
             * If the character defined by the mnemonic is found within
             * the button's label string, the first occurrence of it
             * will be underlined to indicate the mnemonic to the user.
             * @param mnemonic the key code which represents the mnemonic
             * @see java.awt.event.KeyEvent
             * @see #setDisplayedMnemonicIndex
             * @beaninfo bound: true
             *     attribute: visualUpdate true
             *   description: the keyboard character mnemonic
             */
            // @ts-ignore
            public setMnemonic(mnemonic: number /*int*/): void
            /**
             * This method is now obsolete, please use <code>setMnemonic(int)</code>
             * to set the mnemonic for a button.  This method is only designed
             * to handle character values which fall between 'a' and 'z' or
             * 'A' and 'Z'.
             * @param mnemonic  a char specifying the mnemonic value
             * @see #setMnemonic(int)
             * @beaninfo bound: true
             *     attribute: visualUpdate true
             *   description: the keyboard character mnemonic
             */
            // @ts-ignore
            public setMnemonic(mnemonic: string): void
            /**
             * Provides a hint to the look and feel as to which character in the
             * text should be decorated to represent the mnemonic. Not all look and
             * feels may support this. A value of -1 indicates either there is no
             * mnemonic, the mnemonic character is not contained in the string, or
             * the developer does not wish the mnemonic to be displayed.
             * <p>
             * The value of this is updated as the properties relating to the
             * mnemonic change (such as the mnemonic itself, the text...).
             * You should only ever have to call this if
             * you do not wish the default character to be underlined. For example, if
             * the text was 'Save As', with a mnemonic of 'a', and you wanted the 'A'
             * to be decorated, as 'Save <u>A</u>s', you would have to invoke
             * <code>setDisplayedMnemonicIndex(5)</code> after invoking
             * <code>setMnemonic(KeyEvent.VK_A)</code>.
             * @since 1.4
             * @param index Index into the String to underline
             * @exception IllegalArgumentException will be thrown if <code>index</code>
             *             is &gt;= length of the text, or &lt; -1
             * @see #getDisplayedMnemonicIndex
             * @beaninfo bound: true
             *     attribute: visualUpdate true
             *   description: the index into the String to draw the keyboard character
             *                mnemonic at
             */
            // @ts-ignore
            public setDisplayedMnemonicIndex(index: number /*int*/): void
            /**
             * Returns the character, as an index, that the look and feel should
             * provide decoration for as representing the mnemonic character.
             * @since 1.4
             * @return index representing mnemonic character
             * @see #setDisplayedMnemonicIndex
             */
            // @ts-ignore
            public getDisplayedMnemonicIndex(): number /*int*/
            /**
             * Sets the amount of time (in milliseconds) required between
             * mouse press events for the button to generate the corresponding
             * action events.  After the initial mouse press occurs (and action
             * event generated) any subsequent mouse press events which occur
             * on intervals less than the threshhold will be ignored and no
             * corresponding action event generated.  By default the threshhold is 0,
             * which means that for each mouse press, an action event will be
             * fired, no matter how quickly the mouse clicks occur.  In buttons
             * where this behavior is not desirable (for example, the "OK" button
             * in a dialog), this threshhold should be set to an appropriate
             * positive value.
             * @see #getMultiClickThreshhold
             * @param threshhold the amount of time required between mouse
             *         press events to generate corresponding action events
             * @exception IllegalArgumentException if threshhold &lt; 0
             * @since 1.4
             */
            // @ts-ignore
            public setMultiClickThreshhold(threshhold: number /*long*/): void
            /**
             * Gets the amount of time (in milliseconds) required between
             * mouse press events for the button to generate the corresponding
             * action events.
             * @see #setMultiClickThreshhold
             * @return the amount of time required between mouse press events
             *          to generate corresponding action events
             * @since 1.4
             */
            // @ts-ignore
            public getMultiClickThreshhold(): number /*long*/
            /**
             * Returns the model that this button represents.
             * @return the <code>model</code> property
             * @see #setModel
             */
            // @ts-ignore
            public getModel(): javax.swing.ButtonModel
            /**
             * Sets the model that this button represents.
             * @param newModel the new <code>ButtonModel</code>
             * @see #getModel
             * @beaninfo bound: true
             *   description: Model that the Button uses.
             */
            // @ts-ignore
            public setModel(newModel: javax.swing.ButtonModel): void
            /**
             * Returns the L&amp;F object that renders this component.
             * @return the ButtonUI object
             * @see #setUI
             */
            // @ts-ignore
            public getUI(): javax.swing.plaf.ButtonUI
            /**
             * Sets the L&amp;F object that renders this component.
             * @param ui the <code>ButtonUI</code> L&amp;F object
             * @see #getUI
             * @beaninfo bound: true
             *        hidden: true
             *     attribute: visualUpdate true
             *   description: The UI object that implements the LookAndFeel.
             */
            // @ts-ignore
            public setUI(ui: javax.swing.plaf.ButtonUI): void
            /**
             * Resets the UI property to a value from the current look
             * and feel.  Subtypes of <code>AbstractButton</code>
             * should override this to update the UI. For
             * example, <code>JButton</code> might do the following:
             * <pre>
             * setUI((ButtonUI)UIManager.getUI(
             * "ButtonUI", "javax.swing.plaf.basic.BasicButtonUI", this));
             * </pre>
             */
            // @ts-ignore
            public updateUI(): void
            /**
             * Adds the specified component to this container at the specified
             * index, refer to
             * {@link java.awt.Container#addImpl(Component, Object, int)}
             * for a complete description of this method.
             * @param comp the component to be added
             * @param constraints an object expressing layout constraints
             *                  for this component
             * @param index the position in the container's list at which to
             *                  insert the component, where <code>-1</code>
             *                  means append to the end
             * @exception IllegalArgumentException if <code>index</code> is invalid
             * @exception IllegalArgumentException if adding the container's parent
             *                   to itself
             * @exception IllegalArgumentException if adding a window to a container
             * @since 1.5
             */
            // @ts-ignore
            addImpl(comp: java.awt.Component, constraints: java.lang.Object | any, index: number /*int*/): void
            /**
             * Sets the layout manager for this container, refer to
             * {@link java.awt.Container#setLayout(LayoutManager)}
             * for a complete description of this method.
             * @param mgr the specified layout manager
             * @since 1.5
             */
            // @ts-ignore
            public setLayout(mgr: java.awt.LayoutManager): void
            /**
             * Adds a <code>ChangeListener</code> to the button.
             * @param l the listener to be added
             */
            // @ts-ignore
            public addChangeListener(l: javax.swing.event.ChangeListener): void
            /**
             * Removes a ChangeListener from the button.
             * @param l the listener to be removed
             */
            // @ts-ignore
            public removeChangeListener(l: javax.swing.event.ChangeListener): void
            /**
             * Returns an array of all the <code>ChangeListener</code>s added
             * to this AbstractButton with addChangeListener().
             * @return all of the <code>ChangeListener</code>s added or an empty
             *          array if no listeners have been added
             * @since 1.4
             */
            // @ts-ignore
            public getChangeListeners(): javax.swing.event.ChangeListener[]
            /**
             * Notifies all listeners that have registered interest for
             * notification on this event type.  The event instance
             * is lazily created.
             * @see EventListenerList
             */
            // @ts-ignore
            fireStateChanged(): void
            /**
             * Adds an <code>ActionListener</code> to the button.
             * @param l the <code>ActionListener</code> to be added
             */
            // @ts-ignore
            public addActionListener(l: java.awt.event.ActionListener): void
            /**
             * Removes an <code>ActionListener</code> from the button.
             * If the listener is the currently set <code>Action</code>
             * for the button, then the <code>Action</code>
             * is set to <code>null</code>.
             * @param l the listener to be removed
             */
            // @ts-ignore
            public removeActionListener(l: java.awt.event.ActionListener): void
            /**
             * Returns an array of all the <code>ActionListener</code>s added
             * to this AbstractButton with addActionListener().
             * @return all of the <code>ActionListener</code>s added or an empty
             *          array if no listeners have been added
             * @since 1.4
             */
            // @ts-ignore
            public getActionListeners(): java.awt.event.ActionListener[]
            /**
             * Subclasses that want to handle <code>ChangeEvents</code> differently
             * can override this to return another <code>ChangeListener</code>
             * implementation.
             * @return the new <code>ChangeListener</code>
             */
            // @ts-ignore
            createChangeListener(): javax.swing.event.ChangeListener
            /**
             * Notifies all listeners that have registered interest for
             * notification on this event type.  The event instance
             * is lazily created using the <code>event</code>
             * parameter.
             * @param event  the <code>ActionEvent</code> object
             * @see EventListenerList
             */
            // @ts-ignore
            fireActionPerformed(event: java.awt.event.ActionEvent): void
            /**
             * Notifies all listeners that have registered interest for
             * notification on this event type.  The event instance
             * is lazily created using the <code>event</code> parameter.
             * @param event  the <code>ItemEvent</code> object
             * @see EventListenerList
             */
            // @ts-ignore
            fireItemStateChanged(event: java.awt.event.ItemEvent): void
            // @ts-ignore
            createActionListener(): java.awt.event.ActionListener
            // @ts-ignore
            createItemListener(): java.awt.event.ItemListener
            /**
             * Enables (or disables) the button.
             * @param b  true to enable the button, otherwise false
             */
            // @ts-ignore
            public setEnabled(b: boolean): void
            /**
             * Returns the label text.
             * @return a <code>String</code> containing the label
             * @deprecated - Replaced by <code>getText</code>
             */
            // @ts-ignore
            public getLabel(): string
            /**
             * Sets the label text.
             * @param label  a <code>String</code> containing the text
             * @deprecated - Replaced by <code>setText(text)</code>
             * @beaninfo bound: true
             *   description: Replace by setText(text)
             */
            // @ts-ignore
            public setLabel(label: java.lang.String | string): void
            /**
             * Adds an <code>ItemListener</code> to the <code>checkbox</code>.
             * @param l  the <code>ItemListener</code> to be added
             */
            // @ts-ignore
            public addItemListener(l: java.awt.event.ItemListener): void
            /**
             * Removes an <code>ItemListener</code> from the button.
             * @param l the <code>ItemListener</code> to be removed
             */
            // @ts-ignore
            public removeItemListener(l: java.awt.event.ItemListener): void
            /**
             * Returns an array of all the <code>ItemListener</code>s added
             * to this AbstractButton with addItemListener().
             * @return all of the <code>ItemListener</code>s added or an empty
             *          array if no listeners have been added
             * @since 1.4
             */
            // @ts-ignore
            public getItemListeners(): java.awt.event.ItemListener[]
            /**
             * Returns an array (length 1) containing the label or
             * <code>null</code> if the button is not selected.
             * @return an array containing 1 Object: the text of the button,
             *          if the item is selected; otherwise <code>null</code>
             */
            // @ts-ignore
            public getSelectedObjects(): any[]
            // @ts-ignore
            init(text: java.lang.String | string, icon: javax.swing.Icon): void
            /**
             * This is overridden to return false if the current <code>Icon</code>'s
             * <code>Image</code> is not equal to the
             * passed in <code>Image</code> <code>img</code>.
             * @param img  the <code>Image</code> to be compared
             * @param infoflags flags used to repaint the button when the image
             *           is updated and which determine how much is to be painted
             * @param x  the x coordinate
             * @param y  the y coordinate
             * @param w  the width
             * @param h  the height
             * @see java.awt.image.ImageObserver
             * @see java.awt.Component#imageUpdate(java.awt.Image, int, int, int, int, int)
             */
            // @ts-ignore
            public imageUpdate(img: java.awt.Image, infoflags: number /*int*/, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): boolean
            /**
             * Returns a string representation of this <code>AbstractButton</code>.
             * This method
             * is intended to be used only for debugging purposes, and the
             * content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not
             * be <code>null</code>.
             * <P>
             * Overriding <code>paramString</code> to provide information about the
             * specific new aspects of the JFC components.
             * @return a string representation of this <code>AbstractButton</code>
             */
            // @ts-ignore
            paramString(): string
        }
    }
}
