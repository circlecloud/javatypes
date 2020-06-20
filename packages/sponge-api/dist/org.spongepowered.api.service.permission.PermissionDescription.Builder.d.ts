declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace permission {
                    namespace PermissionDescription {
                        /**
                         * A builder for permission descriptions.
                         */
                        // @ts-ignore
                        interface Builder {
                            /**
                             * Sets the permission id for the description this builder creates.
                             * <p>See {@link PermissionDescription#getId()} for format
                             * specifications.</p>
                             * @param permissionId The permission id
                             * @return This builder for chaining
                             */
                            // @ts-ignore
                            id(permissionId: string): org.spongepowered.api.service.permission.PermissionDescription.Builder
                            /**
                             * Sets the short description to use.
                             * <p>May include a link to a more detailed description on the plugin's
                             * web page.</p>
                             * <p>Can be null if the permission does not have a description.</p>
                             * @param description The short description to use
                             * @return This builder for chaining
                             */
                            // @ts-ignore
                            description(description: org.spongepowered.api.text.Text): org.spongepowered.api.service.permission.PermissionDescription.Builder
                            /**
                             * Assigns this permission to the given role-template {@link Subject}.
                             * <p>If the given subject does not exist it will be created. Permission
                             * templates should not be assigned to regular subjects.</p>
                             * <p>It is recommended to use the standard role suggestions expressed
                             * as static parameters in {@link PermissionDescription}.</p>
                             * <p>Do not assign a permission to user, staff and admin at the same
                             * time but solve this with subject inheritance if possible.</p>
                             * <p><b>Note:</b> The permissions are only assigned during
                             * {@link #register()}.</p>
                             * @param role The role-template to assign the permission to. See
                             *              constants in {#link PermissionDescription} for common
                             *              roles (not exhaustive).
                             * @param value The value to to assign
                             * @return This builder for chaining
                             */
                            // @ts-ignore
                            assign(role: string, value: boolean): org.spongepowered.api.service.permission.PermissionDescription.Builder
                            /**
                             * Creates and registers a new {@link PermissionDescription} instance
                             * with the given settings.
                             * @return The newly created permission description instance
                             * @throws IllegalStateException If there are any settings left unset or
                             *          a description with the given permission id was already
                             *          registered and the {#link PermissionService} does not support
                             *          overwriting descriptions
                             */
                            // @ts-ignore
                            register(): org.spongepowered.api.service.permission.PermissionDescription
                        }
                    }
                }
            }
        }
    }
}
