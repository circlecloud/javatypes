declare namespace org {
    namespace springframework {
        namespace core {
            namespace annotation {
                /**
                 * Thrown by {@link AnnotationUtils} and <em>synthesized annotations</em>
                 * if an annotation is improperly configured.
                 * @author Sam Brannen
                 * @since 4.2
                 * @see AnnotationUtils
                 * @see SynthesizedAnnotation
                 */
                // @ts-ignore
                class AnnotationConfigurationException extends org.springframework.core.NestedRuntimeException {
                    /**
                     * Construct a new {@code AnnotationConfigurationException} with the
                     * supplied message.
                     * @param message the detail message
                     */
                    // @ts-ignore
                    constructor(message: java.lang.String | string)
                    /**
                     * Construct a new {@code AnnotationConfigurationException} with the
                     * supplied message and cause.
                     * @param message the detail message
                     * @param cause the root cause
                     */
                    // @ts-ignore
                    constructor(message: java.lang.String | string, cause: java.lang.Throwable | Error)
                }
            }
        }
    }
}
