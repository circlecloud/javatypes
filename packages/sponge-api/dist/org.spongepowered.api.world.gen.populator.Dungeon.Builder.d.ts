declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        namespace Dungeon {
                            /**
                             * A builder for constructing {@link Dungeon} populators.
                             */
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.world.gen.populator.Dungeon, org.spongepowered.api.world.gen.populator.Dungeon.Builder> {
                                /**
                                 * Sets the number of attempts at randomly spawning a generator per
                                 * chunk.
                                 * @param attempts The new number of attempts
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                attempts(attempts: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.Dungeon.Builder
                                /**
                                 * Sets the number of attempts at randomly spawning a generator per
                                 * chunk.
                                 * @param attempts The new number of attempts
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                attempts(attempts: number /*int*/): org.spongepowered.api.world.gen.populator.Dungeon.Builder
                                /**
                                 * <p>Sets {@link MobSpawnerData} that will be used to create the spawner
                                 * within the dungeon.</p>
                                 * <p><b>Note: </b> Only one of choices or mob spawner data
                                 * will be present.</p>
                                 * @param data MobSpawnerData to use
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                mobSpawnerData(data: org.spongepowered.api.data.manipulator.mutable.MobSpawnerData): org.spongepowered.api.world.gen.populator.Dungeon.Builder
                                /**
                                 * <p>Sets the possible {@link EntityArchetype}s that could be spawned.
                                 * One type is chosen when creating the dungeon, for more complex
                                 * spawners see {@link #mobSpawnerData(MobSpawnerData)}}</p>
                                 * <p>To use the default set of choices, pass <code>null</code> instead
                                 * of a table.</p>
                                 * <p><b>Note: </b> Only one of choices or mob spawner data
                                 * will be present.</p>
                                 * @param choices Weighted table of possible types
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                choices(choices: org.spongepowered.api.util.weighted.WeightedTable<org.spongepowered.api.entity.EntityArchetype>): org.spongepowered.api.world.gen.populator.Dungeon.Builder
                                /**
                                 * Defines a {@link LootTable} of {@link ItemStackSnapshot}s from which
                                 * items will be randomly selected based on weight in order to calculate
                                 * the contents of chests placed within the dungeon.
                                 * @param items The possible items
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                possibleItems(items: org.spongepowered.api.util.weighted.LootTable<org.spongepowered.api.item.inventory.ItemStackSnapshot>): org.spongepowered.api.world.gen.populator.Dungeon.Builder
                                /**
                                 * Builds a new instance of a {@link Dungeon} populator with the
                                 * settings set within the builder.
                                 * @return A new instance of the populator
                                 * @throws IllegalStateException If there are any settings left unset
                                 *          which do not have default values
                                 */
                                // @ts-ignore
                                build(): org.spongepowered.api.world.gen.populator.Dungeon
                            }
                        }
                    }
                }
            }
        }
    }
}
