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
                            public static readonly FOUND: org.springframework.beans.factory.config.YamlProcessor.MatchStatus
                            /**
                             * No match was found.
                             */
                            // @ts-ignore
                            public static readonly NOT_FOUND: org.springframework.beans.factory.config.YamlProcessor.MatchStatus
                            /**
                             * The matcher should not be considered.
                             */
                            // @ts-ignore
                            public static readonly ABSTAIN: org.springframework.beans.factory.config.YamlProcessor.MatchStatus
                            // @ts-ignore
                            public static values(): org.springframework.beans.factory.config.YamlProcessor.MatchStatus[]
                            // @ts-ignore
                            public static valueOf(name: java.lang.String | string): org.springframework.beans.factory.config.YamlProcessor.MatchStatus
                            /**
                             * Compare two {@link MatchStatus} items, returning the most specific status.
                             */
                            // @ts-ignore
                            public static getMostSpecific(a: org.springframework.beans.factory.config.YamlProcessor.MatchStatus, b: org.springframework.beans.factory.config.YamlProcessor.MatchStatus): org.springframework.beans.factory.config.YamlProcessor.MatchStatus
                        }
                    }
                }
            }
        }
    }
}
