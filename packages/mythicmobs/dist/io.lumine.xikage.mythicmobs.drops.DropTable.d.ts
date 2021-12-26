declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace drops {
                    // @ts-ignore
                    class DropTable extends java.lang.Object {
                        // @ts-ignore
                        constructor(file: java.lang.String | string, name: java.lang.String | string, mc: io.lumine.xikage.mythicmobs.io.MythicConfig)
                        // @ts-ignore
                        constructor(file: java.lang.String | string, name: java.lang.String | string, drops: java.util.List<java.lang.String | string> | Array<java.lang.String | string>)
                        // @ts-ignore
                        constructor(file: java.lang.String | string, name: java.lang.String | string, drops: java.util.List<java.lang.String | string> | Array<java.lang.String | string>, delayed: boolean)
                        // @ts-ignore
                        conditions: java.util.List<io.lumine.xikage.mythicmobs.skills.SkillCondition> | Array<io.lumine.xikage.mythicmobs.skills.SkillCondition>
                        // @ts-ignore
                        conditionsTrigger: java.util.List<io.lumine.xikage.mythicmobs.skills.SkillCondition> | Array<io.lumine.xikage.mythicmobs.skills.SkillCondition>
                        // @ts-ignore
                        public hasDrops(): boolean
                        // @ts-ignore
                        public generate(meta: io.lumine.xikage.mythicmobs.drops.DropMetadata): io.lumine.xikage.mythicmobs.drops.LootBag
                        // @ts-ignore
                        public getFileName(): string
                        // @ts-ignore
                        public getInternalName(): string
                    }
                }
            }
        }
    }
}
