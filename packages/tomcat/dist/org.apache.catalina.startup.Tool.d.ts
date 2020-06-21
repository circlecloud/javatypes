declare namespace org {
    namespace apache {
        namespace catalina {
            namespace startup {
                /**
                 * <p>General purpose wrapper for command line tools that should execute in an
                 * environment with the common class loader environment set up by Catalina.
                 * This should be executed from a command line script that conforms to
                 * the following requirements:</p>
                 * <ul>
                 * <li>Passes the <code>catalina.home</code> system property configured with
                 * the pathname of the Tomcat installation directory.</li>
                 * <li>Sets the system classpath to include <code>bootstrap.jar</code> and
                 * <code>$JAVA_HOME/lib/tools.jar</code>.</li>
                 * </ul>
                 * <p>The command line to execute the tool looks like:</p>
                 * <pre>
                 * java -classpath $CLASSPATH org.apache.catalina.startup.Tool \
                 * ${options} ${classname} ${arguments}
                 * </pre>
                 * <p>with the following replacement contents:
                 * <ul>
                 * <li><strong>${options}</strong> - Command line options for this Tool wrapper.
                 * The following options are supported:
                 * <ul>
                 * <li><em>-ant</em> : Set the <code>ant.home</code> system property
                 * to corresponding to the value of <code>catalina.home</code>
                 * (useful when your command line tool runs Ant).</li>
                 * <li><em>-common</em> : Add <code>common/classes</code> and
                 * <code>common/lib</code> to the class loader repositories.</li>
                 * <li><em>-server</em> : Add <code>server/classes</code> and
                 * <code>server/lib</code> to the class loader repositories.</li>
                 * <li><em>-shared</em> : Add <code>shared/classes</code> and
                 * <code>shared/lib</code> to the class loader repositories.</li>
                 * </ul>
                 * <li><strong>${classname}</strong> - Fully qualified Java class name of the
                 * application's main class.</li>
                 * <li><strong>${arguments}</strong> - Command line arguments to be passed to
                 * the application's <code>main()</code> method.</li>
                 * </ul>
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                class Tool extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * The main program for the bootstrap.
                     * @param args Command line arguments to be processed
                     */
                    // @ts-ignore
                    public static main(args: java.lang.String[] | string[]): void
                }
            }
        }
    }
}
