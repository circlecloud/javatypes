declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace config {
                    namespace YamlProcessor {
                        /**
                         * Method to use for resolving resources.
                         */
                        // @ts-ignore
                        class ResolutionMethod extends java.lang.Enum<org.springframework.beans.factory.config.YamlProcessor.ResolutionMethod> {
                            /**
                             * Replace values from earlier in the list.
                             */
                            // @ts-ignore
                            public static readonly OVERRIDE: org.springframework.beans.factory.config.YamlProcessor.ResolutionMethod
                            /**
                             * Replace values from earlier in the list, ignoring any failures.
                             */
                            // @ts-ignore
                            public static readonly OVERRIDE_AND_IGNORE: org.springframework.beans.factory.config.YamlProcessor.ResolutionMethod
                            /**
                             * Take the first resource in the list that exists and use just that.
                             */
                            // @ts-ignore
                            public static readonly FIRST_FOUND: org.springframework.beans.factory.config.YamlProcessor.ResolutionMethod
                            // @ts-ignore
                            public static values(): org.springframework.beans.factory.config.YamlProcessor.ResolutionMethod[]
                            // @ts-ignore
                            public static valueOf(name: java.lang.String | string): org.springframework.beans.factory.config.YamlProcessor.ResolutionMethod
                        }
                    }
                }
            }
        }
    }
}
