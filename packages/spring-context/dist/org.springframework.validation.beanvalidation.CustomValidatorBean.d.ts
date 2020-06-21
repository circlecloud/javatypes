declare namespace org {
    namespace springframework {
        namespace validation {
            namespace beanvalidation {
                /**
                 * Configurable bean class that exposes a specific JSR-303 Validator
                 * through its original interface as well as through the Spring
                 * {@link org.springframework.validation.Validator} interface.
                 * @author Juergen Hoeller
                 * @since 3.0
                 */
                // @ts-ignore
                class CustomValidatorBean extends org.springframework.validation.beanvalidation.SpringValidatorAdapter {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set the ValidatorFactory to obtain the target Validator from.
                     * <p>Default is {@link javax.validation.Validation#buildDefaultValidatorFactory()}.
                     */
                    // @ts-ignore
                    public setValidatorFactory(validatorFactory: ValidatorFactory): void
                    /**
                     * Specify a custom MessageInterpolator to use for this Validator.
                     */
                    // @ts-ignore
                    public setMessageInterpolator(messageInterpolator: MessageInterpolator): void
                    /**
                     * Specify a custom TraversableResolver to use for this Validator.
                     */
                    // @ts-ignore
                    public setTraversableResolver(traversableResolver: TraversableResolver): void
                    // @ts-ignore
                    public afterPropertiesSet(): void
                }
            }
        }
    }
}
