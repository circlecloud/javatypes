declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace query {
                        // @ts-ignore
                        class QueryOperationTypes extends java.lang.Object {
                            /**
                             * Tests based on an inventory property present on the target inventory.
                             * @see Inventory#getProperties(Inventory, Class)
                             */
                            // @ts-ignore
                            readonly INVENTORY_PROPERTY: org.spongepowered.api.item.inventory.query.QueryOperationType<org.spongepowered.api.item.inventory.InventoryProperty<any, ?>>
                            /**
                             * Tests based on the title of the inventory.
                             * @see InventoryTitle
                             * @see Nameable#getName()
                             */
                            // @ts-ignore
                            readonly INVENTORY_TRANSLATION: org.spongepowered.api.item.inventory.query.QueryOperationType<org.spongepowered.api.text.translation.Translation>
                            /**
                             * Tests based on the class of the inventory.
                             */
                            // @ts-ignore
                            readonly INVENTORY_TYPE: org.spongepowered.api.item.inventory.query.QueryOperationType<java.lang.Class<org.spongepowered.api.item.inventory.Inventory>>
                            /**
                             * Allows a custom condition for the items contained within an item stack.
                             */
                            // @ts-ignore
                            readonly ITEM_STACK_CUSTOM: org.spongepowered.api.item.inventory.query.QueryOperationType<java.util.function.Predicate<org.spongepowered.api.item.inventory.ItemStack>> | org.spongepowered.api.item.inventory.query.QueryOperationType<java.util.function$.Predicate<org.spongepowered.api.item.inventory.ItemStack>>
                            /**
                             * Tests for an exact match of the item stack contained in each slot.
                             * <p>Generally uses {@link ItemStack}'s <code>#equals</code> method.</p>
                             */
                            // @ts-ignore
                            readonly ITEM_STACK_EXACT: org.spongepowered.api.item.inventory.query.QueryOperationType<org.spongepowered.api.item.inventory.ItemStack>
                            /**
                             * Tests for an exact match of the item stack contained in each slot, with
                             * the exception of the quantity. This allows testing for custom data on
                             * item stacks that may be moved and stacked by players.
                             * @see ItemStack#equalTo(ItemStack)
                             */
                            // @ts-ignore
                            readonly ITEM_STACK_IGNORE_QUANTITY: org.spongepowered.api.item.inventory.query.QueryOperationType<org.spongepowered.api.item.inventory.ItemStack>
                            /**
                             * Tests for a match of the type of item contained in each slot.
                             * @see ItemStack#getType()
                             */
                            // @ts-ignore
                            readonly ITEM_TYPE: org.spongepowered.api.item.inventory.query.QueryOperationType<org.spongepowered.api.item.ItemType>
                            /**
                             * Tests based on the class of the inventory.
                             */
                            // @ts-ignore
                            readonly TYPE: org.spongepowered.api.item.inventory.query.QueryOperationType<java.lang.Class<any>>
                        }
                    }
                }
            }
        }
    }
}
