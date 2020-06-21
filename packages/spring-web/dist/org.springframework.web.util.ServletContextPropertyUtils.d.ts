declare namespace org {
    namespace springframework {
        namespace web {
            namespace util {
                /**
                 * Helper class for resolving placeholders in texts. Usually applied to file paths.
                 * <p>A text may contain {@code ${...}} placeholders, to be resolved as servlet context
                 * init parameters or system properties: e.g. {@code ${user.dir}}. Default values can
                 * be supplied using the ":" separator between key and value.
                 * @author Juergen Hoeller
                 * @author Marten Deinum
                 * @since 3.2.2
                 * @see SystemPropertyUtils
                 * @see ServletContext#getInitParameter(String)
                 */
                // @ts-ignore
                abstract class ServletContextPropertyUtils extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Resolve ${...} placeholders in the given text, replacing them with corresponding
                     * servlet context init parameter or system property values.
                     * @param text the String to resolve
                     * @param servletContext the servletContext to use for lookups.
                     * @return the resolved String
                     * @throws IllegalArgumentException if there is an unresolvable placeholder
                     * @see SystemPropertyUtils#PLACEHOLDER_PREFIX
                     * @see SystemPropertyUtils#PLACEHOLDER_SUFFIX
                     * @see SystemPropertyUtils#resolvePlaceholders(String, boolean)
                     */
                    // @ts-ignore
                    public static resolvePlaceholders(text: java.lang.String | string, servletContext: ServletContext): string
                    /**
                     * Resolve ${...} placeholders in the given text, replacing them with corresponding
                     * servlet context init parameter or system property values. Unresolvable placeholders
                     * with no default value are ignored and passed through unchanged if the flag is set to true.
                     * @param text the String to resolve
                     * @param servletContext the servletContext to use for lookups.
                     * @param ignoreUnresolvablePlaceholders flag to determine is unresolved placeholders are ignored
                     * @return the resolved String
                     * @throws IllegalArgumentException if there is an unresolvable placeholder and the flag is false
                     * @see SystemPropertyUtils#PLACEHOLDER_PREFIX
                     * @see SystemPropertyUtils#PLACEHOLDER_SUFFIX
                     * @see SystemPropertyUtils#resolvePlaceholders(String, boolean)
                     */
                    // @ts-ignore
                    public static resolvePlaceholders(text: java.lang.String | string, servletContext: ServletContext, ignoreUnresolvablePlaceholders: boolean): string
                }
            }
        }
    }
}
