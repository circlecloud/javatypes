declare namespace org {
    namespace bukkit {
        namespace permissions {
            /**
             * Holds information about a permission attachment on a {@link Permissible}
             * object
             */
            // @ts-ignore
            class PermissionAttachment extends java.lang.Object {
                // @ts-ignore
                constructor(plugin: org.bukkit.plugin.Plugin, permissible: org.bukkit.permissions.Permissible)
                /**
                 * Gets the plugin responsible for this attachment
                 * @return Plugin responsible for this permission attachment
                 */
                // @ts-ignore
                getPlugin(): org.bukkit.plugin.Plugin
                /**
                 * Sets an object to be called for when this attachment is removed from a
                 * {@link Permissible}. May be null.
                 * @param ex Object to be called when this is removed
                 */
                // @ts-ignore
                setRemovalCallback(ex: org.bukkit.permissions.PermissionRemovedExecutor): void
                /**
                 * Gets the class that was previously set to be called when this
                 * attachment was removed from a {@link Permissible}. May be null.
                 * @return Object to be called when this is removed
                 */
                // @ts-ignore
                getRemovalCallback(): org.bukkit.permissions.PermissionRemovedExecutor
                /**
                 * Gets the Permissible that this is attached to
                 * @return Permissible containing this attachment
                 */
                // @ts-ignore
                getPermissible(): org.bukkit.permissions.Permissible
                /**
                 * Gets a copy of all set permissions and values contained within this
                 * attachment.
                 * <p>
                 * This map may be modified but will not affect the attachment, as it is a
                 * copy.
                 * @return Copy of all permissions and values expressed by this attachment
                 */
                // @ts-ignore
                getPermissions(): java.util.Map<java.lang.String, java.lang.Boolean>
                /**
                 * Sets a permission to the given value, by its fully qualified name
                 * @param name Name of the permission
                 * @param value New value of the permission
                 */
                // @ts-ignore
                setPermission(name: string, value: boolean): void
                /**
                 * Sets a permission to the given value
                 * @param perm Permission to set
                 * @param value New value of the permission
                 */
                // @ts-ignore
                setPermission(perm: org.bukkit.permissions.Permission, value: boolean): void
                /**
                 * Removes the specified permission from this attachment.
                 * <p>
                 * If the permission does not exist in this attachment, nothing will
                 * happen.
                 * @param name Name of the permission to remove
                 */
                // @ts-ignore
                unsetPermission(name: string): void
                /**
                 * Removes the specified permission from this attachment.
                 * <p>
                 * If the permission does not exist in this attachment, nothing will
                 * happen.
                 * @param perm Permission to remove
                 */
                // @ts-ignore
                unsetPermission(perm: org.bukkit.permissions.Permission): void
                /**
                 * Removes this attachment from its registered {@link Permissible}
                 * @return true if the permissible was removed successfully, false if it
                 *      did not exist
                 */
                // @ts-ignore
                remove(): boolean
            }
        }
    }
}
