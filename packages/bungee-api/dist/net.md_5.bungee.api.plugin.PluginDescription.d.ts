declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace plugin {
                    /**
                     * POJO representing the plugin.yml file.
                     */
                    // @ts-ignore
                    class PluginDescription extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(name: java.lang.String | string, main: java.lang.String | string, version: java.lang.String | string, author: java.lang.String | string, depends: java.util.Set<java.lang.String | string> | Array<java.lang.String | string>, softDepends: java.util.Set<java.lang.String | string> | Array<java.lang.String | string>, file: java.io.File, description: java.lang.String | string)
                        /**
                         * Friendly name of the plugin.
                         */
                        // @ts-ignore
                        public getName(): string
                        /**
                         * Plugin main class. Needs to extend {@link Plugin}.
                         */
                        // @ts-ignore
                        public getMain(): string
                        /**
                         * Plugin version.
                         */
                        // @ts-ignore
                        public getVersion(): string
                        /**
                         * Plugin author.
                         */
                        // @ts-ignore
                        public getAuthor(): string
                        /**
                         * Plugin hard dependencies.
                         */
                        // @ts-ignore
                        public getDepends(): Array<java.lang.String | string>
                        /**
                         * Plugin soft dependencies.
                         */
                        // @ts-ignore
                        public getSoftDepends(): Array<java.lang.String | string>
                        /**
                         * File we were loaded from.
                         */
                        // @ts-ignore
                        public getFile(): java.io.File
                        /**
                         * Optional description.
                         */
                        // @ts-ignore
                        public getDescription(): string
                        /**
                         * Friendly name of the plugin.
                         */
                        // @ts-ignore
                        public setName(name: java.lang.String | string): void
                        /**
                         * Plugin main class. Needs to extend {@link Plugin}.
                         */
                        // @ts-ignore
                        public setMain(main: java.lang.String | string): void
                        /**
                         * Plugin version.
                         */
                        // @ts-ignore
                        public setVersion(version: java.lang.String | string): void
                        /**
                         * Plugin author.
                         */
                        // @ts-ignore
                        public setAuthor(author: java.lang.String | string): void
                        /**
                         * Plugin hard dependencies.
                         */
                        // @ts-ignore
                        public setDepends(depends: java.util.Set<java.lang.String | string> | Array<java.lang.String | string>): void
                        /**
                         * Plugin soft dependencies.
                         */
                        // @ts-ignore
                        public setSoftDepends(softDepends: java.util.Set<java.lang.String | string> | Array<java.lang.String | string>): void
                        /**
                         * File we were loaded from.
                         */
                        // @ts-ignore
                        public setFile(file: java.io.File): void
                        /**
                         * Optional description.
                         */
                        // @ts-ignore
                        public setDescription(description: java.lang.String | string): void
                        // @ts-ignore
                        public equals(o: java.lang.Object | any): boolean
                        // @ts-ignore
                        canEqual(other: java.lang.Object | any): boolean
                        // @ts-ignore
                        public hashCode(): number /*int*/
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
