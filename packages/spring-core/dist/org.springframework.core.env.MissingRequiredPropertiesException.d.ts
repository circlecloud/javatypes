declare namespace org {
    namespace springframework {
        namespace core {
            namespace env {
                /**
                 * Exception thrown when required properties are not found.
                 * @author Chris Beams
                 * @since 3.1
                 * @see ConfigurablePropertyResolver#setRequiredProperties(String...)
                 * @see ConfigurablePropertyResolver#validateRequiredProperties()
                 * @see org.springframework.context.support.AbstractApplicationContext#prepareRefresh()
                 */
                // @ts-ignore
                class MissingRequiredPropertiesException extends java.lang.IllegalStateException {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    getMessage(): string
                    /**
                     * Return the set of properties marked as required but not present
                     * upon validation.
                     * @see ConfigurablePropertyResolver#setRequiredProperties(String...)
                     * @see ConfigurablePropertyResolver#validateRequiredProperties()
                     */
                    // @ts-ignore
                    getMissingRequiredProperties(): Array<java.lang.String | string>
                }
            }
        }
    }
}
