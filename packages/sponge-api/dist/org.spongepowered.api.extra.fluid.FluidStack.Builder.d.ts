declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace extra {
                namespace fluid {
                    namespace FluidStack {
                        // @ts-ignore
                        interface Builder extends org.spongepowered.api.data.persistence.DataBuilder<org.spongepowered.api.extra.fluid.FluidStack> {
                            /**
                             * Sets the {@link FluidType} to use to build the {@link FluidStack}.
                             * @param fluidType The fluid type
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            fluid(fluidType: org.spongepowered.api.extra.fluid.FluidType): org.spongepowered.api.extra.fluid.FluidStack.Builder
                            /**
                             * Sets the desired volume of the {@link FluidStack}.
                             * <p>Note that the volume is measured in "milli buckets", otherwise
                             * read as {@code mB}. The scaling is as follows: 1 bucket = 1000mB,
                             * whereas 1 block usually equals 1000mB.</p>
                             * @param volume The volume
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            volume(volume: number /*int*/): org.spongepowered.api.extra.fluid.FluidStack.Builder
                            /**
                             * Builds a new {@link FluidStack} based on the desired volume and
                             * {@link FluidType}. If either are not set (invalid), an
                             * {@link IllegalStateException} may be thrown.
                             * @return The newly created fluid stack
                             */
                            // @ts-ignore
                            build(): org.spongepowered.api.extra.fluid.FluidStack
                            /**
                             * Resets and fills this builder with all the information from the
                             * provided {@link FluidStackSnapshot}.
                             * @param fluidStackSnapshot The fluid stack snapshot to copy data from
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            from(fluidStackSnapshot: org.spongepowered.api.extra.fluid.FluidStackSnapshot): org.spongepowered.api.extra.fluid.FluidStack.Builder
                            // @ts-ignore
                            from(value: org.spongepowered.api.extra.fluid.FluidStack): org.spongepowered.api.extra.fluid.FluidStack.Builder
                            // @ts-ignore
                            reset(): org.spongepowered.api.extra.fluid.FluidStack.Builder
                        }
                    }
                }
            }
        }
    }
}
