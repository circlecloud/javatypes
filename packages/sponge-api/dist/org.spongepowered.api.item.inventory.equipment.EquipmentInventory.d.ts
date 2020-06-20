declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace equipment {
                        /**
                         * Equipment inventory for {@link Carrier}s
                         * that can carry equipment.
                         */
                        // @ts-ignore
                        interface EquipmentInventory extends org.spongepowered.api.item.inventory.type.OrderedInventory, org.spongepowered.api.item.inventory.type.CarriedInventory<org.spongepowered.api.entity.ArmorEquipable> {
                            /**
                             * Gets and remove the stack for the specified equipment type in this
                             * Inventory.
                             * @see Inventory#poll()
                             * @param equipmentType Type of equipment slot to query for
                             * @return removed ItemStack, per the semantics of {#link Inventory#poll()}
                             */
                            // @ts-ignore
                            poll(equipmentType: org.spongepowered.api.item.inventory.property.EquipmentSlotType): java.util.Optional<org.spongepowered.api.item.inventory.ItemStack>
                            /**
                             * Gets and remove the items from the stack for the specified equipment type
                             * in this Inventory.
                             * @see Inventory#poll()
                             * @param equipmentType Type of equipment slot to query for
                             * @param limit item limit
                             * @return removed ItemStack, per the semantics of {#link Inventory#poll()}
                             */
                            // @ts-ignore
                            poll(equipmentType: org.spongepowered.api.item.inventory.property.EquipmentSlotType, limit: number /*int*/): java.util.Optional<org.spongepowered.api.item.inventory.ItemStack>
                            /**
                             * Gets and remove the stack for the specified equipment type in this
                             * Inventory.
                             * @see Inventory#poll()
                             * @param equipmentType Type of equipment slot to query for
                             * @return removed ItemStack, per the semantics of {#link Inventory#poll()}
                             */
                            // @ts-ignore
                            poll(equipmentType: org.spongepowered.api.item.inventory.equipment.EquipmentType): java.util.Optional<org.spongepowered.api.item.inventory.ItemStack>
                            /**
                             * Gets and remove the items from the stack for the specified equipment type
                             * in this Inventory.
                             * @see Inventory#poll()
                             * @param equipmentType Type of equipment slot to query for
                             * @param limit item limit
                             * @return removed ItemStack, per the semantics of {#link Inventory#poll()}
                             */
                            // @ts-ignore
                            poll(equipmentType: org.spongepowered.api.item.inventory.equipment.EquipmentType, limit: number /*int*/): java.util.Optional<org.spongepowered.api.item.inventory.ItemStack>
                            /**
                             * Gets without removing the stack for the specified equipment type in this
                             * Inventory.
                             * @see Inventory#peek()
                             * @param equipmentType Type of equipment slot to query for
                             * @return removed ItemStack, per the semantics of {#link Inventory#peek()}
                             */
                            // @ts-ignore
                            peek(equipmentType: org.spongepowered.api.item.inventory.property.EquipmentSlotType): java.util.Optional<org.spongepowered.api.item.inventory.ItemStack>
                            /**
                             * Gets without removing the items from the stack for the specified
                             * equipment type in this Inventory.
                             * @see Inventory#peek()
                             * @param equipmentType Type of equipment slot to query for
                             * @param limit item limit
                             * @return removed ItemStack, per the semantics of {#link Inventory#peek()}
                             */
                            // @ts-ignore
                            peek(equipmentType: org.spongepowered.api.item.inventory.property.EquipmentSlotType, limit: number /*int*/): java.util.Optional<org.spongepowered.api.item.inventory.ItemStack>
                            /**
                             * Gets without removing the stack for the specified equipment type in this
                             * Inventory.
                             * @see Inventory#peek()
                             * @param equipmentType Type of equipment slot to query for
                             * @return removed ItemStack, per the semantics of {#link Inventory#peek()}
                             */
                            // @ts-ignore
                            peek(equipmentType: org.spongepowered.api.item.inventory.equipment.EquipmentType): java.util.Optional<org.spongepowered.api.item.inventory.ItemStack>
                            /**
                             * Gets without removing the items from the stack for the specified
                             * equipment type in this Inventory.
                             * @see Inventory#peek()
                             * @param equipmentType Type of equipment slot to query for
                             * @param limit item limit
                             * @return removed ItemStack, per the semantics of {#link Inventory#peek()}
                             */
                            // @ts-ignore
                            peek(equipmentType: org.spongepowered.api.item.inventory.equipment.EquipmentType, limit: number /*int*/): java.util.Optional<org.spongepowered.api.item.inventory.ItemStack>
                            /**
                             * Sets the item for the specified equipment type.
                             * @see Inventory#set(ItemStack)
                             * @param equipmentType Type of equipment slot to set
                             * @param stack stack to insert
                             * @return operation result, for details see {#link Inventory#set}
                             */
                            // @ts-ignore
                            set(equipmentType: org.spongepowered.api.item.inventory.property.EquipmentSlotType, stack: org.spongepowered.api.item.inventory.ItemStack): org.spongepowered.api.item.inventory.transaction.InventoryTransactionResult
                            /**
                             * Sets the item for the specified equipment type.
                             * @see Inventory#set(ItemStack)
                             * @param equipmentType Type of equipment slot to set
                             * @param stack stack to insert
                             * @return operation result, for details see {#link Inventory#set}
                             */
                            // @ts-ignore
                            set(equipmentType: org.spongepowered.api.item.inventory.equipment.EquipmentType, stack: org.spongepowered.api.item.inventory.ItemStack): org.spongepowered.api.item.inventory.transaction.InventoryTransactionResult
                            /**
                             * Gets the {@link Slot} for the specified equipment type.
                             * @param equipmentType Type of equipment slot to set
                             * @return matching slot or {#link Optional#empty()} if no matching slot
                             */
                            // @ts-ignore
                            getSlot(equipmentType: org.spongepowered.api.item.inventory.property.EquipmentSlotType): java.util.Optional<org.spongepowered.api.item.inventory.Slot>
                            /**
                             * Gets the {@link Slot} for the specified equipment type.
                             * @param equipmentType Type of equipment slot to set
                             * @return matching slot or {#link Optional#empty()} if no matching slot
                             */
                            // @ts-ignore
                            getSlot(equipmentType: org.spongepowered.api.item.inventory.equipment.EquipmentType): java.util.Optional<org.spongepowered.api.item.inventory.Slot>
                        }
                    }
                }
            }
        }
    }
}
