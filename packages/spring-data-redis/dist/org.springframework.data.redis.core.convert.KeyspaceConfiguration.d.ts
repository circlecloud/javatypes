declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace convert {
                        /**
                         * {@link KeyspaceConfiguration} allows programmatic setup of keyspaces and time to live options for certain types. This
                         * is suitable for cases where there is no option to use the equivalent {@link RedisHash} or {@link TimeToLive}
                         * annotations.
                         * @author Christoph Strobl
                         * @since 1.7
                         */
                        // @ts-ignore
                        class KeyspaceConfiguration extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            /**
                             * Check if specific {@link KeyspaceSettings} are available for given type.
                             * @param type must not be {#literal null}.
                             * @return true if settings exist.
                             */
                            // @ts-ignore
                            public hasSettingsFor(type: java.lang.Class<any>): boolean
                            /**
                             * Get the {@link KeyspaceSettings} for given type.
                             * @param type must not be {#literal null}
                             * @return {#literal null} if no settings configured.
                             */
                            // @ts-ignore
                            public getKeyspaceSettings(type: java.lang.Class<any>): org.springframework.data.redis.core.convert.KeyspaceConfiguration.KeyspaceSettings
                            /**
                             * Customization hook.
                             * @return must not return {#literal null}.
                             */
                            // @ts-ignore
                            initialConfiguration(): java.lang.Iterable<org.springframework.data.redis.core.convert.KeyspaceConfiguration.KeyspaceSettings>
                            /**
                             * Add {@link KeyspaceSettings} for type.
                             * @param keyspaceSettings must not be {#literal null}.
                             */
                            // @ts-ignore
                            public addKeyspaceSettings(keyspaceSettings: org.springframework.data.redis.core.convert.KeyspaceConfiguration.KeyspaceSettings): void
                        }
                    }
                }
            }
        }
    }
}
