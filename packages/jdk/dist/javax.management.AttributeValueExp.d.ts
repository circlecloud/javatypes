declare namespace javax {
    namespace management {
        /**
         * <p>Represents attributes used as arguments to relational constraints.
         * Instances of this class are usually obtained using {@link Query#attr(String)
         * Query.attr}.</p>
         * <p>An <CODE>AttributeValueExp</CODE> may be used anywhere a
         * <CODE>ValueExp</CODE> is required.
         * @since 1.5
         */
        // @ts-ignore
        class AttributeValueExp extends java.lang.Object implements javax.management.ValueExp {
            /**
             * An <code>AttributeValueExp</code> with a null attribute.
             * @deprecated An instance created with this constructor cannot be
             *  used in a query.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a new <CODE>AttributeValueExp</CODE> representing the
             * specified object attribute, named attr.
             * @param attr the name of the attribute whose value is the value
             *  of this {#link ValueExp}.
             */
            // @ts-ignore
            constructor(attr: java.lang.String | string)
            /**
             * Returns a string representation of the name of the attribute.
             * @return the attribute name.
             */
            // @ts-ignore
            public getAttributeName(): string
            /**
             * <p>Applies the <CODE>AttributeValueExp</CODE> on an MBean.
             * This method calls {@link #getAttribute getAttribute(name)} and wraps
             * the result as a {@code ValueExp}.  The value returned by
             * {@code getAttribute} must be a {@code Number}, {@code String},
             * or {@code Boolean}; otherwise this method throws a
             * {@code BadAttributeValueExpException}, which will cause
             * the containing query to be false for this {@code name}.</p>
             * @param name The name of the MBean on which the <CODE>AttributeValueExp</CODE> will be applied.
             * @return The <CODE>ValueExp</CODE>.
             * @exception BadAttributeValueExpException
             * @exception InvalidApplicationException
             * @exception BadStringOperationException
             * @exception BadBinaryOpValueExpException
             */
            // @ts-ignore
            public apply(name: javax.management.ObjectName): javax.management.ValueExp
            /**
             * Returns the string representing its value.
             */
            // @ts-ignore
            public toString(): string
            /**
             * Sets the MBean server on which the query is to be performed.
             * @param s The MBean server on which the query is to be performed.
             * @deprecated This method has no effect.  The MBean Server used to
             *  obtain an attribute value is {#link QueryEval#getMBeanServer()}.
             */
            // @ts-ignore
            public setMBeanServer(s: javax.management.MBeanServer): void
            /**
             * <p>Return the value of the given attribute in the named MBean.
             * If the attempt to access the attribute generates an exception,
             * return null.</p>
             * <p>The MBean Server used is the one returned by {@link
             * QueryEval#getMBeanServer()}.</p>
             * @param name the name of the MBean whose attribute is to be returned.
             * @return the value of the attribute, or null if it could not be
             *  obtained.
             */
            // @ts-ignore
            getAttribute(name: javax.management.ObjectName): any
        }
    }
}
