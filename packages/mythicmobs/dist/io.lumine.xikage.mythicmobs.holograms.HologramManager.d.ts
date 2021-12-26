declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace holograms {
                    // @ts-ignore
                    class HologramManager extends java.lang.Object implements io.lumine.utils.terminable.Terminable {
                        // @ts-ignore
                        constructor(core: io.lumine.xikage.mythicmobs.MythicMobs, compat: io.lumine.xikage.mythicmobs.compatibility.CompatibilityManager)
                        // @ts-ignore
                        public terminate(): boolean
                        // @ts-ignore
                        public isActive(): boolean
                        // @ts-ignore
                        public createHologram(name: java.lang.String | string, location: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): io.lumine.xikage.mythicmobs.holograms.IHologram
                        // @ts-ignore
                        public createHologram(name: java.lang.String | string, location: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, text: java.lang.String | string): io.lumine.xikage.mythicmobs.holograms.IHologram
                        // @ts-ignore
                        public createNameplate(activeMob: io.lumine.xikage.mythicmobs.mobs.ActiveMob): io.lumine.xikage.mythicmobs.holograms.types.Nameplate
                        // @ts-ignore
                        public createHealthBar(activeMob: io.lumine.xikage.mythicmobs.mobs.ActiveMob): io.lumine.xikage.mythicmobs.holograms.types.HealthBar
                        // @ts-ignore
                        public createSpeechBubble(skillCaster: io.lumine.xikage.mythicmobs.skills.SkillCaster): io.lumine.xikage.mythicmobs.holograms.types.SpeechBubble
                    }
                }
            }
        }
    }
}
