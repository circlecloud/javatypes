declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    namespace mechanics {
                        // @ts-ignore
                        class SpeakMechanic extends io.lumine.xikage.mythicmobs.skills.auras.Aura implements io.lumine.xikage.mythicmobs.skills.INoTargetSkill, io.lumine.xikage.mythicmobs.skills.ITargetedEntitySkill {
                            // @ts-ignore
                            constructor(skill: java.lang.String | string, mlc: io.lumine.xikage.mythicmobs.io.MythicLineConfig)
                            // @ts-ignore
                            chatMessage: io.lumine.xikage.mythicmobs.skills.placeholders.parsers.PlaceholderString
                            // @ts-ignore
                            bubbleMessage: io.lumine.xikage.mythicmobs.skills.placeholders.parsers.PlaceholderString
                            // @ts-ignore
                            offset: number /*float*/
                            // @ts-ignore
                            radius: number /*int*/
                            // @ts-ignore
                            maxLineLength: number /*int*/
                            // @ts-ignore
                            animateWords: boolean
                            // @ts-ignore
                            animateLetters: boolean
                            // @ts-ignore
                            linePrefix: io.lumine.xikage.mythicmobs.skills.placeholders.parsers.PlaceholderString
                            // @ts-ignore
                            public cast(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata): boolean
                            // @ts-ignore
                            public castAtEntity(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata, target: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): boolean
                            // @ts-ignore
                            public sendChatSpeech(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata, message: java.lang.String | string): void
                        }
                    }
                }
            }
        }
    }
}
