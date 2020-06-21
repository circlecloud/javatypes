declare namespace javax {
    namespace management {
        namespace modelmbean {
            /**
             * <p>The ModelMBeanNotificationInfo object describes a notification emitted
             * by a ModelMBean.
             * It is a subclass of MBeanNotificationInfo with the addition of an
             * associated Descriptor and an implementation of the Descriptor interface.</p>
             * <P id="descriptor">
             * The fields in the descriptor are defined, but not limited to, the following.
             * Note that when the Type in this table is Number, a String that is the decimal
             * representation of a Long can also be used.</P>
             * <table border="1" cellpadding="5" summary="ModelMBeanNotificationInfo Fields">
             * <tr><th>Name</th><th>Type</th><th>Meaning</th></tr>
             * <tr><td>name</td><td>String</td>
             * <td>Notification name.</td></tr>
             * <tr><td>descriptorType</td><td>String</td>
             * <td>Must be "notification".</td></tr>
             * <tr><td>severity</td><td>Number</td>
             * <td>0-6 where 0: unknown; 1: non-recoverable;
             * 2: critical, failure; 3: major, severe;
             * 4: minor, marginal, error; 5: warning;
             * 6: normal, cleared, informative</td></tr>
             * <tr><td>messageID</td><td>String</td>
             * <td>Unique key for message text (to allow translation, analysis).</td></tr>
             * <tr><td>messageText</td><td>String</td>
             * <td>Text of notification.</td></tr>
             * <tr><td>log</td><td>String</td>
             * <td>T - log message, F - do not log message.</td></tr>
             * <tr><td>logfile</td><td>String</td>
             * <td>fully qualified file name appropriate for operating system.</td></tr>
             * <tr><td>visibility</td><td>Number</td>
             * <td>1-4 where 1: always visible 4: rarely visible.</td></tr>
             * <tr><td>presentationString</td><td>String</td>
             * <td>XML formatted string to allow presentation of data.</td></tr>
             * </table>
             * <p>The default descriptor contains the name, descriptorType,
             * displayName and severity(=6) fields.  The default value of the name
             * and displayName fields is the name of the Notification class (as
             * specified by the <code>name</code> parameter of the
             * ModelMBeanNotificationInfo constructor).</p>
             * <p>The <b>serialVersionUID</b> of this class is <code>-7445681389570207141L</code>.
             * @since 1.5
             */
            // @ts-ignore
            class ModelMBeanNotificationInfo extends javax.management.MBeanNotificationInfo implements javax.management.DescriptorAccess {
                /**
                 * Constructs a ModelMBeanNotificationInfo object with a default
                 * descriptor.
                 * @param notifTypes The array of strings (in dot notation) containing
                 *      the notification types that may be emitted.
                 * @param name The name of the Notification class.
                 * @param description A human readable description of the
                 *      Notification. Optional.
                 */
                // @ts-ignore
                constructor(notifTypes: java.lang.String[] | string[], name: java.lang.String | string, description: java.lang.String | string)
                /**
                 * Constructs a ModelMBeanNotificationInfo object.
                 * @param notifTypes The array of strings (in dot notation)
                 *         containing the notification types that may be emitted.
                 * @param name The name of the Notification class.
                 * @param description A human readable description of the Notification.
                 *         Optional.
                 * @param descriptor An instance of Descriptor containing the
                 *         appropriate metadata for this instance of the
                 *         MBeanNotificationInfo. If it is null a default descriptor
                 *         will be created. If the descriptor does not contain the
                 *         fields "displayName" or "severity",
                 *         the missing ones are added with their default values.
                 * @exception RuntimeOperationsException Wraps an
                 *     {#link IllegalArgumentException}. The descriptor is invalid, or
                 *     descriptor field "name" is not equal to parameter name, or
                 *     descriptor field "descriptorType" is not equal to "notification".
                 */
                // @ts-ignore
                constructor(notifTypes: java.lang.String[] | string[], name: java.lang.String | string, description: java.lang.String | string, descriptor: javax.management.Descriptor)
                /**
                 * Constructs a new ModelMBeanNotificationInfo object from this
                 * ModelMBeanNotfication Object.
                 * @param inInfo the ModelMBeanNotificationInfo to be duplicated
                 */
                // @ts-ignore
                constructor(inInfo: javax.management.modelmbean.ModelMBeanNotificationInfo)
                /**
                 * Creates and returns a new ModelMBeanNotificationInfo which is a
                 * duplicate of this ModelMBeanNotificationInfo.
                 */
                // @ts-ignore
                public clone(): any
                /**
                 * Returns a copy of the associated Descriptor for the
                 * ModelMBeanNotificationInfo.
                 * @return Descriptor associated with the
                 *  ModelMBeanNotificationInfo object.
                 * @see #setDescriptor
                 */
                // @ts-ignore
                public getDescriptor(): javax.management.Descriptor
                /**
                 * Sets associated Descriptor (full replace) for the
                 * ModelMBeanNotificationInfo If the new Descriptor is null,
                 * then the associated Descriptor reverts to a default
                 * descriptor.  The Descriptor is validated before it is
                 * assigned.  If the new Descriptor is invalid, then a
                 * RuntimeOperationsException wrapping an
                 * IllegalArgumentException is thrown.
                 * @param inDescriptor replaces the Descriptor associated with the
                 *  ModelMBeanNotification interface
                 * @exception RuntimeOperationsException Wraps an
                 *  {#link IllegalArgumentException} for invalid Descriptor.
                 * @see #getDescriptor
                 */
                // @ts-ignore
                public setDescriptor(inDescriptor: javax.management.Descriptor): void
                /**
                 * Returns a human readable string containing
                 * ModelMBeanNotificationInfo.
                 * @return a string describing this object.
                 */
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
