declare namespace org {
    namespace springframework {
        namespace core {
            namespace convert {
                /**
                 * Exception to be thrown when an actual type conversion attempt fails.
                 * @author Keith Donald
                 * @author Juergen Hoeller
                 * @since 3.0
                 */
                // @ts-ignore
                class ConversionFailedException extends org.springframework.core.convert.ConversionException {
                    /**
                     * Create a new conversion exception.
                     * @param sourceType the value's original type
                     * @param targetType the value's target type
                     * @param value the value we tried to convert
                     * @param cause the cause of the conversion failure
                     */
                    // @ts-ignore
                    constructor(sourceType: org.springframework.core.convert.TypeDescriptor, targetType: org.springframework.core.convert.TypeDescriptor, value: java.lang.Object | any, cause: java.lang.Throwable | Error)
                    /**
                     * Return the source type we tried to convert the value from.
                     */
                    // @ts-ignore
                    getSourceType(): org.springframework.core.convert.TypeDescriptor
                    /**
                     * Return the target type we tried to convert the value to.
                     */
                    // @ts-ignore
                    getTargetType(): org.springframework.core.convert.TypeDescriptor
                    /**
                     * Return the offending value.
                     */
                    // @ts-ignore
                    getValue(): any
                }
            }
        }
    }
}
