declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace config {
                    namespace YamlProcessor {
                        /**
                         * Strategy interface used to test if properties match.
                         */
                        // @ts-ignore
                        interface DocumentMatcher {
                            /**
                             * Test if the given properties match.
                             * @param properties the properties to test
                             * @return the status of the match
                             */
                            // @ts-ignore
                            matches(properties: java.util.Properties): org.springframework.beans.factory.config.YamlProcessor.MatchStatus
                        }
                    }
                }
            }
        }
    }
}
