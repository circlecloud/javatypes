declare namespace org {
    namespace springframework {
        namespace validation {
            namespace beanvalidation {
                /**
                 * Delegates to a target {@link MessageInterpolator} implementation but enforces Spring's
                 * managed Locale. Typically used to wrap the validation provider's default interpolator.
                 * @author Juergen Hoeller
                 * @since 3.0
                 * @see org.springframework.context.i18n.LocaleContextHolder#getLocale()
                 */
                // @ts-ignore
                class LocaleContextMessageInterpolator extends java.lang.Object {
                    /**
                     * Create a new LocaleContextMessageInterpolator, wrapping the given target interpolator.
                     * @param targetInterpolator the target MessageInterpolator to wrap
                     */
                    // @ts-ignore
                    constructor(targetInterpolator: MessageInterpolator)
                    // @ts-ignore
                    public interpolate(message: java.lang.String | string, context: Context): string
                    // @ts-ignore
                    public interpolate(message: java.lang.String | string, context: Context, locale: java.util.Locale): string
                }
            }
        }
    }
}
