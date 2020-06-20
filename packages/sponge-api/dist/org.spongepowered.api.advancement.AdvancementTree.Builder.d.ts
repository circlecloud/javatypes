declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace advancement {
                namespace AdvancementTree {
                    /**
                     * A builder to create {@link AdvancementTree}s.
                     */
                    // @ts-ignore
                    interface Builder extends org.spongepowered.api.util.CatalogBuilder<org.spongepowered.api.advancement.AdvancementTree, org.spongepowered.api.advancement.AdvancementTree.Builder> {
                        /**
                         * Sets the root {@link Advancement}. The root advancement MUST have
                         * {@link DisplayInfo} present.
                         * @param rootAdvancement The root advancement
                         * @return This builder, for chaining
                         * @throws IllegalArgumentException If the display info is missing
                         */
                        // @ts-ignore
                        rootAdvancement(rootAdvancement: org.spongepowered.api.advancement.Advancement): org.spongepowered.api.advancement.AdvancementTree.Builder
                        /**
                         * Sets the background of {@link AdvancementTree}.
                         * <p>Defaults to the stone background:
                         * {@code minecraft:textures/gui/advancements/backgrounds/stone.png}</p>
                         * @param background The background
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        background(background: string): org.spongepowered.api.advancement.AdvancementTree.Builder
                        // @ts-ignore
                        id(id: string): org.spongepowered.api.advancement.AdvancementTree.Builder
                        /**
                         * Sets the name of the {@link AdvancementTree}. Defaults to
                         * the plain {@link DisplayInfo#getTitle()} of the root
                         * {@link Advancement} if {@link DisplayInfo} is present.
                         * Otherwise will it default to the identifier ({@link #id(String)}).
                         * @param name The name
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        name(name: string): org.spongepowered.api.advancement.AdvancementTree.Builder
                        // @ts-ignore
                        build(): org.spongepowered.api.advancement.AdvancementTree
                        // @ts-ignore
                        from(value: org.spongepowered.api.advancement.AdvancementTree): org.spongepowered.api.advancement.AdvancementTree.Builder
                    }
                }
            }
        }
    }
}
