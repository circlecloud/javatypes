declare namespace org {
    namespace apache {
        namespace naming {
            namespace factory {
                /**
                 * Object factory for any Resource conforming to the JavaBean spec.
                 * <p>This factory can be configured in a <code>&lt;Context&gt;</code> element
                 * in your <code>conf/server.xml</code>
                 * configuration file.  An example of factory configuration is:</p>
                 * <pre>
                 * &lt;Resource name="jdbc/myDataSource" auth="SERVLET"
                 * type="oracle.jdbc.pool.OracleConnectionCacheImpl"/&gt;
                 * &lt;ResourceParams name="jdbc/myDataSource"&gt;
                 * &lt;parameter&gt;
                 * &lt;name&gt;factory&lt;/name&gt;
                 * &lt;value&gt;org.apache.naming.factory.BeanFactory&lt;/value&gt;
                 * &lt;/parameter&gt;
                 * &lt;parameter&gt;
                 * &lt;name&gt;driverType&lt;/name&gt;
                 * &lt;value&gt;thin&lt;/value&gt;
                 * &lt;/parameter&gt;
                 * &lt;parameter&gt;
                 * &lt;name&gt;serverName&lt;/name&gt;
                 * &lt;value&gt;hue&lt;/value&gt;
                 * &lt;/parameter&gt;
                 * &lt;parameter&gt;
                 * &lt;name&gt;networkProtocol&lt;/name&gt;
                 * &lt;value&gt;tcp&lt;/value&gt;
                 * &lt;/parameter&gt;
                 * &lt;parameter&gt;
                 * &lt;name&gt;databaseName&lt;/name&gt;
                 * &lt;value&gt;XXXX&lt;/value&gt;
                 * &lt;/parameter&gt;
                 * &lt;parameter&gt;
                 * &lt;name&gt;portNumber&lt;/name&gt;
                 * &lt;value&gt;NNNN&lt;/value&gt;
                 * &lt;/parameter&gt;
                 * &lt;parameter&gt;
                 * &lt;name&gt;user&lt;/name&gt;
                 * &lt;value&gt;XXXX&lt;/value&gt;
                 * &lt;/parameter&gt;
                 * &lt;parameter&gt;
                 * &lt;name&gt;password&lt;/name&gt;
                 * &lt;value&gt;XXXX&lt;/value&gt;
                 * &lt;/parameter&gt;
                 * &lt;parameter&gt;
                 * &lt;name&gt;maxLimit&lt;/name&gt;
                 * &lt;value&gt;5&lt;/value&gt;
                 * &lt;/parameter&gt;
                 * &lt;/ResourceParams&gt;
                 * </pre>
                 * @author Aner Perez [aner at ncstech.com]
                 */
                // @ts-ignore
                class BeanFactory extends java.lang.Object implements javax.naming.spi.ObjectFactory {
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new Bean instance.
                     * @param obj The reference object describing the Bean
                     */
                    // @ts-ignore
                    public getObjectInstance(obj: java.lang.Object | any, name: javax.naming.Name, nameCtx: javax.naming.Context, environment: java.util.Hashtable<any, any>): any
                }
            }
        }
    }
}
