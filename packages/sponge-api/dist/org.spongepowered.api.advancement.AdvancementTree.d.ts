declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace advancement {
                /**
                 * Represents a {@link Advancement} tree or tab menu. The tree will become
                 * visible to a {@link Player} once the root {@link Advancement} gets achieved.
                 */
                // @ts-ignore
                interface AdvancementTree extends org.spongepowered.api.CatalogType {
                    /**
                     * Creates a new {@link Builder} to create {@link AdvancementTree}s.
                     * @return The new builder
                     */
                    // @ts-ignore
                    builder(): org.spongepowered.api.advancement.AdvancementTree.Builder
                    /**
                     * Gets the root {@link Advancement}.
                     * @return The root advancement
                     */
                    // @ts-ignore
                    getRootAdvancement(): org.spongepowered.api.advancement.Advancement
                    /**
                     * Gets the background texture of this tree.
                     * @return The background texture
                     */
                    // @ts-ignore
                    getBackgroundPath(): string
                }
            }
        }
    }
}
