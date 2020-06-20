declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                /**
                 * Represents an instance that have a {@link Text} representation that should be
                 * used when this instance should be used inside a {@link Text}.
                 */
                // @ts-ignore
                interface TextRepresentable extends org.spongepowered.api.text.TextElement {
                    /**
                     * Gets the textual representation of this instance for its usage in other
                     * {@link Text} objects. This may but does not need to include
                     * {@link HoverAction hover texts} or other {@link TextAction actions}. This
                     * method is basically the {@link Object#toString() toString()} equivalent
                     * for {@link Text}s.
                     * @return The text instance representing this instance
                     */
                    // @ts-ignore
                    toText(): org.spongepowered.api.text.Text
                    // @ts-ignore
                    applyTo(builder: org.spongepowered.api.text.Text.Builder): void
                }
            }
        }
    }
}
