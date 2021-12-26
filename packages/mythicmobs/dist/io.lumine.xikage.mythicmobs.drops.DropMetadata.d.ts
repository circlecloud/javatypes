declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace drops {
                    // @ts-ignore
                    class DropMetadata extends java.lang.Object implements java.lang.Cloneable, io.lumine.xikage.mythicmobs.skills.placeholders.PlaceholderMeta {
                        // @ts-ignore
                        constructor(dropper: io.lumine.xikage.mythicmobs.skills.SkillCaster, killer: io.lumine.xikage.mythicmobs.adapters.AbstractEntity)
                        // @ts-ignore
                        public tick(): number /*int*/
                        // @ts-ignore
                        public getCaster(): io.lumine.xikage.mythicmobs.skills.SkillCaster
                        // @ts-ignore
                        public getTrigger(): io.lumine.xikage.mythicmobs.adapters.AbstractEntity
                        // @ts-ignore
                        public getDropper(): java.util.Optional<io.lumine.xikage.mythicmobs.skills.SkillCaster>
                        // @ts-ignore
                        public getCause(): java.util.Optional<io.lumine.xikage.mythicmobs.adapters.AbstractEntity>
                        // @ts-ignore
                        public getAmount(): number /*float*/
                        // @ts-ignore
                        public getGenerations(): number /*int*/
                        // @ts-ignore
                        public setAmount(amount: number /*float*/): void
                        // @ts-ignore
                        public setGenerations(generations: number /*int*/): void
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
