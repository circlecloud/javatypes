declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace entity {
                        /**
                         * Represents the inventory of a {@link User}.
                         * It consists of a {@link MainPlayerInventory} (containing the main {@link GridInventory}
                         * and the {@link Hotbar}) and an {@link EquipmentInventory}
                         */
                        // @ts-ignore
                        interface UserInventory<T extends org.spongepowered.api.entity.living.player.User> extends org.spongepowered.api.item.inventory.type.CarriedInventory<T> {
                            /**
                             * Gets the main inventory including the Hotbar.
                             * @return The main inventory
                             */
                            // @ts-ignore
                            getMain(): org.spongepowered.api.item.inventory.entity.MainPlayerInventory
                            /**
                             * Gets the hotbar inventory.
                             * @return The hotbar
                             */
                            // @ts-ignore
                            getHotbar(): org.spongepowered.api.item.inventory.entity.Hotbar
                            /**
                             * Gets the main inventory excluding the Hotbar.
                             * @return The main inventory grid
                             */
                            // @ts-ignore
                            getMainGrid(): org.spongepowered.api.item.inventory.type.GridInventory
                            /**
                             * Gets the equipment inventory.
                             * @return The equipment inventory
                             */
                            // @ts-ignore
                            getEquipment(): org.spongepowered.api.item.inventory.equipment.EquipmentInventory
                            /**
                             * Gets the offhand inventory.
                             * @return The offhand slot
                             */
                            // @ts-ignore
                            getOffhand(): org.spongepowered.api.item.inventory.Slot
                        }
                    }
                }
            }
        }
    }
}
