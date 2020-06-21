declare namespace javax {
    namespace management {
        namespace relation {
            /**
             * A RelationTypeSupport object implements the RelationType interface.
             * <P>It represents a relation type, providing role information for each role
             * expected to be supported in every relation of that type.
             * <P>A relation type includes a relation type name and a list of
             * role infos (represented by RoleInfo objects).
             * <P>A relation type has to be declared in the Relation Service:
             * <P>- either using the createRelationType() method, where a RelationTypeSupport
             * object will be created and kept in the Relation Service
             * <P>- either using the addRelationType() method where the user has to create
             * an object implementing the RelationType interface, and this object will be
             * used as representing a relation type in the Relation Service.
             * <p>The <b>serialVersionUID</b> of this class is <code>4611072955724144607L</code>.
             * @since 1.5
             */
            // @ts-ignore
            class RelationTypeSupport extends java.lang.Object implements javax.management.relation.RelationType {
                /**
                 * Constructor where all role definitions are dynamically created and
                 * passed as parameter.
                 * @param relationTypeName  Name of relation type
                 * @param roleInfoArray  List of role definitions (RoleInfo objects)
                 * @exception IllegalArgumentException  if null parameter
                 * @exception InvalidRelationTypeException  if:
                 *  <P>- the same name has been used for two different roles
                 *  <P>- no role info provided
                 *  <P>- one null role info provided
                 */
                // @ts-ignore
                constructor(relationTypeName: java.lang.String | string, roleInfoArray: javax.management.relation.RoleInfo[])
                /**
                 * Constructor to be used for subclasses.
                 * @param relationTypeName  Name of relation type.
                 * @exception IllegalArgumentException  if null parameter.
                 */
                // @ts-ignore
                constructor(relationTypeName: java.lang.String | string)
                /**
                 * Returns the relation type name.
                 * @return the relation type name.
                 */
                // @ts-ignore
                public getRelationTypeName(): string
                /**
                 * Returns the list of role definitions (ArrayList of RoleInfo objects).
                 */
                // @ts-ignore
                public getRoleInfos(): Array<javax.management.relation.RoleInfo>
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
                public getRoleInfo(roleInfoName: java.lang.String | string): javax.management.relation.RoleInfo
                /**
                 * Add a role info.
                 * This method of course should not be used after the creation of the
                 * relation type, because updating it would invalidate that the relations
                 * created associated to that type still conform to it.
                 * Can throw a RuntimeException if trying to update a relation type
                 * declared in the Relation Service.
                 * @param roleInfo  role info to be added.
                 * @exception IllegalArgumentException  if null parameter.
                 * @exception InvalidRelationTypeException  if there is already a role
                 *   info in current relation type with the same name.
                 */
                // @ts-ignore
                addRoleInfo(roleInfo: javax.management.relation.RoleInfo): void
            }
        }
    }
}
