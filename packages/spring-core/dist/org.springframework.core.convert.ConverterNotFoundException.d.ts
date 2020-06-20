declare namespace org {
    namespace springframework {
        namespace core {
            namespace convert {
                /**
                 * Exception to be thrown when a suitable converter could not be found
                 * in a given conversion service.
                 * @author Keith Donald
                 * @author Juergen Hoeller
                 * @since 3.0
                 */
                // @ts-ignore
                class ConverterNotFoundException extends org.springframework.core.convert.ConversionException {
                    /**
                     * Create a new conversion executor not found exception.
                     * @param sourceType the source type requested to convert from
                     * @param targetType the target type requested to convert to
                     */
                    // @ts-ignore
                    constructor(sourceType: org.springframework.core.convert.TypeDescriptor, targetType: org.springframework.core.convert.TypeDescriptor)
                    /**
                     * Return the source type that was requested to convert from.
                     */
                    // @ts-ignore
                    getSourceType(): org.springframework.core.convert.TypeDescriptor
                    /**
                     * Return the target type that was requested to convert to.
                     */
                    // @ts-ignore
                    getTargetType(): org.springframework.core.convert.TypeDescriptor
                }
            }
        }
    }
}
