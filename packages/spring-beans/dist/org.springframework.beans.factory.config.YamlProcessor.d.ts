declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace config {
                    /**
                     * Base class for YAML factories.
                     * <p>Requires SnakeYAML 1.18 or higher, as of Spring Framework 5.0.6.
                     * @author Dave Syer
                     * @author Juergen Hoeller
                     * @since 4.1
                     */
                    // @ts-ignore
                    class YamlProcessor extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * A map of document matchers allowing callers to selectively use only
                         * some of the documents in a YAML resource. In YAML documents are
                         * separated by {@code ---} lines, and each document is converted
                         * to properties before the match is made. E.g.
                         * <pre class="code">
                         * environment: dev
                         * url: https://dev.bar.com
                         * name: Developer Setup
                         * ---
                         * environment: prod
                         * url:https://foo.bar.com
                         * name: My Cool App
                         * </pre>
                         * when mapped with
                         * <pre class="code">
                         * setDocumentMatchers(properties ->
                         * ("prod".equals(properties.getProperty("environment")) ? MatchStatus.FOUND : MatchStatus.NOT_FOUND));
                         * </pre>
                         * would end up as
                         * <pre class="code">
                         * environment=prod
                         * url=https://foo.bar.com
                         * name=My Cool App
                         * </pre>
                         */
                        // @ts-ignore
                        setDocumentMatchers(...matchers: org.springframework.beans.factory.config.YamlProcessor.DocumentMatcher[]): void
                        /**
                         * Flag indicating that a document for which all the
                         * {@link #setDocumentMatchers(DocumentMatcher...) document matchers} abstain will
                         * nevertheless match. Default is {@code true}.
                         */
                        // @ts-ignore
                        setMatchDefault(matchDefault: boolean): void
                        /**
                         * Method to use for resolving resources. Each resource will be converted to a Map,
                         * so this property is used to decide which map entries to keep in the final output
                         * from this factory. Default is {@link ResolutionMethod#OVERRIDE}.
                         */
                        // @ts-ignore
                        setResolutionMethod(resolutionMethod: org.springframework.beans.factory.config.YamlProcessor.ResolutionMethod): void
                        /**
                         * Set locations of YAML {@link Resource resources} to be loaded.
                         * @see ResolutionMethod
                         */
                        // @ts-ignore
                        setResources(...resources: Resource[]): void
                        /**
                         * Provide an opportunity for subclasses to process the Yaml parsed from the supplied
                         * resources. Each resource is parsed in turn and the documents inside checked against
                         * the {@link #setDocumentMatchers(DocumentMatcher...) matchers}. If a document
                         * matches it is passed into the callback, along with its representation as Properties.
                         * Depending on the {@link #setResolutionMethod(ResolutionMethod)} not all of the
                         * documents will be parsed.
                         * @param callback a callback to delegate to once matching documents are found
                         * @see #createYaml()
                         */
                        // @ts-ignore
                        process(callback: org.springframework.beans.factory.config.YamlProcessor.MatchCallback): void
                        /**
                         * Create the {@link Yaml} instance to use.
                         * <p>The default implementation sets the "allowDuplicateKeys" flag to {@code false},
                         * enabling built-in duplicate key handling in SnakeYAML 1.18+.
                         * @see LoaderOptions#setAllowDuplicateKeys(boolean)
                         */
                        // @ts-ignore
                        createYaml(): Yaml
                        /**
                         * Return a flattened version of the given map, recursively following any nested Map
                         * or Collection values. Entries from the resulting map retain the same order as the
                         * source. When called with the Map from a {@link MatchCallback} the result will
                         * contain the same values as the {@link MatchCallback} Properties.
                         * @param source the source map
                         * @return a flattened map
                         * @since 4.1.3
                         */
                        // @ts-ignore
                        getFlattenedMap(source: java.util.Map<java.lang.String, java.lang.Object>): java.util.Map<java.lang.String, java.lang.Object>
                    }
                }
            }
        }
    }
}
