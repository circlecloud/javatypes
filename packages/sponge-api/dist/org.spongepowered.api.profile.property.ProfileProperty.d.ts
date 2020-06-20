declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace profile {
                namespace property {
                    /**
                     * Represents a property in a {@link GameProfile}'s profile property map.
                     * <p>This interface should not be implemented.</p>
                     * @see #of(String, String)
                     * @see #of(String, String, String)
                     */
                    // @ts-ignore
                    interface ProfileProperty {
                        /**
                         * Creates a new property.
                         * @param name The name for the property
                         * @param value The value of the property
                         * @return The new property
                         */
                        // @ts-ignore
                        of(name: string, value: string): org.spongepowered.api.profile.property.ProfileProperty
                        /**
                         * Creates a new signed property.
                         * <p>Depending on the property name, if the signature is provided it must
                         * originate from Mojang.</p>
                         * @param name The name for the property
                         * @param value The value of the property
                         * @param signature The signature of the property
                         * @return The new property
                         */
                        // @ts-ignore
                        of(name: string, value: string, signature: string): org.spongepowered.api.profile.property.ProfileProperty
                        /**
                         * Gets the name of this property.
                         * @return The name
                         */
                        // @ts-ignore
                        getName(): java.lang.String
                        /**
                         * Gets the value of this property.
                         * @return The value
                         */
                        // @ts-ignore
                        getValue(): java.lang.String
                        /**
                         * Gets the signature of this property.
                         * <p>Depending on the property name, if the signature is provided it must
                         * originate from Mojang.</p>
                         * @return The signature, or {#link Optional#empty()} if not present
                         */
                        // @ts-ignore
                        getSignature(): java.util.Optional<java.lang.String>
                        /**
                         * Tests if this property has a signature.
                         * @return Whether this property has a signature
                         */
                        // @ts-ignore
                        hasSignature(): boolean
                    }
                }
            }
        }
    }
}
