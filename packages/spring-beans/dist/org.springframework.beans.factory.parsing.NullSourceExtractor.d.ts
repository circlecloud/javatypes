declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace parsing {
                    /**
                     * Simple implementation of {@link SourceExtractor} that returns {@code null}
                     * as the source metadata.
                     * <p>This is the default implementation and prevents too much metadata from being
                     * held in memory during normal (non-tooled) runtime usage.
                     * @author Rob Harrop
                     * @since 2.0
                     */
                    // @ts-ignore
                    class NullSourceExtractor extends java.lang.Object implements org.springframework.beans.factory.parsing.SourceExtractor {
                        // @ts-ignore
                        constructor()
                        /**
                         * This implementation simply returns {@code null} for any input.
                         */
                        // @ts-ignore
                        public extractSource(sourceCandidate: java.lang.Object | any, definitionResource: Resource): any
                    }
                }
            }
        }
    }
}
