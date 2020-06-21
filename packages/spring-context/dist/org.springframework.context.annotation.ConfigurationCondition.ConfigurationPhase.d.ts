declare namespace org {
    namespace springframework {
        namespace context {
            namespace annotation {
                namespace ConfigurationCondition {
                    /**
                     * The various configuration phases where the condition could be evaluated.
                     */
                    // @ts-ignore
                    class ConfigurationPhase extends java.lang.Enum<org.springframework.context.annotation.ConfigurationCondition.ConfigurationPhase> {
                        /**
                         * The {@link Condition} should be evaluated as a {@code @Configuration}
                         * class is being parsed.
                         * <p>If the condition does not match at this point, the {@code @Configuration}
                         * class will not be added.
                         */
                        // @ts-ignore
                        readonly PARSE_CONFIGURATION: org.springframework.context.annotation.ConfigurationCondition.ConfigurationPhase
                        /**
                         * The {@link Condition} should be evaluated when adding a regular
                         * (non {@code @Configuration}) bean. The condition will not prevent
                         * {@code @Configuration} classes from being added.
                         * <p>At the time that the condition is evaluated, all {@code @Configuration}s
                         * will have been parsed.
                         */
                        // @ts-ignore
                        readonly REGISTER_BEAN: org.springframework.context.annotation.ConfigurationCondition.ConfigurationPhase
                        // @ts-ignore
                        values(): org.springframework.context.annotation.ConfigurationCondition.ConfigurationPhase[]
                        // @ts-ignore
                        valueOf(name: java.lang.String | string): org.springframework.context.annotation.ConfigurationCondition.ConfigurationPhase
                    }
                }
            }
        }
    }
}
