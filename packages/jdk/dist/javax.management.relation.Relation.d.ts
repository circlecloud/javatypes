declare namespace javax {
    namespace management {
        namespace relation {
            /**
             * This interface has to be implemented by any MBean class expected to
             * represent a relation managed using the Relation Service.
             * <P>Simple relations, i.e. having only roles, no properties or methods, can
             * be created directly by the Relation Service (represented as RelationSupport
             * objects, internally handled by the Relation Service).
             * <P>If the user wants to represent more complex relations, involving
             * properties and/or methods, he has to provide his own class implementing the
             * Relation interface. This can be achieved either by inheriting from
             * RelationSupport class, or by implementing the interface (fully or delegation to
             * a RelationSupport object member).
             * <P>Specifying such user relation class is to introduce properties and/or
             * methods. Those have to be exposed for remote management. So this means that
             * any user relation class must be a MBean class.
             * @since 1.5
             */
            // @ts-ignore
            interface Relation {
                /**
                 * Retrieves role value for given role name.
                 * <P>Checks if the role exists and is readable according to the relation
                 * type.
                 * @param roleName  name of role
                 * @return the ArrayList of ObjectName objects being the role value
                 * @exception IllegalArgumentException  if null role name
                 * @exception RoleNotFoundException  if:
                 *  <P>- there is no role with given name
                 *  <P>- the role is not readable.
                 * @exception RelationServiceNotRegisteredException  if the Relation
                 *  Service is not registered in the MBean Server
                 * @see #setRole
                 */
                // @ts-ignore
                getRole(roleName: java.lang.String | string): Array<javax.management.ObjectName>
                /**
                 * Retrieves values of roles with given names.
                 * <P>Checks for each role if it exists and is readable according to the
                 * relation type.
                 * @param roleNameArray  array of names of roles to be retrieved
                 * @return a RoleResult object, including a RoleList (for roles
                 *  successfully retrieved) and a RoleUnresolvedList (for roles not
                 *  retrieved).
                 * @exception IllegalArgumentException  if null role name
                 * @exception RelationServiceNotRegisteredException  if the Relation
                 *  Service is not registered in the MBean Server
                 * @see #setRoles
                 */
                // @ts-ignore
                getRoles(roleNameArray: java.lang.String[] | string[]): javax.management.relation.RoleResult
                /**
                 * Returns the number of MBeans currently referenced in the given role.
                 * @param roleName  name of role
                 * @return the number of currently referenced MBeans in that role
                 * @exception IllegalArgumentException  if null role name
                 * @exception RoleNotFoundException  if there is no role with given name
                 */
                // @ts-ignore
                getRoleCardinality(roleName: java.lang.String | string): number
                /**
                 * Returns all roles present in the relation.
                 * @return a RoleResult object, including a RoleList (for roles
                 *  successfully retrieved) and a RoleUnresolvedList (for roles not
                 *  readable).
                 * @exception RelationServiceNotRegisteredException  if the Relation
                 *  Service is not registered in the MBean Server
                 */
                // @ts-ignore
                getAllRoles(): javax.management.relation.RoleResult
                /**
                 * Returns all roles in the relation without checking read mode.
                 * @return a RoleList.
                 */
                // @ts-ignore
                retrieveAllRoles(): javax.management.relation.RoleList
                /**
                 * Sets the given role.
                 * <P>Will check the role according to its corresponding role definition
                 * provided in relation's relation type
                 * <P>Will send a notification (RelationNotification with type
                 * RELATION_BASIC_UPDATE or RELATION_MBEAN_UPDATE, depending if the
                 * relation is a MBean or not).
                 * @param role  role to be set (name and new value)
                 * @exception IllegalArgumentException  if null role
                 * @exception RoleNotFoundException  if there is no role with the supplied
                 *  role's name or if the role is not writable (no test on the write access
                 *  mode performed when initializing the role)
                 * @exception InvalidRoleValueException  if value provided for
                 *  role is not valid, i.e.:
                 *  <P>- the number of referenced MBeans in given value is less than
                 *  expected minimum degree
                 *  <P>- the number of referenced MBeans in provided value exceeds expected
                 *  maximum degree
                 *  <P>- one referenced MBean in the value is not an Object of the MBean
                 *  class expected for that role
                 *  <P>- a MBean provided for that role does not exist.
                 * @exception RelationServiceNotRegisteredException  if the Relation
                 *  Service is not registered in the MBean Server
                 * @exception RelationTypeNotFoundException  if the relation type has not
                 *  been declared in the Relation Service.
                 * @exception RelationNotFoundException  if the relation has not been
                 *  added in the Relation Service.
                 * @see #getRole
                 */
                // @ts-ignore
                setRole(role: javax.management.relation.Role): void
                /**
                 * Sets the given roles.
                 * <P>Will check the role according to its corresponding role definition
                 * provided in relation's relation type
                 * <P>Will send one notification (RelationNotification with type
                 * RELATION_BASIC_UPDATE or RELATION_MBEAN_UPDATE, depending if the
                 * relation is a MBean or not) per updated role.
                 * @param roleList  list of roles to be set
                 * @return a RoleResult object, including a RoleList (for roles
                 *  successfully set) and a RoleUnresolvedList (for roles not
                 *  set).
                 * @exception IllegalArgumentException  if null role list
                 * @exception RelationServiceNotRegisteredException  if the Relation
                 *  Service is not registered in the MBean Server
                 * @exception RelationTypeNotFoundException  if the relation type has not
                 *  been declared in the Relation Service.
                 * @exception RelationNotFoundException  if the relation MBean has not been
                 *  added in the Relation Service.
                 * @see #getRoles
                 */
                // @ts-ignore
                setRoles(roleList: javax.management.relation.RoleList): javax.management.relation.RoleResult
                /**
                 * Callback used by the Relation Service when a MBean referenced in a role
                 * is unregistered.
                 * <P>The Relation Service will call this method to let the relation
                 * take action to reflect the impact of such unregistration.
                 * <P>BEWARE. the user is not expected to call this method.
                 * <P>Current implementation is to set the role with its current value
                 * (list of ObjectNames of referenced MBeans) without the unregistered
                 * one.
                 * @param objectName  ObjectName of unregistered MBean
                 * @param roleName  name of role where the MBean is referenced
                 * @exception IllegalArgumentException  if null parameter
                 * @exception RoleNotFoundException  if role does not exist in the
                 *  relation or is not writable
                 * @exception InvalidRoleValueException  if role value does not conform to
                 *  the associated role info (this will never happen when called from the
                 *  Relation Service)
                 * @exception RelationServiceNotRegisteredException  if the Relation
                 *  Service is not registered in the MBean Server
                 * @exception RelationTypeNotFoundException  if the relation type has not
                 *  been declared in the Relation Service.
                 * @exception RelationNotFoundException  if this method is called for a
                 *  relation MBean not added in the Relation Service.
                 */
                // @ts-ignore
                handleMBeanUnregistration(objectName: javax.management.ObjectName, roleName: java.lang.String | string): void
                /**
                 * Retrieves MBeans referenced in the various roles of the relation.
                 * @return a HashMap mapping:
                 *  <P> ObjectName {#literal ->} ArrayList of String (role names)
                 */
                // @ts-ignore
                getReferencedMBeans(): java.util.Map<javax.management.ObjectName, java.util.List<java.lang.String | string> | Array<java.lang.String | string>>
                /**
                 * Returns name of associated relation type.
                 * @return the name of the relation type.
                 */
                // @ts-ignore
                getRelationTypeName(): string
                /**
                 * Returns ObjectName of the Relation Service handling the relation.
                 * @return the ObjectName of the Relation Service.
                 */
                // @ts-ignore
                getRelationServiceName(): javax.management.ObjectName
                /**
                 * Returns relation identifier (used to uniquely identify the relation
                 * inside the Relation Service).
                 * @return the relation id.
                 */
                // @ts-ignore
                getRelationId(): string
            }
        }
    }
}
