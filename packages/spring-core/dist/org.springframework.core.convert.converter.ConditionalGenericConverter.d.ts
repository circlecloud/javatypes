declare namespace org {
    namespace springframework {
        namespace core {
            namespace convert {
                namespace converter {
                    /**
                     * A {@link GenericConverter} that may conditionally execute based on attributes
                     * of the {@code source} and {@code target} {@link TypeDescriptor}.
                     * <p>See {@link ConditionalConverter} for details.
                     * @author Keith Donald
                     * @author Phillip Webb
                     * @since 3.0
                     * @see GenericConverter
                     * @see ConditionalConverter
                     */
                    // @ts-ignore
                    interface ConditionalGenericConverter extends org.springframework.core.convert.converter.GenericConverter, org.springframework.core.convert.converter.ConditionalConverter {
                    }
                }
            }
        }
    }
}
