declare namespace org {
    namespace bukkit {
        namespace permissions {
            /**
             * Represents the possible default values for permissions
             */
            // @ts-ignore
            class PermissionDefault extends java.lang.Enum<org.bukkit.permissions.PermissionDefault> {
                // @ts-ignore
                values(): org.bukkit.permissions.PermissionDefault[]
                // @ts-ignore
                valueOf(name: string): org.bukkit.permissions.PermissionDefault
                /**
                 * Calculates the value of this PermissionDefault for the given operator
                 * value
                 * @param op If the target is op
                 * @return True if the default should be true, or false
                 */
                // @ts-ignore
                getValue(op: boolean): boolean
                /**
                 * Looks up a PermissionDefault by name
                 * @param name Name of the default
                 * @return Specified value, or null if not found
                 */
                // @ts-ignore
                getByName(name: string): org.bukkit.permissions.PermissionDefault
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}
