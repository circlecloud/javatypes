declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace serializer {
                    /**
                     * Represents a {@link TextSerializer} that accepts input in any format and will
                     * therefore never throw an exception when parsing a serialized {@link Text}.
                     * @see TextSerializer
                     */
                    // @ts-ignore
                    interface SafeTextSerializer extends org.spongepowered.api.text.serializer.TextSerializer {
                        // @ts-ignore
                        deserialize(input: string): org.spongepowered.api.text.Text
                        // @ts-ignore
                        deserializeUnchecked(input: string): org.spongepowered.api.text.Text
                    }
                }
            }
        }
    }
}
