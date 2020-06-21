declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace property {
                    namespace item {
                        /**
                         * Represents a property that increases the food level of an entity
                         * based on consumption.
                         */
                        // @ts-ignore
                        class FoodRestorationProperty extends org.spongepowered.api.data.property.IntProperty {
                            /**
                             * Creates a new {@link FoodRestorationProperty}.
                             * @param value The value of food level restored upon use
                             */
                            // @ts-ignore
                            constructor(value: number /*int*/)
                            /**
                             * Creates a new {@link FoodRestorationProperty}.
                             * @param value The value of food level restored upon use
                             * @param operator The operator to use to compare to other properties
                             */
                            // @ts-ignore
                            constructor(value: number /*int*/, operator: org.spongepowered.api.data.Property.Operator)
                            /**
                             * Creates a new {@link FoodRestorationProperty}.
                             * @param value The value of food level restored upon use
                             * @param operator The operator to use to compare to other properties
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
