declare namespace org {
    namespace bukkit {
        namespace permissions {
            /**
             * Represents a class which is to be notified when a {@link
             * PermissionAttachment} is removed from a {@link Permissible}
             */
            // @ts-ignore
            interface PermissionRemovedExecutor {
                /**
                 * Called when a {@link PermissionAttachment} is removed from a {@link
                 * Permissible}
                 * @param attachment Attachment which was removed
                 */
                // @ts-ignore
                attachmentRemoved(attachment: org.bukkit.permissions.PermissionAttachment): void
            }
        }
    }
}
