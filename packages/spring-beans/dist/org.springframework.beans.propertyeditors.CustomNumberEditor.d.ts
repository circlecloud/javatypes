declare namespace org {
    namespace springframework {
        namespace beans {
            namespace propertyeditors {
                /**
                 * Property editor for any Number subclass such as Short, Integer, Long,
                 * BigInteger, Float, Double, BigDecimal. Can use a given NumberFormat for
                 * (locale-specific) parsing and rendering, or alternatively the default
                 * {@code decode} / {@code valueOf} / {@code toString} methods.
                 * <p>This is not meant to be used as system PropertyEditor but rather
                 * as locale-specific number editor within custom controller code,
                 * parsing user-entered number strings into Number properties of beans
                 * and rendering them in the UI form.
                 * <p>In web MVC code, this editor will typically be registered with
                 * {@code binder.registerCustomEditor} calls.
                 * @author Juergen Hoeller
                 * @since 06.06.2003
                 * @see Number
                 * @see java.text.NumberFormat
                 * @see org.springframework.validation.DataBinder#registerCustomEditor
                 */
                // @ts-ignore
                class CustomNumberEditor extends java.beans.PropertyEditorSupport {
                    /**
                     * Create a new CustomNumberEditor instance, using the default
                     * {@code valueOf} methods for parsing and {@code toString}
                     * methods for rendering.
                     * <p>The "allowEmpty" parameter states if an empty String should
                     * be allowed for parsing, i.e. get interpreted as {@code null} value.
                     * Else, an IllegalArgumentException gets thrown in that case.
                     * @param numberClass the Number subclass to generate
                     * @param allowEmpty if empty strings should be allowed
                     * @throws IllegalArgumentException if an invalid numberClass has been specified
                     * @see org.springframework.util.NumberUtils#parseNumber(String, Class)
                     * @see Integer#valueOf
                     * @see Integer#toString
                     */
                    // @ts-ignore
                    constructor(numberClass: java.lang.Class<java.lang.Number>, allowEmpty: boolean)
                    /**
                     * Create a new CustomNumberEditor instance, using the given NumberFormat
                     * for parsing and rendering.
                     * <p>The allowEmpty parameter states if an empty String should
                     * be allowed for parsing, i.e. get interpreted as {@code null} value.
                     * Else, an IllegalArgumentException gets thrown in that case.
                     * @param numberClass the Number subclass to generate
                     * @param numberFormat the NumberFormat to use for parsing and rendering
                     * @param allowEmpty if empty strings should be allowed
                     * @throws IllegalArgumentException if an invalid numberClass has been specified
                     * @see org.springframework.util.NumberUtils#parseNumber(String, Class, java.text.NumberFormat)
                     * @see java.text.NumberFormat#parse
                     * @see java.text.NumberFormat#format
                     */
                    // @ts-ignore
                    constructor(numberClass: java.lang.Class<java.lang.Number>, numberFormat: java.text.NumberFormat, allowEmpty: boolean)
                    /**
                     * Parse the Number from the given text, using the specified NumberFormat.
                     */
                    // @ts-ignore
                    setAsText(text: string): void
                    /**
                     * Coerce a Number value into the required target class, if necessary.
                     */
                    // @ts-ignore
                    setValue(value: any): void
                    /**
                     * Format the Number as String, using the specified NumberFormat.
                     */
                    // @ts-ignore
                    getAsText(): java.lang.String
                }
            }
        }
    }
}
