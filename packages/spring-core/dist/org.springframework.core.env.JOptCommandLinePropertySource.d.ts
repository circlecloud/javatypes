declare namespace org {
    namespace springframework {
        namespace core {
            namespace env {
                /**
                 * {@link CommandLinePropertySource} implementation backed by a JOpt {@link OptionSet}.
                 * <h2>Typical usage</h2>
                 * Configure and execute an {@code OptionParser} against the {@code String[]} of arguments
                 * supplied to the {@code main} method, and create a {@link JOptCommandLinePropertySource}
                 * using the resulting {@code OptionSet} object:
                 * <pre class="code">
                 * public static void main(String[] args) {
                 * OptionParser parser = new OptionParser();
                 * parser.accepts("option1");
                 * parser.accepts("option2").withRequiredArg();
                 * OptionSet options = parser.parse(args);
                 * PropertySource<?> ps = new JOptCommandLinePropertySource(options);
                 * // ...
                 * }</pre>
                 * See {@link CommandLinePropertySource} for complete general usage examples.
                 * <p>Requires JOpt Simple version 4.3 or higher. Tested against JOpt up until 5.0.
                 * @author Chris Beams
                 * @author Juergen Hoeller
                 * @author Dave Syer
                 * @since 3.1
                 * @see CommandLinePropertySource
                 * @see joptsimple.OptionParser
                 * @see joptsimple.OptionSet
                 */
                // @ts-ignore
                class JOptCommandLinePropertySource extends org.springframework.core.env.CommandLinePropertySource<OptionSet> {
                    /**
                     * Create a new {@code JOptCommandLinePropertySource} having the default name
                     * and backed by the given {@code OptionSet}.
                     * @see CommandLinePropertySource#COMMAND_LINE_PROPERTY_SOURCE_NAME
                     * @see CommandLinePropertySource#CommandLinePropertySource(Object)
                     */
                    // @ts-ignore
                    constructor(options: OptionSet)
                    /**
                     * Create a new {@code JOptCommandLinePropertySource} having the given name
                     * and backed by the given {@code OptionSet}.
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, options: OptionSet)
                    // @ts-ignore
                    containsOption(name: java.lang.String | string): boolean
                    // @ts-ignore
                    public getPropertyNames(): string[]
                    // @ts-ignore
                    public getOptionValues(name: java.lang.String | string): Array<java.lang.String | string>
                    // @ts-ignore
                    getNonOptionArgs(): Array<java.lang.String | string>
                }
            }
        }
    }
}
