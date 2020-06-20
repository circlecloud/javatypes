declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace property {
                        /**
                         * A property type intended for use with {@link InputSlot}s in order to
                         * query for slots which can accept items of the specified type. It is intended
                         * that the semantics of the {@link #equals} will be such that the method will
                         * return true if the other property contains <em>any</em> item present in this
                         * property's collection.
                         */
                        // @ts-ignore
                        class AcceptsItems extends org.spongepowered.api.item.inventory.property.AbstractInventoryProperty<java.lang.String, java.util.Collection<org.spongepowered.api.item.ItemType>> {
                            /**
                             * Create a new AcceptsItems property with the supplied value.
                             * @param value Item types to accept
                             */
                            // @ts-ignore
                            constructor(value: Array<org.spongepowered.api.item.ItemType>)
                            /**
                             * Create a new AcceptsItems property with the supplied value and operator.
                             * @param value Item types to accept
                             * @param operator Logical operator to apply when comparing with other
                             *       properties
                             */
                            // @ts-ignore
                            constructor(value: Array<org.spongepowered.api.item.ItemType>, operator: org.spongepowered.api.data.Property.Operator)
                            /**
                             * Create a new AcceptsItems property with the supplied value and operator.
                             * @param value Item types to accept
                             * @param operator Logical operator to apply when comparing with other
                             *       properties
                             */
                            // @ts-ignore
                            constructor(value: any, operator: org.spongepowered.api.data.Property.Operator)
                            // @ts-ignore
                            compareTo(other: org.spongepowered.api.data.Property<any, ?>): int
                            /**
                             * Returns true if <em>other</em> is also an {@link AcceptsItems} property
                             * and <b>any</b> item appearing in the other property's collection appears
                             * in this property's collection. In formal terms, the method returns true
                             * if the size of the intersection between the two item type collections is
                             * greater than zero.
                             */
                            // @ts-ignore
                            equals(obj: any): boolean
                            /**
                             * Create an AcceptsItems property which matches AcceptsItems properties
                             * with containing one or more of the supplied values.
                             * @param value {#link ItemType}s to accept
                             * @return new property
                             */
                            // @ts-ignore
                            of(...value: any[]): org.spongepowered.api.item.inventory.property.AcceptsItems
                        }
                    }
                }
            }
        }
    }
}
