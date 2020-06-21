declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace advancement {
                namespace criteria {
                    namespace AdvancementCriterion {
                        /**
                         * A base builder to create {@link AdvancementCriterion}s.
                         */
                        // @ts-ignore
                        interface BaseBuilder<T extends org.spongepowered.api.advancement.criteria.AdvancementCriterion, B extends org.spongepowered.api.advancement.criteria.AdvancementCriterion.BaseBuilder<T, B>> extends org.spongepowered.api.util.ResettableBuilder<T, B> {
                            /**
                             * Sets the {@link FilteredTrigger}.
                             * @param trigger The filtered trigger
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            trigger(trigger: org.spongepowered.api.advancement.criteria.trigger.FilteredTrigger<any>): B
                            /**
                             * Sets the name of the {@link AdvancementCriterion}. Names can be
                             * shared between multiple criteria, although it isn't allowed when
                             * using them for the same {@link Advancement}.
                             * @param name The name
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            name(name: java.lang.String | string): B
                            /**
                             * Builds a new {@link AdvancementCriterion}.
                             * @return The criterion
                             */
                            // @ts-ignore
                            build(): T
                        }
                    }
                }
            }
        }
    }
}
