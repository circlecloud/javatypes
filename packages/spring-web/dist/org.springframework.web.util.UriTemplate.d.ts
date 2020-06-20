declare namespace org {
    namespace springframework {
        namespace web {
            namespace util {
                /**
                 * Representation of a URI template that can be expanded with URI variables via
                 * {@link #expand(Map)}, {@link #expand(Object[])}, or matched to a URL via
                 * {@link #match(String)}. This class is designed to be thread-safe and
                 * reusable, and allows any number of expand or match calls.
                 * <p><strong>Note:</strong> this class uses {@link UriComponentsBuilder}
                 * internally to expand URI templates, and is merely a shortcut for already
                 * prepared URI templates. For more dynamic preparation and extra flexibility,
                 * e.g. around URI encoding, consider using {@code UriComponentsBuilder} or the
                 * higher level {@link DefaultUriBuilderFactory} which adds several encoding
                 * modes on top of {@code UriComponentsBuilder}. See the
                 * <a href="https://docs.spring.io/spring/docs/current/spring-framework-reference/web.html#mvc-uri-building">reference docs</a>
                 * for further details.
                 * @author Arjen Poutsma
                 * @author Juergen Hoeller
                 * @author Rossen Stoyanchev
                 * @since 3.0
                 */
                // @ts-ignore
                class UriTemplate extends java.lang.Object implements java.io.Serializable {
                    /**
                     * Construct a new {@code UriTemplate} with the given URI String.
                     * @param uriTemplate the URI template string
                     */
                    // @ts-ignore
                    constructor(uriTemplate: string)
                    /**
                     * Return the names of the variables in the template, in order.
                     * @return the template variable names
                     */
                    // @ts-ignore
                    getVariableNames(): java.util.List<java.lang.String>
                    /**
                     * Given the Map of variables, expands this template into a URI. The Map keys represent variable names,
                     * the Map values variable values. The order of variables is not significant.
                     * <p>Example:
                     * <pre class="code">
                     * UriTemplate template = new UriTemplate("https://example.com/hotels/{hotel}/bookings/{booking}");
                     * Map&lt;String, String&gt; uriVariables = new HashMap&lt;String, String&gt;();
                     * uriVariables.put("booking", "42");
                     * uriVariables.put("hotel", "Rest & Relax");
                     * System.out.println(template.expand(uriVariables));
                     * </pre>
                     * will print: <blockquote>{@code https://example.com/hotels/Rest%20%26%20Relax/bookings/42}</blockquote>
                     * @param uriVariables the map of URI variables
                     * @return the expanded URI
                     * @throws IllegalArgumentException if {#code uriVariables} is {@code null};
                     *  or if it does not contain values for all the variable names
                     */
                    // @ts-ignore
                    expand(uriVariables: java.util.Map<java.lang.String, any>): java.net.URI
                    /**
                     * Given an array of variables, expand this template into a full URI. The array represent variable values.
                     * The order of variables is significant.
                     * <p>Example:
                     * <pre class="code">
                     * UriTemplate template = new UriTemplate("https://example.com/hotels/{hotel}/bookings/{booking}");
                     * System.out.println(template.expand("Rest & Relax", 42));
                     * </pre>
                     * will print: <blockquote>{@code https://example.com/hotels/Rest%20%26%20Relax/bookings/42}</blockquote>
                     * @param uriVariableValues the array of URI variables
                     * @return the expanded URI
                     * @throws IllegalArgumentException if {#code uriVariables} is {@code null}
                     *  or if it does not contain sufficient variables
                     */
                    // @ts-ignore
                    expand(...uriVariableValues: any[]): java.net.URI
                    /**
                     * Indicate whether the given URI matches this template.
                     * @param uri the URI to match to
                     * @return {#code true} if it matches; {@code false} otherwise
                     */
                    // @ts-ignore
                    matches(uri: string): boolean
                    /**
                     * Match the given URI to a map of variable values. Keys in the returned map are variable names,
                     * values are variable values, as occurred in the given URI.
                     * <p>Example:
                     * <pre class="code">
                     * UriTemplate template = new UriTemplate("https://example.com/hotels/{hotel}/bookings/{booking}");
                     * System.out.println(template.match("https://example.com/hotels/1/bookings/42"));
                     * </pre>
                     * will print: <blockquote>{@code {hotel=1, booking=42}}</blockquote>
                     * @param uri the URI to match to
                     * @return a map of variable values
                     */
                    // @ts-ignore
                    match(uri: string): java.util.Map<java.lang.String, java.lang.String>
                    // @ts-ignore
                    toString(): java.lang.String
                }
            }
        }
    }
}
