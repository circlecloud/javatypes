declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        // @ts-ignore
                        interface EnchantItemEvent extends org.spongepowered.api.event.item.inventory.TargetContainerEvent {
                            /**
                             * The seed for pseudo random enchantment generation.
                             * @return the seed
                             */
                            // @ts-ignore
                            getSeed(): int
                            /**
                             * The enchantment option. 1, 2 or 3
                             * @return The enchantment option
                             */
                            // @ts-ignore
                            getOption(): int
                        }
                    }
                }
            }
        }
    }
}
