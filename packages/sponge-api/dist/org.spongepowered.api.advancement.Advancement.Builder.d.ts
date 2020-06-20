declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace advancement {
                namespace Advancement {
                    /**
                     * A builder to create {@link Advancement}s.
                     */
                    // @ts-ignore
                    interface Builder extends org.spongepowered.api.util.CatalogBuilder<org.spongepowered.api.advancement.Advancement, org.spongepowered.api.advancement.Advancement.Builder> {
                        /**
                         * Sets the parent {@link Advancement}. Defaults to {code null}.
                         * @param parent The parent advancement
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        parent(parent: org.spongepowered.api.advancement.Advancement): org.spongepowered.api.advancement.Advancement.Builder
                        /**
                         * Sets the {@link AdvancementCriterion} that should be used
                         * for the advancement. Defaults to {@link AdvancementCriterion#EMPTY}.
                         * @param criterion The criterion
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        criterion(criterion: org.spongepowered.api.advancement.criteria.AdvancementCriterion): org.spongepowered.api.advancement.Advancement.Builder
                        /**
                         * Sets the {@link DisplayInfo}. Defaults to {code null}.
                         * @param displayInfo The display info
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        displayInfo(displayInfo: org.spongepowered.api.advancement.DisplayInfo): org.spongepowered.api.advancement.Advancement.Builder
                        // @ts-ignore
                        id(id: string): org.spongepowered.api.advancement.Advancement.Builder
                        /**
                         * Sets the name of the {@link Advancement}. Defaults to
                         * the plain {@link DisplayInfo#getTitle()} if the
                         * {@link DisplayInfo} is present. Otherwise will it default
                         * to the identifier ({@link #id(String)}).
                         * @param name The name
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        name(name: string): org.spongepowered.api.advancement.Advancement.Builder
                        // @ts-ignore
                        build(): org.spongepowered.api.advancement.Advancement
                        // @ts-ignore
                        from(value: org.spongepowered.api.advancement.Advancement): org.spongepowered.api.advancement.Advancement.Builder
                    }
                }
            }
        }
    }
}
