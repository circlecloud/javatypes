declare namespace org {
    namespace bukkit {
        namespace permissions {
            /**
             * Represents an object that may be assigned permissions
             */
            // @ts-ignore
            interface Permissible extends org.bukkit.permissions.ServerOperator {
                /**
                 * Checks if this object contains an override for the specified
                 * permission, by fully qualified name
                 * @param name Name of the permission
                 * @return true if the permission is set, otherwise false
                 */
                // @ts-ignore
                isPermissionSet(name: java.lang.String | string): boolean
                /**
                 * Checks if this object contains an override for the specified {@link
                 * Permission}
                 * @param perm Permission to check
                 * @return true if the permission is set, otherwise false
                 */
                // @ts-ignore
                isPermissionSet(perm: org.bukkit.permissions.Permission): boolean
                /**
                 * Gets the value of the specified permission, if set.
                 * <p>
                 * If a permission override is not set on this object, the default value
                 * of the permission will be returned.
                 * @param name Name of the permission
                 * @return Value of the permission
                 */
                // @ts-ignore
                hasPermission(name: java.lang.String | string): boolean
                /**
                 * Gets the value of the specified permission, if set.
                 * <p>
                 * If a permission override is not set on this object, the default value
                 * of the permission will be returned
                 * @param perm Permission to get
                 * @return Value of the permission
                 */
                // @ts-ignore
                hasPermission(perm: org.bukkit.permissions.Permission): boolean
                /**
                 * Adds a new {@link PermissionAttachment} with a single permission by
                 * name and value
                 * @param plugin Plugin responsible for this attachment, may not be null
                 *      or disabled
                 * @param name Name of the permission to attach
                 * @param value Value of the permission
                 * @return The PermissionAttachment that was just created
                 */
                // @ts-ignore
                addAttachment(plugin: org.bukkit.plugin.Plugin, name: java.lang.String | string, value: boolean): org.bukkit.permissions.PermissionAttachment
                /**
                 * Adds a new empty {@link PermissionAttachment} to this object
                 * @param plugin Plugin responsible for this attachment, may not be null
                 *      or disabled
                 * @return The PermissionAttachment that was just created
                 */
                // @ts-ignore
                addAttachment(plugin: org.bukkit.plugin.Plugin): org.bukkit.permissions.PermissionAttachment
                /**
                 * Temporarily adds a new {@link PermissionAttachment} with a single
                 * permission by name and value
                 * @param plugin Plugin responsible for this attachment, may not be null
                 *      or disabled
                 * @param name Name of the permission to attach
                 * @param value Value of the permission
                 * @param ticks Amount of ticks to automatically remove this attachment
                 *      after
                 * @return The PermissionAttachment that was just created
                 */
                // @ts-ignore
                addAttachment(plugin: org.bukkit.plugin.Plugin, name: java.lang.String | string, value: boolean, ticks: number /*int*/): org.bukkit.permissions.PermissionAttachment
                /**
                 * Temporarily adds a new empty {@link PermissionAttachment} to this
                 * object
                 * @param plugin Plugin responsible for this attachment, may not be null
                 *      or disabled
                 * @param ticks Amount of ticks to automatically remove this attachment
                 *      after
                 * @return The PermissionAttachment that was just created
                 */
                // @ts-ignore
                addAttachment(plugin: org.bukkit.plugin.Plugin, ticks: number /*int*/): org.bukkit.permissions.PermissionAttachment
                /**
                 * Removes the given {@link PermissionAttachment} from this object
                 * @param attachment Attachment to remove
                 * @throws IllegalArgumentException Thrown when the specified attachment
                 *      isn't part of this object
                 */
                // @ts-ignore
                removeAttachment(attachment: org.bukkit.permissions.PermissionAttachment): void
                /**
                 * Recalculates the permissions for this object, if the attachments have
                 * changed values.
                 * <p>
                 * This should very rarely need to be called from a plugin.
                 */
                // @ts-ignore
                recalculatePermissions(): void
                /**
                 * Gets a set containing all of the permissions currently in effect by
                 * this object
                 * @return Set of currently effective permissions
                 */
                // @ts-ignore
                getEffectivePermissions(): Array<org.bukkit.permissions.PermissionAttachmentInfo>
            }
        }
    }
}
