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
                        public getResource(): Resource
                        /**
                         * Raise a fatal error.
                         */
                        // @ts-ignore
                        public fatal(message: java.lang.String | string, source: java.lang.Object | any): void
                        /**
                         * Raise a fatal error.
                         */
                        // @ts-ignore
                        public fatal(message: java.lang.String | string, source: java.lang.Object | any, cause: java.lang.Throwable | Error): void
                        /**
                         * Raise a fatal error.
                         */
                        // @ts-ignore
                        public fatal(message: java.lang.String | string, source: java.lang.Object | any, parseState: org.springframework.beans.factory.parsing.ParseState): void
                        /**
                         * Raise a fatal error.
                         */
                        // @ts-ignore
                        public fatal(message: java.lang.String | string, source: java.lang.Object | any, parseState: org.springframework.beans.factory.parsing.ParseState, cause: java.lang.Throwable | Error): void
                        /**
                         * Raise a regular error.
                         */
                        // @ts-ignore
                        public error(message: java.lang.String | string, source: java.lang.Object | any): void
                        /**
                         * Raise a regular error.
                         */
                        // @ts-ignore
                        public error(message: java.lang.String | string, source: java.lang.Object | any, cause: java.lang.Throwable | Error): void
                        /**
                         * Raise a regular error.
                         */
                        // @ts-ignore
                        public error(message: java.lang.String | string, source: java.lang.Object | any, parseState: org.springframework.beans.factory.parsing.ParseState): void
                        /**
                         * Raise a regular error.
                         */
                        // @ts-ignore
                        public error(message: java.lang.String | string, source: java.lang.Object | any, parseState: org.springframework.beans.factory.parsing.ParseState, cause: java.lang.Throwable | Error): void
                        /**
                         * Raise a non-critical warning.
                         */
                        // @ts-ignore
                        public warning(message: java.lang.String | string, source: java.lang.Object | any): void
                        /**
                         * Raise a non-critical warning.
                         */
                        // @ts-ignore
                        public warning(message: java.lang.String | string, source: java.lang.Object | any, cause: java.lang.Throwable | Error): void
                        /**
                         * Raise a non-critical warning.
                         */
                        // @ts-ignore
                        public warning(message: java.lang.String | string, source: java.lang.Object | any, parseState: org.springframework.beans.factory.parsing.ParseState): void
                        /**
                         * Raise a non-critical warning.
                         */
                        // @ts-ignore
                        public warning(message: java.lang.String | string, source: java.lang.Object | any, parseState: org.springframework.beans.factory.parsing.ParseState, cause: java.lang.Throwable | Error): void
                        /**
                         * Fire a defaults-registered event.
                         */
                        // @ts-ignore
                        public fireDefaultsRegistered(defaultsDefinition: org.springframework.beans.factory.parsing.DefaultsDefinition): void
                        /**
                         * Fire a component-registered event.
                         */
                        // @ts-ignore
                        public fireComponentRegistered(componentDefinition: org.springframework.beans.factory.parsing.ComponentDefinition): void
                        /**
                         * Fire an alias-registered event.
                         */
                        // @ts-ignore
                        public fireAliasRegistered(beanName: java.lang.String | string, alias: java.lang.String | string, source: java.lang.Object | any): void
                        /**
                         * Fire an import-processed event.
                         */
                        // @ts-ignore
                        public fireImportProcessed(importedResource: java.lang.String | string, source: java.lang.Object | any): void
                        /**
                         * Fire an import-processed event.
                         */
                        // @ts-ignore
                        public fireImportProcessed(importedResource: java.lang.String | string, actualResources: Resource[], source: java.lang.Object | any): void
                        /**
                         * Return the source extractor in use.
                         */
                        // @ts-ignore
                        public getSourceExtractor(): org.springframework.beans.factory.parsing.SourceExtractor
                        /**
                         * Call the source extractor for the given source object.
                         * @param sourceCandidate the original source object
                         * @return the source object to store, or {#code null} for none.
                         * @see #getSourceExtractor()
                         * @see SourceExtractor#extractSource
                         */
                        // @ts-ignore
                        public extractSource(sourceCandidate: java.lang.Object | any): any
                    }
                }
            }
        }
    }
}
