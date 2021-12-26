declare namespace org {
    namespace bukkit {
        namespace attribute {
            /**
             * Concrete implementation of an attribute modifier.
             */
            // @ts-ignore
            class AttributeModifier extends java.lang.Object implements org.bukkit.configuration.serialization.ConfigurationSerializable {
                // @ts-ignore
                constructor(name: java.lang.String | string, amount: number /*double*/, operation: org.bukkit.attribute.AttributeModifier.Operation)
                // @ts-ignore
                constructor(uuid: java.util.UUID, name: java.lang.String | string, amount: number /*double*/, operation: org.bukkit.attribute.AttributeModifier.Operation)
                // @ts-ignore
                constructor(uuid: java.util.UUID, name: java.lang.String | string, amount: number /*double*/, operation: org.bukkit.attribute.AttributeModifier.Operation, slot: org.bukkit.inventory.EquipmentSlot)
                /**
                 * Get the unique ID for this modifier.
                 * @return unique id
                 */
                // @ts-ignore
                public getUniqueId(): java.util.UUID
                /**
                 * Get the name of this modifier.
                 * @return name
                 */
                // @ts-ignore
                public getName(): string
                /**
                 * Get the amount by which this modifier will apply its {@link Operation}.
                 * @return modification amount
                 */
                // @ts-ignore
                public getAmount(): number /*double*/
                /**
                 * Get the operation this modifier will apply.
                 * @return operation
                 */
                // @ts-ignore
                public getOperation(): org.bukkit.attribute.AttributeModifier.Operation
                /**
                 * Get the {@link EquipmentSlot} this AttributeModifier is active on,
                 * or null if this modifier is applicable for any slot.
                 * @return the slot
                 */
                // @ts-ignore
                public getSlot(): org.bukkit.inventory.EquipmentSlot
                // @ts-ignore
                public serialize(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                // @ts-ignore
                public equals(other: java.lang.Object | any): boolean
                // @ts-ignore
                public hashCode(): number /*int*/
                // @ts-ignore
                public toString(): string
                // @ts-ignore
                public static deserialize(args: java.util.Map<java.lang.String | string, java.lang.Object | any>): org.bukkit.attribute.AttributeModifier
            }
        }
    }
}
