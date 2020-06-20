declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace advancement {
                /**
                 * An advancement.
                 */
                // @ts-ignore
                interface Advancement extends org.spongepowered.api.CatalogType, org.spongepowered.api.text.TextRepresentable {
                    /**
                     * Creates a new {@link Builder} to create {@link Advancement}s.
                     * @return The new builder
                     */
                    // @ts-ignore
                    builder(): org.spongepowered.api.advancement.Advancement.Builder
                    /**
                     * Gets the {@link AdvancementTree} this advancement is located in,
                     * will only be present if the root advancement was used to create
                     * a {@link AdvancementTree}.
                     * @return The advancement tree
                     */
                    // @ts-ignore
                    getTree(): java.util.Optional<org.spongepowered.api.advancement.AdvancementTree>
                    /**
                     * Gets all the children {@link Advancement}s.
                     * @return The children advancements
                     */
                    // @ts-ignore
                    getChildren(): java.util.Collection<org.spongepowered.api.advancement.Advancement>
                    /**
                     * Gets all the {@link AdvancementCriterion} that should be achieved
                     * before this advancement is unlocked. {@link AdvancementCriterion#EMPTY}
                     * will be returned if no criterion was assigned.
                     * <p>This {@link AdvancementCriterion} can be a AND or OR operation that
                     * contains multiple possible {@link AdvancementCriterion}s.</p>
                     * @return The criterion
                     */
                    // @ts-ignore
                    getCriterion(): org.spongepowered.api.advancement.criteria.AdvancementCriterion
                    /**
                     * Gets the parent {@link Advancement}, if present.
                     * @return The parent advancement, if present
                     */
                    // @ts-ignore
                    getParent(): java.util.Optional<org.spongepowered.api.advancement.Advancement>
                    /**
                     * Gets the {@link DisplayInfo} of this advancement, if present.
                     * @return The display info, if present
                     */
                    // @ts-ignore
                    getDisplayInfo(): java.util.Optional<org.spongepowered.api.advancement.DisplayInfo>
                    /**
                     * Gets the {@link Text} lines that would be used to
                     * display a toast notification.
                     * @return The text lines
                     */
                    // @ts-ignore
                    toToastText(): java.util.List<org.spongepowered.api.text.Text>
                }
            }
        }
    }
}
