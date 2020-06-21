declare namespace org {
    namespace bukkit {
        namespace permissions {
            /**
             * Represents a unique permission that may be attached to a {@link
             * Permissible}
             */
            // @ts-ignore
            class Permission extends java.lang.Object {
                // @ts-ignore
                constructor(name: java.lang.String | string)
                // @ts-ignore
                constructor(name: java.lang.String | string, description: java.lang.String | string)
                // @ts-ignore
                constructor(name: java.lang.String | string, defaultValue: org.bukkit.permissions.PermissionDefault)
                // @ts-ignore
                constructor(name: java.lang.String | string, description: java.lang.String | string, defaultValue: org.bukkit.permissions.PermissionDefault)
                // @ts-ignore
                constructor(name: java.lang.String | string, children: java.util.Map<java.lang.String | string, java.lang.Boolean>)
                // @ts-ignore
                constructor(name: java.lang.String | string, description: java.lang.String | string, children: java.util.Map<java.lang.String | string, java.lang.Boolean>)
                // @ts-ignore
                constructor(name: java.lang.String | string, defaultValue: org.bukkit.permissions.PermissionDefault, children: java.util.Map<java.lang.String | string, java.lang.Boolean>)
                // @ts-ignore
                constructor(name: java.lang.String | string, description: java.lang.String | string, defaultValue: org.bukkit.permissions.PermissionDefault, children: java.util.Map<java.lang.String | string, java.lang.Boolean>)
                // @ts-ignore
                public static readonly DEFAULT_PERMISSION: org.bukkit.permissions.PermissionDefault
                /**
                 * Returns the unique fully qualified name of this Permission
                 * @return Fully qualified name
                 */
                // @ts-ignore
                public getName(): string
                /**
                 * Gets the children of this permission.
                 * <p>
                 * If you change this map in any form, you must call {@link
                 * #recalculatePermissibles()} to recalculate all {@link Permissible}s
                 * @return Permission children
                 */
                // @ts-ignore
                public getChildren(): java.util.Map<java.lang.String | string, java.lang.Boolean>
                /**
                 * Gets the default value of this permission.
                 * @return Default value of this permission.
                 */
                // @ts-ignore
                public getDefault(): org.bukkit.permissions.PermissionDefault
                /**
                 * Sets the default value of this permission.
                 * <p>
                 * This will not be saved to disk, and is a temporary operation until the
                 * server reloads permissions. Changing this default will cause all {@link
                 * Permissible}s that contain this permission to recalculate their
                 * permissions
                 * @param value The new default to set
                 */
                // @ts-ignore
                public setDefault(value: org.bukkit.permissions.PermissionDefault): void
                /**
                 * Gets a brief description of this permission, may be empty
                 * @return Brief description of this permission
                 */
                // @ts-ignore
                public getDescription(): string
                /**
                 * Sets the description of this permission.
                 * <p>
                 * This will not be saved to disk, and is a temporary operation until the
                 * server reloads permissions.
                 * @param value The new description to set
                 */
                // @ts-ignore
                public setDescription(value: java.lang.String | string): void
                /**
                 * Gets a set containing every {@link Permissible} that has this
                 * permission.
                 * <p>
                 * This set cannot be modified.
                 * @return Set containing permissibles with this permission
                 */
                // @ts-ignore
                public getPermissibles(): Array<org.bukkit.permissions.Permissible>
                /**
                 * Recalculates all {@link Permissible}s that contain this permission.
                 * <p>
                 * This should be called after modifying the children, and is
                 * automatically called after modifying the default value
                 */
                // @ts-ignore
                public recalculatePermissibles(): void
                /**
                 * Adds this permission to the specified parent permission.
                 * <p>
                 * If the parent permission does not exist, it will be created and
                 * registered.
                 * @param name Name of the parent permission
                 * @param value The value to set this permission to
                 * @return Parent permission it created or loaded
                 */
                // @ts-ignore
                public addParent(name: java.lang.String | string, value: boolean): org.bukkit.permissions.Permission
                /**
                 * Adds this permission to the specified parent permission.
                 * @param perm Parent permission to register with
                 * @param value The value to set this permission to
                 */
                // @ts-ignore
                public addParent(perm: org.bukkit.permissions.Permission, value: boolean): void
                /**
                 * Loads a list of Permissions from a map of data, usually used from
                 * retrieval from a yaml file.
                 * <p>
                 * The data may contain a list of name:data, where the data contains the
                 * following keys:
                 * <ul>
                 * <li>default: Boolean true or false. If not specified, false.
                 * <li>children: {@code Map<String, Boolean>} of child permissions. If not
                 * specified, empty list.
                 * <li>description: Short string containing a very small description of
                 * this description. If not specified, empty string.
                 * </ul>
                 * @param data Map of permissions
                 * @param error An error message to show if a permission is invalid. May contain "%s" format tag, which will be replaced with the name of invalid permission.
                 * @param def Default permission value to use if missing
                 * @return Permission object
                 */
                // @ts-ignore
                public static loadPermissions(data: java.util.Map<any, any>, error: java.lang.String | string, def: org.bukkit.permissions.PermissionDefault): Array<org.bukkit.permissions.Permission>
                /**
                 * Loads a Permission from a map of data, usually used from retrieval from
                 * a yaml file.
                 * <p>
                 * The data may contain the following keys:
                 * <ul>
                 * <li>default: Boolean true or false. If not specified, false.
                 * <li>children: {@code Map<String, Boolean>} of child permissions. If not
                 * specified, empty list.
                 * <li>description: Short string containing a very small description of
                 * this description. If not specified, empty string.
                 * </ul>
                 * @param name Name of the permission
                 * @param data Map of keys
                 * @return Permission object
                 */
                // @ts-ignore
                public static loadPermission(name: java.lang.String | string, data: java.util.Map<java.lang.String | string, java.lang.Object | any>): org.bukkit.permissions.Permission
                /**
                 * Loads a Permission from a map of data, usually used from retrieval from
                 * a yaml file.
                 * <p>
                 * The data may contain the following keys:
                 * <ul>
                 * <li>default: Boolean true or false. If not specified, false.
                 * <li>children: {@code Map<String, Boolean>} of child permissions. If not
                 * specified, empty list.
                 * <li>description: Short string containing a very small description of
                 * this description. If not specified, empty string.
                 * </ul>
                 * @param name Name of the permission
                 * @param data Map of keys
                 * @param def Default permission value to use if not set
                 * @param output A list to append any created child-Permissions to, may be null
                 * @return Permission object
                 */
                // @ts-ignore
                public static loadPermission(name: java.lang.String | string, data: java.util.Map<any, any>, def: org.bukkit.permissions.PermissionDefault, output: java.util.List<org.bukkit.permissions.Permission> | Array<org.bukkit.permissions.Permission>): org.bukkit.permissions.Permission
            }
        }
    }
}
