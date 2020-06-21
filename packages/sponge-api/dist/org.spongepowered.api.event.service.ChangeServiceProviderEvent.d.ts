declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace service {
                    /**
                     * Fired when the provider has been changed for a service in the {@link ServiceManager}.
                     * <p>This event is fired after the replacement has taken place. Calling
                     * {@link ServiceManager#provideUnchecked(Class)} with the service will return
                     * {@link #getNewProviderRegistration()}.</p>
                     * <p>This can occur when a provider is registered for a service for the first
                     * time, or when the provider for a service is replaced.</p>
                     */
                    // @ts-ignore
                    interface ChangeServiceProviderEvent extends org.spongepowered.api.event.Event {
                        /**
                         * Gets the previous provider registration for the service, if available.
                         * <p>If a provider is being registered for the first time for the service,
                         * this will return {@link Optional#empty()}.</p>
                         * <p>If this is present, then it will always have the same
                         * provider as {@link #getNewProviderRegistration()}.</p>
                         * @return The previous provider registration, if available
                         */
                        // @ts-ignore
                        getPreviousProviderRegistration(): java.util.Optional<org.spongepowered.api.service.ProviderRegistration<any>>
                        /**
                         * Gets the new provider registration for the service.
                         * @return The new provider registration
                         */
                        // @ts-ignore
                        getNewProviderRegistration(): org.spongepowered.api.service.ProviderRegistration<any>
                        /**
                         * Gets whether a previous provider existed, which was replaced by the new
                         * provider.
                         * @return Whether a provider was replaced.
                         */
                        // @ts-ignore
                        isReplacement(): boolean
                        /**
                         * Gets the service that a provider is being registered for.
                         * @return The service
                         */
                        // @ts-ignore
                        getService(): java.lang.Class<any>
                        /**
                         * Gets the new provider being registered.
                         * @return The provider
                         */
                        // @ts-ignore
                        getNewProvider(): any
                    }
                }
            }
        }
    }
}
