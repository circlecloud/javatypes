declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace drops {
                    // @ts-ignore
                    class DropManager extends java.lang.Object {
                        // @ts-ignore
                        constructor(core: io.lumine.xikage.mythicmobs.MythicMobs)
                        // @ts-ignore
                        public loadDropTables(): void
                        // @ts-ignore
                        public runSecondPass(): void
                        // @ts-ignore
                        public queueSecondPass(r: java.lang.Runnable): void
                        // @ts-ignore
                        public getDropTable(name: java.lang.String | string): java.util.Optional<io.lumine.xikage.mythicmobs.drops.DropTable>
                        // @ts-ignore
                        public getDropTables(): Array<io.lumine.xikage.mythicmobs.drops.DropTable>
                        // @ts-ignore
                        public static Drop(loc: Location, exp: number /*int*/, drops: java.util.List<ItemStack> | Array<ItemStack>): void
                    }
                }
            }
        }
    }
}
