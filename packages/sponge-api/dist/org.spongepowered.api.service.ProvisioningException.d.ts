declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                /**
                 * Thrown when a provider has not been registered or one cannot be
                 * provisioned.
                 */
                // @ts-ignore
                class ProvisioningException extends java.lang.RuntimeException {
                    /**
                     * Constructs a new {@link ProvisioningException} for the specified service.
                     * @param service The service requested
                     */
                    // @ts-ignore
                    constructor(service: java.lang.Class<any>)
                    /**
                     * Constructs a new {@link ProvisioningException} for the specified service with
                     * the specified message.
                     * @param message The exception message
                     * @param service The service requested
                     */
                    // @ts-ignore
                    constructor(message: string, service: java.lang.Class<any>)
                    /**
                     * Constructs a new {@link ProvisioningException} for the specified service with
                     * the specified service and cause.
                     * @param message The exception message
                     * @param cause The cause of this exception
                     * @param service The service requested
                     */
                    // @ts-ignore
                    constructor(message: string, cause: Error, service: java.lang.Class<any>)
                    /**
                     * Constructs a new {@link ProvisioningException} for the specified service with
                     * the specified cause and a null message.
                     * @param cause The cause of this exception
                     * @param service The service requested
                     */
                    // @ts-ignore
                    constructor(cause: Error, service: java.lang.Class<any>)
                    /**
                     * Gets the service that was requested.
                     * @return The service
                     */
                    // @ts-ignore
                    getService(): java.lang.Class<?>
                }
            }
        }
    }
}
