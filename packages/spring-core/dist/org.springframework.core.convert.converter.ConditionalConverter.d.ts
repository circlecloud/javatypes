declare namespace org {
    namespace springframework {
        namespace core {
            namespace convert {
                namespace converter {
                    /**
                     * Allows a {@link Converter}, {@link GenericConverter} or {@link ConverterFactory} to
                     * conditionally execute based on attributes of the {@code source} and {@code target}
                     * {@link TypeDescriptor}.
                     * <p>Often used to selectively match custom conversion logic based on the presence of a
                     * field or class-level characteristic, such as an annotation or method. For example, when
                     * converting from a String field to a Date field, an implementation might return
                     * {@code true} if the target field has also been annotated with {@code @DateTimeFormat}.
                     * <p>As another example, when converting from a String field to an {@code Account} field,
                     * an implementation might return {@code true} if the target Account class defines a
                     * {@code public static findAccount(String)} method.
                     * @author Phillip Webb
                     * @author Keith Donald
                     * @since 3.2
                     * @see Converter
                     * @see GenericConverter
                     * @see ConverterFactory
                     * @see ConditionalGenericConverter
                     */
                    // @ts-ignore
                    interface ConditionalConverter {
                        /**
                         * Should the conversion from {@code sourceType} to {@code targetType} currently under
                         * consideration be selected?
                         * @param sourceType the type descriptor of the field we are converting from
                         * @param targetType the type descriptor of the field we are converting to
                         * @return true if conversion should be performed, false otherwise
                         */
                        // @ts-ignore
                        matches(sourceType: org.springframework.core.convert.TypeDescriptor, targetType: org.springframework.core.convert.TypeDescriptor): boolean
                    }
                }
            }
        }
    }
}
