declare namespace org {
    namespace springframework {
        namespace core {
            namespace convert {
                namespace support {
                    /**
                     * Base {@link ConversionService} implementation suitable for use in most environments.
                     * Indirectly implements {@link ConverterRegistry} as registration API through the
                     * {@link ConfigurableConversionService} interface.
                     * @author Keith Donald
                     * @author Juergen Hoeller
                     * @author Chris Beams
                     * @author Phillip Webb
                     * @author David Haraburda
                     * @since 3.0
                     */
                    // @ts-ignore
                    class GenericConversionService extends java.lang.Object implements org.springframework.core.convert.support.ConfigurableConversionService {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        addConverter(converter: org.springframework.core.convert.converter.Converter<any, ?>): void
                        // @ts-ignore
                        addConverter<S, T>(sourceType: java.lang.Class<S>, targetType: java.lang.Class<T>, converter: org.springframework.core.convert.converter.Converter<any super S, T>): void
                        // @ts-ignore
                        addConverter(converter: org.springframework.core.convert.converter.GenericConverter): void
                        // @ts-ignore
                        addConverterFactory(factory: org.springframework.core.convert.converter.ConverterFactory<any, ?>): void
                        // @ts-ignore
                        removeConvertible(sourceType: java.lang.Class<any>, targetType: java.lang.Class<any>): void
                        // @ts-ignore
                        canConvert(sourceType: java.lang.Class<any>, targetType: java.lang.Class<any>): boolean
                        // @ts-ignore
                        canConvert(sourceType: org.springframework.core.convert.TypeDescriptor, targetType: org.springframework.core.convert.TypeDescriptor): boolean
                        /**
                         * Return whether conversion between the source type and the target type can be bypassed.
                         * <p>More precisely, this method will return true if objects of sourceType can be
                         * converted to the target type by returning the source object unchanged.
                         * @param sourceType context about the source type to convert from
                         *  (may be {#code null} if source is {@code null})
                         * @param targetType context about the target type to convert to (required)
                         * @return {#code true} if conversion can be bypassed; {@code false} otherwise
                         * @throws IllegalArgumentException if targetType is {#code null}
                         * @since 3.2
                         */
                        // @ts-ignore
                        canBypassConvert(sourceType: org.springframework.core.convert.TypeDescriptor, targetType: org.springframework.core.convert.TypeDescriptor): boolean
                        // @ts-ignore
                        convert<T>(source: any, targetType: java.lang.Class<T>): T
                        // @ts-ignore
                        convert(source: any, sourceType: org.springframework.core.convert.TypeDescriptor, targetType: org.springframework.core.convert.TypeDescriptor): java.lang.Object
                        /**
                         * Convenience operation for converting a source object to the specified targetType,
                         * where the target type is a descriptor that provides additional conversion context.
                         * Simply delegates to {@link #convert(Object, TypeDescriptor, TypeDescriptor)} and
                         * encapsulates the construction of the source type descriptor using
                         * {@link TypeDescriptor#forObject(Object)}.
                         * @param source the source object
                         * @param targetType the target type
                         * @return the converted value
                         * @throws ConversionException if a conversion exception occurred
                         * @throws IllegalArgumentException if targetType is {#code null},
                         *  or sourceType is {@code null} but source is not {@code null}
                         */
                        // @ts-ignore
                        convert(source: any, targetType: org.springframework.core.convert.TypeDescriptor): java.lang.Object
                        // @ts-ignore
                        toString(): java.lang.String
                        /**
                         * Template method to convert a {@code null} source.
                         * <p>The default implementation returns {@code null} or the Java 8
                         * {@link java.util.Optional#empty()} instance if the target type is
                         * {@code java.util.Optional}. Subclasses may override this to return
                         * custom {@code null} objects for specific target types.
                         * @param sourceType the source type to convert from
                         * @param targetType the target type to convert to
                         * @return the converted null object
                         */
                        // @ts-ignore
                        convertNullSource(sourceType: org.springframework.core.convert.TypeDescriptor, targetType: org.springframework.core.convert.TypeDescriptor): java.lang.Object
                        /**
                         * Hook method to lookup the converter for a given sourceType/targetType pair.
                         * First queries this ConversionService's converter cache.
                         * On a cache miss, then performs an exhaustive search for a matching converter.
                         * If no converter matches, returns the default converter.
                         * @param sourceType the source type to convert from
                         * @param targetType the target type to convert to
                         * @return the generic converter that will perform the conversion,
                         *  or {#code null} if no suitable converter was found
                         * @see #getDefaultConverter(TypeDescriptor, TypeDescriptor)
                         */
                        // @ts-ignore
                        getConverter(sourceType: org.springframework.core.convert.TypeDescriptor, targetType: org.springframework.core.convert.TypeDescriptor): org.springframework.core.convert.converter.GenericConverter
                        /**
                         * Return the default converter if no converter is found for the given sourceType/targetType pair.
                         * <p>Returns a NO_OP Converter if the source type is assignable to the target type.
                         * Returns {@code null} otherwise, indicating no suitable converter could be found.
                         * @param sourceType the source type to convert from
                         * @param targetType the target type to convert to
                         * @return the default generic converter that will perform the conversion
                         */
                        // @ts-ignore
                        getDefaultConverter(sourceType: org.springframework.core.convert.TypeDescriptor, targetType: org.springframework.core.convert.TypeDescriptor): org.springframework.core.convert.converter.GenericConverter
                    }
                }
            }
        }
    }
}
