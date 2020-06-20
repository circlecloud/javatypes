declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} which allows access to the active item
                             * that a {@link Living} may be using. For example this includes a food a
                             * player is currently eating or a shield they are blocking with.
                             * <p>If there is no item, the snapshot will be empty. You can check this
                             * with {@link ItemStackSnapshot#isEmpty()}.</p>
                             */
                            // @ts-ignore
                            interface ImmutableActiveItemData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableActiveItemData, org.spongepowered.api.data.manipulator.mutable.entity.ActiveItemData> {
                                /**
                                 * Gets the item stack snapshot of the item that is currently being used.
                                 * <p>If there is no item, the snapshot will be empty. You can check this
                                 * with {@link ItemStackSnapshot#isEmpty()}.</p>
                                 * @return The immutable value of the snapshot of the item being used
                                 */
                                // @ts-ignore
                                activeItem(): org.spongepowered.api.data.value.immutable.ImmutableValue<org.spongepowered.api.item.inventory.ItemStackSnapshot>
                            }
                        }
                    }
                }
            }
        }
    }
}
