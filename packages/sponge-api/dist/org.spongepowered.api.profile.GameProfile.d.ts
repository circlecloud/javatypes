declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace profile {
                /**
                 * Represents a profile of a user.
                 * <p>Use the {@link UserStorageService} service to
                 * obtain the stored data associated with a profile.</p>
                 */
                // @ts-ignore
                interface GameProfile extends org.spongepowered.api.util.Identifiable, org.spongepowered.api.data.DataSerializable {
                    /**
                     * Creates a {@link GameProfile} from the provided ID.
                     * <p>The name of the created profile will be {@code null}.</p>
                     * @param uniqueId The unique id
                     * @return The created profile
                     */
                    // @ts-ignore
                    of(uniqueId: java.util.UUID): org.spongepowered.api.profile.GameProfile
                    /**
                     * Creates a {@link GameProfile} from the provided ID and name.
                     * @param uniqueId The unique id
                     * @param name The name
                     * @return The created profile
                     */
                    // @ts-ignore
                    of(uniqueId: java.util.UUID, name: string): org.spongepowered.api.profile.GameProfile
                    /**
                     * Gets the name associated with this profile.
                     * @return The associated name if present, otherwise {#link Optional#empty()}
                     */
                    // @ts-ignore
                    getName(): java.util.Optional<java.lang.String>
                    /**
                     * Gets the property map for this profile.
                     * <p>This is a mutable map.</p>
                     * @return The property map
                     */
                    // @ts-ignore
                    getPropertyMap(): <any>
                    /**
                     * Adds a profile property to this game profile.
                     * <p>The {@link ProfileProperty#getName() name} of the property is used when
                     * adding the profile property to the {@link #getPropertyMap() property map}.</p>
                     * @param property The profile property
                     * @return The game profile
                     */
                    // @ts-ignore
                    addProperty(property: org.spongepowered.api.profile.property.ProfileProperty): org.spongepowered.api.profile.GameProfile
                    /**
                     * Adds a profile property to this game profile.
                     * @param name The name of the property
                     * @param property The profile property
                     * @return The game profile
                     */
                    // @ts-ignore
                    addProperty(name: string, property: org.spongepowered.api.profile.property.ProfileProperty): org.spongepowered.api.profile.GameProfile
                    /**
                     * Removes a profile property to this game profile.
                     * <p>The {@link ProfileProperty#getName() name} of the property is used when
                     * removing the profile property from the {@link #getPropertyMap() property map}.</p>
                     * @param property The profile property
                     * @return {#code true} if the property map changed
                     */
                    // @ts-ignore
                    removeProperty(property: org.spongepowered.api.profile.property.ProfileProperty): boolean
                    /**
                     * Removes a profile property to this game profile.
                     * @param name The name of the property
                     * @param property The profile property
                     * @return {#code true} if the property map changed
                     */
                    // @ts-ignore
                    removeProperty(name: string, property: org.spongepowered.api.profile.property.ProfileProperty): boolean
                    /**
                     * Checks if this profile is filled.
                     * <p>A filled profile contains both a unique id and name.</p>
                     * @return {#code true} if this profile is filled
                     * @see GameProfileManager#fill(GameProfile)
                     * @see GameProfileManager#fill(GameProfile, boolean)
                     * @see GameProfileManager#fill(GameProfile, boolean, boolean)
                     */
                    // @ts-ignore
                    isFilled(): boolean
                }
            }
        }
    }
}
