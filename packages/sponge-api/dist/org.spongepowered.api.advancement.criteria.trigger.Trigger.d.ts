declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace advancement {
                namespace criteria {
                    namespace trigger {
                        /**
                         * Represents a source that can trigger a {@link AdvancementCriterion}.
                         * @param <C> The configuration type
                         */
                        // @ts-ignore
                        interface Trigger<C extends org.spongepowered.api.advancement.criteria.trigger.FilteredTriggerConfiguration> extends org.spongepowered.api.CatalogType {
                            /**
                             * Creates a new {@link Builder} which can be used to create
                             * a {@link Trigger}.
                             * @return The builder
                             */
                            // @ts-ignore
                            builder(): org.spongepowered.api.advancement.criteria.trigger.Trigger.Builder<any>
                            /**
                             * Gets the type of the used {@link FilteredTriggerConfiguration}.
                             * @return The configuration type
                             */
                            // @ts-ignore
                            getConfigurationType(): java.lang.Class<C>
                            /**
                             * Triggers the {@link Trigger} for all
                             * the online {@link Player}s.
                             */
                            // @ts-ignore
                            trigger(): void
                            /**
                             * Triggers the {@link Trigger} for the
                             * specified {@link Player}s.
                             * @param players The players to trigger for
                             */
                            // @ts-ignore
                            trigger(players: java.lang.Iterable<org.spongepowered.api.entity.living.player.Player>): void
                            /**
                             * Triggers the {@link Trigger} for the
                             * specified {@link Player}.
                             * @param player The player to trigger for
                             */
                            // @ts-ignore
                            trigger(player: org.spongepowered.api.entity.living.player.Player): void
                        }
                    }
                }
            }
        }
    }
}
