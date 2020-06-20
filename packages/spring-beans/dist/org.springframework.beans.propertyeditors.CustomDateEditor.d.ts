declare namespace org {
    namespace springframework {
        namespace beans {
            namespace propertyeditors {
                /**
                 * Property editor for {@code java.util.Date},
                 * supporting a custom {@code java.text.DateFormat}.
                 * <p>This is not meant to be used as system PropertyEditor but rather
                 * as locale-specific date editor within custom controller code,
                 * parsing user-entered number strings into Date properties of beans
                 * and rendering them in the UI form.
                 * <p>In web MVC code, this editor will typically be registered with
                 * {@code binder.registerCustomEditor}.
                 * @author Juergen Hoeller
                 * @since 28.04.2003
                 * @see java.util.Date
                 * @see java.text.DateFormat
                 * @see org.springframework.validation.DataBinder#registerCustomEditor
                 */
                // @ts-ignore
                class CustomDateEditor extends java.beans.PropertyEditorSupport {
                    /**
                     * Create a new CustomDateEditor instance, using the given DateFormat
                     * for parsing and rendering.
                     * <p>The "allowEmpty" parameter states if an empty String should
                     * be allowed for parsing, i.e. get interpreted as null value.
                     * Otherwise, an IllegalArgumentException gets thrown in that case.
                     * @param dateFormat the DateFormat to use for parsing and rendering
                     * @param allowEmpty if empty strings should be allowed
                     */
                    // @ts-ignore
                    constructor(dateFormat: java.text.DateFormat, allowEmpty: boolean)
                    /**
                     * Create a new CustomDateEditor instance, using the given DateFormat
                     * for parsing and rendering.
                     * <p>The "allowEmpty" parameter states if an empty String should
                     * be allowed for parsing, i.e. get interpreted as null value.
                     * Otherwise, an IllegalArgumentException gets thrown in that case.
                     * <p>The "exactDateLength" parameter states that IllegalArgumentException gets
                     * thrown if the String does not exactly match the length specified. This is useful
                     * because SimpleDateFormat does not enforce strict parsing of the year part,
                     * not even with {@code setLenient(false)}. Without an "exactDateLength"
                     * specified, the "01/01/05" would get parsed to "01/01/0005". However, even
                     * with an "exactDateLength" specified, prepended zeros in the day or month
                     * part may still allow for a shorter year part, so consider this as just
                     * one more assertion that gets you closer to the intended date format.
                     * @param dateFormat the DateFormat to use for parsing and rendering
                     * @param allowEmpty if empty strings should be allowed
                     * @param exactDateLength the exact expected length of the date String
                     */
                    // @ts-ignore
                    constructor(dateFormat: java.text.DateFormat, allowEmpty: boolean, exactDateLength: number /*int*/)
                    /**
                     * Parse the Date from the given text, using the specified DateFormat.
                     */
                    // @ts-ignore
                    setAsText(text: string): void
                    /**
                     * Format the Date as String, using the specified DateFormat.
                     */
                    // @ts-ignore
                    getAsText(): java.lang.String
                }
            }
        }
    }
}
