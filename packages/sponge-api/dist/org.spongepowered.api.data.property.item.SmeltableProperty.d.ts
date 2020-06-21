declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace property {
                    namespace item {
                        /**
                         * Whether or not an {@link ItemType} can be smelted in a {@link Furnace}.
                         */
                        // @ts-ignore
                        class SmeltableProperty extends org.spongepowered.api.data.property.BooleanProperty {
                            /**
                             * Creates a new {@link SmeltableProperty}.
                             * @param value Whether the item is smeltable, or not.
                             */
                            // @ts-ignore
                            constructor(value: boolean)
                            /**
                             * Creates a new {@link SmeltableProperty}.
                             * @param value Whether the item is smeltable, or not.
                             * @param operator The operator to use to compare against other properties.
                             */
                            // @ts-ignore
                            constructor(value: boolean, operator: org.spongepowered.api.data.Property.Operator)
                            /**
                             * Creates a new {@link SmeltableProperty}.
                             * @param value Whether the item is smeltable, or not.
                             * @param operator The operator to use to compare against other properties.
                             */
                            // @ts-ignore
                            constructor(value: java.lang.Object | any, operator: org.spongepowered.api.data.Property.Operator)
                        }
                    }
                }
            }
        }
    }
}
