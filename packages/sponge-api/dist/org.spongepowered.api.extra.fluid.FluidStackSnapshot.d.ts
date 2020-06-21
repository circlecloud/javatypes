declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace extra {
                namespace fluid {
                    // @ts-ignore
                    interface FluidStackSnapshot extends org.spongepowered.api.data.ImmutableDataHolder<org.spongepowered.api.extra.fluid.FluidStackSnapshot> {
                        /**
                         * Creates a new {@link Builder} to build a new {@link FluidStackSnapshot}.
                         * @return The new builder
                         */
                        // @ts-ignore
                        builder(): org.spongepowered.api.extra.fluid.FluidStackSnapshot.Builder
                        /**
                         * Gets the {@link FluidType} of this snapshot.
                         * @return The fluid type
                         */
                        // @ts-ignore
                        getFluid(): org.spongepowered.api.extra.fluid.FluidType
                        /**
                         * Gets the volume of this snapshot.
                         * <p>Note that the volume is measured in "milli buckets", otherwise read
                         * as {@code mB}. The scaling is as follows: 1 bucket = 1000mB, whereas 1
                         * block usually equals 1000mB.</p>
                         * @return The volume
                         */
                        // @ts-ignore
                        getVolume(): number /*int*/
                        /**
                         * Creates a new {@link FluidStack} based on this snapshot.
                         * @return The newly created stack
                         */
                        // @ts-ignore
                        createStack(): org.spongepowered.api.extra.fluid.FluidStack
                    }
                }
            }
        }
    }
}
