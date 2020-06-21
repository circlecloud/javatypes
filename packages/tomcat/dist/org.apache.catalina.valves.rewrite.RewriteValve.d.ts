declare namespace org {
    namespace apache {
        namespace catalina {
            namespace valves {
                namespace rewrite {
                    // @ts-ignore
                    class RewriteValve extends org.apache.catalina.valves.ValveBase {
                        // @ts-ignore
                        constructor()
                        /**
                         * The rewrite rules that the valve will use.
                         */
                        // @ts-ignore
                        rules: org.apache.catalina.valves.rewrite.RewriteRule[]
                        /**
                         * If rewriting occurs, the whole request will be processed again.
                         */
                        // @ts-ignore
                        invoked: java.lang.ThreadLocal<java.lang.Boolean>
                        /**
                         * Relative path to the configuration file.
                         * Note: If the valve's container is a context, this will be relative to
                         * /WEB-INF/.
                         */
                        // @ts-ignore
                        resourcePath: java.lang.String | string
                        /**
                         * Will be set to true if the valve is associated with a context.
                         */
                        // @ts-ignore
                        context: boolean
                        /**
                         * enabled this component
                         */
                        // @ts-ignore
                        enabled: boolean
                        /**
                         * Maps to be used by the rules.
                         */
                        // @ts-ignore
                        maps: java.util.Map<java.lang.String | string, org.apache.catalina.valves.rewrite.RewriteMap>
                        /**
                         * Maps configuration.
                         */
                        // @ts-ignore
                        mapsConfiguration: java.util.ArrayList<java.lang.String | string>
                        // @ts-ignore
                        public getEnabled(): boolean
                        // @ts-ignore
                        public setEnabled(enabled: boolean): void
                        // @ts-ignore
                        initInternal(): void
                        // @ts-ignore
                        startInternal(): void
                        // @ts-ignore
                        public setConfiguration(configuration: java.lang.String | string): void
                        // @ts-ignore
                        public getConfiguration(): string
                        // @ts-ignore
                        parse(reader: java.io.BufferedReader): void
                        // @ts-ignore
                        stopInternal(): void
                        // @ts-ignore
                        public invoke(request: org.apache.catalina.connector.Request, response: org.apache.catalina.connector.Response): void
                        /**
                         * This factory method will parse a line formed like:
                         * Example:
                         * RewriteCond %{REMOTE_HOST}  ^host1.*  [OR]
                         * @param line A line from the rewrite configuration
                         * @return The condition, rule or map resulting from parsing the line
                         */
                        // @ts-ignore
                        public static parse(line: java.lang.String | string): any
                        /**
                         * Parser for RewriteCond flags.
                         * @param line The configuration line being parsed
                         * @param condition The current condition
                         * @param flag The flag
                         */
                        // @ts-ignore
                        static parseCondFlag(line: java.lang.String | string, condition: org.apache.catalina.valves.rewrite.RewriteCond, flag: java.lang.String | string): void
                        /**
                         * Parser for RewriteRule flags.
                         * @param line The configuration line being parsed
                         * @param rule The current rule
                         * @param flag The flag
                         */
                        // @ts-ignore
                        static parseRuleFlag(line: java.lang.String | string, rule: org.apache.catalina.valves.rewrite.RewriteRule, flag: java.lang.String | string): void
                    }
                }
            }
        }
    }
}
