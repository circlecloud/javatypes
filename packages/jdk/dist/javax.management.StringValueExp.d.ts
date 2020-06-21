declare namespace javax {
    namespace management {
        /**
         * Represents strings that are arguments to relational constraints.
         * A <CODE>StringValueExp</CODE> may be used anywhere a <CODE>ValueExp</CODE> is required.
         * @since 1.5
         */
        // @ts-ignore
        class StringValueExp extends java.lang.Object implements javax.management.ValueExp {
            /**
             * Basic constructor.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a new <CODE>StringValueExp</CODE> representing the
             * given string.
             * @param val the string that will be the value of this expression
             */
            // @ts-ignore
            constructor(val: java.lang.String | string)
            /**
             * Returns the string represented by the
             * <CODE>StringValueExp</CODE> instance.
             * @return the string.
             */
            // @ts-ignore
            public getValue(): string
            /**
             * Returns the string representing the object.
             */
            // @ts-ignore
            public toString(): string
            /**
             * Sets the MBean server on which the query is to be performed.
             * @param s The MBean server on which the query is to be performed.
             */
            // @ts-ignore
            public setMBeanServer(s: javax.management.MBeanServer): void
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
            public apply(name: javax.management.ObjectName): javax.management.ValueExp
        }
    }
}
