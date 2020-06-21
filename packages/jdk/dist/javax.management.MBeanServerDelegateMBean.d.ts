declare namespace javax {
    namespace management {
        /**
         * Defines the management interface  of an object of class MBeanServerDelegate.
         * @since 1.5
         */
        // @ts-ignore
        interface MBeanServerDelegateMBean {
            /**
             * Returns the MBean server agent identity.
             * @return the agent identity.
             */
            // @ts-ignore
            getMBeanServerId(): string
            /**
             * Returns the full name of the JMX specification implemented
             * by this product.
             * @return the specification name.
             */
            // @ts-ignore
            getSpecificationName(): string
            /**
             * Returns the version of the JMX specification implemented
             * by this product.
             * @return the specification version.
             */
            // @ts-ignore
            getSpecificationVersion(): string
            /**
             * Returns the vendor of the JMX specification implemented
             * by this product.
             * @return the specification vendor.
             */
            // @ts-ignore
            getSpecificationVendor(): string
            /**
             * Returns the JMX implementation name (the name of this product).
             * @return the implementation name.
             */
            // @ts-ignore
            getImplementationName(): string
            /**
             * Returns the JMX implementation version (the version of this product).
             * @return the implementation version.
             */
            // @ts-ignore
            getImplementationVersion(): string
            /**
             * Returns the JMX implementation vendor (the vendor of this product).
             * @return the implementation vendor.
             */
            // @ts-ignore
            getImplementationVendor(): string
        }
    }
}
