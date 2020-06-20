declare namespace javax {
    namespace management {
        namespace relation {
            /**
             * A RelationSupport object is used internally by the Relation Service to
             * represent simple relations (only roles, no properties or methods), with an
             * unlimited number of roles, of any relation type. As internal representation,
             * it is not exposed to the user.
             * <P>RelationSupport class conforms to the design patterns of standard MBean. So
             * the user can decide to instantiate a RelationSupport object himself as
             * a MBean (as it follows the MBean design patterns), to register it in the
             * MBean Server, and then to add it in the Relation Service.
             * <P>The user can also, when creating his own MBean relation class, have it
             * extending RelationSupport, to retrieve the implementations of required
             * interfaces (see below).
             * <P>It is also possible to have in a user relation MBean class a member
             * being a RelationSupport object, and to implement the required interfaces by
             * delegating all to this member.
             * <P> RelationSupport implements the Relation interface (to be handled by the
             * Relation Service).
             * <P>It implements also the MBeanRegistration interface to be able to retrieve
             * the MBean Server where it is registered (if registered as a MBean) to access
             * to its Relation Service.
             * @since 1.5
             */
            // @ts-ignore
            class RelationSupport extends java.lang.Object implements javax.management.relation.RelationSupportMBean, javax.management.MBeanRegistration {
                /**
                 * Creates a {@code RelationSupport} object.
                 * <P>This constructor has to be used when the RelationSupport object will
                 * be registered as a MBean by the user, or when creating a user relation
                 * MBean whose class extends RelationSupport.
                 * <P>Nothing is done at the Relation Service level, i.e.
                 * the {@code RelationSupport} object is not added to the
                 * {@code RelationService} and no checks are performed to
                 * see if the provided values are correct.
                 * The object is always created, EXCEPT if:
                 * <P>- any of the required parameters is {@code null}.
                 * <P>- the same name is used for two roles.
                 * <P>To be handled as a relation, the {@code RelationSupport} object has
                 * to be added to the Relation Service using the Relation Service method
                 * addRelation().
                 * @param relationId  relation identifier, to identify the relation in the
                 *  Relation Service.
                 *  <P>Expected to be unique in the given Relation Service.
                 * @param relationServiceName  ObjectName of the Relation Service where
                 *  the relation will be registered.
                 *  <P>This parameter is required as it is the Relation Service that is
                 *  aware of the definition of the relation type of the given relation,
                 *  so that will be able to check update operations (set).
                 * @param relationTypeName  Name of relation type.
                 *  <P>Expected to have been created in the given Relation Service.
                 * @param list  list of roles (Role objects) to initialize the
                 *  relation. Can be {#code null}.
                 *  <P>Expected to conform to relation info in associated relation type.
                 * @exception InvalidRoleValueException  if the same name is used for two
                 *  roles.
                 * @exception IllegalArgumentException  if any of the required parameters
                 *  (relation id, relation service ObjectName, or relation type name) is
                 *  {#code null}.
                 */
                // @ts-ignore
                constructor(relationId: string, relationServiceName: javax.management.ObjectName, relationTypeName: string, list: javax.management.relation.RoleList)
                /**
                 * Creates a {@code RelationSupport} object.
                 * <P>This constructor has to be used when the user relation MBean
                 * implements the interfaces expected to be supported by a relation by
                 * delegating to a RelationSupport object.
                 * <P>This object needs to know the Relation Service expected to handle the
                 * relation. So it has to know the MBean Server where the Relation Service
                 * is registered.
                 * <P>According to a limitation, a relation MBean must be registered in the
                 * same MBean Server as the Relation Service expected to handle it. So the
                 * user relation MBean has to be created and registered, and then the
                 * wrapped RelationSupport object can be created within the identified MBean
                 * Server.
                 * <P>Nothing is done at the Relation Service level, i.e.
                 * the {@code RelationSupport} object is not added to the
                 * {@code RelationService} and no checks are performed to
                 * see if the provided values are correct.
                 * The object is always created, EXCEPT if:
                 * <P>- any of the required parameters is {@code null}.
                 * <P>- the same name is used for two roles.
                 * <P>To be handled as a relation, the {@code RelationSupport} object has
                 * to be added to the Relation Service using the Relation Service method
                 * addRelation().
                 * @param relationId  relation identifier, to identify the relation in the
                 *  Relation Service.
                 *  <P>Expected to be unique in the given Relation Service.
                 * @param relationServiceName  ObjectName of the Relation Service where
                 *  the relation will be registered.
                 *  <P>This parameter is required as it is the Relation Service that is
                 *  aware of the definition of the relation type of the given relation,
                 *  so that will be able to check update operations (set).
                 * @param relationServiceMBeanServer  MBean Server where the wrapping MBean
                 *  is or will be registered.
                 *  <P>Expected to be the MBean Server where the Relation Service is or will
                 *  be registered.
                 * @param relationTypeName  Name of relation type.
                 *  <P>Expected to have been created in the given Relation Service.
                 * @param list  list of roles (Role objects) to initialize the
                 *  relation. Can be {#code null}.
                 *  <P>Expected to conform to relation info in associated relation type.
                 * @exception InvalidRoleValueException  if the same name is used for two
                 *  roles.
                 * @exception IllegalArgumentException  if any of the required parameters
                 *  (relation id, relation service ObjectName, relation service MBeanServer,
                 *  or relation type name) is {#code null}.
                 */
                // @ts-ignore
                constructor(relationId: string, relationServiceName: javax.management.ObjectName, relationServiceMBeanServer: javax.management.MBeanServer, relationTypeName: string, list: javax.management.relation.RoleList)
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
                getRole(roleName: string): java.util.List<javax.management.ObjectName>
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
                getRoles(roleNameArray: string[]): javax.management.relation.RoleResult
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
                 * @return a RoleList
                 */
                // @ts-ignore
                retrieveAllRoles(): javax.management.relation.RoleList
                /**
                 * Returns the number of MBeans currently referenced in the given role.
                 * @param roleName  name of role
                 * @return the number of currently referenced MBeans in that role
                 * @exception IllegalArgumentException  if null role name
                 * @exception RoleNotFoundException  if there is no role with given name
                 */
                // @ts-ignore
                getRoleCardinality(roleName: string): java.lang.Integer
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
                 *  <P>- a MBean provided for that role does not exist
                 * @exception RelationServiceNotRegisteredException  if the Relation
                 *  Service is not registered in the MBean Server
                 * @exception RelationTypeNotFoundException  if the relation type has not
                 *  been declared in the Relation Service
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
                 * @param list  list of roles to be set
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
                setRoles(list: javax.management.relation.RoleList): javax.management.relation.RoleResult
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
                handleMBeanUnregistration(objectName: javax.management.ObjectName, roleName: string): void
                /**
                 * Retrieves MBeans referenced in the various roles of the relation.
                 * @return a HashMap mapping:
                 *  <P> ObjectName {#literal ->} ArrayList of String (role names)
                 */
                // @ts-ignore
                getReferencedMBeans(): java.util.Map<javax.management.ObjectName, java.util.List<java.lang.String>>
                /**
                 * Returns name of associated relation type.
                 */
                // @ts-ignore
                getRelationTypeName(): java.lang.String
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
                getRelationId(): java.lang.String
                // @ts-ignore
                preRegister(server: javax.management.MBeanServer, name: javax.management.ObjectName): javax.management.ObjectName
                // @ts-ignore
                postRegister(registrationDone: java.lang.Boolean): void
                // @ts-ignore
                preDeregister(): void
                // @ts-ignore
                postDeregister(): void
                /**
                 * Returns an internal flag specifying if the object is still handled by
                 * the Relation Service.
                 */
                // @ts-ignore
                isInRelationService(): java.lang.Boolean
                // @ts-ignore
                setRelationServiceManagementFlag(flag: java.lang.Boolean): void
            }
        }
    }
}
