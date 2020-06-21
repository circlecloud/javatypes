declare namespace org {
    namespace springframework {
        namespace beans {
            namespace propertyeditors {
                /**
                 * Property editor for Boolean/boolean properties.
                 * <p>This is not meant to be used as system PropertyEditor but rather as
                 * locale-specific Boolean editor within custom controller code, to parse
                 * UI-caused boolean strings into boolean properties of beans and check
                 * them in the UI form.
                 * <p>In web MVC code, this editor will typically be registered with
                 * {@code binder.registerCustomEditor} calls.
                 * @author Juergen Hoeller
                 * @since 10.06.2003
                 * @see org.springframework.validation.DataBinder#registerCustomEditor
                 */
                // @ts-ignore
                class CustomBooleanEditor extends java.beans.PropertyEditorSupport {
                    /**
                     * Create a new CustomBooleanEditor instance, with "true"/"on"/"yes"
                     * and "false"/"off"/"no" as recognized String values.
                     * <p>The "allowEmpty" parameter states if an empty String should
                     * be allowed for parsing, i.e. get interpreted as null value.
                     * Else, an IllegalArgumentException gets thrown in that case.
                     * @param allowEmpty if empty strings should be allowed
                     */
                    // @ts-ignore
                    constructor(allowEmpty: boolean)
                    /**
                     * Create a new CustomBooleanEditor instance,
                     * with configurable String values for true and false.
                     * <p>The "allowEmpty" parameter states if an empty String should
                     * be allowed for parsing, i.e. get interpreted as null value.
                     * Else, an IllegalArgumentException gets thrown in that case.
                     * @param trueString the String value that represents true:
                     *  for example, "true" (VALUE_TRUE), "on" (VALUE_ON),
                     *  "yes" (VALUE_YES) or some custom value
                     * @param falseString the String value that represents false:
                     *  for example, "false" (VALUE_FALSE), "off" (VALUE_OFF),
                     *  "no" (VALUE_NO) or some custom value
                     * @param allowEmpty if empty strings should be allowed
                     * @see #VALUE_TRUE
                     * @see #VALUE_FALSE
                     * @see #VALUE_ON
                     * @see #VALUE_OFF
                     * @see #VALUE_YES
                     * @see #VALUE_NO
                     */
                    // @ts-ignore
                    constructor(trueString: java.lang.String | string, falseString: java.lang.String | string, allowEmpty: boolean)
                    /**
                     * Value of {@code "true"}.
                     */
                    // @ts-ignore
                    public static readonly VALUE_TRUE: java.lang.String | string
                    /**
                     * Value of {@code "false"}.
                     */
                    // @ts-ignore
                    public static readonly VALUE_FALSE: java.lang.String | string
                    /**
                     * Value of {@code "on"}.
                     */
                    // @ts-ignore
                    public static readonly VALUE_ON: java.lang.String | string
                    /**
                     * Value of {@code "off"}.
                     */
                    // @ts-ignore
                    public static readonly VALUE_OFF: java.lang.String | string
                    /**
                     * Value of {@code "yes"}.
                     */
                    // @ts-ignore
                    public static readonly VALUE_YES: java.lang.String | string
                    /**
                     * Value of {@code "no"}.
                     */
                    // @ts-ignore
                    public static readonly VALUE_NO: java.lang.String | string
                    /**
                     * Value of {@code "1"}.
                     */
                    // @ts-ignore
                    public static readonly VALUE_1: java.lang.String | string
                    /**
                     * Value of {@code "0"}.
                     */
                    // @ts-ignore
                    public static readonly VALUE_0: java.lang.String | string
                    // @ts-ignore
                    public setAsText(text: java.lang.String | string): void
                    // @ts-ignore
                    public getAsText(): string
                }
            }
        }
    }
}
