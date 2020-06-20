declare namespace javax {
    namespace activation {
        /**
         * The CommandMap class provides an interface to a registry of
         * command objects available in the system.
         * Developers are expected to either use the CommandMap
         * implementation included with this package (MailcapCommandMap) or
         * develop their own. Note that some of the methods in this class are
         * abstract.
         * @since 1.6
         */
        // @ts-ignore
        class CommandMap extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Get the default CommandMap.
             * <p>
             * <ul>
             * <li> In cases where a CommandMap instance has been previously set
             * to some value (via <i>setDefaultCommandMap</i>)
             * return the CommandMap.
             * <li>
             * In cases where no CommandMap has been set, the CommandMap
             * creates an instance of <code>MailcapCommandMap</code> and
             * set that to the default, returning its value.
             * </ul>
             * @return the CommandMap
             */
            // @ts-ignore
            getDefaultCommandMap(): javax.activation.CommandMap
            /**
             * Set the default CommandMap. Reset the CommandMap to the default by
             * calling this method with <code>null</code>.
             * @param commandMap The new default CommandMap.
             * @exception SecurityException if the caller doesn't have permission
             *                                   to change the default
             */
            // @ts-ignore
            setDefaultCommandMap(commandMap: javax.activation.CommandMap): void
            /**
             * Get the preferred command list from a MIME Type. The actual semantics
             * are determined by the implementation of the CommandMap.
             * @param mimeType  the MIME type
             * @return the CommandInfo classes that represent the command Beans.
             */
            // @ts-ignore
            abstract getPreferredCommands(mimeType: string): javax.activation.CommandInfo[]
            /**
             * Get the preferred command list from a MIME Type. The actual semantics
             * are determined by the implementation of the CommandMap. <p>
             * The <code>DataSource</code> provides extra information, such as
             * the file name, that a CommandMap implementation may use to further
             * refine the list of commands that are returned.  The implementation
             * in this class simply calls the <code>getPreferredCommands</code>
             * method that ignores this argument.
             * @param mimeType  the MIME type
             * @param ds        a DataSource for the data
             * @return the CommandInfo classes that represent the command Beans.
             * @since JAF 1.1
             */
            // @ts-ignore
            getPreferredCommands(mimeType: string, ds: javax.activation.DataSource): javax.activation.CommandInfo[]
            /**
             * Get all the available commands for this type. This method
             * should return all the possible commands for this MIME type.
             * @param mimeType  the MIME type
             * @return the CommandInfo objects representing all the commands.
             */
            // @ts-ignore
            abstract getAllCommands(mimeType: string): javax.activation.CommandInfo[]
            /**
             * Get all the available commands for this type. This method
             * should return all the possible commands for this MIME type. <p>
             * The <code>DataSource</code> provides extra information, such as
             * the file name, that a CommandMap implementation may use to further
             * refine the list of commands that are returned.  The implementation
             * in this class simply calls the <code>getAllCommands</code>
             * method that ignores this argument.
             * @param mimeType  the MIME type
             * @param ds        a DataSource for the data
             * @return the CommandInfo objects representing all the commands.
             * @since JAF 1.1
             */
            // @ts-ignore
            getAllCommands(mimeType: string, ds: javax.activation.DataSource): javax.activation.CommandInfo[]
            /**
             * Get the default command corresponding to the MIME type.
             * @param mimeType  the MIME type
             * @param cmdName   the command name
             * @return the CommandInfo corresponding to the command.
             */
            // @ts-ignore
            abstract getCommand(mimeType: string, cmdName: string): javax.activation.CommandInfo
            /**
             * Get the default command corresponding to the MIME type. <p>
             * The <code>DataSource</code> provides extra information, such as
             * the file name, that a CommandMap implementation may use to further
             * refine the command that is chosen.  The implementation
             * in this class simply calls the <code>getCommand</code>
             * method that ignores this argument.
             * @param mimeType  the MIME type
             * @param cmdName   the command name
             * @param ds        a DataSource for the data
             * @return the CommandInfo corresponding to the command.
             * @since JAF 1.1
             */
            // @ts-ignore
            getCommand(mimeType: string, cmdName: string, ds: javax.activation.DataSource): javax.activation.CommandInfo
            /**
             * Locate a DataContentHandler that corresponds to the MIME type.
             * The mechanism and semantics for determining this are determined
             * by the implementation of the particular CommandMap.
             * @param mimeType  the MIME type
             * @return the DataContentHandler for the MIME type
             */
            // @ts-ignore
            abstract createDataContentHandler(mimeType: string): javax.activation.DataContentHandler
            /**
             * Locate a DataContentHandler that corresponds to the MIME type.
             * The mechanism and semantics for determining this are determined
             * by the implementation of the particular CommandMap. <p>
             * The <code>DataSource</code> provides extra information, such as
             * the file name, that a CommandMap implementation may use to further
             * refine the choice of DataContentHandler.  The implementation
             * in this class simply calls the <code>createDataContentHandler</code>
             * method that ignores this argument.
             * @param mimeType  the MIME type
             * @param ds        a DataSource for the data
             * @return the DataContentHandler for the MIME type
             * @since JAF 1.1
             */
            // @ts-ignore
            createDataContentHandler(mimeType: string, ds: javax.activation.DataSource): javax.activation.DataContentHandler
            /**
             * Get all the MIME types known to this command map.
             * If the command map doesn't support this operation,
             * null is returned.
             * @return array of MIME types as strings, or null if not supported
             * @since JAF 1.1
             */
            // @ts-ignore
            getMimeTypes(): java.lang.String[]
        }
    }
}
