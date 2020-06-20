declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace property {
                    namespace block {
                        /**
                         * A {@link InstrumentProperty} provides the {@link InstrumentType} that will be
                         * used for the target block if a {@link BlockTypes#NOTEBLOCK} is placed on top of it.
                         */
                        // @ts-ignore
                        class InstrumentProperty extends org.spongepowered.api.data.property.AbstractProperty<java.lang.String, org.spongepowered.api.data.type.InstrumentType> {
                            /**
                             * Constructs a new {@link InstrumentProperty} with the
                             * specified {@link InstrumentType}.
                             * @param instrument The instrument type
                             */
                            // @ts-ignore
                            constructor(instrument: org.spongepowered.api.data.type.InstrumentType)
                            // @ts-ignore
                            compareTo(o: org.spongepowered.api.data.Property<any, ?>): int
                        }
                    }
                }
            }
        }
    }
}
