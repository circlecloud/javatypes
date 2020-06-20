declare namespace javax {
    namespace management {
        /**
         * Interface to read the Descriptor of a management interface element
         * such as an MBeanInfo.
         * @since 1.6
         */
        // @ts-ignore
        interface DescriptorRead {
            /**
             * Returns a copy of Descriptor.
             * @return Descriptor associated with the component implementing this interface.
             *  The return value is never null, but the returned descriptor may be empty.
             */
            // @ts-ignore
            getDescriptor(): javax.management.Descriptor
        }
    }
}
