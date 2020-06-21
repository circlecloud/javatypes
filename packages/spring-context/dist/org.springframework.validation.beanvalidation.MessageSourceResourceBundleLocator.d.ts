declare namespace org {
    namespace springframework {
        namespace validation {
            namespace beanvalidation {
                /**
                 * Implementation of Hibernate Validator 4.3/5.x's {@link ResourceBundleLocator} interface,
                 * exposing a Spring {@link MessageSource} as localized {@link MessageSourceResourceBundle}.
                 * @author Juergen Hoeller
                 * @since 3.0.4
                 * @see ResourceBundleLocator
                 * @see MessageSource
                 * @see MessageSourceResourceBundle
                 */
                // @ts-ignore
                class MessageSourceResourceBundleLocator extends java.lang.Object {
                    /**
                     * Build a MessageSourceResourceBundleLocator for the given MessageSource.
                     * @param messageSource the Spring MessageSource to wrap
                     */
                    // @ts-ignore
                    constructor(messageSource: org.springframework.context.MessageSource)
                    // @ts-ignore
                    public getResourceBundle(locale: java.util.Locale): java.util.ResourceBundle
                }
            }
        }
    }
}
