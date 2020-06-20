declare namespace javax {
    namespace management {
        /**
         * Represents values that can be passed as arguments to
         * relational expressions. Strings, numbers, attributes are valid values
         * and should be represented by implementations of <CODE>ValueExp</CODE>.
         * @since 1.5
         */
        // @ts-ignore
        interface ValueExp extends java.io.Serializable {
            /**
             * Applies the ValueExp on a MBean.
             * @param name The name of the MBean on which the ValueExp will be applied.
             * @return The <CODE>ValueExp</CODE>.
             * @exception BadStringOperationException
             * @exception BadBinaryOpValueExpException
             * @exception BadAttributeValueExpException
             * @exception InvalidApplicationException
             */
            // @ts-ignore
            apply(name: javax.management.ObjectName): javax.management.ValueExp
            /**
             * Sets the MBean server on which the query is to be performed.
             * @param s The MBean server on which the query is to be performed.
             * @deprecated This method is not needed because a
             *  <code>ValueExp</code> can access the MBean server in which it
             *  is being evaluated by using {#link QueryEval#getMBeanServer()}.
             */
            // @ts-ignore
            setMBeanServer(s: javax.management.MBeanServer): void
        }
    }
}
