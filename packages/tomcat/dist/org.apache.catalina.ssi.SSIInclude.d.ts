declare namespace org {
    namespace apache {
        namespace catalina {
            namespace ssi {
                /**
                 * Implements the Server-side #include command
                 * @author Bip Thelin
                 * @author Paul Speed
                 * @author Dan Sandberg
                 * @author David Becker
                 */
                // @ts-ignore
                class SSIInclude extends java.lang.Object implements org.apache.catalina.ssi.SSICommand {
                    // @ts-ignore
                    constructor()
                    /**
                     * @see SSICommand
                     */
                    // @ts-ignore
                    public process(ssiMediator: org.apache.catalina.ssi.SSIMediator, commandName: java.lang.String | string, paramNames: java.lang.String[] | string[], paramValues: java.lang.String[] | string[], writer: java.io.PrintWriter): number /*long*/
                }
            }
        }
    }
}
