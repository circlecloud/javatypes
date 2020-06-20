declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace property {
                    namespace entity {
                        // @ts-ignore
                        class EyeLocationProperty extends org.spongepowered.api.data.property.AbstractProperty<java.lang.String, Vector3d> {
                            /**
                             * Creates a new {@link EyeLocationProperty} based on the provided
                             * {@code position}.
                             * @param value The position value
                             */
                            // @ts-ignore
                            constructor(value: Vector3d)
                            /**
                             * Creates a new {@link EyeLocationProperty} based on the provided
                             * {@link Vector3d position} and
                             * {@link org.spongepowered.api.data.Property.Operator comparison operator}.
                             * @param value The position value
                             * @param op The comparison operator
                             */
                            // @ts-ignore
                            constructor(value: Vector3d, op: org.spongepowered.api.data.Property.Operator)
                            // @ts-ignore
                            compareTo(o: org.spongepowered.api.data.Property<any, ?>): int
                        }
                    }
                }
            }
        }
    }
}
