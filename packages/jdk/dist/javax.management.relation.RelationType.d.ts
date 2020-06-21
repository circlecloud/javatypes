declare namespace javax {
    namespace management {
        namespace relation {
            /**
             * The RelationType interface has to be implemented by any class expected to
             * represent a relation type.
             * @since 1.5
             */
            // @ts-ignore
            interface RelationType extends java.io.Serializable {
                /**
                 * Returns the relation type name.
                 * @return the relation type name.
                 */
                // @ts-ignore
                getRelationTypeName(): string
                /**
                 * Returns the list of role definitions (ArrayList of RoleInfo objects).
                 * @return an {#link ArrayList} of {@link RoleInfo}.
                 */
                // @ts-ignore
                getRoleInfos(): Array<javax.management.relation.RoleInfo>
                /**
                 * Returns the role info (RoleInfo object) for the given role info name
                 * (null if not found).
                 * @param roleInfoName  role info name
                 * @return RoleInfo object providing role definition
                 *  does not exist
                 * @exception IllegalArgumentException  if null parameter
                 * @exception RoleInfoNotFoundException  if no role info with that name in
                 *  relation type.
                 */
                // @ts-ignore
                getRoleInfo(roleInfoName: java.lang.String | string): javax.management.relation.RoleInfo
            }
        }
    }
}
