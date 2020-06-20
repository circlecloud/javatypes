declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace property {
                    namespace item {
                        /**
                         * A {@link RecordProperty} used to retrieve a {@link RecordType}
                         * from a {@link ItemType} or {@link ItemStack}.
                         */
                        // @ts-ignore
                        class RecordProperty extends org.spongepowered.api.data.property.AbstractProperty<java.lang.String, org.spongepowered.api.effect.sound.record.RecordType> {
                            /**
                             * Constructs a new record property with the specified record type.
                             * @param instrument The record type the record plays
                             */
                            // @ts-ignore
                            constructor(instrument: org.spongepowered.api.effect.sound.record.RecordType)
                            // @ts-ignore
                            compareTo(o: org.spongepowered.api.data.Property<any, ?>): int
                        }
                    }
                }
            }
        }
    }
}
