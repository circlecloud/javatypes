declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace config {
                    namespace YamlProcessor {
                        /**
                         * Callback interface used to process the YAML parsing results.
                         */
                        // @ts-ignore
                        interface MatchCallback {
                            /**
                             * Process the given representation of the parsing results.
                             * @param properties the properties to process (as a flattened
                             *  representation with indexed keys in case of a collection or map)
                             * @param map the result map (preserving the original value structure
                             *  in the YAML document)
                             */
                            // @ts-ignore
                            process(properties: java.util.Properties, map: java.util.Map<java.lang.String, java.lang.Object>): void
                        }
                    }
                }
            }
        }
    }
}
