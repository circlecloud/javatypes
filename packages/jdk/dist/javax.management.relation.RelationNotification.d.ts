declare namespace javax {
    namespace management {
        namespace relation {
            /**
             * A notification of a change in the Relation Service.
             * A RelationNotification notification is sent when a relation is created via
             * the Relation Service, or an MBean is added as a relation in the Relation
             * Service, or a role is updated in a relation, or a relation is removed from
             * the Relation Service.
             * <p>The <b>serialVersionUID</b> of this class is <code>-6871117877523310399L</code>.
             * @since 1.5
             */
            // @ts-ignore
            class RelationNotification extends javax.management.Notification {
                /**
                 * Creates a notification for either a relation creation (RelationSupport
                 * object created internally in the Relation Service, or an MBean added as a
                 * relation) or for a relation removal from the Relation Service.
                 * @param notifType  type of the notification; either:
                 *  <P>- RELATION_BASIC_CREATION
                 *  <P>- RELATION_MBEAN_CREATION
                 *  <P>- RELATION_BASIC_REMOVAL
                 *  <P>- RELATION_MBEAN_REMOVAL
                 * @param sourceObj  source object, sending the notification.  This is either
                 *  an ObjectName or a RelationService object.  In the latter case it must be
                 *  the MBean emitting the notification; the MBean Server will rewrite the
                 *  source to be the ObjectName under which that MBean is registered.
                 * @param sequence  sequence number to identify the notification
                 * @param timeStamp  time stamp
                 * @param message  human-readable message describing the notification
                 * @param id  relation id identifying the relation in the Relation
                 *  Service
                 * @param typeName  name of the relation type
                 * @param objectName  ObjectName of the relation object if it is an MBean
                 *  (null for relations internally handled by the Relation Service)
                 * @param unregMBeanList  list of ObjectNames of referenced MBeans
                 *  expected to be unregistered due to relation removal (only for removal,
                 *  due to CIM qualifiers, can be null)
                 * @exception IllegalArgumentException  if:
                 *  <P>- no value for the notification type
                 *  <P>- the notification type is not RELATION_BASIC_CREATION,
                 *  RELATION_MBEAN_CREATION, RELATION_BASIC_REMOVAL or
                 *  RELATION_MBEAN_REMOVAL
                 *  <P>- no source object
                 *  <P>- the source object is not a Relation Service
                 *  <P>- no relation id
                 *  <P>- no relation type name
                 */
                // @ts-ignore
                constructor(notifType: string, sourceObj: any, sequence: number /*long*/, timeStamp: number /*long*/, message: string, id: string, typeName: string, objectName: javax.management.ObjectName, unregMBeanList: Array<javax.management.ObjectName>)
                /**
                 * Creates a notification for a role update in a relation.
                 * @param notifType  type of the notification; either:
                 *  <P>- RELATION_BASIC_UPDATE
                 *  <P>- RELATION_MBEAN_UPDATE
                 * @param sourceObj  source object, sending the notification. This is either
                 *  an ObjectName or a RelationService object.  In the latter case it must be
                 *  the MBean emitting the notification; the MBean Server will rewrite the
                 *  source to be the ObjectName under which that MBean is registered.
                 * @param sequence  sequence number to identify the notification
                 * @param timeStamp  time stamp
                 * @param message  human-readable message describing the notification
                 * @param id  relation id identifying the relation in the Relation
                 *  Service
                 * @param typeName  name of the relation type
                 * @param objectName  ObjectName of the relation object if it is an MBean
                 *  (null for relations internally handled by the Relation Service)
                 * @param name  name of the updated role
                 * @param newValue  new role value (List of ObjectName objects)
                 * @param oldValue  old role value (List of ObjectName objects)
                 * @exception IllegalArgumentException  if null parameter
                 */
                // @ts-ignore
                constructor(notifType: string, sourceObj: any, sequence: number /*long*/, timeStamp: number /*long*/, message: string, id: string, typeName: string, objectName: javax.management.ObjectName, name: string, newValue: Array<javax.management.ObjectName>, oldValue: Array<javax.management.ObjectName>)
                /**
                 * Type for the creation of an internal relation.
                 */
                // @ts-ignore
                readonly RELATION_BASIC_CREATION: string
                /**
                 * Type for the relation MBean added into the Relation Service.
                 */
                // @ts-ignore
                readonly RELATION_MBEAN_CREATION: string
                /**
                 * Type for an update of an internal relation.
                 */
                // @ts-ignore
                readonly RELATION_BASIC_UPDATE: string
                /**
                 * Type for the update of a relation MBean.
                 */
                // @ts-ignore
                readonly RELATION_MBEAN_UPDATE: string
                /**
                 * Type for the removal from the Relation Service of an internal relation.
                 */
                // @ts-ignore
                readonly RELATION_BASIC_REMOVAL: string
                /**
                 * Type for the removal from the Relation Service of a relation MBean.
                 */
                // @ts-ignore
                readonly RELATION_MBEAN_REMOVAL: string
                /**
                 * Returns the relation identifier of created/removed/updated relation.
                 * @return the relation id.
                 */
                // @ts-ignore
                getRelationId(): java.lang.String
                /**
                 * Returns the relation type name of created/removed/updated relation.
                 * @return the relation type name.
                 */
                // @ts-ignore
                getRelationTypeName(): java.lang.String
                /**
                 * Returns the ObjectName of the
                 * created/removed/updated relation.
                 * @return the ObjectName if the relation is an MBean, otherwise null.
                 */
                // @ts-ignore
                getObjectName(): javax.management.ObjectName
                /**
                 * Returns the list of ObjectNames of MBeans expected to be unregistered
                 * due to a relation removal (only for relation removal).
                 * @return a {#link List} of {@link ObjectName}.
                 */
                // @ts-ignore
                getMBeansToUnregister(): java.util.List<javax.management.ObjectName>
                /**
                 * Returns name of updated role of updated relation (only for role update).
                 * @return the name of the updated role.
                 */
                // @ts-ignore
                getRoleName(): java.lang.String
                /**
                 * Returns old value of updated role (only for role update).
                 * @return the old value of the updated role.
                 */
                // @ts-ignore
                getOldRoleValue(): java.util.List<javax.management.ObjectName>
                /**
                 * Returns new value of updated role (only for role update).
                 * @return the new value of the updated role.
                 */
                // @ts-ignore
                getNewRoleValue(): java.util.List<javax.management.ObjectName>
            }
        }
    }
}
