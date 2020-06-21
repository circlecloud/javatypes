declare namespace org {
    namespace springframework {
        namespace validation {
            namespace beanvalidation {
                /**
                 * Simple {@link BeanPostProcessor} that checks JSR-303 constraint annotations
                 * in Spring-managed beans, throwing an initialization exception in case of
                 * constraint violations right before calling the bean's init method (if any).
                 * @author Juergen Hoeller
                 * @since 3.0
                 */
                // @ts-ignore
                class BeanValidationPostProcessor extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set the JSR-303 Validator to delegate to for validating beans.
                     * <p>Default is the default ValidatorFactory's default Validator.
                     */
                    // @ts-ignore
                    public setValidator(validator: Validator): void
                    /**
                     * Set the JSR-303 ValidatorFactory to delegate to for validating beans,
                     * using its default Validator.
                     * <p>Default is the default ValidatorFactory's default Validator.
                     * @see javax.validation.ValidatorFactory#getValidator()
                     */
                    // @ts-ignore
                    public setValidatorFactory(validatorFactory: ValidatorFactory): void
                    /**
                     * Choose whether to perform validation after bean initialization
                     * (i.e. after init methods) instead of before (which is the default).
                     * <p>Default is "false" (before initialization). Switch this to "true"
                     * (after initialization) if you would like to give init methods a chance
                     * to populate constrained fields before they get validated.
                     */
                    // @ts-ignore
                    public setAfterInitialization(afterInitialization: boolean): void
                    // @ts-ignore
                    public afterPropertiesSet(): void
                    // @ts-ignore
                    public postProcessBeforeInitialization(bean: java.lang.Object | any, beanName: java.lang.String | string): any
                    // @ts-ignore
                    public postProcessAfterInitialization(bean: java.lang.Object | any, beanName: java.lang.String | string): any
                    /**
                     * Perform validation of the given bean.
                     * @param bean the bean instance to validate
                     * @see javax.validation.Validator#validate
                     */
                    // @ts-ignore
                    doValidate(bean: java.lang.Object | any): void
                }
            }
        }
    }
}
