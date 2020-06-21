declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace event {
                    /**
                     * Called when the permission of a CommandSender is checked.
                     */
                    // @ts-ignore
                    class PermissionCheckEvent extends net.md_5.bungee.api.plugin.Event {
                        // @ts-ignore
                        constructor(sender: net.md_5.bungee.api.CommandSender, permission: java.lang.String | string, hasPermission: boolean)
                        // @ts-ignore
                        public hasPermission(): boolean
                        /**
                         * The command sender being checked for a permission.
                         */
                        // @ts-ignore
                        public getSender(): net.md_5.bungee.api.CommandSender
                        /**
                         * The permission to check.
                         */
                        // @ts-ignore
                        public getPermission(): string
                        /**
                         * The outcome of this permission check.
                         */
                        // @ts-ignore
                        public setHasPermission(hasPermission: boolean): void
                        // @ts-ignore
                        public toString(): string
                        // @ts-ignore
                        public equals(o: java.lang.Object | any): boolean
                        // @ts-ignore
                        canEqual(other: java.lang.Object | any): boolean
                        // @ts-ignore
                        public hashCode(): number /*int*/
                    }
                }
            }
        }
    }
}
