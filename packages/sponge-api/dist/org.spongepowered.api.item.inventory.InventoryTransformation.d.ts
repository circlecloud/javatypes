declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    /**
                     * A transformation can filter and order an inventory.
                     * <p>See {@link InventoryTransformations} for some predefined
                     * transformations</p>
                     * <p>Transformations built from the {@link Builder} use a combination of
                     * {@link Inventory#query(QueryOperation[])} and
                     * {@link Inventory#union(Inventory)}. Thus the transformed inventory will
                     * consist of only slots and will never contain duplicate slots.</p>
                     */
                    // @ts-ignore
                    interface InventoryTransformation {
                        /**
                         * Transforms an Inventory
                         * @param inventory The inventory to transform
                         * @return The transformed inventory
                         */
                        // @ts-ignore
                        transform(inventory: org.spongepowered.api.item.inventory.Inventory): org.spongepowered.api.item.inventory.Inventory
                        // @ts-ignore
                        builder(): org.spongepowered.api.item.inventory.InventoryTransformation.Builder
                        /**
                         * Creates a new transformation based on QueryOperations.
                         * @param operations The QueryOperations
                         * @return The new transformation
                         */
                        // @ts-ignore
                        of(...operations: org.spongepowered.api.item.inventory.query.QueryOperation[]): org.spongepowered.api.item.inventory.InventoryTransformation
                    }
                }
            }
        }
    }
}
