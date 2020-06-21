declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace InventoryTransformation {
                        // @ts-ignore
                        interface Builder extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.item.inventory.InventoryTransformation, org.spongepowered.api.item.inventory.InventoryTransformation.Builder> {
                            /**
                             * Appends one or more {@link QueryOperation}s
                             * @param operation The operations to add
                             * @return Fluent pattern
                             */
                            // @ts-ignore
                            append(...operation: org.spongepowered.api.item.inventory.query.QueryOperation<any>[]): org.spongepowered.api.item.inventory.InventoryTransformation.Builder
                            /**
                             * Builds the transformation
                             * @return The built transformation
                             */
                            // @ts-ignore
                            build(): org.spongepowered.api.item.inventory.InventoryTransformation
                        }
                    }
                }
            }
        }
    }
}
