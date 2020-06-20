declare namespace org {
    namespace springframework {
        namespace core {
            namespace convert {
                namespace converter {
                    /**
                     * Generic converter interface for converting between two or more types.
                     * <p>This is the most flexible of the Converter SPI interfaces, but also the most complex.
                     * It is flexible in that a GenericConverter may support converting between multiple source/target
                     * type pairs (see {@link #getConvertibleTypes()}. In addition, GenericConverter implementations
                     * have access to source/target {@link TypeDescriptor field context} during the type conversion
                     * process. This allows for resolving source and target field metadata such as annotations and
                     * generics information, which can be used to influence the conversion logic.
                     * <p>This interface should generally not be used when the simpler {@link Converter} or
                     * {@link ConverterFactory} interface is sufficient.
                     * <p>Implementations may additionally implement {@link ConditionalConverter}.
                     * @author Keith Donald
                     * @author Juergen Hoeller
                     * @since 3.0
                     * @see TypeDescriptor
                     * @see Converter
                     * @see ConverterFactory
                     * @see ConditionalConverter
                     */
                    // @ts-ignore
                    interface GenericConverter {
                        /**
                         * Return the source and target types that this converter can convert between.
                         * <p>Each entry is a convertible source-to-target type pair.
                         * <p>For {@link ConditionalConverter conditional converters} this method may return
                         * {@code null} to indicate all source-to-target pairs should be considered.
                         */
                        // @ts-ignore
                        getConvertibleTypes(): java.util.Set<org.springframework.core.convert.converter.GenericConverter.ConvertiblePair>
                        /**
                         * Convert the source object to the targetType described by the {@code TypeDescriptor}.
                         * @param source the source object to convert (may be {#code null})
                         * @param sourceType the type descriptor of the field we are converting from
                         * @param targetType the type descriptor of the field we are converting to
                         * @return the converted object
                         */
                        // @ts-ignore
                        convert(source: any, sourceType: org.springframework.core.convert.TypeDescriptor, targetType: org.springframework.core.convert.TypeDescriptor): java.lang.Object
                    }
                }
            }
        }
    }
}
