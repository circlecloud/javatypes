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
                            /**
                             * A match was found.
                             */
                            // @ts-ignore
                            readonly FOUND: org.springframework.beans.factory.config.YamlProcessor.MatchStatus
                            /**
                             * No match was found.
                             */
                            // @ts-ignore
                            readonly NOT_FOUND: org.springframework.beans.factory.config.YamlProcessor.MatchStatus
                            /**
                             * The matcher should not be considered.
                             */
                            // @ts-ignore
                            readonly ABSTAIN: org.springframework.beans.factory.config.YamlProcessor.MatchStatus
                            // @ts-ignore
                            values(): org.springframework.beans.factory.config.YamlProcessor.MatchStatus[]
                            // @ts-ignore
                            valueOf(name: java.lang.String | string): org.springframework.beans.factory.config.YamlProcessor.MatchStatus
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
