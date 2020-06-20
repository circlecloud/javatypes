declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace vehicle {
                    namespace minecart {
                        /**
                         * Represents a minecart with a container inside it. Common extensions of this
                         * are {@link ChestMinecart} and {@link HopperMinecart}.
                         */
                        // @ts-ignore
                        interface ContainerMinecart<M extends org.spongepowered.api.entity.vehicle.minecart.ContainerMinecart<M>> extends org.spongepowered.api.entity.vehicle.minecart.Minecart, org.spongepowered.api.item.inventory.Carrier, org.spongepowered.api.item.inventory.type.CarriedInventory<M> {
                            // @ts-ignore
                            getInventory(): org.spongepowered.api.item.inventory.type.CarriedInventory<M>
                        }
                    }
                }
            }
        }
    }
}
