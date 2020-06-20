declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace property {
                    namespace item {
                        /**
                         * Represents an item property that replenishes saturation upon use or
                         * consumption. Examples of items that have these properties: any food item.
                         */
                        // @ts-ignore
                        class SaturationProperty extends org.spongepowered.api.data.property.DoubleProperty {
                            /**
                             * Creates a new {@link SaturationProperty}.
                             * @param value The value of saturation replenished upon use
                             */
                            // @ts-ignore
                            constructor(value: number)
                            /**
                             * Creates a new {@link SaturationProperty}.
                             * @param value The value of saturation replenished upon use
                             * @param op The operator to use to compare to other properties
                             */
                            // @ts-ignore
                            constructor(value: number, op: org.spongepowered.api.data.Property.Operator)
                        }
                    }
                }
            }
        }
    }
}
