declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace property {
                    namespace block {
                        /**
                         * A property that provides the {@link ItemType} representation of what a
                         * {@link BlockState} or {@link BlockType} may present itself if it was
                         * represented as an {@link ItemStack}.
                         */
                        // @ts-ignore
                        class HeldItemProperty extends org.spongepowered.api.data.property.AbstractProperty<java.lang.String | string, org.spongepowered.api.item.ItemType> {
                            /**
                             * Creates a new {@link HeldItemProperty} with the provided {@link ItemType}.
                             * @param value The item type value for the block
                             */
                            // @ts-ignore
                            constructor(value: org.spongepowered.api.item.ItemType)
                            /**
                             * Creates a new {@link HeldItemProperty} with the provided {@link ItemType}
                             * and {@link org.spongepowered.api.data.Property.Operator comparison operator}.
                             * @param value The item value
                             * @param op The operator for comparisons
                             */
                            // @ts-ignore
                            constructor(value: org.spongepowered.api.item.ItemType, op: org.spongepowered.api.data.Property.Operator)
                            // @ts-ignore
                            public compareTo(o: org.spongepowered.api.data.Property<any, any>): number /*int*/
                        }
                    }
                }
            }
        }
    }
}
