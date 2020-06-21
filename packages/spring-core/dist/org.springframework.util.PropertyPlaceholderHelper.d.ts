declare namespace org {
    namespace springframework {
        namespace util {
            /**
             * Utility class for working with Strings that have placeholder values in them. A placeholder takes the form
             * {@code ${name}}. Using {@code PropertyPlaceholderHelper} these placeholders can be substituted for
             * user-supplied values. <p> Values for substitution can be supplied using a {@link Properties} instance or
             * using a {@link PlaceholderResolver}.
             * @author Juergen Hoeller
             * @author Rob Harrop
             * @since 3.0
             */
            // @ts-ignore
            class PropertyPlaceholderHelper extends java.lang.Object {
                /**
                 * Creates a new {@code PropertyPlaceholderHelper} that uses the supplied prefix and suffix.
                 * Unresolvable placeholders are ignored.
                 * @param placeholderPrefix the prefix that denotes the start of a placeholder
                 * @param placeholderSuffix the suffix that denotes the end of a placeholder
                 */
                // @ts-ignore
                constructor(placeholderPrefix: java.lang.String | string, placeholderSuffix: java.lang.String | string)
                /**
                 * Creates a new {@code PropertyPlaceholderHelper} that uses the supplied prefix and suffix.
                 * @param placeholderPrefix the prefix that denotes the start of a placeholder
                 * @param placeholderSuffix the suffix that denotes the end of a placeholder
                 * @param valueSeparator the separating character between the placeholder variable
                 *  and the associated default value, if any
                 * @param ignoreUnresolvablePlaceholders indicates whether unresolvable placeholders should
                 *  be ignored ({#code true}) or cause an exception ({@code false})
                 */
                // @ts-ignore
                constructor(placeholderPrefix: java.lang.String | string, placeholderSuffix: java.lang.String | string, valueSeparator: java.lang.String | string, ignoreUnresolvablePlaceholders: boolean)
                /**
                 * Replaces all placeholders of format {@code ${name}} with the corresponding
                 * property from the supplied {@link Properties}.
                 * @param value the value containing the placeholders to be replaced
                 * @param properties the {#code Properties} to use for replacement
                 * @return the supplied value with placeholders replaced inline
                 */
                // @ts-ignore
                public replacePlaceholders(value: java.lang.String | string, properties: java.util.Properties): string
                /**
                 * Replaces all placeholders of format {@code ${name}} with the value returned
                 * from the supplied {@link PlaceholderResolver}.
                 * @param value the value containing the placeholders to be replaced
                 * @param placeholderResolver the {#code PlaceholderResolver} to use for replacement
                 * @return the supplied value with placeholders replaced inline
                 */
                // @ts-ignore
                public replacePlaceholders(value: java.lang.String | string, placeholderResolver: org.springframework.util.PropertyPlaceholderHelper.PlaceholderResolver): string
                // @ts-ignore
                parseStringValue(value: java.lang.String | string, placeholderResolver: org.springframework.util.PropertyPlaceholderHelper.PlaceholderResolver, visitedPlaceholders: java.util.Set<java.lang.String | string> | Array<java.lang.String | string>): string
            }
        }
    }
}
