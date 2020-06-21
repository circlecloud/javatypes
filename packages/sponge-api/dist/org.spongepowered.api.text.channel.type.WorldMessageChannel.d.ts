declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace channel {
                    namespace type {
                        /**
                         * A message channel that targets all subjects within the given {@link World}.
                         */
                        // @ts-ignore
                        class WorldMessageChannel extends java.lang.Object implements org.spongepowered.api.text.channel.MessageChannel {
                            /**
                             * Creates a new {@link MessageChannel channel} specific to the provided
                             * {@link World world}.
                             * @param world The world to target
                             */
                            // @ts-ignore
                            constructor(world: org.spongepowered.api.world.World)
                            // @ts-ignore
                            public getMembers(): Array<org.spongepowered.api.text.channel.MessageReceiver>
                        }
                    }
                }
            }
        }
    }
}
