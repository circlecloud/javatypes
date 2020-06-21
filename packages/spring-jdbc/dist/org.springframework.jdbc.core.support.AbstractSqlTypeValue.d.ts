declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                namespace support {
                    /**
                     * Abstract implementation of the SqlTypeValue interface, for convenient
                     * creation of type values that are supposed to be passed into the
                     * {@code PreparedStatement.setObject} method. The {@code createTypeValue}
                     * callback method has access to the underlying Connection, if that should
                     * be needed to create any database-specific objects.
                     * <p>A usage example from a StoredProcedure (compare this to the plain
                     * SqlTypeValue version in the superclass javadoc):
                     * <pre class="code">proc.declareParameter(new SqlParameter("myarray", Types.ARRAY, "NUMBERS"));
                     * ...
                     * Map&lt;String, Object&gt; in = new HashMap&lt;String, Object&gt;();
                     * in.put("myarray", new AbstractSqlTypeValue() {
                     * public Object createTypeValue(Connection con, int sqlType, String typeName) throws SQLException {
                     * oracle.sql.ArrayDescriptor desc = new oracle.sql.ArrayDescriptor(typeName, con);
                     * return new oracle.sql.ARRAY(desc, con, seats);
                     * }
                     * });
                     * Map out = execute(in);
                     * </pre>
                     * @author Juergen Hoeller
                     * @since 1.1
                     * @see java.sql.PreparedStatement#setObject(int, Object, int)
                     * @see org.springframework.jdbc.object.StoredProcedure
                     */
                    // @ts-ignore
                    abstract class AbstractSqlTypeValue extends java.lang.Object implements org.springframework.jdbc.core.SqlTypeValue {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public setTypeValue(ps: java.sql.PreparedStatement, paramIndex: number /*int*/, sqlType: number /*int*/, typeName: java.lang.String | string): void
                        /**
                         * Create the type value to be passed into {@code PreparedStatement.setObject}.
                         * @param con the JDBC Connection, if needed to create any database-specific objects
                         * @param sqlType the SQL type of the parameter we are setting
                         * @param typeName the type name of the parameter
                         * @return the type value
                         * @throws SQLException if an SQLException is encountered setting
                         *  parameter values (that is, there's no need to catch SQLException)
                         * @see java.sql.PreparedStatement#setObject(int, Object, int)
                         */
                        // @ts-ignore
                        abstract createTypeValue(con: java.sql.Connection, sqlType: number /*int*/, typeName: java.lang.String | string): any
                    }
                }
            }
        }
    }
}
