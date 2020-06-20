declare namespace javax {
    namespace management {
        /**
         * <p>The <CODE>MBeanNotificationInfo</CODE> class is used to describe the
         * characteristics of the different notification instances
         * emitted by an MBean, for a given Java class of notification.
         * If an MBean emits notifications that can be instances of different Java classes,
         * then the metadata for that MBean should provide an <CODE>MBeanNotificationInfo</CODE>
         * object for each of these notification Java classes.</p>
         * <p>Instances of this class are immutable.  Subclasses may be
         * mutable but this is not recommended.</p>
         * <p>This class extends <CODE>javax.management.MBeanFeatureInfo</CODE>
         * and thus provides <CODE>name</CODE> and <CODE>description</CODE> fields.
         * The <CODE>name</CODE> field should be the fully qualified Java class name of
         * the notification objects described by this class.</p>
         * <p>The <CODE>getNotifTypes</CODE> method returns an array of
         * strings containing the notification types that the MBean may
         * emit. The notification type is a dot-notation string which
         * describes what the emitted notification is about, not the Java
         * class of the notification.  A single generic notification class can
         * be used to send notifications of several types.  All of these types
         * are returned in the string array result of the
         * <CODE>getNotifTypes</CODE> method.
         * @since 1.5
         */
        // @ts-ignore
        class MBeanNotificationInfo extends javax.management.MBeanFeatureInfo implements java.lang.Cloneable {
            /**
             * Constructs an <CODE>MBeanNotificationInfo</CODE> object.
             * @param notifTypes The array of strings (in dot notation)
             *  containing the notification types that the MBean may emit.
             *  This may be null with the same effect as a zero-length array.
             * @param name The fully qualified Java class name of the
             *  described notifications.
             * @param description A human readable description of the data.
             */
            // @ts-ignore
            constructor(notifTypes: string[], name: string, description: string)
            /**
             * Constructs an <CODE>MBeanNotificationInfo</CODE> object.
             * @param notifTypes The array of strings (in dot notation)
             *  containing the notification types that the MBean may emit.
             *  This may be null with the same effect as a zero-length array.
             * @param name The fully qualified Java class name of the
             *  described notifications.
             * @param description A human readable description of the data.
             * @param descriptor The descriptor for the notifications.  This may be null
             *  which is equivalent to an empty descriptor.
             * @since 1.6
             */
            // @ts-ignore
            constructor(notifTypes: string[], name: string, description: string, descriptor: javax.management.Descriptor)
            /**
             * Returns a shallow clone of this instance.
             * The clone is obtained by simply calling <tt>super.clone()</tt>,
             * thus calling the default native shallow cloning mechanism
             * implemented by <tt>Object.clone()</tt>.
             * No deeper cloning of any internal field is made.
             */
            // @ts-ignore
            clone(): java.lang.Object
            /**
             * Returns the array of strings (in dot notation) containing the
             * notification types that the MBean may emit.
             * @return the array of strings.  Changing the returned array has no
             *  effect on this MBeanNotificationInfo.
             */
            // @ts-ignore
            getNotifTypes(): java.lang.String[]
            // @ts-ignore
            toString(): java.lang.String
            /**
             * Compare this MBeanNotificationInfo to another.
             * @param o the object to compare to.
             * @return true if and only if <code>o</code> is an MBeanNotificationInfo
             *  such that its {#link #getName()}, {@link #getDescription()},
             *  {@link #getDescriptor()},
             *  and {@link #getNotifTypes()} values are equal (not necessarily
             *  identical) to those of this MBeanNotificationInfo.  Two
             *  notification type arrays are equal if their corresponding
             *  elements are equal.  They are not equal if they have the same
             *  elements but in a different order.
             */
            // @ts-ignore
            equals(o: any): boolean
            // @ts-ignore
            hashCode(): int
        }
    }
}
