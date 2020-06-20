declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace type {
                        /**
                         * An {@link Inventory} which is owned or otherwise carried by a
                         * {@link Carrier}.
                         * @param <C> Carrier type
                         */
                        // @ts-ignore
                        interface CarriedInventory<C extends org.spongepowered.api.item.inventory.Carrier> extends org.spongepowered.api.item.inventory.Inventory {
                            /**
                             * Returns the Carrier of this Inventory. It can be an entity, block, or
                             * other object.
                             * @return This inventory's carrier
                             */
                            // @ts-ignore
                            getCarrier(): java.util.Optional<C>
                        }
                    }
                }
            }
        }
    }
}
