declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace property {
                    namespace item {
                        /**
                         * Represents a limit on the number of uses on an item. Whether the uses are
                         * defined as durability or another item data value, usually, when the uses
                         * exceed this use limit, the item is removed or consumed.
                         */
                        // @ts-ignore
                        class UseLimitProperty extends org.spongepowered.api.data.property.IntProperty {
                            /**
                             * Creates a new {@link UseLimitProperty}.
                             * @param value The maximum use limit
                             */
                            // @ts-ignore
                            constructor(value: number /*int*/)
                            /**
                             * Creates a new {@link UseLimitProperty}.
                             * @param value The maximum use limit
                             * @param operator The operator to use to compare to other properties
                             */
                            // @ts-ignore
                            constructor(value: number /*int*/, operator: org.spongepowered.api.data.Property.Operator)
                            /**
                             * Creates a new {@link UseLimitProperty}.
                             * @param value The maximum use limit
                             * @param operator The operator to use to compare to other properties
                             */
                            // @ts-ignore
                            constructor(value: any, operator: org.spongepowered.api.data.Property.Operator)
                        }
                    }
                }
            }
        }
    }
}
