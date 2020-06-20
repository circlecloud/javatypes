declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        namespace ClickInventoryEvent {
                            /**
                             * Fires when the client requests a recipe to be crafted.
                             */
                            // @ts-ignore
                            interface Recipe extends org.spongepowered.api.event.item.inventory.ClickInventoryEvent {
                                /**
                                 * Returns the requested recipe.
                                 * @return The requested recipe.
                                 */
                                // @ts-ignore
                                getRecipe(): org.spongepowered.api.item.recipe.Recipe
                            }
                        }
                    }
                }
            }
        }
    }
}
