declare namespace org {
    namespace springframework {
        namespace validation {
            namespace beanvalidation {
                /**
                 * {@link LocalValidatorFactoryBean} subclass that simply turns
                 * {@link org.springframework.validation.Validator} calls into no-ops
                 * in case of no Bean Validation provider being available.
                 * <p>This is the actual class used by Spring's MVC configuration namespace,
                 * in case of the {@code javax.validation} API being present but no explicit
                 * Validator having been configured.
                 * @author Juergen Hoeller
                 * @since 4.0.1
                 */
                // @ts-ignore
                class OptionalValidatorFactoryBean extends org.springframework.validation.beanvalidation.LocalValidatorFactoryBean {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    afterPropertiesSet(): void
                }
            }
        }
    }
}
