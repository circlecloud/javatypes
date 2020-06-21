declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace advancement {
                /**
                 * Represents the tree (tab) layout of a {@link AdvancementTree}.
                 */
                // @ts-ignore
                interface TreeLayout {
                    /**
                     * Gets the {@link AdvancementTree} this layout is assigned to.
                     * @return The tree
                     */
                    // @ts-ignore
                    getTree(): org.spongepowered.api.advancement.AdvancementTree
                    /**
                     * Gets all the {@link TreeLayoutElement}s that are
                     * present in this layout.
                     * @return The tree layout elements
                     */
                    // @ts-ignore
                    getElements(): Array<org.spongepowered.api.advancement.TreeLayoutElement>
                    /**
                     * Gets the {@link TreeLayoutElement} for the specified {@link Advancement},
                     * {@link Optional#empty()} will be returned if the advancement is not present
                     * in the tree or if there is no {@link DisplayInfo} present.
                     * @param advancement The advancement
                     * @return The tree layout element
                     */
                    // @ts-ignore
                    getElement(advancement: org.spongepowered.api.advancement.Advancement): java.util.Optional<org.spongepowered.api.advancement.TreeLayoutElement>
                }
            }
        }
    }
}
