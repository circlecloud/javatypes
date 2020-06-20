declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace catalog {
                        /**
                         * An enumeration of known vanilla {@link DataManipulator}s associated with
                         * various {@link TileEntity}.
                         */
                        // @ts-ignore
                        class CatalogTileEntityData extends java.lang.Object {
                            /**
                             * Represents the information for a {@link Banner} such as the
                             * base color and {@link PatternLayer}s.
                             */
                            // @ts-ignore
                            readonly BANNER_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.tileentity.BannerData>
                            /**
                             * Represents the information for a {@link Beacon}.
                             */
                            // @ts-ignore
                            readonly BEACON_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.tileentity.BeaconData>
                            /**
                             * Represents the information for a {@link BrewingStand}.
                             */
                            // @ts-ignore
                            readonly BREWING_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.tileentity.BrewingStandData>
                            /**
                             * Represents the {@link CommandData} for a {@link CommandBlock}.
                             */
                            // @ts-ignore
                            readonly COMMAND_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.CommandData>
                            /**
                             * Represents the {@link Comparator} data.
                             */
                            // @ts-ignore
                            readonly COMPARISON_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.block.ComparatorData>
                            /**
                             * Represents an int cooldown for a {@link Hopper}.
                             */
                            // @ts-ignore
                            readonly COOLDOWN_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.tileentity.CooldownData>
                            /**
                             * Represents the customizable display name for various
                             * {@link TileEntityCarrier}s.
                             */
                            // @ts-ignore
                            readonly DISPLAY_NAME_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.DisplayNameData>
                            /**
                             * Represents the data for a {@link Furnace}.
                             */
                            // @ts-ignore
                            readonly FURNACE_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.tileentity.FurnaceData>
                            /**
                             * Represents the lock information for a {@link TileEntityCarrier}.
                             */
                            // @ts-ignore
                            readonly LOCKABLE_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.tileentity.LockableData>
                            /**
                             * Represents the {@link Note} data.
                             */
                            // @ts-ignore
                            readonly NOTE_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.tileentity.NoteData>
                            /**
                             * Represents data pertaining to a {@link GameProfile} for a tile entity.
                             * Usually applicable to {@link Skull}s.
                             */
                            // @ts-ignore
                            readonly REPRESENTED_PLAYER_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.RepresentedPlayerData>
                            /**
                             * Represents a {@link TileEntity} that acts on an {@link ItemStack}.
                             * Usually applicable to {@link Jukebox}es and {@link FlowerPot}s.
                             */
                            // @ts-ignore
                            readonly JUKEBOX_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.RepresentedItemData>
                            /**
                             * Represents a {@link Sign}s data.
                             */
                            // @ts-ignore
                            readonly SIGN_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.tileentity.SignData>
                            /**
                             * Represents the data used by a {@link MobSpawner}.
                             */
                            // @ts-ignore
                            readonly MOB_SPAWNER_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.MobSpawnerData>
                        }
                    }
                }
            }
        }
    }
}
