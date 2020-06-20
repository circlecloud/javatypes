declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace type {
                        /**
                         * Interface for inventories which may be interacted with by Players.
                         */
                        // @ts-ignore
                        interface Interactable extends org.spongepowered.api.item.inventory.Inventory {
                            /**
                             * Gets whether the specified player can interact with this object.
                             * @param player the Player wishing to interact with this Inventory
                             * @return true if the Entity is able to interact with this Inventory
                             */
                            // @ts-ignore
                            canInteractWith(player: org.spongepowered.api.entity.living.player.Player): boolean
                        }
                    }
                }
            }
        }
    }
}
