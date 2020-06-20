declare namespace javax {
    namespace management {
        namespace relation {
            /**
             * This class describes the various problems which can be encountered when
             * accessing a role.
             * @since 1.5
             */
            // @ts-ignore
            class RoleStatus extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Problem type when trying to access an unknown role.
                 */
                // @ts-ignore
                readonly NO_ROLE_WITH_NAME: number /*int*/
                /**
                 * Problem type when trying to read a non-readable attribute.
                 */
                // @ts-ignore
                readonly ROLE_NOT_READABLE: number /*int*/
                /**
                 * Problem type when trying to update a non-writable attribute.
                 */
                // @ts-ignore
                readonly ROLE_NOT_WRITABLE: number /*int*/
                /**
                 * Problem type when trying to set a role value with less ObjectNames than
                 * the minimum expected cardinality.
                 */
                // @ts-ignore
                readonly LESS_THAN_MIN_ROLE_DEGREE: number /*int*/
                /**
                 * Problem type when trying to set a role value with more ObjectNames than
                 * the maximum expected cardinality.
                 */
                // @ts-ignore
                readonly MORE_THAN_MAX_ROLE_DEGREE: number /*int*/
                /**
                 * Problem type when trying to set a role value including the ObjectName of
                 * a MBean not of the class expected for that role.
                 */
                // @ts-ignore
                readonly REF_MBEAN_OF_INCORRECT_CLASS: number /*int*/
                /**
                 * Problem type when trying to set a role value including the ObjectName of
                 * a MBean not registered in the MBean Server.
                 */
                // @ts-ignore
                readonly REF_MBEAN_NOT_REGISTERED: number /*int*/
                /**
                 * Returns true if given value corresponds to a known role status, false
                 * otherwise.
                 * @param status a status code.
                 * @return true if this value is a known role status.
                 */
                // @ts-ignore
                isRoleStatus(status: number /*int*/): boolean
            }
        }
    }
}
