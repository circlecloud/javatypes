declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    // @ts-ignore
                    class SkillMetadata extends java.lang.Object implements java.lang.Cloneable, io.lumine.xikage.mythicmobs.skills.placeholders.PlaceholderMeta {
                        // @ts-ignore
                        constructor(cause: io.lumine.xikage.mythicmobs.skills.SkillTrigger, am: io.lumine.xikage.mythicmobs.skills.SkillCaster, trigger: io.lumine.xikage.mythicmobs.adapters.AbstractEntity)
                        // @ts-ignore
                        constructor(cause: io.lumine.xikage.mythicmobs.skills.SkillTrigger, am: io.lumine.xikage.mythicmobs.skills.SkillCaster, trigger: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, origin: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, eTargets: java.util.HashSet<io.lumine.xikage.mythicmobs.adapters.AbstractEntity>, lTargets: java.util.HashSet<io.lumine.xikage.mythicmobs.adapters.AbstractLocation>, power: number /*float*/)
                        // @ts-ignore
                        constructor(source: io.lumine.xikage.mythicmobs.skills.SkillMetadata)
                        // @ts-ignore
                        public setOrigin(o: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): io.lumine.xikage.mythicmobs.skills.SkillMetadata
                        // @ts-ignore
                        public getIsAsync(): boolean
                        // @ts-ignore
                        public setIsAsync(b: boolean): io.lumine.xikage.mythicmobs.skills.SkillMetadata
                        // @ts-ignore
                        public getCallingEvent(): io.lumine.xikage.mythicmobs.skills.IParentSkill
                        // @ts-ignore
                        public setCallingEvent(caller: io.lumine.xikage.mythicmobs.skills.IParentSkill): void
                        // @ts-ignore
                        public cancelEvent(): void
                        // @ts-ignore
                        public getEntityTargets(): java.util.HashSet<io.lumine.xikage.mythicmobs.adapters.AbstractEntity>
                        // @ts-ignore
                        public setEntityTargets(targets: java.util.HashSet<io.lumine.xikage.mythicmobs.adapters.AbstractEntity>): io.lumine.xikage.mythicmobs.skills.SkillMetadata
                        // @ts-ignore
                        public setEntityTarget(target: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): io.lumine.xikage.mythicmobs.skills.SkillMetadata
                        // @ts-ignore
                        public getLocationTargets(): java.util.HashSet<io.lumine.xikage.mythicmobs.adapters.AbstractLocation>
                        // @ts-ignore
                        public setLocationTargets(targets: java.util.HashSet<io.lumine.xikage.mythicmobs.adapters.AbstractLocation>): io.lumine.xikage.mythicmobs.skills.SkillMetadata
                        // @ts-ignore
                        public setLocationTarget(target: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): io.lumine.xikage.mythicmobs.skills.SkillMetadata
                        // @ts-ignore
                        public setMetadata(key: java.lang.String | string, value: java.lang.Object | any): io.lumine.xikage.mythicmobs.skills.SkillMetadata
                        // @ts-ignore
                        public getMetadata(key: java.lang.String | string): java.util.Optional<java.lang.Object | any>
                        // @ts-ignore
                        public clone(): io.lumine.xikage.mythicmobs.skills.SkillMetadata
                        // @ts-ignore
                        public deepClone(): io.lumine.xikage.mythicmobs.skills.SkillMetadata
                        // @ts-ignore
                        public setCaster(caster: io.lumine.xikage.mythicmobs.skills.SkillCaster): void
                        // @ts-ignore
                        public setTrigger(entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): void
                        // @ts-ignore
                        public getCause(): io.lumine.xikage.mythicmobs.skills.SkillTrigger
                        // @ts-ignore
                        public getCaster(): io.lumine.xikage.mythicmobs.skills.SkillCaster
                        // @ts-ignore
                        public getTrigger(): io.lumine.xikage.mythicmobs.adapters.AbstractEntity
                        // @ts-ignore
                        public getOrigin(): io.lumine.xikage.mythicmobs.adapters.AbstractLocation
                        // @ts-ignore
                        public getVariables(): io.lumine.xikage.mythicmobs.skills.variables.VariableRegistry
                        // @ts-ignore
                        public getPower(): number /*float*/
                        // @ts-ignore
                        public setPower(power: number /*float*/): void
                    }
                }
            }
        }
    }
}
