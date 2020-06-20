declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace parsing {
                    /**
                     * Context that gets passed along a bean definition reading process,
                     * encapsulating all relevant configuration as well as state.
                     * @author Rob Harrop
                     * @author Juergen Hoeller
                     * @since 2.0
                     */
                    // @ts-ignore
                    class ReaderContext extends java.lang.Object {
                        /**
                         * Construct a new {@code ReaderContext}.
                         * @param resource the XML bean definition resource
                         * @param problemReporter the problem reporter in use
                         * @param eventListener the event listener in use
                         * @param sourceExtractor the source extractor in use
                         */
                        // @ts-ignore
                        constructor(resource: Resource, problemReporter: org.springframework.beans.factory.parsing.ProblemReporter, eventListener: org.springframework.beans.factory.parsing.ReaderEventListener, sourceExtractor: org.springframework.beans.factory.parsing.SourceExtractor)
                        // @ts-ignore
                        getResource(): Resource
                        /**
                         * Raise a fatal error.
                         */
                        // @ts-ignore
                        fatal(message: string, source: any): void
                        /**
                         * Raise a fatal error.
                         */
                        // @ts-ignore
                        fatal(message: string, source: any, cause: Error): void
                        /**
                         * Raise a fatal error.
                         */
                        // @ts-ignore
                        fatal(message: string, source: any, parseState: org.springframework.beans.factory.parsing.ParseState): void
                        /**
                         * Raise a fatal error.
                         */
                        // @ts-ignore
                        fatal(message: string, source: any, parseState: org.springframework.beans.factory.parsing.ParseState, cause: Error): void
                        /**
                         * Raise a regular error.
                         */
                        // @ts-ignore
                        error(message: string, source: any): void
                        /**
                         * Raise a regular error.
                         */
                        // @ts-ignore
                        error(message: string, source: any, cause: Error): void
                        /**
                         * Raise a regular error.
                         */
                        // @ts-ignore
                        error(message: string, source: any, parseState: org.springframework.beans.factory.parsing.ParseState): void
                        /**
                         * Raise a regular error.
                         */
                        // @ts-ignore
                        error(message: string, source: any, parseState: org.springframework.beans.factory.parsing.ParseState, cause: Error): void
                        /**
                         * Raise a non-critical warning.
                         */
                        // @ts-ignore
                        warning(message: string, source: any): void
                        /**
                         * Raise a non-critical warning.
                         */
                        // @ts-ignore
                        warning(message: string, source: any, cause: Error): void
                        /**
                         * Raise a non-critical warning.
                         */
                        // @ts-ignore
                        warning(message: string, source: any, parseState: org.springframework.beans.factory.parsing.ParseState): void
                        /**
                         * Raise a non-critical warning.
                         */
                        // @ts-ignore
                        warning(message: string, source: any, parseState: org.springframework.beans.factory.parsing.ParseState, cause: Error): void
                        /**
                         * Fire a defaults-registered event.
                         */
                        // @ts-ignore
                        fireDefaultsRegistered(defaultsDefinition: org.springframework.beans.factory.parsing.DefaultsDefinition): void
                        /**
                         * Fire a component-registered event.
                         */
                        // @ts-ignore
                        fireComponentRegistered(componentDefinition: org.springframework.beans.factory.parsing.ComponentDefinition): void
                        /**
                         * Fire an alias-registered event.
                         */
                        // @ts-ignore
                        fireAliasRegistered(beanName: string, alias: string, source: any): void
                        /**
                         * Fire an import-processed event.
                         */
                        // @ts-ignore
                        fireImportProcessed(importedResource: string, source: any): void
                        /**
                         * Fire an import-processed event.
                         */
                        // @ts-ignore
                        fireImportProcessed(importedResource: string, actualResources: Resource[], source: any): void
                        /**
                         * Return the source extractor in use.
                         */
                        // @ts-ignore
                        getSourceExtractor(): org.springframework.beans.factory.parsing.SourceExtractor
                        /**
                         * Call the source extractor for the given source object.
                         * @param sourceCandidate the original source object
                         * @return the source object to store, or {#code null} for none.
                         * @see #getSourceExtractor()
                         * @see SourceExtractor#extractSource
                         */
                        // @ts-ignore
                        extractSource(sourceCandidate: any): java.lang.Object
                    }
                }
            }
        }
    }
}
