declare namespace javax {
    namespace swing {
        /**
         * A display area for a short text string or an image,
         * or both.
         * A label does not react to input events.
         * As a result, it cannot get the keyboard focus.
         * A label can, however, display a keyboard alternative
         * as a convenience for a nearby component
         * that has a keyboard alternative but can't display it.
         * <p>
         * A <code>JLabel</code> object can display
         * either text, an image, or both.
         * You can specify where in the label's display area
         * the label's contents are aligned
         * by setting the vertical and horizontal alignment.
         * By default, labels are vertically centered
         * in their display area.
         * Text-only labels are leading edge aligned, by default;
         * image-only labels are horizontally centered, by default.
         * <p>
         * You can also specify the position of the text
         * relative to the image.
         * By default, text is on the trailing edge of the image,
         * with the text and image vertically aligned.
         * <p>
         * A label's leading and trailing edge are determined from the value of its
         * {@link java.awt.ComponentOrientation} property.  At present, the default
         * ComponentOrientation setting maps the leading edge to left and the trailing
         * edge to right.
         * <p>
         * Finally, you can use the <code>setIconTextGap</code> method
         * to specify how many pixels
         * should appear between the text and the image.
         * The default is 4 pixels.
         * <p>
         * See <a href="https://docs.oracle.com/javase/tutorial/uiswing/components/label.html">How to Use Labels</a>
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
         *  description: A component that displays a short string and an icon.
         * @author Hans Muller
         */
        // @ts-ignore
        class JLabel extends javax.swing.JComponent implements javax.swing.SwingConstants, javax.accessibility.Accessible {
            /**
             * Creates a <code>JLabel</code> instance with the specified
             * text, image, and horizontal alignment.
             * The label is centered vertically in its display area.
             * The text is on the trailing edge of the image.
             * @param text  The text to be displayed by the label.
             * @param icon  The image to be displayed by the label.
             * @param horizontalAlignment  One of the following constants
             *            defined in <code>SwingConstants</code>:
             *            <code>LEFT</code>,
             *            <code>CENTER</code>,
             *            <code>RIGHT</code>,
             *            <code>LEADING</code> or
             *            <code>TRAILING</code>.
             */
            // @ts-ignore
            constructor(text: java.lang.String | string, icon: javax.swing.Icon, horizontalAlignment: number /*int*/)
            /**
             * Creates a <code>JLabel</code> instance with the specified
             * text and horizontal alignment.
             * The label is centered vertically in its display area.
             * @param text  The text to be displayed by the label.
             * @param horizontalAlignment  One of the following constants
             *            defined in <code>SwingConstants</code>:
             *            <code>LEFT</code>,
             *            <code>CENTER</code>,
             *            <code>RIGHT</code>,
             *            <code>LEADING</code> or
             *            <code>TRAILING</code>.
             */
            // @ts-ignore
            constructor(text: java.lang.String | string, horizontalAlignment: number /*int*/)
            /**
             * Creates a <code>JLabel</code> instance with the specified text.
             * The label is aligned against the leading edge of its display area,
             * and centered vertically.
             * @param text  The text to be displayed by the label.
             */
            // @ts-ignore
            constructor(text: java.lang.String | string)
            /**
             * Creates a <code>JLabel</code> instance with the specified
             * image and horizontal alignment.
             * The label is centered vertically in its display area.
             * @param image  The image to be displayed by the label.
             * @param horizontalAlignment  One of the following constants
             *            defined in <code>SwingConstants</code>:
             *            <code>LEFT</code>,
             *            <code>CENTER</code>,
             *            <code>RIGHT</code>,
             *            <code>LEADING</code> or
             *            <code>TRAILING</code>.
             */
            // @ts-ignore
            constructor(image: javax.swing.Icon, horizontalAlignment: number /*int*/)
            /**
             * Creates a <code>JLabel</code> instance with the specified image.
             * The label is centered vertically and horizontally
             * in its display area.
             * @param image  The image to be displayed by the label.
             */
            // @ts-ignore
            constructor(image: javax.swing.Icon)
            /**
             * Creates a <code>JLabel</code> instance with
             * no image and with an empty string for the title.
             * The label is centered vertically
             * in its display area.
             * The label's contents, once set, will be displayed on the leading edge
             * of the label's display area.
             */
            // @ts-ignore
            constructor()
            // @ts-ignore
            labelFor: java.awt.Component
            /**
             * Returns the L&amp;F object that renders this component.
             * @return LabelUI object
             */
            // @ts-ignore
            public getUI(): javax.swing.plaf.LabelUI
            /**
             * Sets the L&amp;F object that renders this component.
             * @param ui  the LabelUI L&amp;F object
             * @see UIDefaults#getUI
             * @beaninfo bound: true
             *        hidden: true
             *     attribute: visualUpdate true
             *   description: The UI object that implements the Component's LookAndFeel.
             */
            // @ts-ignore
            public setUI(ui: javax.swing.plaf.LabelUI): void
            /**
             * Resets the UI property to a value from the current look and feel.
             * @see JComponent#updateUI
             */
            // @ts-ignore
            public updateUI(): void
            /**
             * Returns a string that specifies the name of the l&amp;f class
             * that renders this component.
             * @return String "LabelUI"
             * @see JComponent#getUIClassID
             * @see UIDefaults#getUI
             */
            // @ts-ignore
            public getUIClassID(): string
            /**
             * Returns the text string that the label displays.
             * @return a String
             * @see #setText
             */
            // @ts-ignore
            public getText(): string
            /**
             * Defines the single line of text this component will display.  If
             * the value of text is null or empty string, nothing is displayed.
             * <p>
             * The default value of this property is null.
             * <p>
             * This is a JavaBeans bound property.
             * @see #setVerticalTextPosition
             * @see #setHorizontalTextPosition
             * @see #setIcon
             * @beaninfo preferred: true
             *         bound: true
             *     attribute: visualUpdate true
             *   description: Defines the single line of text this component will display.
             */
            // @ts-ignore
            public setText(text: java.lang.String | string): void
            /**
             * Returns the graphic image (glyph, icon) that the label displays.
             * @return an Icon
             * @see #setIcon
             */
            // @ts-ignore
            public getIcon(): javax.swing.Icon
            /**
             * Defines the icon this component will display.  If
             * the value of icon is null, nothing is displayed.
             * <p>
             * The default value of this property is null.
             * <p>
             * This is a JavaBeans bound property.
             * @see #setVerticalTextPosition
             * @see #setHorizontalTextPosition
             * @see #getIcon
             * @beaninfo preferred: true
             *         bound: true
             *     attribute: visualUpdate true
             *   description: The icon this component will display.
             */
            // @ts-ignore
            public setIcon(icon: javax.swing.Icon): void
            /**
             * Returns the icon used by the label when it's disabled.
             * If no disabled icon has been set this will forward the call to
             * the look and feel to construct an appropriate disabled Icon.
             * <p>
             * Some look and feels might not render the disabled Icon, in which
             * case they will ignore this.
             * @return the <code>disabledIcon</code> property
             * @see #setDisabledIcon
             * @see javax.swing.LookAndFeel#getDisabledIcon
             * @see ImageIcon
             */
            // @ts-ignore
            public getDisabledIcon(): javax.swing.Icon
            /**
             * Set the icon to be displayed if this JLabel is "disabled"
             * (JLabel.setEnabled(false)).
             * <p>
             * The default value of this property is null.
             * @param disabledIcon the Icon to display when the component is disabled
             * @see #getDisabledIcon
             * @see #setEnabled
             * @beaninfo bound: true
             *     attribute: visualUpdate true
             *   description: The icon to display if the label is disabled.
             */
            // @ts-ignore
            public setDisabledIcon(disabledIcon: javax.swing.Icon): void
            /**
             * Specify a keycode that indicates a mnemonic key.
             * This property is used when the label is part of a larger component.
             * If the labelFor property of the label is not null, the label will
             * call the requestFocus method of the component specified by the
             * labelFor property when the mnemonic is activated.
             * @see #getLabelFor
             * @see #setLabelFor
             * @beaninfo bound: true
             *     attribute: visualUpdate true
             *   description: The mnemonic keycode.
             */
            // @ts-ignore
            public setDisplayedMnemonic(key: number /*int*/): void
            /**
             * Specifies the displayedMnemonic as a char value.
             * @param aChar  a char specifying the mnemonic to display
             * @see #setDisplayedMnemonic(int)
             */
            // @ts-ignore
            public setDisplayedMnemonic(aChar: string): void
            /**
             * Return the keycode that indicates a mnemonic key.
             * This property is used when the label is part of a larger component.
             * If the labelFor property of the label is not null, the label will
             * call the requestFocus method of the component specified by the
             * labelFor property when the mnemonic is activated.
             * @return int value for the mnemonic key
             * @see #getLabelFor
             * @see #setLabelFor
             */
            // @ts-ignore
            public getDisplayedMnemonic(): number /*int*/
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
             * <code>setDisplayedMnemonic(KeyEvent.VK_A)</code>.
             * @since 1.4
             * @param index Index into the String to underline
             * @exception IllegalArgumentException will be thrown if <code>index</code>
             *             is &gt;= length of the text, or &lt; -1
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
             * Verify that key is a legal value for the horizontalAlignment properties.
             * @param key the property value to check
             * @param message the IllegalArgumentException detail message
             * @exception IllegalArgumentException if key isn't LEFT, CENTER, RIGHT,
             *  LEADING or TRAILING.
             * @see #setHorizontalTextPosition
             * @see #setHorizontalAlignment
             */
            // @ts-ignore
            checkHorizontalKey(key: number /*int*/, message: java.lang.String | string): number /*int*/
            /**
             * Verify that key is a legal value for the
             * verticalAlignment or verticalTextPosition properties.
             * @param key the property value to check
             * @param message the IllegalArgumentException detail message
             * @exception IllegalArgumentException if key isn't TOP, CENTER, or BOTTOM.
             * @see #setVerticalAlignment
             * @see #setVerticalTextPosition
             */
            // @ts-ignore
            checkVerticalKey(key: number /*int*/, message: java.lang.String | string): number /*int*/
            /**
             * Returns the amount of space between the text and the icon
             * displayed in this label.
             * @return an int equal to the number of pixels between the text
             *          and the icon.
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
             * @see #getIconTextGap
             * @beaninfo bound: true
             *     attribute: visualUpdate true
             *   description: If both the icon and text properties are set, this
             *                property defines the space between them.
             */
            // @ts-ignore
            public setIconTextGap(iconTextGap: number /*int*/): void
            /**
             * Returns the alignment of the label's contents along the Y axis.
             * @return The value of the verticalAlignment property, one of the
             *            following constants defined in <code>SwingConstants</code>:
             *            <code>TOP</code>,
             *            <code>CENTER</code>, or
             *            <code>BOTTOM</code>.
             * @see SwingConstants
             * @see #setVerticalAlignment
             */
            // @ts-ignore
            public getVerticalAlignment(): number /*int*/
            /**
             * Sets the alignment of the label's contents along the Y axis.
             * <p>
             * The default value of this property is CENTER.
             * @param alignment One of the following constants
             *            defined in <code>SwingConstants</code>:
             *            <code>TOP</code>,
             *            <code>CENTER</code> (the default), or
             *            <code>BOTTOM</code>.
             * @see SwingConstants
             * @see #getVerticalAlignment
             * @beaninfo bound: true
             *          enum: TOP    SwingConstants.TOP
             *                CENTER SwingConstants.CENTER
             *                BOTTOM SwingConstants.BOTTOM
             *     attribute: visualUpdate true
             *   description: The alignment of the label's contents along the Y axis.
             */
            // @ts-ignore
            public setVerticalAlignment(alignment: number /*int*/): void
            /**
             * Returns the alignment of the label's contents along the X axis.
             * @return The value of the horizontalAlignment property, one of the
             *            following constants defined in <code>SwingConstants</code>:
             *            <code>LEFT</code>,
             *            <code>CENTER</code>,
             *            <code>RIGHT</code>,
             *            <code>LEADING</code> or
             *            <code>TRAILING</code>.
             * @see #setHorizontalAlignment
             * @see SwingConstants
             */
            // @ts-ignore
            public getHorizontalAlignment(): number /*int*/
            /**
             * Sets the alignment of the label's contents along the X axis.
             * <p>
             * This is a JavaBeans bound property.
             * @param alignment  One of the following constants
             *            defined in <code>SwingConstants</code>:
             *            <code>LEFT</code>,
             *            <code>CENTER</code> (the default for image-only labels),
             *            <code>RIGHT</code>,
             *            <code>LEADING</code> (the default for text-only labels) or
             *            <code>TRAILING</code>.
             * @see SwingConstants
             * @see #getHorizontalAlignment
             * @beaninfo bound: true
             *          enum: LEFT     SwingConstants.LEFT
             *                CENTER   SwingConstants.CENTER
             *                RIGHT    SwingConstants.RIGHT
             *                LEADING  SwingConstants.LEADING
             *                TRAILING SwingConstants.TRAILING
             *     attribute: visualUpdate true
             *   description: The alignment of the label's content along the X axis.
             */
            // @ts-ignore
            public setHorizontalAlignment(alignment: number /*int*/): void
            /**
             * Returns the vertical position of the label's text,
             * relative to its image.
             * @return One of the following constants
             *            defined in <code>SwingConstants</code>:
             *            <code>TOP</code>,
             *            <code>CENTER</code>, or
             *            <code>BOTTOM</code>.
             * @see #setVerticalTextPosition
             * @see SwingConstants
             */
            // @ts-ignore
            public getVerticalTextPosition(): number /*int*/
            /**
             * Sets the vertical position of the label's text,
             * relative to its image.
             * <p>
             * The default value of this property is CENTER.
             * <p>
             * This is a JavaBeans bound property.
             * @param textPosition  One of the following constants
             *            defined in <code>SwingConstants</code>:
             *            <code>TOP</code>,
             *            <code>CENTER</code> (the default), or
             *            <code>BOTTOM</code>.
             * @see SwingConstants
             * @see #getVerticalTextPosition
             * @beaninfo bound: true
             *          enum: TOP    SwingConstants.TOP
             *                CENTER SwingConstants.CENTER
             *                BOTTOM SwingConstants.BOTTOM
             *        expert: true
             *     attribute: visualUpdate true
             *   description: The vertical position of the text relative to it's image.
             */
            // @ts-ignore
            public setVerticalTextPosition(textPosition: number /*int*/): void
            /**
             * Returns the horizontal position of the label's text,
             * relative to its image.
             * @return One of the following constants
             *            defined in <code>SwingConstants</code>:
             *            <code>LEFT</code>,
             *            <code>CENTER</code>,
             *            <code>RIGHT</code>,
             *            <code>LEADING</code> or
             *            <code>TRAILING</code>.
             * @see SwingConstants
             */
            // @ts-ignore
            public getHorizontalTextPosition(): number /*int*/
            /**
             * Sets the horizontal position of the label's text,
             * relative to its image.
             * @param textPosition  One of the following constants
             *            defined in <code>SwingConstants</code>:
             *            <code>LEFT</code>,
             *            <code>CENTER</code>,
             *            <code>RIGHT</code>,
             *            <code>LEADING</code>, or
             *            <code>TRAILING</code> (the default).
             * @exception IllegalArgumentException
             * @see SwingConstants
             * @beaninfo expert: true
             *         bound: true
             *          enum: LEFT     SwingConstants.LEFT
             *                CENTER   SwingConstants.CENTER
             *                RIGHT    SwingConstants.RIGHT
             *                LEADING  SwingConstants.LEADING
             *                TRAILING SwingConstants.TRAILING
             *     attribute: visualUpdate true
             *   description: The horizontal position of the label's text,
             *                relative to its image.
             */
            // @ts-ignore
            public setHorizontalTextPosition(textPosition: number /*int*/): void
            /**
             * This is overridden to return false if the current Icon's Image is
             * not equal to the passed in Image <code>img</code>.
             * @see java.awt.image.ImageObserver
             * @see java.awt.Component#imageUpdate(java.awt.Image, int, int, int, int, int)
             */
            // @ts-ignore
            public imageUpdate(img: java.awt.Image, infoflags: number /*int*/, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): boolean
            /**
             * Returns a string representation of this JLabel. This method
             * is intended to be used only for debugging purposes, and the
             * content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not
             * be <code>null</code>.
             * @return a string representation of this JLabel.
             */
            // @ts-ignore
            paramString(): string
            /**
             * Get the component this is labelling.
             * @return the Component this is labelling.  Can be null if this
             *  does not label a Component.  If the displayedMnemonic
             *  property is set and the labelFor property is also set, the label
             *  will call the requestFocus method of the component specified by the
             *  labelFor property when the mnemonic is activated.
             * @see #getDisplayedMnemonic
             * @see #setDisplayedMnemonic
             */
            // @ts-ignore
            public getLabelFor(): java.awt.Component
            /**
             * Set the component this is labelling.  Can be null if this does not
             * label a Component.  If the displayedMnemonic property is set
             * and the labelFor property is also set, the label will
             * call the requestFocus method of the component specified by the
             * labelFor property when the mnemonic is activated.
             * @param c  the Component this label is for, or null if the label is
             *            not the label for a component
             * @see #getDisplayedMnemonic
             * @see #setDisplayedMnemonic
             * @beaninfo bound: true
             *   description: The component this is labelling.
             */
            // @ts-ignore
            public setLabelFor(c: java.awt.Component): void
            /**
             * Get the AccessibleContext of this object
             * @return the AccessibleContext of this object
             * @beaninfo expert: true
             *   description: The AccessibleContext associated with this Label.
             */
            // @ts-ignore
            public getAccessibleContext(): javax.accessibility.AccessibleContext
        }
    }
}
