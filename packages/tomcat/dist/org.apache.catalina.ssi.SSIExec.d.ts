declare namespace org {
    namespace apache {
        namespace catalina {
            namespace ssi {
                /**
                 * Implements the Server-side #exec command
                 * @author Bip Thelin
                 * @author Amy Roh
                 * @author Paul Speed
                 * @author Dan Sandberg
                 * @author David Becker
                 */
                // @ts-ignore
                class SSIExec extends java.lang.Object implements org.apache.catalina.ssi.SSICommand {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    readonly ssiInclude: org.apache.catalina.ssi.SSIInclude
                    // @ts-ignore
                    static readonly BUFFER_SIZE: number /*int*/
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
