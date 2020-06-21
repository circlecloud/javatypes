declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace Cause {
                        // @ts-ignore
                        class Builder extends java.lang.Object implements org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.event.cause.Cause, org.spongepowered.api.event.cause.Cause.Builder> {
                            /**
                             * Appends the specified object to the cause.
                             * @param cause The object to append to the cause.
                             * @return The modified builder, for chaining
                             */
                            // @ts-ignore
                            public append(cause: java.lang.Object | any): org.spongepowered.api.event.cause.Cause.Builder
                            /**
                             * Inserts the specified object into the cause.
                             * @param position The position to insert into
                             * @param cause The object to insert into the cause
                             * @return The modified builder, for chaining
                             */
                            // @ts-ignore
                            public insert(position: number /*int*/, cause: java.lang.Object | any): org.spongepowered.api.event.cause.Cause.Builder
                            /**
                             * Appends all specified objects onto the cause.
                             * @param causes The objects to add onto the cause
                             * @return The modified builder, for chaining
                             */
                            // @ts-ignore
                            public appendAll(causes: java.util.Collection<java.lang.Object | any> | Array<java.lang.Object | any>): org.spongepowered.api.event.cause.Cause.Builder
                            /**
                             * Constructs a new {@link Cause} with information added to the builder.
                             * @param ctx The context to build the cause with
                             * @return The built cause
                             */
                            // @ts-ignore
                            public build(ctx: org.spongepowered.api.event.cause.EventContext): org.spongepowered.api.event.cause.Cause
                            // @ts-ignore
                            public from(value: org.spongepowered.api.event.cause.Cause): org.spongepowered.api.event.cause.Cause.Builder
                            // @ts-ignore
                            public reset(): org.spongepowered.api.event.cause.Cause.Builder
                        }
                    }
                }
            }
        }
    }
}
