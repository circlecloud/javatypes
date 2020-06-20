declare namespace org {
    namespace springframework {
        namespace core {
            namespace codec {
                /**
                 * Constants and convenience methods for working with hints.
                 * @author Rossen Stoyanchev
                 * @since 5.1
                 * @see ResourceRegionEncoder#BOUNDARY_STRING_HINT
                 */
                // @ts-ignore
                class Hints extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Name of hint exposing a prefix to use for correlating log messages.
                     */
                    // @ts-ignore
                    readonly LOG_PREFIX_HINT: string
                    /**
                     * Name of boolean hint whether to avoid logging data either because it's
                     * potentially sensitive, or because it has been logged by a composite
                     * encoder, e.g. for multipart requests.
                     */
                    // @ts-ignore
                    readonly SUPPRESS_LOGGING_HINT: string
                    /**
                     * Create a map wit a single hint via {@link Collections#singletonMap}.
                     * @param hintName the hint name
                     * @param value the hint value
                     * @return the created map
                     */
                    // @ts-ignore
                    from(hintName: string, value: any): java.util.Map<java.lang.String, java.lang.Object>
                    /**
                     * Return an empty map of hints via {@link Collections#emptyMap()}.
                     * @return the empty map
                     */
                    // @ts-ignore
                    none(): java.util.Map<java.lang.String, java.lang.Object>
                    /**
                     * Obtain the value for a required hint.
                     * @param hints the hints map
                     * @param hintName the required hint name
                     * @param <T> the hint type to cast to
                     * @return the hint value
                     * @throws IllegalArgumentException if the hint is not found
                     */
                    // @ts-ignore
                    getRequiredHint<T>(hints: java.util.Map<java.lang.String, java.lang.Object>, hintName: string): T
                    /**
                     * Obtain the hint {@link #LOG_PREFIX_HINT}, if present, or an empty String.
                     * @param hints the hints passed to the encode method
                     * @return the log prefix
                     */
                    // @ts-ignore
                    getLogPrefix(hints: java.util.Map<java.lang.String, java.lang.Object>): java.lang.String
                    /**
                     * Whether to suppress logging based on the hint {@link #SUPPRESS_LOGGING_HINT}.
                     * @param hints the hints map
                     * @return whether logging of data is allowed
                     */
                    // @ts-ignore
                    isLoggingSuppressed(hints: java.util.Map<java.lang.String, java.lang.Object>): boolean
                    /**
                     * Merge two maps of hints, creating and copying into a new map if both have
                     * values, or returning the non-empty map, or an empty map if both are empty.
                     * @param hints1 1st map of hints
                     * @param hints2 2nd map of hints
                     * @return a single map with hints from both
                     */
                    // @ts-ignore
                    merge(hints1: java.util.Map<java.lang.String, java.lang.Object>, hints2: java.util.Map<java.lang.String, java.lang.Object>): java.util.Map<java.lang.String, java.lang.Object>
                    /**
                     * Merge a single hint into a map of hints, possibly creating and copying
                     * all hints into a new map, or otherwise if the map of hints is empty,
                     * creating a new single entry map.
                     * @param hints a map of hints to be merge
                     * @param hintName the hint name to merge
                     * @param hintValue the hint value to merge
                     * @return a single map with all hints
                     */
                    // @ts-ignore
                    merge(hints: java.util.Map<java.lang.String, java.lang.Object>, hintName: string, hintValue: any): java.util.Map<java.lang.String, java.lang.Object>
                }
            }
        }
    }
}
