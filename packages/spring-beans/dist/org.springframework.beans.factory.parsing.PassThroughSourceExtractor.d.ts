declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace parsing {
                    /**
                     * Simple {@link SourceExtractor} implementation that just passes
                     * the candidate source metadata object through for attachment.
                     * <p>Using this implementation means that tools will get raw access to the
                     * underlying configuration source metadata provided by the tool.
                     * <p>This implementation <strong>should not</strong> be used in a production
                     * application since it is likely to keep too much metadata in memory
                     * (unnecessarily).
                     * @author Rob Harrop
                     * @since 2.0
                     */
                    // @ts-ignore
                    class PassThroughSourceExtractor extends java.lang.Object implements org.springframework.beans.factory.parsing.SourceExtractor {
                        // @ts-ignore
                        constructor()
                        /**
                         * Simply returns the supplied {@code sourceCandidate} as-is.
                         * @param sourceCandidate the source metadata
                         * @return the supplied {#code sourceCandidate}
                         */
                        // @ts-ignore
                        extractSource(sourceCandidate: any, definingResource: Resource): java.lang.Object
                    }
                }
            }
        }
    }
}
