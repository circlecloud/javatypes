declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    // @ts-ignore
                    interface InteractableVolume extends org.spongepowered.api.world.extent.MutableBlockVolume {
                        /**
                         * Simulates hitting a block as if a player had done so.
                         * <p>The difference between this and {@link #digBlock} is that this will
                         * only do a single instantaneous "click" whereas digBlock will simulate
                         * holding the primary mouse button until the block breaks.</p>
                         * @param position The position of the block
                         * @param side The side of the block to interact with
                         * @param profile The game profile of the player this is imitating
                         * @return True if the interact succeeded
                         */
                        // @ts-ignore
                        hitBlock(position: Vector3i, side: org.spongepowered.api.util.Direction, profile: org.spongepowered.api.profile.GameProfile): boolean
                        /**
                         * Simulates hitting a block as if a player had done so.
                         * <p>The difference between this and {@link #digBlock} is that this will
                         * only do a single instantaneous "click" whereas digBlock will simulate
                         * holding the primary mouse button until the block breaks.</p>
                         * @param x The X position
                         * @param y The Y position
                         * @param z The Z position
                         * @param side The side of the block to interact with
                         * @param profile The game profile of the player this is imitating
                         * @return True if the interact succeeded
                         */
                        // @ts-ignore
                        hitBlock(x: number /*int*/, y: number /*int*/, z: number /*int*/, side: org.spongepowered.api.util.Direction, profile: org.spongepowered.api.profile.GameProfile): boolean
                        /**
                         * Simulates the interaction the block as if a player had done so.
                         * @param position The position of the block
                         * @param side The side of the block to interact with
                         * @param profile The game profile of the player this is imitating
                         * @return True if the interact succeeded
                         */
                        // @ts-ignore
                        interactBlock(position: Vector3i, side: org.spongepowered.api.util.Direction, profile: org.spongepowered.api.profile.GameProfile): boolean
                        /**
                         * Simulates the interaction the block as if a player had done so.
                         * @param x The X position
                         * @param y The Y position
                         * @param z The Z position
                         * @param side The side of the block to interact with
                         * @param profile The game profile of the player this is imitating
                         * @return True if the interact succeeded
                         */
                        // @ts-ignore
                        interactBlock(x: number /*int*/, y: number /*int*/, z: number /*int*/, side: org.spongepowered.api.util.Direction, profile: org.spongepowered.api.profile.GameProfile): boolean
                        /**
                         * Simulates the interaction the block using the given item as if the player
                         * had done so.
                         * @param position The position of the block
                         * @param itemStack The item
                         * @param side The side of the block to interact with
                         * @param profile The game profile of the player this is imitating
                         * @return True if the interact succeeded
                         */
                        // @ts-ignore
                        interactBlockWith(position: Vector3i, itemStack: org.spongepowered.api.item.inventory.ItemStack, side: org.spongepowered.api.util.Direction, profile: org.spongepowered.api.profile.GameProfile): boolean
                        /**
                         * Simulates the interaction the block using the given item as if the player
                         * had done so.
                         * @param x The X position
                         * @param y The Y position
                         * @param z The Z position
                         * @param itemStack The item
                         * @param side The side of the block to interact with
                         * @param profile The game profile of the player this is imitating
                         * @return True if the interact succeeded
                         */
                        // @ts-ignore
                        interactBlockWith(x: number /*int*/, y: number /*int*/, z: number /*int*/, itemStack: org.spongepowered.api.item.inventory.ItemStack, side: org.spongepowered.api.util.Direction, profile: org.spongepowered.api.profile.GameProfile): boolean
                        /**
                         * Simulates the placement of a block at the given location as if a player
                         * had done so.
                         * @param position The position of the block
                         * @param block The block state to be set to
                         * @param side The face of the block to place on
                         * @param profile The game profile of the player this is imitating
                         * @return Whether the block was successfully set
                         */
                        // @ts-ignore
                        placeBlock(position: Vector3i, block: org.spongepowered.api.block.BlockState, side: org.spongepowered.api.util.Direction, profile: org.spongepowered.api.profile.GameProfile): boolean
                        /**
                         * Simulates the placement of a block at the given location as if a player
                         * had done so.
                         * @param x The X position
                         * @param y The Y position
                         * @param z The Z position
                         * @param block The block state to be set to
                         * @param side The face of the block to place on
                         * @param profile The game profile of the player this is imitating
                         * @return Whether the block was successfully set
                         */
                        // @ts-ignore
                        placeBlock(x: number /*int*/, y: number /*int*/, z: number /*int*/, block: org.spongepowered.api.block.BlockState, side: org.spongepowered.api.util.Direction, profile: org.spongepowered.api.profile.GameProfile): boolean
                        /**
                         * Simulate the digging of the block as if a player had done so.
                         * @param position The position of the block
                         * @param profile The game profile of the player this is imitating
                         * @return Whether the block was destroyed
                         */
                        // @ts-ignore
                        digBlock(position: Vector3i, profile: org.spongepowered.api.profile.GameProfile): boolean
                        /**
                         * Simulate the digging of the block as if a player had done so.
                         * @param x The X position
                         * @param y The Y position
                         * @param z The Z position
                         * @param profile The game profile of the player this is imitating
                         * @return Whether the block was destroyed
                         */
                        // @ts-ignore
                        digBlock(x: number /*int*/, y: number /*int*/, z: number /*int*/, profile: org.spongepowered.api.profile.GameProfile): boolean
                        /**
                         * Simulate the digging of the block with the given tool as if a player had
                         * done so.
                         * @param position The position of the block
                         * @param itemStack The tool
                         * @param profile The game profile of the player this is imitating
                         * @return Whether the block was destroyed
                         */
                        // @ts-ignore
                        digBlockWith(position: Vector3i, itemStack: org.spongepowered.api.item.inventory.ItemStack, profile: org.spongepowered.api.profile.GameProfile): boolean
                        /**
                         * Simulate the digging of the block with the given tool as if a player had
                         * done so.
                         * @param x The X position
                         * @param y The Y position
                         * @param z The Z position
                         * @param itemStack The tool
                         * @param profile The game profile of the player this is imitating
                         * @return Whether the block was destroyed
                         */
                        // @ts-ignore
                        digBlockWith(x: number /*int*/, y: number /*int*/, z: number /*int*/, itemStack: org.spongepowered.api.item.inventory.ItemStack, profile: org.spongepowered.api.profile.GameProfile): boolean
                        /**
                         * Gets the time it takes to dig this block with the specified item in
                         * ticks.
                         * @param position The position of the block
                         * @param itemStack The item to pretend-dig with
                         * @param profile The game profile of the player this is imitating
                         * @return The time in ticks
                         */
                        // @ts-ignore
                        getBlockDigTimeWith(position: Vector3i, itemStack: org.spongepowered.api.item.inventory.ItemStack, profile: org.spongepowered.api.profile.GameProfile): int
                        /**
                         * Gets the time it takes to dig this block with the specified item in
                         * ticks.
                         * @param x The X position
                         * @param y The Y position
                         * @param z The Z position
                         * @param itemStack The item to pretend-dig with
                         * @param profile The game profile of the player this is imitating
                         * @return The time in ticks
                         */
                        // @ts-ignore
                        getBlockDigTimeWith(x: number /*int*/, y: number /*int*/, z: number /*int*/, itemStack: org.spongepowered.api.item.inventory.ItemStack, profile: org.spongepowered.api.profile.GameProfile): int
                        // @ts-ignore
                        getBlockWorker(): org.spongepowered.api.world.extent.worker.MutableBlockVolumeWorker<? extends org.spongepowered.api.world.extent.InteractableVolume>
                    }
                }
            }
        }
    }
}
