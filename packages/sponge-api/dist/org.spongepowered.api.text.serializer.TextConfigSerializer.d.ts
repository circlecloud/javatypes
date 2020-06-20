declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace serializer {
                    /**
                     * Represents a {@link TypeSerializer} for {@link Text} objects. Serialization
                     * is handled by serializing the text to String with the
                     * {@link TextSerializers#JSON} serializer, loading the String into a
                     * {@link GsonConfigurationLoader}, and setting the value of the
                     * {@link ConfigurationNode} to the root node of the GsonConfigurationLoader.
                     * Although JSON is used for serialization internally, this has no effect on
                     * the actual configuration format the developer chooses to use.
                     */
                    // @ts-ignore
                    class TextConfigSerializer extends org.spongepowered.api.data.persistence.AbstractDataBuilder<org.spongepowered.api.text.Text> {
                        /**
                         * Creates a new {@link TextConfigSerializer}. Normally this should not
                         * need to be created more than once.
                         */
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        deserialize(type: object, value: ConfigurationNode): org.spongepowered.api.text.Text
                        // @ts-ignore
                        serialize(type: object, obj: org.spongepowered.api.text.Text, value: ConfigurationNode): void
                        // @ts-ignore
                        buildContent(container: org.spongepowered.api.data.DataView): java.util.Optional<org.spongepowered.api.text.Text>
                    }
                }
            }
        }
    }
}
