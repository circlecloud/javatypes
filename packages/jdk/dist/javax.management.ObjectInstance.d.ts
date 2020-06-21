declare namespace javax {
    namespace management {
        /**
         * Used to represent the object name of an MBean and its class name.
         * If the MBean is a Dynamic MBean the class name should be retrieved from
         * the <CODE>MBeanInfo</CODE> it provides.
         * @since 1.5
         */
        // @ts-ignore
        class ObjectInstance extends java.lang.Object implements java.io.Serializable {
            /**
             * Allows an object instance to be created given a string representation of
             * an object name and the full class name, including the package name.
             * @param objectName  A string representation of the object name.
             * @param className The full class name, including the package
             *  name, of the object instance.  If the MBean is a Dynamic MBean
             *  the class name corresponds to its {#link
             *  DynamicMBean#getMBeanInfo()
             *  getMBeanInfo()}<code>.getClassName()</code>.
             * @exception MalformedObjectNameException The string passed as a
             *  parameter does not have the right format.
             */
            // @ts-ignore
            constructor(objectName: java.lang.String | string, className: java.lang.String | string)
            /**
             * Allows an object instance to be created given an object name and
             * the full class name, including the package name.
             * @param objectName  The object name.
             * @param className  The full class name, including the package
             *  name, of the object instance.  If the MBean is a Dynamic MBean
             *  the class name corresponds to its {#link
             *  DynamicMBean#getMBeanInfo()
             *  getMBeanInfo()}<code>.getClassName()</code>.
             *  If the MBean is a Dynamic MBean the class name should be retrieved
             *  from the <CODE>MBeanInfo</CODE> it provides.
             */
            // @ts-ignore
            constructor(objectName: javax.management.ObjectName, className: java.lang.String | string)
            /**
             * Compares the current object instance with another object instance.
             * @param object  The object instance that the current object instance is
             *      to be compared with.
             * @return True if the two object instances are equal, otherwise false.
             */
            // @ts-ignore
            public equals(object: java.lang.Object | any): boolean
            // @ts-ignore
            public hashCode(): number /*int*/
            /**
             * Returns the object name part.
             * @return the object name.
             */
            // @ts-ignore
            public getObjectName(): javax.management.ObjectName
            /**
             * Returns the class part.
             * @return the class name.
             */
            // @ts-ignore
            public getClassName(): string
            /**
             * Returns a string representing this ObjectInstance object. The format of this string
             * is not specified, but users can expect that two ObjectInstances return the same
             * string if and only if they are equal.
             */
            // @ts-ignore
            public toString(): string
        }
    }
}
