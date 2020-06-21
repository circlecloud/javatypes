declare namespace org {
    namespace apache {
        namespace juli {
            namespace logging {
                /**
                 * This is a modified LogFactory that uses a simple {@link ServiceLoader} based
                 * discovery mechanism with a default of using JDK based logging. An
                 * implementation that uses the full Commons Logging discovery mechanism is
                 * available as part of the Tomcat extras download.
                 * Why? It is an attempt to strike a balance between simpler code (no discovery)
                 * and providing flexibility - particularly for those projects that embed Tomcat
                 * or some of Tomcat's components - is an alternative logging
                 * implementation is desired.
                 * Note that this implementation is not just a wrapper around JDK logging (like
                 * the original commons-logging impl). It adds 2 features - a simpler
                 * configuration  (which is in fact a subset of log4j.properties) and a
                 * formatter that is less ugly.
                 * The removal of 'abstract' preserves binary backward compatibility. It is
                 * possible to preserve the abstract - and introduce another (hardcoded) factory
                 * - but I see no benefit.
                 * Since this class is not intended to be extended - all protected methods are
                 * removed. This can be changed - but again, there is little value in keeping
                 * dead code. Just take a quick look at the removed code ( and it's complexity).
                 * --------------
                 * Original comment:
                 * <p>Factory for creating {@link Log} instances, with discovery and
                 * configuration features similar to that employed by standard Java APIs
                 * such as JAXP.</p>
                 * <p><strong>IMPLEMENTATION NOTE</strong> - This implementation is heavily
                 * based on the SAXParserFactory and DocumentBuilderFactory implementations
                 * (corresponding to the JAXP pluggability APIs) found in Apache Xerces.</p>
                 * @author Craig R. McClanahan
                 * @author Costin Manolache
                 * @author Richard A. Sitze
                 */
                // @ts-ignore
                class LogFactory extends java.lang.Object {
                    /**
                     * <p>Construct (if necessary) and return a <code>Log</code> instance,
                     * using the factory's current set of configuration attributes.</p>
                     * <p><strong>NOTE</strong> - Depending upon the implementation of
                     * the <code>LogFactory</code> you are using, the <code>Log</code>
                     * instance you are returned may or may not be local to the current
                     * application, and may or may not be returned again on a subsequent
                     * call with the same name argument.</p>
                     * @param name Logical name of the <code>Log</code> instance to be
                     *   returned (the meaning of this name is only known to the underlying
                     *   logging implementation that is being wrapped)
                     * @return A log instance with the requested name
                     * @exception LogConfigurationException if a suitable <code>Log</code>
                     *   instance cannot be returned
                     */
                    // @ts-ignore
                    public getInstance(name: java.lang.String | string): org.apache.juli.logging.Log
                    /**
                     * Convenience method to derive a name from the specified class and
                     * call <code>getInstance(String)</code> with it.
                     * @param clazz Class for which a suitable Log name will be derived
                     * @return A log instance with a name of clazz.getName()
                     * @exception LogConfigurationException if a suitable <code>Log</code>
                     *   instance cannot be returned
                     */
                    // @ts-ignore
                    public getInstance(clazz: java.lang.Class<any>): org.apache.juli.logging.Log
                    /**
                     * <p>Construct (if necessary) and return a <code>LogFactory</code>
                     * instance, using the following ordered lookup procedure to determine
                     * the name of the implementation class to be loaded.</p>
                     * <ul>
                     * <li>The <code>org.apache.commons.logging.LogFactory</code> system
                     * property.</li>
                     * <li>The JDK 1.3 Service Discovery mechanism</li>
                     * <li>Use the properties file <code>commons-logging.properties</code>
                     * file, if found in the class path of this class.  The configuration
                     * file is in standard <code>java.util.Properties</code> format and
                     * contains the fully qualified name of the implementation class
                     * with the key being the system property defined above.</li>
                     * <li>Fall back to a default implementation class
                     * (<code>org.apache.commons.logging.impl.LogFactoryImpl</code>).</li>
                     * </ul>
                     * <p><em>NOTE</em> - If the properties file method of identifying the
                     * <code>LogFactory</code> implementation class is utilized, all of the
                     * properties defined in this file will be set as configuration attributes
                     * on the corresponding <code>LogFactory</code> instance.</p>
                     * @return The singleton LogFactory instance
                     * @exception LogConfigurationException if the implementation class is not
                     *   available or cannot be instantiated.
                     */
                    // @ts-ignore
                    public static getFactory(): org.apache.juli.logging.LogFactory
                    /**
                     * Convenience method to return a named logger, without the application
                     * having to care about factories.
                     * @param clazz Class from which a log name will be derived
                     * @return A log instance with a name of clazz.getName()
                     * @exception LogConfigurationException if a suitable <code>Log</code>
                     *   instance cannot be returned
                     */
                    // @ts-ignore
                    public static getLog(clazz: java.lang.Class<any>): org.apache.juli.logging.Log
                    /**
                     * Convenience method to return a named logger, without the application
                     * having to care about factories.
                     * @param name Logical name of the <code>Log</code> instance to be
                     *   returned (the meaning of this name is only known to the underlying
                     *   logging implementation that is being wrapped)
                     * @return A log instance with the requested name
                     * @exception LogConfigurationException if a suitable <code>Log</code>
                     *   instance cannot be returned
                     */
                    // @ts-ignore
                    public static getLog(name: java.lang.String | string): org.apache.juli.logging.Log
                    /**
                     * Release any internal references to previously created {@link LogFactory}
                     * instances that have been associated with the specified class loader
                     * (if any), after calling the instance method <code>release()</code> on
                     * each of them.
                     * @param classLoader ClassLoader for which to release the LogFactory
                     */
                    // @ts-ignore
                    public static release(classLoader: java.lang.ClassLoader): void
                }
            }
        }
    }
}
