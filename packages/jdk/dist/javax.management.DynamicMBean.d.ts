declare namespace javax {
    namespace management {
        /**
         * Defines the methods that should be implemented by
         * a Dynamic MBean (MBean that exposes a dynamic management interface).
         * @since 1.5
         */
        // @ts-ignore
        interface DynamicMBean {
            /**
             * Obtain the value of a specific attribute of the Dynamic MBean.
             * @param attribute The name of the attribute to be retrieved
             * @return The value of the attribute retrieved.
             * @exception AttributeNotFoundException
             * @exception MBeanException  Wraps a <CODE>java.lang.Exception</CODE> thrown by the MBean's getter.
             * @exception ReflectionException  Wraps a <CODE>java.lang.Exception</CODE> thrown while trying to invoke the getter.
             * @see #setAttribute
             */
            // @ts-ignore
            getAttribute(attribute: string): java.lang.Object
            /**
             * Set the value of a specific attribute of the Dynamic MBean.
             * @param attribute The identification of the attribute to
             *  be set and  the value it is to be set to.
             * @exception AttributeNotFoundException
             * @exception InvalidAttributeValueException
             * @exception MBeanException Wraps a <CODE>java.lang.Exception</CODE> thrown by the MBean's setter.
             * @exception ReflectionException Wraps a <CODE>java.lang.Exception</CODE> thrown while trying to invoke the MBean's setter.
             * @see #getAttribute
             */
            // @ts-ignore
            setAttribute(attribute: javax.management.Attribute): void
            /**
             * Get the values of several attributes of the Dynamic MBean.
             * @param attributes A list of the attributes to be retrieved.
             * @return The list of attributes retrieved.
             * @see #setAttributes
             */
            // @ts-ignore
            getAttributes(attributes: string[]): javax.management.AttributeList
            /**
             * Sets the values of several attributes of the Dynamic MBean.
             * @param attributes A list of attributes: The identification of the
             *  attributes to be set and  the values they are to be set to.
             * @return The list of attributes that were set, with their new values.
             * @see #getAttributes
             */
            // @ts-ignore
            setAttributes(attributes: javax.management.AttributeList): javax.management.AttributeList
            /**
             * Allows an action to be invoked on the Dynamic MBean.
             * @param actionName The name of the action to be invoked.
             * @param params An array containing the parameters to be set when the action is
             *  invoked.
             * @param signature An array containing the signature of the action. The class objects will
             *  be loaded through the same class loader as the one used for loading the
             *  MBean on which the action is invoked.
             * @return The object returned by the action, which represents the result of
             *  invoking the action on the MBean specified.
             * @exception MBeanException  Wraps a <CODE>java.lang.Exception</CODE> thrown by the MBean's invoked method.
             * @exception ReflectionException  Wraps a <CODE>java.lang.Exception</CODE> thrown while trying to invoke the method
             */
            // @ts-ignore
            invoke(actionName: string, params: any[], signature: string[]): java.lang.Object
            /**
             * Provides the exposed attributes and actions of the Dynamic MBean using an MBeanInfo object.
             * @return An instance of <CODE>MBeanInfo</CODE> allowing all attributes and actions
             *  exposed by this Dynamic MBean to be retrieved.
             */
            // @ts-ignore
            getMBeanInfo(): javax.management.MBeanInfo
        }
    }
}
