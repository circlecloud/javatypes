declare namespace org {
    namespace springframework {
        namespace context {
            namespace annotation {
                /**
                 * A {@link Condition} that offers more fine-grained control when used with
                 * {@code @Configuration}. Allows certain {@link Condition Conditions} to adapt when they match
                 * based on the configuration phase. For example, a condition that checks if a bean
                 * has already been registered might choose to only be evaluated during the
                 * {@link ConfigurationPhase#REGISTER_BEAN REGISTER_BEAN} {@link ConfigurationPhase}.
                 * @author Phillip Webb
                 * @since 4.0
                 * @see Configuration
                 */
                // @ts-ignore
                interface ConfigurationCondition extends org.springframework.context.annotation.Condition {
                    /**
                     * Return the {@link ConfigurationPhase} in which the condition should be evaluated.
                     */
                    // @ts-ignore
                    getConfigurationPhase(): org.springframework.context.annotation.ConfigurationCondition.ConfigurationPhase
                }
            }
        }
    }
}
