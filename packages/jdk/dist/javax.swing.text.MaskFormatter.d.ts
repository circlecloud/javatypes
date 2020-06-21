declare namespace javax {
    namespace swing {
        namespace text {
            /**
             * <code>MaskFormatter</code> is used to format and edit strings. The behavior
             * of a <code>MaskFormatter</code> is controlled by way of a String mask
             * that specifies the valid characters that can be contained at a particular
             * location in the <code>Document</code> model. The following characters can
             * be specified:
             * <table border=1 summary="Valid characters and their descriptions">
             * <tr>
             * <th>Character&nbsp;</th>
             * <th><p style="text-align:left">Description</p></th>
             * </tr>
             * <tr>
             * <td>#</td>
             * <td>Any valid number, uses <code>Character.isDigit</code>.</td>
             * </tr>
             * <tr>
             * <td>'</td>
             * <td>Escape character, used to escape any of the
             * special formatting characters.</td>
             * </tr>
             * <tr>
             * <td>U</td><td>Any character (<code>Character.isLetter</code>). All
             * lowercase letters are mapped to upper case.</td>
             * </tr>
             * <tr><td>L</td><td>Any character (<code>Character.isLetter</code>). All
             * upper case letters are mapped to lower case.</td>
             * </tr>
             * <tr><td>A</td><td>Any character or number (<code>Character.isLetter</code>
             * or <code>Character.isDigit</code>)</td>
             * </tr>
             * <tr><td>?</td><td>Any character
             * (<code>Character.isLetter</code>).</td>
             * </tr>
             * <tr><td>*</td><td>Anything.</td></tr>
             * <tr><td>H</td><td>Any hex character (0-9, a-f or A-F).</td></tr>
             * </table>
             * <p>
             * Typically characters correspond to one char, but in certain languages this
             * is not the case. The mask is on a per character basis, and will thus
             * adjust to fit as many chars as are needed.
             * <p>
             * You can further restrict the characters that can be input by the
             * <code>setInvalidCharacters</code> and <code>setValidCharacters</code>
             * methods. <code>setInvalidCharacters</code> allows you to specify
             * which characters are not legal. <code>setValidCharacters</code> allows
             * you to specify which characters are valid. For example, the following
             * code block is equivalent to a mask of '0xHHH' with no invalid/valid
             * characters:
             * <pre>
             * MaskFormatter formatter = new MaskFormatter("0x***");
             * formatter.setValidCharacters("0123456789abcdefABCDEF");
             * </pre>
             * <p>
             * When initially formatting a value if the length of the string is
             * less than the length of the mask, two things can happen. Either
             * the placeholder string will be used, or the placeholder character will
             * be used. Precedence is given to the placeholder string. For example:
             * <pre>
             * MaskFormatter formatter = new MaskFormatter("###-####");
             * formatter.setPlaceholderCharacter('_');
             * formatter.getDisplayValue(tf, "123");
             * </pre>
             * <p>
             * Would result in the string '123-____'. If
             * <code>setPlaceholder("555-1212")</code> was invoked '123-1212' would
             * result. The placeholder String is only used on the initial format,
             * on subsequent formats only the placeholder character will be used.
             * <p>
             * If a <code>MaskFormatter</code> is configured to only allow valid characters
             * (<code>setAllowsInvalid(false)</code>) literal characters will be skipped as
             * necessary when editing. Consider a <code>MaskFormatter</code> with
             * the mask "###-####" and current value "555-1212". Using the right
             * arrow key to navigate through the field will result in (| indicates the
             * position of the caret):
             * <pre>
             * |555-1212
             * 5|55-1212
             * 55|5-1212
             * 555-|1212
             * 555-1|212
             * </pre>
             * The '-' is a literal (non-editable) character, and is skipped.
             * <p>
             * Similar behavior will result when editing. Consider inserting the string
             * '123-45' and '12345' into the <code>MaskFormatter</code> in the
             * previous example. Both inserts will result in the same String,
             * '123-45__'. When <code>MaskFormatter</code>
             * is processing the insert at character position 3 (the '-'), two things can
             * happen:
             * <ol>
             * <li>If the inserted character is '-', it is accepted.
             * <li>If the inserted character matches the mask for the next non-literal
             * character, it is accepted at the new location.
             * <li>Anything else results in an invalid edit
             * </ol>
             * <p>
             * By default <code>MaskFormatter</code> will not allow invalid edits, you can
             * change this with the <code>setAllowsInvalid</code> method, and will
             * commit edits on valid edits (use the <code>setCommitsOnValidEdit</code> to
             * change this).
             * <p>
             * By default, <code>MaskFormatter</code> is in overwrite mode. That is as
             * characters are typed a new character is not inserted, rather the character
             * at the current location is replaced with the newly typed character. You
             * can change this behavior by way of the method <code>setOverwriteMode</code>.
             * <p>
             * <strong>Warning:</strong>
             * Serialized objects of this class will not be compatible with
             * future Swing releases. The current serialization support is
             * appropriate for short term storage or RMI between applications running
             * the same version of Swing.  As of 1.4, support for long term storage
             * of all JavaBeans&trade;
             * has been added to the <code>java.beans</code> package.
             * Please see {@link java.beans.XMLEncoder}.
             * @since 1.4
             */
            // @ts-ignore
            class MaskFormatter extends javax.swing.text.DefaultFormatter {
                /**
                 * Creates a MaskFormatter with no mask.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates a <code>MaskFormatter</code> with the specified mask.
                 * A <code>ParseException</code>
                 * will be thrown if <code>mask</code> is an invalid mask.
                 * @throws ParseException if mask does not contain valid mask characters
                 */
                // @ts-ignore
                constructor(mask: java.lang.String | string)
                /**
                 * Sets the mask dictating the legal characters.
                 * This will throw a <code>ParseException</code> if <code>mask</code> is
                 * not valid.
                 * @throws ParseException if mask does not contain valid mask characters
                 */
                // @ts-ignore
                public setMask(mask: java.lang.String | string): void
                /**
                 * Returns the formatting mask.
                 * @return Mask dictating legal character values.
                 */
                // @ts-ignore
                public getMask(): string
                /**
                 * Allows for further restricting of the characters that can be input.
                 * Only characters specified in the mask, not in the
                 * <code>invalidCharacters</code>, and in
                 * <code>validCharacters</code> will be allowed to be input. Passing
                 * in null (the default) implies the valid characters are only bound
                 * by the mask and the invalid characters.
                 * @param validCharacters If non-null, specifies legal characters.
                 */
                // @ts-ignore
                public setValidCharacters(validCharacters: java.lang.String | string): void
                /**
                 * Returns the valid characters that can be input.
                 * @return Legal characters
                 */
                // @ts-ignore
                public getValidCharacters(): string
                /**
                 * Allows for further restricting of the characters that can be input.
                 * Only characters specified in the mask, not in the
                 * <code>invalidCharacters</code>, and in
                 * <code>validCharacters</code> will be allowed to be input. Passing
                 * in null (the default) implies the valid characters are only bound
                 * by the mask and the valid characters.
                 * @param invalidCharacters If non-null, specifies illegal characters.
                 */
                // @ts-ignore
                public setInvalidCharacters(invalidCharacters: java.lang.String | string): void
                /**
                 * Returns the characters that are not valid for input.
                 * @return illegal characters.
                 */
                // @ts-ignore
                public getInvalidCharacters(): string
                /**
                 * Sets the string to use if the value does not completely fill in
                 * the mask. A null value implies the placeholder char should be used.
                 * @param placeholder String used when formatting if the value does not
                 *         completely fill the mask
                 */
                // @ts-ignore
                public setPlaceholder(placeholder: java.lang.String | string): void
                /**
                 * Returns the String to use if the value does not completely fill
                 * in the mask.
                 * @return String used when formatting if the value does not
                 *         completely fill the mask
                 */
                // @ts-ignore
                public getPlaceholder(): string
                /**
                 * Sets the character to use in place of characters that are not present
                 * in the value, ie the user must fill them in. The default value is
                 * a space.
                 * <p>
                 * This is only applicable if the placeholder string has not been
                 * specified, or does not completely fill in the mask.
                 * @param placeholder Character used when formatting if the value does not
                 *         completely fill the mask
                 */
                // @ts-ignore
                public setPlaceholderCharacter(placeholder: string): void
                /**
                 * Returns the character to use in place of characters that are not present
                 * in the value, ie the user must fill them in.
                 * @return Character used when formatting if the value does not
                 *         completely fill the mask
                 */
                // @ts-ignore
                public getPlaceholderCharacter(): string
                /**
                 * If true, the returned value and set value will also contain the literal
                 * characters in mask.
                 * <p>
                 * For example, if the mask is <code>'(###) ###-####'</code>, the
                 * current value is <code>'(415) 555-1212'</code>, and
                 * <code>valueContainsLiteralCharacters</code> is
                 * true <code>stringToValue</code> will return
                 * <code>'(415) 555-1212'</code>. On the other hand, if
                 * <code>valueContainsLiteralCharacters</code> is false,
                 * <code>stringToValue</code> will return <code>'4155551212'</code>.
                 * @param containsLiteralChars Used to indicate if literal characters in
                 *         mask should be returned in stringToValue
                 */
                // @ts-ignore
                public setValueContainsLiteralCharacters(containsLiteralChars: boolean): void
                /**
                 * Returns true if <code>stringToValue</code> should return literal
                 * characters in the mask.
                 * @return True if literal characters in mask should be returned in
                 *          stringToValue
                 */
                // @ts-ignore
                public getValueContainsLiteralCharacters(): boolean
                /**
                 * Parses the text, returning the appropriate Object representation of
                 * the String <code>value</code>. This strips the literal characters as
                 * necessary and invokes supers <code>stringToValue</code>, so that if
                 * you have specified a value class (<code>setValueClass</code>) an
                 * instance of it will be created. This will throw a
                 * <code>ParseException</code> if the value does not match the current
                 * mask.  Refer to {@link #setValueContainsLiteralCharacters} for details
                 * on how literals are treated.
                 * @throws ParseException if there is an error in the conversion
                 * @param value String to convert
                 * @see #setValueContainsLiteralCharacters
                 * @return Object representation of text
                 */
                // @ts-ignore
                public stringToValue(value: java.lang.String | string): any
                /**
                 * Returns a String representation of the Object <code>value</code>
                 * based on the mask.  Refer to
                 * {@link #setValueContainsLiteralCharacters} for details
                 * on how literals are treated.
                 * @throws ParseException if there is an error in the conversion
                 * @param value Value to convert
                 * @see #setValueContainsLiteralCharacters
                 * @return String representation of value
                 */
                // @ts-ignore
                public valueToString(value: java.lang.Object | any): string
                /**
                 * Installs the <code>DefaultFormatter</code> onto a particular
                 * <code>JFormattedTextField</code>.
                 * This will invoke <code>valueToString</code> to convert the
                 * current value from the <code>JFormattedTextField</code> to
                 * a String. This will then install the <code>Action</code>s from
                 * <code>getActions</code>, the <code>DocumentFilter</code>
                 * returned from <code>getDocumentFilter</code> and the
                 * <code>NavigationFilter</code> returned from
                 * <code>getNavigationFilter</code> onto the
                 * <code>JFormattedTextField</code>.
                 * <p>
                 * Subclasses will typically only need to override this if they
                 * wish to install additional listeners on the
                 * <code>JFormattedTextField</code>.
                 * <p>
                 * If there is a <code>ParseException</code> in converting the
                 * current value to a String, this will set the text to an empty
                 * String, and mark the <code>JFormattedTextField</code> as being
                 * in an invalid state.
                 * <p>
                 * While this is a public method, this is typically only useful
                 * for subclassers of <code>JFormattedTextField</code>.
                 * <code>JFormattedTextField</code> will invoke this method at
                 * the appropriate times when the value changes, or its internal
                 * state changes.
                 * @param ftf JFormattedTextField to format for, may be null indicating
                 *             uninstall from current JFormattedTextField.
                 */
                // @ts-ignore
                public install(ftf: javax.swing.JFormattedTextField): void
            }
        }
    }
}
