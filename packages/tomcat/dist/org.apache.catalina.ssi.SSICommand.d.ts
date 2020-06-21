declare namespace org {
    namespace apache {
        namespace catalina {
            namespace ssi {
                /**
                 * The interface that all SSI commands ( SSIEcho, SSIInclude, ...) must
                 * implement.
                 * @author Bip Thelin
                 * @author Dan Sandberg
                 * @author David Becker
                 */
                // @ts-ignore
                interface SSICommand {
                    /**
                     * Write the output of the command to the writer.
                     * @param ssiMediator
                     *             the ssi mediator
                     * @param commandName
                     *             the name of the actual command ( ie. echo )
                     * @param paramNames
                     *             The parameter names
                     * @param paramValues
                     *             The parameter values
                     * @param writer
                     *             the writer to output to
                     * @return the most current modified date resulting from any SSI commands
                     * @throws SSIStopProcessingException
                     *              if SSI processing should be aborted
                     */
                    // @ts-ignore
                    process(ssiMediator: org.apache.catalina.ssi.SSIMediator, commandName: java.lang.String | string, paramNames: java.lang.String[] | string[], paramValues: java.lang.String[] | string[], writer: java.io.PrintWriter): number /*long*/
                }
            }
        }
    }
}
