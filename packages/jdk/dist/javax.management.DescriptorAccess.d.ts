declare namespace javax {
    namespace management {
        /**
         * This interface is used to gain access to descriptors of the Descriptor class
         * which are associated with a JMX component, i.e. MBean, MBeanInfo,
         * MBeanAttributeInfo, MBeanNotificationInfo,
         * MBeanOperationInfo, MBeanParameterInfo.
         * <P>
         * ModelMBeans make extensive use of this interface in ModelMBeanInfo classes.
         * @since 1.5
         */
        // @ts-ignore
        interface DescriptorAccess extends javax.management.DescriptorRead {
            /**
             * Sets Descriptor (full replace).
             * @param inDescriptor replaces the Descriptor associated with the
             *  component implementing this interface. If the inDescriptor is invalid for the
             *  type of Info object it is being set for, an exception is thrown.  If the
             *  inDescriptor is null, then the Descriptor will revert to its default value
             *  which should contain, at a minimum, the descriptor name and descriptorType.
             * @see #getDescriptor
             */
            // @ts-ignore
            setDescriptor(inDescriptor: javax.management.Descriptor): void
        }
    }
}
