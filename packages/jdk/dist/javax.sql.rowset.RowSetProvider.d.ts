declare namespace javax {
    namespace sql {
        namespace rowset {
            /**
             * A factory API that enables applications to obtain a
             * {@code RowSetFactory} implementation  that can be used to create different
             * types of {@code RowSet} implementations.
             * <p>
             * Example:
             * </p>
             * <pre>
             * RowSetFactory aFactory = RowSetProvider.newFactory();
             * CachedRowSet crs = aFactory.createCachedRowSet();
             * ...
             * RowSetFactory rsf = RowSetProvider.newFactory("com.sun.rowset.RowSetFactoryImpl", null);
             * WebRowSet wrs = rsf.createWebRowSet();
             * </pre>
             * <p>
             * Tracing of this class may be enabled by setting the System property
             * {@code javax.sql.rowset.RowSetFactory.debug} to any value but {@code false}.
             * </p>
             * @author Lance Andersen
             * @since 1.7
             */
            // @ts-ignore
            class RowSetProvider extends java.lang.Object {
                /**
                 * RowSetProvider constructor
                 */
                // @ts-ignore
                constructor()
                /**
                 * <p>Creates a new instance of a <code>RowSetFactory</code>
                 * implementation.  This method uses the following
                 * look up order to determine
                 * the <code>RowSetFactory</code> implementation class to load:</p>
                 * <ul>
                 * <li>
                 * The System property {@code javax.sql.rowset.RowSetFactory}.  For example:
                 * <ul>
                 * <li>
                 * -Djavax.sql.rowset.RowSetFactory=com.sun.rowset.RowSetFactoryImpl
                 * </li>
                 * </ul>
                 * <li>
                 * The {@link ServiceLoader} API. The {@code ServiceLoader} API will look
                 * for a class name in the file
                 * {@code META-INF/services/javax.sql.rowset.RowSetFactory}
                 * in jars available to the runtime. For example, to have the the RowSetFactory
                 * implementation {@code com.sun.rowset.RowSetFactoryImpl } loaded, the
                 * entry in {@code META-INF/services/javax.sql.rowset.RowSetFactory} would be:
                 * <ul>
                 * <li>
                 * {@code com.sun.rowset.RowSetFactoryImpl }
                 * </li>
                 * </ul>
                 * </li>
                 * <li>
                 * Platform default <code>RowSetFactory</code> instance.
                 * </li>
                 * </ul>
                 * <p>Once an application has obtained a reference to a {@code RowSetFactory},
                 * it can use the factory to obtain RowSet instances.</p>
                 * @return New instance of a <code>RowSetFactory</code>
                 * @throws SQLException if the default factory class cannot be loaded,
                 *  instantiated. The cause will be set to actual Exception
                 * @see ServiceLoader
                 * @since 1.7
                 */
                // @ts-ignore
                newFactory(): javax.sql.rowset.RowSetFactory
                /**
                 * <p>Creates  a new instance of a <code>RowSetFactory</code> from the
                 * specified factory class name.
                 * This function is useful when there are multiple providers in the classpath.
                 * It gives more control to the application as it can specify which provider
                 * should be loaded.</p>
                 * <p>Once an application has obtained a reference to a <code>RowSetFactory</code>
                 * it can use the factory to obtain RowSet instances.</p>
                 * @param factoryClassName fully qualified factory class name that
                 *  provides  an implementation of <code>javax.sql.rowset.RowSetFactory</code>.
                 * @param cl <code>ClassLoader</code> used to load the factory
                 *  class. If <code>null</code> current <code>Thread</code>'s context
                 *  classLoader is used to load the factory class.
                 * @return New instance of a <code>RowSetFactory</code>
                 * @throws SQLException if <code>factoryClassName</code> is
                 *  <code>null</code>, or the factory class cannot be loaded, instantiated.
                 * @see #newFactory()
                 * @since 1.7
                 */
                // @ts-ignore
                newFactory(factoryClassName: string, cl: java.lang.ClassLoader): javax.sql.rowset.RowSetFactory
            }
        }
    }
}
