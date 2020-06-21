declare namespace org {
    namespace apache {
        namespace catalina {
            namespace mapper {
                namespace Mapper {
                    // @ts-ignore
                    class MappedHost extends org.apache.catalina.mapper.Mapper.MapElement<org.apache.catalina.Host> {
                        /**
                         * Constructor used for the primary Host
                         * @param name The name of the virtual host
                         * @param host The host
                         */
                        // @ts-ignore
                        constructor(name: java.lang.String | string, host: org.apache.catalina.Host)
                        /**
                         * Constructor used for an Alias
                         * @param alias    The alias of the virtual host
                         * @param realHost The host the alias points to
                         */
                        // @ts-ignore
                        constructor(alias: java.lang.String | string, realHost: org.apache.catalina.mapper.Mapper.MappedHost)
                        // @ts-ignore
                        public contextList: org.apache.catalina.mapper.Mapper.ContextList
                        // @ts-ignore
                        public isAlias(): boolean
                        // @ts-ignore
                        public getRealHost(): org.apache.catalina.mapper.Mapper.MappedHost
                        // @ts-ignore
                        public getRealHostName(): string
                        // @ts-ignore
                        public getAliases(): Array<org.apache.catalina.mapper.Mapper.MappedHost>
                        // @ts-ignore
                        public addAlias(alias: org.apache.catalina.mapper.Mapper.MappedHost): void
                        // @ts-ignore
                        public addAliases(c: java.util.Collection<any> | Array<any>): void
                        // @ts-ignore
                        public removeAlias(alias: org.apache.catalina.mapper.Mapper.MappedHost): void
                    }
                }
            }
        }
    }
}
