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
                public static readonly ComponentElementName: java.lang.String | string
                /**
                 * Name of elements used to represent icons.
                 */
                // @ts-ignore
                public static readonly IconElementName: java.lang.String | string
                /**
                 * Attribute name used to name the collection of
                 * attributes.
                 */
                // @ts-ignore
                public static readonly NameAttribute: java.lang.Object | any
                /**
                 * Attribute name used to identify the resolving parent
                 * set of attributes, if one is defined.
                 */
                // @ts-ignore
                public static readonly ResolveAttribute: java.lang.Object | any
                /**
                 * Attribute used to identify the model for embedded
                 * objects that have a model view separation.
                 */
                // @ts-ignore
                public static readonly ModelAttribute: java.lang.Object | any
                /**
                 * Bidirectional level of a character as assigned by the Unicode bidi
                 * algorithm.
                 */
                // @ts-ignore
                public static readonly BidiLevel: java.lang.Object | any
                /**
                 * Name of the font family.
                 */
                // @ts-ignore
                public static readonly FontFamily: java.lang.Object | any
                /**
                 * Name of the font family.
                 * @since 1.5
                 */
                // @ts-ignore
                public static readonly Family: java.lang.Object | any
                /**
                 * Name of the font size.
                 */
                // @ts-ignore
                public static readonly FontSize: java.lang.Object | any
                /**
                 * Name of the font size.
                 * @since 1.5
                 */
                // @ts-ignore
                public static readonly Size: java.lang.Object | any
                /**
                 * Name of the bold attribute.
                 */
                // @ts-ignore
                public static readonly Bold: java.lang.Object | any
                /**
                 * Name of the italic attribute.
                 */
                // @ts-ignore
                public static readonly Italic: java.lang.Object | any
                /**
                 * Name of the underline attribute.
                 */
                // @ts-ignore
                public static readonly Underline: java.lang.Object | any
                /**
                 * Name of the Strikethrough attribute.
                 */
                // @ts-ignore
                public static readonly StrikeThrough: java.lang.Object | any
                /**
                 * Name of the Superscript attribute.
                 */
                // @ts-ignore
                public static readonly Superscript: java.lang.Object | any
                /**
                 * Name of the Subscript attribute.
                 */
                // @ts-ignore
                public static readonly Subscript: java.lang.Object | any
                /**
                 * Name of the foreground color attribute.
                 */
                // @ts-ignore
                public static readonly Foreground: java.lang.Object | any
                /**
                 * Name of the background color attribute.
                 */
                // @ts-ignore
                public static readonly Background: java.lang.Object | any
                /**
                 * Name of the component attribute.
                 */
                // @ts-ignore
                public static readonly ComponentAttribute: java.lang.Object | any
                /**
                 * Name of the icon attribute.
                 */
                // @ts-ignore
                public static readonly IconAttribute: java.lang.Object | any
                /**
                 * Name of the input method composed text attribute. The value of
                 * this attribute is an instance of AttributedString which represents
                 * the composed text.
                 */
                // @ts-ignore
                public static readonly ComposedTextAttribute: java.lang.Object | any
                /**
                 * The amount of space to indent the first
                 * line of the paragraph.  This value may be negative
                 * to offset in the reverse direction.  The type
                 * is Float and specifies the size of the space
                 * in points.
                 */
                // @ts-ignore
                public static readonly FirstLineIndent: java.lang.Object | any
                /**
                 * The amount to indent the left side
                 * of the paragraph.
                 * Type is float and specifies the size in points.
                 */
                // @ts-ignore
                public static readonly LeftIndent: java.lang.Object | any
                /**
                 * The amount to indent the right side
                 * of the paragraph.
                 * Type is float and specifies the size in points.
                 */
                // @ts-ignore
                public static readonly RightIndent: java.lang.Object | any
                /**
                 * The amount of space between lines
                 * of the paragraph.
                 * Type is float and specifies the size as a factor of the line height
                 */
                // @ts-ignore
                public static readonly LineSpacing: java.lang.Object | any
                /**
                 * The amount of space above the paragraph.
                 * Type is float and specifies the size in points.
                 */
                // @ts-ignore
                public static readonly SpaceAbove: java.lang.Object | any
                /**
                 * The amount of space below the paragraph.
                 * Type is float and specifies the size in points.
                 */
                // @ts-ignore
                public static readonly SpaceBelow: java.lang.Object | any
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
                public static readonly Alignment: java.lang.Object | any
                /**
                 * TabSet for the paragraph, type is a TabSet containing
                 * TabStops.
                 */
                // @ts-ignore
                public static readonly TabSet: java.lang.Object | any
                /**
                 * Orientation for a paragraph.
                 */
                // @ts-ignore
                public static readonly Orientation: java.lang.Object | any
                /**
                 * A possible value for paragraph alignment.  This
                 * specifies that the text is aligned to the left
                 * indent and extra whitespace should be placed on
                 * the right.
                 */
                // @ts-ignore
                public static readonly ALIGN_LEFT: number /*int*/
                /**
                 * A possible value for paragraph alignment.  This
                 * specifies that the text is aligned to the center
                 * and extra whitespace should be placed equally on
                 * the left and right.
                 */
                // @ts-ignore
                public static readonly ALIGN_CENTER: number /*int*/
                /**
                 * A possible value for paragraph alignment.  This
                 * specifies that the text is aligned to the right
                 * indent and extra whitespace should be placed on
                 * the left.
                 */
                // @ts-ignore
                public static readonly ALIGN_RIGHT: number /*int*/
                /**
                 * A possible value for paragraph alignment.  This
                 * specifies that extra whitespace should be spread
                 * out through the rows of the paragraph with the
                 * text lined up with the left and right indent
                 * except on the last line which should be aligned
                 * to the left.
                 */
                // @ts-ignore
                public static readonly ALIGN_JUSTIFIED: number /*int*/
                /**
                 * Returns the string representation.
                 * @return the string
                 */
                // @ts-ignore
                public toString(): string
                /**
                 * Gets the BidiLevel setting.
                 * @param a the attribute set
                 * @return the value
                 */
                // @ts-ignore
                public static getBidiLevel(a: javax.swing.text.AttributeSet): number /*int*/
                /**
                 * Sets the BidiLevel.
                 * @param a the attribute set
                 * @param o the bidi level value
                 */
                // @ts-ignore
                public static setBidiLevel(a: javax.swing.text.MutableAttributeSet, o: number /*int*/): void
                /**
                 * Gets the component setting from the attribute list.
                 * @param a the attribute set
                 * @return the component, null if none
                 */
                // @ts-ignore
                public static getComponent(a: javax.swing.text.AttributeSet): java.awt.Component
                /**
                 * Sets the component attribute.
                 * @param a the attribute set
                 * @param c the component
                 */
                // @ts-ignore
                public static setComponent(a: javax.swing.text.MutableAttributeSet, c: java.awt.Component): void
                /**
                 * Gets the icon setting from the attribute list.
                 * @param a the attribute set
                 * @return the icon, null if none
                 */
                // @ts-ignore
                public static getIcon(a: javax.swing.text.AttributeSet): javax.swing.Icon
                /**
                 * Sets the icon attribute.
                 * @param a the attribute set
                 * @param c the icon
                 */
                // @ts-ignore
                public static setIcon(a: javax.swing.text.MutableAttributeSet, c: javax.swing.Icon): void
                /**
                 * Gets the font family setting from the attribute list.
                 * @param a the attribute set
                 * @return the font family, "Monospaced" as the default
                 */
                // @ts-ignore
                public static getFontFamily(a: javax.swing.text.AttributeSet): string
                /**
                 * Sets the font attribute.
                 * @param a the attribute set
                 * @param fam the font
                 */
                // @ts-ignore
                public static setFontFamily(a: javax.swing.text.MutableAttributeSet, fam: java.lang.String | string): void
                /**
                 * Gets the font size setting from the attribute list.
                 * @param a the attribute set
                 * @return the font size, 12 as the default
                 */
                // @ts-ignore
                public static getFontSize(a: javax.swing.text.AttributeSet): number /*int*/
                /**
                 * Sets the font size attribute.
                 * @param a the attribute set
                 * @param s the font size
                 */
                // @ts-ignore
                public static setFontSize(a: javax.swing.text.MutableAttributeSet, s: number /*int*/): void
                /**
                 * Checks whether the bold attribute is set.
                 * @param a the attribute set
                 * @return true if set else false
                 */
                // @ts-ignore
                public static isBold(a: javax.swing.text.AttributeSet): boolean
                /**
                 * Sets the bold attribute.
                 * @param a the attribute set
                 * @param b specifies true/false for setting the attribute
                 */
                // @ts-ignore
                public static setBold(a: javax.swing.text.MutableAttributeSet, b: boolean): void
                /**
                 * Checks whether the italic attribute is set.
                 * @param a the attribute set
                 * @return true if set else false
                 */
                // @ts-ignore
                public static isItalic(a: javax.swing.text.AttributeSet): boolean
                /**
                 * Sets the italic attribute.
                 * @param a the attribute set
                 * @param b specifies true/false for setting the attribute
                 */
                // @ts-ignore
                public static setItalic(a: javax.swing.text.MutableAttributeSet, b: boolean): void
                /**
                 * Checks whether the underline attribute is set.
                 * @param a the attribute set
                 * @return true if set else false
                 */
                // @ts-ignore
                public static isUnderline(a: javax.swing.text.AttributeSet): boolean
                /**
                 * Checks whether the strikethrough attribute is set.
                 * @param a the attribute set
                 * @return true if set else false
                 */
                // @ts-ignore
                public static isStrikeThrough(a: javax.swing.text.AttributeSet): boolean
                /**
                 * Checks whether the superscript attribute is set.
                 * @param a the attribute set
                 * @return true if set else false
                 */
                // @ts-ignore
                public static isSuperscript(a: javax.swing.text.AttributeSet): boolean
                /**
                 * Checks whether the subscript attribute is set.
                 * @param a the attribute set
                 * @return true if set else false
                 */
                // @ts-ignore
                public static isSubscript(a: javax.swing.text.AttributeSet): boolean
                /**
                 * Sets the underline attribute.
                 * @param a the attribute set
                 * @param b specifies true/false for setting the attribute
                 */
                // @ts-ignore
                public static setUnderline(a: javax.swing.text.MutableAttributeSet, b: boolean): void
                /**
                 * Sets the strikethrough attribute.
                 * @param a the attribute set
                 * @param b specifies true/false for setting the attribute
                 */
                // @ts-ignore
                public static setStrikeThrough(a: javax.swing.text.MutableAttributeSet, b: boolean): void
                /**
                 * Sets the superscript attribute.
                 * @param a the attribute set
                 * @param b specifies true/false for setting the attribute
                 */
                // @ts-ignore
                public static setSuperscript(a: javax.swing.text.MutableAttributeSet, b: boolean): void
                /**
                 * Sets the subscript attribute.
                 * @param a the attribute set
                 * @param b specifies true/false for setting the attribute
                 */
                // @ts-ignore
                public static setSubscript(a: javax.swing.text.MutableAttributeSet, b: boolean): void
                /**
                 * Gets the foreground color setting from the attribute list.
                 * @param a the attribute set
                 * @return the color, Color.black as the default
                 */
                // @ts-ignore
                public static getForeground(a: javax.swing.text.AttributeSet): java.awt.Color
                /**
                 * Sets the foreground color.
                 * @param a the attribute set
                 * @param fg the color
                 */
                // @ts-ignore
                public static setForeground(a: javax.swing.text.MutableAttributeSet, fg: java.awt.Color): void
                /**
                 * Gets the background color setting from the attribute list.
                 * @param a the attribute set
                 * @return the color, Color.black as the default
                 */
                // @ts-ignore
                public static getBackground(a: javax.swing.text.AttributeSet): java.awt.Color
                /**
                 * Sets the background color.
                 * @param a the attribute set
                 * @param fg the color
                 */
                // @ts-ignore
                public static setBackground(a: javax.swing.text.MutableAttributeSet, fg: java.awt.Color): void
                /**
                 * Gets the first line indent setting.
                 * @param a the attribute set
                 * @return the value, 0 if not set
                 */
                // @ts-ignore
                public static getFirstLineIndent(a: javax.swing.text.AttributeSet): number /*float*/
                /**
                 * Sets the first line indent.
                 * @param a the attribute set
                 * @param i the value
                 */
                // @ts-ignore
                public static setFirstLineIndent(a: javax.swing.text.MutableAttributeSet, i: number /*float*/): void
                /**
                 * Gets the right indent setting.
                 * @param a the attribute set
                 * @return the value, 0 if not set
                 */
                // @ts-ignore
                public static getRightIndent(a: javax.swing.text.AttributeSet): number /*float*/
                /**
                 * Sets right indent.
                 * @param a the attribute set
                 * @param i the value
                 */
                // @ts-ignore
                public static setRightIndent(a: javax.swing.text.MutableAttributeSet, i: number /*float*/): void
                /**
                 * Gets the left indent setting.
                 * @param a the attribute set
                 * @return the value, 0 if not set
                 */
                // @ts-ignore
                public static getLeftIndent(a: javax.swing.text.AttributeSet): number /*float*/
                /**
                 * Sets left indent.
                 * @param a the attribute set
                 * @param i the value
                 */
                // @ts-ignore
                public static setLeftIndent(a: javax.swing.text.MutableAttributeSet, i: number /*float*/): void
                /**
                 * Gets the line spacing setting.
                 * @param a the attribute set
                 * @return the value, 0 if not set
                 */
                // @ts-ignore
                public static getLineSpacing(a: javax.swing.text.AttributeSet): number /*float*/
                /**
                 * Sets line spacing.
                 * @param a the attribute set
                 * @param i the value
                 */
                // @ts-ignore
                public static setLineSpacing(a: javax.swing.text.MutableAttributeSet, i: number /*float*/): void
                /**
                 * Gets the space above setting.
                 * @param a the attribute set
                 * @return the value, 0 if not set
                 */
                // @ts-ignore
                public static getSpaceAbove(a: javax.swing.text.AttributeSet): number /*float*/
                /**
                 * Sets space above.
                 * @param a the attribute set
                 * @param i the value
                 */
                // @ts-ignore
                public static setSpaceAbove(a: javax.swing.text.MutableAttributeSet, i: number /*float*/): void
                /**
                 * Gets the space below setting.
                 * @param a the attribute set
                 * @return the value, 0 if not set
                 */
                // @ts-ignore
                public static getSpaceBelow(a: javax.swing.text.AttributeSet): number /*float*/
                /**
                 * Sets space below.
                 * @param a the attribute set
                 * @param i the value
                 */
                // @ts-ignore
                public static setSpaceBelow(a: javax.swing.text.MutableAttributeSet, i: number /*float*/): void
                /**
                 * Gets the alignment setting.
                 * @param a the attribute set
                 * @return the value <code>StyleConstants.ALIGN_LEFT</code> if not set
                 */
                // @ts-ignore
                public static getAlignment(a: javax.swing.text.AttributeSet): number /*int*/
                /**
                 * Sets alignment.
                 * @param a the attribute set
                 * @param align the alignment value
                 */
                // @ts-ignore
                public static setAlignment(a: javax.swing.text.MutableAttributeSet, align: number /*int*/): void
                /**
                 * Gets the TabSet.
                 * @param a the attribute set
                 * @return the <code>TabSet</code>
                 */
                // @ts-ignore
                public static getTabSet(a: javax.swing.text.AttributeSet): javax.swing.text.TabSet
                /**
                 * Sets the TabSet.
                 * @param a the attribute set.
                 * @param tabs the TabSet
                 */
                // @ts-ignore
                public static setTabSet(a: javax.swing.text.MutableAttributeSet, tabs: javax.swing.text.TabSet): void
            }
        }
    }
}
