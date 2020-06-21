declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace tileentity {
                            /**
                             * Represents the data for an {@link Structure}.
                             */
                            // @ts-ignore
                            interface StructureData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.tileentity.StructureData, org.spongepowered.api.data.manipulator.immutable.tileentity.ImmutableStructureData> {
                                /**
                                 * Gets the {@link Value} for the author of the {@link Structure}.
                                 * @return The value for the author
                                 */
                                // @ts-ignore
                                author(): org.spongepowered.api.data.value.mutable.Value<java.lang.String | string>
                                /**
                                 * Gets the {@link Value} for the ignore entities state of the {@link Structure}.
                                 * @return The value for the ignore entities state
                                 */
                                // @ts-ignore
                                ignoreEntities(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                                /**
                                 * Gets the {@link Value} for the integrity of the {@link Structure}.
                                 * @return The value for the integrity
                                 */
                                // @ts-ignore
                                integrity(): org.spongepowered.api.data.value.mutable.Value<java.lang.Float | number>
                                /**
                                 * Gets the {@link Value} for the mode of the {@link Structure}.
                                 * @return The value for the mode
                                 */
                                // @ts-ignore
                                mode(): org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.StructureMode>
                                /**
                                 * Gets the {@link Value} for the position of the {@link Structure}.
                                 * @return The value for the position
                                 */
                                // @ts-ignore
                                position(): org.spongepowered.api.data.value.mutable.Value<Vector3i>
                                /**
                                 * Gets the {@link Value} for the powered state of the {@link Structure}.
                                 * @return The value for the powered state
                                 */
                                // @ts-ignore
                                powered(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                                /**
                                 * Gets the {@link Value} for the seed of the {@link Structure}.
                                 * @return The value for the seed
                                 */
                                // @ts-ignore
                                seed(): org.spongepowered.api.data.value.mutable.Value<java.lang.Long | number>
                                /**
                                 * Gets the {@link Value} for the show air state of the {@link Structure}.
                                 * @return The value for the show air state
                                 */
                                // @ts-ignore
                                showAir(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                                /**
                                 * Gets the {@link Value} for the show bounding box state of the {@link Structure}.
                                 * @return The value for the show bounding box state
                                 */
                                // @ts-ignore
                                showBoundingBox(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                                /**
                                 * Gets the {@link Value} for the size of the {@link Structure}.
                                 * @return The value for the size
                                 */
                                // @ts-ignore
                                size(): org.spongepowered.api.data.value.mutable.Value<Vector3i>
                            }
                        }
                    }
                }
            }
        }
    }
}
