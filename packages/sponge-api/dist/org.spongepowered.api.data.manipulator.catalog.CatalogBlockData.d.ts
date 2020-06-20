declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace catalog {
                        /**
                         * An enumeration of block related {@link DataManipulator}s.
                         */
                        // @ts-ignore
                        class CatalogBlockData extends java.lang.Object {
                            /**
                             * Signifies that a block is "attached" or "hanging" on another block.
                             * Usually applicable for {@link BlockTypes#TRIPWIRE}.
                             */
                            // @ts-ignore
                            readonly ATTACHED_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.block.AttachedData>
                            /**
                             * Signifies that a block relies on {@link Axis}.
                             */
                            // @ts-ignore
                            readonly AXIS_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.block.AxisData>
                            /**
                             * Represents data related to {@link BlockTypes#BROWN_MUSHROOM_BLOCK} and
                             * {@link BlockTypes#RED_MUSHROOM_BLOCK}.
                             */
                            // @ts-ignore
                            readonly BIG_MUSHROOM_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.block.BigMushroomData>
                            /**
                             * Represents the type of {@link BrickType} for a
                             * {@link BlockTypes#STONEBRICK}.
                             */
                            // @ts-ignore
                            readonly BRICK_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.block.BrickData>
                            /**
                             * Signifies that a block is "connected" to a particular {@link Direction}.
                             * Usually applies to {@link BlockTypes#GLASS_PANE},
                             * {@link BlockTypes#STAINED_GLASS_PANE}, and several others.
                             */
                            // @ts-ignore
                            readonly CONNECTED_DIRECTION_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.block.ConnectedDirectionData>
                            /**
                             * Signifies that a block will "decay" or be removed after a certain time.
                             * Usually applicable to {@link BlockTypes#LEAVES} and
                             * {@link BlockTypes#LEAVES2}.
                             */
                            // @ts-ignore
                            readonly DECAYABLE_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.block.DecayableData>
                            /**
                             * Represents the delay of a redstone repeater.
                             */
                            // @ts-ignore
                            readonly DELAYABLE_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.block.DelayableData>
                            /**
                             * Signifies that a block has a {@link Direction}. Usually applies
                             * to "rotational" blocks, such as {@link BlockTypes#LOG} and
                             * {@link BlockTypes#LOG2} etc.
                             */
                            // @ts-ignore
                            readonly DIRECTIONAL_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.block.DirectionalData>
                            /**
                             * Signifies that a {@link BlockTypes#DIRT} of it's sub types.
                             */
                            // @ts-ignore
                            readonly DIRT_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.block.DirtData>
                            /**
                             * Signifies that a block is "disarmed". Usually applies to
                             * {@link BlockTypes#TRIPWIRE_HOOK}s.
                             */
                            // @ts-ignore
                            readonly DISARMED_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.block.DisarmedData>
                            /**
                             * Represents the {@link DisguisedBlockType} of a block. Usually applies
                             * to {@link BlockTypes#MONSTER_EGG}.
                             */
                            // @ts-ignore
                            readonly DISGUISED_BLOCK_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.block.DisguisedBlockData>
                            /**
                             * Represents the type of a double plant.
                             */
                            // @ts-ignore
                            readonly DOUBLE_PLANT_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.block.DoublePlantData>
                            /**
                             * Signifies that a block is "dyed" a certain {@link DyeColor}.
                             * Usually applies to {@link BlockTypes#WOOL},
                             * {@link BlockTypes#STAINED_GLASS},
                             * {@link BlockTypes#STAINED_HARDENED_CLAY}, etc.
                             */
                            // @ts-ignore
                            readonly DYEABLE_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.DyeableData>
                            /**
                             * Signifies whether the block is "extended". Usually applicable to
                             * {@link BlockTypes#PISTON}.
                             */
                            // @ts-ignore
                            readonly EXTENDED_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.block.ExtendedData>
                            /**
                             * Signifies that the owner is "filled". Usually applicable to
                             * {@link BlockTypes#END_PORTAL_FRAME}.
                             */
                            // @ts-ignore
                            readonly FILLED_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.block.FilledData>
                            /**
                             * Represents the "fluid level" for a liquid block. Usually applicable
                             * to {@link BlockTypes#WATER} and {@link BlockTypes#LAVA}
                             */
                            // @ts-ignore
                            readonly FLUID_LEVEL_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.block.FluidLevelData>
                            /**
                             * Represents the "growth" of a block. Usually applicable to
                             * {@link BlockTypes#WHEAT}, {@link BlockTypes#PUMPKIN_STEM}, etc.
                             */
                            // @ts-ignore
                            readonly GROWTH_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.block.GrowthData>
                            /**
                             * Represents the "side" that a "hinge" is facing on a door. Usually
                             * applicable to {@link BlockTypes#TRAPDOOR} and other doors.
                             */
                            // @ts-ignore
                            readonly HINGE_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.block.HingeData>
                            /**
                             * Signifies that the owner is "connected" to a wall. Usually applicable to
                             * {@link BlockTypes#FENCE_GATE}.
                             */
                            // @ts-ignore
                            readonly IN_WALL_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.block.InWallData>
                            /**
                             * Represents the "layer" of an owner. Usually applicable to
                             * {@link BlockTypes#CAKE}, {@link BlockTypes#SNOW_LAYER}, etc.
                             */
                            // @ts-ignore
                            readonly LAYERED_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.block.LayeredData>
                            /**
                             * Represents the "moisture" level of a block. Usually applicable to
                             * {@link BlockTypes#FARMLAND}.
                             */
                            // @ts-ignore
                            readonly MOISTURE_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.block.MoistureData>
                            /**
                             * Signifies that the owner will not drop anything. Usually applicable
                             * to {@link BlockTypes#SKULL}.
                             */
                            // @ts-ignore
                            readonly NO_DROP_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.block.DropData>
                            /**
                             * Signifies that a block is considered "occupied". Usually applicable to
                             * {@link BlockTypes#BED}.
                             */
                            // @ts-ignore
                            readonly OCCUPIED_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.block.OccupiedData>
                            /**
                             * Signifies that a block is "open". Usually applies to all doors.
                             */
                            // @ts-ignore
                            readonly OPEN_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.block.OpenData>
                            /**
                             * Represents the {@link PistonType} of a {@link BlockTypes#PISTON_HEAD}.
                             */
                            // @ts-ignore
                            readonly PISTON_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.block.PistonData>
                            /**
                             * Represents the "portion" of a block such as the top or bottom half of a
                             * door. Usually applies to all doors.
                             */
                            // @ts-ignore
                            readonly PORTION_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.block.PortionData>
                            /**
                             * Signifies that a block is "powered".
                             */
                            // @ts-ignore
                            readonly POWERED_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.block.PoweredData>
                            /**
                             * Represents the {@link PrismarineType} of a
                             * {@link BlockTypes#PRISMARINE}.
                             */
                            // @ts-ignore
                            readonly PRISMARINE_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.block.PrismarineData>
                            /**
                             * Represents the {@link QuartzType} of a
                             * {@link BlockTypes#QUARTZ_BLOCK}.
                             */
                            // @ts-ignore
                            readonly QUARTZ_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.block.QuartzData>
                            /**
                             * Represents the {@link RailDirection} of a {@link BlockTypes#RAIL} and
                             * other types of rails.
                             */
                            // @ts-ignore
                            readonly RAIL_DIRECTION_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.block.RailDirectionData>
                            /**
                             * Signifies that a block has some value of redstone power applied to it.
                             * Usually applicable for all blocks.
                             */
                            // @ts-ignore
                            readonly REDSTONE_POWERED_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.block.RedstonePoweredData>
                            /**
                             * Signifies that a block is rotated with a {@link Rotation}.
                             */
                            // @ts-ignore
                            readonly ROTATIONAL_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.RotationalData>
                            /**
                             * Represents the {@link SandType} of {@link BlockTypes#SAND}.
                             */
                            // @ts-ignore
                            readonly SAND_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.block.SandData>
                            /**
                             * Represents the {@link SandstoneType} of a sandstone based block. Usually
                             * applicable to {@link BlockTypes#SANDSTONE} and
                             * {@link BlockTypes#RED_SANDSTONE}.
                             */
                            // @ts-ignore
                            readonly SANDSTONE_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.block.SandstoneData>
                            /**
                             * Signifies that a block is "seamless". Usually applicable to
                             * {@link BlockTypes#DOUBLE_STONE_SLAB},
                             * {@link BlockTypes#DOUBLE_STONE_SLAB2},
                             * and {@link BlockTypes#DOUBLE_WOODEN_SLAB}.
                             */
                            // @ts-ignore
                            readonly SEAMLESS_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.block.SeamlessData>
                            /**
                             * Represents the {@link ShrubType} of a {@link BlockTypes#TALLGRASS}.
                             */
                            // @ts-ignore
                            readonly SHRUB_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.block.ShrubData>
                            /**
                             * Represents the {@link SlabType} of slabs.
                             */
                            // @ts-ignore
                            readonly SLAB_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.block.SlabData>
                            /**
                             * Signifies that a block is considered to be "snowed. Usually applicable
                             * to {@link BlockTypes#GRASS}, {@link BlockTypes#DIRT}, and
                             * {@link BlockTypes#MYCELIUM}.
                             */
                            // @ts-ignore
                            readonly SNOWED_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.block.SnowedData>
                            /**
                             * Represents the {@link StairShape} of a stair block.
                             */
                            // @ts-ignore
                            readonly STAIR_SHAPE_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.block.StairShapeData>
                            /**
                             * Represents the {@link StoneType} of a {@link BlockTypes#STONE}.
                             */
                            // @ts-ignore
                            readonly STONE_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.block.StoneData>
                            /**
                             * Represents the {@link TreeType} for various tree based blocks. Usually
                             * applicable to {@link BlockTypes#SAPLING}, {@link BlockTypes#LEAVES},
                             * and {@link BlockTypes#LOG}.
                             */
                            // @ts-ignore
                            readonly TREE_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.block.TreeData>
                            /**
                             * Represents the {@link WallType} of a
                             * {@link BlockTypes#COBBLESTONE_WALL}.
                             */
                            // @ts-ignore
                            readonly WALL_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.block.WallData>
                            /**
                             * Signifies that a block is considered "wet". Usually applicable to
                             * {@link BlockTypes#SPONGE}.
                             */
                            // @ts-ignore
                            readonly WET_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.WetData>
                            /**
                             * Represents the {@link WireAttachmentType}s for the four cardinal directions of a
                             * piece of {@link BlockTypes#REDSTONE_WIRE}.
                             */
                            // @ts-ignore
                            readonly WIRE_ATTACHMENT_DATA: java.lang.Class<org.spongepowered.api.data.manipulator.mutable.block.WireAttachmentData>
                        }
                    }
                }
            }
        }
    }
}
