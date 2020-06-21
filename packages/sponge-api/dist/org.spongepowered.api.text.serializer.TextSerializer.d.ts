declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace serializer {
                    /**
                     * Represents a serializer for {@link Text} instances that converts an input
                     * string into a formatted {@link Text} instance, or a {@link Text} instance
                     * into the string representation.
                     * <p>Custom implementations can be registered using
                     * the {@link GameRegistry}.</p>
                     */
                    // @ts-ignore
                    interface TextSerializer extends org.spongepowered.api.CatalogType {
                        /**
                         * Returns a string representation of the provided {@link Text} in a format
                         * that will be accepted by this {@link TextSerializer}'s
                         * {@link #deserialize(String)} method.
                         * @param text The text to serialize
                         * @return The string representation of this text
                         */
                        // @ts-ignore
                        serialize(text: org.spongepowered.api.text.Text): string
                        /**
                         * Returns a string representation of only the provided {@link Text}
                         * (without any children) in a format that will be accepted by this
                         * {@link TextSerializer}'s {@link #deserialize(String)} method.
                         * @param text The text to serialize
                         * @return The string representation of this text (without any children)
                         */
                        // @ts-ignore
                        serializeSingle(text: org.spongepowered.api.text.Text): string
                        /**
                         * Returns a {@link Text} instance from an appropriately formatted string.
                         * @param input The raw input to parse into a text
                         * @return The parsed text for the input string
                         * @throws TextParseException If an error occurs while parsing the text
                         */
                        // @ts-ignore
                        deserialize(input: java.lang.String | string): org.spongepowered.api.text.Text
                        /**
                         * Tries to return a {@link Text} instance from the provided input string.
                         * However, if the input string is not of a valid format, the returned
                         * {@link Text} object will be of the raw input, rather than throwing an
                         * exception.
                         * @param input The raw input to try to parse into a text
                         * @return The parsed text for the input string, or the raw input
                         */
                        // @ts-ignore
                        deserializeUnchecked(input: java.lang.String | string): org.spongepowered.api.text.Text
                    }
                }
            }
        }
    }
}
