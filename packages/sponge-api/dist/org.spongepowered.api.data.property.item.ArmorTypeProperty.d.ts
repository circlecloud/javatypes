declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace property {
                    namespace item {
                        // @ts-ignore
                        class ArmorTypeProperty extends org.spongepowered.api.data.property.AbstractProperty<java.lang.String | string, org.spongepowered.api.data.type.ArmorType> {
                            /**
                             * Construct a new {@link ArmorTypeProperty} with the desired
                             * {@link ArmorType}.
                             * @param value The armor type to use
                             */
                            // @ts-ignore
                            constructor(value: org.spongepowered.api.data.type.ArmorType)
                            /**
                             * Construct a new {@link ArmorTypeProperty} with the desired
                             * {@link ArmorType} and
                             * {@link org.spongepowered.api.data.Property.Operator}.
                             * @param value The armor type to use
                             * @param op The operator to use for comparisons
                             */
                            // @ts-ignore
                            constructor(value: org.spongepowered.api.data.type.ArmorType, op: org.spongepowered.api.data.Property.Operator)
                            // @ts-ignore
                            public compareTo(o: org.spongepowered.api.data.Property<any, any>): number /*int*/
                        }
                    }
                }
            }
        }
    }
}
