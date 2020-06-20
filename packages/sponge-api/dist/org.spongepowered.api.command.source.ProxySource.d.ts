declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                namespace source {
                    /**
                     * Proxy sources are {@link CommandSource}s that are run by one source as a
                     * different source.
                     */
                    // @ts-ignore
                    interface ProxySource extends org.spongepowered.api.command.CommandSource {
                        /**
                         * Gets the {@link CommandSource} this source is created by.
                         * @return The proxied source
                         */
                        // @ts-ignore
                        getOriginalSource(): org.spongepowered.api.command.CommandSource
                    }
                }
            }
        }
    }
}
