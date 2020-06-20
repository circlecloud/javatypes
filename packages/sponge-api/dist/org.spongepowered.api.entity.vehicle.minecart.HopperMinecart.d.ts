declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace vehicle {
                    namespace minecart {
                        /**
                         * Represents a {@link Minecart} with a Hopper in it.
                         */
                        // @ts-ignore
                        interface HopperMinecart extends org.spongepowered.api.entity.vehicle.minecart.ContainerMinecart<org.spongepowered.api.entity.vehicle.minecart.HopperMinecart> {
                            /**
                             * Gets a copy of the {@link CooldownData}. The cooldown data represents the
                             * delay before this {@link HopperMinecart} will attempt to transfer an
                             * {@link ItemStack}.
                             * @return A copy of the cooldown data
                             */
                            // @ts-ignore
                            getCooldownData(): org.spongepowered.api.data.manipulator.mutable.tileentity.CooldownData
                        }
                    }
                }
            }
        }
    }
}
