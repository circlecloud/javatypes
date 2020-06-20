declare namespace javax {
    namespace swing {
        namespace text {
            /**
             * <p>
             * A collection of <em>well known</em> or common attribute keys
             * and methods to apply to an AttributeSet or MutableAttributeSet
             * to get/set the properties in a typesafe manner.
             * <p>
             * The paragraph attributes form the definition of a paragraph to be rendered.
             * All sizes are specified in points (such as found in postscript), a
             * device independent measure.
             * </p>
             * <p style="text-align:center"><img src="doc-files/paragraph.gif"
             * alt="Diagram shows SpaceAbove, FirstLineIndent, LeftIndent, RightIndent,
             * and SpaceBelow a paragraph."></p>
             * <p>
             * @author Timothy Prinzing
             */
            // @ts-ignore
            class StyleConstants extends java.lang.Object {
                /**
                 * Name of elements used to represent components.
                 */
                // @ts-ignore
                readonly ComponentElementName: string
                /**
                 * Name of elements used to represent icons.
                 */
                // @ts-ignore
                readonly IconElementName: string
                /**
                 * Attribute name used to name the collection of
                 * attributes.
                 */
                // @ts-ignore
                readonly NameAttribute: any
                /**
                 * Attribute name used to identify the resolving parent
                 * set of attributes, if one is defined.
                 */
                // @ts-ignore
                readonly ResolveAttribute: any
                /**
                 * Attribute used to identify the model for embedded
                 * objects that have a model view separation.
                 */
                // @ts-ignore
                readonly ModelAttribute: any
                /**
                 * Bidirectional level of a character as assigned by the Unicode bidi
                 * algorithm.
                 */
                // @ts-ignore
                readonly BidiLevel: any
                /**
                 * Name of the font family.
                 */
                // @ts-ignore
                readonly FontFamily: any
                /**
                 * Name of the font family.
                 * @since 1.5
                 */
                // @ts-ignore
                readonly Family: any
                /**
                 * Name of the font size.
                 */
                // @ts-ignore
                readonly FontSize: any
                /**
                 * Name of the font size.
                 * @since 1.5
                 */
                // @ts-ignore
                readonly Size: any
                /**
                 * Name of the bold attribute.
                 */
                // @ts-ignore
                readonly Bold: any
                /**
                 * Name of the italic attribute.
                 */
                // @ts-ignore
                readonly Italic: any
                /**
                 * Name of the underline attribute.
                 */
                // @ts-ignore
                readonly Underline: any
                /**
                 * Name of the Strikethrough attribute.
                 */
                // @ts-ignore
                readonly StrikeThrough: any
                /**
                 * Name of the Superscript attribute.
                 */
                // @ts-ignore
                readonly Superscript: any
                /**
                 * Name of the Subscript attribute.
                 */
                // @ts-ignore
                readonly Subscript: any
                /**
                 * Name of the foreground color attribute.
                 */
                // @ts-ignore
                readonly Foreground: any
                /**
                 * Name of the background color attribute.
                 */
                // @ts-ignore
                readonly Background: any
                /**
                 * Name of the component attribute.
                 */
                // @ts-ignore
                readonly ComponentAttribute: any
                /**
                 * Name of the icon attribute.
                 */
                // @ts-ignore
                readonly IconAttribute: any
                /**
                 * Name of the input method composed text attribute. The value of
                 * this attribute is an instance of AttributedString which represents
                 * the composed text.
                 */
                // @ts-ignore
                readonly ComposedTextAttribute: any
                /**
                 * The amount of space to indent the first
                 * line of the paragraph.  This value may be negative
                 * to offset in the reverse direction.  The type
                 * is Float and specifies the size of the space
                 * in points.
                 */
                // @ts-ignore
                readonly FirstLineIndent: any
                /**
                 * The amount to indent the left side
                 * of the paragraph.
                 * Type is float and specifies the size in points.
                 */
                // @ts-ignore
                readonly LeftIndent: any
                /**
                 * The amount to indent the right side
                 * of the paragraph.
                 * Type is float and specifies the size in points.
                 */
                // @ts-ignore
                readonly RightIndent: any
                /**
                 * The amount of space between lines
                 * of the paragraph.
                 * Type is float and specifies the size as a factor of the line height
                 */
                // @ts-ignore
                readonly LineSpacing: any
                /**
                 * The amount of space above the paragraph.
                 * Type is float and specifies the size in points.
                 */
                // @ts-ignore
                readonly SpaceAbove: any
                /**
                 * The amount of space below the paragraph.
                 * Type is float and specifies the size in points.
                 */
                // @ts-ignore
                readonly SpaceBelow: any
                /**
                 * Alignment for the paragraph.  The type is
                 * Integer.  Valid values are:
                 * <ul>
                 * <li>ALIGN_LEFT
                 * <li>ALIGN_RIGHT
                 * <li>ALIGN_CENTER
                 * <li>ALIGN_JUSTIFED
                 * </ul>
                 */
                // @ts-ignore
                readonly Alignment: any
                /**
                 * TabSet for the paragraph, type is a TabSet containing
                 * TabStops.
                 */
                // @ts-ignore
                readonly TabSet: any
                /**
                 * Orientation for a paragraph.
                 */
                // @ts-ignore
                readonly Orientation: any
                /**
                 * A possible value for paragraph alignment.  This
                 * specifies that the text is aligned to the left
                 * indent and extra whitespace should be placed on
                 * the right.
                 */
                // @ts-ignore
                readonly ALIGN_LEFT: number /*int*/
                /**
                 * A possible value for paragraph alignment.  This
                 * specifies that the text is aligned to the center
                 * and extra whitespace should be placed equally on
                 * the left and right.
                 */
                // @ts-ignore
                readonly ALIGN_CENTER: number /*int*/
                /**
                 * A possible value for paragraph alignment.  This
                 * specifies that the text is aligned to the right
                 * indent and extra whitespace should be placed on
                 * the left.
                 */
                // @ts-ignore
                readonly ALIGN_RIGHT: number /*int*/
                /**
                 * A possible value for paragraph alignment.  This
                 * specifies that extra whitespace should be spread
                 * out through the rows of the paragraph with the
                 * text lined up with the left and right indent
                 * except on the last line which should be aligned
                 * to the left.
                 */
                // @ts-ignore
                readonly ALIGN_JUSTIFIED: number /*int*/
                /**
                 * Returns the string representation.
                 * @return the string
                 */
                // @ts-ignore
                toString(): java.lang.String
                /**
                 * Gets the BidiLevel setting.
                 * @param a the attribute set
                 * @return the value
                 */
                // @ts-ignore
                getBidiLevel(a: javax.swing.text.AttributeSet): int
                /**
                 * Sets the BidiLevel.
                 * @param a the attribute set
                 * @param o the bidi level value
                 */
                // @ts-ignore
                setBidiLevel(a: javax.swing.text.MutableAttributeSet, o: number /*int*/): void
                /**
                 * Gets the component setting from the attribute list.
                 * @param a the attribute set
                 * @return the component, null if none
                 */
                // @ts-ignore
                getComponent(a: javax.swing.text.AttributeSet): java.awt.Component
                /**
                 * Sets the component attribute.
                 * @param a the attribute set
                 * @param c the component
                 */
                // @ts-ignore
                setComponent(a: javax.swing.text.MutableAttributeSet, c: java.awt.Component): void
                /**
                 * Gets the icon setting from the attribute list.
                 * @param a the attribute set
                 * @return the icon, null if none
                 */
                // @ts-ignore
                getIcon(a: javax.swing.text.AttributeSet): javax.swing.Icon
                /**
                 * Sets the icon attribute.
                 * @param a the attribute set
                 * @param c the icon
                 */
                // @ts-ignore
                setIcon(a: javax.swing.text.MutableAttributeSet, c: javax.swing.Icon): void
                /**
                 * Gets the font family setting from the attribute list.
                 * @param a the attribute set
                 * @return the font family, "Monospaced" as the default
                 */
                // @ts-ignore
                getFontFamily(a: javax.swing.text.AttributeSet): java.lang.String
                /**
                 * Sets the font attribute.
                 * @param a the attribute set
                 * @param fam the font
                 */
                // @ts-ignore
                setFontFamily(a: javax.swing.text.MutableAttributeSet, fam: string): void
                /**
                 * Gets the font size setting from the attribute list.
                 * @param a the attribute set
                 * @return the font size, 12 as the default
                 */
                // @ts-ignore
                getFontSize(a: javax.swing.text.AttributeSet): int
                /**
                 * Sets the font size attribute.
                 * @param a the attribute set
                 * @param s the font size
                 */
                // @ts-ignore
                setFontSize(a: javax.swing.text.MutableAttributeSet, s: number /*int*/): void
                /**
                 * Checks whether the bold attribute is set.
                 * @param a the attribute set
                 * @return true if set else false
                 */
                // @ts-ignore
                isBold(a: javax.swing.text.AttributeSet): boolean
                /**
                 * Sets the bold attribute.
                 * @param a the attribute set
                 * @param b specifies true/false for setting the attribute
                 */
                // @ts-ignore
                setBold(a: javax.swing.text.MutableAttributeSet, b: boolean): void
                /**
                 * Checks whether the italic attribute is set.
                 * @param a the attribute set
                 * @return true if set else false
                 */
                // @ts-ignore
                isItalic(a: javax.swing.text.AttributeSet): boolean
                /**
                 * Sets the italic attribute.
                 * @param a the attribute set
                 * @param b specifies true/false for setting the attribute
                 */
                // @ts-ignore
                setItalic(a: javax.swing.text.MutableAttributeSet, b: boolean): void
                /**
                 * Checks whether the underline attribute is set.
                 * @param a the attribute set
                 * @return true if set else false
                 */
                // @ts-ignore
                isUnderline(a: javax.swing.text.AttributeSet): boolean
                /**
                 * Checks whether the strikethrough attribute is set.
                 * @param a the attribute set
                 * @return true if set else false
                 */
                // @ts-ignore
                isStrikeThrough(a: javax.swing.text.AttributeSet): boolean
                /**
                 * Checks whether the superscript attribute is set.
                 * @param a the attribute set
                 * @return true if set else false
                 */
                // @ts-ignore
                isSuperscript(a: javax.swing.text.AttributeSet): boolean
                /**
                 * Checks whether the subscript attribute is set.
                 * @param a the attribute set
                 * @return true if set else false
                 */
                // @ts-ignore
                isSubscript(a: javax.swing.text.AttributeSet): boolean
                /**
                 * Sets the underline attribute.
                 * @param a the attribute set
                 * @param b specifies true/false for setting the attribute
                 */
                // @ts-ignore
                setUnderline(a: javax.swing.text.MutableAttributeSet, b: boolean): void
                /**
                 * Sets the strikethrough attribute.
                 * @param a the attribute set
                 * @param b specifies true/false for setting the attribute
                 */
                // @ts-ignore
                setStrikeThrough(a: javax.swing.text.MutableAttributeSet, b: boolean): void
                /**
                 * Sets the superscript attribute.
                 * @param a the attribute set
                 * @param b specifies true/false for setting the attribute
                 */
                // @ts-ignore
                setSuperscript(a: javax.swing.text.MutableAttributeSet, b: boolean): void
                /**
                 * Sets the subscript attribute.
                 * @param a the attribute set
                 * @param b specifies true/false for setting the attribute
                 */
                // @ts-ignore
                setSubscript(a: javax.swing.text.MutableAttributeSet, b: boolean): void
                /**
                 * Gets the foreground color setting from the attribute list.
                 * @param a the attribute set
                 * @return the color, Color.black as the default
                 */
                // @ts-ignore
                getForeground(a: javax.swing.text.AttributeSet): java.awt.Color
                /**
                 * Sets the foreground color.
                 * @param a the attribute set
                 * @param fg the color
                 */
                // @ts-ignore
                setForeground(a: javax.swing.text.MutableAttributeSet, fg: java.awt.Color): void
                /**
                 * Gets the background color setting from the attribute list.
                 * @param a the attribute set
                 * @return the color, Color.black as the default
                 */
                // @ts-ignore
                getBackground(a: javax.swing.text.AttributeSet): java.awt.Color
                /**
                 * Sets the background color.
                 * @param a the attribute set
                 * @param fg the color
                 */
                // @ts-ignore
                setBackground(a: javax.swing.text.MutableAttributeSet, fg: java.awt.Color): void
                /**
                 * Gets the first line indent setting.
                 * @param a the attribute set
                 * @return the value, 0 if not set
                 */
                // @ts-ignore
                getFirstLineIndent(a: javax.swing.text.AttributeSet): float
                /**
                 * Sets the first line indent.
                 * @param a the attribute set
                 * @param i the value
                 */
                // @ts-ignore
                setFirstLineIndent(a: javax.swing.text.MutableAttributeSet, i: number /*float*/): void
                /**
                 * Gets the right indent setting.
                 * @param a the attribute set
                 * @return the value, 0 if not set
                 */
                // @ts-ignore
                getRightIndent(a: javax.swing.text.AttributeSet): float
                /**
                 * Sets right indent.
                 * @param a the attribute set
                 * @param i the value
                 */
                // @ts-ignore
                setRightIndent(a: javax.swing.text.MutableAttributeSet, i: number /*float*/): void
                /**
                 * Gets the left indent setting.
                 * @param a the attribute set
                 * @return the value, 0 if not set
                 */
                // @ts-ignore
                getLeftIndent(a: javax.swing.text.AttributeSet): float
                /**
                 * Sets left indent.
                 * @param a the attribute set
                 * @param i the value
                 */
                // @ts-ignore
                setLeftIndent(a: javax.swing.text.MutableAttributeSet, i: number /*float*/): void
                /**
                 * Gets the line spacing setting.
                 * @param a the attribute set
                 * @return the value, 0 if not set
                 */
                // @ts-ignore
                getLineSpacing(a: javax.swing.text.AttributeSet): float
                /**
                 * Sets line spacing.
                 * @param a the attribute set
                 * @param i the value
                 */
                // @ts-ignore
                setLineSpacing(a: javax.swing.text.MutableAttributeSet, i: number /*float*/): void
                /**
                 * Gets the space above setting.
                 * @param a the attribute set
                 * @return the value, 0 if not set
                 */
                // @ts-ignore
                getSpaceAbove(a: javax.swing.text.AttributeSet): float
                /**
                 * Sets space above.
                 * @param a the attribute set
                 * @param i the value
                 */
                // @ts-ignore
                setSpaceAbove(a: javax.swing.text.MutableAttributeSet, i: number /*float*/): void
                /**
                 * Gets the space below setting.
                 * @param a the attribute set
                 * @return the value, 0 if not set
                 */
                // @ts-ignore
                getSpaceBelow(a: javax.swing.text.AttributeSet): float
                /**
                 * Sets space below.
                 * @param a the attribute set
                 * @param i the value
                 */
                // @ts-ignore
                setSpaceBelow(a: javax.swing.text.MutableAttributeSet, i: number /*float*/): void
                /**
                 * Gets the alignment setting.
                 * @param a the attribute set
                 * @return the value <code>StyleConstants.ALIGN_LEFT</code> if not set
                 */
                // @ts-ignore
                getAlignment(a: javax.swing.text.AttributeSet): int
                /**
                 * Sets alignment.
                 * @param a the attribute set
                 * @param align the alignment value
                 */
                // @ts-ignore
                setAlignment(a: javax.swing.text.MutableAttributeSet, align: number /*int*/): void
                /**
                 * Gets the TabSet.
                 * @param a the attribute set
                 * @return the <code>TabSet</code>
                 */
                // @ts-ignore
                getTabSet(a: javax.swing.text.AttributeSet): javax.swing.text.TabSet
                /**
                 * Sets the TabSet.
                 * @param a the attribute set.
                 * @param tabs the TabSet
                 */
                // @ts-ignore
                setTabSet(a: javax.swing.text.MutableAttributeSet, tabs: javax.swing.text.TabSet): void
            }
        }
    }
}
