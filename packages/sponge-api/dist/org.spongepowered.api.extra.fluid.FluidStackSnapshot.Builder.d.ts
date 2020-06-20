declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace extra {
                namespace fluid {
                    namespace FluidStackSnapshot {
                        // @ts-ignore
                        interface Builder extends org.spongepowered.api.data.ImmutableDataBuilder<org.spongepowered.api.extra.fluid.FluidStackSnapshot, org.spongepowered.api.extra.fluid.FluidStackSnapshot.Builder> {
                            // @ts-ignore
                            fluid(fluidType: org.spongepowered.api.extra.fluid.FluidType): org.spongepowered.api.extra.fluid.FluidStackSnapshot.Builder
                            // @ts-ignore
                            volume(volume: number /*int*/): org.spongepowered.api.extra.fluid.FluidStackSnapshot.Builder
                            /**
                             * Resets this builder and accepts all data from the incoming {@link FluidStack}.
                             * @param fluidStack The fluid stack to accept
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            from(fluidStack: org.spongepowered.api.extra.fluid.FluidStack): org.spongepowered.api.extra.fluid.FluidStackSnapshot.Builder
                        }
                    }
                }
            }
        }
    }
}
