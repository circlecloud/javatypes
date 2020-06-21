declare namespace java {
    namespace util {
        namespace logging {
            /**
             * Simple file logging <tt>Handler</tt>.
             * <p>
             * The <tt>FileHandler</tt> can either write to a specified file,
             * or it can write to a rotating set of files.
             * <p>
             * For a rotating set of files, as each file reaches a given size
             * limit, it is closed, rotated out, and a new file opened.
             * Successively older files are named by adding "0", "1", "2",
             * etc. into the base filename.
             * <p>
             * By default buffering is enabled in the IO libraries but each log
             * record is flushed out when it is complete.
             * <p>
             * By default the <tt>XMLFormatter</tt> class is used for formatting.
             * <p>
             * <b>Configuration:</b>
             * By default each <tt>FileHandler</tt> is initialized using the following
             * <tt>LogManager</tt> configuration properties where <tt>&lt;handler-name&gt;</tt>
             * refers to the fully-qualified class name of the handler.
             * If properties are not defined
             * (or have invalid values) then the specified default values are used.
             * <ul>
             * <li>   &lt;handler-name&gt;.level
             * specifies the default level for the <tt>Handler</tt>
             * (defaults to <tt>Level.ALL</tt>). </li>
             * <li>   &lt;handler-name&gt;.filter
             * specifies the name of a <tt>Filter</tt> class to use
             * (defaults to no <tt>Filter</tt>). </li>
             * <li>   &lt;handler-name&gt;.formatter
             * specifies the name of a <tt>Formatter</tt> class to use
             * (defaults to <tt>java.util.logging.XMLFormatter</tt>) </li>
             * <li>   &lt;handler-name&gt;.encoding
             * the name of the character set encoding to use (defaults to
             * the default platform encoding). </li>
             * <li>   &lt;handler-name&gt;.limit
             * specifies an approximate maximum amount to write (in bytes)
             * to any one file.  If this is zero, then there is no limit.
             * (Defaults to no limit). </li>
             * <li>   &lt;handler-name&gt;.count
             * specifies how many output files to cycle through (defaults to 1). </li>
             * <li>   &lt;handler-name&gt;.pattern
             * specifies a pattern for generating the output file name.  See
             * below for details. (Defaults to "%h/java%u.log"). </li>
             * <li>   &lt;handler-name&gt;.append
             * specifies whether the FileHandler should append onto
             * any existing files (defaults to false). </li>
             * </ul>
             * <p>
             * For example, the properties for {@code FileHandler} would be:
             * <ul>
             * <li>   java.util.logging.FileHandler.level=INFO </li>
             * <li>   java.util.logging.FileHandler.formatter=java.util.logging.SimpleFormatter </li>
             * </ul>
             * <p>
             * For a custom handler, e.g. com.foo.MyHandler, the properties would be:
             * <ul>
             * <li>   com.foo.MyHandler.level=INFO </li>
             * <li>   com.foo.MyHandler.formatter=java.util.logging.SimpleFormatter </li>
             * </ul>
             * <p>
             * A pattern consists of a string that includes the following special
             * components that will be replaced at runtime:
             * <ul>
             * <li>    "/"    the local pathname separator </li>
             * <li>     "%t"   the system temporary directory </li>
             * <li>     "%h"   the value of the "user.home" system property </li>
             * <li>     "%g"   the generation number to distinguish rotated logs </li>
             * <li>     "%u"   a unique number to resolve conflicts </li>
             * <li>     "%%"   translates to a single percent sign "%" </li>
             * </ul>
             * If no "%g" field has been specified and the file count is greater
             * than one, then the generation number will be added to the end of
             * the generated filename, after a dot.
             * <p>
             * Thus for example a pattern of "%t/java%g.log" with a count of 2
             * would typically cause log files to be written on Solaris to
             * /var/tmp/java0.log and /var/tmp/java1.log whereas on Windows 95 they
             * would be typically written to C:\TEMP\java0.log and C:\TEMP\java1.log
             * <p>
             * Generation numbers follow the sequence 0, 1, 2, etc.
             * <p>
             * Normally the "%u" unique field is set to 0.  However, if the <tt>FileHandler</tt>
             * tries to open the filename and finds the file is currently in use by
             * another process it will increment the unique number field and try
             * again.  This will be repeated until <tt>FileHandler</tt> finds a file name that
             * is  not currently in use. If there is a conflict and no "%u" field has
             * been specified, it will be added at the end of the filename after a dot.
             * (This will be after any automatically added generation number.)
             * <p>
             * Thus if three processes were all trying to log to fred%u.%g.txt then
             * they  might end up using fred0.0.txt, fred1.0.txt, fred2.0.txt as
             * the first file in their rotating sequences.
             * <p>
             * Note that the use of unique ids to avoid conflicts is only guaranteed
             * to work reliably when using a local disk file system.
             * @since 1.4
             */
            // @ts-ignore
            class FileHandler extends java.util.logging.StreamHandler {
                /**
                 * Construct a default <tt>FileHandler</tt>.  This will be configured
                 * entirely from <tt>LogManager</tt> properties (or their default values).
                 * <p>
                 * @exception IOException if there are IO problems opening the files.
                 * @exception SecurityException  if a security manager exists and if
                 *              the caller does not have <tt>LoggingPermission("control"))</tt>.
                 * @exception NullPointerException if pattern property is an empty String.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Initialize a <tt>FileHandler</tt> to write to the given filename.
                 * <p>
                 * The <tt>FileHandler</tt> is configured based on <tt>LogManager</tt>
                 * properties (or their default values) except that the given pattern
                 * argument is used as the filename pattern, the file limit is
                 * set to no limit, and the file count is set to one.
                 * <p>
                 * There is no limit on the amount of data that may be written,
                 * so use this with care.
                 * @param pattern  the name of the output file
                 * @exception IOException if there are IO problems opening the files.
                 * @exception SecurityException  if a security manager exists and if
                 *              the caller does not have <tt>LoggingPermission("control")</tt>.
                 * @exception IllegalArgumentException if pattern is an empty string
                 */
                // @ts-ignore
                constructor(pattern: java.lang.String | string)
                /**
                 * Initialize a <tt>FileHandler</tt> to write to the given filename,
                 * with optional append.
                 * <p>
                 * The <tt>FileHandler</tt> is configured based on <tt>LogManager</tt>
                 * properties (or their default values) except that the given pattern
                 * argument is used as the filename pattern, the file limit is
                 * set to no limit, the file count is set to one, and the append
                 * mode is set to the given <tt>append</tt> argument.
                 * <p>
                 * There is no limit on the amount of data that may be written,
                 * so use this with care.
                 * @param pattern  the name of the output file
                 * @param append  specifies append mode
                 * @exception IOException if there are IO problems opening the files.
                 * @exception SecurityException  if a security manager exists and if
                 *              the caller does not have <tt>LoggingPermission("control")</tt>.
                 * @exception IllegalArgumentException if pattern is an empty string
                 */
                // @ts-ignore
                constructor(pattern: java.lang.String | string, append: boolean)
                /**
                 * Initialize a <tt>FileHandler</tt> to write to a set of files.  When
                 * (approximately) the given limit has been written to one file,
                 * another file will be opened.  The output will cycle through a set
                 * of count files.
                 * <p>
                 * The <tt>FileHandler</tt> is configured based on <tt>LogManager</tt>
                 * properties (or their default values) except that the given pattern
                 * argument is used as the filename pattern, the file limit is
                 * set to the limit argument, and the file count is set to the
                 * given count argument.
                 * <p>
                 * The count must be at least 1.
                 * @param pattern  the pattern for naming the output file
                 * @param limit  the maximum number of bytes to write to any one file
                 * @param count  the number of files to use
                 * @exception IOException if there are IO problems opening the files.
                 * @exception SecurityException  if a security manager exists and if
                 *              the caller does not have <tt>LoggingPermission("control")</tt>.
                 * @exception IllegalArgumentException if {#code limit < 0}, or {@code count < 1}.
                 * @exception IllegalArgumentException if pattern is an empty string
                 */
                // @ts-ignore
                constructor(pattern: java.lang.String | string, limit: number /*int*/, count: number /*int*/)
                /**
                 * Initialize a <tt>FileHandler</tt> to write to a set of files
                 * with optional append.  When (approximately) the given limit has
                 * been written to one file, another file will be opened.  The
                 * output will cycle through a set of count files.
                 * <p>
                 * The <tt>FileHandler</tt> is configured based on <tt>LogManager</tt>
                 * properties (or their default values) except that the given pattern
                 * argument is used as the filename pattern, the file limit is
                 * set to the limit argument, and the file count is set to the
                 * given count argument, and the append mode is set to the given
                 * <tt>append</tt> argument.
                 * <p>
                 * The count must be at least 1.
                 * @param pattern  the pattern for naming the output file
                 * @param limit  the maximum number of bytes to write to any one file
                 * @param count  the number of files to use
                 * @param append  specifies append mode
                 * @exception IOException if there are IO problems opening the files.
                 * @exception SecurityException  if a security manager exists and if
                 *              the caller does not have <tt>LoggingPermission("control")</tt>.
                 * @exception IllegalArgumentException if {#code limit < 0}, or {@code count < 1}.
                 * @exception IllegalArgumentException if pattern is an empty string
                 */
                // @ts-ignore
                constructor(pattern: java.lang.String | string, limit: number /*int*/, count: number /*int*/, append: boolean)
                /**
                 * Format and publish a <tt>LogRecord</tt>.
                 * @param record  description of the log event. A null record is
                 *                  silently ignored and is not published
                 */
                // @ts-ignore
                public publish(record: java.util.logging.LogRecord): void
                /**
                 * Close all the files.
                 * @exception SecurityException  if a security manager exists and if
                 *              the caller does not have <tt>LoggingPermission("control")</tt>.
                 */
                // @ts-ignore
                public close(): void
            }
        }
    }
}
