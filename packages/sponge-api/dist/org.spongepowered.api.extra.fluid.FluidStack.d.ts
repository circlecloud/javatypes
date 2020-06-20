declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace extra {
                namespace fluid {
                    /**
                     * Represents a stack of a particular {@link FluidType} and
                     * volume measured in "milliBuckets" where <code>1000</code>mB is equal to
                     * 1 {@link ItemTypes#BUCKET}.
                     */
                    // @ts-ignore
                    interface FluidStack extends org.spongepowered.api.data.DataHolder {
                        /**
                         * Creates a new {@link Builder} to make fluid stacks.
                         * @return The newly created builder
                         */
                        // @ts-ignore
                        builder(): org.spongepowered.api.extra.fluid.FluidStack.Builder
                        /**
                         * Gets the {@link FluidType} for this fluid stack.
                         * @return The fluid type of this stack
                         */
                        // @ts-ignore
                        getFluid(): org.spongepowered.api.extra.fluid.FluidType
                        /**
                         * Gets the "volume" of this {@link FluidStack}.
                         * <p>Note that the volume is measured in "milli buckets", otherwise read
                         * as {@code mB}. The scaling is as follows: 1 bucket = 1000mB, whereas 1
                         * block usually equals 1000mB.</p>
                         * @return The volume in milli buckets
                         */
                        // @ts-ignore
                        getVolume(): int
                        /**
                         * Sets the desired volume for this stack.
                         * <p>Note that the volume is measured in "milli buckets", otherwise read
                         * as {@code mB}. The scaling is as follows: 1 bucket = 1000mB, whereas 1
                         * block usually equals 1000mB.</p>
                         * @param volume The volume to set
                         * @return This fluid stack
                         */
                        // @ts-ignore
                        setVolume(volume: number /*int*/): org.spongepowered.api.extra.fluid.FluidStack
                        /**
                         * Creates a snapshot of this {@link FluidStack}.
                         * @return The fluid stack snapshot
                         */
                        // @ts-ignore
                        createSnapshot(): org.spongepowered.api.extra.fluid.FluidStackSnapshot
                    }
                }
            }
        }
    }
}
