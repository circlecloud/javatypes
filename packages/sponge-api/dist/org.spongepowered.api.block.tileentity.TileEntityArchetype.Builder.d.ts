declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                namespace tileentity {
                    namespace TileEntityArchetype {
                        /**
                         * A builder for {@link TileEntityArchetype}s.
                         */
                        // @ts-ignore
                        interface Builder extends org.spongepowered.api.data.persistence.DataBuilder<org.spongepowered.api.block.tileentity.TileEntityArchetype> {
                            // @ts-ignore
                            reset(): org.spongepowered.api.block.tileentity.TileEntityArchetype.Builder
                            // @ts-ignore
                            from(value: org.spongepowered.api.block.tileentity.TileEntityArchetype): org.spongepowered.api.block.tileentity.TileEntityArchetype.Builder
                            // @ts-ignore
                            from(location: org.spongepowered.api.world.Location<org.spongepowered.api.world.World>): org.spongepowered.api.block.tileentity.TileEntityArchetype.Builder
                            /**
                             * Sets the {@link BlockState} of the archetype.
                             * @param state The new block state
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            state(state: org.spongepowered.api.block.BlockState): org.spongepowered.api.block.tileentity.TileEntityArchetype.Builder
                            // @ts-ignore
                            tile(tileEntityType: org.spongepowered.api.block.tileentity.TileEntityType): org.spongepowered.api.block.tileentity.TileEntityArchetype.Builder
                            // @ts-ignore
                            tile(tileEntity: org.spongepowered.api.block.tileentity.TileEntity): org.spongepowered.api.block.tileentity.TileEntityArchetype.Builder
                            // @ts-ignore
                            tileData(dataView: org.spongepowered.api.data.DataView): org.spongepowered.api.block.tileentity.TileEntityArchetype.Builder
                            // @ts-ignore
                            setData(manipulator: org.spongepowered.api.data.manipulator.DataManipulator<any, any>): org.spongepowered.api.block.tileentity.TileEntityArchetype.Builder
                            // @ts-ignore
                            set<E, V extends org.spongepowered.api.data.value.BaseValue<E>>(value: V): org.spongepowered.api.block.tileentity.TileEntityArchetype.Builder
                            // @ts-ignore
                            set<E, V extends org.spongepowered.api.data.value.BaseValue<E>>(key: org.spongepowered.api.data.key.Key<V>, value: E): org.spongepowered.api.block.tileentity.TileEntityArchetype.Builder
                            /**
                             * Creates a new {@link TileEntityArchetype} from this builder.
                             * @return The new instance
                             */
                            // @ts-ignore
                            build(): org.spongepowered.api.block.tileentity.TileEntityArchetype
                        }
                    }
                }
            }
        }
    }
}
