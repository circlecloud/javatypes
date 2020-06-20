declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace serializer {
                    /**
                     * An implementation of {@link TypeSerializer} to allow serialization of
                     * {@link TextFormat}s directly to a configuration file.
                     */
                    // @ts-ignore
                    class TextFormatConfigSerializer extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        deserialize(type: object, value: ConfigurationNode): org.spongepowered.api.text.format.TextFormat
                        // @ts-ignore
                        serialize(type: object, obj: org.spongepowered.api.text.format.TextFormat, value: ConfigurationNode): void
                    }
                }
            }
        }
    }
}
