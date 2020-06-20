declare namespace java {
    namespace beans {
        /**
         * A BeanDescriptor provides global information about a "bean",
         * including its Java class, its displayName, etc.
         * <p>
         * This is one of the kinds of descriptor returned by a BeanInfo object,
         * which also returns descriptors for properties, method, and events.
         */
        // @ts-ignore
        class BeanDescriptor extends java.beans.FeatureDescriptor {
            /**
             * Create a BeanDescriptor for a bean that doesn't have a customizer.
             * @param beanClass  The Class object of the Java class that implements
             *           the bean.  For example sun.beans.OurButton.class.
             */
            // @ts-ignore
            constructor(beanClass: java.lang.Class<any>)
            /**
             * Create a BeanDescriptor for a bean that has a customizer.
             * @param beanClass  The Class object of the Java class that implements
             *           the bean.  For example sun.beans.OurButton.class.
             * @param customizerClass  The Class object of the Java class that implements
             *           the bean's Customizer.  For example sun.beans.OurButtonCustomizer.class.
             */
            // @ts-ignore
            constructor(beanClass: java.lang.Class<any>, customizerClass: java.lang.Class<any>)
            /**
             * Gets the bean's Class object.
             * @return The Class object for the bean.
             */
            // @ts-ignore
            getBeanClass(): java.lang.Class<?>
            /**
             * Gets the Class object for the bean's customizer.
             * @return The Class object for the bean's customizer.  This may
             *  be null if the bean doesn't have a customizer.
             */
            // @ts-ignore
            getCustomizerClass(): java.lang.Class<?>
        }
    }
}
