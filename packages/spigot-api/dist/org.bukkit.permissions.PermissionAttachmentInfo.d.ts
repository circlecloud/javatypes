declare namespace org {
    namespace bukkit {
        namespace permissions {
            /**
             * Holds information on a permission and which {@link PermissionAttachment}
             * provides it
             */
            // @ts-ignore
            class PermissionAttachmentInfo extends java.lang.Object {
                // @ts-ignore
                constructor(permissible: org.bukkit.permissions.Permissible, permission: string, attachment: org.bukkit.permissions.PermissionAttachment, value: boolean)
                /**
                 * Gets the permissible this is attached to
                 * @return Permissible this permission is for
                 */
                // @ts-ignore
                getPermissible(): org.bukkit.permissions.Permissible
                /**
                 * Gets the permission being set
                 * @return Name of the permission
                 */
                // @ts-ignore
                getPermission(): java.lang.String
                /**
                 * Gets the attachment providing this permission. This may be null for
                 * default permissions (usually parent permissions).
                 * @return Attachment
                 */
                // @ts-ignore
                getAttachment(): org.bukkit.permissions.PermissionAttachment
                /**
                 * Gets the value of this permission
                 * @return Value of the permission
                 */
                // @ts-ignore
                getValue(): boolean
            }
        }
    }
}
