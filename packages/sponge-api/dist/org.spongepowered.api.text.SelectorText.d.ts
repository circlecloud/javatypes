declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                /**
                 * Represents a {@link Text} containing a selector that will be replaced by the
                 * names of the matching entities on the client.
                 * @see Selector
                 * @see Builder
                 */
                // @ts-ignore
                class SelectorText extends org.spongepowered.api.text.Text {
                    /**
                     * Returns the selector used in this {@link Text}.
                     * @return The selector of this text
                     */
                    // @ts-ignore
                    getSelector(): org.spongepowered.api.text.selector.Selector
                    // @ts-ignore
                    toBuilder(): org.spongepowered.api.text.SelectorText.Builder
                    // @ts-ignore
                    equals(o: any): boolean
                    // @ts-ignore
                    hashCode(): int
                }
            }
        }
    }
}
