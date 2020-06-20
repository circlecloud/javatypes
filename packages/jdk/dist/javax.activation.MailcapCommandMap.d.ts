declare namespace javax {
    namespace activation {
        /**
         * MailcapCommandMap extends the CommandMap
         * abstract class. It implements a CommandMap whose configuration
         * is based on mailcap files
         * (<A HREF="http://www.ietf.org/rfc/rfc1524.txt">RFC 1524</A>).
         * The MailcapCommandMap can be configured both programmatically
         * and via configuration files.
         * <p>
         * <b>Mailcap file search order:</b><p>
         * The MailcapCommandMap looks in various places in the user's
         * system for mailcap file entries. When requests are made
         * to search for commands in the MailcapCommandMap, it searches
         * mailcap files in the following order:
         * <p>
         * <ol>
         * <li> Programatically added entries to the MailcapCommandMap instance.
         * <li> The file <code>.mailcap</code> in the user's home directory.
         * <li> The file &lt;<i>java.home</i>&gt;<code>/lib/mailcap</code>.
         * <li> The file or resources named <code>META-INF/mailcap</code>.
         * <li> The file or resource named <code>META-INF/mailcap.default</code>
         * (usually found only in the <code>activation.jar</code> file).
         * </ol>
         * <p>
         * <b>Mailcap file format:</b><p>
         * Mailcap files must conform to the mailcap
         * file specification (RFC 1524, <i>A User Agent Configuration Mechanism
         * For Multimedia Mail Format Information</i>).
         * The file format consists of entries corresponding to
         * particular MIME types. In general, the specification
         * specifies <i>applications</i> for clients to use when they
         * themselves cannot operate on the specified MIME type. The
         * MailcapCommandMap extends this specification by using a parameter mechanism
         * in mailcap files that allows JavaBeans(tm) components to be specified as
         * corresponding to particular commands for a MIME type.<p>
         * When a mailcap file is
         * parsed, the MailcapCommandMap recognizes certain parameter signatures,
         * specifically those parameter names that begin with <code>x-java-</code>.
         * The MailcapCommandMap uses this signature to find
         * command entries for inclusion into its registries.
         * Parameter names with the form <code>x-java-&lt;name></code>
         * are read by the MailcapCommandMap as identifying a command
         * with the name <i>name</i>. When the <i>name</i> is <code>
         * content-handler</code> the MailcapCommandMap recognizes the class
         * signified by this parameter as a <i>DataContentHandler</i>.
         * All other commands are handled generically regardless of command
         * name. The command implementation is specified by a fully qualified
         * class name of a JavaBean(tm) component. For example; a command for viewing
         * some data can be specified as: <code>x-java-view=com.foo.ViewBean</code>.<p>
         * When the command name is <code>fallback-entry</code>, the value of
         * the command may be <code>true</code> or <code>false</code>.  An
         * entry for a MIME type that includes a parameter of
         * <code>x-java-fallback-entry=true</code> defines fallback commands
         * for that MIME type that will only be used if no non-fallback entry
         * can be found.  For example, an entry of the form <code>text/*; ;
         * x-java-fallback-entry=true; x-java-view=com.sun.TextViewer</code>
         * specifies a view command to be used for any text MIME type.  This
         * view command would only be used if a non-fallback view command for
         * the MIME type could not be found.<p>
         * MailcapCommandMap aware mailcap files have the
         * following general form:<p>
         * <code>
         * # Comments begin with a '#' and continue to the end of the line.<br>
         * &lt;mime type>; ; &lt;parameter list><br>
         * # Where a parameter list consists of one or more parameters,<br>
         * # where parameters look like: x-java-view=com.sun.TextViewer<br>
         * # and a parameter list looks like: <br>
         * text/plain; ; x-java-view=com.sun.TextViewer; x-java-edit=com.sun.TextEdit
         * <br>
         * # Note that mailcap entries that do not contain 'x-java' parameters<br>
         * # and comply to RFC 1524 are simply ignored:<br>
         * image/gif; /usr/dt/bin/sdtimage %s<br>
         * </code>
         * <p>
         * @author Bart Calder
         * @author Bill Shannon
         * @since 1.6
         */
        // @ts-ignore
        class MailcapCommandMap extends javax.activation.CommandMap {
            /**
             * The default Constructor.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructor that allows the caller to specify the path
             * of a <i>mailcap</i> file.
             * @param fileName The name of the <i>mailcap</i> file to open
             * @exception IOException     if the file can't be accessed
             */
            // @ts-ignore
            constructor(fileName: string)
            /**
             * Constructor that allows the caller to specify an <i>InputStream</i>
             * containing a mailcap file.
             * @param is        InputStream of the <i>mailcap</i> file to open
             */
            // @ts-ignore
            constructor(jis: java.io.InputStream)
            /**
             * Get the preferred command list for a MIME Type. The MailcapCommandMap
             * searches the mailcap files as described above under
             * <i>Mailcap file search order</i>.<p>
             * The result of the search is a proper subset of available
             * commands in all mailcap files known to this instance of
             * MailcapCommandMap.  The first entry for a particular command
             * is considered the preferred command.
             * @param mimeType  the MIME type
             * @return the CommandInfo objects representing the preferred commands.
             */
            // @ts-ignore
            getPreferredCommands(mimeType: string): javax.activation.CommandInfo[]
            /**
             * Get all the available commands in all mailcap files known to
             * this instance of MailcapCommandMap for this MIME type.
             * @param mimeType  the MIME type
             * @return the CommandInfo objects representing all the commands.
             */
            // @ts-ignore
            getAllCommands(mimeType: string): javax.activation.CommandInfo[]
            /**
             * Get the command corresponding to <code>cmdName</code> for the MIME type.
             * @param mimeType  the MIME type
             * @param cmdName   the command name
             * @return the CommandInfo object corresponding to the command.
             */
            // @ts-ignore
            getCommand(mimeType: string, cmdName: string): javax.activation.CommandInfo
            /**
             * Add entries to the registry.  Programmatically
             * added entries are searched before other entries.<p>
             * The string that is passed in should be in mailcap
             * format.
             * @param mail_cap a correctly formatted mailcap string
             */
            // @ts-ignore
            addMailcap(mail_cap: string): void
            /**
             * Return the DataContentHandler for the specified MIME type.
             * @param mimeType  the MIME type
             * @return the DataContentHandler
             */
            // @ts-ignore
            createDataContentHandler(mimeType: string): javax.activation.DataContentHandler
            /**
             * Get all the MIME types known to this command map.
             * @return array of MIME types as strings
             * @since JAF 1.1
             */
            // @ts-ignore
            getMimeTypes(): java.lang.String[]
            /**
             * Get the native commands for the given MIME type.
             * Returns an array of strings where each string is
             * an entire mailcap file entry.  The application
             * will need to parse the entry to extract the actual
             * command as well as any attributes it needs. See
             * <A HREF="http://www.ietf.org/rfc/rfc1524.txt">RFC 1524</A>
             * for details of the mailcap entry syntax.  Only mailcap
             * entries that specify a view command for the specified
             * MIME type are returned.
             * @return array of native command entries
             * @since JAF 1.1
             */
            // @ts-ignore
            getNativeCommands(mimeType: string): java.lang.String[]
        }
    }
}
