declare namespace java {
    namespace sql {
        /**
         * <p>The standard mapping in the Java programming language for an SQL
         * structured type. A <code>Struct</code> object contains a
         * value for each attribute of the SQL structured type that
         * it represents.
         * By default, an instance of<code>Struct</code> is valid as long as the
         * application has a reference to it.
         * <p>
         * All methods on the <code>Struct</code> interface must be fully implemented if the
         * JDBC driver supports the data type.
         * @since 1.2
         */
        // @ts-ignore
        interface Struct {
            /**
             * Retrieves the SQL type name of the SQL structured type
             * that this <code>Struct</code> object represents.
             * @return the fully-qualified type name of the SQL structured
             *           type for which this <code>Struct</code> object
             *           is the generic representation
             * @exception SQLException if a database access error occurs
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.2
             */
            // @ts-ignore
            getSQLTypeName(): java.lang.String
            /**
             * Produces the ordered values of the attributes of the SQL
             * structured type that this <code>Struct</code> object represents.
             * As individual attributes are processed, this method uses the type map
             * associated with the
             * connection for customizations of the type mappings.
             * If there is no
             * entry in the connection's type map that matches the structured
             * type that an attribute represents,
             * the driver uses the standard mapping.
             * <p>
             * Conceptually, this method calls the method
             * <code>getObject</code> on each attribute
             * of the structured type and returns a Java array containing
             * the result.
             * @return an array containing the ordered attribute values
             * @exception SQLException if a database access error occurs
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.2
             */
            // @ts-ignore
            getAttributes(): java.lang.Object[]
            /**
             * Produces the ordered values of the attributes of the SQL
             * structured type that this <code>Struct</code> object represents.
             * As individual attributes are processed, this method uses the given type map
             * for customizations of the type mappings.
             * If there is no
             * entry in the given type map that matches the structured
             * type that an attribute represents,
             * the driver uses the standard mapping. This method never
             * uses the type map associated with the connection.
             * <p>
             * Conceptually, this method calls the method
             * <code>getObject</code> on each attribute
             * of the structured type and returns a Java array containing
             * the result.
             * @param map a mapping of SQL type names to Java classes
             * @return an array containing the ordered attribute values
             * @exception SQLException if a database access error occurs
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.2
             */
            // @ts-ignore
            getAttributes(map: java.util.Map<java.lang.String, java.lang.Class<any>>): java.lang.Object[]
        }
    }
}
