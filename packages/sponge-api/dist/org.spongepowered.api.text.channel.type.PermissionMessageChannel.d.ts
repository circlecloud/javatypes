declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace channel {
                    namespace type {
                        /**
                         * A message channel that targets all subjects with the given permission.
                         */
                        // @ts-ignore
                        class PermissionMessageChannel extends java.lang.Object implements org.spongepowered.api.text.channel.MessageChannel {
                            /**
                             * Creates a new {@link MessageChannel} with the provided {@link String permission}
                             * required to be considered a "target" {@link MessageReceiver}.
                             * @param permission The permission node
                             */
                            // @ts-ignore
                            constructor(permission: java.lang.String | string)
                            // @ts-ignore
                            readonly permission: java.lang.String | string
                            /**
                             * Gets the {@link String} permission required to be included in this
                             * {@link MessageChannel}.
                             * @return The permission node
                             */
                            // @ts-ignore
                            public getPermission(): string
                            // @ts-ignore
                            public getMembers(): Array<org.spongepowered.api.text.channel.MessageReceiver>
                        }
                    }
                }
            }
        }
    }
}
