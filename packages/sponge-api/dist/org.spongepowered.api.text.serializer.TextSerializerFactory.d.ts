declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace serializer {
                    /**
                     * Internal implementation factory: Use {@link TextSerializers} instead.
                     */
                    // @ts-ignore
                    interface TextSerializerFactory {
                        /**
                         * Returns a representation that accepts and outputs legacy color codes,
                         * using the provided legacy character.
                         * @param legacyChar The legacy character to parse and output using
                         * @return The appropriate legacy representation handler
                         */
                        // @ts-ignore
                        getFormattingCodeTextSerializer(legacyChar: string): org.spongepowered.api.text.serializer.FormattingCodeTextSerializer
                    }
                }
            }
        }
    }
}
