declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace tileentity {
                            /**
                             * An {@link ImmutableDataManipulator} representing the {@link Structure}.
                             */
                            // @ts-ignore
                            interface ImmutableStructureData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.tileentity.ImmutableStructureData, org.spongepowered.api.data.manipulator.mutable.tileentity.StructureData> {
                                /**
                                 * Gets the {@link ImmutableValue} for the author of the {@link Structure}.
                                 * @return The value for the author
                                 */
                                // @ts-ignore
                                author(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.String | string>
                                /**
                                 * Gets the {@link ImmutableValue} for the ignore entities state of the {@link Structure}.
                                 * @return The value for the ignore entities state
                                 */
                                // @ts-ignore
                                ignoreEntities(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                                /**
                                 * Gets the {@link ImmutableValue} for the integrity of the {@link Structure}.
                                 * @return The value for the integrity
                                 */
                                // @ts-ignore
                                integrity(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Float | number>
                                /**
                                 * Gets the {@link ImmutableValue} for the mode of the {@link Structure}.
                                 * @return The value for the mode
                                 */
                                // @ts-ignore
                                mode(): org.spongepowered.api.data.value.immutable.ImmutableValue<org.spongepowered.api.data.type.StructureMode>
                                /**
                                 * Gets the {@link ImmutableValue} for the position of the {@link Structure}.
                                 * @return The value for the position
                                 */
                                // @ts-ignore
                                position(): org.spongepowered.api.data.value.immutable.ImmutableValue<Vector3i>
                                /**
                                 * Gets the {@link ImmutableValue} for the powered state of the {@link Structure}.
                                 * @return The value for the powered state
                                 */
                                // @ts-ignore
                                powered(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                                /**
                                 * Gets the {@link ImmutableValue} for the seed of the {@link Structure}.
                                 * @return The value for the seed
                                 */
                                // @ts-ignore
                                seed(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Long | number>
                                /**
                                 * Gets the {@link ImmutableValue} for the show air state of the {@link Structure}.
                                 * @return The value for the show air state
                                 */
                                // @ts-ignore
                                showAir(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                                /**
                                 * Gets the {@link ImmutableValue} for the show bounding box state of the {@link Structure}.
                                 * @return The value for the show bounding box state
                                 */
                                // @ts-ignore
                                showBoundingBox(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                                /**
                                 * Gets the {@link ImmutableValue} for the size of the {@link Structure}.
                                 * @return The value for the size
                                 */
                                // @ts-ignore
                                size(): org.spongepowered.api.data.value.immutable.ImmutableValue<Vector3i>
                            }
                        }
                    }
                }
            }
        }
    }
}
