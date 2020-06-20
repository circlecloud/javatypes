declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                /**
                 * Represents anything that can be applied to a {@link Text.Builder}.
                 */
                // @ts-ignore
                interface TextElement {
                    /**
                     * Applies this element to the end of the specified builder.
                     * @param builder Text builder to apply to
                     */
                    // @ts-ignore
                    applyTo(builder: org.spongepowered.api.text.Text.Builder): void
                }
            }
        }
    }
}
