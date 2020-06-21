declare namespace java {
    namespace security {
        namespace acl {
            /**
             * This interface represents a permission, such as that used to grant
             * a particular type of access to a resource.
             * @author Satish Dharmaraj
             */
            // @ts-ignore
            interface Permission {
                /**
                 * Returns true if the object passed matches the permission represented
                 * in this interface.
                 * @param another the Permission object to compare with.
                 * @return true if the Permission objects are equal, false otherwise
                 */
                // @ts-ignore
                equals(another: java.lang.Object | any): boolean
                /**
                 * Prints a string representation of this permission.
                 * @return the string representation of the permission.
                 */
                // @ts-ignore
                toString(): string
            }
        }
    }
}
