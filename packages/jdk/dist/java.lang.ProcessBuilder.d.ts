declare namespace java {
    namespace lang {
        /**
         * This class is used to create operating system processes.
         * <p>Each {@code ProcessBuilder} instance manages a collection
         * of process attributes.  The {@link #start()} method creates a new
         * {@link Process} instance with those attributes.  The {@link
         * #start()} method can be invoked repeatedly from the same instance
         * to create new subprocesses with identical or related attributes.
         * <p>Each process builder manages these process attributes:
         * <ul>
         * <li>a <i>command</i>, a list of strings which signifies the
         * external program file to be invoked and its arguments, if any.
         * Which string lists represent a valid operating system command is
         * system-dependent.  For example, it is common for each conceptual
         * argument to be an element in this list, but there are operating
         * systems where programs are expected to tokenize command line
         * strings themselves - on such a system a Java implementation might
         * require commands to contain exactly two elements.
         * <li>an <i>environment</i>, which is a system-dependent mapping from
         * <i>variables</i> to <i>values</i>.  The initial value is a copy of
         * the environment of the current process (see {@link System#getenv()}).
         * <li>a <i>working directory</i>.  The default value is the current
         * working directory of the current process, usually the directory
         * named by the system property {@code user.dir}.
         * <li><a name="redirect-input">a source of <i>standard input</i></a>.
         * By default, the subprocess reads input from a pipe.  Java code
         * can access this pipe via the output stream returned by
         * {@link Process#getOutputStream()}.  However, standard input may
         * be redirected to another source using
         * {@link #redirectInput(Redirect) redirectInput}.
         * In this case, {@link Process#getOutputStream()} will return a
         * <i>null output stream</i>, for which:
         * <ul>
         * <li>the {@link OutputStream#write(int) write} methods always
         * throw {@code IOException}
         * <li>the {@link OutputStream#close() close} method does nothing
         * </ul>
         * <li><a name="redirect-output">a destination for <i>standard output</i>
         * and <i>standard error</i></a>.  By default, the subprocess writes standard
         * output and standard error to pipes.  Java code can access these pipes
         * via the input streams returned by {@link Process#getInputStream()} and
         * {@link Process#getErrorStream()}.  However, standard output and
         * standard error may be redirected to other destinations using
         * {@link #redirectOutput(Redirect) redirectOutput} and
         * {@link #redirectError(Redirect) redirectError}.
         * In this case, {@link Process#getInputStream()} and/or
         * {@link Process#getErrorStream()} will return a <i>null input
         * stream</i>, for which:
         * <ul>
         * <li>the {@link InputStream#read() read} methods always return
         * {@code -1}
         * <li>the {@link InputStream#available() available} method always returns
         * {@code 0}
         * <li>the {@link InputStream#close() close} method does nothing
         * </ul>
         * <li>a <i>redirectErrorStream</i> property.  Initially, this property
         * is {@code false}, meaning that the standard output and error
         * output of a subprocess are sent to two separate streams, which can
         * be accessed using the {@link Process#getInputStream()} and {@link
         * Process#getErrorStream()} methods.
         * <p>If the value is set to {@code true}, then:
         * <ul>
         * <li>standard error is merged with the standard output and always sent
         * to the same destination (this makes it easier to correlate error
         * messages with the corresponding output)
         * <li>the common destination of standard error and standard output can be
         * redirected using
         * {@link #redirectOutput(Redirect) redirectOutput}
         * <li>any redirection set by the
         * {@link #redirectError(Redirect) redirectError}
         * method is ignored when creating a subprocess
         * <li>the stream returned from {@link Process#getErrorStream()} will
         * always be a <a href="#redirect-output">null input stream</a>
         * </ul>
         * </ul>
         * <p>Modifying a process builder's attributes will affect processes
         * subsequently started by that object's {@link #start()} method, but
         * will never affect previously started processes or the Java process
         * itself.
         * <p>Most error checking is performed by the {@link #start()} method.
         * It is possible to modify the state of an object so that {@link
         * #start()} will fail.  For example, setting the command attribute to
         * an empty list will not throw an exception unless {@link #start()}
         * is invoked.
         * <p><strong>Note that this class is not synchronized.</strong>
         * If multiple threads access a {@code ProcessBuilder} instance
         * concurrently, and at least one of the threads modifies one of the
         * attributes structurally, it <i>must</i> be synchronized externally.
         * <p>Starting a new process which uses the default working directory
         * and environment is easy:
         * <pre> {@code
         * Process p = new ProcessBuilder("myCommand", "myArg").start();
         * }</pre>
         * <p>Here is an example that starts a process with a modified working
         * directory and environment, and redirects standard output and error
         * to be appended to a log file:
         * <pre> {@code
         * ProcessBuilder pb =
         * new ProcessBuilder("myCommand", "myArg1", "myArg2");
         * Map<String, String> env = pb.environment();
         * env.put("VAR1", "myValue");
         * env.remove("OTHERVAR");
         * env.put("VAR2", env.get("VAR1") + "suffix");
         * pb.directory(new File("myDir"));
         * File log = new File("log");
         * pb.redirectErrorStream(true);
         * pb.redirectOutput(Redirect.appendTo(log));
         * Process p = pb.start();
         * assert pb.redirectInput() == Redirect.PIPE;
         * assert pb.redirectOutput().file() == log;
         * assert p.getInputStream().read() == -1;
         * }</pre>
         * <p>To start a process with an explicit set of environment
         * variables, first call {@link java.util.Map#clear() Map.clear()}
         * before adding environment variables.
         * @author Martin Buchholz
         * @since 1.5
         */
        // @ts-ignore
        class ProcessBuilder extends java.lang.Object {
            /**
             * Constructs a process builder with the specified operating
             * system program and arguments.  This constructor does <i>not</i>
             * make a copy of the {@code command} list.  Subsequent
             * updates to the list will be reflected in the state of the
             * process builder.  It is not checked whether
             * {@code command} corresponds to a valid operating system
             * command.
             * @param command the list containing the program and its arguments
             * @throws NullPointerException if the argument is null
             */
            // @ts-ignore
            constructor(command: java.util.List<java.lang.String | string> | Array<java.lang.String | string>)
            /**
             * Constructs a process builder with the specified operating
             * system program and arguments.  This is a convenience
             * constructor that sets the process builder's command to a string
             * list containing the same strings as the {@code command}
             * array, in the same order.  It is not checked whether
             * {@code command} corresponds to a valid operating system
             * command.
             * @param command a string array containing the program and its arguments
             */
            // @ts-ignore
            constructor(...command: java.lang.String[] | string[])
            /**
             * Sets this process builder's operating system program and
             * arguments.  This method does <i>not</i> make a copy of the
             * {@code command} list.  Subsequent updates to the list will
             * be reflected in the state of the process builder.  It is not
             * checked whether {@code command} corresponds to a valid
             * operating system command.
             * @param command the list containing the program and its arguments
             * @return this process builder
             * @throws NullPointerException if the argument is null
             */
            // @ts-ignore
            public command(command: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): java.lang.ProcessBuilder
            /**
             * Sets this process builder's operating system program and
             * arguments.  This is a convenience method that sets the command
             * to a string list containing the same strings as the
             * {@code command} array, in the same order.  It is not
             * checked whether {@code command} corresponds to a valid
             * operating system command.
             * @param command a string array containing the program and its arguments
             * @return this process builder
             */
            // @ts-ignore
            public command(...command: java.lang.String[] | string[]): java.lang.ProcessBuilder
            /**
             * Returns this process builder's operating system program and
             * arguments.  The returned list is <i>not</i> a copy.  Subsequent
             * updates to the list will be reflected in the state of this
             * process builder.
             * @return this process builder's program and its arguments
             */
            // @ts-ignore
            public command(): Array<java.lang.String | string>
            /**
             * Returns a string map view of this process builder's environment.
             * Whenever a process builder is created, the environment is
             * initialized to a copy of the current process environment (see
             * {@link System#getenv()}).  Subprocesses subsequently started by
             * this object's {@link #start()} method will use this map as
             * their environment.
             * <p>The returned object may be modified using ordinary {@link
             * java.util.Map Map} operations.  These modifications will be
             * visible to subprocesses started via the {@link #start()}
             * method.  Two {@code ProcessBuilder} instances always
             * contain independent process environments, so changes to the
             * returned map will never be reflected in any other
             * {@code ProcessBuilder} instance or the values returned by
             * {@link System#getenv System.getenv}.
             * <p>If the system does not support environment variables, an
             * empty map is returned.
             * <p>The returned map does not permit null keys or values.
             * Attempting to insert or query the presence of a null key or
             * value will throw a {@link NullPointerException}.
             * Attempting to query the presence of a key or value which is not
             * of type {@link String} will throw a {@link ClassCastException}.
             * <p>The behavior of the returned map is system-dependent.  A
             * system may not allow modifications to environment variables or
             * may forbid certain variable names or values.  For this reason,
             * attempts to modify the map may fail with
             * {@link UnsupportedOperationException} or
             * {@link IllegalArgumentException}
             * if the modification is not permitted by the operating system.
             * <p>Since the external format of environment variable names and
             * values is system-dependent, there may not be a one-to-one
             * mapping between them and Java's Unicode strings.  Nevertheless,
             * the map is implemented in such a way that environment variables
             * which are not modified by Java code will have an unmodified
             * native representation in the subprocess.
             * <p>The returned map and its collection views may not obey the
             * general contract of the {@link Object#equals} and
             * {@link Object#hashCode} methods.
             * <p>The returned map is typically case-sensitive on all platforms.
             * <p>If a security manager exists, its
             * {@link SecurityManager#checkPermission checkPermission} method
             * is called with a
             * {@link RuntimePermission}{@code ("getenv.*")} permission.
             * This may result in a {@link SecurityException} being thrown.
             * <p>When passing information to a Java subprocess,
             * <a href=System.html#EnvironmentVSSystemProperties>system properties</a>
             * are generally preferred over environment variables.
             * @return this process builder's environment
             * @throws SecurityException
             *          if a security manager exists and its
             *          {#link SecurityManager#checkPermission checkPermission}
             *          method doesn't allow access to the process environment
             * @see Runtime#exec(String[],String[],java.io.File)
             * @see System#getenv()
             */
            // @ts-ignore
            public environment(): java.util.Map<java.lang.String | string, java.lang.String | string>
            /**
             * Returns this process builder's working directory.
             * Subprocesses subsequently started by this object's {@link
             * #start()} method will use this as their working directory.
             * The returned value may be {@code null} -- this means to use
             * the working directory of the current Java process, usually the
             * directory named by the system property {@code user.dir},
             * as the working directory of the child process.
             * @return this process builder's working directory
             */
            // @ts-ignore
            public directory(): java.io.File
            /**
             * Sets this process builder's working directory.
             * Subprocesses subsequently started by this object's {@link
             * #start()} method will use this as their working directory.
             * The argument may be {@code null} -- this means to use the
             * working directory of the current Java process, usually the
             * directory named by the system property {@code user.dir},
             * as the working directory of the child process.
             * @param directory the new working directory
             * @return this process builder
             */
            // @ts-ignore
            public directory(directory: java.io.File): java.lang.ProcessBuilder
            /**
             * Sets this process builder's standard input source.
             * Subprocesses subsequently started by this object's {@link #start()}
             * method obtain their standard input from this source.
             * <p>If the source is {@link Redirect#PIPE Redirect.PIPE}
             * (the initial value), then the standard input of a
             * subprocess can be written to using the output stream
             * returned by {@link Process#getOutputStream()}.
             * If the source is set to any other value, then
             * {@link Process#getOutputStream()} will return a
             * <a href="#redirect-input">null output stream</a>.
             * @param source the new standard input source
             * @return this process builder
             * @throws IllegalArgumentException
             *          if the redirect does not correspond to a valid source
             *          of data, that is, has type
             *          {#link Redirect.Type#WRITE WRITE} or
             *          {@link Redirect.Type#APPEND APPEND}
             * @since 1.7
             */
            // @ts-ignore
            public redirectInput(source: java.lang.ProcessBuilder.Redirect): java.lang.ProcessBuilder
            /**
             * Sets this process builder's standard output destination.
             * Subprocesses subsequently started by this object's {@link #start()}
             * method send their standard output to this destination.
             * <p>If the destination is {@link Redirect#PIPE Redirect.PIPE}
             * (the initial value), then the standard output of a subprocess
             * can be read using the input stream returned by {@link
             * Process#getInputStream()}.
             * If the destination is set to any other value, then
             * {@link Process#getInputStream()} will return a
             * <a href="#redirect-output">null input stream</a>.
             * @param destination the new standard output destination
             * @return this process builder
             * @throws IllegalArgumentException
             *          if the redirect does not correspond to a valid
             *          destination of data, that is, has type
             *          {#link Redirect.Type#READ READ}
             * @since 1.7
             */
            // @ts-ignore
            public redirectOutput(destination: java.lang.ProcessBuilder.Redirect): java.lang.ProcessBuilder
            /**
             * Sets this process builder's standard error destination.
             * Subprocesses subsequently started by this object's {@link #start()}
             * method send their standard error to this destination.
             * <p>If the destination is {@link Redirect#PIPE Redirect.PIPE}
             * (the initial value), then the error output of a subprocess
             * can be read using the input stream returned by {@link
             * Process#getErrorStream()}.
             * If the destination is set to any other value, then
             * {@link Process#getErrorStream()} will return a
             * <a href="#redirect-output">null input stream</a>.
             * <p>If the {@link #redirectErrorStream redirectErrorStream}
             * attribute has been set {@code true}, then the redirection set
             * by this method has no effect.
             * @param destination the new standard error destination
             * @return this process builder
             * @throws IllegalArgumentException
             *          if the redirect does not correspond to a valid
             *          destination of data, that is, has type
             *          {#link Redirect.Type#READ READ}
             * @since 1.7
             */
            // @ts-ignore
            public redirectError(destination: java.lang.ProcessBuilder.Redirect): java.lang.ProcessBuilder
            /**
             * Sets this process builder's standard input source to a file.
             * <p>This is a convenience method.  An invocation of the form
             * {@code redirectInput(file)}
             * behaves in exactly the same way as the invocation
             * {@link #redirectInput(Redirect) redirectInput}
             * {@code (Redirect.from(file))}.
             * @param file the new standard input source
             * @return this process builder
             * @since 1.7
             */
            // @ts-ignore
            public redirectInput(file: java.io.File): java.lang.ProcessBuilder
            /**
             * Sets this process builder's standard output destination to a file.
             * <p>This is a convenience method.  An invocation of the form
             * {@code redirectOutput(file)}
             * behaves in exactly the same way as the invocation
             * {@link #redirectOutput(Redirect) redirectOutput}
             * {@code (Redirect.to(file))}.
             * @param file the new standard output destination
             * @return this process builder
             * @since 1.7
             */
            // @ts-ignore
            public redirectOutput(file: java.io.File): java.lang.ProcessBuilder
            /**
             * Sets this process builder's standard error destination to a file.
             * <p>This is a convenience method.  An invocation of the form
             * {@code redirectError(file)}
             * behaves in exactly the same way as the invocation
             * {@link #redirectError(Redirect) redirectError}
             * {@code (Redirect.to(file))}.
             * @param file the new standard error destination
             * @return this process builder
             * @since 1.7
             */
            // @ts-ignore
            public redirectError(file: java.io.File): java.lang.ProcessBuilder
            /**
             * Returns this process builder's standard input source.
             * Subprocesses subsequently started by this object's {@link #start()}
             * method obtain their standard input from this source.
             * The initial value is {@link Redirect#PIPE Redirect.PIPE}.
             * @return this process builder's standard input source
             * @since 1.7
             */
            // @ts-ignore
            public redirectInput(): java.lang.ProcessBuilder.Redirect
            /**
             * Returns this process builder's standard output destination.
             * Subprocesses subsequently started by this object's {@link #start()}
             * method redirect their standard output to this destination.
             * The initial value is {@link Redirect#PIPE Redirect.PIPE}.
             * @return this process builder's standard output destination
             * @since 1.7
             */
            // @ts-ignore
            public redirectOutput(): java.lang.ProcessBuilder.Redirect
            /**
             * Returns this process builder's standard error destination.
             * Subprocesses subsequently started by this object's {@link #start()}
             * method redirect their standard error to this destination.
             * The initial value is {@link Redirect#PIPE Redirect.PIPE}.
             * @return this process builder's standard error destination
             * @since 1.7
             */
            // @ts-ignore
            public redirectError(): java.lang.ProcessBuilder.Redirect
            /**
             * Sets the source and destination for subprocess standard I/O
             * to be the same as those of the current Java process.
             * <p>This is a convenience method.  An invocation of the form
             * <pre> {@code
             * pb.inheritIO()
             * }</pre>
             * behaves in exactly the same way as the invocation
             * <pre> {@code
             * pb.redirectInput(Redirect.INHERIT)
             * .redirectOutput(Redirect.INHERIT)
             * .redirectError(Redirect.INHERIT)
             * }</pre>
             * This gives behavior equivalent to most operating system
             * command interpreters, or the standard C library function
             * {@code system()}.
             * @return this process builder
             * @since 1.7
             */
            // @ts-ignore
            public inheritIO(): java.lang.ProcessBuilder
            /**
             * Tells whether this process builder merges standard error and
             * standard output.
             * <p>If this property is {@code true}, then any error output
             * generated by subprocesses subsequently started by this object's
             * {@link #start()} method will be merged with the standard
             * output, so that both can be read using the
             * {@link Process#getInputStream()} method.  This makes it easier
             * to correlate error messages with the corresponding output.
             * The initial value is {@code false}.
             * @return this process builder's {#code redirectErrorStream} property
             */
            // @ts-ignore
            public redirectErrorStream(): boolean
            /**
             * Sets this process builder's {@code redirectErrorStream} property.
             * <p>If this property is {@code true}, then any error output
             * generated by subprocesses subsequently started by this object's
             * {@link #start()} method will be merged with the standard
             * output, so that both can be read using the
             * {@link Process#getInputStream()} method.  This makes it easier
             * to correlate error messages with the corresponding output.
             * The initial value is {@code false}.
             * @param redirectErrorStream the new property value
             * @return this process builder
             */
            // @ts-ignore
            public redirectErrorStream(redirectErrorStream: boolean): java.lang.ProcessBuilder
            /**
             * Starts a new process using the attributes of this process builder.
             * <p>The new process will
             * invoke the command and arguments given by {@link #command()},
             * in a working directory as given by {@link #directory()},
             * with a process environment as given by {@link #environment()}.
             * <p>This method checks that the command is a valid operating
             * system command.  Which commands are valid is system-dependent,
             * but at the very least the command must be a non-empty list of
             * non-null strings.
             * <p>A minimal set of system dependent environment variables may
             * be required to start a process on some operating systems.
             * As a result, the subprocess may inherit additional environment variable
             * settings beyond those in the process builder's {@link #environment()}.
             * <p>If there is a security manager, its
             * {@link SecurityManager#checkExec checkExec}
             * method is called with the first component of this object's
             * {@code command} array as its argument. This may result in
             * a {@link SecurityException} being thrown.
             * <p>Starting an operating system process is highly system-dependent.
             * Among the many things that can go wrong are:
             * <ul>
             * <li>The operating system program file was not found.
             * <li>Access to the program file was denied.
             * <li>The working directory does not exist.
             * </ul>
             * <p>In such cases an exception will be thrown.  The exact nature
             * of the exception is system-dependent, but it will always be a
             * subclass of {@link IOException}.
             * <p>Subsequent modifications to this process builder will not
             * affect the returned {@link Process}.
             * @return a new {#link Process} object for managing the subprocess
             * @throws NullPointerException
             *          if an element of the command list is null
             * @throws IndexOutOfBoundsException
             *          if the command is an empty list (has size {#code 0})
             * @throws SecurityException
             *          if a security manager exists and
             *          <ul>
             * 
             *          <li>its
             *          {#link SecurityManager#checkExec checkExec}
             *          method doesn't allow creation of the subprocess, or
             * 
             *          <li>the standard input to the subprocess was
             *          {@linkplain #redirectInput redirected from a file}
             *          and the security manager's
             *          {@link SecurityManager#checkRead checkRead} method
             *          denies read access to the file, or
             * 
             *          <li>the standard output or standard error of the
             *          subprocess was
             *          {@linkplain #redirectOutput redirected to a file}
             *          and the security manager's
             *          {@link SecurityManager#checkWrite checkWrite} method
             *          denies write access to the file
             * 
             *          </ul>
             * @throws IOException if an I/O error occurs
             * @see Runtime#exec(String[], String[], java.io.File)
             */
            // @ts-ignore
            public start(): java.lang.Process
        }
    }
}
