declare namespace org {
    namespace springframework {
        namespace core {
            namespace convert {
                namespace converter {
                    /**
                     * For registering converters with a type conversion system.
                     * @author Keith Donald
                     * @author Juergen Hoeller
                     * @since 3.0
                     */
                    // @ts-ignore
                    interface ConverterRegistry {
                        /**
                         * Add a plain converter to this registry.
                         * The convertible source/target type pair is derived from the Converter's parameterized types.
                         * @throws IllegalArgumentException if the parameterized types could not be resolved
                         */
                        // @ts-ignore
                        addConverter(converter: org.springframework.core.convert.converter.Converter<any, ?>): void
                        /**
                         * Add a plain converter to this registry.
                         * The convertible source/target type pair is specified explicitly.
                         * <p>Allows for a Converter to be reused for multiple distinct pairs without
                         * having to create a Converter class for each pair.
                         * @since 3.1
                         */
                        // @ts-ignore
                        addConverter<S, T>(sourceType: java.lang.Class<S>, targetType: java.lang.Class<T>, converter: org.springframework.core.convert.converter.Converter<any super S, T>): void
                        /**
                         * Add a generic converter to this registry.
                         */
                        // @ts-ignore
                        addConverter(converter: org.springframework.core.convert.converter.GenericConverter): void
                        /**
                         * Add a ranged converter factory to this registry.
                         * The convertible source/target type pair is derived from the ConverterFactory's parameterized types.
                         * @throws IllegalArgumentException if the parameterized types could not be resolved
                         */
                        // @ts-ignore
                        addConverterFactory(factory: org.springframework.core.convert.converter.ConverterFactory<any, ?>): void
                        /**
                         * Remove any converters from {@code sourceType} to {@code targetType}.
                         * @param sourceType the source type
                         * @param targetType the target type
                         */
                        // @ts-ignore
                        removeConvertible(sourceType: java.lang.Class<any>, targetType: java.lang.Class<any>): void
                    }
                }
            }
        }
    }
}
