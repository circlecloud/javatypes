declare namespace org {
    namespace springframework {
        namespace util {
            /**
             * Helper class for resolving placeholders in texts. Usually applied to file paths.
             * <p>A text may contain {@code ${...}} placeholders, to be resolved as system properties:
             * e.g. {@code ${user.dir}}. Default values can be supplied using the ":" separator
             * between key and value.
             * @author Juergen Hoeller
             * @author Rob Harrop
             * @author Dave Syer
             * @since 1.2.5
             * @see #PLACEHOLDER_PREFIX
             * @see #PLACEHOLDER_SUFFIX
             * @see System#getProperty(String)
             */
            // @ts-ignore
            class SystemPropertyUtils extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Prefix for system property placeholders: "${".
                 */
                // @ts-ignore
                readonly PLACEHOLDER_PREFIX: string
                /**
                 * Suffix for system property placeholders: "}".
                 */
                // @ts-ignore
                readonly PLACEHOLDER_SUFFIX: string
                /**
                 * Value separator for system property placeholders: ":".
                 */
                // @ts-ignore
                readonly VALUE_SEPARATOR: string
                /**
                 * Resolve {@code ${...}} placeholders in the given text, replacing them with
                 * corresponding system property values.
                 * @param text the String to resolve
                 * @return the resolved String
                 * @throws IllegalArgumentException if there is an unresolvable placeholder
                 * @see #PLACEHOLDER_PREFIX
                 * @see #PLACEHOLDER_SUFFIX
                 */
                // @ts-ignore
                resolvePlaceholders(text: string): java.lang.String
                /**
                 * Resolve {@code ${...}} placeholders in the given text, replacing them with
                 * corresponding system property values. Unresolvable placeholders with no default
                 * value are ignored and passed through unchanged if the flag is set to {@code true}.
                 * @param text the String to resolve
                 * @param ignoreUnresolvablePlaceholders whether unresolved placeholders are to be ignored
                 * @return the resolved String
                 * @throws IllegalArgumentException if there is an unresolvable placeholder
                 * @see #PLACEHOLDER_PREFIX
                 * @see #PLACEHOLDER_SUFFIX
                 *  and the "ignoreUnresolvablePlaceholders" flag is {#code false}
                 */
                // @ts-ignore
                resolvePlaceholders(text: string, ignoreUnresolvablePlaceholders: boolean): java.lang.String
            }
        }
    }
}
