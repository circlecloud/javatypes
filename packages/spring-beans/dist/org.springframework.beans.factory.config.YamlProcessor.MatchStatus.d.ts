declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace config {
                    namespace YamlProcessor {
                        /**
                         * Status returned from {@link DocumentMatcher#matches(java.util.Properties)}.
                         */
                        // @ts-ignore
                        class MatchStatus extends java.lang.Enum<org.springframework.beans.factory.config.YamlProcessor.MatchStatus> {
                            // @ts-ignore
                            values(): org.springframework.beans.factory.config.YamlProcessor.MatchStatus[]
                            // @ts-ignore
                            valueOf(name: string): org.springframework.beans.factory.config.YamlProcessor.MatchStatus
                            /**
                             * Compare two {@link MatchStatus} items, returning the most specific status.
                             */
                            // @ts-ignore
                            getMostSpecific(a: org.springframework.beans.factory.config.YamlProcessor.MatchStatus, b: org.springframework.beans.factory.config.YamlProcessor.MatchStatus): org.springframework.beans.factory.config.YamlProcessor.MatchStatus
                        }
                    }
                }
            }
        }
    }
}
